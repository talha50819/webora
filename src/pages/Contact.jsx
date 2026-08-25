import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { services } from '../data/services.js'
import { useSEO } from '../hooks/useSEO.js'
import { siteRoutes, paths } from '../data/seo-content.js'

const FORM_ENDPOINT = 'https://formspree.io/talhasiddiqui433@gmail.com'

export default function Contact() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [submitted, setSubmitted] = useState(false)

  useSEO(siteRoutes.contact)

  useEffect(() => {
    if (searchParams.get('sent') === 'true') {
      setSubmitted(true)
      setSearchParams({}, { replace: true })
    }
  }, [searchParams, setSearchParams])

  return (
    <>
      <section className="hero container" style={{ paddingBottom: 'var(--space-4)' }}>
        <div className="hero__label eyebrow">Contact</div>
        <h1 className="type-h1" style={{ maxWidth: '18ch' }}>
          Tell us what you're building. We'll reply within one business day.
        </h1>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container grid-2">
          <div>
            {submitted ? (
              <div>
                <div className="eyebrow" style={{ marginBottom: '1rem' }}>Received</div>
                <h2 className="type-h2">Thanks — that's in an engineer's queue now.</h2>
                <p className="type-lede mt-3">
                  We reply within one business day. If it's urgent, email
                  {' '}<a href="mailto:talhasiddiqui433@gmail.com" className="text-link">talhasiddiqui433@gmail.com</a> directly.
                </p>
              </div>
            ) : (
              <form
                className="contact-form"
                action={FORM_ENDPOINT}
                method="POST"
              >
                <input type="hidden" name="_subject" value="New project inquiry — webora is a dev" />
                <input type="hidden" name="_next" value={`${typeof window !== 'undefined' ? window.location.origin : ''}${paths.contact}?sent=true`} />

                <div className="grid-2" style={{ gap: '1rem' }}>
                  <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Work email</label>
                    <input id="email" name="email" type="email" required />
                  </div>
                </div>
                <div className="grid-2" style={{ gap: '1rem' }}>
                  <div className="form-field">
                    <label htmlFor="company">Company</label>
                    <input id="company" name="company" type="text" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="service">Service of interest</label>
                    <select id="service" name="service" defaultValue="">
                      <option value="" disabled>Select a service</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.slug}>{s.name}</option>
                      ))}
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="message">Project details</label>
                  <textarea id="message" name="message" required placeholder="What are you trying to build, and what's the timeline?" />
                </div>
                <button type="submit" className="btn btn--accent" style={{ alignSelf: 'flex-start' }}>
                  Send message →
                </button>
              </form>
            )}
          </div>

          <div>
            <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>Direct</div>
            <div className="contact-info-row">
              <span className="contact-info-row__label">Email</span>
              <a href="mailto:talhasiddiqui433@gmail.com" className="contact-info-row__value">talhasiddiqui433@gmail.com</a>
            </div>
            <div className="contact-info-row">
              <span className="contact-info-row__label">Phone</span>
              <a href="tel:+923358194817" className="contact-info-row__value">+92 335 8194817</a>
            </div>
            <div className="contact-info-row">
              <span className="contact-info-row__label">Hours</span>
              <span className="contact-info-row__value">Mon–Fri, 9am–6pm ET</span>
            </div>
            <div className="contact-info-row">
              <span className="contact-info-row__label">Response time</span>
              <span className="contact-info-row__value">Under 1 business day</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
