import PageHeader from '@/components/ui/PageHeader/PageHeader';
import CollectionGrid from '@/components/ui/organisms/CollectionGrid/CollectionGrid';
import styles from './page.module.css';

interface Props {
  params: Promise<{ purity: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { purity } = await params;
  const purityLabel = purity.toUpperCase();
  return {
    title: `${purityLabel} Gold Jewellery Categories — Zar Jewels`,
    description: `Explore our extensive collection of ${purityLabel} gold jewellery categories, featuring rings, bangles, necklaces, and more.`,
  };
}

export default async function CategoryListingPage({ params }: Props) {
  const { purity } = await params;
  const purityLabel = purity.toUpperCase();
  
  // Dummy Categories Data
  const categories = [
    { id: 'bangles-bracelet', name: 'Bangles & Bracelet', image: '/images/menu-bangles-bracelet.svg' },
    { id: 'mangalsutra-necklace', name: 'Mangalsutra & Necklace', image: '/images/menu-mangalsutra-necklace.svg' },
    { id: 'mens-jewellery', name: 'Mens Jewellery', image: '/images/menu-mens-jewellery.svg' },
    { id: 'earrings', name: 'Earrings', image: '/images/menu-earrings.svg' },
    { id: 'kids-jewellery', name: 'Kids Jewellery', image: '/images/menu-kids-jewellery.webp' },
    { id: 'lightweight-jewellery', name: 'Lightweight Jewellery', image: '/images/menu-lightweight-jewellery.svg' },
    { id: 'rings', name: 'Rings', image: '/images/menu-rings.svg' }
  ].map(cat => ({
    ...cat,
    href: `/collections/${purity}/${cat.id}`
  }));

  return (
    <div className={styles.page}>
      <PageHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: `${purityLabel} Gold`, isActive: true }
        ]}
        heading={`${purityLabel} Gold Jewellery`}
        description={`Explore our curated range of ${purityLabel} gold jewellery categories, each designed to reflect a distinct style and impeccable craftsmanship.`}
      />
      <section className='mt-100 mb-100'>
        <div className='container'>
        <CollectionGrid collections={categories} />
      </div>
      </section>
    </div>
  );
}
