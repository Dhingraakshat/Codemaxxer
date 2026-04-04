'use client';

import { motion } from 'framer-motion';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Section from '@/components/layout/Section';
import CaseStudyCard from '@/components/shared/CaseStudyCard';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';
import { caseStudies } from '@/data/case-studies';

export default function FeaturedWork() {
  const featured = caseStudies.slice(0, 3);

  return (
    <Section className="bg-black-soft" withGrid>
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div className="space-y-4">
            <motion.div variants={fadeUpVariant}>
              <Badge>Our Work</Badge>
            </motion.div>
            <motion.h2 variants={fadeUpVariant} className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(24px,3.5vw,38px)", letterSpacing: "-0.02em" }}>
              Results That <span className="text-yellow">Speak.</span>
            </motion.h2>
          </div>
          <motion.div variants={fadeUpVariant}>
            <Button href="/work" variant="secondary">See All Projects</Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featured.map((study) => (
            <motion.div key={study.slug} variants={fadeUpVariant}>
              <CaseStudyCard study={study} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
