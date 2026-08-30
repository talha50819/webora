import { useState } from 'react'

const SERVICES = [
  { id: 'consult', name: 'Design consult', duration: '30 min' },
  { id: 'session', name: 'Studio session', duration: '90 min' },
  { id: 'review', name: 'Portfolio review', duration: '45 min' },
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
      <div>
        <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>Confirmed</div>
        <p className="type-h3" style={{ fontWeight: 700, marginBottom: '0.75rem' }}>
          Booked in two steps — down from five.
        </p>
        <div className="demo-cart">
          <div className="demo-cart__row"><span>Service</span><span>{service.name}</span></div>
          <div className="demo-cart__row"><span>Time</span><span>{form.slot}</span></div>
          <div className="demo-cart__row"><span>Name</span><span>{form.name}</span></div>
          <div className="demo-cart__row"><span>Email</span><span>{form.email}</span></div>
        </div>
        <button type="button" className="btn btn--ghost" style={{ marginTop: 'var(--space-3)' }} onClick={reset}>
          Book another →
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="demo-steps">
        <div className={`demo-step ${step === 1 ? 'active' : ''}`}>1 · Service &amp; time</div>
        <div className={`demo-step ${step === 2 ? 'active' : ''}`}>2 · Your details</div>
      </div>

      {step === 1 && (
        <>
          <div className="eyebrow" style={{ marginBottom: '0.6rem' }}>Choose a service</div>
          <div className="demo-service-grid" style={{ marginBottom: 'var(--space-3)' }}>
            {SERVICES.map((s) => (
              <button
                type="button"
                key={s.id}
                className={`demo-service-card ${form.service === s.id ? 'selected' : ''}`}
                onClick={() => setForm((f) => ({ ...f, service: s.id }))}
              >
                <div style={{ fontWeight: 700 }}>{s.name}</div>
                <div className="type-mono" style={{ fontSize: '0.75rem', opacity: 0.75 }}>{s.duration}</div>
              </button>
            ))}
          </div>

          <div className="eyebrow" style={{ marginBottom: '0.6rem' }}>Pick a time</div>
          <div className="demo-slot-grid" style={{ marginBottom: 'var(--space-3)' }}>
            {SLOTS.map((slot) => (
              <button
                type="button"
                key={slot}
                className={`demo-slot ${form.slot === slot ? 'selected' : ''}`}
                onClick={() => setForm((f) => ({ ...f, slot }))}
              >
                {slot}
              </button>
            ))}
          </div>

          <button type="button" className="btn btn--solid" disabled={!step1Valid} onClick={() => setStep(2)}>
            Continue →
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <div className="grid-2" style={{ gap: '1rem', marginBottom: 'var(--space-3)' }}>
            <div className="form-field">
              <label htmlFor="demo-name">Name</label>
              <input
                id="demo-name"
                type="text"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              />
            </div>
            <div className="form-field">
              <label htmlFor="demo-email">Email</label>
              <input
                id="demo-email"
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button type="button" className="btn btn--ghost" onClick={() => setStep(1)}>← Back</button>
            <button type="button" className="btn btn--accent" disabled={!step2Valid} onClick={() => setConfirmed(true)}>
              Confirm booking →
            </button>
          </div>
        </>
      )}
    </div>
  )
}
