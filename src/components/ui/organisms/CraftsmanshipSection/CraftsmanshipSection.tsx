'use client';

import { motion, type Variants } from 'framer-motion';
import FeatureCard from '@/components/ui/molecules/FeatureCard/FeatureCard';
import styles from './CraftsmanshipSection.module.css';

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' as const },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut' as const,
      delay: index * 0.18,
    },
  }),
};

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
    <section className="mt-100 mb-100">
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="fs_54">Where Art Meets Precision</h2>
          <p className={styles.subtitle}>
            From concept to creation, every Zar bangle is crafted using state-of-the-art technology and meticulously inspected by skilled artisans.
          </p>
        </motion.div>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
