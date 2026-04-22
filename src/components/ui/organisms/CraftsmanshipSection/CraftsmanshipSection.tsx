'use client';

import { motion } from 'framer-motion';
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
    <section className="mt-100">
      <motion.div 
        className={styles.inner}
        initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
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
      </motion.div>
    </section>
  );
}
