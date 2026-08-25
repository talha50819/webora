import { useEffect, useMemo, useRef, useState } from 'react'
import Hls from 'hls.js'
import { useSEO } from '../hooks/useSEO.js'
import { siteRoutes, liveTvFaqs } from '../data/seo-content.js'

const ITEMS_PER_PAGE = 40
const STREAM_TIMEOUT_MS = 10000

const CHANNELS_URL = 'https://iptv-org.github.io/api/channels.json'
const STREAMS_URL = 'https://iptv-org.github.io/api/streams.json'
const LOGOS_URL = 'https://iptv-org.github.io/api/logos.json'
const COUNTRIES_URL = 'https://iptv-org.github.io/api/countries.json'

export default function LiveTV() {
  useSEO(siteRoutes.liveTv)

  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(null)
  const [channels, setChannels] = useState([])
  const [categories, setCategories] = useState([])
  const [countries, setCountries] = useState([])

  const [search, setSearch] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('')
  const [countryFilter, setCountryFilter] = useState('')
  const [page, setPage] = useState(1)

  const [playing, setPlaying] = useState(null) // { id, name, country, category }
  const [status, setStatus] = useState('idle') // idle | connecting | playing | buffering | error
  const [statusNote, setStatusNote] = useState('')

  const videoRef = useRef(null)
  const hlsRef = useRef(null)
  const timeoutRef = useRef(null)
  const streamsByChannelRef = useRef(new Map())
  const attemptRef = useRef({ streams: [], index: 0 })
  const filteredChannelsRef = useRef([])
  const playingIdRef = useRef(null)

  // --- Fetch the channel/stream index once, client-side. This page is the
  // only thing on the site that touches it, so it's kept off the main
  // bundle and the ~20MB combined payload only loads for someone who
  // actually opens Live TV. feeds.json is deliberately not fetched — the
  // original page pulled it but never used it for anything.
  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const [channelsRes, streamsRes, logosRes, countriesRes] = await Promise.all([
          fetch(CHANNELS_URL),
          fetch(STREAMS_URL),
          fetch(LOGOS_URL),
          fetch(COUNTRIES_URL),
        ])
        if (!channelsRes.ok || !streamsRes.ok || !logosRes.ok || !countriesRes.ok) {
          throw new Error('Failed to load TV channel data')
        }
        const [channelsData, streamsData, logosData, countriesData] = await Promise.all([
          channelsRes.json(),
          streamsRes.json(),
          logosRes.json(),
          countriesRes.json(),
        ])
        if (cancelled) return

        const streamsByChannel = new Map()
        streamsData.forEach((s) => {
          if (!s.channel) return
          if (!streamsByChannel.has(s.channel)) streamsByChannel.set(s.channel, [])
          streamsByChannel.get(s.channel).push(s)
        })

        const logoMap = new Map()
        logosData.forEach((logo) => {
          if (logo.channel && !logoMap.has(logo.channel)) logoMap.set(logo.channel, logo.url)
        })

        const countryNameMap = new Map(countriesData.map((c) => [c.code.toUpperCase(), c.name]))

        let withStreams = channelsData.filter((ch) => (streamsByChannel.get(ch.id) || []).length > 0)
        withStreams.forEach((ch) => {
          ch.logo = logoMap.get(ch.id)
        })
        withStreams.sort(
          (a, b) => (streamsByChannel.get(b.id)?.length || 0) - (streamsByChannel.get(a.id)?.length || 0),
        )

        const categorySet = new Set()
        const countryCodeSet = new Set()
        withStreams.forEach((ch) => {
          ch.categories?.forEach((cat) => {
            if (cat.toLowerCase() === 'xxx') return
            const expanded = cat.length === 2 ? countryNameMap.get(cat.toUpperCase()) || cat : cat
            categorySet.add(expanded)
          })
          if (ch.country) countryCodeSet.add(ch.country.toUpperCase())
        })

        streamsByChannelRef.current = streamsByChannel
        setChannels(withStreams)
        setCategories(Array.from(categorySet).sort())
        setCountries(
          Array.from(countryCodeSet)
            .map((code) => ({ code, name: countryNameMap.get(code) || code }))
            .sort((a, b) => a.name.localeCompare(b.name)),
        )
        setLoading(false)
      } catch (e) {
        if (!cancelled) {
          setLoadError('Could not load the channel list. The channel index may be temporarily unavailable — try refreshing.')
          setLoading(false)
        }
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  const countryNameMap = useMemo(() => new Map(countries.map((c) => [c.code, c.name])), [countries])

  const filteredChannels = useMemo(() => {
    const term = search.trim().toLowerCase()
    return channels.filter((ch) => {
      const catsStr = (ch.categories || []).join(',')
      const countryName = (countryNameMap.get(ch.country) || ch.country || '').toLowerCase()
      const matchesSearch =
        !term ||
        ch.name.toLowerCase().includes(term) ||
        catsStr.toLowerCase().includes(term) ||
        countryName.includes(term)
      const matchesCategory = !categoryFilter || catsStr.includes(categoryFilter)
      const matchesCountry = !countryFilter || ch.country === countryFilter
      return matchesSearch && matchesCategory && matchesCountry
    })
  }, [channels, search, categoryFilter, countryFilter, countryNameMap])

  useEffect(() => {
    filteredChannelsRef.current = filteredChannels
  }, [filteredChannels])

  useEffect(() => {
    setPage(1)
  }, [search, categoryFilter, countryFilter])

  const totalPages = Math.max(1, Math.ceil(filteredChannels.length / ITEMS_PER_PAGE))
  const clampedPage = Math.min(page, totalPages)
  const pageChannels = filteredChannels.slice(
    (clampedPage - 1) * ITEMS_PER_PAGE,
    clampedPage * ITEMS_PER_PAGE,
  )

  // --- Playback: imperative on purpose. hls.js and <video> are driven
  // through refs so the retry chain (next stream, then next channel) doesn't
  // fight React's render cycle — state is only touched to update the visible
  // status badge and "now playing" info.
  function cleanupPlayback() {
    clearTimeout(timeoutRef.current)
    if (hlsRef.current) {
      hlsRef.current.destroy()
      hlsRef.current = null
    }
    const video = videoRef.current
    if (video) {
      video.pause()
      video.removeAttribute('src')
      video.onwaiting = null
      video.onstalled = null
      video.onplaying = null
      video.onerror = null
      video.load()
    }
  }

  useEffect(() => () => cleanupPlayback(), [])

  function playChannel(channel) {
    const list = streamsByChannelRef.current.get(channel.id) || []
    // playingIdRef drives the fallback logic below and is set synchronously —
    // setPlaying (for the on-screen "Now Playing" info) is async/batched, so
    // reading `playing` state instead here would race: if this channel's
    // streams fail before React re-renders, advanceToNextChannel would still
    // see the *previous* channel's id and skip from the wrong place.
    playingIdRef.current = channel.id
    setPlaying({
      id: channel.id,
      name: channel.name,
      country: channel.country,
      category: channel.categories?.[0] || 'Unknown',
    })
    attemptRef.current = { streams: list, index: 0 }
    tryCurrentStream()
  }

  function advanceToNextChannel() {
    const list = filteredChannelsRef.current
    const currentIndex = list.findIndex((ch) => ch.id === playingIdRef.current)
    const next = list[currentIndex + 1]
    if (next) {
      playChannel(next)
    } else {
      setStatus('error')
      setStatusNote('Reached the end of the channel list')
    }
  }

  function tryCurrentStream() {
    const { streams, index } = attemptRef.current
    if (index >= streams.length) {
      setStatusNote('All streams failed for this channel — switching...')
      advanceToNextChannel()
      return
    }

    const url = streams[index].url
    cleanupPlayback()
    setStatus('connecting')
    setStatusNote(streams.length > 1 ? `Trying stream ${index + 1}/${streams.length}...` : 'Loading...')

    const video = videoRef.current
    if (!video) return

    const onFail = () => {
      attemptRef.current.index += 1
      tryCurrentStream()
    }

    timeoutRef.current = setTimeout(onFail, STREAM_TIMEOUT_MS)

    video.onwaiting = () => setStatus('buffering')
    video.onstalled = () => setStatus('buffering')
    video.onplaying = () => {
      clearTimeout(timeoutRef.current)
      setStatus('playing')
      setStatusNote('')
    }
    video.onerror = onFail

    if (Hls.isSupported()) {
      const hls = new Hls()
      hlsRef.current = hls
      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (data.fatal) onFail()
      })
      hls.loadSource(url)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {})
      })
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = url
      video.play().catch(() => {})
    } else {
      onFail()
    }
  }

  function resetFilters() {
    setSearch('')
    setCategoryFilter('')
    setCountryFilter('')
  }

  const statusLabel = {
    connecting: 'Connecting…',
    playing: 'Live',
    buffering: 'Buffering…',
    error: 'Failed',
  }[status]

  return (
    <>
      <section className="hero container" style={{ paddingBottom: 'var(--space-4)' }}>
        <div className="hero__label eyebrow">Live TV</div>
        <h1 className="type-h1" style={{ maxWidth: '20ch' }}>
          Thousands of free live channels, worldwide.
        </h1>
        <p className="type-lede mt-4">
          Search and filter by country and category, then press play. No subscription, no account.
        </p>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container">
          {loadError && (
            <div className="tv-alert" role="alert">
              {loadError}
            </div>
          )}

          {loading ? (
            <div className="tv-loading">
              <div className="tv-loading__spinner" />
              <p className="type-mono">Loading channel index…</p>
            </div>
          ) : (
            !loadError && (
              <>
                <div className="tv-player">
                  <video ref={videoRef} className="tv-player__video" controls playsInline />
                  {playing ? (
                    <div className="tv-player__info">
                      <div>
                        <div className="type-mono" style={{ color: 'var(--ink-soft)' }}>
                          Now Playing
                        </div>
                        <div className="tv-player__title">{playing.name}</div>
                      </div>
                      <div className="tv-player__meta">
                        <span className="tag">{countryNameMap.get(playing.country) || playing.country}</span>
                        <span className="tag">{playing.category}</span>
                        {statusLabel && (
                          <span className={`tv-badge tv-badge--${status}`}>{statusLabel}</span>
                        )}
                      </div>
                      {statusNote && <p className="type-mono tv-player__note">{statusNote}</p>}
                    </div>
                  ) : (
                    <div className="tv-player__placeholder">
                      <p className="type-mono">No channel selected — press Play on any channel below</p>
                    </div>
                  )}
                </div>

                <div className="tv-filters">
                  <div className="form-field">
                    <label htmlFor="tv-search">Search</label>
                    <input
                      id="tv-search"
                      type="text"
                      placeholder="Search channels..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="tv-category">Category</label>
                    <select id="tv-category" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                      <option value="">All categories</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-field">
                    <label htmlFor="tv-country">Country</label>
                    <select id="tv-country" value={countryFilter} onChange={(e) => setCountryFilter(e.target.value)}>
                      <option value="">All countries</option>
                      {countries.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-field">
                    <label>&nbsp;</label>
                    <button type="button" className="btn btn--ghost" onClick={resetFilters}>
                      Reset filters
                    </button>
                  </div>
                </div>

                <p className="type-mono tv-count">
                  Showing {filteredChannels.length === 0 ? 0 : (clampedPage - 1) * ITEMS_PER_PAGE + 1}–
                  {Math.min(clampedPage * ITEMS_PER_PAGE, filteredChannels.length)} of {filteredChannels.length}{' '}
                  channels
                </p>

                {pageChannels.length === 0 ? (
                  <div className="tv-empty">
                    <p className="type-mono">No channels match these filters.</p>
                  </div>
                ) : (
                  <div className="tv-grid">
                    {pageChannels.map((channel) => (
                      <div className="tv-card" key={channel.id}>
                        <div className="tv-card__logo">
                          {channel.logo ? (
                            <img
                              src={channel.logo}
                              alt={channel.name}
                              loading="lazy"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none'
                              }}
                            />
                          ) : (
                            <span className="type-mono">{channel.name.slice(0, 2).toUpperCase()}</span>
                          )}
                        </div>
                        <div className="tv-card__body">
                          <div className="tv-card__name">{channel.name}</div>
                          <div className="tag-list">
                            {channel.categories?.[0] && <span className="tag">{channel.categories[0]}</span>}
                            <span className="tag">
                              {countryNameMap.get(channel.country) || channel.country}
                            </span>
                          </div>
                          <button
                            type="button"
                            className="btn btn--solid tv-card__play"
                            onClick={() => playChannel(channel)}
                          >
                            {playing?.id === channel.id ? 'Playing →' : 'Play →'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {totalPages > 1 && (
                  <div className="tv-pagination">
                    <button
                      type="button"
                      className="btn btn--ghost"
                      disabled={clampedPage === 1}
                      onClick={() => {
                        setPage((p) => Math.max(1, p - 1))
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }}
                    >
                      ← Prev
                    </button>
                    <span className="type-mono">
                      Page {clampedPage} / {totalPages}
                    </span>
                    <button
                      type="button"
                      className="btn btn--ghost"
                      disabled={clampedPage === totalPages}
                      onClick={() => {
                        setPage((p) => Math.min(totalPages, p + 1))
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }}
                    >
                      Next →
                    </button>
                  </div>
                )}
              </>
            )
          )}
        </div>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>FAQ</div>
          <div className="faq-list">
            {liveTvFaqs.map((item, i) => (
              <details className="faq-item" key={item.q}>
                <summary className="faq-item__q">
                  <span className="capability-item__index">{String(i + 1).padStart(2, '0')}</span>
                  <span>{item.q}</span>
                </summary>
                <p className="faq-item__a">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
