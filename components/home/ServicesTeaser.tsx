'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code2, Brain, Smartphone, Cloud, Lightbulb, ArrowRight, Check } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Section from '@/components/layout/Section';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';

const services = [
  {
    icon: Code2,
    label: '01',
    title: 'Web App Development',
    desc: 'From SaaS platforms to enterprise portals — fast, scalable, beautiful web applications built to grow with your business.',
    capabilities: ['SaaS & Multi-Tenant Platforms', 'Admin Dashboards & Analytics', 'E-commerce & Payments', 'REST & GraphQL APIs'],
    href: '/services/web-apps',
    featured: true,
  },
  {
    icon: Brain,
    label: '02',
    title: 'AI Solutions',
    desc: 'Large language models, computer vision, and ML pipelines that automate workflows and create intelligent product experiences.',
    capabilities: ['LLM Chatbots & Assistants', 'RAG Pipelines & Fine-Tuning', 'Process Automation', 'Recommendation Engines'],
    href: '/services/ai',
    featured: true,
  },
  {
    icon: Smartphone,
    label: '03',
    title: 'App Development',
    desc: 'Native iOS & Android apps and cross-platform solutions that users actually love — delivered fast, maintained long-term.',
    capabilities: ['iOS & Android Native', 'React Native / Flutter', 'App Store Deployment', 'Offline-First Architecture'],
    href: '/services/app-development',
    featured: false,
  },
  {
    icon: Cloud,
    label: '04',
    title: 'Cloud & Data Analytics',
    desc: 'Infrastructure that scales, data pipelines that deliver, and dashboards that turn raw numbers into real decisions.',
    capabilities: ['AWS / Azure / GCP', 'Data Warehousing & ETL', 'Real-Time Dashboards', 'DevOps & CI/CD'],
    href: '/services/cloud-analytics',
    featured: false,
  },
  {
    icon: Lightbulb,
    label: '05',
    title: 'Innovative Solutions',
    desc: "Not sure what you need yet? Let's think together. We explore, prototype, and validate ideas before a single line of production code is written.",
    capabilities: ['Emerging Tech Exploration', 'Product Strategy & Prototyping', 'Innovation Sprints', 'Startup CTO Advisory'],
    href: '/services/innovative-solutions',
    featured: false,
    cta: "Let's Discuss →",
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
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div className="space-y-3">
            <motion.div variants={fadeUpVariant}>
              <Badge>Our Services</Badge>
            </motion.div>
            <motion.h2
              variants={fadeUpVariant}
              className="font-syne font-extrabold text-white"
              style={{ fontSize: 'clamp(24px,3.5vw,38px)', letterSpacing: '-0.02em' }}
            >
              Everything You Need to{' '}
              <span className="text-yellow">Build & Scale.</span>
            </motion.h2>
          </div>
          <motion.p variants={fadeUpVariant} className="text-white-muted text-sm max-w-xs leading-relaxed md:text-right">
            Five practices. One team. End-to-end digital delivery from concept to production.
          </motion.p>
        </motion.div>

        {/* Top row — 2 featured cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-4 mb-4"
        >
          {services.filter((s) => s.featured).map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUpVariant}
              className="group relative bg-[#0F0F0F] border border-[#222] rounded-2xl p-7 hover:border-yellow/40 transition-all duration-300 glow-card overflow-hidden"
            >
              {/* number watermark */}
              <span className="absolute top-5 right-6 font-syne font-extrabold text-5xl text-white opacity-[0.04] select-none">
                {service.label}
              </span>

              <div className="w-11 h-11 rounded-xl bg-yellow/10 border border-yellow/20 flex items-center justify-center mb-5">
                <service.icon className="w-5 h-5 text-yellow" />
              </div>

              <h3 className="font-syne font-bold text-white text-xl mb-2">{service.title}</h3>
              <p className="text-white-muted text-sm leading-relaxed mb-5">{service.desc}</p>

              <ul className="space-y-1.5 mb-6">
                {service.capabilities.map((cap) => (
                  <li key={cap} className="flex items-center gap-2 text-white-soft text-sm">
                    <Check className="w-3.5 h-3.5 text-yellow flex-shrink-0" />
                    {cap}
                  </li>
                ))}
              </ul>

              <Link
                href={service.href}
                className="inline-flex items-center gap-1.5 text-yellow font-syne font-semibold text-sm group-hover:gap-2.5 transition-all duration-200"
              >
                Explore Service <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* yellow left border accent on hover */}
              <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-yellow scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center rounded-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom row — 3 cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-4"
        >
          {services.filter((s) => !s.featured).map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUpVariant}
              className="group relative bg-[#0F0F0F] border border-[#222] rounded-2xl p-6 hover:border-yellow/40 transition-all duration-300 glow-card overflow-hidden"
            >
              <span className="absolute top-4 right-5 font-syne font-extrabold text-4xl text-white opacity-[0.04] select-none">
                {service.label}
              </span>

              <div className="w-10 h-10 rounded-lg bg-yellow/10 border border-yellow/20 flex items-center justify-center mb-4">
                <service.icon className="w-4.5 h-4.5 text-yellow" />
              </div>

              <h3 className="font-syne font-bold text-white text-lg mb-2">{service.title}</h3>
              <p className="text-white-muted text-sm leading-relaxed mb-4">{service.desc}</p>

              <ul className="space-y-1.5 mb-5">
                {service.capabilities.map((cap) => (
                  <li key={cap} className="flex items-center gap-2 text-white-soft text-xs">
                    <Check className="w-3 h-3 text-yellow flex-shrink-0" />
                    {cap}
                  </li>
                ))}
              </ul>

              <Link
                href={service.href}
                className="inline-flex items-center gap-1.5 text-yellow font-syne font-semibold text-xs group-hover:gap-2 transition-all duration-200"
              >
                {service.cta ?? 'Learn More'} <ArrowRight className="w-3 h-3" />
              </Link>

              <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-yellow scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
