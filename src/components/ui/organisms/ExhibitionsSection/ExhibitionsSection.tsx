import Image from 'next/image';
import Button from '@/components/ui/atoms/Button/Button';
import styles from './ExhibitionsSection.module.css';

export default function ExhibitionsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.backgroundImage}>
        <Image
          src="/images/homepage/event_bg.webp"
          alt=""
          fill
          sizes="100vw"
          aria-hidden="true"
        />
      </div>
      <div className={styles.overlay} />
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Upcoming Exhibitions</h2>
          <p className={styles.subtitle}>
            Discover our latest jewellery showcases and exclusive retail partner events.
          </p>
        </div>
        <div className={styles.eventCard}>
          <div className={styles.eventImage}>
            <Image
              src="/images/homepage/event.webp"
              alt="Sharjah Watch and Jewellery Show"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>
          <div className={styles.eventDetails}>
            <h3 className={styles.eventTitle}>Watch and Jewellery Show Sharjah</h3>
            <div className={styles.eventMeta}>
              <div className={styles.metaItem}>
                <svg className={styles.metaIcon} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.25 3H3.75C2.92157 3 2.25 3.67157 2.25 4.5V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V4.5C15.75 3.67157 15.0784 3 14.25 3Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 1.5V4.5M6 1.5V4.5M2.25 7.5H15.75" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>08 Apr - 12 Apr 2026</span>
              </div>
              <div className={styles.metaItem}>
                <svg className={styles.metaIcon} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.75 7.5C15.75 12.75 9 17.25 9 17.25C9 17.25 2.25 12.75 2.25 7.5C2.25 5.70979 2.96116 3.9929 4.22703 2.72703C5.4929 1.46116 7.20979 0.75 9 0.75C10.7902 0.75 12.5071 1.46116 13.773 2.72703C15.0388 3.9929 15.75 5.70979 15.75 7.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Sharjah, UAE</span>
              </div>
            </div>
            <p className={styles.eventDescription}>
              Sharjah Watch and Jewellery Show 2026 is a biannual event that will present the latest jewelry designs, trends in watch collections, and jewelry made up of precious stones and diamonds.
            </p>
            <Button href="#" variant="outline" showArrow>
              View Event
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
