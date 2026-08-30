import { useState } from 'react'

const BEFORE = [
  { label: '3× oversized VPS', cost: 240 },
  { label: 'Idle staging DB', cost: 80 },
  { label: 'Manual backups', cost: 40 },
]
const AFTER = [
  { label: '2× right-sized EC2', cost: 60 },
  { label: 'Managed RDS (reserved)', cost: 35 },
  { label: 'Automated snapshots', cost: 9 },
]

function total(rows) {
  return rows.reduce((sum, r) => sum + r.cost, 0)
}

export default function CloudCostDemo() {
  const [view, setView] = useState('before')
  const rows = view === 'before' ? BEFORE : AFTER
  const beforeTotal = total(BEFORE)
  const afterTotal = total(AFTER)
  const savedPct = Math.round((1 - afterTotal / beforeTotal) * 100)
  const maxCost = Math.max(...BEFORE.map((r) => r.cost))

  return (
    <div>
      <div className="demo-stats">
        <div>
          <div className="demo-stat__value">${beforeTotal}<span style={{ fontSize: '1rem', color: 'var(--ink-soft)' }}> → ${afterTotal}</span></div>
          <div className="demo-stat__label">Monthly infra cost</div>
        </div>
        <div>
          <div className="demo-stat__value" style={{ color: 'var(--accent)' }}>−{savedPct}%</div>
          <div className="demo-stat__label">Cut in month one</div>
        </div>
      </div>

      <div className="demo-toggle-group">
        <button type="button" className={view === 'before' ? 'active' : ''} onClick={() => setView('before')}>Before</button>
        <button type="button" className={view === 'after' ? 'active' : ''} onClick={() => setView('after')}>After</button>
      </div>

      <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>
        {view === 'before' ? 'Original setup' : 'Right-sized setup'}
      </div>
      {rows.map((r) => (
        <div className="demo-bar-row" key={r.label}>
          <span className="demo-bar-row__label">{r.label}</span>
          <div className="demo-bar-track">
            <div
              className={`demo-bar-fill ${view === 'after' ? 'demo-bar-fill--lime' : ''}`}
              style={{ width: `${(r.cost / maxCost) * 100}%` }}
            />
          </div>
          <span className="demo-bar-row__value">${r.cost}/mo</span>
        </div>
      ))}
      <div className="demo-cart" style={{ marginTop: 'var(--space-2)' }}>
        <div className="demo-cart__total" style={{ borderTop: 'none', marginTop: 0, paddingTop: 0 }}>
          <span>Total, {view}</span>
          <span>${view === 'before' ? beforeTotal : afterTotal}/mo</span>
        </div>
      </div>
    </div>
  )
}
