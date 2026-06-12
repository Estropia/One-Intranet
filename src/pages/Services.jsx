import Button from '../components/Button.jsx'
import { services } from '../data/services.js'
import heroVideo from '../assets/videos/barangay-hall-video.mp4'
import styles from './Services.module.css'

export default function Services() {
  return (
    <>
      <section className={styles.hero}>
        <video className={styles.heroVideo} autoPlay muted loop playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroInner}`}>
          <span className={styles.eyebrow}>Power2Connect</span>
          <h1 className={styles.title}>Clean energy and connectivity for every community.</h1>
          <p className={styles.lead}>Power 2 Connect installs solar energy systems and high-speed internet infrastructure across the Philippines — bridging the digital divide, one community at a time.</p>
          <div className={styles.actions}>
            <Button to="/contact">Get connected</Button>
          </div>
        </div>
      </section>

      {services.map((s, i) => (
        <section key={s.id} id={s.id} className={styles.row}>
          <div className={`container ${styles.rowInner} ${i % 2 ? styles.reverse : ''}`}>
            <div className={styles.media}>
              <img src={s.image} alt={s.name} loading="lazy" />
            </div>
            <div className={styles.text}>
              <h2>{s.name}</h2>
              <p className={styles.tagline}>{s.tagline}</p>
              {s.body && <p>{s.body}</p>}
              <ul>{s.points.map(p => <li key={p}>{p}</li>)}</ul>
              {s.gallery && (
                <div className={styles.gallery}>
                  {s.gallery.map((g, idx) => <img key={idx} src={g} alt={`${s.name} ${idx + 1}`} loading="lazy" />)}
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <h2>Have a project in mind?</h2>
          <Button to="/contact">Request a consultation</Button>
        </div>
      </section>
    </>
  )
}
