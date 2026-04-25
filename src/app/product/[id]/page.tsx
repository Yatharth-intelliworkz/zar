import React from 'react';
import PageHeader from '@/components/ui/PageHeader/PageHeader';
import ProductGallery from '@/components/ProductGallery/ProductGallery';
import ProductInfo from '@/components/ProductInfo/ProductInfo';
import styles from './page.module.css';

// This would typically fetch data based on the dynamic ID.
// For the demo, we are mocking the Dazzling Collection product.
const MOCK_PRODUCT = {
  id: 'dazzling-1',
  title: 'Dazzling Gold Bangle Set',
  sku: 'ZAR-DAZ-1001',
  description: 'An exquisite piece from our Dazzling Collection. Crafted with precision, this gold bangle set features intricate detailing that catches the light beautifully, perfect for weddings and grand occasions.',
  specifications: {
    'Material': '22K Gold',
    'Weight': '45.5 grams',
    'Size': '2.4, 2.6, 2.8 available',
    'Finish': 'Glossy & Matte mix',
    'Collection': 'Dazzling Collection'
  },
  images: [
    '/images/dazz-coll.webp',
    '/images/homepage/product_1.webp',
    '/images/homepage/product_2.webp',
    '/images/homepage/product_3.webp'
  ]
};

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  return {
    title: `${MOCK_PRODUCT.title} — Zar Jewels`,
    description: MOCK_PRODUCT.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  // Use id to fetch real data here
  const product = MOCK_PRODUCT;

  return (
    <div className={styles.page}>
      <PageHeader
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Collections', href: '/collections' },
          { label: 'Dazzling Collection', href: '/collections#dazzling' },
          { label: product.title, isActive: true }
        ]}
        heading="Product Detail"
      />
      
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column: Image Gallery (Sticky) */}
          <div className={styles.galleryColumn}>
            <div className={styles.stickyGallery}>
              <ProductGallery images={product.images} />
            </div>
          </div>

          {/* Right Column: Product Info */}
          <div className={styles.infoColumn}>
            <ProductInfo product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
