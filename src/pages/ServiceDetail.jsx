import { useParams, Link, Navigate } from 'react-router-dom'
import { services, getServiceBySlug } from '../data/services.js'
import { useSEO, SITE_NAME } from '../hooks/useSEO.js'
import { buildServiceSeo } from '../data/seo-content.js'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)
  const seo = buildServiceSeo(service)

  useSEO(
    seo || {
      title: `Service not found — ${SITE_NAME}`,
      path: `/services/${slug}`,
      noindex: true,
    }
  )

  if (!service) return <Navigate to="/services" replace />

  const currentIdx = services.findIndex((s) => s.slug === slug)
  const next = services[(currentIdx + 1) % services.length]

  return (
    <>
      <section className="hero container" style={{ paddingBottom: 'var(--space-4)' }}>
        <div className="hero__label eyebrow">
          Service {service.index} / {String(services.length).padStart(2, '0')}
        </div>
        <h1 className="type-h1" style={{ maxWidth: '20ch' }}>{service.name}</h1>
        <p className="type-lede mt-4">{service.tagline}</p>
        <div className="hero__footer">
          <div className="tag-list">
            {service.stack.map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
          <Link to="/contact" className="btn btn--accent">Start this project →</Link>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>Overview</div>
            <p className="type-h3" style={{ fontWeight: 500, lineHeight: 1.4 }}>{service.description}</p>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>Capabilities</div>
            <div className="capability-list">
              {service.capabilities.map((c, i) => (
                <div className="capability-item" key={c}>
                  <span className="capability-item__index">{String(i + 1).padStart(2, '0')}</span>
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt" style={{ borderBottom: 'none' }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>How it runs</div>
        </div>
        <div className="container" style={{ padding: 0 }}>
          <div className="process-grid">
            {service.process.map(([title, desc], i) => (
              <div className="process-step" key={title}>
                <div className="process-step__index">0{i + 1}</div>
                <div className="process-step__title">{title}</div>
                <div className="process-step__desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container cta-band">
          <div>
            <div className="type-mono" style={{ color: 'var(--ink-soft)', marginBottom: '0.5rem' }}>Next service</div>
            <Link to={`/services/${next.slug}`} className="type-h2" style={{ display: 'block' }}>
              {next.name} →
            </Link>
          </div>
          <Link to="/contact" className="btn btn--solid">Talk to an engineer →</Link>
        </div>
      </section>
    </>
  )
}
