"use client";

import ClientLogo from '@/components/ui/molecules/ClientLogo/ClientLogo';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import styles from './TrustedBrandsSection.module.css';
const brands = [
  { name: 'Senco Gold', logo: '/images/homepage/brand-senco.svg' },
  { name: 'BC Jeweller', logo: '/images/homepage/brand-bcj.svg' },
  { name: 'Tanishq', logo: '/images/homepage/brand-bcj.svg' },
  { name: 'Joyalukkas', logo: '/images/homepage/brand-bcj.svg' },
  { name: 'CaratLane', logo: '/images/homepage/brand-bcj.svg' },
  { name: 'Malabar Gold', logo: '/images/homepage/brand-bcj.svg' },
  { name: 'Kalyan Jewellers', logo: '/images/homepage/brand-bcj.svg' },
  { name: 'GRT Jewellers', logo: '/images/homepage/brand-bcj.svg' },
  { name: 'Anjali Jewellers', logo: '/images/homepage/brand-bcj.svg' },
  { name: 'Joyalukkas 2', logo: '/images/homepage/brand-bcj.svg' },
  { name: 'pcj', logo: '/images/homepage/brand-senco.svg' },
  { name: 'giva', logo: '/images/homepage/brand-senco.svg' },
];

export default function TrustedBrandsSection() {
  return (
    <section className="mt-100">
      <div className={styles.inner}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="fs_54">Trusted Across Generations</h2>
          <p className="">
            Zar&apos;s commitment to quality and design has earned the trust of partners and patrons alike. We don&apos;t just sell bangles; we build relationships that last as long as our gold.
          </p>
        </motion.div>
      </div>
      <motion.div 
        className={styles.marquee}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView="auto"
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <ClientLogo name={brand.name} logo={brand.logo} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
