import styles from './PageHeader.module.css';
import React from 'react';

interface PageHeaderProps {
  breadcrumbs: React.ReactNode;
  heading: string;
  description?: string;
}

export default function PageHeader({ breadcrumbs, heading, description }: PageHeaderProps) {
  return (
    <div className="container">
      <div className={styles.breadcrumbs}>{breadcrumbs}</div>
      <h1 className={styles.heading}>{heading}</h1>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
