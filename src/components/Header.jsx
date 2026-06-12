import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../assets/images/logo-nobg2.png'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link to="/" className={styles.brand} onClick={() => setOpen(false)}>
          <img src={logo} alt="One Intranet logo" className={styles.logo} />
          <span className={styles.brandText}>One Intranet Corporation<small>Power2Connect</small></span>
        </Link>
        <button
          className={styles.burger}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => isActive ? styles.active : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className={styles.cta} onClick={() => setOpen(false)}>
            Get Connected
          </Link>
        </nav>
      </div>
    </header>
  )
}
