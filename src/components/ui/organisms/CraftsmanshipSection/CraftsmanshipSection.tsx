import FeatureCard from '@/components/ui/molecules/FeatureCard/FeatureCard';
import styles from './CraftsmanshipSection.module.css';

const features = [
  {
    icon: '/images/icon-manufacturing.svg',
    title: 'Advanced Manufacturing',
    description: 'State-of-the-art technology for precision and consistency',
  },
  {
    icon: '/images/icon-precision.svg',
    title: 'Precision Engineering',
    description: 'Every curve and contour calculated to perfection',
  },
  {
    icon: '/images/icon-finishing.svg',
    title: 'Detailed Hand Finishing',
    description: 'Skilled artisans add the final touches of excellence',
  },
  {
    icon: '/images/icon-quality.svg',
    title: 'Rigorous Quality Checks',
    description: 'Multiple inspections ensure flawless delivery',
  },
];

export default function CraftsmanshipSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className="fs_54">Where Art Meets Precision</h2>
          <p className={styles.subtitle}>
            From concept to creation, every Zar bangle is crafted using state-of-the-art technology and meticulously inspected by skilled artisans.
          </p>
        </div>
        <div className={styles.grid}>
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
