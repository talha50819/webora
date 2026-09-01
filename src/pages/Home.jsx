import { Link } from 'react-router-dom'
import Marquee from '../components/Marquee.jsx'
import { services } from '../data/services.js'
import { useSEO } from '../hooks/useSEO.js'
import { siteRoutes, faqs, paths } from '../data/seo-content.js'

const values = [
  {
    title: 'The right person for the job',
    desc: "I do the work myself where it's my core strength. Where a project needs something outside that, I bring in a specialist I've already vetted and worked with — never a stranger learning on your invoice. Either way, I stay the one point of contact.",
  },
  {
    title: 'Fixed scope, fixed cost',
    desc: "Estimates are commitments, not opening offers. I scope carefully up front so the number doesn't move in month two.",
  },
  {
    title: 'You own everything',
    desc: 'Code, infrastructure, credentials, documentation. Nothing is held hostage in a vendor-only repo when the engagement ends.',
  },
]

export default function Home() {
  useSEO(siteRoutes.home)

  return (
    <>
      <section className="hero container">
        <div className="hero__label eyebrow">Full-spectrum technology partner</div>
        <h1 className="type-display hero__title">
          I build the <span className="accent">systems</span><br />
          your business runs on.
        </h1>
        <p className="type-lede">
          mTalha is a dev — I plan, build, and deliver software, cloud, security,
          and AI projects for companies that need infrastructure built once and
          operated for years, not a demo that impresses in the first sprint and
          buckles in the third.
        </p>
        <div className="hero__footer">
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to={paths.contact} className="btn btn--accent">Start a project →</Link>
            <Link to={paths.services} className="btn btn--ghost">View services</Link>
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
          <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>Where I am</div>
          <h2 className="type-h2" style={{ maxWidth: '30ch' }}>
            Independent since 2020 — still doing the work, now with specialists
            to call on.
          </h2>
          <p className="type-lede mt-3" style={{ color: 'rgba(237,233,223,0.7)' }}>
            You talk directly to me, the person building or directing your
            system — never an account manager relaying notes from someone
            you'll never meet.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>What I do</div>
          <h2 className="type-h2" style={{ marginBottom: '2rem', maxWidth: '20ch' }}>
            Seven disciplines. One person who already knows how they fit together.
          </h2>
          <div className="service-list">
            {services.map((s) => (
              <Link to={paths.service(s.slug)} className="service-row" key={s.slug}>
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
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>Why mTalha is a dev</div>
          <h2 className="type-h2" style={{ marginBottom: '2rem', maxWidth: '24ch' }}>
            Most vendors optimize for the kickoff call. I optimize for year three.
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

      <section className="section">
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>FAQ</div>
          <h2 className="type-h2" style={{ marginBottom: '2rem', maxWidth: '24ch' }}>
            Questions I hear before the first call.
          </h2>
          <div className="faq-list">
            {faqs.map((item, i) => (
              <details className="faq-item" key={item.q}>
                <summary className="faq-item__q">
                  <span className="capability-item__index">{String(i + 1).padStart(2, '0')}</span>
                  <span>{item.q}</span>
                </summary>
                <p className="faq-item__a">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container cta-band">
          <h2 className="type-h2" style={{ maxWidth: '18ch' }}>
            Tell me what's breaking. I'll tell you what it takes to fix it.
          </h2>
          <Link to={paths.contact} className="btn btn--solid">Get a technical audit →</Link>
        </div>
      </section>
    </>
  )
}
