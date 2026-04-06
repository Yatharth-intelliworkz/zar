import Button from '@/components/ui/atoms/Button/Button';
import styles from './ManufacturingSection.module.css';

export default function ManufacturingSection() {
  return (
    <section className={styles.section}>
      <video
        className={styles.backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
        poster="/images/homepage/video.webp"
      >
        <source src="/videos/manufacturing.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.card}>
          <h2 className={styles.heading}>Manufacturing Strength</h2>
          <div className={styles.textBlock}>
            <p className={styles.description}>
              With advanced infrastructure and experienced teams, Zar delivers consistency, quality, and reliability at scale—making us a trusted manufacturing partner for retailers nationwide.
            </p>
            <Button href="/partner" variant="primary" showArrow>
              Become a Partner
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
