import { IconCheck, IconX } from './icons.jsx'
import { contrastRatio, generateScale, wcagLevel } from './colorMath.js'

function LevelChip({ ratio, largeText }) {
  const level = wcagLevel(ratio, largeText)
  const pass = level !== 'Fail'
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
        fontSize: '0.66rem', fontWeight: 700, padding: '0.15rem 0.4rem', borderRadius: '4px',
        background: pass ? 'rgba(74, 222, 128, 0.16)' : 'rgba(248, 113, 113, 0.16)',
        color: pass ? '#4ade80' : '#f87171',
      }}
    >
      {pass ? <IconCheck /> : <IconX />} {largeText ? 'Large' : 'Normal'} {level}
    </span>
  )
}

export default function Colors({ baseColor, onChange }) {
  const scale = generateScale(baseColor)

  return (
    <>
      <div className="dt-card" style={{ marginBottom: '1.25rem' }}>
        <div className="dt-eyebrow" style={{ marginBottom: '1rem' }}>Base brand color</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', flexWrap: 'wrap' }}>
          <input
            type="color"
            value={baseColor}
            onChange={(e) => onChange(e.target.value)}
            style={{ width: '3.2rem', height: '3.2rem', border: 'var(--dt-border)', borderRadius: 'var(--dt-radius-sm)', padding: '2px', background: 'none', cursor: 'pointer' }}
          />
          <input
            className="dt-input"
            style={{ width: '9rem', fontFamily: 'var(--dt-font-mono)' }}
            type="text"
            value={baseColor}
            onChange={(e) => onChange(e.target.value)}
          />
          <p className="dt-stat-label" style={{ flex: 1, minWidth: '14rem' }}>
            Every shade below, and every colored element in this demo, is generated live from this one value.
          </p>
        </div>
      </div>

      <div className="dt-card">
        <div className="dt-eyebrow" style={{ marginBottom: '1rem' }}>Generated scale — 50 to 900</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(9rem, 1fr))', gap: '0.75rem' }}>
          {scale.map(({ step, hex }) => (
            <div key={step} style={{ border: 'var(--dt-border)', borderRadius: 'var(--dt-radius-sm)', overflow: 'hidden' }}>
              <div style={{ background: hex, height: '3.5rem' }} />
              <div style={{ padding: '0.6rem 0.7rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 700 }}>{step}</span>
                  <span className="dt-stat-label" style={{ marginBottom: 0, fontFamily: 'var(--dt-font-mono)' }}>{hex}</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                  <LevelChip ratio={contrastRatio(hex, '#ffffff')} largeText={false} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
