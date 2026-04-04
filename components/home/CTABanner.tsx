'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';

export default function CTABanner() {
  return (
    <section className="relative py-28 px-6 md:px-12 lg:px-24 overflow-hidden bg-black">
      {/* Yellow radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(245,197,24,0.12) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto text-center space-y-6"
      >
        <motion.h2
          variants={fadeUpVariant}
          className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(26px,3.8vw,42px)", letterSpacing: "-0.02em" }}
        >
          Ready to Build Something{' '}
          <span className="text-yellow">Extraordinary?</span>
        </motion.h2>
        <motion.p variants={fadeUpVariant} className="text-white-muted text-lg max-w-xl mx-auto">
          Let&apos;s turn your idea into a product that users love and investors fund. No fluff — just results.
        </motion.p>
        <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4 justify-center">
          <Button href="/contact" size="lg">Start Your Project</Button>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-white hover:text-yellow transition-colors duration-200 font-syne font-semibold text-base px-6 py-4"
          >
            Book a Free Call
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
