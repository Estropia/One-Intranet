import styles from './ProjectCard.module.css'

export default function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img src={project.image} alt={project.title} loading="lazy" />
        <span className={styles.tag}>{project.category}</span>
      </div>
      <div className={styles.body}>
        <h3>{project.title}</h3>
        <p className={styles.loc}>{project.location}</p>
        <p>{project.summary}</p>
      </div>
    </article>
  )
}
