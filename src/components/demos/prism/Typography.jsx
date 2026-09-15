const RATIOS = [
  { id: 1.2, label: 'Minor Third — 1.2' },
  { id: 1.25, label: 'Major Third — 1.25' },
  { id: 1.333, label: 'Perfect Fourth — 1.333' },
  { id: 1.5, label: 'Perfect Fifth — 1.5' },
  { id: 1.618, label: 'Golden Ratio — 1.618' },
]

const STEPS = [
  ['xs', -2],
  ['sm', -1],
  ['base', 0],
  ['lg', 1],
  ['xl', 2],
  ['2xl', 3],
  ['3xl', 4],
  ['4xl', 5],
]

export default function Typography({ baseSize, ratio, onBaseSizeChange, onRatioChange }) {
  return (
    <>
      <div className="dt-card" style={{ marginBottom: '1.25rem' }}>
        <div className="dt-eyebrow" style={{ marginBottom: '1rem' }}>Scale settings</div>
        <div className="dt-grid-2">
          <div>
            <label className="dt-label" htmlFor="pr-base-size">Base size — {baseSize}px</label>
            <input
              id="pr-base-size"
              type="range"
              min="14"
              max="20"
              value={baseSize}
              onChange={(e) => onBaseSizeChange(Number(e.target.value))}
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <label className="dt-label" htmlFor="pr-ratio">Scale ratio</label>
            <select id="pr-ratio" className="dt-select" value={ratio} onChange={(e) => onRatioChange(Number(e.target.value))}>
              {RATIOS.map((r) => (
                <option key={r.id} value={r.id}>{r.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="dt-card">
        <div className="dt-eyebrow" style={{ marginBottom: '1.25rem' }}>Preview</div>
        {STEPS.slice().reverse().map(([name, exp]) => {
          const size = baseSize * ratio ** exp
          return (
            <div key={name} style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1.1rem', flexWrap: 'wrap' }}>
              <span className="dt-tag" style={{ flexShrink: 0, width: '3rem', textAlign: 'center' }}>{name}</span>
              <span style={{ fontSize: `${size}px`, fontWeight: exp >= 3 ? 800 : exp >= 0 ? 700 : 500, lineHeight: 1.2 }}>
                The quick brown fox
              </span>
              <span className="dt-stat-label" style={{ marginLeft: 'auto', flexShrink: 0 }}>{size.toFixed(1)}px</span>
            </div>
          )
        })}
      </div>
    </>
  )
}
