import { SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import styles from './SelectField.module.css';

interface SelectOption {
  label: string;
  value: string;
}

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  options: SelectOption[];
  placeholder?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  selectClassName?: string;
}

export default function SelectField({
  label,
  id,
  options,
  placeholder,
  wrapperClassName,
  labelClassName,
  selectClassName,
  required,
  ...props
}: SelectFieldProps) {
  return (
    <div className={cn("fieldGroup", wrapperClassName)}>
      <label htmlFor={id} className={cn("label", labelClassName)}>
        {label}
        {required && <span className="required"> *</span>}
      </label>
      <select
        id={id}
        required={required}
        defaultValue={props.defaultValue ?? ''}
        className={cn(styles.select, selectClassName)}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
