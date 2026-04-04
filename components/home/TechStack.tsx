'use client';

import { motion } from 'framer-motion';
import Badge from '@/components/ui/Badge';
import Section from '@/components/layout/Section';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';

const row1 = ['React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'];
const row2 = ['OpenAI', 'LangChain', 'AWS', 'Docker', 'Kubernetes', 'GraphQL', 'Prisma', 'TailwindCSS'];

function TechPill({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center px-5 py-2.5 border border-[#2A2A2A] rounded-full text-white-soft text-sm font-syne font-medium whitespace-nowrap hover:border-yellow hover:text-yellow transition-all duration-200 bg-black-soft mx-2">
      {name}
    </span>
  );
}

export default function TechStack() {
  return (
    <Section className="bg-black-soft overflow-hidden" withGrid>
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 space-y-4"
        >
          <motion.div variants={fadeUpVariant}>
            <Badge>Technologies</Badge>
          </motion.div>
          <motion.h2 variants={fadeUpVariant} className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(24px,3.5vw,38px)", letterSpacing: "-0.02em" }}>
            We Speak the Language of{' '}
            <span className="text-yellow">Modern Tech.</span>
          </motion.h2>
        </motion.div>
      </div>

      {/* Row 1 - scrolls left */}
      <div className="overflow-hidden mb-4">
        <div className="ticker-left flex">
          {[...row1, ...row1].map((tech, i) => (
            <TechPill key={i} name={tech} />
          ))}
        </div>
      </div>

      {/* Row 2 - scrolls right */}
      <div className="overflow-hidden">
        <div className="ticker-right flex">
          {[...row2, ...row2].map((tech, i) => (
            <TechPill key={i} name={tech} />
          ))}
        </div>
      </div>
    </Section>
  );
}
