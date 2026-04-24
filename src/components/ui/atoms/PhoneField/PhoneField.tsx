'use client';

import { useEffect, useRef } from 'react';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/dist/css/intlTelInput.css';
import { cn } from '@/lib/utils';
import styles from './PhoneField.module.css';

interface PhoneFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  wrapperClassName?: string;
   labelClassName?: string;
}

export default function PhoneField({
  id,
  name,
  label,
  placeholder = 'Enter number',
  required,
  wrapperClassName,
  labelClassName,
}: PhoneFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const itiRef = useRef<ReturnType<typeof intlTelInput> | null>(null);

  useEffect(() => {
    if (!inputRef.current) return;

    itiRef.current = intlTelInput(inputRef.current, {
      initialCountry: 'in',
      separateDialCode: true,
      loadUtils: () => import('intl-tel-input/utils'),
    });

    return () => {
      itiRef.current?.destroy();
    };
  }, []);

  return (
    <div className={cn("fieldGroup", wrapperClassName)}>
      <label htmlFor={id} className={cn("label", labelClassName)}>
        {label}
        {required && <span className={cn("required")}> *</span>}
      </label>
      <input
        ref={inputRef}
        id={id}
        name={name}
        type="tel"
        placeholder={placeholder}
        required={required}
        className={styles.input}
      />
    </div>
  );
}
