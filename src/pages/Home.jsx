import { Link } from 'react-router-dom'
import Marquee from '../components/Marquee.jsx'
import { services } from '../data/services.js'
import { useSEO } from '../hooks/useSEO.js'

const values = [
  {
    title: 'Senior engineers only',
    desc: 'No bench of juniors learning on your invoice. Every engagement is staffed by people who have shipped the thing before.',
  },
  {
    title: 'Fixed scope, fixed cost',
    desc: 'Estimates are commitments, not opening offers. We scope carefully up front so the number doesn’t move in month two.',
  },
  {
    title: 'You own everything',
    desc: 'Code, infrastructure, credentials, documentation. Nothing is held hostage in a vendor-only repo when the engagement ends.',
  },
]

export default function Home() {
  useSEO({
    title: 'webora is a dev — Engineering Systems That Hold',
    description:
      'webora is a dev — full-spectrum technology partner for software, cloud, security, and AI. Senior engineers only, fixed scope, and infrastructure built to last.',
    path: '/',
  })

  return (
    <>
      <section className="hero container">
        <div className="hero__label eyebrow">Full-spectrum technology partner</div>
        <h1 className="type-display hero__title">
          We build the <span className="accent">systems</span><br />
          your business runs on.
        </h1>
        <p className="type-lede">
          webora is a dev — an engineering firm spanning software, cloud, security,
          and AI — for companies that need infrastructure built once and operated
          for years, not a demo that impresses in the first sprint and buckles in the third.
        </p>
        <div className="hero__footer">
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn--accent">Start a project →</Link>
            <Link to="/services" className="btn btn--ghost">View services</Link>
          </div>
        </div>
      </section>

      <Marquee
        items={[
          'WEB DEVELOPMENT',
          'MOBILE APPS',
          'CLOUD & DEVOPS',
          'CYBERSECURITY',
          'AI & MACHINE LEARNING',
          'UI/UX DESIGN',
          'IT CONSULTING',
        ]}
      />

      <section className="section section--ink">
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>Where we are</div>
          <h2 className="type-h2" style={{ maxWidth: '30ch' }}>
            Founder-led since 2020. Now building the company around the work,
            not the other way around.
          </h2>
          <p className="type-lede mt-3" style={{ color: 'rgba(237,233,223,0.7)' }}>
            You talk directly to the person building your system — no account manager
            relaying notes from an engineer you'll never meet.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>What we do</div>
          <h2 className="type-h2" style={{ marginBottom: '2rem', maxWidth: '20ch' }}>
            Seven disciplines. One team that already knows how they fit together.
          </h2>
          <div className="service-list">
            {services.map((s) => (
              <Link to={`/services/${s.slug}`} className="service-row" key={s.slug}>
                <span className="index-number">{s.index}</span>
                <span>
                  <span className="service-row__name">{s.name}</span>
                  <div className="service-row__tagline">{s.tagline}</div>
                </span>
                <span className="service-row__arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>Why webora is a dev</div>
          <h2 className="type-h2" style={{ marginBottom: '2rem', maxWidth: '24ch' }}>
            Most vendors optimize for the kickoff call. We optimize for year three.
          </h2>
        </div>
        <div className="container" style={{ padding: 0 }}>
          <div className="value-grid">
            {values.map((v, i) => (
              <div className="value-card" key={v.title}>
                <div className="value-card__index">0{i + 1}</div>
                <div className="value-card__title">{v.title}</div>
                <div className="value-card__desc">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container cta-band">
          <h2 className="type-h2" style={{ maxWidth: '18ch' }}>
            Tell us what's breaking. We'll tell you what it takes to fix it.
          </h2>
          <Link to="/contact" className="btn btn--solid">Get a technical audit →</Link>
        </div>
      </section>
    </>
  )
}
