'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './MegaMenu.module.css';
import { cn } from '@/lib/utils';

const ktFilters = [
  { label: '22 KT Jewellery', value: '22kt' },
  { label: '18 KT Jewellery', value: '18kt' },
];

interface Category {
  label: string;
  href: string;
  image: string;
}

const categoriesByKt: Record<string, Category[]> = {
  '22kt': [
    { label: 'Bangles & Bracelet', href: '/collections/bangles-bracelet', image: '/images/menu-bangles-bracelet.svg' },
    { label: 'Mangalsutra & Necklace', href: '/collections/mangalsutra-necklace', image: '/images/menu-mangalsutra-necklace.svg' },
    { label: 'Mens Jewellery', href: '/collections/mens-jewellery', image: '/images/menu-mens-jewellery.svg' },
    { label: 'Earrings', href: '/collections/earrings', image: '/images/menu-earrings.svg' },
    { label: 'Kids Jewellery', href: '/collections/kids-jewellery', image: '/images/menu-kids-jewellery.svg' },
    { label: 'Lightweight Jewellery', href: '/collections/lightweight-jewellery', image: '/images/menu-lightweight-jewellery.svg' },
    { label: 'Rings', href: '/collections/rings', image: '/images/menu-rings.svg' },
  ],
  '18kt': [
    { label: 'Bangles & Bracelet', href: '/collections/bangles-bracelet-18kt', image: '/images/menu-bangles-bracelet.svg' },
    { label: 'Mangalsutra & Necklace', href: '/collections/mangalsutra-necklace-18kt', image: '/images/menu-mangalsutra-necklace.svg' },
    { label: 'Lightweight Jewellery', href: '/collections/lightweight-jewellery-18kt', image: '/images/menu-lightweight-jewellery.svg' },
    { label: 'Earrings', href: '/collections/earrings-18kt', image: '/images/menu-earrings.svg' },
    { label: 'Rings', href: '/collections/rings-18kt', image: '/images/menu-rings.svg' },
    { label: 'Kids Jewellery', href: '/collections/kids-jewellery-18kt', image: '/images/menu-kids-jewellery.svg' },
  ],
};

interface MegaMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MegaMenu({ open, onClose }: MegaMenuProps) {
  const [activeKt, setActiveKt] = useState('22kt');

  const categories = categoriesByKt[activeKt] ?? categoriesByKt['22kt'];

  const overlayClass = cn(styles.overlay, open && styles.overlayOpen);
  console.log('MegaMenu open:', open, 'class:', overlayClass);

  return (
    <div className={overlayClass}>
      <div className={styles.inner}>
        <div className={styles.sidebar}>
          {ktFilters.map((filter) => (
            <button
              key={filter.value}
              className={cn(styles.ktButton, activeKt === filter.value && styles.ktButtonActive)}
              onClick={() => setActiveKt(filter.value)}
            >
              {filter.label}
              <span className={styles.ktArrow}>
                <svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={styles.categoryCard}
              onClick={onClose}
            >
              <div className={styles.categoryImage}>
                <Image src={cat.image} alt={cat.label} fill sizes="180px" />
              </div>
              <span className={styles.categoryName}>{cat.label}</span>
            </Link>
          ))}
        </div>

        <div className={styles.featured}>
          <div className={styles.featuredImage}>
            <Image
              src="/images/menu-featured-collection.svg"
              alt="Dazzling Collection"
              fill
              sizes="240px"
            />
          </div>
          <h3 className={styles.featuredTitle}>Dazzling Collection (Stone)</h3>
          <Link href="/collections/dazzling" className={styles.featuredButton} onClick={onClose}>
            Explore Collection
            <span className={styles.featuredArrow}>
              <svg viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5H12M8.5 1L12.5 5L8.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
