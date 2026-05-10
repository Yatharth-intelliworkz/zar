'use client';

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Button from '@/components/ui/atoms/Button/Button';
import { showcaseModels } from '@/lib/model-showcase';

// Duplicate list so Swiper loop mode has enough slides (needs >= slidesPerView * 2 = 6).
const displayModels = [...showcaseModels, ...showcaseModels];
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import styles from './ModelShowcaseSection.module.css';

const ArrowIcon = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.75" y="0.75" width="70.5" height="70.5" rx="35.25" fill="white" />
    <rect x="0.75" y="0.75" width="70.5" height="70.5" rx="35.25" stroke="#A38274" strokeWidth="1.5" />
    <path d="M29.7419 48.1166L42.2579 35.6006L29.7419 23.8828" stroke="#A38274" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ModelShowcaseSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    void import('@google/model-viewer');
  }, []);

  return (
    <section className="mt-100" aria-labelledby="model-showcase-title">
      <div className="container">
        <header className={styles.header}>
          <h2 id="model-showcase-title" className="fs_54">Signature Gold Bangles</h2>
          <p className="">
            Discover a curated range of lightweight gold bangles that balance tradition and modern design, crafted with precision and consistency at scale.
          </p>
          <Button href="javascript:void(0)" variant="primary" showArrow>
            Explore Collections
          </Button>
        </header>

        <div className={styles.sliderWrapper}>
          <button
            className={`${styles.navBtn} ${styles.navPrev}`}
            aria-label="Previous slide"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ArrowIcon />
          </button>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            allowTouchMove={false}
            // autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className={styles.slider}
          >
            {displayModels.map((model, index) => (
              <SwiperSlide key={`${model.src}-${index}`}>
                <article className={styles.card}>
                  <div className={styles.modelWrapper}>
                    <div className={styles.circleBg} aria-hidden="true" />
                    <model-viewer
                      src={model.src}
                      alt={model.alt}
                      poster={model.poster}
                      camera-controls
                      disable-zoom
                      disable-tap
                      max-camera-orbit="auto auto 100%"
                      auto-rotate
                      touch-action="pan-y"
                      interaction-prompt="auto"
                      shadow-intensity="0"
                      exposure="1"
                      loading={index < 3 ? "eager" : "lazy"}  // first 3 are visible
                      reveal={index < 3 ? "auto" : "interaction"}
                      className={styles.viewer}
                    />
                  </div>
                  <span className={styles.cardLabel}>{model.name}</span>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className={`${styles.navBtn} ${styles.navNext}`}
            aria-label="Next slide"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ArrowIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
