import ClientLogo from '@/components/ui/molecules/ClientLogo/ClientLogo';
import styles from './TrustedBrandsSection.module.css';

const brands = [
  { name: 'Senco Gold', logo: '/images/homepage/brand-senco.svg' },
  { name: 'BC Jeweller', logo: '/images/homepage/brand-bcj.svg' },
  { name: 'Tanishq', logo: '/images/homepage/brand-bcj.svg' },
  { name: 'Joyalukkas', logo: '/images/homepage/brand-bcj.svg' },
  { name: 'CaratLane', logo: '/images/homepage/brand-bcj.svg' },
  { name: 'Malabar Gold', logo: '/images/homepage/brand-bcj.svg' },
  { name: 'Kalyan Jewellers', logo: '/images/homepage/brand-bcj.svg' },
  { name: 'GRT Jewellers', logo: '/images/homepage/brand-bcj.svg' },
  { name: 'Anjali Jewellers', logo: '/images/homepage/brand-bcj.svg' },
  { name: 'Joyalukkas 2', logo: '/images/homepage/brand-bcj.svg' },
  { name: 'pcj', logo: '/images/homepage/brand-senco.svg' },
  { name: 'giva', logo: '/images/homepage/brand-senco.svg' },
];

export default function TrustedBrandsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Trusted Across Generations</h2>
          <p className={styles.subtitle}>
            Zar&apos;s commitment to quality and design has earned the trust of partners and patrons alike. We don&apos;t just sell bangles; we build relationships that last as long as our gold.
          </p>
        </div>
      </div>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {brands.map((brand) => (
            <ClientLogo key={brand.name} name={brand.name} logo={brand.logo} />
          ))}
          {brands.map((brand) => (
            <ClientLogo key={`dup-${brand.name}`} name={brand.name} logo={brand.logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
