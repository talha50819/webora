import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO.js'

const timeline = [
  ['2020', 'Muhammad Talha Siddiqui starts out as an independent freelance developer, taking on web and software contracts solo.'],
  ['2022', 'Referral-driven client work expands into mobile, cloud, and security engagements — still a one-person operation.'],
  ['2024', 'First collaborators come on board project by project as demand outgrows what one person can deliver alone.'],
  ['2026', 'The practice incorporates as webora is a dev, a full-spectrum technology company formalizing the practices built over five years of freelance work.'],
]

const principles = [
  {
    title: 'Write it down',
    desc: 'Architecture decisions, tradeoffs, and runbooks get documented as we go — not reconstructed from memory during a handoff.',
  },
  {
    title: 'Boring where it counts',
    desc: 'Novel technology gets used where it earns its complexity budget. Everywhere else, we pick the boring, well-understood option.',
  },
  {
    title: 'The pager is real',
    desc: 'Whoever designs the system stays close enough to it to feel what happens when it pages someone at 3am.',
  },
]

export default function About() {
  useSEO({
    title: 'About — webora is a dev',
    description:
      'webora is a dev started in 2020 as one freelance developer and grew into a full-spectrum technology company without losing the habit of shipping it right.',
    path: '/about',
  })

  return (
    <>
      <section className="hero container" style={{ paddingBottom: 'var(--space-4)' }}>
        <div className="hero__label eyebrow">About webora is a dev</div>
        <h1 className="type-h1" style={{ maxWidth: '20ch' }}>
          Started by one freelancer who insisted on shipping it right. Still true.
        </h1>
        <p className="type-lede mt-4">
          webora is a dev began in 2020 as one developer taking on freelance contracts.
          What grew was not headcount for its own sake — it was the range of problems
          clients trusted us to solve, from a single feature to the cloud migration
          behind it. That work, formalized into a company, became webora is a dev.
        </p>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>Founder</div>
            <h2 className="type-h2">Muhammad Talha Siddiqui</h2>
          </div>
          <p className="type-lede" style={{ maxWidth: 'none' }}>
            Founder of webora is a dev. Started freelancing in 2020 and spent five
            years taking direct responsibility for every project delivered — the
            habit that now shapes how things run here: small teams, direct
            communication, and no work handed off to someone who hasn't done it before.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>How we work</div>
            <h2 className="type-h2">Small senior teams, not large junior ones.</h2>
          </div>
          <p className="type-lede" style={{ maxWidth: 'none' }}>
            Every engagement is staffed by people who have shipped that category of
            work before, in a team small enough that context doesn't get lost between
            people. We would rather turn down a project than staff it with someone
            learning on the client's clock.
          </p>
        </div>
      </section>

      <section className="section section--alt" style={{ borderBottom: 'none' }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>Operating principles</div>
        </div>
        <div className="container" style={{ padding: 0 }}>
          <div className="value-grid">
            {principles.map((p, i) => (
              <div className="value-card" key={p.title}>
                <div className="value-card__index">0{i + 1}</div>
                <div className="value-card__title">{p.title}</div>
                <div className="value-card__desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: '2rem' }}>Timeline</div>
          <div className="capability-list">
            {timeline.map(([year, text]) => (
              <div className="capability-item" key={year}>
                <span className="capability-item__index type-mono" style={{ color: 'var(--ink)' }}>{year}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container cta-band">
          <h2 className="type-h2" style={{ maxWidth: '18ch' }}>Want to see how we'd staff your project?</h2>
          <Link to="/contact" className="btn btn--solid">Get in touch →</Link>
        </div>
      </section>
    </>
  )
}
