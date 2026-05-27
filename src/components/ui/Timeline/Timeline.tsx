'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './Timeline.module.css';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const timelineData: TimelineItem[] = [
  {
    year: '1920',
    title: 'The Founding Era',
    description: 'The journey begins with Girdharlal & Bros, focusing on specialised gold bangle manufacturing. A legacy rooted in craftsmanship and tradition.',
    image: '/images/about/about_5.webp',
    tags: ['Heritage', 'Founding', 'Gold'],
  },
  {
    year: '1930',
    title: 'The Founding Era',
    description: 'The journey begins with Girdharlal & Bros, focusing on specialised gold bangle manufacturing. A legacy rooted in craftsmanship and tradition.',
    image: '/images/about/about_5.webp',
    tags: ['Heritage', 'Founding', 'Gold'],
  },
  {
    year: '1940',
    title: 'The Founding Era',
    description: 'The journey begins with Girdharlal & Bros, focusing on specialised gold bangle manufacturing. A legacy rooted in craftsmanship and tradition.',
    image: '/images/about/about_5.webp',
    tags: ['Heritage', 'Founding', 'Gold'],
  },
  {
    year: '1950',
    title: 'The Founding Era',
    description: 'The journey begins with Girdharlal & Bros, focusing on specialised gold bangle manufacturing. A legacy rooted in craftsmanship and tradition.',
    image: '/images/about/about_5.webp',
    tags: ['Heritage', 'Founding', 'Gold'],
  },
  {
    year: '1975',
    title: 'The Design Revolution',
    description: 'Expansion of craftsmanship techniques and establishing a reputation for quality across the region. Bold new aesthetics emerge fusing traditional goldsmithing with contemporary silhouettes.',
    image: '/images/about/about_5.webp',
    tags: ['Artisan', 'Growth', 'Craft'],
  },
  {
    year: '2007',
    title: 'The Gemstone Chapter',
    description: 'Modernisation of manufacturing processes while preserving traditional artistry and heritage. A dedicated gemology wing is established, sourcing ethically certified stones from around the world.',
    image: '/images/about/about_5.webp',
    tags: ['Gemstone', 'Innovation', 'Ethics'],
  },
  {
    year: '2020',
    title: 'ZAR Is Born',
    description: 'ZAR is born — a modern brand built on heritage, precision, and innovation in gold bangle design. Every piece carries the weight of seven decades of mastery.',
    image: '/images/about/about_5.webp',
    tags: ['Brand', 'Innovation', 'Legacy'],
  },
  {
    year: '2021',
    title: 'The Digital Atelier',
    description: 'ZAR establishes itself as a leader in gold bangle manufacturing, serving partners across India. Virtual try-ons and 3D-printed prototypes transform the design process.',
    image: '/images/about/about_5.webp',
    tags: ['Digital', 'Modern', 'Growth'],
  },
];

// ── Drum constants ──────────────────────────────────────────────────
const N    = timelineData.length; // total data items
const SLOT = 56;                  // px — must match CSS var --slot

function wrap(idx: number) {
  return ((idx % N) + N) % N;
}


export default function Timeline() {
  const [current, setCurrent] = useState(0);
  const [contentVisible, setContentVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [slotConfig, setSlotConfig] = useState({ TOTAL_SLOTS: 7, CENTER: 3 });

  const drumColRef   = useRef<HTMLDivElement>(null);
  const trackRef     = useRef<HTMLDivElement>(null);
  const busyRef      = useRef(false);
  const touchLastY   = useRef<number | null>(null);
  const swipeLockRef = useRef(false);
  // keep a ref so event-handler closures always see the latest current
  const currentRef   = useRef(0);

  const activeData = timelineData[current];

  // Responsive slot config
  useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setSlotConfig(mobile ? { TOTAL_SLOTS: 5, CENTER: 2 } : { TOTAL_SLOTS: 7, CENTER: 3 });
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ensure the center slot is always the selected one after slotConfig changes
  useEffect(() => {
    // When slotConfig changes (e.g., switching between mobile/desktop),
    // adjust current so the selected year is always in the visual center
    setCurrent((prev) => {
      // The center slot should always show the current year
      // So, if the slot count changes, keep the same year centered
      return wrap(prev);
    });
    currentRef.current = wrap(currentRef.current);
  }, [slotConfig]);


  // ── Center calculation ────────────────────────────────────────────
  const getCenter = useCallback(() => {
    const colH = drumColRef.current?.clientHeight ?? 300;
    return colH / 2 - slotConfig.CENTER * SLOT - SLOT / 2;
  }, [slotConfig]);

  const snapTrack = useCallback(() => {
    if (!trackRef.current) return;
    trackRef.current.style.transition = 'none';
    trackRef.current.style.top = `${getCenter()}px`;
  }, [getCenter]);

  // ── Mount + resize ────────────────────────────────────────────────
  useEffect(() => {
    snapTrack();
    const onResize = () => snapTrack();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [snapTrack]);

  // ── Core step function ────────────────────────────────────────────
  const step = useCallback((delta: number) => {
    if (busyRef.current) return;
    busyRef.current = true;

    const track = trackRef.current;
    if (!track) { busyRef.current = false; return; }

    const center = getCenter();

    // Physically slide the whole belt
    track.style.transition = 'top 0.38s cubic-bezier(0.34,1.06,0.64,1)';
    track.style.top = `${center - delta * SLOT}px`;

    // Fade content out immediately
    setContentVisible(false);

    // After slide: snap back and update data index
    setTimeout(() => {
      const newCurrent = wrap(currentRef.current + delta);
      currentRef.current = newCurrent;
      setCurrent(newCurrent);

      track.style.transition = 'none';
      track.style.top = `${center}px`;

      busyRef.current = false;
    }, 390);

    // Fade content back in (during snap — user never sees the teleport)
    setTimeout(() => {
      setContentVisible(true);
    }, 300);
  }, [getCenter]);

  // ── Keyboard ──────────────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') step(1);
      if (e.key === 'ArrowUp')   step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [step]);

  // ── Touch ─────────────────────────────────────────────────────────
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchLastY.current = e.touches[0].clientY;
    swipeLockRef.current = false;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (swipeLockRef.current || busyRef.current || touchLastY.current === null) return;
    const dy = touchLastY.current - e.touches[0].clientY;
    touchLastY.current = e.touches[0].clientY;
    if (Math.abs(dy) > 14) {
      swipeLockRef.current = true;
      step(dy > 0 ? 1 : -1);
    }
  }, [step]);

  const handleTouchEnd = useCallback(() => {
    touchLastY.current = null;
    swipeLockRef.current = false;
  }, []);

  return (
    <section className={styles.timelineSection}>
      <div className="container">
        <h2 className={styles.title}>THE ZAR JOURNEY</h2>
        <p className={styles.subtitle}>A journey shaped by craftsmanship, innovation, and growth.</p>

        <div className={styles.timelineWrapper}>

          {/* ── Drum column ── */}
          <div
            ref={drumColRef}
            className={styles.drumCol}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className={styles.drumFadeTop} />
            <div className={styles.drumFadeBot} />
            <div className={styles.drumAccent} />

            <div ref={trackRef} className={styles.drumTrack}>
              {(() => {
                const slots = [];
                const total = slotConfig.TOTAL_SLOTS;
                const center = slotConfig.TOTAL_SLOTS === 5 ? 2 : slotConfig.CENTER;
                const firstIdx = Math.max(0, current - center);
                const lastIdx = Math.min(timelineData.length - 1, current + (total - center - 1));
                // Calculate how many empty slots needed at start and end
                const emptyStart = Math.max(0, center - current);
                const emptyEnd = Math.max(0, (firstIdx + total - 1) - (timelineData.length - 1));
                // Fill leading empty slots
                for (let i = 0; i < emptyStart; i++) {
                  slots.push(
                    <div key={`empty-start-${i}`} className={`${styles.yearSlot} ${styles.yearSlotEmpty}`} data-dist={Math.abs(i - center)}>
                      <span className={styles.yearLabel}>&nbsp;</span>
                    </div>
                  );
                }
                // Fill timeline slots
                for (let i = firstIdx; i <= lastIdx && slots.length < total; i++) {
                  const dist = Math.abs(slots.length - center);
                  slots.push(
                    <div
                      key={i}
                      className={styles.yearSlot}
                      data-dist={dist}
                      onClick={() => dist !== 0 && step(i - current)}
                      role={dist !== 0 ? 'button' : undefined}
                      aria-label={dist !== 0 ? `Go to ${timelineData[i].year}` : undefined}
                      tabIndex={dist === 0 ? 0 : -1}
                    >
                      <span className={styles.yearLabel}>
                        {timelineData[i].year}
                      </span>
                    </div>
                  );
                }
                // Fill trailing empty slots
                for (let i = 0; slots.length < total; i++) {
                  slots.push(
                    <div key={`empty-end-${i}`} className={`${styles.yearSlot} ${styles.yearSlotEmpty}`} data-dist={Math.abs(slots.length - center)}>
                      <span className={styles.yearLabel}>&nbsp;</span>
                    </div>
                  );
                }
                return slots;
              })()}
            </div>
          </div>

          {/* ── Image ── */}
          <div className={styles.imageWrapper}>
            <Image
              src={activeData.image}
              alt={`ZAR journey - ${activeData.year}`}
              fill
              className={`${styles.timelineImage} ${!contentVisible ? styles.timelineImageOut : ''}`}
            />
          </div>

          {/* ── Content ── */}
          <div className={`${styles.contentBlock} ${!contentVisible ? styles.contentBlockOut : ''}`}>
            <div className={styles.cYear}>{activeData.year}</div>
            <div className={styles.cLine} />
            <div className={styles.cTitle}>{activeData.title}</div>
            <p className={styles.cDesc}>{activeData.description}</p>
            <div className={styles.cTags}>
              {activeData.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
