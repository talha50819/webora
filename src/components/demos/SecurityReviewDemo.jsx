import { useState } from 'react'

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

export default function SecurityReviewDemo() {
  const [statusById, setStatusById] = useState({})

  function toggle(id) {
    setStatusById((s) => ({ ...s, [id]: s[id] === 'fixed' ? 'open' : 'fixed' }))
  }

  const fixedCount = INITIAL_FINDINGS.filter((f) => statusById[f.id] === 'fixed').length

  return (
    <div>
      <div className="demo-stats">
        <div>
          <div className="demo-stat__value">{INITIAL_FINDINGS.length}</div>
          <div className="demo-stat__label">Findings</div>
        </div>
        <div>
          <div className="demo-stat__value" style={{ color: fixedCount === INITIAL_FINDINGS.length ? 'var(--lime)' : 'var(--accent)' }}>
            {fixedCount}/{INITIAL_FINDINGS.length}
          </div>
          <div className="demo-stat__label">Remediated</div>
        </div>
      </div>

      <div className="faq-list">
        {INITIAL_FINDINGS.map((f) => {
          const fixed = statusById[f.id] === 'fixed'
          return (
            <details className="faq-item" key={f.id}>
              <summary className="faq-item__q" style={{ gap: '0.75rem' }}>
                <span className={`demo-badge demo-badge--${f.severity}`}>{SEVERITY_LABEL[f.severity]}</span>
                <span style={{ flex: 1 }}>{f.title}</span>
                <span
                  className={`demo-badge ${fixed ? 'demo-badge--fixed' : 'demo-badge--open'}`}
                  style={{ cursor: 'pointer' }}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    toggle(f.id)
                  }}
                >
                  {fixed ? '✓ Fixed' : 'Open'}
                </span>
              </summary>
              <div className="faq-item__a">
                <p style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--ink)' }}>Repro: </strong>{f.repro}</p>
                <p><strong style={{ color: 'var(--ink)' }}>Fix: </strong>{f.fix}</p>
              </div>
            </details>
          )
        })}
      </div>
    </div>
  )
}
