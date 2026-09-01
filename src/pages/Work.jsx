import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import { useSEO } from '../hooks/useSEO.js'
import { siteRoutes, paths } from '../data/seo-content.js'

export default function Work() {
  useSEO(siteRoutes.work)

  return (
    <>
      <section className="hero container" style={{ paddingBottom: 'var(--space-4)' }}>
        <div className="hero__label eyebrow">Selected work</div>
        <h1 className="type-h1" style={{ maxWidth: '20ch' }}>
          Freelance projects, before mTalha is a dev existed.
        </h1>
        <p className="type-lede mt-4">
          A sample of client work delivered solo before mTalha is a dev
          existed as a name. Details are illustrative — client names withheld by
          request, not fabricated for effect.
        </p>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container" style={{ padding: 0 }}>
          <div className="work-grid">
            {projects.map((p) => (
              <div className="work-card" key={p.slug}>
                <div className="work-card__meta type-mono">
                  <span>{p.sector}</span>
                </div>
                <div className="work-card__title">{p.title}</div>
                <div className="work-card__desc">{p.desc}</div>
                <div className="tag-list">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
                <Link to={paths.workItem(p.slug)} className="btn btn--ghost" style={{ alignSelf: 'flex-start' }}>
                  Open project →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container cta-band">
          <h2 className="type-h2" style={{ maxWidth: '18ch' }}>Want references from a similar engagement?</h2>
          <Link to={paths.contact} className="btn btn--solid">Request case studies →</Link>
        </div>
      </section>
    </>
  )
}
