import { TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import styles from './TextareaField.module.css';

interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  wrapperClassName?: string;
  labelClassName?: string;
  textareaClassName?: string;
}

export default function TextareaField({
  label,
  id,
  wrapperClassName,
  labelClassName,
  textareaClassName,
  required,
  ...props
}: TextareaFieldProps) {
  return (
    <div className={cn("fieldGroup", wrapperClassName)}>
      <label htmlFor={id} className={cn("label", labelClassName)}>
        {label}
        {required && <span className="required"> *</span>}
      </label>
      <textarea
        id={id}
        required={required}
        className={cn(styles.textarea, textareaClassName)}
        {...props}
      />
    </div>
  );
}
