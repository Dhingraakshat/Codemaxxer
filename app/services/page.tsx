import type { Metadata } from 'next';
import { Code2, Brain, DollarSign, Users, BookOpen, Zap, HeartPulse, ShoppingCart, Building, Truck, GraduationCap, Home } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Section from '@/components/layout/Section';
import PageHero from '@/components/layout/PageHero';
import Accordion from '@/components/ui/Accordion';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Web App Development and AI Solutions — two core pillars powering Codemaxxers client success.',
};

const webAppItems = [
  { title: 'SaaS Platforms', content: 'Multi-tenant SaaS products with custom billing, role-based access, and growth-optimized architecture. We use Next.js, PostgreSQL, and AWS to build platforms that scale seamlessly.' },
  { title: 'E-commerce Solutions', content: 'High-converting storefronts with custom checkout flows, inventory management, and payment processing. Integrated with Stripe, Shopify APIs, and custom headless architectures.' },
  { title: 'Admin Dashboards', content: 'Data-rich internal tools and dashboards with real-time analytics, complex data visualizations, and RBAC. Built with React, Recharts, and optimized APIs.' },
  { title: 'APIs & Microservices', content: 'Robust REST and GraphQL APIs designed for developer experience and scale. OpenAPI documentation, rate limiting, and monitoring included out of the box.' },
  { title: 'Progressive Web Apps (PWA)', content: 'Fast, offline-capable PWAs with push notifications and app-like experiences. Lighthouse scores above 95 guaranteed.' },
];

const aiItems = [
  { title: 'LLM Chatbots & Assistants', content: 'Production-grade AI assistants with context management, conversation memory, and fallback handling. Built on GPT-4, Claude, and open-source models with RAG grounding.' },
  { title: 'Process Automation', content: 'Intelligent workflows that eliminate repetitive manual tasks. From document processing to email triage — we build automation that actually works in your environment.' },
  { title: 'Data Pipelines & ETL', content: 'Robust data ingestion, transformation, and loading pipelines. We build on Airflow, dbt, and custom Python services to get your data where it needs to be.' },
  { title: 'Model Fine-Tuning', content: 'Custom model training on your proprietary data using LoRA and full fine-tuning approaches. Achieve domain-specific accuracy that generic models cannot match.' },
  { title: 'Recommendation Engines', content: 'Collaborative filtering, content-based, and hybrid recommendation systems that drive engagement, AOV, and retention at scale.' },
];

const engagementModels = [
  {
    icon: DollarSign,
    title: 'Fixed Price',
    desc: 'Well-scoped projects with clear requirements. You get a defined deliverable, timeline, and cost. Perfect for MVPs, feature builds, and discrete integrations.',
    best: 'Best for: MVPs, specific features',
  },
  {
    icon: Users,
    title: 'Dedicated Team',
    desc: 'A fully embedded engineering squad working exclusively on your product. Ideal for ongoing development, product evolution, and complex technical challenges.',
    best: 'Best for: Ongoing product development',
  },
  {
    icon: BookOpen,
    title: 'Consulting Retainer',
    desc: 'Strategic technical advisory with hands-on implementation. Architecture reviews, AI strategy, code audits, and fractional CTO services.',
    best: 'Best for: Technical strategy & audits',
  },
];

const industries = [
  { icon: Zap, name: 'FinTech' },
  { icon: HeartPulse, name: 'HealthTech' },
  { icon: ShoppingCart, name: 'E-commerce' },
  { icon: Building, name: 'SaaS' },
  { icon: Truck, name: 'Logistics' },
  { icon: GraduationCap, name: 'EdTech' },
  { icon: Home, name: 'Real Estate' },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Services"
        title="What We Do Best."
        subtitle="Two battle-tested practices. Web applications that scale and AI solutions that actually work."
      />

      {/* Two big service cards */}
      <Section withGrid>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-black-soft border-t-4 border-t-yellow border border-[#2A2A2A] rounded-lg p-8">
            <Code2 className="w-8 h-8 text-yellow mb-4" />
            <h2 className="font-syne font-bold text-white text-2xl mb-3">Web App Development</h2>
            <p className="text-white-muted mb-6 leading-relaxed">
              We build fast, scalable, and beautiful web applications — from complex SaaS platforms to
              high-performance e-commerce stores. Every product is architected for growth, security, and maintainability.
            </p>
            <Button href="/services/web-apps" variant="secondary">Learn More</Button>
          </div>
          <div className="bg-black-soft border-t-4 border-t-yellow border border-[#2A2A2A] rounded-lg p-8">
            <Brain className="w-8 h-8 text-yellow mb-4" />
            <h2 className="font-syne font-bold text-white text-2xl mb-3">AI Solutions</h2>
            <p className="text-white-muted mb-6 leading-relaxed">
              We harness large language models, computer vision, and machine learning to automate workflows,
              unlock insights, and create intelligent product experiences that create real competitive moats.
            </p>
            <Button href="/services/ai" variant="secondary">Learn More</Button>
          </div>
        </div>
      </Section>

      {/* Accordion sub-services */}
      <Section className="bg-black-soft" withGrid>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <Badge>What We Build</Badge>
            <h2 className="font-syne font-extrabold text-3xl text-white">Explore Our Capabilities</h2>
          </div>
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-5 h-5 text-yellow" />
                <h3 className="font-syne font-bold text-white text-lg">Web Application Services</h3>
              </div>
              <Accordion items={webAppItems} />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-5 h-5 text-yellow" />
                <h3 className="font-syne font-bold text-white text-lg">AI & Machine Learning Services</h3>
              </div>
              <Accordion items={aiItems} />
            </div>
          </div>
        </div>
      </Section>

      {/* Engagement Models */}
      <Section withGrid>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge>Engagement Models</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.02em" }}>How We Work Together.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {engagementModels.map((model) => (
              <div key={model.title} className="bg-black-soft border border-[#2A2A2A] rounded-lg p-8 hover:border-yellow transition-all duration-300 group">
                <model.icon className="w-8 h-8 text-yellow mb-4" />
                <h3 className="font-syne font-bold text-white text-xl mb-3">{model.title}</h3>
                <p className="text-white-muted text-sm mb-4 leading-relaxed">{model.desc}</p>
                <p className="text-yellow text-xs font-syne font-semibold uppercase tracking-widest">{model.best}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Industries */}
      <Section className="bg-black-soft" withGrid>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge>Industries</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.02em" }}>We Build Across Every Sector.</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map(({ icon: Icon, name }) => (
              <div key={name} className="flex items-center gap-3 px-6 py-3 bg-black border border-[#2A2A2A] rounded-full hover:border-yellow hover:bg-black-soft transition-all duration-300 group">
                <Icon className="w-5 h-5 text-yellow" />
                <span className="font-syne font-semibold text-white group-hover:text-yellow transition-colors">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-24 text-center relative overflow-hidden"
        style={{ background: 'radial-gradient(ellipse at center, rgba(245,197,24,0.1) 0%, transparent 70%)' }}>
        <h2 className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.02em" }}  mb-4>
          Ready to Get Started?
        </h2>
        <p className="text-white-muted mb-8 max-w-md mx-auto">Tell us about your project and we&apos;ll scope it within 48 hours.</p>
        <Button href="/contact" size="lg">Book a Discovery Call</Button>
      </section>
    </>
  );
}
