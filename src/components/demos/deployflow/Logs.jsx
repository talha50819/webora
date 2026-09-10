import { useMemo, useState } from 'react'
import { formatClock } from './data.js'

const LEVEL_COLOR = { info: 'var(--dt-fg-soft)', success: '#4ade80', warn: '#fbbf24', error: '#f87171' }
const LEVEL_TAG = { info: 'INFO', success: ' OK ', warn: 'WARN', error: 'FAIL' }

export default function Logs({ logs, pipelines }) {
  const [filter, setFilter] = useState('all')

  const filtered = useMemo(
    () => (filter === 'all' ? logs : logs.filter((l) => l.pipelineId === filter)),
    [logs, filter]
  )

  return (
    <div className="dt-card" style={{ padding: 0, overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.9rem 1rem', borderBottom: 'var(--dt-border)' }}>
        <div className="dt-eyebrow" style={{ marginBottom: 0 }}>$ tail -f deployflow.log</div>
        <select className="dt-select" style={{ width: 'auto', minWidth: '9rem', padding: '0.4rem 0.7rem', fontSize: '0.75rem' }} value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All pipelines</option>
          {pipelines.map((p) => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>
      </div>
      <div style={{ padding: '0.9rem 1rem', maxHeight: '26rem', overflowY: 'auto', fontFamily: 'var(--dt-font-mono)', fontSize: '0.78rem', lineHeight: 1.9 }}>
        {filtered.length === 0 && <div style={{ color: 'var(--dt-fg-soft)' }}>No log lines for this filter.</div>}
        {filtered.map((l) => (
          <div key={l.id} style={{ display: 'flex', gap: '0.7rem', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
            <span style={{ color: 'var(--dt-fg-soft)', flexShrink: 0 }}>{formatClock(l.timestamp)}</span>
            <span style={{ color: LEVEL_COLOR[l.level], fontWeight: 700, flexShrink: 0 }}>{LEVEL_TAG[l.level] || 'INFO'}</span>
            <span>{l.message}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
