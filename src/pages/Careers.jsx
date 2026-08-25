import { Link } from 'react-router-dom'
import { roles } from '../data/roles.js'
import { useSEO } from '../hooks/useSEO.js'
import { siteRoutes } from '../data/seo-content.js'

const perks = [
  { title: 'Remote-first, always', desc: 'webora is a dev — remote from day one, with no office to eventually mandate a return to.' },
  { title: 'Work directly with the founder', desc: "No management layer relaying notes. You'll talk to the person who owns the client relationship." },
  { title: 'Get in on the ground floor', desc: "The team is still forming at webora is a dev. Early collaborators help shape how it's run, not just execute inside a process someone else already set." },
]

export default function Careers() {
  useSEO(siteRoutes.careers)

  return (
    <>
      <section className="hero container" style={{ paddingBottom: 'var(--space-4)' }}>
        <div className="hero__label eyebrow">Careers</div>
        <h1 className="type-h1" style={{ maxWidth: '20ch' }}>
          Work with engineers who'd rather ship it right than ship it twice.
        </h1>
        <p className="type-lede mt-4">
          webora is a dev — a small, founder-led team taking on client work project
          by project. There's no fixed org chart yet — collaborators are brought on
          as the work requires it.
        </p>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container" style={{ padding: 0 }}>
          <div className="value-grid">
            {perks.map((p, i) => (
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
          <div className="eyebrow" style={{ marginBottom: '1rem' }}>Open to collaborate</div>
          <p className="type-lede mt-3" style={{ marginBottom: '1.5rem' }}>
            No fixed job openings right now — but if client work picks up in one
            of these areas, you'll hear from us first if you reach out.
          </p>
          <div className="role-list">
            {roles.map((r) => (
              <div className="role-row" key={r.title}>
                <span className="role-row__title">{r.title}</span>
                <span className="role-row__meta">{r.dept}</span>
                <span className="role-row__meta">{r.location}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container cta-band">
          <h2 className="type-h2" style={{ maxWidth: '18ch' }}>Think you'd be a good fit?</h2>
          <Link to="/contact" className="btn btn--solid">Introduce yourself →</Link>
        </div>
      </section>
    </>
  )
}
