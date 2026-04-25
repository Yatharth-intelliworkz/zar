import React from 'react';
import styles from './ProductInfo.module.css';

interface ProductDetails {
  title: string;
  sku: string;
  description: string;
  specifications: Record<string, string>;
}

interface ProductInfoProps {
  product: ProductDetails;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className={styles.infoContainer}>
      <h1 className={styles.title}>{product.title}</h1>
      <p className={styles.sku}>SKU: {product.sku}</p>
      
      <div className={styles.description}>
        <p>{product.description}</p>
      </div>

      <div className={styles.specificationsContainer}>
        <h2 className={styles.specificationsTitle}>Product Details</h2>
        <table className={styles.specTable}>
          <tbody>
            {Object.entries(product.specifications).map(([key, value]) => (
              <tr key={key}>
                <th className={styles.specKey}>{key}</th>
                <td className={styles.specValue}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.actions}>
        <button className={styles.inquireBtn}>Inquire Now</button>
      </div>
    </div>
  );
}
