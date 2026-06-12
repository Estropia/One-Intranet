import styles from './SectionHeading.module.css'

export default function SectionHeading({ eyebrow, title, lead, align = 'left', light = false }) {
  return (
    <div className={`${styles.wrap} ${styles[align]} ${light ? styles.light : ''}`}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {lead && <p className={styles.lead}>{lead}</p>}
    </div>
  )
}
