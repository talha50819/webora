import RadarChart from './RadarChart.jsx'
import { CATEGORIES, maturityBand, overallScore, recommendationFor } from './data.js'

export default function Roadmap({ answers }) {
  const score = overallScore(answers)
  const [, bandLabel, bandDesc] = maturityBand(score)

  const ranked = [...CATEGORIES]
    .map((cat) => ({ ...cat, level: answers[cat.id], score: answers[cat.id] + 1 }))
    .sort((a, b) => a.score - b.score)

  return (
    <>
      <div className="dt-grid-2" style={{ marginBottom: '1.25rem', alignItems: 'center' }}>
        <div className="dt-card" style={{ textAlign: 'center' }}>
          <RadarChart
            categories={CATEGORIES}
            series={[{ label: 'You', color: 'var(--dt-accent)', values: CATEGORIES.map((c) => answers[c.id] + 1) }]}
          />
        </div>
        <div className="dt-card">
          <div className="dt-stat-label">Overall maturity</div>
          <div className="dt-stat-value" style={{ fontSize: '2.2rem', margin: '0.3rem 0' }}>{bandLabel}</div>
          <div style={{ fontWeight: 700, marginBottom: '0.6rem' }}>{score.toFixed(1)} / 5.0</div>
          <p style={{ fontSize: '0.85rem', color: 'var(--dt-fg-soft)', lineHeight: 1.6 }}>{bandDesc}</p>
        </div>
      </div>

      <div className="dt-eyebrow" style={{ marginBottom: '1rem' }}>Prioritized roadmap — weakest areas first</div>
      {ranked.map((cat, i) => (
        <div className="dt-card" key={cat.id} style={{ marginBottom: '0.85rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', gap: '0.75rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <span className="type-mono" style={{ color: 'var(--dt-fg-soft)', fontFamily: 'var(--dt-font-mono)', fontSize: '0.75rem' }}>{String(i + 1).padStart(2, '0')}</span>
              <span style={{ fontWeight: 700 }}>{cat.label}</span>
            </span>
            <span className="dt-tag">{cat.score}/5 — {cat.levels[cat.level]}</span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--dt-fg-soft)', lineHeight: 1.6 }}>
            {recommendationFor(cat.id, cat.level)}
          </p>
        </div>
      ))}
    </>
  )
}
