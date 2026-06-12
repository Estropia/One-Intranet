import { useEffect, useRef, useState } from 'react'
import styles from './Stat.module.css'

export default function Stat({ value, suffix = '', label }) {
  const [n, setN] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setN(value); return }
    const el = ref.current
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (t) => {
        const p = Math.min((t - start) / 1200, 1)
        setN(Math.floor(p * value))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [value])
  return (
    <div ref={ref} className={styles.stat}>
      <span className={styles.num}>{n}{suffix}</span>
      <span className={styles.label}>{label}</span>
    </div>
  )
}
