import Image from 'next/image';
import styles from './page.module.css';
import PageHeader from '@/components/ui/PageHeader/PageHeader';
import RetailerSlider from '@/components/ui/organisms/RetailerSlider/RetailerSlider';

export const metadata = {
  title: 'Our Clientele — Zar Jewels',
  description: 'Zar Jewels serves India\'s top retail jewellers with premium gold bangles.',
};

const clients = [
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

export default function ClientelePage() {
  return (
    <main className={styles.page}>
      <PageHeader 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Clientele', isActive: true }
        ]} 
        heading="Our Clientele"
        description="The unquestionable dedication of Zar's team is the reason why the brand has tied up with some of the best jewelers in the industry."
      />
      <div style={{ width: '100%', position: 'relative', height: 400, margin: '40px 0' }}>
              <Image
                src="/images/about/about_banner.webp"
                alt="Crafting gold bangle"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
      </div>
      
      <section className={`container mt-100 ${styles.section2}`}>        
        <div className={styles.flexBox}>
          {clients.map((client, i) => (
            <div key={i} className={styles.logoItem}>
              <Image src={client.logo} alt={client.name} width={160} height={60} />
            </div>
          ))}
        </div>
        <p className={styles.staticText}>
          Zar has rapidly expanded since its inception almost 65 years ago. The production and distribution of fine gold bangles has been our aim and we believe in providing the best services to our clients. These clients further serve the customers who recognize Zar to be a trustworthy brand. With 30 distribution centres that supply to more than 1,000 retail outlets across India, the company is getting bigger and better in terms of production and service. We not only focus on our direct clients but we also aim to reach the customers who use our products. This gives us an opportunity to connect with them and helps us improve our services.        
        <br/>
        We aim to strengthen the bond we have with our clients and serve them with exquisite, quality products. Zar further expanded when it started exporting its products to UAE, Singapore, London, New York and Canada. We look forward to expand our business over the years on the twin foundations of trust and quality.
        </p>
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
