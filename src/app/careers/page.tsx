import Button from '@/components/ui/atoms/Button/Button';
import styles from './page.module.css';

export const metadata = {
  title: 'Careers — Zar Jewels',
  description: 'Join the Zar family. Explore career opportunities in luxury gold bangle manufacturing.',
};

const positions = [
  {
    title: 'Senior Goldsmith',
    location: 'Mumbai',
    type: 'Full-time',
    description: 'Join our team of expert goldsmiths crafting premium bangles. 5+ years of experience required in traditional goldsmithing techniques.',
  },
  {
    title: 'Quality Assurance Manager',
    location: 'Mumbai',
    type: 'Full-time',
    description: 'Lead our quality assurance processes and ensure every Zar product meets the highest standards of excellence.',
  },
  {
    title: 'Product Designer',
    location: 'Mumbai',
    type: 'Full-time',
    description: 'Design the next generation of gold bangles that blend traditional aesthetics with contemporary appeal.',
  },
  {
    title: 'Sales Executive — Retail Partnerships',
    location: 'Pan India',
    type: 'Full-time',
    description: 'Build and maintain relationships with our retail partners across India. Travel required.',
  },
];

export default function CareersPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1>Careers at Zar</h1>
      </section>
      <div className={styles.content}>
        <div className={styles.intro}>
          <p className={styles.introText}>
            At Zar, we believe our people are our greatest asset. Join a team that&apos;s been shaping the gold bangle industry for over 60 years.
          </p>
        </div>
        <div className={styles.positions}>
          {positions.map((pos) => (
            <div key={pos.title} className={styles.position}>
              <div className={styles.positionHeader}>
                <h3 className={styles.positionTitle}>{pos.title}</h3>
                <div className={styles.positionMeta}>
                  <span className={styles.tag}>{pos.location}</span>
                  <span className={styles.tag}>{pos.type}</span>
                </div>
              </div>
              <p className={styles.positionDescription}>{pos.description}</p>
              <Button href="/contact" variant="primary" showArrow>
                Apply Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
