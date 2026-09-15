import { useState } from 'react'
import Colors from './Colors.jsx'
import Typography from './Typography.jsx'
import Components from './Components.jsx'
import Accessibility from './Accessibility.jsx'
import { IconEye, IconLayoutGrid, IconPalette, IconRefreshCw, IconType } from './icons.jsx'
import { contrastRatio, idealInkColor } from './colorMath.js'

const TABS = [
  { id: 'colors', label: 'Colors', icon: IconPalette },
  { id: 'typography', label: 'Typography', icon: IconType },
  { id: 'components', label: 'Components', icon: IconLayoutGrid },
  { id: 'accessibility', label: 'Accessibility', icon: IconEye },
]

const DEFAULT_COLOR = '#6366f1'

function isValidHex(v) {
  return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(v)
}

export default function PrismDemo() {
  const [tab, setTab] = useState('colors')
  const [baseColor, setBaseColor] = useState(DEFAULT_COLOR)
  const [baseSize, setBaseSize] = useState(16)
  const [ratio, setRatio] = useState(1.25)

  const safeColor = isValidHex(baseColor) ? baseColor : DEFAULT_COLOR
  const ink = idealInkColor(safeColor)
  const tagFgOnDark = contrastRatio(safeColor, '#f2f0f9') >= 3 ? safeColor : '#ffffff'

  function reset() {
    setBaseColor(DEFAULT_COLOR)
    setBaseSize(16)
    setRatio(1.25)
    setTab('colors')
  }

  return (
    <div
      className="demo-theme--prism dt-shell pr-shell"
      style={{ '--dt-accent': safeColor, '--dt-accent-ink': ink, '--dt-tag-bg': `color-mix(in srgb, ${safeColor} 18%, transparent)`, '--dt-tag-fg': tagFgOnDark }}
    >
      <div className="pr-topbar">
        <div className="pr-brand"><IconPalette /> Prism</div>
        <div className="pr-nav" role="tablist">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button key={id} type="button" role="tab" aria-selected={tab === id} className={tab === id ? 'is-active' : ''} onClick={() => setTab(id)}>
              <Icon /> {label}
            </button>
          ))}
        </div>
        <button type="button" className="dt-icon-btn" aria-label="Reset to defaults" title="Reset to defaults" onClick={reset}>
          <IconRefreshCw />
        </button>
      </div>

      <div className="pr-body">
        {tab === 'colors' && <Colors baseColor={safeColor} onChange={setBaseColor} />}
        {tab === 'typography' && (
          <Typography baseSize={baseSize} ratio={ratio} onBaseSizeChange={setBaseSize} onRatioChange={setRatio} />
        )}
        {tab === 'components' && <Components />}
        {tab === 'accessibility' && <Accessibility baseColor={safeColor} />}

        <p className="dt-stat-label" style={{ marginTop: '1.5rem' }}>
          Every number here — contrast ratios, generated shades, the type scale — is computed live, not looked up. Nothing is saved between visits.
        </p>
      </div>
    </div>
  )
}
