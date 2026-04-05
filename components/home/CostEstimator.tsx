'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, AlertCircle, Calendar, Zap, Tag, Clock, Flame, Star } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Section from '@/components/layout/Section';

// ─── DATA ────────────────────────────────────────────────────────────────────

type Category = 'All' | 'Web Dev' | 'App Dev' | 'AI Solutions' | 'Data Analytics' | 'Consulting';

interface Service {
  id: string;
  category: Exclude<Category, 'All'>;
  name: string;
  min: number;
  max: number;
  monthly?: boolean;
}

const SERVICES: Service[] = [
  { id: 'web-landing',     category: 'Web Dev',       name: 'Landing page / brochure site',                        min: 500,   max: 1500  },
  { id: 'web-business',    category: 'Web Dev',       name: 'Business website',                                    min: 1500,  max: 4000  },
  { id: 'web-ecom',        category: 'Web Dev',       name: 'E-commerce store',                                    min: 3000,  max: 8000  },
  { id: 'web-platform',    category: 'Web Dev',       name: 'Custom web platform',                                 min: 8000,  max: 25000 },
  { id: 'web-redesign',    category: 'Web Dev',       name: 'Website redesign',                                    min: 1000,  max: 5000  },
  { id: 'app-simple',      category: 'App Dev',       name: 'Simple mobile app (single platform)',                 min: 5000,  max: 15000 },
  { id: 'app-cross',       category: 'App Dev',       name: 'Cross-platform app (Flutter / React Native)',         min: 8000,  max: 20000 },
  { id: 'app-complex',     category: 'App Dev',       name: 'Complex app with backend',                            min: 20000, max: 60000 },
  { id: 'app-mvp',         category: 'App Dev',       name: 'MVP for a startup',                                   min: 8000,  max: 25000 },
  { id: 'app-maintenance', category: 'App Dev',       name: 'App maintenance',                                     min: 500,   max: 2000,  monthly: true },
  { id: 'ai-faq',          category: 'AI Solutions',  name: 'Simple FAQ chatbot',                                  min: 800,   max: 2500  },
  { id: 'ai-advanced',     category: 'AI Solutions',  name: 'Advanced AI chatbot (RAG / custom knowledge base)',   min: 2500,  max: 8000  },
  { id: 'ai-automation',   category: 'AI Solutions',  name: 'AI automation workflow',                              min: 1500,  max: 6000  },
  { id: 'ai-docs',         category: 'AI Solutions',  name: 'AI document processing',                              min: 3000,  max: 10000 },
  { id: 'ai-integration',  category: 'AI Solutions',  name: 'Custom AI integration',                               min: 2000,  max: 12000 },
  { id: 'ai-agent',        category: 'AI Solutions',  name: 'AI agent (autonomous)',                               min: 5000,  max: 20000 },
  { id: 'ai-maintenance',  category: 'AI Solutions',  name: 'Monthly AI maintenance',                              min: 150,   max: 600,   monthly: true },
  { id: 'data-basic',      category: 'Data Analytics',name: 'Basic dashboard (Power BI / Looker)',                 min: 1000,  max: 3500  },
  { id: 'data-custom',     category: 'Data Analytics',name: 'Custom analytics dashboard',                          min: 3000,  max: 10000 },
  { id: 'data-pipeline',   category: 'Data Analytics',name: 'Data pipeline setup',                                 min: 2000,  max: 8000  },
  { id: 'data-bi',         category: 'Data Analytics',name: 'Business intelligence setup',                         min: 5000,  max: 20000 },
  { id: 'data-reporting',  category: 'Data Analytics',name: 'Monthly reporting service',                           min: 300,   max: 1500,  monthly: true },
  { id: 'con-discovery',   category: 'Consulting',    name: 'Discovery / strategy session',                        min: 200,   max: 600   },
  { id: 'con-audit',       category: 'Consulting',    name: 'Tech audit of existing systems',                      min: 500,   max: 2000  },
  { id: 'con-retainer',    category: 'Consulting',    name: 'Monthly tech consulting retainer',                    min: 500,   max: 2500,  monthly: true },
];

const CATEGORIES: Category[] = ['All', 'Web Dev', 'App Dev', 'AI Solutions', 'Data Analytics', 'Consulting'];

const COMPLEXITIES = [
  { label: 'Simple',   factor: 0.85 },
  { label: 'Standard', factor: 1.0  },
  { label: 'Complex',  factor: 1.3  },
];

const OFFER_DEADLINE = new Date('2026-04-30T23:59:59');
const DISCOUNT = 0.5;

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function fmt(n: number) {
  return '€' + Math.round(n).toLocaleString('en-EU');
}

function useCountdown(target: Date) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days:    Math.floor(diff / 86400000),
      hours:   Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000)  / 60000),
      seconds: Math.floor((diff % 60000)    / 1000),
      expired: diff === 0,
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

// ─── SELECT ───────────────────────────────────────────────────────────────────

function Select({ value, onChange, options }: {
  value: number;
  onChange: (v: number) => void;
  options: { label: string; factor: number }[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full appearance-none bg-[#0F0F0F] border border-[#2A2A2A] rounded-xl px-4 py-2.5 pr-9 text-white text-sm font-dmsans focus:outline-none focus:border-yellow transition-colors cursor-pointer"
      >
        {options.map((o) => (
          <option key={o.label} value={o.factor}>{o.label}</option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white-muted pointer-events-none" />
    </div>
  );
}

// ─── COUNTDOWN TILE ──────────────────────────────────────────────────────────

function Tile({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="bg-black border border-yellow/30 rounded-lg px-3 py-2 min-w-[52px] text-center shadow-[0_0_12px_rgba(245,197,24,0.2)]">
          <span className="font-syne font-extrabold text-yellow text-2xl leading-none tabular-nums">
            {String(value).padStart(2, '0')}
          </span>
        </div>
      </div>
      <span className="text-white-muted text-[10px] uppercase tracking-widest mt-1 font-syne">{label}</span>
    </div>
  );
}

// ─── MAIN ────────────────────────────────────────────────────────────────────

export default function CostEstimator() {
  const [activeTab, setActiveTab]           = useState<Category>('All');
  const [selected, setSelected]             = useState<Set<string>>(new Set());
  const [complexityFactor, setComplexity]   = useState(1.0);
  const countdown                           = useCountdown(OFFER_DEADLINE);

  const toggle = (id: string) =>
    setSelected((prev) => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

  const visible          = activeTab === 'All' ? SERVICES : SERVICES.filter((s) => s.category === activeTab);
  const selectedServices = SERVICES.filter((s) => selected.has(s.id));
  const hasAI            = selectedServices.some((s) => s.category === 'AI Solutions');

  const estimate = useMemo(() => {
    if (!selectedServices.length) return null;
    const rawMin  = selectedServices.reduce((a, s) => a + s.min, 0);
    const rawMax  = selectedServices.reduce((a, s) => a + s.max, 0);
    const fullMin = rawMin * complexityFactor;
    const fullMax = rawMax * complexityFactor;
    const fullMid = (fullMin + fullMax) / 2;
    const discMin = fullMin * DISCOUNT;
    const discMax = fullMax * DISCOUNT;
    const discMid = fullMid * DISCOUNT;
    return { fullMin, fullMax, fullMid, discMin, discMax, discMid };
  }, [selectedServices, complexityFactor]);

  return (
    <section className="relative overflow-hidden">
      {/* ── LAUNCH OFFER BANNER ─────────────────────────────────────────────── */}
      <div className="relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #0A0A0A 0%, #111108 40%, #0A0A0A 100%)',
      }}>
        {/* Animated glow orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="orb-drift absolute rounded-full" style={{ width: 600, height: 600, top: -200, left: -150, background: 'radial-gradient(circle, rgba(245,197,24,0.12) 0%, transparent 65%)', filter: 'blur(40px)' }} />
          <div className="orb-drift-reverse absolute rounded-full" style={{ width: 500, height: 500, bottom: -150, right: -100, background: 'radial-gradient(circle, rgba(245,197,24,0.09) 0%, transparent 65%)', filter: 'blur(40px)' }} />
          {/* Grid */}
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(245,197,24,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(245,197,24,0.025) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center text-center gap-8"
          >
            {/* Pill badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border font-syne font-bold text-sm"
              style={{ background: 'rgba(245,197,24,0.12)', borderColor: 'rgba(245,197,24,0.5)', color: '#F5C518', boxShadow: '0 0 30px rgba(245,197,24,0.2)' }}
            >
              <Flame className="w-4 h-4" />
              LAUNCH OFFER — LIMITED TIME
              <Flame className="w-4 h-4" />
            </motion.div>

            {/* Main headline */}
            <div className="space-y-4 max-w-3xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="font-syne font-extrabold text-white leading-tight"
                style={{ fontSize: 'clamp(32px,5vw,64px)', letterSpacing: '-0.03em' }}
              >
                Get{' '}
                <span className="relative inline-block">
                  <span className="relative z-10" style={{ color: '#F5C518', textShadow: '0 0 40px rgba(245,197,24,0.5)' }}>50% Off</span>
                  {/* Underline */}
                  <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #F5C518, #FFD84D)', boxShadow: '0 0 12px rgba(245,197,24,0.6)' }} />
                </span>
                {' '}Every Service
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-white-muted text-base leading-relaxed max-w-xl mx-auto"
              >
                We&apos;re celebrating our launch. For every project booked before{' '}
                <span className="text-yellow font-semibold">30 April 2026</span>, you pay half price. Same team, same quality — half the cost.
              </motion.p>
            </div>

            {/* Perks row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {[
                { icon: Tag,  text: '50% off all services' },
                { icon: Star, text: 'Full quality, zero compromise' },
                { icon: Zap,  text: 'Fast turnaround guaranteed' },
                { icon: Check,text: 'No hidden fees' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-syne font-medium" style={{ background: 'rgba(245,197,24,0.08)', border: '1px solid rgba(245,197,24,0.2)', color: '#E5E5E5' }}>
                  <Icon className="w-3.5 h-3.5 text-yellow flex-shrink-0" />
                  {text}
                </div>
              ))}
            </motion.div>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="flex items-center gap-1.5 text-white-muted text-xs font-syne uppercase tracking-widest">
                <Clock className="w-3.5 h-3.5 text-yellow" />
                Offer expires in
              </div>
              <div className="flex items-center gap-2">
                <Tile value={countdown.days}    label="days"    />
                <span className="text-yellow font-bold text-2xl mb-4">:</span>
                <Tile value={countdown.hours}   label="hours"   />
                <span className="text-yellow font-bold text-2xl mb-4">:</span>
                <Tile value={countdown.minutes} label="mins"    />
                <span className="text-yellow font-bold text-2xl mb-4">:</span>
                <Tile value={countdown.seconds} label="secs"    />
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              <Button href="/contact" size="lg" className="btn-pulse">
                Claim Your 50% Discount
              </Button>
              <Button href="/estimate" variant="secondary" size="lg">
                Calculate Your Price
              </Button>
            </motion.div>

            <p className="text-white-muted text-xs">
              * Discount applies to projects booked & deposit paid before 30 April 2026. One project per client.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── COST ESTIMATOR ──────────────────────────────────────────────────── */}
      <Section withGrid id="estimator">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 space-y-3"
          >
            <Badge>Project Cost Estimator</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: 'clamp(24px,3.5vw,38px)', letterSpacing: '-0.02em' }}>
              Build Your Project. <span className="text-yellow">See the Price Instantly.</span>
            </h2>
            <p className="text-white-muted text-sm max-w-md mx-auto">
              Select services and complexity — your estimate updates live. <span className="text-yellow font-semibold">50% off prices shown automatically.</span>
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_360px] gap-6 items-start">
            {/* ── Left: configurator ── */}
            <div className="space-y-5">
              {/* Complexity only */}
              <div className="max-w-xs">
                <label className="block text-white-muted text-xs font-syne uppercase tracking-widest mb-2">Project Complexity</label>
                <Select value={complexityFactor} onChange={setComplexity} options={COMPLEXITIES} />
              </div>

              {/* Category tabs */}
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`px-4 py-1.5 rounded-full font-syne font-semibold text-xs transition-all duration-200 ${
                      activeTab === cat
                        ? 'bg-yellow text-black'
                        : 'border border-[#2A2A2A] text-white-muted hover:border-yellow/50 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Service cards */}
              <motion.div layout className="grid sm:grid-cols-2 gap-2.5">
                <AnimatePresence mode="popLayout">
                  {visible.map((service) => {
                    const isSel       = selected.has(service.id);
                    const fullMin     = service.min * complexityFactor;
                    const fullMax     = service.max * complexityFactor;
                    const discMin     = fullMin * DISCOUNT;
                    const discMax     = fullMax * DISCOUNT;
                    return (
                      <motion.button
                        key={service.id}
                        layout
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.18 }}
                        onClick={() => toggle(service.id)}
                        className={`relative text-left rounded-xl border p-4 transition-all duration-200 ${
                          isSel
                            ? 'bg-yellow/10 border-yellow shadow-[0_0_20px_rgba(245,197,24,0.15)]'
                            : 'bg-[#0F0F0F] border-[#222] hover:border-yellow/40 hover:bg-[#111]'
                        }`}
                      >
                        {/* Checkmark */}
                        <div className={`absolute top-3 right-3 w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200 ${isSel ? 'bg-yellow border-yellow' : 'border-[#333]'}`}>
                          {isSel && <Check className="w-3 h-3 text-black" strokeWidth={3} />}
                        </div>

                        {/* Badges row */}
                        <div className="flex items-center gap-1.5 mb-2 flex-wrap">
                          {service.monthly && (
                            <span className="px-2 py-0.5 bg-yellow/10 border border-yellow/30 text-yellow text-[10px] font-syne font-semibold uppercase tracking-wider rounded-full">/mo</span>
                          )}
                          <span className="px-2 py-0.5 bg-[rgba(245,197,24,0.15)] border border-yellow/40 text-yellow text-[10px] font-syne font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
                            <Tag className="w-2.5 h-2.5" /> 50% OFF
                          </span>
                        </div>

                        <p className={`font-syne font-semibold text-sm pr-6 mb-2 transition-colors ${isSel ? 'text-yellow' : 'text-white'}`}>
                          {service.name}
                        </p>

                        {/* Price: strikethrough original + discounted */}
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <span className="text-white-muted text-xs line-through opacity-60">
                            {fmt(fullMin)}–{fmt(fullMax)}{service.monthly ? '/mo' : ''}
                          </span>
                          <span className="text-yellow text-xs font-syne font-bold">
                            {fmt(discMin)}–{fmt(discMax)}{service.monthly ? '/mo' : ''}
                          </span>
                        </div>
                      </motion.button>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* ── Right: estimate panel ── */}
            <div className="lg:sticky lg:top-24 space-y-4">
              <div className="bg-[#0D0D0D] border border-[#222] rounded-2xl overflow-hidden">
                {/* Panel header */}
                <div className="px-5 py-3.5 border-b border-[#1A1A1A] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="font-syne font-bold text-white text-sm">Your Estimate</p>
                    <span className="px-2 py-0.5 bg-yellow/15 border border-yellow/40 text-yellow text-[10px] font-syne font-bold rounded-full">50% OFF APPLIED</span>
                  </div>
                  {selected.size > 0 && (
                    <button onClick={() => setSelected(new Set())} className="text-white-muted text-xs hover:text-yellow transition-colors font-syne">
                      Clear
                    </button>
                  )}
                </div>

                <div className="p-5 space-y-4">
                  <AnimatePresence mode="wait">
                    {!selectedServices.length ? (
                      <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-8">
                        <div className="w-12 h-12 rounded-full bg-yellow/5 border border-yellow/20 flex items-center justify-center mx-auto mb-3">
                          <span className="text-yellow text-xl">€</span>
                        </div>
                        <p className="text-white-muted text-sm">Select services to see your estimate</p>
                      </motion.div>
                    ) : (
                      <motion.div key="filled" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">

                        {/* Selected list */}
                        <div className="space-y-2">
                          {selectedServices.map((s) => {
                            const fMin = s.min * complexityFactor;
                            const fMax = s.max * complexityFactor;
                            return (
                              <div key={s.id} className="text-xs space-y-0.5">
                                <div className="flex items-start justify-between gap-2">
                                  <span className="text-white-soft leading-tight flex-1">{s.name}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-white-muted line-through opacity-50">{fmt(fMin)}–{fmt(fMax)}{s.monthly ? '/mo' : ''}</span>
                                  <span className="text-yellow font-semibold">{fmt(fMin * DISCOUNT)}–{fmt(fMax * DISCOUNT)}{s.monthly ? '/mo' : ''}</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {estimate && (
                          <>
                            <div className="border-t border-[#1A1A1A] pt-4 space-y-2">
                              {/* Full price struck */}
                              <div className="flex justify-between text-xs text-white-muted">
                                <span>Full price</span>
                                <span className="line-through opacity-60">{fmt(estimate.fullMin)} – {fmt(estimate.fullMax)}</span>
                              </div>
                              {/* Discounted range */}
                              <div className="flex justify-between text-sm">
                                <span className="text-white-muted">Your price (50% off)</span>
                                <span className="text-white font-syne font-semibold">{fmt(estimate.discMin)} – {fmt(estimate.discMax)}</span>
                              </div>

                              {/* Midpoint */}
                              <div className="rounded-xl p-4 mt-1" style={{ background: 'linear-gradient(135deg, rgba(245,197,24,0.12) 0%, rgba(245,197,24,0.06) 100%)', border: '1px solid rgba(245,197,24,0.3)' }}>
                                <div className="flex items-center justify-between mb-1">
                                  <p className="text-yellow text-[10px] font-syne uppercase tracking-widest">You pay (midpoint)</p>
                                  <span className="text-[10px] font-syne text-yellow/70 line-through">{fmt(estimate.fullMid)}</span>
                                </div>
                                <p className="stat-number" style={{ fontSize: '1.75rem' }}>{fmt(estimate.discMid)}</p>
                                <p className="text-yellow text-xs font-syne font-semibold mt-1">
                                  You save {fmt(estimate.fullMid - estimate.discMid)} 🎉
                                </p>
                              </div>
                            </div>

                            {/* Payment schedule */}
                            <div className="border-t border-[#1A1A1A] pt-4">
                              <p className="text-white-muted text-[10px] font-syne uppercase tracking-widest mb-3 flex items-center gap-1.5">
                                <Calendar className="w-3 h-3" /> Payment schedule
                              </p>
                              <div className="space-y-2">
                                {[
                                  { label: 'Deposit (upfront)', pct: 0.5 },
                                  { label: 'Mid milestone',     pct: 0.25 },
                                  { label: 'Final delivery',    pct: 0.25 },
                                ].map(({ label, pct }) => (
                                  <div key={label} className="flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-2 flex-1">
                                      <div className="h-1 rounded-full bg-yellow" style={{ width: `${pct * 100}%`, maxWidth: '60px' }} />
                                      <span className="text-white-muted text-xs">{label}</span>
                                    </div>
                                    <span className="text-white text-xs font-syne font-semibold">{fmt(estimate.discMid * pct)}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </>
                        )}

                        {/* AI disclaimer */}
                        <AnimatePresence>
                          {hasAI && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                              <div className="flex gap-2.5 bg-[#111] border border-yellow/20 rounded-xl p-3">
                                <AlertCircle className="w-4 h-4 text-yellow flex-shrink-0 mt-0.5" />
                                <p className="text-white-muted text-[11px] leading-relaxed">
                                  AI services involve ongoing API/token costs billed separately at cost + 20% management fee. Monthly maintenance fees shown are exclusive of token usage.
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Offer reminder */}
                        <div className="flex items-center gap-2 bg-yellow/8 border border-yellow/20 rounded-xl p-3">
                          <Flame className="w-4 h-4 text-yellow flex-shrink-0" />
                          <p className="text-yellow text-[11px] font-syne font-semibold">
                            50% launch discount expires 30 Apr 2026 — lock it in now.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="px-5 pb-5">
                  <Button href="/contact" size="md" className="w-full justify-center btn-pulse">
                    Claim 50% Off — Book Now
                  </Button>
                </div>
              </div>

              <p className="text-white-muted text-[11px] text-center leading-relaxed px-2">
                All estimates are indicative. Final pricing confirmed after a discovery session.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </section>
  );
}
