'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Badge from '@/components/ui/Badge';
import PageHero from '@/components/layout/PageHero';
import CaseStudyCard from '@/components/shared/CaseStudyCard';
import { caseStudies } from '@/data/case-studies';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';

const filters = ['All', 'Web App', 'AI Solution'] as const;
type Filter = typeof filters[number];

export default function WorkPage() {
  const [active, setActive] = useState<Filter>('All');

  const filtered = active === 'All'
    ? caseStudies
    : caseStudies.filter((c) => c.category === active);

  return (
    <>
      <PageHero
        badge="Our Work"
        title="The Work."
        subtitle="Real projects. Real results. Six case studies showcasing what we build — and the metrics that prove it works."
      />

      {/* Filter tabs */}
      <section className="px-6 md:px-12 lg:px-24 py-8 border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto flex gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full font-syne font-semibold text-sm transition-all duration-200 ${
                active === f
                  ? 'bg-yellow text-black'
                  : 'border border-[#2A2A2A] text-white-muted hover:border-yellow hover:text-yellow'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            key={active}
          >
            {filtered.map((study) => (
              <motion.div key={study.slug} variants={fadeUpVariant}>
                <CaseStudyCard study={study} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
