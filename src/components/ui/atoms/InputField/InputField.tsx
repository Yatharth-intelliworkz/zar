import { InputHTMLAttributes } from 'react';
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
  ...props
}: InputFieldProps) {
  return (
    <div className={cn("fieldGroup", wrapperClassName)}>
      <label htmlFor={id} className={cn("label", labelClassName)}>
        {label}
        {required && <span className="required"> *</span>}
      </label>
      <input
        id={id}
        required={required}
        className={cn("input", inputClassName)}
        {...props}
      />
    </div>
  );
}
