import Image from 'next/image';
import styles from './TestimonialsSection.module.css';

export default function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.heading}>What Our Retailers Say</h2>
          <p className={styles.subtitle}>
            Hear from our patrons about their journey through our exclusive showcases.
          </p>
        </div>
        <div className={styles.testimonialWrapper}>
          <div className={styles.sideImage}>
            <Image
              src="/images/testimonial-left.svg"
              alt="Gold bangles"
              fill
              sizes="600px"
            />
          </div>
          <div className={styles.centerContent}>
            <div className={styles.videoWrapper}>
              <Image
                src="/images/testimonial-video.svg"
                alt="Testimonial video"
                fill
                sizes="800px"
              />
              <div className={styles.playIcon}>
                <svg viewBox="0 0 60 70" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 5L55 35L10 65V5Z" />
                </svg>
              </div>
            </div>
            <div className={styles.quoteBlock}>
              <Image
                src="/images/quote-icon.svg"
                alt=""
                width={54}
                height={41}
                className={styles.quoteIcon}
              />
              <p className={styles.quoteText}>
                &ldquo;The bangles I found at the expo were exactly what I&apos;d been searching for. The craftsmanship is truly world-class.&rdquo;
              </p>
              <div className={styles.authorBlock}>
                <p className={styles.authorName}>Priya Sharma</p>
                <p className={styles.authorRole}>Bridal Client</p>
              </div>
            </div>
          </div>
          <div className={styles.sideImage}>
            <Image
              src="/images/testimonial-right.svg"
              alt="Gold bangles"
              fill
              sizes="600px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
