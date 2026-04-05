'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, AlertCircle, Calendar, Phone } from 'lucide-react';
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
  // Web Dev
  { id: 'web-landing', category: 'Web Dev', name: 'Landing page / brochure site', min: 500, max: 1500 },
  { id: 'web-business', category: 'Web Dev', name: 'Business website', min: 1500, max: 4000 },
  { id: 'web-ecom', category: 'Web Dev', name: 'E-commerce store', min: 3000, max: 8000 },
  { id: 'web-platform', category: 'Web Dev', name: 'Custom web platform', min: 8000, max: 25000 },
  { id: 'web-redesign', category: 'Web Dev', name: 'Website redesign', min: 1000, max: 5000 },
  // App Dev
  { id: 'app-simple', category: 'App Dev', name: 'Simple mobile app (single platform)', min: 5000, max: 15000 },
  { id: 'app-cross', category: 'App Dev', name: 'Cross-platform app (Flutter / React Native)', min: 8000, max: 20000 },
  { id: 'app-complex', category: 'App Dev', name: 'Complex app with backend', min: 20000, max: 60000 },
  { id: 'app-mvp', category: 'App Dev', name: 'MVP for a startup', min: 8000, max: 25000 },
  { id: 'app-maintenance', category: 'App Dev', name: 'App maintenance', min: 500, max: 2000, monthly: true },
  // AI Solutions
  { id: 'ai-faq', category: 'AI Solutions', name: 'Simple FAQ chatbot', min: 800, max: 2500 },
  { id: 'ai-advanced', category: 'AI Solutions', name: 'Advanced AI chatbot (RAG / custom knowledge base)', min: 2500, max: 8000 },
  { id: 'ai-automation', category: 'AI Solutions', name: 'AI automation workflow', min: 1500, max: 6000 },
  { id: 'ai-docs', category: 'AI Solutions', name: 'AI document processing', min: 3000, max: 10000 },
  { id: 'ai-integration', category: 'AI Solutions', name: 'Custom AI integration', min: 2000, max: 12000 },
  { id: 'ai-agent', category: 'AI Solutions', name: 'AI agent (autonomous)', min: 5000, max: 20000 },
  { id: 'ai-maintenance', category: 'AI Solutions', name: 'Monthly AI maintenance', min: 150, max: 600, monthly: true },
  // Data Analytics
  { id: 'data-basic', category: 'Data Analytics', name: 'Basic dashboard (Power BI / Looker)', min: 1000, max: 3500 },
  { id: 'data-custom', category: 'Data Analytics', name: 'Custom analytics dashboard', min: 3000, max: 10000 },
  { id: 'data-pipeline', category: 'Data Analytics', name: 'Data pipeline setup', min: 2000, max: 8000 },
  { id: 'data-bi', category: 'Data Analytics', name: 'Business intelligence setup', min: 5000, max: 20000 },
  { id: 'data-reporting', category: 'Data Analytics', name: 'Monthly reporting service', min: 300, max: 1500, monthly: true },
  // Consulting
  { id: 'con-discovery', category: 'Consulting', name: 'Discovery / strategy session', min: 200, max: 600 },
  { id: 'con-audit', category: 'Consulting', name: 'Tech audit of existing systems', min: 500, max: 2000 },
  { id: 'con-retainer', category: 'Consulting', name: 'Monthly tech consulting retainer', min: 500, max: 2500, monthly: true },
];

const CATEGORIES: Category[] = ['All', 'Web Dev', 'App Dev', 'AI Solutions', 'Data Analytics', 'Consulting'];

const REGIONS = [
  { label: 'Baltic / Eastern EU (local)', factor: 1.0 },
  { label: 'Central EU (Poland, Czech, Hungary)', factor: 1.15 },
  { label: 'Western EU (France, Belgium, Austria)', factor: 1.3 },
  { label: 'Premium EU (Germany, Netherlands, Switzerland)', factor: 1.5 },
  { label: 'UK / Nordics', factor: 1.45 },
];

const COMPLEXITIES = [
  { label: 'Simple', factor: 0.85 },
  { label: 'Standard', factor: 1.0 },
  { label: 'Complex', factor: 1.3 },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function fmt(n: number) {
  return '€' + Math.round(n).toLocaleString('en-EU');
}

// ─── SELECT COMPONENT ────────────────────────────────────────────────────────

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

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function CostEstimator() {
  const [activeTab, setActiveTab] = useState<Category>('All');
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [regionFactor, setRegionFactor] = useState(1.0);
  const [complexityFactor, setComplexityFactor] = useState(1.0);

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const visible = activeTab === 'All' ? SERVICES : SERVICES.filter((s) => s.category === activeTab);
  const selectedServices = SERVICES.filter((s) => selected.has(s.id));
  const hasAI = selectedServices.some((s) => s.category === 'AI Solutions');

  const estimate = useMemo(() => {
    if (selectedServices.length === 0) return null;
    const rawMin = selectedServices.reduce((acc, s) => acc + s.min, 0);
    const rawMax = selectedServices.reduce((acc, s) => acc + s.max, 0);
    const eMin = rawMin * regionFactor * complexityFactor;
    const eMax = rawMax * regionFactor * complexityFactor;
    const mid = (eMin + eMax) / 2;
    return { eMin, eMax, mid };
  }, [selectedServices, regionFactor, complexityFactor]);

  return (
    <Section withGrid>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-3"
        >
          <Badge>Project Cost Estimator</Badge>
          <h2 className="font-syne font-extrabold text-white" style={{ fontSize: 'clamp(24px,3.5vw,38px)', letterSpacing: '-0.02em' }}>
            Get an Instant <span className="text-yellow">Price Estimate</span>
          </h2>
          <p className="text-white-muted text-sm max-w-md mx-auto">
            Select the services you need, adjust for your region and complexity — we&apos;ll show you a live estimate in real time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-6 items-start">
          {/* Left: configurator */}
          <div className="space-y-5">
            {/* Controls row */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-white-muted text-xs font-syne uppercase tracking-widest mb-2">Your Region</label>
                <Select value={regionFactor} onChange={setRegionFactor} options={REGIONS} />
              </div>
              <div>
                <label className="block text-white-muted text-xs font-syne uppercase tracking-widest mb-2">Project Complexity</label>
                <Select value={complexityFactor} onChange={setComplexityFactor} options={COMPLEXITIES} />
              </div>
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

            {/* Service cards grid */}
            <motion.div layout className="grid sm:grid-cols-2 gap-2.5">
              <AnimatePresence mode="popLayout">
                {visible.map((service) => {
                  const isSelected = selected.has(service.id);
                  return (
                    <motion.button
                      key={service.id}
                      layout
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.18 }}
                      onClick={() => toggle(service.id)}
                      className={`relative text-left rounded-xl border p-4 transition-all duration-200 group ${
                        isSelected
                          ? 'bg-yellow/10 border-yellow shadow-[0_0_20px_rgba(245,197,24,0.15)]'
                          : 'bg-[#0F0F0F] border-[#222] hover:border-yellow/40 hover:bg-[#111]'
                      }`}
                    >
                      {/* Checkmark */}
                      <div className={`absolute top-3 right-3 w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200 ${
                        isSelected ? 'bg-yellow border-yellow' : 'border-[#333]'
                      }`}>
                        {isSelected && <Check className="w-3 h-3 text-black" strokeWidth={3} />}
                      </div>

                      {/* Monthly badge */}
                      {service.monthly && (
                        <span className="inline-block mb-2 px-2 py-0.5 bg-yellow/10 border border-yellow/30 text-yellow text-[10px] font-syne font-semibold uppercase tracking-wider rounded-full">
                          /mo
                        </span>
                      )}

                      <p className={`font-syne font-semibold text-sm pr-6 mb-1.5 transition-colors ${isSelected ? 'text-yellow' : 'text-white'}`}>
                        {service.name}
                      </p>
                      <p className="text-white-muted text-xs">
                        {fmt(service.min * regionFactor * complexityFactor)} – {fmt(service.max * regionFactor * complexityFactor)}
                        {service.monthly ? '/mo' : ''}
                      </p>
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right: estimate panel */}
          <div className="lg:sticky lg:top-24 space-y-4">
            <div className="bg-[#0D0D0D] border border-[#222] rounded-2xl overflow-hidden">
              {/* Panel header */}
              <div className="px-5 py-4 border-b border-[#1A1A1A] flex items-center justify-between">
                <p className="font-syne font-bold text-white text-sm">Your Estimate</p>
                {selected.size > 0 && (
                  <button
                    onClick={() => setSelected(new Set())}
                    className="text-white-muted text-xs hover:text-yellow transition-colors font-syne"
                  >
                    Clear all
                  </button>
                )}
              </div>

              <div className="p-5 space-y-4">
                <AnimatePresence mode="wait">
                  {selectedServices.length === 0 ? (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-8"
                    >
                      <div className="w-12 h-12 rounded-full bg-yellow/5 border border-yellow/20 flex items-center justify-center mx-auto mb-3">
                        <span className="text-yellow text-xl">€</span>
                      </div>
                      <p className="text-white-muted text-sm">Select services to see your estimate</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="estimate"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-4"
                    >
                      {/* Selected list */}
                      <div className="space-y-1.5">
                        {selectedServices.map((s) => (
                          <div key={s.id} className="flex items-start justify-between gap-3 text-xs">
                            <span className="text-white-soft leading-tight flex-1">{s.name}</span>
                            <span className="text-white-muted whitespace-nowrap flex-shrink-0">
                              {fmt(s.min * regionFactor * complexityFactor)}–{fmt(s.max * regionFactor * complexityFactor)}
                              {s.monthly ? '/mo' : ''}
                            </span>
                          </div>
                        ))}
                      </div>

                      {estimate && (
                        <>
                          <div className="border-t border-[#1A1A1A] pt-4 space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-white-muted">Range</span>
                              <span className="text-white font-syne font-semibold">{fmt(estimate.eMin)} – {fmt(estimate.eMax)}</span>
                            </div>
                            {/* Midpoint — hero figure */}
                            <div className="bg-yellow/8 border border-yellow/25 rounded-xl p-3 flex items-center justify-between">
                              <div>
                                <p className="text-yellow text-[10px] font-syne uppercase tracking-widest mb-0.5">Recommended midpoint</p>
                                <p className="stat-number" style={{ fontSize: '1.6rem' }}>{fmt(estimate.mid)}</p>
                              </div>
                              <div className="w-8 h-8 rounded-full bg-yellow/20 flex items-center justify-center">
                                <span className="text-yellow font-syne font-bold text-sm">€</span>
                              </div>
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
                                { label: 'Mid milestone', pct: 0.25 },
                                { label: 'Final delivery', pct: 0.25 },
                              ].map(({ label, pct }) => (
                                <div key={label} className="flex items-center justify-between gap-2">
                                  <div className="flex items-center gap-2 flex-1">
                                    <div className="h-1 rounded-full bg-yellow" style={{ width: `${pct * 100}%`, maxWidth: '60px' }} />
                                    <span className="text-white-muted text-xs">{label}</span>
                                  </div>
                                  <span className="text-white text-xs font-syne font-semibold flex-shrink-0">
                                    {fmt(estimate.mid * pct)}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </>
                      )}

                      {/* AI disclaimer */}
                      <AnimatePresence>
                        {hasAI && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex gap-2.5 bg-[#111] border border-yellow/20 rounded-xl p-3">
                              <AlertCircle className="w-4 h-4 text-yellow flex-shrink-0 mt-0.5" />
                              <p className="text-white-muted text-[11px] leading-relaxed">
                                AI services involve ongoing API/token costs billed separately at cost + 20% management fee. Monthly maintenance fees shown are exclusive of token usage.
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA */}
              <div className="px-5 pb-5">
                <Button href="/contact" size="md" className="w-full justify-center">
                  Book a Free Discovery Call
                </Button>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-white-muted text-[11px] text-center leading-relaxed px-2">
              All estimates are indicative. Final pricing is confirmed after a discovery session.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
