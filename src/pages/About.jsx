import SectionHeading from '../components/SectionHeading.jsx'
import Button from '../components/Button.jsx'
import { leadership } from '../data/team.js'
import meetings from '../assets/images/meetings-img.png'
import coverPhoto from '../assets/images/cover-photo.png'
import styles from './About.module.css'

export default function About() {
  return (
    <>
      <section className={styles.head} style={{ backgroundImage: `url(${coverPhoto})` }}>
        <div className="container">
          <SectionHeading light eyebrow="About us" title="Building smart, resilient, inclusive communities" lead="One Intranet Corporation specializes in solar energy systems and internet infrastructure across residential, commercial, and underserved communities." />
        </div>
      </section>

      <section className={styles.section}>
        <div className={`container ${styles.storyGrid}`}>
          <div>
            <h2>Who we are</h2>
            <p>Founded in 2025 and based in Taytay, Rizal, we are committed to delivering sustainable, high-performance solutions that meet today's demands while building a cleaner, more connected tomorrow.</p>
            <p>By combining renewable energy technology with modern connectivity, we help bridge the digital divide and reduce environmental impact — creating opportunities for progress in both urban and rural areas.</p>
          </div>
          <img src={meetings} alt="One Intranet team at work" className={styles.storyImg} loading="lazy" />
        </div>
      </section>

      <section className={`${styles.section} ${styles.mission}`}>
        <div className={`container ${styles.center}`}>
          <SectionHeading light align="center" eyebrow="Mission & Vision" title="Enhancing urban and rural living through sustainable solutions" lead="We commit to innovative technology for a brighter, smarter, and greener community." />
        </div>
      </section>

      <section className={styles.section}>
        <div className={`container ${styles.center}`}>
          <SectionHeading title="Leadership" align="center" />
          <div className={styles.teamGrid}>
            {leadership
              .filter(m => m.name !== 'Denise Mae Ferreras' && m.name !== 'Louie Ann Ferreras' && m.name !== 'Mae Anne E. Ferreras')
              .map(m => (
                <div key={m.name} className={styles.member}>
                  <div className={styles.avatar}>{m.name.split(' ').map(w => w[0]).slice(0,2).join('')}</div>
                  <h3>{m.name}</h3>
                  <p>{m.role}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`container ${styles.center}`}>
          <br></br>
          <h2>Let's build something together</h2>
          <Button to="/contact">Get in touch</Button>
        </div>
      </section>
    </>
  )
}
