'use client';

import Link from 'next/link';
import { ArrowRight, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  loading?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const sizeClasses = {
  sm: 'px-4 py-2 text-xs gap-1.5',
  md: 'px-5 py-2.5 text-sm gap-2',
  lg: 'px-7 py-3.5 text-sm gap-2',
};

const variantClasses = {
  primary:
    'bg-yellow text-black font-bold rounded-md hover:bg-yellow-soft hover:shadow-[0_0_28px_rgba(245,197,24,0.5)] active:scale-[0.98] transition-all duration-200',
  secondary:
    'bg-transparent border border-yellow/60 text-yellow rounded-md hover:border-yellow hover:bg-[rgba(245,197,24,0.08)] hover:shadow-[0_0_20px_rgba(245,197,24,0.15)] active:scale-[0.98] transition-all duration-200',
  ghost:
    'bg-transparent text-white-soft rounded-md hover:text-yellow transition-all duration-200',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  onClick,
  loading,
  className,
  type = 'button',
  disabled,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center font-syne font-semibold cursor-pointer group relative overflow-hidden whitespace-nowrap',
    sizeClasses[size],
    variantClasses[variant],
    (disabled || loading) && 'opacity-50 cursor-not-allowed',
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {loading ? (
        <Loader2 className="w-3.5 h-3.5 animate-spin flex-shrink-0" />
      ) : (
        <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return <Link href={href} className={classes}>{content}</Link>;
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} className={classes}>
      {content}
    </button>
  );
}
