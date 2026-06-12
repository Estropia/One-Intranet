import { Link, useLocation } from 'react-router-dom'
import styles from './MobileContactBar.module.css'

export default function MobileContactBar() {
  const { pathname } = useLocation()
  if (pathname === '/contact') return null
  return (
    <div className={styles.bar}>
      <a href="tel:+639544122708" className={styles.call}>Call</a>
      <Link to="/contact" className={styles.cta}>Contact us</Link>
    </div>
  )
}
