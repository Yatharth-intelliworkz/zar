import styles from './page.module.css';

export const metadata = {
  title: 'Story of Zar — Zar Jewels',
  description: 'Discover the legacy behind Zar Jewels — over 60 years of crafting the finest gold bangles in India.',
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1>Story of Zar</h1>
      </section>
      <div className={styles.content}>
        <div className={styles.section}>
          <h2 className={styles.sectionHeading}>A Legacy Forged in Gold</h2>
          <p className={styles.sectionText}>
            For over 60 years, Zar has been one of India&apos;s leading gold bangle manufacturers. What started as a small family workshop has grown into a state-of-the-art manufacturing powerhouse, serving hundreds of retail partners across the country.
          </p>
          <p className={styles.sectionText}>
            Our journey is defined by an unwavering commitment to quality, innovation in design, and respect for the timeless art of goldsmithing. Every bangle we create carries with it decades of expertise and a promise of perfection.
          </p>
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionHeading}>Our Values</h2>
          <p className={styles.sectionText}>
            At Zar, we believe that true luxury lies in the details. From the selection of raw materials to the final polish, every step of our process is guided by precision, passion, and an obsession with quality that has defined us for generations.
          </p>
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionHeading}>Our Vision</h2>
          <p className={styles.sectionText}>
            To be the world&apos;s most trusted name in gold bangle manufacturing — known for innovation, craftsmanship, and relationships that last as long as our gold.
          </p>
        </div>
      </div>
    </div>
  );
}
