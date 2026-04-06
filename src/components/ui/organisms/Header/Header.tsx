'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Logo from '@/components/ui/atoms/Logo/Logo';
import NavLink from '@/components/ui/molecules/NavLink/NavLink';
import Button from '@/components/ui/atoms/Button/Button';
import MegaMenu from '@/components/ui/organisms/MegaMenu/MegaMenu';
import EnquiryModal from '@/components/ui/organisms/EnquiryModal/EnquiryModal';
import styles from './Header.module.css';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/types';

const navItems: NavItem[] = [
  { label: 'Story of Zar', href: '/about' },
  { label: 'Collections', href: '/collections', hasDropdown: true },
  { label: 'Our Clientele', href: '/clientele' },
  { label: 'Become a Partner', href: '/partner' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const megaMenuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      if (currentY > 100 && currentY > lastScrollY.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openMegaMenu = useCallback(() => {
    if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);
    setMegaMenuOpen(true);
  }, []);

  const closeMegaMenu = useCallback(() => {
    megaMenuTimeout.current = setTimeout(() => setMegaMenuOpen(false), 200);
  }, []);

  const handleMegaMenuEnter = useCallback(() => {
    if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);
  }, []);

  const handleMegaMenuLeave = useCallback(() => {
    megaMenuTimeout.current = setTimeout(() => setMegaMenuOpen(false), 200);
  }, []);

  return (
    <>
      <header className={cn(styles.header, scrolled && styles.headerScrolled, hidden && styles.headerHidden)}>
        <div className={styles.inner}>
          <Logo />
          <div className={styles.nav}>
            <nav className={styles.navLinks}>
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  {...item}
                  onMouseEnter={item.hasDropdown ? openMegaMenu : undefined}
                  onMouseLeave={item.hasDropdown ? closeMegaMenu : undefined}
                />
              ))}
            </nav>
            <div className={styles.cta}>
              <Button variant="primary" showArrow onClick={() => setEnquiryOpen(true)}>
                Enquire Now
              </Button>
            </div>
            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        onMouseEnter={handleMegaMenuEnter}
        onMouseLeave={handleMegaMenuLeave}
      >
        <MegaMenu open={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />
      </div>

      <div className={cn(styles.mobileMenu, menuOpen && styles.mobileMenuOpen)}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={styles.mobileNavLink}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Button variant="primary" showArrow onClick={() => { setMenuOpen(false); setEnquiryOpen(true); }}>
          Enquire Now
        </Button>
      </div>

      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </>
  );
}
