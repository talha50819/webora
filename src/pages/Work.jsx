import { Link } from 'react-router-dom'
import { services } from '../data/services.js'
import { useSEO } from '../hooks/useSEO.js'
import { siteRoutes, paths } from '../data/seo-content.js'
import { hasLiveDemo } from '../data/work-demos.js'

export default function Work() {
  useSEO(siteRoutes.work)

  return (
    <>
      <section className="hero container" style={{ paddingBottom: 'var(--space-4)' }}>
        <div className="hero__label eyebrow">Work</div>
        <h1 className="type-h1" style={{ maxWidth: '18ch' }}>
          A demo project for every service, on the way.
        </h1>
        <p className="type-lede mt-4">
          Pick a discipline below — each one will get a real, working demo project.
          Placeholders for now; check back soon.
        </p>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container">
          <div className="work-grid">
            {services.map((s) => (
              <Link to={paths.workItem(s.slug)} className="work-card" key={s.slug}>
                <div className="work-card__meta">
                  <span className="type-mono">{s.index}</span>
                  <span className="tag" style={hasLiveDemo(s.slug) ? { background: 'var(--lime)', borderColor: 'var(--lime)' } : undefined}>
                    {hasLiveDemo(s.slug) ? 'Live demo' : 'Coming soon'}
                  </span>
                </div>
                <div className="work-card__title">{s.name}</div>
                <div className="work-card__desc">{s.tagline}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
