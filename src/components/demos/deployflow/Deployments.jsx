import { IconRotateCcw } from './icons.jsx'
import { STATUS, formatDuration, shortSha, timeAgo } from './data.js'

export default function Deployments({ deployments, onRollback }) {
  const sorted = [...deployments].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
  const latestProdId = sorted.find((d) => d.environment === 'production' && d.status !== 'rolled-back')?.id

  return (
    <div className="dt-card">
      <div className="dt-eyebrow">Deployment history</div>
      {sorted.map((d) => {
        const status = STATUS[d.status] || STATUS.success
        return (
          <div className="dt-row" key={d.id}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', minWidth: 0 }}>
              <span style={{ width: '0.6rem', height: '0.6rem', borderRadius: '50%', background: status.color, flexShrink: 0 }} />
              <span style={{ overflow: 'hidden' }}>
                <span style={{ display: 'block', fontWeight: 700, fontSize: '0.85rem' }}>
                  {d.pipelineName} <span className="dt-tag" style={{ marginLeft: '0.4rem' }}>{d.environment}</span>
                </span>
                <span className="dt-stat-label" style={{ textTransform: 'none', letterSpacing: 0 }}>
                  {shortSha(d.version)} · {d.deployedBy} · {formatDuration(d.durationSec)} · {timeAgo(d.timestamp)}
                </span>
              </span>
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', flexShrink: 0 }}>
              <span style={{ fontWeight: 700, fontSize: '0.8rem', color: status.color }}>{status.label}</span>
              {d.id === latestProdId && (
                <button type="button" className="dt-btn dt-btn--ghost" style={{ padding: '0.4rem 0.8rem', fontSize: '0.72rem' }} onClick={() => onRollback(d)}>
                  <IconRotateCcw /> Rollback
                </button>
              )}
            </span>
          </div>
        )
      })}
    </div>
  )
}
