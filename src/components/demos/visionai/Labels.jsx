import { useEffect, useMemo, useState } from 'react'
import { IconSearch } from './icons.jsx'
import { loadImagenetClasses } from './model.js'

export default function Labels() {
  const [classes, setClasses] = useState(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    let cancelled = false
    loadImagenetClasses().then((list) => {
      if (!cancelled) setClasses(list)
    })
    return () => {
      cancelled = true
    }
  }, [])

  const filtered = useMemo(() => {
    if (!classes) return []
    const q = search.trim().toLowerCase()
    if (!q) return classes
    return classes.filter((c) => c.label.toLowerCase().includes(q))
  }, [classes, search])

  return (
    <div className="dt-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', gap: '0.75rem', flexWrap: 'wrap' }}>
        <div className="dt-eyebrow" style={{ marginBottom: 0 }}>1,000 classes this model recognizes</div>
        <div style={{ position: 'relative', flex: 1, minWidth: '12rem', maxWidth: '18rem' }}>
          <span style={{ position: 'absolute', left: '0.7rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--dt-fg-soft)' }}>
            <IconSearch />
          </span>
          <input
            className="dt-input"
            style={{ paddingLeft: '2.1rem' }}
            type="text"
            placeholder="Search labels…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {!classes ? (
        <p style={{ color: 'var(--dt-fg-soft)', fontSize: '0.85rem' }}>Loading label list…</p>
      ) : (
        <>
          <p className="dt-stat-label" style={{ marginBottom: '0.9rem' }}>{filtered.length} match{filtered.length === 1 ? '' : 'es'}</p>
          <div style={{ maxHeight: '24rem', overflowY: 'auto' }}>
            <div className="dt-grid-3">
              {filtered.slice(0, 300).map((c) => (
                <div key={c.id} style={{ fontSize: '0.78rem', padding: '0.4rem 0', borderBottom: 'var(--dt-border)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={c.label}>
                  {c.label.split(',')[0]}
                </div>
              ))}
            </div>
            {filtered.length > 300 && (
              <p className="dt-stat-label" style={{ marginTop: '0.9rem' }}>+{filtered.length - 300} more — narrow your search to see them.</p>
            )}
          </div>
        </>
      )}
    </div>
  )
}
