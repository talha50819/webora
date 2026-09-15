import { useState } from 'react'
import Assessment from './Assessment.jsx'
import Roadmap from './Roadmap.jsx'
import Benchmark from './Benchmark.jsx'
import { IconBarChart, IconClipboard, IconRadar, IconRefreshCw } from './icons.jsx'
import { defaultAnswers } from './data.js'

const TABS = [
  { id: 'assessment', label: 'Assessment', icon: IconClipboard },
  { id: 'roadmap', label: 'Roadmap', icon: IconRadar },
  { id: 'benchmark', label: 'Benchmark', icon: IconBarChart },
]

export default function CompassDemo() {
  const [tab, setTab] = useState('assessment')
  const [answers, setAnswers] = useState(defaultAnswers)

  function setAnswer(id, level) {
    setAnswers((a) => ({ ...a, [id]: level }))
  }

  function reset() {
    setAnswers(defaultAnswers())
    setTab('assessment')
  }

  return (
    <div className="demo-theme--compass dt-shell co-shell">
      <div className="co-topbar">
        <div className="co-brand"><IconRadar /> Compass</div>
        <div className="co-nav" role="tablist">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button key={id} type="button" role="tab" aria-selected={tab === id} className={tab === id ? 'is-active' : ''} onClick={() => setTab(id)}>
              <Icon /> {label}
            </button>
          ))}
        </div>
        <button type="button" className="dt-icon-btn" aria-label="Reset assessment" title="Reset assessment" onClick={reset}>
          <IconRefreshCw />
        </button>
      </div>

      <div className="co-body">
        {tab === 'assessment' && <Assessment answers={answers} onChange={setAnswer} />}
        {tab === 'roadmap' && <Roadmap answers={answers} />}
        {tab === 'benchmark' && <Benchmark answers={answers} />}

        <p className="dt-stat-label" style={{ marginTop: '1.5rem' }}>
          The score, maturity label, and roadmap are computed live from your answers — nothing is pre-written per visit, and nothing is saved between visits.
        </p>
      </div>
    </div>
  )
}
