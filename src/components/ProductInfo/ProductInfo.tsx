'use client';

import { useState } from 'react';
import Button from '@/components/ui/atoms/Button/Button';
import EnquiryModal from '@/components/ui/organisms/EnquiryModal/EnquiryModal';
import styles from './ProductInfo.module.css';

interface TechSpec {
  feature: string;
  details: string;
}

interface ManufacturingPoint {
  label: string;
  text: string;
}

interface ManufacturingInfo {
  heading: string;
  subtitle: string;
  points: ManufacturingPoint[];
}

interface ProductDetails {
  title: string;
  sku: string;
  description: string;
  specifications: Record<string, string>;
  purity?: string;
  weight?: string;
  finish?: string;
  technicalSpecs?: TechSpec[];
  manufacturing?: ManufacturingInfo;
}

interface ProductInfoProps {
  product: ProductDetails;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <>
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.sku}>{product.sku}</p>

        <div className={styles.actions}>
          <Button
            variant="primary"
            showArrow
            onClick={() => setEnquiryOpen(true)}
            className={styles.enquireBtn}
          >
            Enquire Now
          </Button>
        </div>

        <div className={styles.description}>
          <p>{product.description}</p>
        </div>

        {/* Inline meta: purity, weight, finish */}
        {(product.purity || product.weight || product.finish) && (
          <div className={styles.metaRow}>
            {product.purity && (
              <div className={styles.metaItem}>
                <svg className={styles.metaIcon} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <mask id="mask0_155_1629" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
                    <path d="M0.75 35.25V0.75H35.25V35.25H0.75Z" fill="white" stroke="white" strokeWidth="1.5" />
                  </mask>
                  <g mask="url(#mask0_155_1629)">
                    <path d="M28.5 18C28.5 17.9739 28.5208 17.9531 28.5469 17.9531C28.573 17.9531 28.5938 17.9739 28.5938 18C28.5938 18.0261 28.573 18.0469 28.5469 18.0469C28.5208 18.0469 28.5 18.0261 28.5 18Z" fill="#D0B480" stroke="#D0B480" strokeWidth="1.5" />
                    <path d="M0.703121 18C0.703121 27.3199 8.68008 35.2969 18 35.2969C27.3199 35.2969 35.2969 27.3199 35.2969 18C35.2969 8.68008 27.3199 0.703121 18 0.703121C8.68008 0.703121 0.703121 8.68008 0.703121 18Z" stroke="#D0B480" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18 31.5703C25.3666 31.5703 31.5703 25.3666 31.5703 18C31.5703 10.6334 25.3666 4.42969 18 4.42969C10.6334 4.42969 4.42969 10.6334 4.42969 18C4.42969 25.3666 10.6334 31.5703 18 31.5703Z" stroke="#D0B480" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M28.1719 15.2109C26.947 10.744 22.8506 7.45195 17.9991 7.45195" stroke="#D0B480" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.7812 22.2188C16.5199 21.3061 19.4801 21.3061 22.2188 22.2188C21.7624 20.8491 21.5339 19.4245 21.5339 18C21.5339 16.5755 21.7624 15.1509 22.2188 13.7812C20.8491 14.2376 19.4245 14.4661 18 14.4661C16.5755 14.4661 15.1509 14.2376 13.7812 13.7812C14.2376 15.1509 14.4661 16.5755 14.4661 18C14.4661 19.4245 14.2376 20.8491 13.7812 22.2188Z" stroke="#D0B480" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
                <span className={styles.metaText}>{product.purity}</span>
              </div>
            )}

            {product.weight && (
              <div className={styles.metaItem}>
                <svg className={styles.metaIcon} xmlns="http://www.w3.org/2000/svg" width="36" height="27" viewBox="0 0 36 27" fill="none" aria-hidden="true">
                  <path d="M9.27709 16.3934H26.3281V12.6846L22.991 6.54102H12.6143L9.27709 12.6846V16.3934Z" stroke="#D0B480" strokeWidth="1.5" strokeMiterlimit="10" />
                  <path d="M17.8005 26.247H34.8516V22.5381L31.5144 16.3945H21.1377L17.8005 22.5381V26.247Z" stroke="#D0B480" strokeWidth="1.5" strokeMiterlimit="10" />
                  <path d="M0.749744 26.247H17.8008V22.5381L14.4636 16.3945H4.08688L0.749744 22.5381V26.247Z" stroke="#D0B480" strokeWidth="1.5" strokeMiterlimit="10" />
                  <path d="M7.94434 5.11719H5.82165" stroke="#D0B480" strokeWidth="1.5" strokeMiterlimit="10" />
                  <path d="M18.8633 0.75H16.7406" stroke="#D0B480" strokeWidth="1.5" strokeMiterlimit="10" />
                  <path d="M4.40625 9.6875H2.28357" stroke="#D0B480" strokeWidth="1.5" strokeMiterlimit="10" />
                  <path d="M27.6615 5.11719H29.7842" stroke="#D0B480" strokeWidth="1.5" strokeMiterlimit="10" />
                  <path d="M31.1986 9.6875H33.3213" stroke="#D0B480" strokeWidth="1.5" strokeMiterlimit="10" />
                </svg>
                <span className={styles.metaText}>{product.weight} gm</span>
              </div>
            )}

            {product.finish && (
              <div className={styles.metaFinishItem}>
                <p className={styles.finishLine}>
                  <span className={styles.metaText}>Finish:</span> {product.finish}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Weight breakdown */}
        <div className={styles.specificationsContainer}>
          <h2 className={styles.specificationsTitle}>Weight</h2>
          <div className={styles.weightGrid}>
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className={styles.weightItem}>
                <span className={styles.weightLabel}>{key}</span>
                <span className={styles.weightValue}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications table */}
        {product.technicalSpecs && product.technicalSpecs.length > 0 && (
          <div className={styles.techSpecsContainer}>
            <h2 className={styles.specificationsTitle}>Technical Specifications</h2>
            <table className={styles.techSpecTable}>
              <thead>
                <tr>
                  <th className={styles.techSpecHeader}>Feature</th>
                  <th className={styles.techSpecHeader}>Details</th>
                </tr>
              </thead>
              <tbody>
                {product.technicalSpecs.map((spec) => (
                  <tr key={spec.feature} className={styles.techSpecRow}>
                    <td className={styles.techSpecFeature}>{spec.feature}</td>
                    <td className={styles.techSpecDetails}>{spec.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Manufacturing & Customization Support */}
        {product.manufacturing && (
          <div className={styles.manufacturingContainer}>
            <h2 className={styles.manufacturingHeading}>{product.manufacturing.heading}</h2>
            <p className={styles.manufacturingSubtitle}>{product.manufacturing.subtitle}</p>
            <ul className={styles.manufacturingList}>
              {product.manufacturing.points.map((point) => (
                <li key={point.label} className={styles.manufacturingItem}>
                  <span className={styles.manufacturingLabel}>{point.label}: </span>
                  {point.text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <EnquiryModal
        open={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        productName={product.title}
      />
    </>
  );
}
