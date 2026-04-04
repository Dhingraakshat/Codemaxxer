'use client';

import { motion } from 'framer-motion';
import Badge from '@/components/ui/Badge';
import Section from '@/components/layout/Section';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';

const steps = [
  { num: '01', title: 'Discovery & Strategy', desc: 'Deep-dive into your goals, users, and technical requirements to craft a bulletproof project roadmap.' },
  { num: '02', title: 'Architecture & Design', desc: 'System architecture, database schema, and high-fidelity UI designs — all approved before a single line of code.' },
  { num: '03', title: 'Development & Integration', desc: 'Agile sprints with weekly demos. Full-stack development with continuous integration and deployment.' },
  { num: '04', title: 'QA & Testing', desc: 'Rigorous automated and manual testing across browsers, devices, and edge cases before every release.' },
  { num: '05', title: 'Launch & Scale', desc: 'Smooth deployment, performance monitoring, and ongoing optimization to support your growth.' },
];

export default function Process() {
  return (
    <Section withGrid>
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <motion.div variants={fadeUpVariant}>
            <Badge>The Process</Badge>
          </motion.div>
          <motion.h2 variants={fadeUpVariant} className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(24px,3.5vw,38px)", letterSpacing: "-0.02em" }}>
            From Idea to Launch —{' '}
            <span className="text-yellow">Seamlessly.</span>
          </motion.h2>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden lg:block">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Connecting line */}
            <div className="absolute top-8 left-0 right-0 h-px bg-[#2A2A2A]" />
            <div
              className="absolute top-8 left-0 h-px bg-yellow"
              style={{ width: '80%', opacity: 0.4 }}
            />

            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <motion.div key={step.num} variants={fadeUpVariant} className="relative pt-16 text-center">
                  {/* Circle */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-yellow flex items-center justify-center z-10 shadow-[0_0_20px_rgba(245,197,24,0.4)]">
                    <span className="font-syne font-extrabold text-black text-sm">{step.num}</span>
                  </div>
                  <h3 className="font-syne font-bold text-white text-sm mb-2">{step.title}</h3>
                  <p className="text-white-muted text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-6 relative"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-yellow flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(245,197,24,0.3)]">
                  <span className="font-syne font-extrabold text-black text-xs">{step.num}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px flex-1 bg-[#2A2A2A] mt-2 mb-2 min-h-[40px]" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="font-syne font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
