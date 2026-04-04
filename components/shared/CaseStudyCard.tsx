'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Badge from '@/components/ui/Badge';
import type { CaseStudy } from '@/data/case-studies';

interface CaseStudyCardProps {
  study: CaseStudy;
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-black-soft border border-[#2A2A2A] rounded-lg overflow-hidden hover:border-yellow transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,197,24,0.2)]"
    >
      {/* Cover placeholder */}
      <div
        className="h-48 relative overflow-hidden"
        style={{ backgroundColor: study.coverColor }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-syne font-extrabold text-6xl opacity-10 text-white select-none"
          >
            {study.year}
          </span>
        </div>
        {/* Yellow hover overlay */}
        <div className="absolute inset-0 bg-[rgba(245,197,24,0.15)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 left-4">
          <Badge>{study.category}</Badge>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-syne font-bold text-white text-lg mb-2 group-hover:text-yellow transition-colors duration-200">
          {study.title}
        </h3>
        <p className="text-yellow text-sm font-semibold mb-3">{study.metric}</p>
        <p className="text-white-muted text-sm mb-4 line-clamp-2">{study.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-white-muted text-xs font-syne">{study.year}</span>
          <Link
            href={`/work/${study.slug}`}
            className="flex items-center gap-1 text-yellow text-sm font-syne font-semibold group-hover:gap-2 transition-all duration-200"
          >
            View Case Study <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
