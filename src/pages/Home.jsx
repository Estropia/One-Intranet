import { useRef, useState } from 'react'
import Button from '../components/Button.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import Stat from '../components/Stat.jsx'
import { services } from '../data/services.js'
import { projects } from '../data/projects.js'
import { coverageTotal } from '../data/coverage.js'
import heroVideo from '../assets/videos/landing-page-video.mp4'
import styles from './Home.module.css'

export default function Home() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  function handlePlay() {
    const video = videoRef.current
    const ctx = new AudioContext()
    const source = ctx.createMediaElementSource(video)
    const gain = ctx.createGain()
    gain.gain.value = 5
    source.connect(gain)
    gain.connect(ctx.destination)
    video.play()
    setPlaying(true)
  }

  return (
    <>
      <section className={styles.hero}>
        <video ref={videoRef} className={styles.heroVideo} loop playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>
        {!playing && (
          <button className={styles.playBtn} onClick={handlePlay} aria-label="Play video">
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="40" fill="rgba(0,0,0,0.45)" />
              <polygon points="32,24 60,40 32,56" fill="white" />
            </svg>
          </button>
        )}
      </section>

      <section className={styles.stats}>
        <div className={`container ${styles.statsGrid}`}>
          <Stat value={coverageTotal} suffix="+" label="Barangays served" />
          <Stat value={3} suffix="" label="Provinces & regions" />
          <Stat value={2} suffix="" label="Core service lines" />
          <Stat value={100} suffix="%" label="Community-focused" />
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <SectionHeading eyebrow="What we do" title="Two essential resources, one trusted partner" lead="We pair renewable energy with modern connectivity to build smart, resilient, inclusive communities." />
          <div className={styles.serviceGrid}>
            {services.map(s => <ServiceCard key={s.id} service={s} />)}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.dark}`}>
        <div className="container">
          <SectionHeading light eyebrow="On the ground" title="Featured projects" lead="Real deployments connecting and powering communities nationwide." />
          <div className={styles.projectGrid}>
            {projects.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
          <div className={styles.center}><Button to="/projects" variant="ghost">View all projects</Button></div>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={`container ${styles.ctaInner}`}>
          <h2>Ready to power and connect your community?</h2>
          <br></br>
          <Button to="/contact">Contact us</Button>
        </div>
      </section>
    </>
  )
}
