'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import BulletPoint from '@/components/ui/atoms/BulletPoint/BulletPoint';
import styles from './ModernWomanSection.module.css';

export default function ModernWomanSection() {
  return (
    <section className={styles.section}>
      <motion.div 
        className={styles.backgroundImage}
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Image
          src="/images/homepage/ModernWoman-img.png"
          alt="Modern woman wearing gold bangles"
          fill
          sizes="100vw"          
        />
      </motion.div>
      <div className={styles.inner}>
        <motion.div 
          className={styles.textBlock}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.25 } },
            hidden: {}
          }}
        >
          <motion.h2 className="fs_54" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }}>
            Designed for the{'\n'}Modern Woman
          </motion.h2>
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }}>
            <p className={styles.description}>
              Zar bangles are thoughtfully created for today&apos;s woman—confident, graceful, and contemporary. Lightweight yet luxurious, each design blends elegance with comfort.
            </p>
            <div className={styles.bullets}>
              <BulletPoint text="Confidence in Every Curve" />
              <BulletPoint text="Grace in Every Detail" />
              <BulletPoint text="Comfort in Every Wear" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
