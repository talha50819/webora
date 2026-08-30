import { useState } from 'react'

const BEFORE = [
  { label: '3x oversized VPS', cost: 240 },
  { label: 'Idle staging DB', cost: 80 },
  { label: 'Manual backups', cost: 40 },
]
const AFTER = [
  { label: '2x right-sized EC2', cost: 60 },
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
    <div className="demo-theme--cloudcost dt-shell">
      <div className="dt-eyebrow">$ ledger --report monthly-spend</div>

      <div style={{ display: 'flex', gap: '2rem', marginBottom: '1.5rem' }}>
        <div>
          <div className="dt-stat-value">${beforeTotal} <span style={{ color: 'var(--dt-fg-soft)', fontSize: '1rem' }}>→</span> ${afterTotal}</div>
          <div className="dt-stat-label">Monthly infra cost</div>
        </div>
        <div>
          <div className="dt-stat-value" style={{ color: 'var(--dt-accent)' }}>−{savedPct}%</div>
          <div className="dt-stat-label">Cut in month one</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
        <button type="button" className="dt-btn" style={{ opacity: view === 'before' ? 1 : 0.4 }} onClick={() => setView('before')}>before.log</button>
        <button type="button" className="dt-btn" style={{ opacity: view === 'after' ? 1 : 0.4 }} onClick={() => setView('after')}>after.log</button>
      </div>

      <div className="dt-eyebrow">{view === 'before' ? '# original setup' : '# right-sized setup'}</div>
      {rows.map((r) => (
        <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
          <span style={{ width: '11rem', fontSize: '0.82rem', flexShrink: 0 }}>{r.label}</span>
          <div className="dt-bar-track">
            <div className="dt-bar-fill" style={{ width: `${(r.cost / maxCost) * 100}%` }} />
          </div>
          <span style={{ width: '4rem', textAlign: 'right', fontSize: '0.82rem', flexShrink: 0 }}>${r.cost}/mo</span>
        </div>
      ))}

      <div className="dt-card" style={{ marginTop: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
          <span>total, {view}.log</span>
          <span>${view === 'before' ? beforeTotal : afterTotal}/mo</span>
        </div>
      </div>
    </div>
  )
}
