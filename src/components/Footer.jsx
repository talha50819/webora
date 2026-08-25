import { Link } from 'react-router-dom'
import { services } from '../data/services.js'
import { paths } from '../data/seo-content.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>Let's build</div>
        <h2 className="type-h1">
          Have a system worth <span style={{ color: 'var(--lime)' }}>building right?</span>
        </h2>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to={paths.contact} className="btn btn--accent">Start a project →</Link>
          <a href="mailto:talhasiddiqui433@gmail.com" className="btn btn--ghost">talhasiddiqui433@gmail.com</a>
        </div>
      </div>

      <div className="container footer-grid">
        <div className="footer-col">
          <div className="footer-col__title">Services</div>
          {services.slice(0, 5).map((s) => (
            <Link key={s.slug} to={paths.service(s.slug)}>{s.name}</Link>
          ))}
          <Link to={paths.services}>All services →</Link>
        </div>
        <div className="footer-col">
          <div className="footer-col__title">Company</div>
          <Link to={paths.about}>About</Link>
          <Link to={paths.work}>Work</Link>
          <Link to={paths.liveTv}>Live TV</Link>
          <Link to={paths.contact}>Contact</Link>
        </div>
        <div className="footer-col">
          <div className="footer-col__title">Contact</div>
          <p>talhasiddiqui433@gmail.com</p>
          <p>+92 335 8194817</p>
        </div>
        <div className="footer-col">
          <div className="footer-col__title">Follow</div>
          <a href="https://www.linkedin.com/in/muhammad-talha-siddiqui-406b49267" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/talha50819" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {year} webora is a dev. All rights reserved.</span>
        <span>Engineering systems that hold.</span>
      </div>
    </footer>
  )
}
