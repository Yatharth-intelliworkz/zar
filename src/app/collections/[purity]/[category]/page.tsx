import PageHeader from '@/components/ui/PageHeader/PageHeader';
import CollectionGrid from '@/components/ui/organisms/CollectionGrid/CollectionGrid';
import styles from './page.module.css';

interface Props {
  params: Promise<{ purity: string; category: string }>;
}

function formatName(slug: string) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function generateMetadata({ params }: Props) {
  const { purity, category } = await params;
  const purityLabel = purity.toUpperCase();
  const categoryName = formatName(category);

  return {
    title: `${categoryName} Styles in ${purityLabel} Gold — Zar Jewels`,
    description: `Explore our various styles of ${categoryName} in ${purityLabel} gold, from plain and handmade to fancy and enamel.`,
  };
}

export default async function StyleListingPage({ params }: Props) {
  const { purity, category } = await params;
  const purityLabel = purity.toUpperCase();
  const categoryName = formatName(category);

  // Dummy Styles Data
  const stylesList = [
    { id: 'plain', name: 'Plain', image: '/images/collections/Broad.webp' },
    { id: 'handmade', name: 'Handmade', image: '/images/collections/Broad.webp' },
    { id: 'fancy', name: 'Fancy', image: '/images/collections/Broad.webp' },
    { id: 'multicolor', name: 'Multicolor', image: '/images/collections/Broad.webp' },
    { id: 'virbance-enamel', name: 'Virbance (Enamel)', image: '/images/collections/Broad.webp' },
    { id: 'dazzling-stone', name: 'Dazzling (Stone)', image: '/images/collections/Broad.webp' },
    { id: 'broad', name: 'Broad', image: '/images/collections/Broad.webp' },
    { id: 'openable', name: 'Openable', image: '/images/collections/Broad.webp' },
  ].map(style => ({
    ...style,
    href: `/collections/${purity}/${category}/${style.id}`
  }));

  return (
    <div className={styles.page}>
      <PageHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: `${purityLabel} Gold`, href: `/collections/${purity}` },
          { label: categoryName, isActive: true }
        ]}
        heading={categoryName}
        description="From traditional artistry to contemporary design, discover collections that define elegance across generations. <br/> <br/> Explore our curated range of gold bangle collections, each designed to reflect a distinct style—from timeless traditions to modern elegance. Every piece is crafted with precision, combining advanced techniques with the artistry of skilled craftsmen."
      />
      <section className='mt-100 mb-100'>
        <div className='container'>
        <CollectionGrid collections={stylesList} />
      </div>
      </section>
    </div>
  );
}
