import { CATEGORIES } from './data.js'

export default function Assessment({ answers, onChange }) {
  return (
    <>
      <p style={{ color: 'var(--dt-fg-soft)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: '48rem' }}>
        Six questions, rated honestly rather than aspirationally — the roadmap in the next tab is only as
        useful as these answers are. There's no wrong score here, only the one that matches reality today.
      </p>

      {CATEGORIES.map((cat) => (
        <div className="dt-card" key={cat.id} style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.3rem', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div style={{ fontWeight: 700 }}>{cat.label}</div>
            <div className="dt-stat-value" style={{ fontSize: '1.1rem' }}>{cat.levels[answers[cat.id]]}</div>
          </div>
          <p className="dt-stat-label" style={{ marginBottom: '0.9rem', textTransform: 'none', letterSpacing: 0 }}>{cat.question}</p>
          <input
            type="range"
            min="0"
            max="4"
            step="1"
            value={answers[cat.id]}
            onChange={(e) => onChange(cat.id, Number(e.target.value))}
            style={{ width: '100%' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.4rem' }}>
            <span className="dt-stat-label">{cat.levels[0]}</span>
            <span className="dt-stat-label">{cat.levels[4]}</span>
          </div>
        </div>
      ))}
    </>
  )
}
