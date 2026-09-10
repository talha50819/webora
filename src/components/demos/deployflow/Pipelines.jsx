import { IconCheck, IconGitBranch, IconPlay, IconX } from './icons.jsx'
import { STAGES, STATUS, formatDuration, shortSha, timeAgo } from './data.js'

const STAGE_LABEL = { build: 'Build', test: 'Test', deploy: 'Deploy' }

function StageTracker({ stage, failedStage }) {
  const currentIdx = STAGES.indexOf(stage)
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
      {STAGES.map((s, i) => {
        const isFailed = failedStage === s
        const isDone = !isFailed && i < currentIdx
        const isCurrent = !isFailed && i === currentIdx
        const bg = isFailed ? STATUS.failed.color : isDone || isCurrent ? 'var(--dt-accent)' : 'var(--dt-track)'
        return (
          <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: '1.35rem', height: '1.35rem', borderRadius: '50%', flexShrink: 0,
                background: bg, color: 'var(--dt-bg)',
                animation: isCurrent ? 'df-pulse 1s ease-in-out infinite' : 'none',
              }}
            >
              {isFailed ? <IconX /> : isDone ? <IconCheck /> : null}
            </span>
            <span className="dt-stat-label" style={{ color: isCurrent ? 'var(--dt-fg)' : undefined }}>{STAGE_LABEL[s]}</span>
            {i < STAGES.length - 1 && <span style={{ width: '1.1rem', height: '1px', background: 'var(--dt-track)' }} />}
          </div>
        )
      })}
    </div>
  )
}

export default function Pipelines({ pipelines, runningState, onRun }) {
  const passing = pipelines.filter((p) => p.lastRun.status === 'success').length
  const failing = pipelines.filter((p) => p.lastRun.status === 'failed').length
  const avgDuration = Math.round(pipelines.reduce((s, p) => s + p.lastRun.durationSec, 0) / Math.max(1, pipelines.length))

  return (
    <>
      <div className="dt-grid-3" style={{ marginBottom: '1.5rem' }}>
        <div className="dt-card">
          <div className="dt-stat-value" style={{ color: passing === pipelines.length ? STATUS.success.color : undefined }}>{passing}/{pipelines.length}</div>
          <div className="dt-stat-label">Pipelines passing</div>
        </div>
        <div className="dt-card">
          <div className="dt-stat-value" style={{ color: failing > 0 ? STATUS.failed.color : undefined }}>{failing}</div>
          <div className="dt-stat-label">Need attention</div>
        </div>
        <div className="dt-card">
          <div className="dt-stat-value">{formatDuration(avgDuration)}</div>
          <div className="dt-stat-label">Avg build time</div>
        </div>
      </div>

      {pipelines.map((p) => {
        const isRunning = runningState?.pipelineId === p.id
        const status = isRunning ? STATUS.running : STATUS[p.lastRun.status]
        return (
          <div className="dt-card" key={p.id} style={{ marginBottom: '0.85rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem', flexWrap: 'wrap' }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
                  <span style={{ width: '0.55rem', height: '0.55rem', borderRadius: '50%', background: status.color, flexShrink: 0 }} />
                  <span style={{ fontWeight: 700, fontFamily: 'var(--dt-font)' }}>{p.name}</span>
                  <span className="dt-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                    <IconGitBranch /> {p.branch}
                  </span>
                </div>
                <div className="dt-stat-label" style={{ textTransform: 'none', letterSpacing: 0 }}>
                  {p.repo} · {shortSha(p.lastRun.commit)} · {p.lastRun.message}
                </div>
              </div>
              <button
                type="button"
                className="dt-btn"
                disabled={Boolean(runningState)}
                onClick={() => onRun(p.id)}
                style={{ flexShrink: 0 }}
              >
                <IconPlay /> {isRunning ? 'Running…' : 'Run pipeline'}
              </button>
            </div>

            <div style={{ marginTop: '0.9rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.6rem' }}>
              {isRunning ? (
                <StageTracker stage={runningState.stage} failedStage={runningState.failedStage} />
              ) : (
                <span className="dt-stat-label">
                  {status.label} · {p.lastRun.author} · {formatDuration(p.lastRun.durationSec)} · {timeAgo(p.lastRun.timestamp)}
                </span>
              )}
            </div>
          </div>
        )
      })}
    </>
  )
}
