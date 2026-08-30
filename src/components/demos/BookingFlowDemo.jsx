import { useState } from 'react'

const SERVICES = [
  { id: 'consult', name: 'Design consult', duration: '30 min', price: 45, img: 'petal-consult-v2' },
  { id: 'session', name: 'Studio session', duration: '90 min', price: 140, img: 'petal-session-v2' },
  { id: 'review', name: 'Portfolio review', duration: '45 min', price: 65, img: 'petal-review-v2' },
]

const DAYS = [
  { dow: 'Mon', num: 14 },
  { dow: 'Tue', num: 15 },
  { dow: 'Wed', num: 16 },
  { dow: 'Thu', num: 17 },
  { dow: 'Fri', num: 18 },
  { dow: 'Sat', num: 19 },
]

const SLOTS = ['9:00 AM', '10:30 AM', '1:00 PM', '2:30 PM', '4:00 PM']

function emptyForm() {
  return { service: '', day: DAYS[0].num, slot: '', name: '', email: '' }
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
        <nav className="dt-topnav">
          <div className="dt-topnav__brand">Petal &amp; Stone</div>
          <ul className="dt-topnav__links"><li>Studio</li><li>Services</li><li>Contact</li></ul>
        </nav>
        <div className="dt-heading" style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>
          Booked in two steps — down from five.
        </div>
        <div className="dt-card">
          <div className="dt-row"><span>Service</span><span>{service.name}</span></div>
          <div className="dt-row"><span>Date</span><span>{DAYS.find((d) => d.num === form.day)?.dow} {form.day}</span></div>
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
      <nav className="dt-topnav">
        <div className="dt-topnav__brand">Petal &amp; Stone</div>
        <ul className="dt-topnav__links"><li>Studio</li><li>Services</li><li>Contact</li></ul>
      </nav>

      <div className="dt-hero">
        <img src="https://picsum.photos/seed/petal-and-stone-studio-v2/1200/500" alt="Petal &amp; Stone studio" />
        <div className="dt-hero__content">
          <div className="dt-hero__eyebrow">Booking, rebuilt</div>
          <div className="dt-hero__title">Book your visit in under a minute.</div>
          <div className="dt-hero__sub">Two steps instead of five — pick a service and time, leave your details, done.</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.75rem' }}>
        <div className="dt-tag" style={{ background: step === 1 ? 'var(--dt-accent)' : 'var(--dt-tag-bg)', color: step === 1 ? '#fff' : 'var(--dt-tag-fg)' }}>1 · Service &amp; time</div>
        <div className="dt-tag" style={{ background: step === 2 ? 'var(--dt-accent)' : 'var(--dt-tag-bg)', color: step === 2 ? '#fff' : 'var(--dt-tag-fg)' }}>2 · Your details</div>
      </div>

      {step === 1 && (
        <>
          <div className="dt-label">Choose a service</div>
          <div className="dt-grid-3" style={{ marginBottom: '1.5rem' }}>
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
                <div className="dt-product__img-wrap" style={{ marginBottom: '0.6rem' }}>
                  <img src={`https://picsum.photos/seed/${s.img}/400/260`} alt="" style={{ aspectRatio: '15/8' }} />
                </div>
                <div style={{ fontWeight: 700 }}>{s.name}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', opacity: 0.8, marginTop: '0.2rem' }}>
                  <span>{s.duration}</span>
                  <span>${s.price}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="dt-label">Pick a date</div>
          <div className="dt-day-strip">
            {DAYS.map((d) => (
              <div
                key={d.num}
                className={`dt-day${form.day === d.num ? ' dt-day--active' : ''}`}
                onClick={() => setForm((f) => ({ ...f, day: d.num }))}
              >
                <span className="dt-day__dow">{d.dow}</span>
                <span className="dt-day__num">{d.num}</span>
              </div>
            ))}
          </div>

          <div className="dt-label">Pick a time</div>
          <div className="dt-grid-4" style={{ marginBottom: '1.75rem' }}>
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
          <div className="dt-card" style={{ marginBottom: '1.5rem' }}>
            <div className="dt-row"><span>Service</span><span>{SERVICES.find((s) => s.id === form.service)?.name}</span></div>
            <div className="dt-row" style={{ borderBottom: 'none' }}><span>When</span><span>{DAYS.find((d) => d.num === form.day)?.dow} {form.day}, {form.slot}</span></div>
          </div>
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
