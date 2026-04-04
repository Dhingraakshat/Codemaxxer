'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code2, Brain, ArrowRight, Check } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Section from '@/components/layout/Section';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';

const services = [
  {
    icon: Code2,
    title: 'Web App Development',
    desc: 'From SaaS platforms to enterprise portals — we build fast, scalable, and beautiful web applications that drive real business results.',
    capabilities: [
      'SaaS & Multi-Tenant Platforms',
      'E-commerce & Payment Systems',
      'Admin Dashboards & Analytics',
      'REST & GraphQL APIs',
    ],
    href: '/services/web-apps',
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    desc: 'We harness the power of large language models, computer vision, and ML to automate workflows and create intelligent product experiences.',
    capabilities: [
      'LLM Chatbots & Assistants',
      'RAG Pipelines & Fine-Tuning',
      'Process Automation',
      'Recommendation Engines',
    ],
    href: '/services/ai',
  },
];

export default function ServicesTeaser() {
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
            <Badge>Our Services</Badge>
          </motion.div>
          <motion.h2 variants={fadeUpVariant} className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(24px,3.5vw,38px)", letterSpacing: "-0.02em" }}>
            Two Core Pillars.{' '}
            <span className="text-yellow">Infinite Possibilities.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUpVariant}
              className="group relative bg-black-soft border-t-4 border-t-yellow border border-[#2A2A2A] rounded-lg p-8 hover:shadow-[0_0_40px_rgba(245,197,24,0.2)] hover:border-yellow transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[rgba(245,197,24,0.1)] flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-yellow" />
              </div>
              <h3 className="font-syne font-bold text-white text-2xl mb-3">{service.title}</h3>
              <p className="text-white-muted mb-6 leading-relaxed">{service.desc}</p>
              <ul className="space-y-2 mb-6">
                {service.capabilities.map((cap) => (
                  <li key={cap} className="flex items-center gap-2 text-white-soft text-sm">
                    <Check className="w-4 h-4 text-yellow flex-shrink-0" />
                    {cap}
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-yellow font-syne font-semibold text-sm group-hover:gap-3 transition-all duration-200"
              >
                Explore Service <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
