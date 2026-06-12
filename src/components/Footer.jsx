import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <h3 className={styles.brand}>One Intranet Corporation</h3>
          <p className={styles.tag}>Power2Connect — clean energy & connectivity for every community.</p>
        </div>
        <div>
          <h4>Visit</h4>
          <p>Blk. 4 Lot 15, Summerfield Villas,<br/>Taytay, Rizal, 1920, Philippines</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p><a href="tel:+639544122708">+63 954 412 2708</a></p>
          <p><a href="mailto:ad.oneintranet@gmail.com">ad.oneintranet@gmail.com</a></p>
          <p><a href="https://www.oneintranet.co" target="_blank" rel="noreferrer">www.oneintranet.co</a></p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className={styles.base}>
        <span>© {new Date().getFullYear()} One Intranet Corporation. All rights reserved.</span>
      </div>
    </footer>
  )
}
