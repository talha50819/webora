import { IconAlertTriangle, IconStar } from './icons.jsx'

export default function Components() {
  return (
    <>
      <div className="dt-card" style={{ marginBottom: '1rem' }}>
        <div className="dt-eyebrow" style={{ marginBottom: '1rem' }}>Buttons</div>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button type="button" className="dt-btn">Primary action</button>
          <button type="button" className="dt-btn dt-btn--ghost">Secondary</button>
          <button type="button" className="dt-btn" disabled>Disabled</button>
        </div>
      </div>

      <div className="dt-grid-2" style={{ marginBottom: '1rem' }}>
        <div className="dt-card">
          <div className="dt-eyebrow" style={{ marginBottom: '1rem' }}>Form field</div>
          <label className="dt-label" htmlFor="pr-demo-input">Email address</label>
          <input id="pr-demo-input" className="dt-input" type="email" placeholder="you@company.com" style={{ marginBottom: '0.8rem' }} />
          <div className="dt-chip-row">
            <button type="button" className="dt-chip dt-chip--active">Selected</button>
            <button type="button" className="dt-chip">Option</button>
            <button type="button" className="dt-chip">Option</button>
          </div>
        </div>

        <div className="dt-card">
          <div className="dt-eyebrow" style={{ marginBottom: '1rem' }}>Tags & badges</div>
          <div className="dt-tag-list" style={{ marginBottom: '1rem' }}>
            <span className="dt-tag">Design system</span>
            <span className="dt-tag">Tokens</span>
            <span className="dt-tag">Accessible</span>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span className="dt-badge" style={{ background: 'var(--dt-tag-bg)', color: 'var(--dt-tag-fg)' }}>New</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', color: 'var(--dt-accent)' }}>
              <IconStar /><IconStar /><IconStar /><IconStar />
            </span>
          </div>
        </div>
      </div>

      <div className="dt-grid-2">
        <div className="dt-card">
          <div className="dt-eyebrow" style={{ marginBottom: '0.75rem' }}>Card component</div>
          <div style={{ fontWeight: 700, marginBottom: '0.4rem' }}>Plan: Growth</div>
          <p className="dt-stat-label" style={{ marginBottom: '0.9rem' }}>Billed monthly, cancel anytime</p>
          <div style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.9rem' }}>$49<span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--dt-fg-soft)' }}>/mo</span></div>
          <div className="dt-bar-track" style={{ marginBottom: '0.5rem' }}>
            <div className="dt-bar-fill" style={{ width: '62%' }} />
          </div>
          <p className="dt-stat-label">62% of usage quota</p>
        </div>

        <div className="dt-card" style={{ borderColor: 'var(--dt-accent)' }}>
          <div style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start' }}>
            <span style={{ color: 'var(--dt-accent)', flexShrink: 0 }}><IconAlertTriangle /></span>
            <div>
              <div style={{ fontWeight: 700, marginBottom: '0.3rem' }}>Heads up</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--dt-fg-soft)', lineHeight: 1.6 }}>
                This whole gallery re-themes live from the one color picked in the Colors tab —
                nothing here is hand-styled per component.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
