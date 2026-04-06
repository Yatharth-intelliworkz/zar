import Image from 'next/image';
import BulletPoint from '@/components/ui/atoms/BulletPoint/BulletPoint';
import styles from './ModernWomanSection.module.css';

export default function ModernWomanSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.textBlock}>
            <h2 className={styles.heading}>Designed for the{'\n'}Modern Woman</h2>
            <div>
              <p className={styles.description}>
                Zar bangles are thoughtfully created for today&apos;s woman—confident, graceful, and contemporary. Lightweight yet luxurious, each design blends elegance with comfort.
              </p>
              <div className={styles.bullets}>
                <BulletPoint text="Confidence in Every Curve" />
                <BulletPoint text="Grace in Every Detail" />
                <BulletPoint text="Comfort in Every Wear" />
              </div>
            </div>
          </div>
          <div className={`${styles.imageBlock} ${styles.imageMask}`}>
            <Image
              src="/images/modern-woman.svg"
              alt="Modern woman wearing gold bangles"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
