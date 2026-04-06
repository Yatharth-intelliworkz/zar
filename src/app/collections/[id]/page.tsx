import Image from 'next/image';
import Button from '@/components/ui/atoms/Button/Button';
import styles from './page.module.css';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const name = id.charAt(0).toUpperCase() + id.slice(1);
  return {
    title: `${name} Collection — Zar Jewels`,
    description: `Explore the ${name} collection of gold bangles by Zar Jewels.`,
  };
}

export default async function CollectionDetailPage({ params }: Props) {
  const { id } = await params;
  const name = id.charAt(0).toUpperCase() + id.slice(1);

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.productSection}>
          <div className={styles.gallery}>
            <div className={styles.mainImage}>
              <Image
                src="/images/collection-1.svg"
                alt={`${name} bangle`}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
            <div className={styles.thumbnails}>
              {[1, 2, 3].map((i) => (
                <div key={i} className={`${styles.thumb} ${i === 1 ? styles.thumbActive : ''}`}>
                  <Image
                    src={`/images/collection-${i}.svg`}
                    alt={`${name} view ${i}`}
                    width={80}
                    height={80}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.details}>
            <span className={styles.category}>Collection</span>
            <h1 className={styles.productName}>{name}</h1>
            <p className={styles.description}>
              A stunning piece from our {name} collection, crafted with precision and care. Each bangle reflects decades of goldsmithing expertise, blending traditional artistry with modern design sensibility.
            </p>
            <div className={styles.specs}>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Material</span>
                <span className={styles.specValue}>22K Gold</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Weight Range</span>
                <span className={styles.specValue}>15g – 40g</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Finish</span>
                <span className={styles.specValue}>High Polish</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Sizes Available</span>
                <span className={styles.specValue}>2.2 – 2.8</span>
              </div>
            </div>
            <Button href="/contact" variant="primary" showArrow>
              Enquire Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
