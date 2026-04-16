import Image from 'next/image';
import BulletPoint from '@/components/ui/atoms/BulletPoint/BulletPoint';
import styles from './ModernWomanSection.module.css';

export default function ModernWomanSection() {
  return (
    <section className={styles.section}>
      <div className={styles.backgroundImage}>
        <Image
          src="/images/homepage/ModernWoman-img.png"
          alt="Modern woman wearing gold bangles"
          fill
          sizes="100vw"          
        />
      </div>
      <div className={styles.inner}>
        <div className={styles.textBlock}>
          <h2 className="fs_54">Designed for the{'\n'}Modern Woman</h2>
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
      </div>
    </section>
  );
}
