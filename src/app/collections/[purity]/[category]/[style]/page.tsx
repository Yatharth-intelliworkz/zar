import Image from 'next/image';
import PageHeader from '@/components/ui/PageHeader/PageHeader';
import ProductListingClient from './ProductListingClient';
import styles from './page.module.css';

interface Props {
  params: Promise<{ purity: string; category: string; style: string }>;
}

function formatName(slug: string) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function generateMetadata({ params }: Props) {
  const { purity, category, style } = await params;
  const purityLabel = purity.toUpperCase();
  const categoryName = formatName(category);
  const styleName = formatName(style);

  return {
    title: `${styleName} ${categoryName} in ${purityLabel} Gold — Zar Jewels`,
    description: `Shop our exclusive ${styleName} ${categoryName} collection crafted in ${purityLabel} gold.`,
  };
}

export default async function ProductListingPage({ params }: Props) {
  const { purity, category, style } = await params;
  const purityLabel = purity.toUpperCase();
  const categoryName = formatName(category);
  const styleName = formatName(style);

  // Dummy Product Data
  const products = [
    { id: 'dazzling-1', title: 'Design No. CS100006', description: 'Lorem ipsum dolor sit amet consectetur. Nisl nec faucibus nisi.', image: '/images/homepage/product_1.webp' },
    { id: 'dazzling-2', title: 'Design No. CS100007', description: 'Lorem ipsum dolor sit amet consectetur. Nisl nec faucibus nisi.', image: '/images/homepage/product_2.webp' },
    { id: 'dazzling-3', title: 'Design No. CS100008', description: 'Lorem ipsum dolor sit amet consectetur. Nisl nec faucibus nisi.', image: '/images/homepage/product_3.webp' },
    { id: 'dazzling-4', title: 'Design No. CS100009', description: 'Lorem ipsum dolor sit amet consectetur. Nisl nec faucibus nisi.', image: '/images/homepage/product_1.webp' },
    { id: 'dazzling-5', title: 'Design No. CS100010', description: 'Lorem ipsum dolor sit amet consectetur. Nisl nec faucibus nisi.', image: '/images/homepage/product_2.webp' },
    { id: 'dazzling-6', title: 'Design No. CS100011', description: 'Lorem ipsum dolor sit amet consectetur. Nisl nec faucibus nisi.', image: '/images/homepage/product_3.webp' },
    { id: 'dazzling-7', title: 'Design No. CS100012', description: 'Lorem ipsum dolor sit amet consectetur. Nisl nec faucibus nisi.', image: '/images/homepage/product_1.webp' },
    { id: 'dazzling-8', title: 'Design No. CS100013', description: 'Lorem ipsum dolor sit amet consectetur. Nisl nec faucibus nisi.', image: '/images/homepage/product_2.webp' },
  ];

  return (
    <div className={styles.page}>
      <PageHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: `${purityLabel} Gold`, href: `/collections/${purity}` },
          { label: categoryName, href: `/collections/${purity}/${category}` },
          { label: styleName, isActive: true }
        ]}
      />
      <div className='banner'>
        <Image
          src="/images/about/about_banner.webp"
          alt="Crafting gold bangle"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
      <ProductListingClient
        heading={`${styleName} ${categoryName}`}
        description={`The ${styleName} collection brings together the sparkle of Cubic Zircon (CZ) stones with the radiance of gold. The resulting product is a beautiful amalgamation of signity handwork on a gold bangle, giving it a truly exquisite look.`}
        products={products}
      />
    </div>
  );
}
