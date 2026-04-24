import Image from 'next/image';
import styles from './page.module.css';
import PageHeader from '@/components/ui/PageHeader/PageHeader';
import RetailerSlider from '@/components/ui/organisms/RetailerSlider/RetailerSlider';

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
    <main className={styles.page}>
      <PageHeader 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Clientele', isActive: true }
        ]} 
        heading="Our Clientele" 
      />
      
      <section className={`container mt-100 ${styles.section2}`}>
        <p className={styles.staticText}>
          Zar&apos;s commitment to quality and design has earned the trust of India&apos;s most prestigious jewellery retailers. We are proud to partner with brands that share our passion for excellence.
        </p>
        <div className={styles.flexBox}>
          {clients.map((client, i) => (
            <div key={i} className={styles.logoItem}>
              <Image src={client.logo} alt={client.name} width={160} height={60} />
            </div>
          ))}
        </div>
      </section>

      <section className={`container mt-100 ${styles.imageSection}`}>
        <Image 
          src="/images/Distributor-Testimonials.png" 
          alt="Distributor Testimonials" 
          width={1200} 
          height={600} 
          className={styles.fullImage}
        />
      </section>

      <RetailerSlider />
    </main>
  );
}
