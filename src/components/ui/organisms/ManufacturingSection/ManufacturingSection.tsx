'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/atoms/Button/Button';
import styles from './ManufacturingSection.module.css';

export default function ManufacturingSection() {
  return (
    <section className={`${styles.section} mt-100`}>
      <motion.video
        className={styles.backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
        poster="/images/homepage/video.webp"        
      >
        <source src="/videos/manufacturing.mp4" type="video/mp4" />
      </motion.video>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.heading}>Manufacturing Strength</h2>
          <div className={styles.textBlock}>
            <p className="txt_white">
              With advanced infrastructure and experienced teams, Zar delivers consistency, quality, and reliability at scale—making us a trusted manufacturing partner for retailers nationwide.
            </p>
            <Button href="/partner" variant="outline" showArrow>
              Become a Partner
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
