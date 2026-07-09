import { ButtonHTMLAttributes } from 'react';

interface PearlButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function PearlButton({ variant = 'primary', children, className = '', ...props }: PearlButtonProps) {
  return (
    <button
      className={`pearl-button pearl-button--${variant} ${className}`}
      {...props}
    >
      <span className="pearl-button__inner">{children}</span>
    </button>
  );
}
