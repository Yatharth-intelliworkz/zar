'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './GalleryModal.module.css';
import { cn } from '@/lib/utils';

interface GalleryModalProps {
  open: boolean;
  onClose: () => void;
  images: string[];
}

export default function GalleryModal({ open, onClose, images }: GalleryModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  return (
    <div
      className={cn(styles.backdrop, open && styles.backdropOpen)}
      onClick={handleBackdropClick}
      aria-hidden={!open}
    >
      <div className={styles.modal} role="dialog" aria-modal="true" aria-label="Image Gallery">
        <button className={styles.closeButton} onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className={styles.sliderContainer}>
          {open && images.length > 0 && (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className={styles.swiper}
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx} className={styles.slide}>
                  <div className={styles.imageWrapper}>
                    <Image 
                      src={img} 
                      alt={`Gallery image ${idx + 1}`} 
                      fill 
                      style={{ objectFit: 'contain' }} 
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
}
