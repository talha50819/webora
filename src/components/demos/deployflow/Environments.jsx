import { IconExternalLink } from './icons.jsx'
import { STATUS, shortSha } from './data.js'

function Meter({ label, pct }) {
  const color = pct >= 80 ? STATUS.failed.color : pct >= 60 ? STATUS.degraded.color : 'var(--dt-accent)'
  return (
    <div style={{ marginBottom: '0.6rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', marginBottom: '0.3rem' }}>
        <span className="dt-stat-label" style={{ marginBottom: 0 }}>{label}</span>
        <span style={{ fontWeight: 700 }}>{pct}%</span>
      </div>
      <div className="dt-bar-track" style={{ height: '0.5rem' }}>
        <div className="dt-bar-fill" style={{ width: `${pct}%`, background: color }} />
      </div>
    </div>
  )
}

export default function Environments({ environments }) {
  return (
    <div className="dt-grid-3">
      {environments.map((env) => {
        const status = STATUS[env.status]
        return (
          <div className="dt-card" key={env.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.9rem' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.3rem' }}>{env.name}</div>
                <a href={`https://${env.url}`} onClick={(e) => e.preventDefault()} className="dt-stat-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', textTransform: 'none', letterSpacing: 0, cursor: 'pointer' }}>
                  {env.url} <IconExternalLink />
                </a>
              </div>
              <span className="dt-badge" style={{ background: `color-mix(in srgb, ${status.color} 20%, transparent)`, color: status.color }}>
                {status.label}
              </span>
            </div>

            <Meter label="CPU" pct={env.cpuPct} />
            <Meter label="Memory" pct={env.memPct} />

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.9rem', paddingTop: '0.75rem', borderTop: 'var(--dt-border)' }}>
              <div>
                <div className="dt-stat-label">Uptime</div>
                <div style={{ fontWeight: 700 }}>{env.uptimePct}%</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="dt-stat-label">Version</div>
                <div style={{ fontWeight: 700, fontFamily: 'var(--dt-font-mono)' }}>{shortSha(env.version)}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
