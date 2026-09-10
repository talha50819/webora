import { IconClock, IconTrash } from './icons.jsx'

export default function History({ history, onClear }) {
  if (history.length === 0) {
    return (
      <div className="dt-card" style={{ textAlign: 'center', padding: '2.5rem 1.5rem' }}>
        <IconClock />
        <p style={{ color: 'var(--dt-fg-soft)', fontSize: '0.85rem', marginTop: '0.75rem' }}>
          Nothing classified yet this session — results you run in the Classify tab show up here.
        </p>
      </div>
    )
  }

  return (
    <div className="dt-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
        <div className="dt-eyebrow" style={{ marginBottom: 0 }}>This session — {history.length} classified</div>
        <button type="button" className="dt-btn dt-btn--ghost" style={{ padding: '0.4rem 0.8rem', fontSize: '0.72rem' }} onClick={onClear}>
          <IconTrash /> Clear
        </button>
      </div>
      {history.map((h) => (
        <div className="dt-row" key={h.id}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', minWidth: 0 }}>
            {h.thumbnail ? (
              <img src={h.thumbnail} alt="" width="44" height="44" style={{ borderRadius: 'var(--dt-radius-sm)', objectFit: 'cover', flexShrink: 0 }} />
            ) : (
              <span style={{ width: '44px', height: '44px', borderRadius: 'var(--dt-radius-sm)', background: 'var(--dt-track)', flexShrink: 0 }} />
            )}
            <span style={{ overflow: 'hidden' }}>
              <span style={{ display: 'block', fontWeight: 700, fontSize: '0.85rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {h.topLabel.split(',')[0]}
              </span>
              <span className="dt-stat-label">{(h.confidence * 100).toFixed(1)}% confident · {h.ms.toFixed(0)}ms</span>
            </span>
          </span>
          <span className="dt-stat-label" style={{ flexShrink: 0 }}>
            {new Date(h.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      ))}
    </div>
  )
}
