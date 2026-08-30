import { useState } from 'react'
import { IconGrid, IconShield, IconClipboard, IconBell } from './icons.jsx'

const INITIAL_FINDINGS = [
  {
    id: 'f1',
    severity: 'critical',
    title: 'Stripe webhook signature not verified',
    repro: 'POST /webhooks/stripe accepted any payload without checking the Stripe-Signature header.',
    fix: 'Verify the signature against the webhook secret before processing; reject unsigned requests with 400.',
  },
  {
    id: 'f2',
    severity: 'high',
    title: 'Admin routes reachable without role check',
    repro: '/admin/* only checked for a valid session, not an admin role — any logged-in user could reach it.',
    fix: 'Added a role guard on the admin router, plus a regression test for every admin route.',
  },
  {
    id: 'f3',
    severity: 'medium',
    title: 'S3 bucket allowed public listing',
    repro: 'The uploads bucket had ListBucket open, exposing filenames (not contents) to anyone with the bucket name.',
    fix: 'Blocked public listing via bucket policy; access now requires a signed URL.',
  },
  {
    id: 'f4',
    severity: 'low',
    title: 'Verbose error messages in production',
    repro: 'Unhandled exceptions returned full stack traces to the client in production mode.',
    fix: 'Generic error responses in production; full traces still logged server-side.',
  },
]

const SEVERITY_LABEL = { critical: 'Critical', high: 'High', medium: 'Medium', low: 'Low' }
const SEVERITY_STYLE = {
  critical: { background: 'var(--dt-accent)', color: 'var(--dt-accent-ink)' },
  high: { background: 'rgba(255,59,92,0.35)', color: 'var(--dt-fg)' },
  medium: { background: 'var(--dt-tag-bg)', color: 'var(--dt-tag-fg)' },
  low: { background: 'var(--dt-track)', color: 'var(--dt-fg-soft)' },
}

export default function SecurityReviewDemo() {
  const [statusById, setStatusById] = useState({})

  function toggle(id) {
    setStatusById((s) => ({ ...s, [id]: s[id] === 'fixed' ? 'open' : 'fixed' }))
  }

  const fixedCount = INITIAL_FINDINGS.filter((f) => statusById[f.id] === 'fixed').length
  const remediatedPct = Math.round((fixedCount / INITIAL_FINDINGS.length) * 100)
  const counts = INITIAL_FINDINGS.reduce((acc, f) => {
    acc[f.severity] = (acc[f.severity] || 0) + 1
    return acc
  }, {})

  return (
    <div className="demo-theme--security dt-shell dt-shell--app">
      <aside className="dt-sidebar">
        <div className="dt-sidebar__brand"><IconShield /> Redteam</div>
        <div className="dt-sidebar__item dt-sidebar__item--active"><IconGrid /> Engagement</div>
        <div className="dt-sidebar__item"><IconClipboard /> Findings</div>
        <div className="dt-sidebar__item"><IconShield /> Retest</div>
      </aside>

      <div className="dt-main">
        <div className="dt-topbar">
          <div className="dt-topbar__title">Engagement report — checkout-api</div>
          <div className="dt-topbar__right">
            <IconBell />
            <img className="dt-avatar" src="https://i.pravatar.cc/64?u=redteam-lead" alt="Lead assessor" width="32" height="32" />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem', marginBottom: '1.9rem', flexWrap: 'wrap' }}>
          <div className="dt-gauge" style={{ '--pct': remediatedPct }}>
            <div className="dt-gauge__inner">
              <div className="dt-stat-value" style={{ fontSize: '1.4rem' }}>{remediatedPct}%</div>
              <div className="dt-stat-label" style={{ fontSize: '0.58rem' }}>remediated</div>
            </div>
          </div>
          <div>
            <div className="dt-stat-value">{fixedCount}/{INITIAL_FINDINGS.length}</div>
            <div className="dt-stat-label">Findings closed</div>
          </div>
        </div>

        <div className="dt-severity-row">
          {['critical', 'high', 'medium', 'low'].map((sev) => (
            <div className="dt-severity-chip" key={sev}>
              <span className="dt-badge" style={SEVERITY_STYLE[sev]}>{SEVERITY_LABEL[sev]}</span>
              <div className="dt-stat-value" style={{ fontSize: '1.3rem', marginTop: '0.5rem' }}>{counts[sev] || 0}</div>
            </div>
          ))}
        </div>

        <div className="dt-eyebrow">Findings</div>
        {INITIAL_FINDINGS.map((f) => {
          const fixed = statusById[f.id] === 'fixed'
          return (
            <details className="dt-card" key={f.id} style={{ marginBottom: '0.6rem' }}>
              <summary style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', listStyle: 'none' }}>
                <span className="dt-badge" style={SEVERITY_STYLE[f.severity]}>{SEVERITY_LABEL[f.severity]}</span>
                <span style={{ flex: 1, fontWeight: 600 }}>{f.title}</span>
                <span
                  className="dt-badge"
                  style={{
                    cursor: 'pointer',
                    background: fixed ? '#173324' : 'transparent',
                    color: fixed ? '#4ade80' : 'var(--dt-fg-soft)',
                    border: fixed ? 'none' : 'var(--dt-border)',
                  }}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    toggle(f.id)
                  }}
                >
                  {fixed ? '✓ Fixed' : 'Open'}
                </span>
              </summary>
              <div style={{ marginTop: '0.9rem', color: 'var(--dt-fg-soft)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                <p style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--dt-fg)' }}>Repro: </strong>{f.repro}</p>
                <p><strong style={{ color: 'var(--dt-fg)' }}>Fix: </strong>{f.fix}</p>
              </div>
            </details>
          )
        })}
      </div>
    </div>
  )
}
