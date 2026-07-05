import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container site-header__row">
        <NavLink to="/" className="logo-mark" onClick={() => setOpen(false)}>
          <span className="logo-mark__box">W</span>
          Webora
        </NavLink>

        <nav className="main-nav">
          <div className="main-nav__links">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <NavLink to="/contact" className="btn btn--solid">
            Start a Project
          </NavLink>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span style={{ transform: open ? 'translateY(3.5px) rotate(45deg)' : 'none' }} />
            <span style={{ opacity: open ? 0 : 1 }} />
            <span style={{ transform: open ? 'translateY(-3.5px) rotate(-45deg)' : 'none' }} />
          </button>
        </nav>
      </div>

      {open && (
        <div className="mobile-menu">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/contact" onClick={() => setOpen(false)}>
            Start a Project →
          </NavLink>
        </div>
      )}
    </header>
  )
}
