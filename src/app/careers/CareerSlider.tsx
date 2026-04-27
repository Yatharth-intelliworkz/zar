"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import styles from './CareerSlider.module.css';

export default function CareerSlider() {
  const slides = Array.from({ length: 8 });

  return (
    <section className={styles.careerSliderSection}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
        }}
        className={styles.careerSwiper}
      >
        {slides.map((_, index) => (
          <SwiperSlide key={index} className={styles.careerSlide}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/images/career/career-1.png" 
                alt="Career at Zar Jewels" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
