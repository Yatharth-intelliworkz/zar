'use client';

import CollectionGrid from '@/components/ui/organisms/CollectionGrid/CollectionGrid';
import styles from './page.module.css';

const collections = [
  { id: 'plain', name: 'Plain', image: '/images/Broad.jpg' },
  { id: 'handmade', name: 'Handmade', image: '/images/Broad.jpg' },
  { id: 'heritage', name: 'Heritage', image: '/images/Broad.jpg' },
  { id: 'bridal', name: 'Bridal', image: '/images/Broad.jpg' },
  { id: 'modern', name: 'Modern', image: '/images/Broad.jpg' },
  { id: 'traditional', name: 'Traditional', image: '/images/Broad.jpg' },
  { id: 'everyday', name: 'Everyday', image: '/images/Broad.jpg' },
  { id: 'festive', name: 'Festive', image: '/images/Broad.jpg' },
];

export default function CollectionsContent() {
  return (
    <div className={styles.content}>
      <CollectionGrid collections={collections} />
    </div>
  );
}
