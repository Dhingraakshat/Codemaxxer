import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3.5 py-1.5 text-[11px] font-syne font-semibold uppercase tracking-[0.16em]',
        'text-yellow border border-yellow/30 rounded-full',
        'bg-[rgba(245,197,24,0.07)]',
        'shadow-[0_0_12px_rgba(245,197,24,0.1)]',
        className
      )}
    >
      {children}
    </span>
  );
}
