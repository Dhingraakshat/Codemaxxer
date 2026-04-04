'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  accentTop?: boolean;
  onClick?: () => void;
}

export default function Card({ children, className, accentTop, onClick }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className={cn(
        'bg-black-soft border border-[#2A2A2A] rounded-lg p-6',
        'hover:shadow-[0_0_30px_rgba(245,197,24,0.3)] hover:border-yellow',
        'transition-all duration-300 relative',
        accentTop && 'border-t-4 border-t-yellow',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
