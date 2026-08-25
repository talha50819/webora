import { Link } from 'react-router-dom'
import { services } from '../data/services.js'
import { useSEO } from '../hooks/useSEO.js'
import { siteRoutes, paths } from '../data/seo-content.js'

export default function Services() {
  useSEO(siteRoutes.services)

  return (
    <>
      <section className="hero container" style={{ paddingBottom: 'var(--space-4)' }}>
        <div className="hero__label eyebrow">Services</div>
        <h1 className="type-h1" style={{ maxWidth: '18ch' }}>
          Full-spectrum engineering, sold as seven disciplines instead of one vague retainer.
        </h1>
        <p className="type-lede mt-4">
          Engage one service or stitch several together — I carry the context across
          all of them personally, so nothing gets lost in a handoff between vendors.
        </p>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container">
          <div className="service-list">
            {services.map((s) => (
              <Link to={paths.service(s.slug)} className="service-row" key={s.slug}>
                <span className="index-number">{s.index}</span>
                <span>
                  <span className="service-row__name">{s.name}</span>
                  <div className="service-row__tagline">{s.summary}</div>
                </span>
                <span className="service-row__arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
