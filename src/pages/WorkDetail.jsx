import { useParams, Link, Navigate } from 'react-router-dom'
import { projects, getProjectBySlug } from '../data/projects.js'
import { useSEO, SITE_NAME } from '../hooks/useSEO.js'
import { buildWorkSeo, paths } from '../data/seo-content.js'
import { demoComponents } from '../components/demos/index.js'

export default function WorkDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  const seo = buildWorkSeo(project)

  useSEO(
    seo || {
      title: `Project not found — ${SITE_NAME}`,
      path: paths.workItem(slug),
      noindex: true,
    }
  )

  if (!project) return <Navigate to={paths.work} replace />

  const Demo = demoComponents[project.demo]
  const currentIdx = projects.findIndex((p) => p.slug === slug)
  const next = projects[(currentIdx + 1) % projects.length]

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
          <li aria-current="page" style={{ color: 'var(--ink)' }}>{project.title}</li>
        </ol>
      </nav>

      <section className="hero container" style={{ paddingBottom: 'var(--space-4)' }}>
        <div className="hero__label eyebrow">{project.sector}</div>
        <h1 className="type-h1" style={{ maxWidth: '26ch' }}>{project.title}</h1>
        <p className="type-lede mt-4">{project.desc}</p>
        <div className="hero__footer">
          <div className="tag-list">
            {project.tags.map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
          <Link to={paths.contact} className="btn btn--accent">Start something like this →</Link>
        </div>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container container--wide">
          <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>Interactive demo — try it</div>
          <div className="demo-frame">
            <div className="demo-frame__bar">
              <span className="demo-frame__dot" />
              <span className="demo-frame__dot" />
              <span className="demo-frame__dot" />
              <span className="demo-frame__label">{project.demoLabel || `${project.slug}.demo`}</span>
            </div>
            <div className="demo-frame__body">
              {Demo ? <Demo /> : <p className="type-mono">Demo coming soon.</p>}
            </div>
          </div>
          <p className="type-mono mt-3" style={{ color: 'var(--ink-soft)', fontSize: '0.75rem' }}>
            Rebuilt sandbox for this portfolio piece — illustrative, not the client's actual product.
          </p>
        </div>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container cta-band">
          <div>
            <div className="type-mono" style={{ color: 'var(--ink-soft)', marginBottom: '0.5rem' }}>Next project</div>
            <Link to={paths.workItem(next.slug)} className="type-h2" style={{ display: 'block' }}>
              {next.title} →
            </Link>
          </div>
          <Link to={paths.contact} className="btn btn--solid">Talk about your project →</Link>
        </div>
      </section>
    </>
  )
}
