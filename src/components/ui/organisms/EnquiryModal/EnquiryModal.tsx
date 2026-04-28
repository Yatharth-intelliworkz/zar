'use client';

import { useState, useEffect, useCallback, type FormEvent } from 'react';
import styles from './EnquiryModal.module.css';
import { cn } from '@/lib/utils';

interface EnquiryModalProps {
  open: boolean;
  onClose: () => void;
  productName?: string;
}

const enquiryTypes = [
  'Wholesale Enquiry',
  'Custom Order',
  'Partnership',
  'Product Information',
  'Other',
];

export default function EnquiryModal({ open, onClose, productName }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    contactNo: '',
    enquiryType: '',
    message: '',
  });

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: wire up form submission
    console.log('Enquiry submitted:', formData);
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      contactNo: '',
      enquiryType: '',
      message: '',
    });
    onClose();
  };

  return (
    <div
      className={cn(styles.backdrop, open && styles.backdropOpen)}
      onClick={handleBackdropClick}
      aria-hidden={!open}
    >
      <div className={styles.modal} role="dialog" aria-modal="true" aria-label="Enquiry form">
        <button className={styles.closeButton} onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <h2 className={styles.title}>Enquire Now</h2>
        {productName && <p className={styles.productTag}>{productName}</p>}
        <p className={styles.subtitle}>Fill in the details below and our team will get back to you shortly.</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="enquiry-fullName">
                Full Name <span className={styles.required}>*</span>
              </label>
              <input
                id="enquiry-fullName"
                className={styles.input}
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="enquiry-companyName">
                Company Name
              </label>
              <input
                id="enquiry-companyName"
                className={styles.input}
                type="text"
                name="companyName"
                placeholder="Enter company name"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="enquiry-email">
                Email ID <span className={styles.required}>*</span>
              </label>
              <input
                id="enquiry-email"
                className={styles.input}
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="enquiry-contactNo">
                Contact No. <span className={styles.required}>*</span>
              </label>
              <input
                id="enquiry-contactNo"
                className={styles.input}
                type="tel"
                name="contactNo"
                placeholder="Enter contact number"
                value={formData.contactNo}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="enquiry-type">
              Enquiry Type <span className={styles.required}>*</span>
            </label>
            <select
              id="enquiry-type"
              className={styles.select}
              name="enquiryType"
              value={formData.enquiryType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select enquiry type</option>
              {enquiryTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="enquiry-message">
              Message
            </label>
            <textarea
              id="enquiry-message"
              className={styles.textarea}
              name="message"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              rows={4}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Submit
            <span className={styles.submitArrow}>
              <svg viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 1L18 6M18 6L12.5 11M18 6H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
