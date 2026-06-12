import styles from './ServiceCard.module.css'

export default function ServiceCard({ service }) {
  return (
    <article className={styles.card}>
      <div className={styles.media}><img src={service.image} alt={service.name} loading="lazy" /></div>
      <div className={styles.body}>
        <h3>{service.name}</h3>
        <p className={styles.tagline}>{service.tagline}</p>
        <p>{service.body}</p>
        <ul className={styles.points}>
          {service.points.map(p => <li key={p}>{p}</li>)}
        </ul>
      </div>
    </article>
  )
}
