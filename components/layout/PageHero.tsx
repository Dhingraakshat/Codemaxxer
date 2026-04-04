'use client';

import { motion } from 'framer-motion';
import Badge from '@/components/ui/Badge';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function PageHero({ badge, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 px-6 md:px-12 lg:px-24 bg-black grid-overlay overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(245,197,24,0.07) 0%, transparent 70%)', filter: 'blur(30px)' }}
        />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {badge && (
            <motion.div variants={fadeUpVariant}>
              <Badge>{badge}</Badge>
            </motion.div>
          )}
          <motion.h1
            variants={fadeUpVariant}
            className="font-syne font-extrabold text-white leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em' }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p variants={fadeUpVariant} className="text-white-muted text-base max-w-xl mx-auto leading-relaxed">
              {subtitle}
            </motion.p>
          )}
          {children && <motion.div variants={fadeUpVariant}>{children}</motion.div>}
        </motion.div>
      </div>
    </section>
  );
}
