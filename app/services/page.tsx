import type { Metadata } from 'next';
import { Code2, Brain, Smartphone, Cloud, Lightbulb, DollarSign, Users, BookOpen, Zap, HeartPulse, ShoppingCart, Building, Truck, GraduationCap, Home, Check } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Section from '@/components/layout/Section';
import PageHero from '@/components/layout/PageHero';
import Accordion from '@/components/ui/Accordion';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Five practices, one team — web apps, AI, mobile, cloud, and innovative solutions from Codemaxxers.',
};

const allServices = [
  {
    icon: Code2,
    title: 'Web App Development',
    desc: 'Fast, scalable, beautiful web applications — from complex SaaS platforms to high-performance e-commerce stores, architected for growth and maintainability.',
    items: ['SaaS & Multi-Tenant Platforms', 'E-commerce & Payment Systems', 'Admin Dashboards & Analytics', 'REST & GraphQL APIs', 'Progressive Web Apps'],
    href: '/services/web-apps',
    featured: true,
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    desc: 'Large language models, computer vision, and ML pipelines that automate workflows, unlock insights, and create intelligent product experiences.',
    items: ['LLM Chatbots & Assistants', 'RAG Pipelines & Fine-Tuning', 'Process Automation', 'Predictive Analytics', 'Recommendation Engines'],
    href: '/services/ai',
    featured: true,
  },
  {
    icon: Smartphone,
    title: 'App Development',
    desc: 'Native iOS & Android apps and cross-platform solutions built with React Native or Flutter. We ship to both stores and keep them maintained long-term.',
    items: ['iOS & Android Native', 'React Native / Flutter', 'Offline-First Architecture', 'Push Notifications & Sync', 'App Store Deployment'],
    href: '/services/app-development',
    featured: false,
  },
  {
    icon: Cloud,
    title: 'Cloud & Data Analytics',
    desc: 'Scalable infrastructure, robust data pipelines, and dashboards that turn raw data into real business decisions — on AWS, Azure, or GCP.',
    items: ['Cloud Architecture & Migration', 'Data Warehousing & ETL', 'Real-Time Dashboards', 'DevOps & CI/CD Pipelines', 'Cost Optimisation'],
    href: '/services/cloud-analytics',
    featured: false,
  },
  {
    icon: Lightbulb,
    title: 'Innovative Solutions',
    desc: "Have a bold idea but not sure how to approach it? We explore, prototype, and validate before writing a line of production code. Let's think together.",
    items: ['Emerging Tech Exploration', 'Product Strategy & Prototyping', 'Technical Feasibility Studies', 'Innovation Sprints', 'Startup CTO Advisory'],
    href: '/services/innovative-solutions',
    cta: "Let's Discuss →",
    featured: false,
    highlight: true,
  },
];

const webAppItems = [
  { title: 'SaaS Platforms', content: 'Multi-tenant SaaS with custom billing, role-based access, and growth-optimized architecture. Built on Next.js, PostgreSQL, and AWS.' },
  { title: 'E-commerce Solutions', content: 'High-converting storefronts with custom checkout, inventory management, and Stripe / headless commerce integration.' },
  { title: 'Admin Dashboards', content: 'Data-rich internal tools with real-time analytics, complex visualizations, and RBAC. Built with React and optimized APIs.' },
  { title: 'APIs & Microservices', content: 'Robust REST and GraphQL APIs built for scale. OpenAPI docs, rate limiting, and monitoring included out of the box.' },
  { title: 'Progressive Web Apps', content: 'Fast, offline-capable PWAs with push notifications and app-like experiences. Lighthouse scores above 95 guaranteed.' },
];

const aiItems = [
  { title: 'LLM Chatbots & Assistants', content: 'Production-grade AI assistants with context management, conversation memory, and fallback handling on GPT-4, Claude, and open-source models.' },
  { title: 'Process Automation', content: 'Intelligent workflows that eliminate repetitive tasks — from document processing to email triage. We build automation that actually works.' },
  { title: 'Data Pipelines & ETL', content: 'Robust ingestion, transformation, and loading pipelines on Airflow, dbt, and custom Python services.' },
  { title: 'Model Fine-Tuning', content: 'Custom model training on your proprietary data using LoRA and full fine-tuning. Domain-specific accuracy that generic models cannot match.' },
  { title: 'Recommendation Engines', content: 'Collaborative filtering, content-based, and hybrid recommendation systems that drive engagement and AOV at scale.' },
];

const mobileItems = [
  { title: 'iOS & Android Native', content: 'Fully native apps in Swift/Kotlin for when performance and platform-specific capabilities are non-negotiable.' },
  { title: 'React Native', content: 'Single codebase, both platforms. We use React Native for most cross-platform projects — near-native performance, shared business logic.' },
  { title: 'Flutter', content: 'Google\'s UI toolkit for pixel-perfect cross-platform apps. Ideal for brands with strong visual identity requirements.' },
  { title: 'App Store Deployment', content: 'End-to-end publishing — provisioning, certificates, review preparation, and post-launch monitoring.' },
];

const cloudItems = [
  { title: 'Cloud Migration', content: 'Move from on-prem or legacy hosts to AWS / Azure / GCP with zero downtime. We handle architecture, migration, and cut-over.' },
  { title: 'Data Warehousing', content: 'Centralise your data in Snowflake, BigQuery, or Redshift. Build the single source of truth your business decisions deserve.' },
  { title: 'Real-Time Dashboards', content: 'Live operational dashboards built on Grafana, Metabase, or custom React — connected to your warehouse or streaming data.' },
  { title: 'DevOps & CI/CD', content: 'GitHub Actions, Terraform, Docker, and Kubernetes. Automated pipelines from commit to production with rollback safety nets.' },
];

const engagementModels = [
  {
    icon: DollarSign,
    title: 'Fixed Price Project',
    desc: 'Well-scoped work with clear requirements. Defined deliverable, timeline, and cost. No surprises.',
    best: 'Best for: MVPs, specific features, integrations',
  },
  {
    icon: Users,
    title: 'Dedicated Team',
    desc: 'A named engineering squad embedded in your product. Full commitment, no context-switching to other clients.',
    best: 'Best for: Ongoing product development',
  },
  {
    icon: BookOpen,
    title: 'Consulting Retainer',
    desc: 'Strategic technical advisory with hands-on delivery. Architecture reviews, AI strategy, code audits, fractional CTO.',
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
        title="Everything You Need to Build & Scale."
        subtitle="Five practices, one dedicated team. From web apps to AI to cloud — end-to-end digital delivery."
      />

      {/* ── All 5 Services Grid ──────────────────────────────────────── */}
      <Section withGrid>
        <div className="max-w-7xl mx-auto">
          {/* Top 2 featured */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {allServices.filter((s) => s.featured).map((s) => (
              <div key={s.title} className="group bg-[#0F0F0F] border border-[#222] rounded-2xl p-8 hover:border-yellow/40 transition-all duration-300 glow-card">
                <div className="w-12 h-12 rounded-xl bg-yellow/10 border border-yellow/20 flex items-center justify-center mb-5">
                  <s.icon className="w-6 h-6 text-yellow" />
                </div>
                <h2 className="font-syne font-bold text-white text-xl mb-2">{s.title}</h2>
                <p className="text-white-muted text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-1.5 mb-6">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white-soft text-sm">
                      <Check className="w-3.5 h-3.5 text-yellow flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                {s.href && <Button href={s.href} variant="secondary" size="sm">{s.cta ?? 'Learn More'}</Button>}
              </div>
            ))}
          </div>

          {/* Bottom 3 */}
          <div className="grid md:grid-cols-3 gap-4">
            {allServices.filter((s) => !s.featured).map((s) => (
              <div
                key={s.title}
                className={`group rounded-2xl p-6 border transition-all duration-300 glow-card ${s.highlight ? 'bg-yellow/5 border-yellow/20 hover:border-yellow/50 hover:bg-yellow/8' : 'bg-[#0F0F0F] border-[#222] hover:border-yellow/40'}`}
              >
                <div className="w-10 h-10 rounded-lg bg-yellow/10 border border-yellow/20 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-yellow" />
                </div>
                <h3 className="font-syne font-bold text-white text-lg mb-2">{s.title}</h3>
                <p className="text-white-muted text-sm leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-1.5 mb-5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white-soft text-xs">
                      <Check className="w-3 h-3 text-yellow flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                {s.href && (
                  <a href={s.href} className="inline-flex items-center gap-1.5 text-yellow font-syne font-semibold text-xs group-hover:gap-2.5 transition-all">
                    {s.cta ?? 'Learn More →'}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Capabilities Accordion ───────────────────────────────────── */}
      <Section className="bg-[#0B0B0B]" withGrid>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <Badge>Deep Capabilities</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: 'clamp(22px,3vw,34px)', letterSpacing: '-0.02em' }}>
              Explore What We Build
            </h2>
          </div>
          <div className="space-y-10">
            {[
              { icon: Code2, title: 'Web Application Services', items: webAppItems },
              { icon: Brain, title: 'AI & Machine Learning', items: aiItems },
              { icon: Smartphone, title: 'Mobile App Services', items: mobileItems },
              { icon: Cloud, title: 'Cloud & Data Services', items: cloudItems },
            ].map(({ icon: Icon, title, items }) => (
              <div key={title}>
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#181818]">
                  <div className="w-8 h-8 rounded-lg bg-yellow/10 border border-yellow/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-yellow" />
                  </div>
                  <h3 className="font-syne font-bold text-white">{title}</h3>
                </div>
                <Accordion items={items} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Engagement Models ────────────────────────────────────────── */}
      <Section withGrid>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <Badge>Engagement Models</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: 'clamp(22px,3vw,34px)', letterSpacing: '-0.02em' }}>
              How We Work Together.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {engagementModels.map((model) => (
              <div key={model.title} className="bg-[#0F0F0F] border border-[#222] rounded-2xl p-7 hover:border-yellow/40 transition-all duration-300 group glow-card">
                <div className="w-10 h-10 rounded-lg bg-yellow/10 border border-yellow/20 flex items-center justify-center mb-5">
                  <model.icon className="w-5 h-5 text-yellow" />
                </div>
                <h3 className="font-syne font-bold text-white text-lg mb-2">{model.title}</h3>
                <p className="text-white-muted text-sm leading-relaxed mb-4">{model.desc}</p>
                <p className="text-yellow text-xs font-syne font-semibold uppercase tracking-[0.12em]">{model.best}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Industries ───────────────────────────────────────────────── */}
      <Section className="bg-[#0B0B0B]" withGrid>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 space-y-3">
            <Badge>Industries</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: 'clamp(22px,3vw,34px)', letterSpacing: '-0.02em' }}>
              We Build Across Every Sector.
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map(({ icon: Icon, name }) => (
              <div key={name} className="flex items-center gap-2.5 px-5 py-2.5 bg-[#0F0F0F] border border-[#222] rounded-full hover:border-yellow/50 hover:bg-yellow/5 transition-all duration-300 group">
                <Icon className="w-4 h-4 text-yellow" />
                <span className="font-syne font-semibold text-white-soft group-hover:text-white text-sm transition-colors">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 lg:px-24 text-center relative overflow-hidden" style={{
        background: 'radial-gradient(ellipse at center, rgba(245,197,24,0.08) 0%, transparent 65%)',
      }}>
        <Badge>Get Started</Badge>
        <h2 className="font-syne font-extrabold text-white mt-4 mb-3" style={{ fontSize: 'clamp(22px,3vw,36px)', letterSpacing: '-0.02em' }}>
          Ready to Get Started?
        </h2>
        <p className="text-white-muted mb-8 max-w-sm mx-auto text-sm">Tell us about your project and we&apos;ll scope it within 48 hours.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button href="/contact" size="lg">Book a Discovery Call</Button>
          <Button href="/work" variant="secondary" size="lg">See Our Work</Button>
        </div>
      </section>
    </>
  );
}
