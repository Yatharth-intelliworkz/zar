'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import StatCard from '@/components/ui/atoms/StatCard/StatCard';
import styles from './LegacySection.module.css';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

export default function LegacySection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div 
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className={styles.imageBlock}>
            <motion.div className={styles.mainImage} variants={imageVariants}>
              <Image
                src="/images/homepage/about_home.webp"
                alt="Gold bangle craftsmanship"
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </motion.div>            
            <motion.div className={styles.statOverlay} variants={imageVariants}>
              <StatCard value="60+" label="Years of Excellence" animate />
            </motion.div>
          </div>
          <div className={styles.textBlock}>
            <motion.h2 className="fs_54" variants={textVariants}>A Legacy Forged in Gold</motion.h2>
            <motion.div className={styles.paragraphs} variants={textVariants}>
              <p>
                For over 60 years, Zar has been one of India&apos;s leading gold bangle manufacturers. Known for refined design, advanced manufacturing, and uncompromising quality.
              </p>
              <p>
                Every Zar bangle reflects a legacy of trust built across generations—a testament to our unwavering commitment to excellence and the art of goldsmithing.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
