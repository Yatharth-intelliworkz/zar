import Image from 'next/image';
import StatCard from '@/components/ui/atoms/StatCard/StatCard';
import styles from './LegacySection.module.css';

export default function LegacySection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.imageBlock}>
            <div className={styles.mainImage}>
              <Image
                src="/images/homepage/about_home.webp"
                alt="Gold bangle craftsmanship"
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>            
            <div className={styles.statOverlay}>
              <StatCard value="60+" label="Years of Excellence" animate />
            </div>
          </div>
          <div className={styles.textBlock}>
            <h2 className="fs_54">A Legacy Forged in Gold</h2>
            <div className={styles.paragraphs}>
              <p>
                For over 60 years, Zar has been one of India&apos;s leading gold bangle manufacturers. Known for refined design, advanced manufacturing, and uncompromising quality.
              </p>
              <p>
                Every Zar bangle reflects a legacy of trust built across generations—a testament to our unwavering commitment to excellence and the art of goldsmithing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
