'use client';

import { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import { cn } from '@/lib/utils';
import styles from './InputField.module.css';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  wrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
}

export default function InputField({
  label,
  id,
  wrapperClassName,
  labelClassName,
  inputClassName,
  required,
  onChange,
  ...props
}: InputFieldProps) {
  const [selectedFileName, setSelectedFileName] = useState('');
  const isFileInput = props.type === 'file';

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (isFileInput) {
      const selectedFile = event.target.files?.[0];
      setSelectedFileName(selectedFile ? selectedFile.name : '');
    }

    onChange?.(event);
  };

  return (
    <div className={cn('fieldGroup', wrapperClassName, isFileInput && selectedFileName && 'hasFile')}>
      <label htmlFor={id} className={cn("label", labelClassName)}>
        {isFileInput && selectedFileName ? selectedFileName : label}
        {required && <span className="required"> *</span>}
      </label>
      <input
        id={id}
        required={required}
        className={cn("input", inputClassName)}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
}
