'use client';

import { motion } from 'framer-motion';
import { Zap, Brain, Layers, Eye, Headphones, Shield } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Section from '@/components/layout/Section';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';

const features = [
  { icon: Zap, title: 'Rapid Delivery', desc: 'We ship fast without cutting corners. Most projects go from kickoff to launch in under 16 weeks.' },
  { icon: Brain, title: 'AI-First Thinking', desc: 'Every solution we build considers how AI can enhance it — from autocomplete to full automation.' },
  { icon: Layers, title: 'Scalable Architecture', desc: "We design for 10x growth from day one. Your infrastructure won't break when you go viral." },
  { icon: Eye, title: 'Full Transparency', desc: 'Weekly updates, shared roadmaps, and open communication channels — always.' },
  { icon: Headphones, title: 'Post-Launch Support', desc: '90-day warranty on all projects, plus ongoing maintenance and growth-phase support.' },
  { icon: Shield, title: 'Security by Design', desc: 'SOC 2, GDPR, and HIPAA compliance baked into every architecture decision from the start.' },
];

export default function WhyUs() {
  return (
    <Section className="bg-black-soft" withGrid>
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <motion.div variants={fadeUpVariant}>
            <Badge>Why Us</Badge>
          </motion.div>
          <motion.h2 variants={fadeUpVariant} className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(24px,3.5vw,38px)", letterSpacing: "-0.02em" }}>
            Built <span className="text-yellow">Different.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUpVariant}
              className="bg-black border border-[#2A2A2A] rounded-lg p-6 hover:border-yellow transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-[rgba(245,197,24,0.1)] flex items-center justify-center mb-4 group-hover:bg-[rgba(245,197,24,0.2)] transition-colors">
                <feature.icon className="w-5 h-5 text-yellow" />
              </div>
              <h3 className="font-syne font-bold text-white text-lg mb-2">{feature.title}</h3>
              <p className="text-white-muted text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
