import { useState } from 'react'
import { IconGrid, IconChart, IconClipboard, IconBell } from './icons.jsx'

const CATEGORIES = [
  { label: 'Compute', before: 240, after: 60 },
  { label: 'Database', before: 80, after: 35 },
  { label: 'Backups & storage', before: 40, after: 9 },
  { label: 'Networking', before: 26, after: 14 },
]

function total(key) {
  return CATEGORIES.reduce((sum, c) => sum + c[key], 0)
}

export default function CloudCostDemo() {
  const [view, setView] = useState('before')
  const beforeTotal = total('before')
  const afterTotal = total('after')
  const savedPct = Math.round((1 - afterTotal / beforeTotal) * 100)
  const maxCost = Math.max(...CATEGORIES.map((c) => c.before))

  return (
    <div className="demo-theme--cloudcost dt-shell dt-shell--app">
      <aside className="dt-sidebar">
        <div className="dt-sidebar__brand"><IconChart /> Ledger</div>
        <div className="dt-sidebar__item dt-sidebar__item--active"><IconGrid /> Overview</div>
        <div className="dt-sidebar__item"><IconClipboard /> Reports</div>
        <div className="dt-sidebar__item"><IconChart /> Forecasts</div>
      </aside>

      <div className="dt-main">
        <div className="dt-topbar">
          <div className="dt-topbar__title">$ ledger --report monthly-spend</div>
          <div className="dt-topbar__right">
            <IconBell />
            <img className="dt-avatar" src="https://i.pravatar.cc/64?u=ledger-finops" alt="FinOps lead" width="32" height="32" />
          </div>
        </div>

        <div className="dt-kpi-row">
          <div className="dt-card">
            <div className="dt-stat-value">${beforeTotal}</div>
            <div className="dt-stat-label">Before / mo</div>
          </div>
          <div className="dt-card">
            <div className="dt-stat-value">${afterTotal}</div>
            <div className="dt-stat-label">After / mo</div>
          </div>
          <div className="dt-card">
            <div className="dt-stat-value" style={{ color: 'var(--dt-accent)' }}>−{savedPct}%</div>
            <div className="dt-stat-label">Cut in month one</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div className="dt-eyebrow" style={{ marginBottom: 0 }}># spend by category</div>
          <div className="dt-segmented">
            <button type="button" className={view === 'before' ? 'is-active' : ''} onClick={() => setView('before')}>before.log</button>
            <button type="button" className={view === 'after' ? 'is-active' : ''} onClick={() => setView('after')}>after.log</button>
          </div>
        </div>

        <div className="dt-card" style={{ marginBottom: '1rem' }}>
          {CATEGORIES.map((c) => {
            const cost = c[view]
            return (
              <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.9rem' }}>
                <span style={{ width: '9.5rem', fontSize: '0.82rem', flexShrink: 0 }}>{c.label}</span>
                <div className="dt-bar-track">
                  <div className="dt-bar-fill" style={{ width: `${(cost / maxCost) * 100}%` }} />
                </div>
                <span style={{ width: '4rem', textAlign: 'right', fontSize: '0.82rem', flexShrink: 0 }}>${cost}/mo</span>
              </div>
            )
          })}
        </div>

        <div className="dt-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
            <span>total, {view}.log</span>
            <span>${view === 'before' ? beforeTotal : afterTotal}/mo</span>
          </div>
        </div>
      </div>
    </div>
  )
}
