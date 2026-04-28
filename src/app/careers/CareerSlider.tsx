"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import styles from './CareerSlider.module.css';

export default function CareerSlider() {
  const slides = [
    '/images/career/career3.webp',
    '/images/career/career4.webp',
    '/images/career/career5.webp',
    '/images/career/career2.webp',
  ];

  return (
    <section className={`mt-100 ${styles.careerSliderSection}`}>
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
        {slides.map((src, index) => (
          <SwiperSlide key={index} className={styles.careerSlide}>
            <div className={styles.imageWrapper}>
              <Image 
                src={src} 
                alt={`Career at Zar Jewels ${index + 1}`} 
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
