import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { services, getServiceBySlug } from '../data/services.js'
import { useSEO, SITE_NAME } from '../hooks/useSEO.js'
import { buildWorkSeo, paths } from '../data/seo-content.js'
import { workDemos } from '../data/work-demos.js'
import { demoComponents } from '../components/demos/index.js'

const DEVICE_VIEWS = [
  { id: 'desktop', label: 'Desktop', width: '100%', icon: IconDesktop },
  { id: 'tablet', label: 'Tablet', width: '768px', icon: IconTablet },
  { id: 'mobile', label: 'Mobile', width: '390px', icon: IconMobile },
]

export default function WorkDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)
  const seo = buildWorkSeo(service)
  const project = workDemos[slug]
  const Demo = demoComponents[slug]
  const hasDemo = Boolean(project && Demo)
  const [device, setDevice] = useState('desktop')
  const activeWidth = DEVICE_VIEWS.find((d) => d.id === device).width

  useSEO(
    seo || {
      title: `Demo not found — ${SITE_NAME}`,
      path: paths.workItem(slug),
      noindex: true,
    }
  )

  if (!service) return <Navigate to={paths.work} replace />

  return (
    <>
      <nav aria-label="Breadcrumb" className="container" style={{ paddingTop: 'var(--space-3)' }}>
        <ol
          className="type-mono"
          style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', color: 'var(--ink-soft)', listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem' }}
        >
          <li><Link to={paths.home} style={{ color: 'inherit' }}>Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link to={paths.work} style={{ color: 'inherit' }}>Work</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" style={{ color: 'var(--ink)' }}>{service.name}</li>
        </ol>
      </nav>

      {hasDemo ? (
        <section className={`demo-theme--${project.theme} dt-showcase`}>
          <div className="dt-showcase__inner">
            <div className="dt-showcase__eyebrow">{service.name} · interactive demo</div>
            <h1 className="dt-showcase__title">{project.projectTitle}</h1>
            <p className="dt-showcase__sub">{project.tagline}</p>
            <div className="dt-showcase__chips">
              {project.highlights.map((h) => (
                <span className="dt-tag" key={h}>{h}</span>
              ))}
            </div>
            <div className="dt-showcase__actions">
              <a href="#work-demo" className="dt-btn">Try the live demo ↓</a>
              <Link to={paths.service(service.slug)} className="dt-btn dt-btn--ghost">See the {service.name} service</Link>
            </div>
          </div>
        </section>
      ) : (
        <section className="hero container" style={{ paddingBottom: 'var(--space-4)' }}>
          <div className="hero__label eyebrow">{service.name} demo</div>
          <h1 className="type-h1" style={{ maxWidth: '20ch' }}>Coming soon.</h1>
          <p className="type-lede mt-4">
            A working {service.name.toLowerCase()} demo is being built for this slot. In the meantime, here's what a real engagement in this discipline looks like.
          </p>
          <div className="hero__footer">
            <Link to={paths.service(service.slug)} className="btn btn--accent">See the {service.name} service →</Link>
            <Link to={paths.work} className="btn btn--ghost">← Back to Work</Link>
          </div>
        </section>
      )}

      {hasDemo && project.frame === 'phone' ? (
        <section className="section" style={{ borderBottom: 'none' }} id="work-demo">
          <div className="container">
            <div className="eyebrow" style={{ marginBottom: '1.25rem', textAlign: 'center' }}>A real mobile app — tap around</div>
            <Demo />
            <p className="type-mono mt-3" style={{ color: 'var(--ink-soft)', fontSize: '0.75rem', textAlign: 'center' }}>
              {project.note}
            </p>
          </div>
        </section>
      ) : hasDemo ? (
        <section className="section" style={{ borderBottom: 'none' }} id="work-demo">
          <div className="container container--wide">
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>See it respond — switch devices below</div>
            <div className="demo-frame" style={{ maxWidth: activeWidth, margin: '0 auto' }}>
              <div className="demo-frame__bar">
                <span className="demo-frame__dot" />
                <span className="demo-frame__dot" />
                <span className="demo-frame__dot" />
                <div className="demo-frame__devices" role="group" aria-label="Preview width">
                  {DEVICE_VIEWS.map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      type="button"
                      className={device === id ? 'is-active' : ''}
                      aria-label={`${label} view`}
                      aria-pressed={device === id}
                      title={label}
                      onClick={() => setDevice(id)}
                    >
                      <Icon />
                    </button>
                  ))}
                </div>
                <span className="demo-frame__label">{project.demoLabel}</span>
              </div>
              <div className="demo-frame__body">
                <Demo />
              </div>
            </div>
            <p className="type-mono mt-3" style={{ color: 'var(--ink-soft)', fontSize: '0.75rem' }}>
              {project.note}
            </p>
          </div>
        </section>
      ) : (
        <section className="section" style={{ borderBottom: 'none' }}>
          <div className="container">
            <div className="work-grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="work-card" style={{ minHeight: 'auto' }}>
                <div className="work-card__meta">
                  <span className="type-mono">{service.index}</span>
                  <span className="tag">Placeholder</span>
                </div>
                <div className="work-card__desc">{service.summary}</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {services.length > 1 && (
        <section className="section" style={{ borderBottom: 'none' }}>
          <div className="container cta-band">
            <div>
              <div className="type-mono" style={{ color: 'var(--ink-soft)', marginBottom: '0.5rem' }}>Next demo</div>
              <Link
                to={paths.workItem(services[(services.findIndex((s) => s.slug === slug) + 1) % services.length].slug)}
                className="type-h2"
                style={{ display: 'block' }}
              >
                {services[(services.findIndex((s) => s.slug === slug) + 1) % services.length].name} →
              </Link>
            </div>
            <Link to={paths.contact} className="btn btn--solid">Talk to an engineer →</Link>
          </div>
        </section>
      )}
    </>
  )
}

// Small local icon set for the device-view switcher — inherits color via
// currentColor so it themes with .demo-frame__devices button states.
function iconBase(props) {
  return { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', width: 15, height: 15, ...props }
}
function IconDesktop(props) {
  return (
    <svg {...iconBase(props)}>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  )
}
function IconTablet(props) {
  return (
    <svg {...iconBase(props)}>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" />
    </svg>
  )
}
function IconMobile(props) {
  return (
    <svg {...iconBase(props)}>
      <rect x="7" y="2" width="10" height="20" rx="2.5" />
      <path d="M12 18h.01" />
    </svg>
  )
}
