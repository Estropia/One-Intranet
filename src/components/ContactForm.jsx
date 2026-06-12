import { useState } from 'react'
import { validateContact } from '../lib/validateContact.js'
import Button from './Button.jsx'
import styles from './ContactForm.module.css'

const EMPTY = { name: '', email: '', message: '' }

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const onChange = (e) => setValues(v => ({ ...v, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    const { valid, errors: errs } = validateContact(values)
    setErrors(errs)
    if (!valid) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setValues(EMPTY)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return <div className={styles.success}><h3>Thank you!</h3><p>Your message has been sent. We'll get back to you shortly.</p></div>
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" value={values.name} onChange={onChange} aria-invalid={!!errors.name} />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>
      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={values.email} onChange={onChange} aria-invalid={!!errors.email} />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>
      <div className={styles.field}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} value={values.message} onChange={onChange} aria-invalid={!!errors.message} />
        {errors.message && <span className={styles.error}>{errors.message}</span>}
      </div>
      {status === 'error' && <p className={styles.formError}>Something went wrong. Please try again or email us directly.</p>}
      <Button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </Button>
    </form>
  )
}
