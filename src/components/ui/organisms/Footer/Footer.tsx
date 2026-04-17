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
      {/* ── Quote + Footer Top Wrapper ── */}
      <div className={styles.footerBgWrapper}>
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
                width={150}
                height={60}
                className={styles.brandLogo}
              />
              <p className={styles.brandText}>
                Six decades of crafting lightweight, elegant gold bangles through innovation, precision, and timeless craftsmanship.
              </p>
              <div className={styles.socials}>
                <a href="#" aria-label="Facebook" className={styles.socialLink}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1_645)">
                      <path d="M12 0C18.6274 0 24 5.37259 24 12C24 18.1352 19.3955 23.1944 13.4538 23.9121V15.667L16.7001 15.667L17.3734 12H13.4538V10.7031C13.4538 9.73417 13.6439 9.06339 14.0799 8.63483C14.5159 8.20627 15.1979 8.01993 16.1817 8.01993C16.4307 8.01993 16.6599 8.02241 16.8633 8.02736C17.1591 8.03456 17.4002 8.047 17.568 8.06467V4.74048C17.501 4.72184 17.4218 4.70321 17.3331 4.68486C17.1321 4.6433 16.8822 4.60324 16.6136 4.56806C16.0523 4.49453 15.4093 4.4423 14.9594 4.4423C13.1424 4.4423 11.7692 4.83102 10.8107 5.63619C9.65388 6.60791 9.10108 8.18622 9.10108 10.4199V12H6.62659V15.667H9.10108V23.6466C3.87432 22.3498 0 17.6277 0 12C0 5.37259 5.37259 0 12 0Z" fill="#D0B480" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_645">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>


                </a>
                <a href="#" aria-label="Instagram" className={styles.socialLink}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.3952 7.02212C17.6005 7.02368 16.9543 6.3802 16.9528 5.58548C16.9512 4.79076 17.5947 4.14457 18.3898 4.14302C19.1848 4.14146 19.831 4.78531 19.8326 5.58004C19.8338 6.37476 19.1903 7.02057 18.3952 7.02212Z" fill="#D0B480" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.0115 18.161C8.60909 18.1676 5.8451 15.4149 5.8385 12.0117C5.83188 8.60923 8.58536 5.84481 11.9878 5.8382C15.3909 5.83159 18.1553 8.5859 18.1619 11.9879C18.1685 15.3912 15.4143 18.1544 12.0115 18.161ZM11.992 8.00035C9.78365 8.00424 7.99594 9.79858 7.99983 12.0074C8.0041 14.2166 9.79882 16.0039 12.0072 15.9996C14.2164 15.9954 16.0041 14.2014 15.9998 11.9922C15.9955 9.78302 14.2008 7.99608 11.992 8.00035Z" fill="#D0B480" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.1192 0.646479C4.88126 0.347876 5.75333 0.143362 7.03015 0.0830982C8.31011 0.0216726 8.71872 0.00767102 11.9769 0.00145262C15.2358 -0.00476578 15.6444 0.00766862 16.9244 0.0644334C18.2016 0.119643 19.0741 0.321049 19.8377 0.616544C20.6277 0.920974 21.298 1.33078 21.966 1.99603C22.6339 2.66205 23.0453 3.33002 23.3536 4.1189C23.6518 4.88174 23.8563 5.75306 23.917 7.03068C23.9776 8.31023 23.9924 8.71847 23.9986 11.9771C24.0048 15.2353 23.9916 15.6443 23.9356 16.925C23.88 18.2014 23.679 19.0743 23.3835 19.8375C23.0783 20.6276 22.6693 21.2979 22.004 21.9659C21.3388 22.6342 20.6701 23.0452 19.8812 23.3539C19.1184 23.6517 18.2471 23.8562 16.9702 23.9173C15.6903 23.9779 15.2817 23.9923 12.0224 23.9985C8.76459 24.0048 8.35598 23.9923 7.07605 23.9359C5.79882 23.88 4.92597 23.6789 4.16275 23.3838C3.37271 23.0782 2.70242 22.6696 2.03446 22.004C1.36611 21.3383 0.954386 20.67 0.646458 19.8811C0.347858 19.1186 0.144107 18.2469 0.0830727 16.9705C0.0220359 15.6901 0.00765506 15.2811 0.00143906 12.0229C-0.00480094 8.76435 0.00803667 8.35611 0.0640167 7.07616C0.1204 5.79855 0.320637 4.92606 0.61613 4.16206C0.921328 3.37239 1.33035 2.70248 1.99637 2.03413C2.6616 1.36616 3.33033 0.954017 4.1192 0.646479ZM4.94154 21.3679C5.36494 21.5308 6.00023 21.7252 7.17014 21.7761C8.43607 21.8309 8.81514 21.843 12.0185 21.8368C15.223 21.8309 15.6021 21.8173 16.8676 21.7579C18.0363 21.7022 18.6716 21.5055 19.0939 21.3407C19.6541 21.1218 20.0531 20.8601 20.4722 20.4406C20.8913 20.0195 21.1506 19.6194 21.3676 19.0591C21.5309 18.6354 21.7249 17.9996 21.7758 16.8297C21.8314 15.5646 21.8431 15.1851 21.8368 11.9809C21.831 8.77757 21.8174 8.3981 21.7572 7.13254C21.7019 5.96339 21.5056 5.32808 21.3404 4.90623C21.1215 4.34519 20.8606 3.94705 20.4399 3.52753C20.0192 3.10801 19.6191 2.84945 19.0581 2.6325C18.6355 2.46881 17.9994 2.27518 16.8303 2.22426C15.5643 2.16865 15.1849 2.15737 11.9808 2.1636C8.77743 2.16982 8.39836 2.18264 7.13281 2.24253C5.9633 2.29812 5.32877 2.49447 4.90575 2.65972C4.34587 2.87861 3.94696 3.13872 3.52746 3.5598C3.10871 3.98087 2.84938 4.38018 2.63244 4.94161C2.46993 5.36464 2.27434 6.00072 2.2242 7.16987C2.16898 8.43581 2.15733 8.81529 2.16355 12.0187C2.16939 15.2228 2.18298 15.6023 2.24248 16.8671C2.29729 18.037 2.49518 18.6715 2.65966 19.0949C2.87855 19.6544 3.13944 20.0533 3.55973 20.4729C3.98081 20.8908 4.38088 21.1509 4.94154 21.3679Z" fill="#D0B480" />
                  </svg>

                </a>
                <a href="#" aria-label="LinkedIn" className={styles.socialLink}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" fill="#D0B480" />
                  </svg>

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
                    <path d="M15.75 7.5C15.75 12.75 9 17.25 9 17.25S2.25 12.75 2.25 7.5a6.75 6.75 0 1 1 13.5 0Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 9.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Ground floor, Peninsula spenta, Mathuradas mill compound, N. M. Joshi Marg, Lower Parel(W), Mumbai - 400 013.</span>
                </li>
                <li className={styles.contactItem}>
                  <svg className={styles.contactIcon} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3h12c.825 0 1.5.675 1.5 1.5v9c0 .825-.675 1.5-1.5 1.5H3c-.825 0-1.5-.675-1.5-1.5v-9C1.5 3.675 2.175 3 3 3Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.5 4.5 9 9.75 1.5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>info@zarjewels.com</span>
                </li>
                <li className={styles.contactItem}>
                  <svg className={styles.contactIcon} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 12.69v2.25a1.5 1.5 0 0 1-1.635 1.5A14.843 14.843 0 0 1 8.4 13.905a14.625 14.625 0 0 1-4.5-4.5A14.843 14.843 0 0 1 1.365 2.96 1.5 1.5 0 0 1 2.85 1.335h2.25a1.5 1.5 0 0 1 1.5 1.29c.095.72.27 1.428.525 2.108a1.5 1.5 0 0 1-.337 1.583l-.953.953a12 12 0 0 0 4.5 4.5l.952-.953a1.5 1.5 0 0 1 1.583-.337c.68.254 1.388.43 2.108.525a1.5 1.5 0 0 1 1.29 1.527l.232-.001Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Office No. : +91 86574 99151</span>
                </li>
              </ul>
            </div>
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
