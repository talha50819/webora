import { Link, useLocation } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO.js'

export default function NotFound() {
  const { pathname } = useLocation()

  useSEO({
    title: 'Page Not Found — mTalha is a dev',
    description: "The page you're looking for was moved, renamed, or never existed.",
    path: pathname,
    noindex: true,
  })

  return (
    <section className="container not-found">
      <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>404</div>
      <h1 className="type-h1">This route doesn't resolve either.</h1>
      <p className="type-lede" style={{ margin: '1.5rem auto', textAlign: 'center' }}>
        The page you're looking for was moved, renamed, or never existed.
      </p>
      <Link to="/" className="btn btn--solid">Back to home →</Link>
    </section>
  )
}
