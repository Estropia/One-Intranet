import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'
import { coverage, coverageTotal } from '../data/coverage.js'
import styles from './Projects.module.css'

export default function Projects() {
  const withVideo = projects.filter(p => p.video)
  return (
    <>
      <section className={styles.head}>
        <div className="container">
          <SectionHeading light eyebrow="Our work" title="Projects & coverage" lead="Real deployments powering and connecting communities across the Philippines." />
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {projects.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.videos}`}>
        <div className="container">
          <SectionHeading eyebrow="In the field" title="See it in action" />
          <div className={styles.videoGrid}>
            {withVideo.map(p => (
              <figure key={p.id} className={styles.videoCard}>
                <video controls preload="none" poster={p.image}>
                  <source src={p.video} type="video/mp4" />
                </video>
                <figcaption>{p.title} — {p.location}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.coverage}`}>
        <div className="container">
          <SectionHeading light align="center" eyebrow="Where we operate" title={`${coverageTotal}+ barangays and growing`} />
          <div className={styles.covGrid}>
            {coverage.map(c => (
              <div key={c.province} className={styles.covCard}>
                <span className={styles.covNum}>{c.count}</span>
                <h3>{c.province}</h3>
                <p>{c.towns.join(' · ')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
