import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO.js'
import { siteRoutes, paths } from '../data/seo-content.js'

const timeline = [
  ['2020', 'Muhammad Talha Siddiqui starts out as an independent freelance developer, taking on web and software contracts solo.'],
  ['2022', 'Referral-driven client work expands into mobile, cloud, and security engagements — still a one-person operation.'],
  ['2024', 'Starts bringing in trusted freelancers and specialists project by project, for pieces outside my own core skills — never as in-house hires, always people I already know the work of.'],
  ['2026', 'The practice becomes webora is a dev — the name for how I find clients, deliver the work myself or through a vetted specialist, and hand every project back finished.'],
]

const principles = [
  {
    title: 'Write it down',
    desc: 'Architecture decisions, tradeoffs, and runbooks get documented as I go — not reconstructed from memory during a handoff.',
  },
  {
    title: 'Boring where it counts',
    desc: 'Novel technology gets used where it earns its complexity budget. Everywhere else, I pick the boring, well-understood option.',
  },
  {
    title: 'The pager is real',
    desc: 'Whoever designs the system stays close enough to it to feel what happens when it pages someone at 3am.',
  },
]

export default function About() {
  useSEO(siteRoutes.about)

  return (
    <>
      <section className="hero container" style={{ paddingBottom: 'var(--space-4)' }}>
        <div className="hero__label eyebrow">About webora is a dev</div>
        <h1 className="type-h1" style={{ maxWidth: '20ch' }}>
          Started by one freelancer who insisted on shipping it right. Still true.
        </h1>
        <p className="type-lede mt-4">
          webora is a dev began in 2020 as one developer taking on freelance contracts.
          What grew wasn't headcount — it was the range of problems clients trusted me
          to solve, from a single feature to the cloud migration behind it, and the
          network of vetted specialists I could call on when a project needed something
          outside my own skills. That practice became webora is a dev.
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
            habit that now shapes how things run: I find the client, scope the work,
            and either build it myself or bring in a specialist I've already vetted.
            Either way, you deal with one person, start to finish.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>How I work</div>
            <h2 className="type-h2">One accountable person, not a rotating cast.</h2>
          </div>
          <p className="type-lede" style={{ maxWidth: 'none' }}>
            Every project is delivered by me directly, or by a specialist I've already
            worked with and vetted for that exact kind of work — never a stranger
            learning on your clock. I'd rather turn down a project than bring in
            someone unproven, and I stay involved from the first call to final
            delivery no matter who's writing the code.
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
          <h2 className="type-h2" style={{ maxWidth: '18ch' }}>Want to see how I'd staff your project?</h2>
          <Link to={paths.contact} className="btn btn--solid">Get in touch →</Link>
        </div>
      </section>
    </>
  )
}
