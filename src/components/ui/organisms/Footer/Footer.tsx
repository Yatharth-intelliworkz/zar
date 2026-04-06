import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const linkCol1 = [
  { label: 'Home', href: '/' },
  { label: 'Story of Zar', href: '/about' },
  { label: 'Collections', href: '/collections' },
  { label: 'Our Clientele', href: '/clientele' },
];

const linkCol2 = [
  { label: 'Become a Partner', href: '/partner' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blogs', href: '#' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* ── Quote ── */}
      <div className={styles.quoteSection}>
        <div className={styles.quoteInner}>
          <span className={styles.quoteMarkLeft}>&ldquo;</span>
          <p className={styles.quoteText}>Excellence is not a skill, it&apos;s an attitude</p>
          <span className={styles.quoteMarkRight}>&rdquo;</span>
        </div>
      </div>

      {/* ── Footer Top ── */}
      <div className={styles.footerTop}>
        <div className={styles.topInner}>
          <div className={styles.brand}>
            <Image
              src="/images/zar-logo.svg"
              alt="Zar Jewels"
              width={120}
              height={40}
              className={styles.brandLogo}
            />
            <p className={styles.brandText}>
              Six decades of crafting lightweight, elegant gold bangles through innovation, precision, and timeless craftsmanship.
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="Facebook" className={styles.socialLink}>
                <svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.667A8.333 8.333 0 1 0 18.333 10 8.342 8.342 0 0 0 10 1.667Zm2.133 5h-1.05c-.467 0-.55.217-.55.55v.716h1.584l-.2 1.617h-1.384v4.117H8.95V9.55H7.867V7.933H8.95v-.85c0-1.083.667-1.75 1.717-1.75.483 0 .9.033 1.017.05l.45.05v1.234Z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className={styles.socialLink}>
                <svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 6.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm0 6.167A2.417 2.417 0 1 1 12.417 10 2.42 2.42 0 0 1 10 12.417Zm4.733-6.317a.875.875 0 1 1-.875-.875.875.875 0 0 1 .875.875ZM16.5 10c0 .9.008 1.792-.042 2.692-.05 1.042-.292 1.967-1.058 2.733-.767.767-1.692 1.008-2.733 1.058-.9.05-1.792.042-2.692.042s-1.792.008-2.692-.042c-1.042-.05-1.967-.292-2.733-1.058-.767-.767-1.008-1.692-1.058-2.733C3.442 11.792 3.45 10.9 3.45 10s-.008-1.792.042-2.692c.05-1.042.292-1.967 1.058-2.733.767-.767 1.692-1.008 2.733-1.058C8.183 3.467 9.075 3.475 9.975 3.475s1.792-.008 2.692.042c1.042.05 1.967.292 2.733 1.058.767.767 1.008 1.692 1.058 2.733.05.9.042 1.792.042 2.692Z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className={styles.socialLink}>
                <svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.833 2.5H4.167A1.667 1.667 0 0 0 2.5 4.167v11.666A1.667 1.667 0 0 0 4.167 17.5h11.666a1.667 1.667 0 0 0 1.667-1.667V4.167A1.667 1.667 0 0 0 15.833 2.5ZM7.083 14.583H5V8.333h2.083v6.25ZM6.042 7.417a1.208 1.208 0 1 1 0-2.417 1.208 1.208 0 0 1 0 2.417Zm9.375 7.166h-2.084v-3.041c0-.725-.012-1.659-1.008-1.659-1.008 0-1.167.792-1.167 1.609v3.091H9.075V8.333h2v.854h.029a2.192 2.192 0 0 1 1.975-1.087c2.112 0 2.504 1.392 2.504 3.2v3.283h-.166Z"/></svg>
              </a>
            </div>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.linksColumn}>
              <h4 className={styles.linksTitle}>Links</h4>
              <ul className={styles.linksList}>
                {linkCol1.map((l) => (
                  <li key={l.href + l.label}>
                    <Link href={l.href} className={styles.linkItem}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.linksColumn}>
              <h4 className={styles.linksTitle}>&nbsp;</h4>
              <ul className={styles.linksList}>
                {linkCol2.map((l) => (
                  <li key={l.href + l.label}>
                    <Link href={l.href} className={styles.linkItem}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.contactColumn}>
            <h4 className={styles.linksTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.75 7.5C15.75 12.75 9 17.25 9 17.25S2.25 12.75 2.25 7.5a6.75 6.75 0 1 1 13.5 0Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 9.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Ground floor, Peninsula spenta, Mathuradas mill compound, N. M. Joshi Marg, Lower Parel(W), Mumbai - 400 013.</span>
              </li>
              <li className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3h12c.825 0 1.5.675 1.5 1.5v9c0 .825-.675 1.5-1.5 1.5H3c-.825 0-1.5-.675-1.5-1.5v-9C1.5 3.675 2.175 3 3 3Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.5 4.5 9 9.75 1.5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>info@zarjewels.com</span>
              </li>
              <li className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 12.69v2.25a1.5 1.5 0 0 1-1.635 1.5A14.843 14.843 0 0 1 8.4 13.905a14.625 14.625 0 0 1-4.5-4.5A14.843 14.843 0 0 1 1.365 2.96 1.5 1.5 0 0 1 2.85 1.335h2.25a1.5 1.5 0 0 1 1.5 1.29c.095.72.27 1.428.525 2.108a1.5 1.5 0 0 1-.337 1.583l-.953.953a12 12 0 0 0 4.5 4.5l.952-.953a1.5 1.5 0 0 1 1.583-.337c.68.254 1.388.43 2.108.525a1.5 1.5 0 0 1 1.29 1.527l.232-.001Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Office No. : +91 86574 99151</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Footer Bottom ── */}
      <div className={styles.footerBottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>&copy; 2026 Zar Gold Bangles. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <span className={styles.separator}>|</span>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
