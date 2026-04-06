'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Button from '@/components/ui/atoms/Button/Button';
import EnquiryModal from '@/components/ui/organisms/EnquiryModal/EnquiryModal';
import styles from './HeroSection.module.css';

const slides = [
  {
    image: '/images/homepage/banner.webp',
    alt: 'Luxury gold bangle editorial',
    heading: "INDIA'S TRUSTED\nGOLD BANGLE MANUFACTURER",
    subtitle:
      'Crafting lightweight, elegant gold bangles through innovation, precision, and timeless craftsmanship.',
  },
  {
    image: '/images/homepage/banner-2.webp',
    alt: 'Exquisite gold jewellery craftsmanship',
    heading: 'CRAFTED WITH\nPRECISION & PASSION',
    subtitle:
      'From design to finish, every piece reflects decades of artistry and unmatched quality.',
  },
  {
    image: '/images/homepage/banner-3.webp',
    alt: 'Timeless gold bangle collection',
    heading: 'TIMELESS ELEGANCE\nREDEFINED',
    subtitle:
      'Discover our signature collections that blend tradition with contemporary design.',
  },
];

export default function HeroSection() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  return (
    <section className={styles.hero}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {slides.map((slide, index) => (
            <div className={styles.slide} key={index}>
              <div className={styles.backgroundImage}>
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  priority={index === 0}
                />
              </div>
              <div className={styles.content}>
                <div className={styles.textBlock}>
                  <h1 className={styles.heading}>
                    {slide.heading.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < slide.heading.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </h1>
                  <p className={styles.subtitle}>{slide.subtitle}</p>
                </div>
                <Button
                  variant="outline"
                  showArrow
                  onClick={() => setEnquiryOpen(true)}
                >
                  Enquire Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === selectedIndex ? styles.dotActive : ''}`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </section>
  );
}
