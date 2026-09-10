// DeployFlow — data model, seed dataset, and storage helpers.
//
// Same philosophy as Finora/HabitFlow: a portfolio sandbox, not a real
// CI/CD product. Nothing leaves the browser and no pipeline actually
// builds anything — "Run pipeline" (see DeployFlowDemo.jsx) is a timed
// simulation. Seed timestamps are generated relative to *now*, so the
// demo always looks current.

export const STAGES = ['build', 'test', 'deploy']

export const STATUS = {
  success: { label: 'Success', color: '#4ade80' },
  failed: { label: 'Failed', color: '#f87171' },
  running: { label: 'Running', color: '#38bdf8' },
  'rolled-back': { label: 'Rolled back', color: '#fbbf24' },
  healthy: { label: 'Healthy', color: '#4ade80' },
  degraded: { label: 'Degraded', color: '#fbbf24' },
}

let counter = 0
export function uid(prefix = 'id') {
  counter += 1
  return `${prefix}-${Date.now().toString(36)}-${counter}`
}

export function hoursAgoISO(h) {
  const d = new Date()
  d.setMinutes(d.getMinutes() - Math.round(h * 60))
  return d.toISOString()
}

export function nowISO() {
  return new Date().toISOString()
}

export function timeAgo(iso) {
  const diffMs = Date.now() - new Date(iso).getTime()
  const mins = Math.max(0, Math.round(diffMs / 60000))
  if (mins < 1) return 'just now'
  if (mins < 60) return `${mins}m ago`
  const hours = Math.round(mins / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.round(hours / 24)
  return `${days}d ago`
}

export function formatClock(iso) {
  return new Date(iso).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
}

export function formatDuration(sec) {
  if (sec < 60) return `${sec}s`
  const m = Math.floor(sec / 60)
  const s = sec % 60
  return `${m}m ${s}s`
}

export function shortSha(sha) {
  return sha.slice(0, 7)
}

// -- Seed dataset -----------------------------------------------------------

function seedPipelines() {
  return [
    {
      id: 'pl-api', name: 'api-service', repo: 'acme/api-service', branch: 'main', environment: 'production',
      lastRun: { status: 'success', commit: 'a1f92c3d8', message: 'Fix rate limiter edge case', author: 'T. Siddiqui', durationSec: 128, timestamp: hoursAgoISO(2.3) },
    },
    {
      id: 'pl-web', name: 'web-frontend', repo: 'acme/web-frontend', branch: 'main', environment: 'production',
      lastRun: { status: 'success', commit: '7e21ab945', message: 'Update pricing page copy', author: 'T. Siddiqui', durationSec: 96, timestamp: hoursAgoISO(5.1) },
    },
    {
      id: 'pl-worker', name: 'worker-queue', repo: 'acme/worker-queue', branch: 'main', environment: 'production',
      lastRun: { status: 'failed', commit: 'c88f00187', message: 'Bump queue concurrency', author: 'T. Siddiqui', durationSec: 74, timestamp: hoursAgoISO(21) },
    },
    {
      id: 'pl-img', name: 'image-processor', repo: 'acme/image-processor', branch: 'main', environment: 'staging',
      lastRun: { status: 'success', commit: 'f4b2e77a1', message: 'Add WebP support', author: 'T. Siddiqui', durationSec: 142, timestamp: hoursAgoISO(70) },
    },
  ]
}

function seedEnvironments() {
  return [
    { id: 'env-prod', name: 'Production', status: 'healthy', uptimePct: 99.97, cpuPct: 42, memPct: 58, version: 'a1f92c3d8', url: 'app.acme.com' },
    { id: 'env-staging', name: 'Staging', status: 'healthy', uptimePct: 99.5, cpuPct: 28, memPct: 44, version: 'f4b2e77a1', url: 'staging.acme.com' },
    { id: 'env-canary', name: 'Canary', status: 'degraded', uptimePct: 98.2, cpuPct: 81, memPct: 76, version: 'c88f00187', url: 'canary.acme.com' },
  ]
}

function seedDeployments() {
  const rows = [
    [2.3, 'pl-api', 'api-service', 'production', 'a1f92c3d8', 'success', 128],
    [5.1, 'pl-web', 'web-frontend', 'production', '7e21ab945', 'success', 96],
    [21, 'pl-worker', 'worker-queue', 'production', 'c88f00187', 'failed', 74],
    [22, 'pl-worker', 'worker-queue', 'production', 'b0a331cc2', 'rolled-back', 61],
    [30, 'pl-api', 'api-service', 'staging', 'e5d1a9902', 'success', 112],
    [48, 'pl-web', 'web-frontend', 'production', '2c9f8e114', 'success', 88],
    [70, 'pl-img', 'image-processor', 'staging', 'f4b2e77a1', 'success', 142],
    [96, 'pl-api', 'api-service', 'production', '9a4b0c223', 'success', 119],
  ]
  return rows.map(([h, pipelineId, pipelineName, environment, version, status, durationSec]) => ({
    id: uid('dep'),
    pipelineId,
    pipelineName,
    environment,
    version,
    status,
    deployedBy: 'T. Siddiqui',
    timestamp: hoursAgoISO(h),
    durationSec,
  }))
}

function seedLogs() {
  const rows = [
    [2.35, 'success', 'pl-api', 'Deployed api-service a1f92c3d8 to production in 128s'],
    [2.4, 'info', 'pl-api', 'Tests passed (212/212)'],
    [2.45, 'info', 'pl-api', 'Build started for api-service#a1f92c3d8'],
    [5.15, 'success', 'pl-web', 'Deployed web-frontend 7e21ab945 to production in 96s'],
    [5.2, 'info', 'pl-web', 'Build started for web-frontend#7e21ab945'],
    [21.0, 'error', 'pl-worker', 'Deploy failed — health check timeout after 30s'],
    [21.05, 'warn', 'pl-worker', 'Queue depth exceeded threshold (4200 msgs)'],
    [21.1, 'info', 'pl-worker', 'Build started for worker-queue#c88f00187'],
    [22.0, 'warn', 'pl-worker', 'Rolled back worker-queue to b0a331cc2 on production'],
    [70.0, 'success', 'pl-img', 'Deployed image-processor f4b2e77a1 to staging in 142s'],
    [81.0, 'warn', null, 'Canary CPU usage above 80% for 10 minutes'],
    [96.0, 'success', 'pl-api', 'Deployed api-service 9a4b0c223 to production in 119s'],
  ]
  return rows
    .map(([h, level, pipelineId, message]) => ({ id: uid('log'), timestamp: hoursAgoISO(h), level, pipelineId, message }))
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
}

function freshSeed() {
  return {
    pipelines: seedPipelines(),
    environments: seedEnvironments(),
    deployments: seedDeployments(),
    logs: seedLogs(),
  }
}

// -- Storage ----------------------------------------------------------------

const STORAGE_KEY = 'deployflow-demo-v1'

export function loadDeployFlowData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return freshSeed()
    const parsed = JSON.parse(raw)
    if (!parsed || !Array.isArray(parsed.pipelines) || !Array.isArray(parsed.environments)) return freshSeed()
    return {
      pipelines: parsed.pipelines,
      environments: parsed.environments,
      deployments: Array.isArray(parsed.deployments) ? parsed.deployments : [],
      logs: Array.isArray(parsed.logs) ? parsed.logs : [],
    }
  } catch {
    return freshSeed()
  }
}

export function saveDeployFlowData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    // Storage full or unavailable — the demo still works for the session.
  }
}

export function resetDeployFlowData() {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignore
  }
  return freshSeed()
}
