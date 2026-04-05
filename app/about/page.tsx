'use client';

import { motion } from 'framer-motion';
import {
  Target, Eye, Lightbulb, TrendingUp, MapPin, Calendar, Users,
  Code2, Brain, Smartphone, Cloud, Sparkles, ShieldCheck, Clock, Globe,
} from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Section from '@/components/layout/Section';

const milestones = [
  { year: 'Q1 2026', event: 'Founded with a clear vision — make elite software and AI development accessible to every ambitious business worldwide.' },
  { year: 'Q2 2026', event: 'Launched five core service practices: Web App Development, AI Solutions, Mobile, Cloud & Data Analytics, and Innovative Solutions.' },
  { year: 'Q3 2026', event: 'First client projects underway. Remote-first team assembled across Europe. Rapid delivery model established.' },
  { year: 'Q4 2026', event: 'Expanding into new verticals — FinTech, HealthTech, and EdTech — with tailored solutions for each domain.' },
  { year: '2027', event: 'Scaling the team and capability. Goal: become the go-to AI & web agency for growth-stage companies globally.' },
];

const values = [
  { icon: Target, title: 'Craftsmanship', desc: 'We care deeply about the quality of every line of code, every pixel, every interaction.' },
  { icon: Eye, title: 'Transparency', desc: 'Radical honesty with clients — no surprises, no spin, just the truth at every stage.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We stay at the frontier, constantly learning and applying the latest in technology.' },
  { icon: TrendingUp, title: 'Impact', desc: 'We measure success by the real-world outcomes our clients achieve, not just delivery.' },
];

const whatWeDo = [
  {
    icon: Code2,
    title: 'Web App Development',
    items: ['SaaS Platforms', 'E-commerce Solutions', 'Admin Dashboards', 'APIs & Microservices'],
    href: '/services/web-apps',
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    items: ['LLM Chatbots & Assistants', 'RAG Pipelines', 'Process Automation', 'Predictive Analytics'],
    href: '/services/ai',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    items: ['iOS & Android Native', 'React Native / Flutter', 'Offline-First Architecture', 'App Store Deployment'],
    href: '/services',
  },
  {
    icon: Cloud,
    title: 'Cloud & Data Analytics',
    items: ['AWS / Azure / GCP', 'Data Warehousing & ETL', 'Real-Time Dashboards', 'DevOps & CI/CD'],
    href: '/services',
  },
  {
    icon: Sparkles,
    title: 'Innovative Solutions',
    items: ['Emerging Tech R&D', 'Product Prototyping', 'Innovation Sprints', 'CTO Advisory'],
    href: '/contact',
  },
];

const trustSignals = [
  { icon: ShieldCheck, title: 'NDA on Request', desc: 'We sign NDAs before every discovery call — your ideas stay yours.' },
  { icon: Clock, title: '24h Response', desc: 'Every inquiry gets a thoughtful response within one business day.' },
  { icon: Globe, title: 'Worldwide Clients', desc: 'Delivering for businesses across Europe, North America, and Asia.' },
  { icon: Users, title: 'Dedicated Teams', desc: 'A fixed, named team on your project — not a rotating cast of freelancers.' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-black overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(245,197,24,0.06) 0%, transparent 60%)',
        }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
              <motion.div variants={fadeUp}><Badge>Our Story</Badge></motion.div>
              <motion.h1
                variants={fadeUp}
                className="font-syne font-extrabold text-white leading-tight"
                style={{ fontSize: 'clamp(28px,4vw,48px)', letterSpacing: '-0.025em' }}
              >
                We Are{' '}
                <span style={{ color: '#F5C518', textShadow: '0 0 40px rgba(245,197,24,0.3)' }}>
                  Codema<span>XX</span>ers.
                </span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-white-muted leading-relaxed max-w-lg">
                An elite, remote-first software agency obsessed with building products that actually matter.
                From FinTech to HealthTech, from web apps to AI pipelines — we ship fast and build right.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Button href="/contact">Start a Project</Button>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Calendar, label: 'Founded', value: '2026' },
                { icon: MapPin, label: 'Setup', value: 'Remote-First' },
                { icon: Users, label: 'Practices', value: '5 Services' },
                { icon: Globe, label: 'Reach', value: 'Worldwide' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-[#0F0F0F] border border-[#222] rounded-xl p-5 hover:border-yellow/30 transition-all duration-300">
                  <Icon className="w-4 h-4 text-yellow mb-2" />
                  <p className="text-white-muted text-xs font-syne uppercase tracking-widest mb-1">{label}</p>
                  <p className="font-syne font-bold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Do ───────────────────────────────────────────────── */}
      <Section withGrid>
        <div className="max-w-7xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12 space-y-3">
            <motion.div variants={fadeUp}><Badge>What We Do</Badge></motion.div>
            <motion.h2 variants={fadeUp} className="font-syne font-extrabold text-white" style={{ fontSize: 'clamp(22px,3vw,36px)', letterSpacing: '-0.02em' }}>
              Five Practices. <span className="text-yellow">One Dedicated Team.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white-muted text-sm max-w-md mx-auto">
              End-to-end digital delivery — we cover the full stack so you don&apos;t have to manage multiple vendors.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {whatWeDo.map((s) => (
              <motion.a
                key={s.title}
                href={s.href}
                variants={fadeUp}
                className="group bg-[#0F0F0F] border border-[#222] rounded-2xl p-6 hover:border-yellow/40 transition-all duration-300 glow-card block"
              >
                <div className="w-10 h-10 rounded-lg bg-yellow/10 border border-yellow/20 flex items-center justify-center mb-4 group-hover:bg-yellow/15 transition-colors">
                  <s.icon className="w-5 h-5 text-yellow" />
                </div>
                <h3 className="font-syne font-bold text-white mb-3">{s.title}</h3>
                <ul className="space-y-1.5">
                  {s.items.map((item) => (
                    <li key={item} className="text-white-muted text-sm flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-yellow flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.a>
            ))}

            {/* CTA card */}
            <motion.a
              href="/contact"
              variants={fadeUp}
              className="group bg-yellow/5 border border-yellow/20 rounded-2xl p-6 hover:bg-yellow/10 hover:border-yellow/50 transition-all duration-300 glow-card flex flex-col justify-between"
            >
              <div>
                <p className="text-yellow font-syne font-bold text-xs uppercase tracking-widest mb-3">Not sure yet?</p>
                <p className="text-white font-syne font-semibold text-lg leading-snug mb-2">
                  Let&apos;s figure out the right solution together.
                </p>
                <p className="text-white-muted text-sm">Book a free 30-min call — no commitment, no pitch deck.</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-yellow font-syne font-semibold text-sm group-hover:gap-3 transition-all">
                Book a Free Call →
              </span>
            </motion.a>
          </motion.div>
        </div>
      </Section>

      {/* ── Trust Signals ────────────────────────────────────────────── */}
      <Section className="bg-[#0A0A0A] border-y border-[#181818]">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {trustSignals.map((t, i) => (
              <div
                key={t.title}
                className={`px-8 py-10 ${i < trustSignals.length - 1 ? 'border-r border-[#181818]' : ''}`}
              >
                <t.icon className="w-5 h-5 text-yellow mb-3" />
                <h4 className="font-syne font-bold text-white mb-1.5">{t.title}</h4>
                <p className="text-white-muted text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Story Timeline ────────────────────────────────────────────── */}
      <Section withGrid>
        <div className="max-w-4xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12 space-y-3">
            <motion.div variants={fadeUp}><Badge>Our Journey</Badge></motion.div>
            <motion.h2 variants={fadeUp} className="font-syne font-extrabold text-white" style={{ fontSize: 'clamp(22px,3vw,34px)', letterSpacing: '-0.02em' }}>
              Day One. <span className="text-yellow">One Mission.</span>
            </motion.h2>
          </motion.div>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-8 relative"
              >
                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full bg-yellow flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(245,197,24,0.4)]">
                    <span className="font-syne font-bold text-black text-[10px] text-center leading-tight">{m.year}</span>
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-yellow/30 to-transparent min-h-[48px] my-2" />
                  )}
                </div>
                <div className="pb-10 flex-1 pt-2.5">
                  <p className="text-white-soft leading-relaxed">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Mission & Vision ──────────────────────────────────────────── */}
      <Section className="bg-[#0B0B0B]" withGrid>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0F0F0F] border-l-4 border-yellow border border-[#222] rounded-2xl p-8">
              <p className="text-yellow font-syne font-semibold text-xs uppercase tracking-[0.18em] mb-4">Mission</p>
              <p className="text-white-soft text-lg leading-relaxed font-syne">
                To empower businesses with world-class software — built with craftsmanship, delivered with speed, and designed to create lasting impact.
              </p>
            </div>
            <div className="bg-[#0F0F0F] border-l-4 border-yellow border border-[#222] rounded-2xl p-8">
              <p className="text-yellow font-syne font-semibold text-xs uppercase tracking-[0.18em] mb-4">Vision</p>
              <p className="text-white-soft text-lg leading-relaxed font-syne">
                A world where every ambitious company — regardless of size — has access to elite engineering talent and AI capabilities once reserved for tech giants.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Core Values ───────────────────────────────────────────────── */}
      <Section withGrid>
        <div className="max-w-7xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12 space-y-3">
            <motion.div variants={fadeUp}><Badge>Core Values</Badge></motion.div>
            <motion.h2 variants={fadeUp} className="font-syne font-extrabold text-white" style={{ fontSize: 'clamp(22px,3vw,34px)', letterSpacing: '-0.02em' }}>
              What Guides Everything We Do.
            </motion.h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v) => (
              <div key={v.title} className="bg-[#0F0F0F] border border-[#222] rounded-2xl p-6 hover:border-yellow/40 transition-all duration-300 group glow-card text-center">
                <div className="w-11 h-11 rounded-full bg-yellow/10 border border-yellow/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow/20 transition-colors">
                  <v.icon className="w-5 h-5 text-yellow" />
                </div>
                <h3 className="font-syne font-bold text-white mb-2">{v.title}</h3>
                <p className="text-white-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="relative py-20 px-6 md:px-12 lg:px-24 text-center overflow-hidden" style={{
        background: 'radial-gradient(ellipse at center, rgba(245,197,24,0.07) 0%, transparent 65%)',
      }}>
        <div className="section-divider mb-16" />
        <Badge>Work With Us</Badge>
        <h2 className="font-syne font-extrabold text-white mt-4 mb-3" style={{ fontSize: 'clamp(22px,3vw,36px)', letterSpacing: '-0.02em' }}>
          Ready to Build Something Real?
        </h2>
        <p className="text-white-muted mb-8 max-w-md mx-auto text-sm">
          Tell us about your project — we&apos;ll respond within 24 hours with a tailored approach.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button href="/contact" size="lg">Start a Project</Button>
          <Button href="/work" variant="secondary" size="lg">See Our Work</Button>
        </div>
      </section>
    </>
  );
}
