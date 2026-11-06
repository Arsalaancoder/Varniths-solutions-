import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ButtonArrowProps {
  label: string;
  onClick?: () => void;
  to?: string;
  href?: string;
  variant?: 'primary' | 'dark' | 'glass' | 'ghost';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const ButtonArrow: React.FC<ButtonArrowProps> = ({
  label,
  onClick,
  to,
  href,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Exact Wayfare button variant styles
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          wrapper: 'bg-[#FFC94A] text-[#231C0A] border-none shadow-sm',
          fillLayer: 'bg-[#FFF5D6] dark:bg-[#FFD978]',
          arrowColor: 'text-[#231C0A]',
          labelColor: 'text-[#231C0A] font-medium',
        };
      case 'dark':
        return {
          wrapper: 'bg-[#211D16] text-[#F5EFE4] border-none shadow-sm dark:bg-[#1C1913] dark:border dark:border-[#2F2A20]',
          fillLayer: 'bg-[#3F382C] dark:bg-[#27231A]',
          arrowColor: 'text-[#F5EFE4]',
          labelColor: 'text-[#F5EFE4] font-medium',
        };
      case 'glass':
        return {
          wrapper: 'glass-pill text-[#211D16] dark:text-[#F3ECDF] border border-[#E0D6C4] dark:border-[#2F2A20]',
          fillLayer: 'bg-[#ECE3D3] dark:bg-[#27231A]',
          arrowColor: 'text-[#211D16] dark:text-[#F3ECDF]',
          labelColor: 'text-[#211D16] dark:text-[#F3ECDF] font-medium',
        };
      case 'ghost':
      default:
        return {
          wrapper: 'bg-transparent text-[#211D16] dark:text-[#F3ECDF] border border-[#E0D6C4] dark:border-[#2F2A20]',
          fillLayer: 'bg-[#ECE3D3] dark:bg-[#27231A]',
          arrowColor: 'text-[#211D16] dark:text-[#F3ECDF]',
          labelColor: 'text-[#211D16] dark:text-[#F3ECDF] font-medium',
        };
    }
  };

  const styles = getVariantStyles();

  const content = (
    <>
      {/* Background Animated Fill Layer */}
      <span
        className={`absolute right-1 top-1 bottom-1 flex items-center justify-center rounded-full transition-all duration-[450ms] ${
          isHovered ? 'inset-0 w-full h-full rounded-full' : 'w-8 h-8'
        } ${styles.fillLayer}`}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
        }}
      >
        {/* Arrow Clip Container (exact Wayfare width: 16px, height: 20px) */}
        <span className="w-4 h-5 overflow-hidden relative flex items-center justify-center flex-shrink-0">
          {/* Double Arrow Row */}
          <span
            className={`w-10 h-5 flex items-center justify-between absolute top-0 transition-all duration-[450ms] ${
              isHovered ? 'left-0' : '-left-6'
            }`}
            style={{
              transitionTimingFunction: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
            }}
          >
            {/* Arrow In */}
            <span className={`w-4 text-center text-sm font-medium ${styles.arrowColor}`}>
              →
            </span>
            {/* Arrow Out */}
            <span className={`w-4 text-center text-sm font-medium ${styles.arrowColor}`}>
              →
            </span>
          </span>
        </span>
      </span>

      {/* Button Label */}
      <span
        className={`relative z-10 pl-5 pr-11 py-2.5 text-[15px] tracking-tight select-none transition-colors duration-200 ${styles.labelColor}`}
      >
        {label}
      </span>
    </>
  );

  const baseClasses = `relative inline-flex items-center justify-between overflow-hidden rounded-full transition-transform active:scale-[0.98] ${styles.wrapper} ${className}`;

  if (to) {
    return (
      <Link
        to={to}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={baseClasses}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={baseClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${baseClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      {content}
    </button>
  );
};
