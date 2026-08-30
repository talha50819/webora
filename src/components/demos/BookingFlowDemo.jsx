import { useState } from 'react'

const SERVICES = [
  { id: 'consult', name: 'Design consult', duration: '30 min', img: 'petal-consult' },
  { id: 'session', name: 'Studio session', duration: '90 min', img: 'petal-session' },
  { id: 'review', name: 'Portfolio review', duration: '45 min', img: 'petal-review' },
]

const SLOTS = ['9:00 AM', '10:30 AM', '1:00 PM', '2:30 PM', '4:00 PM']

function emptyForm() {
  return { service: '', slot: '', name: '', email: '' }
}

export default function BookingFlowDemo() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState(emptyForm())
  const [confirmed, setConfirmed] = useState(false)

  const step1Valid = form.service && form.slot
  const step2Valid = form.name.trim() && form.email.trim().includes('@')

  function reset() {
    setForm(emptyForm())
    setStep(1)
    setConfirmed(false)
  }

  if (confirmed) {
    const service = SERVICES.find((s) => s.id === form.service)
    return (
      <div className="demo-theme--booking dt-shell">
        <div className="dt-eyebrow">Petal &amp; Stone — confirmed</div>
        <div className="dt-heading" style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>
          Booked in two steps — down from five.
        </div>
        <div className="dt-card">
          <div className="dt-row"><span>Service</span><span>{service.name}</span></div>
          <div className="dt-row"><span>Time</span><span>{form.slot}</span></div>
          <div className="dt-row"><span>Name</span><span>{form.name}</span></div>
          <div className="dt-row" style={{ borderBottom: 'none' }}><span>Email</span><span>{form.email}</span></div>
        </div>
        <button type="button" className="dt-btn dt-btn--ghost" style={{ marginTop: '1.25rem' }} onClick={reset}>
          Book another →
        </button>
      </div>
    )
  }

  return (
    <div className="demo-theme--booking dt-shell">
      <img
        src="https://picsum.photos/seed/petal-and-stone-studio/1200/360"
        alt="Petal &amp; Stone studio"
        style={{ width: '100%', aspectRatio: '10/3', objectFit: 'cover', borderRadius: 'var(--dt-radius)', marginBottom: '1.5rem' }}
      />
      <div className="dt-eyebrow">Petal &amp; Stone — book a visit</div>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <div className="dt-tag" style={{ background: step === 1 ? 'var(--dt-accent)' : 'var(--dt-tag-bg)', color: step === 1 ? '#fff' : 'var(--dt-tag-fg)' }}>1 · Service &amp; time</div>
        <div className="dt-tag" style={{ background: step === 2 ? 'var(--dt-accent)' : 'var(--dt-tag-bg)', color: step === 2 ? '#fff' : 'var(--dt-tag-fg)' }}>2 · Your details</div>
      </div>

      {step === 1 && (
        <>
          <div className="dt-label">Choose a service</div>
          <div className="dt-grid-3" style={{ marginBottom: '1.25rem' }}>
            {SERVICES.map((s) => (
              <button
                type="button"
                key={s.id}
                className="dt-card"
                style={{
                  textAlign: 'left', cursor: 'pointer',
                  borderColor: form.service === s.id ? 'var(--dt-accent)' : undefined,
                  background: form.service === s.id ? 'var(--dt-accent)' : 'var(--dt-card)',
                  color: form.service === s.id ? '#fff' : 'var(--dt-fg)',
                }}
                onClick={() => setForm((f) => ({ ...f, service: s.id }))}
              >
                <img
                  src={`https://picsum.photos/seed/${s.img}/300/160`}
                  alt=""
                  style={{ width: '100%', aspectRatio: '15/8', objectFit: 'cover', borderRadius: 'var(--dt-radius-sm)', marginBottom: '0.6rem' }}
                />
                <div style={{ fontWeight: 700 }}>{s.name}</div>
                <div style={{ fontSize: '0.78rem', opacity: 0.75 }}>{s.duration}</div>
              </button>
            ))}
          </div>

          <div className="dt-label">Pick a time</div>
          <div className="dt-grid-4" style={{ marginBottom: '1.5rem' }}>
            {SLOTS.map((slot) => (
              <button
                type="button"
                key={slot}
                className="dt-card"
                style={{
                  textAlign: 'center', cursor: 'pointer', fontSize: '0.85rem',
                  background: form.slot === slot ? 'var(--dt-accent)' : 'var(--dt-card)',
                  color: form.slot === slot ? '#fff' : 'var(--dt-fg)',
                }}
                onClick={() => setForm((f) => ({ ...f, slot }))}
              >
                {slot}
              </button>
            ))}
          </div>

          <button type="button" className="dt-btn" disabled={!step1Valid} onClick={() => setStep(2)}>
            Continue →
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <div className="dt-grid-2" style={{ marginBottom: '1.5rem' }}>
            <div>
              <label className="dt-label" htmlFor="pb-name">Name</label>
              <input id="pb-name" className="dt-input" type="text" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
            </div>
            <div>
              <label className="dt-label" htmlFor="pb-email">Email</label>
              <input id="pb-email" className="dt-input" type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button type="button" className="dt-btn dt-btn--ghost" onClick={() => setStep(1)}>← Back</button>
            <button type="button" className="dt-btn" disabled={!step2Valid} onClick={() => setConfirmed(true)}>
              Confirm booking →
            </button>
          </div>
        </>
      )}
    </div>
  )
}
