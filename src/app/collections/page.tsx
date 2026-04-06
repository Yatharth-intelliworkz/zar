import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'Collections — Zar Jewels',
  description: 'Explore our signature gold bangle collections — Classic, Dazzling, Heritage, and more.',
};

const collections = [
  { id: 'classic', name: 'Classic', image: '/images/collection-1.svg' },
  { id: 'dazzling', name: 'Dazzling', image: '/images/collection-2.svg' },
  { id: 'heritage', name: 'Heritage', image: '/images/collection-3.svg' },
  { id: 'bridal', name: 'Bridal', image: '/images/collection-1.svg' },
  { id: 'modern', name: 'Modern', image: '/images/collection-2.svg' },
  { id: 'traditional', name: 'Traditional', image: '/images/collection-3.svg' },
  { id: 'everyday', name: 'Everyday', image: '/images/collection-1.svg' },
  { id: 'festive', name: 'Festive', image: '/images/collection-2.svg' },
];

export default function CollectionsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1>Our Collections</h1>
      </section>
      <div className={styles.content}>
        <div className={styles.intro}>
          <p className={styles.introText}>
            Discover a range of thoughtfully curated designs that balance tradition and modernity. Each collection tells a unique story of craftsmanship and elegance.
          </p>
        </div>
        <div className={styles.grid}>
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={`/collections/${collection.id}`}
              className={styles.card}
            >
              <div className={styles.cardImage}>
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className={styles.cardOverlay}>
                <h3 className={styles.cardName}>{collection.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
