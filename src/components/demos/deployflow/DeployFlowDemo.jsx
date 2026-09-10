import { useEffect, useRef, useState } from 'react'
import Pipelines from './Pipelines.jsx'
import Deployments from './Deployments.jsx'
import Environments from './Environments.jsx'
import Logs from './Logs.jsx'
import { IconActivity, IconLayers, IconRefreshCw, IconServer, IconTerminal } from './icons.jsx'
import { loadDeployFlowData, nowISO, resetDeployFlowData, saveDeployFlowData, uid } from './data.js'

const TABS = [
  { id: 'pipelines', label: 'Pipelines', icon: IconActivity },
  { id: 'deployments', label: 'Deployments', icon: IconLayers },
  { id: 'environments', label: 'Environments', icon: IconServer },
  { id: 'logs', label: 'Logs', icon: IconTerminal },
]

const COMMIT_MESSAGES = [
  'Fix flaky test in checkout flow',
  'Reduce cold start latency',
  'Add retry logic to webhook handler',
  'Refactor auth middleware',
  'Bump dependency versions',
  'Improve error logging',
  'Optimize database query',
]

function randomSha() {
  const chars = '0123456789abcdef'
  return [...Array(9)].map(() => chars[Math.floor(Math.random() * chars.length)]).join('')
}

export default function DeployFlowDemo() {
  const [tab, setTab] = useState('pipelines')
  const [data, setData] = useState(loadDeployFlowData)
  const [runningState, setRunningState] = useState(null)
  const timeouts = useRef([])

  useEffect(() => {
    saveDeployFlowData(data)
  }, [data])

  useEffect(() => () => timeouts.current.forEach(clearTimeout), [])

  function schedule(fn, ms) {
    const id = setTimeout(fn, ms)
    timeouts.current.push(id)
  }

  function appendLog(pipelineId, level, message) {
    setData((d) => ({ ...d, logs: [{ id: uid('log'), timestamp: nowISO(), level, pipelineId, message }, ...d.logs] }))
  }

  function finalizeRun(pipeline, success) {
    const commit = randomSha()
    const message = COMMIT_MESSAGES[Math.floor(Math.random() * COMMIT_MESSAGES.length)]
    const durationSec = 68 + Math.floor(Math.random() * 90)
    const timestamp = nowISO()
    setData((d) => ({
      ...d,
      pipelines: d.pipelines.map((p) =>
        p.id === pipeline.id
          ? { ...p, lastRun: { status: success ? 'success' : 'failed', commit, message, author: 'T. Siddiqui', durationSec, timestamp } }
          : p
      ),
      deployments: [
        {
          id: uid('dep'),
          pipelineId: pipeline.id,
          pipelineName: pipeline.name,
          environment: pipeline.environment,
          version: commit,
          status: success ? 'success' : 'failed',
          deployedBy: 'T. Siddiqui',
          timestamp,
          durationSec,
        },
        ...d.deployments,
      ],
    }))
    schedule(() => setRunningState(null), 1000)
  }

  function runPipeline(pipelineId) {
    if (runningState) return
    const pipeline = data.pipelines.find((p) => p.id === pipelineId)
    if (!pipeline) return

    setRunningState({ pipelineId, stage: 'build', failedStage: null })
    appendLog(pipelineId, 'info', `Build started for ${pipeline.name}`)

    schedule(() => {
      setRunningState((s) => (s ? { ...s, stage: 'test' } : s))
      appendLog(pipelineId, 'info', `Running test suite for ${pipeline.name}`)

      schedule(() => {
        const willFail = Math.random() < 0.18
        if (willFail) {
          setRunningState((s) => (s ? { ...s, failedStage: 'test' } : s))
          appendLog(pipelineId, 'error', `Tests failed for ${pipeline.name} — deploy aborted`)
          schedule(() => finalizeRun(pipeline, false), 1000)
          return
        }
        appendLog(pipelineId, 'success', `Tests passed for ${pipeline.name}`)
        setRunningState((s) => (s ? { ...s, stage: 'deploy' } : s))

        schedule(() => {
          appendLog(pipelineId, 'success', `Deployed ${pipeline.name} to ${pipeline.environment}`)
          finalizeRun(pipeline, true)
        }, 1400)
      }, 1500)
    }, 1300)
  }

  function rollback(deployment) {
    const timestamp = nowISO()
    setData((d) => ({
      ...d,
      deployments: [
        {
          id: uid('dep'),
          pipelineId: deployment.pipelineId,
          pipelineName: deployment.pipelineName,
          environment: deployment.environment,
          version: deployment.version,
          status: 'rolled-back',
          deployedBy: 'T. Siddiqui',
          timestamp,
          durationSec: 8,
        },
        ...d.deployments,
      ],
      logs: [
        { id: uid('log'), timestamp, level: 'warn', pipelineId: deployment.pipelineId, message: `Rolled back ${deployment.pipelineName} on ${deployment.environment}` },
        ...d.logs,
      ],
    }))
  }

  function resetAll() {
    timeouts.current.forEach(clearTimeout)
    timeouts.current = []
    setRunningState(null)
    setData(resetDeployFlowData())
    setTab('pipelines')
  }

  return (
    <div className="demo-theme--deployflow dt-shell df-shell">
      <div className="df-topbar">
        <div className="df-brand"><IconTerminal /> DeployFlow</div>
        <div className="df-nav" role="tablist">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button key={id} type="button" role="tab" aria-selected={tab === id} className={tab === id ? 'is-active' : ''} onClick={() => setTab(id)}>
              <Icon /> {label}
            </button>
          ))}
        </div>
        <button type="button" className="dt-icon-btn" aria-label="Reset demo data" title="Reset demo data" onClick={resetAll}>
          <IconRefreshCw />
        </button>
      </div>

      <div className="df-body">
        {tab === 'pipelines' && <Pipelines pipelines={data.pipelines} runningState={runningState} onRun={runPipeline} />}
        {tab === 'deployments' && <Deployments deployments={data.deployments} onRollback={rollback} />}
        {tab === 'environments' && <Environments environments={data.environments} />}
        {tab === 'logs' && <Logs logs={data.logs} pipelines={data.pipelines} />}

        <p className="dt-stat-label" style={{ marginTop: '1.5rem' }}>
          Demo data only, stored in this browser — "Run pipeline" is a timed simulation, nothing actually builds or deploys.
        </p>
      </div>
    </div>
  )
}
