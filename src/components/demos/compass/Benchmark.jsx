import RadarChart from './RadarChart.jsx'
import { BENCHMARK, CATEGORIES } from './data.js'

export default function Benchmark({ answers }) {
  return (
    <>
      <div className="dt-card" style={{ marginBottom: '1.25rem', textAlign: 'center' }}>
        <RadarChart
          categories={CATEGORIES}
          series={[
            { label: 'You', color: 'var(--dt-accent)', values: CATEGORIES.map((c) => answers[c.id] + 1) },
            { label: 'Typical team', color: '#8b899a', values: CATEGORIES.map((c) => BENCHMARK[c.id] + 1), fillOpacity: 0.08 },
          ]}
        />
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '0.5rem', fontSize: '0.78rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ width: '0.6rem', height: '0.6rem', borderRadius: '2px', background: 'var(--dt-accent)' }} /> You
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--dt-fg-soft)' }}>
            <span style={{ width: '0.6rem', height: '0.6rem', borderRadius: '2px', background: '#8b899a' }} /> Typical team
          </span>
        </div>
      </div>

      <div className="dt-card">
        <div className="dt-eyebrow" style={{ marginBottom: '0.4rem' }}>Category by category</div>
        <p className="dt-stat-label" style={{ marginBottom: '1.25rem', textTransform: 'none', letterSpacing: 0 }}>
          "Typical team" is an illustrative reference point for a mid-size engineering org, not live external
          data — useful for spotting where you're ahead or behind, not a precise benchmark.
        </p>
        {CATEGORIES.map((cat) => {
          const you = answers[cat.id] + 1
          const typical = BENCHMARK[cat.id] + 1
          return (
            <div key={cat.id} style={{ marginBottom: '1.1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.4rem' }}>
                <span style={{ fontWeight: 600 }}>{cat.label}</span>
                <span className="dt-stat-label" style={{ marginBottom: 0 }}>{you}/5 vs {typical}/5 typical</span>
              </div>
              <div style={{ position: 'relative' }}>
                <div className="dt-bar-track" style={{ height: '0.6rem' }}>
                  <div className="dt-bar-fill" style={{ width: `${(you / 5) * 100}%` }} />
                </div>
                <div
                  title={`Typical team: ${typical}/5`}
                  style={{
                    position: 'absolute', top: '-3px', left: `${(typical / 5) * 100}%`,
                    width: '2px', height: '0.85rem', background: '#8b899a', transform: 'translateX(-1px)',
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
