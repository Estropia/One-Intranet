import SectionHeading from '../components/SectionHeading.jsx'
import ContactForm from '../components/ContactForm.jsx'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.page}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.info}>
          <SectionHeading eyebrow="Contact us" title="Let's get you powered and connected" lead="Tell us about your home, business, or community project and we'll be in touch." />
          <ul className={styles.details}>
            <li><strong>Address</strong><span>Blk 1, New York St., Cresdaville II, San Juan, Taytay Rizal</span></li>
            <li><strong>Phone</strong><a href="tel:+639544122708">+63 954 412 2708</a></li>
            <li><strong>Email</strong><a href="mailto:ad.oneintranet@gmail.com">ad.oneintranet@gmail.com</a></li>
            <li><strong>Website</strong><a href="https://www.oneintranet.co" target="_blank" rel="noreferrer">www.oneintranet.co</a></li>
          </ul>
        </div>
        <div className={styles.formWrap}>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
