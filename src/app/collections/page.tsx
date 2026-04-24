import PageHeader from '@/components/ui/PageHeader/PageHeader';
import CollectionsContent from './CollectionsContent';
import styles from './page.module.css';

export const metadata = {
  title: 'Collections — Zar Jewels',
  description: 'Explore our signature gold bangle collections — Classic, Dazzling, Heritage, and more.',
};

export default function CollectionsPage() {
  return (
    <div className={styles.page}>
      <PageHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Collections', isActive: true }
        ]}
        heading="Bangles & Bracelet"
        description="From traditional artistry to contemporary design, discover collections that define elegance across generations. Explore our curated range of gold bangle collections, each designed to reflect a distinct style—from timeless traditions to modern elegance."
      />
      <CollectionsContent />
    </div>
  );
}
