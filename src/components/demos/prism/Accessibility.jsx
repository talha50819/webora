import { useState } from 'react'
import { IconCheck, IconX } from './icons.jsx'
import { contrastRatio } from './colorMath.js'

const TARGETS = [
  ['Normal text — AA', 4.5],
  ['Normal text — AAA', 7],
  ['Large text — AA', 3],
  ['Large text — AAA', 4.5],
]

function ResultRow({ label, threshold, ratio }) {
  const pass = ratio >= threshold
  return (
    <div className="dt-row">
      <span style={{ fontSize: '0.85rem' }}>{label} (needs {threshold}:1)</span>
      <span
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
          fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.6rem', borderRadius: '4px',
          background: pass ? 'rgba(74, 222, 128, 0.16)' : 'rgba(248, 113, 113, 0.16)',
          color: pass ? '#4ade80' : '#f87171',
        }}
      >
        {pass ? <IconCheck /> : <IconX />} {pass ? 'Pass' : 'Fail'}
      </span>
    </div>
  )
}

export default function Accessibility({ baseColor }) {
  const [fg, setFg] = useState('#ffffff')
  const [bg, setBg] = useState(baseColor)
  const ratio = contrastRatio(fg, bg)

  return (
    <div className="dt-grid-2" style={{ alignItems: 'start' }}>
      <div className="dt-card">
        <div className="dt-eyebrow" style={{ marginBottom: '1rem' }}>Pick two colors</div>
        <label className="dt-label" htmlFor="pr-fg">Text color</label>
        <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1rem' }}>
          <input type="color" value={fg} onChange={(e) => setFg(e.target.value)} style={{ width: '2.8rem', height: '2.8rem', border: 'var(--dt-border)', borderRadius: 'var(--dt-radius-sm)', padding: '2px', background: 'none' }} />
          <input id="pr-fg" className="dt-input" type="text" value={fg} onChange={(e) => setFg(e.target.value)} style={{ fontFamily: 'var(--dt-font-mono)' }} />
        </div>
        <label className="dt-label" htmlFor="pr-bg">Background color</label>
        <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.25rem' }}>
          <input type="color" value={bg} onChange={(e) => setBg(e.target.value)} style={{ width: '2.8rem', height: '2.8rem', border: 'var(--dt-border)', borderRadius: 'var(--dt-radius-sm)', padding: '2px', background: 'none' }} />
          <input id="pr-bg" className="dt-input" type="text" value={bg} onChange={(e) => setBg(e.target.value)} style={{ fontFamily: 'var(--dt-font-mono)' }} />
        </div>

        <div style={{ background: bg, color: fg, borderRadius: 'var(--dt-radius-sm)', padding: '1.5rem', textAlign: 'center' }}>
          <div style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.4rem' }}>Large text preview</div>
          <div style={{ fontSize: '0.9rem' }}>Normal text preview — the quick brown fox jumps over the lazy dog.</div>
        </div>
      </div>

      <div className="dt-card">
        <div className="dt-eyebrow" style={{ marginBottom: '0.4rem' }}>Contrast ratio</div>
        <div style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '1.25rem' }}>{ratio.toFixed(2)}<span style={{ fontSize: '1.1rem', color: 'var(--dt-fg-soft)' }}>:1</span></div>

        {TARGETS.map(([label, threshold]) => (
          <ResultRow key={label} label={label} threshold={threshold} ratio={ratio} />
        ))}

        <p className="dt-stat-label" style={{ marginTop: '1rem' }}>
          Computed with the real WCAG 2.1 relative-luminance formula — the same math browsers' own accessibility inspectors use.
        </p>
      </div>
    </div>
  )
}
