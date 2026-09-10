import { useState } from 'react'
import Classify from './Classify.jsx'
import History from './History.jsx'
import Labels from './Labels.jsx'
import About from './About.jsx'
import { IconClock, IconInfo, IconScan, IconTag } from './icons.jsx'
import { loadModel } from './model.js'

const TABS = [
  { id: 'classify', label: 'Classify', icon: IconScan },
  { id: 'history', label: 'History', icon: IconClock },
  { id: 'labels', label: 'Labels', icon: IconTag },
  { id: 'about', label: 'About', icon: IconInfo },
]

export default function VisionAIDemo() {
  const [tab, setTab] = useState('classify')
  const [model, setModel] = useState(null)
  const [modelStatus, setModelStatus] = useState('idle') // idle | loading | ready | error
  const [statusMessage, setStatusMessage] = useState('')
  const [history, setHistory] = useState([])

  async function handleLoadModel() {
    setModelStatus('loading')
    setStatusMessage('Loading TensorFlow.js…')
    try {
      const m = await loadModel(setStatusMessage)
      setModel(m)
      setModelStatus('ready')
    } catch (err) {
      setModelStatus('error')
      setStatusMessage(err.message || 'Failed to load the model.')
    }
  }

  function addHistory(entry) {
    setHistory((h) => [entry, ...h].slice(0, 30))
  }

  return (
    <div className="demo-theme--visionai dt-shell va-shell">
      <div className="va-topbar">
        <div className="va-brand"><IconScan /> VisionAI</div>
        <div className="va-nav" role="tablist">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button key={id} type="button" role="tab" aria-selected={tab === id} className={tab === id ? 'is-active' : ''} onClick={() => setTab(id)}>
              <Icon /> {label}
            </button>
          ))}
        </div>
        <span className="dt-badge" style={{ background: modelStatus === 'ready' ? 'var(--dt-tag-bg)' : 'var(--dt-track)', color: modelStatus === 'ready' ? 'var(--dt-accent)' : 'var(--dt-fg-soft)' }}>
          {modelStatus === 'ready' ? 'Model ready' : modelStatus === 'loading' ? 'Loading…' : modelStatus === 'error' ? 'Load failed' : 'Model not loaded'}
        </span>
      </div>

      <div className="va-body">
        {tab === 'classify' && (
          <Classify modelStatus={modelStatus} statusMessage={statusMessage} model={model} onLoadModel={handleLoadModel} onClassified={addHistory} />
        )}
        {tab === 'history' && <History history={history} onClear={() => setHistory([])} />}
        {tab === 'labels' && <Labels />}
        {tab === 'about' && <About />}

        <p className="dt-stat-label" style={{ marginTop: '1.5rem' }}>
          Real client-side inference via TensorFlow.js — no images are ever uploaded, and nothing here is persisted between visits.
        </p>
      </div>
    </div>
  )
}
