import { useEffect, useState } from 'react'
import CopyButton from './CopyButton.jsx'
import { hashText } from './crypto.js'

const ALGOS = [
  { id: 'SHA-256', label: 'SHA-256' },
  { id: 'SHA-384', label: 'SHA-384' },
  { id: 'SHA-512', label: 'SHA-512' },
]

export default function Hash() {
  const [text, setText] = useState('The quick brown fox jumps over the lazy dog')
  const [algo, setAlgo] = useState('SHA-256')
  const [digest, setDigest] = useState('')

  useEffect(() => {
    let cancelled = false
    if (!text) {
      setDigest('')
      return
    }
    hashText(text, algo).then((h) => {
      if (!cancelled) setDigest(h)
    })
    return () => {
      cancelled = true
    }
  }, [text, algo])

  return (
    <>
      <div className="dt-card" style={{ marginBottom: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
          <label className="dt-label" htmlFor="cb-hash-input" style={{ marginBottom: 0 }}>Input</label>
          <div className="dt-segmented">
            {ALGOS.map((a) => (
              <button key={a.id} type="button" className={algo === a.id ? 'is-active' : ''} onClick={() => setAlgo(a.id)}>
                {a.label}
              </button>
            ))}
          </div>
        </div>
        <textarea
          id="cb-hash-input"
          className="dt-input cb-textarea"
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type anything — the digest updates as you type"
        />
      </div>

      <div className="dt-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
          <div className="dt-eyebrow" style={{ marginBottom: 0 }}>{algo} digest</div>
          <CopyButton value={digest} />
        </div>
        <div className="cb-output">{digest || '—'}</div>
      </div>
    </>
  )
}
