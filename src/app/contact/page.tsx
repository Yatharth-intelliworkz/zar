import Button from '@/components/ui/atoms/Button/Button';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact — Zar Jewels',
  description: 'Get in touch with Zar Jewels. Enquire about our gold bangle collections or partnership opportunities.',
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1>Contact Us</h1>
      </section>
      <div className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.infoSection}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Address</span>
              <p className={styles.infoValue}>
                Zar Gold Bangles Pvt. Ltd.<br />
                Zaveri Bazaar, Mumbai,<br />
                Maharashtra 400003, India
              </p>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Email</span>
              <p className={styles.infoValue}>
                <a href="mailto:info@zarjewels.com">info@zarjewels.com</a>
              </p>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Phone</span>
              <p className={styles.infoValue}>
                <a href="tel:+912222001234">+91 22 2200 1234</a>
              </p>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Working Hours</span>
              <p className={styles.infoValue}>
                Monday – Saturday<br />
                10:00 AM – 7:00 PM
              </p>
            </div>
          </div>
          <div className={styles.formSection}>
            <h2 className={styles.formHeading}>Send us a Message</h2>
            <form className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="Your full name" />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="you@email.com" />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="How can we help?" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Your message..." />
              </div>
              <Button variant="primary" showArrow>
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
