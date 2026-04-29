import Link from 'next/link';
import styles from './Button.module.css';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  showArrow?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

function ArrowIcon() {
  return (
    <span className={styles.arrow}>
      <svg viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.5 1L18 6M18 6L12.5 11M18 6H1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function Button({
  children,
  href,
  variant = 'primary',
  showArrow = true,
  onClick,
  className,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const classes = cn(styles.button, styles[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {showArrow && <ArrowIcon />}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} type={type} disabled={disabled}>
      {children}
      {showArrow && <ArrowIcon />}
    </button>
  );
}
