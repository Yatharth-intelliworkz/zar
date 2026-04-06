'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/atoms/Button/Button';
import EnquiryModal from '@/components/ui/organisms/EnquiryModal/EnquiryModal';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImage}>
        <Image
          src="/images/homepage/banner.webp"
          alt="Luxury gold bangle editorial"
          fill
          sizes="100vw"
          priority
        />
      </div>
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h1 className={styles.heading}>
            INDIA’S TRUSTED{'\n'}GOLD BANGLE MANUFACTURER
          </h1>
          <p className={styles.subtitle}>
            Crafting lightweight, elegant gold bangles through innovation, precision, and timeless craftsmanship.
          </p>
        </div>
        <Button variant="outline" showArrow onClick={() => setEnquiryOpen(true)}>
          Enquire Now
        </Button>
      </div>

      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </section>
  );
}
