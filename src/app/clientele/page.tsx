import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'Our Clientele — Zar Jewels',
  description: 'Zar Jewels serves India\'s top retail jewellers with premium gold bangles.',
};

const clients = [
  { name: 'Tanishq', logo: '/images/brand-tanishq.svg' },
  { name: 'Kalyan Jewellers', logo: '/images/brand-kalyan.svg' },
  { name: 'Joyalukkas', logo: '/images/brand-joyalukkas.svg' },
  { name: 'Malabar Gold', logo: '/images/brand-malabar.svg' },
  { name: 'Senco Gold', logo: '/images/brand-senco.svg' },
  { name: 'CaratLane', logo: '/images/brand-caratlane.svg' },
  { name: 'PC Jeweller', logo: '/images/brand-pcj.svg' },
  { name: 'GRT Jewellers', logo: '/images/brand-grt.svg' },
  { name: 'Anjali Jewellers', logo: '/images/brand-anjali.svg' },
  { name: 'Joyalukkas', logo: '/images/brand-joyalukkas2.svg' },
];

export default function ClientelePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1>Our Clientele</h1>
      </section>
      <div className={styles.content}>
        <div className={styles.intro}>
          <p className={styles.introText}>
            Zar&apos;s commitment to quality and design has earned the trust of India&apos;s most prestigious jewellery retailers. We are proud to partner with brands that share our passion for excellence.
          </p>
        </div>
        <div className={styles.logosGrid}>
          {clients.map((client) => (
            <div key={client.name} className={styles.logoCard}>
              <Image src={client.logo} alt={client.name} width={160} height={60} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
