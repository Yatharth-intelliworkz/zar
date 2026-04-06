import Button from '@/components/ui/atoms/Button/Button';
import styles from './page.module.css';

export const metadata = {
  title: 'Become a Partner — Zar Jewels',
  description: 'Partner with India\'s leading gold bangle manufacturer. Join the Zar network of trusted retailers.',
};

export default function PartnerPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1>Become a Partner</h1>
      </section>
      <div className={styles.content}>
        <div className={styles.intro}>
          <p className={styles.introText}>
            Join India&apos;s most trusted gold bangle manufacturer. Zar offers competitive pricing, consistent quality, and a wide range of designs tailored for your market.
          </p>
          <p className={styles.introText}>
            Fill out the form below and our partnership team will get back to you within 24 hours.
          </p>
        </div>
        <form className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Your full name" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="company">Company Name</label>
              <input type="text" id="company" placeholder="Your company" />
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="you@company.com" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="+91 XXXXX XXXXX" />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="city">City / State</label>
            <input type="text" id="city" placeholder="Your city" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Tell us about your business and partnership interest..." />
          </div>
          <Button variant="primary" showArrow>
            Submit Enquiry
          </Button>
        </form>
      </div>
    </div>
  );
}
