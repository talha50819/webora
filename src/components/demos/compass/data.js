// Compass — a real scored assessment, not a lorem-ipsum questionnaire.
// Every category has a genuine 5-level rubric; the score, maturity label,
// and roadmap recommendations are all computed from the actual answers
// given, not canned per visit.

export const CATEGORIES = [
  {
    id: 'deploy',
    label: 'Deployment frequency',
    chartLabel: 'Deploys',
    question: 'How often does your team ship to production?',
    levels: ['Less than monthly', 'Monthly', 'Weekly', 'Daily', 'Multiple times a day'],
  },
  {
    id: 'testing',
    label: 'Test coverage confidence',
    chartLabel: 'Testing',
    question: 'If the test suite passes, how confident is the team that nothing broke?',
    levels: [
      'No automated tests',
      'Some tests, rarely trusted',
      'Decent coverage, spot-checked manually anyway',
      'Good coverage, usually trusted',
      'High coverage, ships on green with confidence',
    ],
  },
  {
    id: 'docs',
    label: 'Documentation quality',
    chartLabel: 'Docs',
    question: 'Could a new engineer set up and understand the system from the docs alone?',
    levels: [
      'No documentation exists',
      'Outdated or scattered notes',
      'Basic setup docs, architecture is tribal knowledge',
      'Solid docs, occasionally stale',
      'Docs are current and treated as a deliverable',
    ],
  },
  {
    id: 'incidents',
    label: 'Incident response',
    chartLabel: 'Incidents',
    question: 'When production breaks, how fast does the team know and respond?',
    levels: [
      'Customers usually report it first',
      'Alerts exist but are noisy or ignored',
      'Alerting works, response is ad hoc',
      'On-call rotation with a runbook',
      'Automated detection, practiced response, blameless postmortems',
    ],
  },
  {
    id: 'infra',
    label: 'Infrastructure automation',
    chartLabel: 'Infra',
    question: 'How is your infrastructure provisioned and changed?',
    levels: [
      'Manually, through cloud consoles',
      'Some scripts, inconsistently used',
      'Infrastructure as code for the core, gaps elsewhere',
      'Infrastructure as code everywhere, reviewed like application code',
      'Fully automated, self-service, drift-checked',
    ],
  },
  {
    id: 'security',
    label: 'Security practices',
    chartLabel: 'Security',
    question: 'How are access, secrets, and changes controlled?',
    levels: [
      'Shared credentials, no formal process',
      'Some access control, secrets stored in plaintext or config',
      'Role-based access, secrets manager in use',
      'Least-privilege access, secrets rotated, changes reviewed',
      'Continuous audits, automated policy enforcement',
    ],
  },
]

export function defaultAnswers() {
  return Object.fromEntries(CATEGORIES.map((c) => [c.id, 2])) // start at level 3 (index 2) — "middle of the road"
}

export function overallScore(answers) {
  const values = CATEGORIES.map((c) => answers[c.id] + 1) // 1–5
  return values.reduce((a, b) => a + b, 0) / values.length
}

const MATURITY_BANDS = [
  [1.9, 'Ad Hoc', 'Processes are informal and inconsistent — the team is likely spending more time firefighting than building.'],
  [2.9, 'Emerging', 'The basics exist but depend on specific people remembering to do them. The next investment should go into making good practices automatic.'],
  [3.9, 'Defined', 'Practices are documented and mostly followed. The gap now is consistency and closing the remaining manual steps.'],
  [4.4, 'Managed', 'Strong, mostly automated practices across the board. Remaining work is incremental — tightening the edges, not rebuilding foundations.'],
  [5.01, 'Optimized', 'This is a high-maturity engineering org by any external benchmark. The focus here shifts to cost efficiency and developer experience.'],
]

export function maturityBand(score) {
  return MATURITY_BANDS.find(([max]) => score <= max) || MATURITY_BANDS[MATURITY_BANDS.length - 1]
}

// Recommendation copy keyed by category id and score band (low: 1–2, mid: 3, high: 4–5).
const RECOMMENDATIONS = {
  deploy: {
    low: 'Cut batch size before anything else — smaller, more frequent releases are the single highest-leverage change available here.',
    mid: 'Move from scheduled releases to on-demand ones; the remaining blocker is usually manual QA or a manual approval step.',
    high: 'Deployment speed is a strength — make sure rollback is exercised as often as deployment, not just built once and forgotten.',
  },
  testing: {
    low: 'Start with tests around the code that has broken production before — coverage that targets real failure history beats coverage that targets convenience.',
    mid: 'The gap is usually trust, not coverage — invest in making the suite fast and reliable enough that skipping the manual check stops feeling risky.',
    high: 'Keep an eye on test suite runtime as the codebase grows — a slow trusted suite eventually becomes an untrusted one people route around.',
  },
  docs: {
    low: 'Start with a single "how to run this locally" doc — it is the highest-traffic page any engineering docs site has, and its absence is the biggest onboarding cost.',
    mid: 'Put doc updates in the definition of done for the changes that make docs stale, rather than scheduling periodic doc-cleanup sprints that rarely happen.',
    high: 'Docs are in good shape — the next step is usually generating reference docs (API, schema) automatically so they cannot drift from the code.',
  },
  incidents: {
    low: 'Basic alerting on the handful of metrics that predict an outage (error rate, latency, saturation) will catch more than an elaborate dashboard nobody watches.',
    mid: 'Formalize on-call with a written rotation and a runbook per alert — response time drops fast once "who handles this" stops being a Slack question.',
    high: 'Response is strong — the remaining lever is reducing time-to-detect further, since most of the remaining downtime is usually detection lag, not response lag.',
  },
  infra: {
    low: 'Pick the one environment that changes most often and put it in code first — the value compounds fastest where drift currently costs the most time.',
    mid: 'Close the gaps between what is codified and what is not; partial infrastructure-as-code often costs more in confusion than having none.',
    high: 'Infrastructure is in strong shape — invest next in drift detection so undocumented manual changes get caught automatically, not discovered during an incident.',
  },
  security: {
    low: 'Move shared credentials to a secrets manager and turn on role-based access first — it is the highest-impact, lowest-effort fix available here.',
    mid: 'Add access reviews and secret rotation on a schedule — most breaches at this maturity level come from stale access, not new vulnerabilities.',
    high: 'Practices are mature — formalize them into a compliance framework (SOC 2, ISO 27001) if that is not already underway, since the hard work is mostly done.',
  },
}

export function recommendationFor(categoryId, level) {
  const band = level <= 1 ? 'low' : level === 2 ? 'mid' : 'high'
  return RECOMMENDATIONS[categoryId][band]
}

// Illustrative reference point for the Benchmark tab — a plausible "typical
// mid-size engineering team" profile, not live external data. Labeled as
// such in the UI.
export const BENCHMARK = {
  deploy: 2, testing: 2, docs: 1, incidents: 2, infra: 2, security: 1,
}
