import type { Metadata } from 'next';
import { Cloud, Database, BarChart3, GitBranch, DollarSign, ShieldCheck, Layers, Cpu } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Section from '@/components/layout/Section';
import PageHero from '@/components/layout/PageHero';
import Accordion from '@/components/ui/Accordion';

export const metadata: Metadata = {
  title: 'Cloud & Data Analytics',
  description: 'Cloud architecture, migration, data warehousing, real-time dashboards, and DevOps — on AWS, Azure, or GCP.',
};

const capabilities = [
  { icon: Cloud, title: 'Cloud Architecture & Migration', desc: 'Move from on-prem or legacy hosts to AWS / Azure / GCP with zero-downtime cutovers. We architect for scale, cost, and resilience from day one.' },
  { icon: Database, title: 'Data Warehousing & ETL', desc: 'Centralise your data in Snowflake, BigQuery, or Redshift. Build the single source of truth your business decisions deserve — clean, fast, reliable.' },
  { icon: BarChart3, title: 'Real-Time Dashboards', desc: 'Live operational dashboards on Grafana, Metabase, or custom React — connected to your warehouse or event streams. Decisions in seconds, not days.' },
  { icon: GitBranch, title: 'DevOps & CI/CD Pipelines', desc: 'GitHub Actions, Terraform, Docker, Kubernetes. Automated pipelines from commit to production with rollback safety nets and observability baked in.' },
  { icon: DollarSign, title: 'Cloud Cost Optimisation', desc: 'FinOps review and right-sizing of your existing cloud spend. Most clients cut their AWS/GCP bill by 25–40% within the first 60 days.' },
  { icon: ShieldCheck, title: 'Security & Compliance', desc: 'IAM hardening, VPC architecture, encryption at rest and in transit, SOC2 readiness, and GDPR-compliant data handling.' },
];

const platforms = [
  { name: 'AWS', items: ['EC2, ECS, Lambda', 'RDS, DynamoDB', 'S3, CloudFront', 'IAM, VPC, WAF'] },
  { name: 'Azure', items: ['App Service, AKS', 'Azure SQL, Cosmos DB', 'Blob Storage, CDN', 'Entra ID, RBAC'] },
  { name: 'GCP', items: ['Cloud Run, GKE', 'BigQuery, Firestore', 'Cloud Storage, CDN', 'IAP, VPC Service Controls'] },
  { name: 'Data Stack', items: ['Snowflake, Redshift', 'dbt, Airflow', 'Grafana, Metabase', 'Kafka, Flink'] },
];

const steps = [
  { num: '01', title: 'Audit & Assessment', desc: 'We map your current infrastructure, data flows, and pain points. No assumptions — just facts.' },
  { num: '02', title: 'Architecture Design', desc: 'Target-state architecture proposal with costs, timeline, and risk assessment. You approve before we touch anything.' },
  { num: '03', title: 'Migration / Build', desc: 'Phased execution with parallel environments and tested rollback plans at every step.' },
  { num: '04', title: 'Observability Setup', desc: 'Logging, metrics, alerting, and dashboards so you can see everything that matters in real time.' },
  { num: '05', title: 'Handover & Docs', desc: 'Full runbooks, architecture diagrams, and optional team training. You own it completely.' },
];

const faqItems = [
  { title: 'Which cloud provider do you recommend?', content: 'It depends on your existing stack and team. AWS for the broadest service coverage, GCP if BigQuery or ML workloads are central, Azure if you are in a Microsoft-heavy enterprise environment. We are certified on all three and recommend based on your specific needs, not our preference.' },
  { title: 'Can you migrate our existing infrastructure without downtime?', content: 'Yes. We use blue-green and canary migration patterns with DNS cutover, ensuring zero or near-zero downtime. Our pre-migration rehearsals catch issues before they affect production.' },
  { title: 'How long does a cloud migration take?', content: 'A small SaaS product (5–10 services) typically migrates in 4–8 weeks. A larger enterprise system with complex dependencies can take 3–6 months. We scope precisely after the audit phase.' },
  { title: 'Do you help with data governance and GDPR compliance?', content: 'Yes. We implement data classification, retention policies, access controls, and audit logging that align with GDPR, CCPA, and SOC2 requirements. We work alongside your legal and compliance teams.' },
  { title: 'Can you cut our existing cloud costs?', content: 'Almost always. Common wins include right-sizing idle EC2/GCE instances, replacing over-engineered services with managed alternatives, implementing auto-scaling, and using reserved instances/committed use discounts. Most clients see 25–40% savings.' },
  { title: 'Do you provide ongoing infrastructure management?', content: 'Yes — we offer monthly DevOps retainers covering infrastructure updates, security patching, cost reviews, incident response, and continuous optimisation.' },
];

export default function CloudAnalyticsPage() {
  return (
    <>
      <PageHero
        badge="Cloud & Data Analytics"
        title="Infrastructure That Scales. Data That Decides."
        subtitle="Cloud architecture, migration, data warehousing, and real-time analytics — on AWS, Azure, or GCP. We build the foundation serious businesses run on."
      />

      {/* Capabilities */}
      <Section withGrid>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <Badge>Capabilities</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: 'clamp(22px,3vw,34px)', letterSpacing: '-0.02em' }}>
              Six Core Services
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((c) => (
              <div key={c.title} className="bg-[#0F0F0F] border border-[#222] rounded-2xl p-6 hover:border-yellow/40 transition-all duration-300 glow-card">
                <div className="w-10 h-10 rounded-lg bg-yellow/10 border border-yellow/20 flex items-center justify-center mb-4">
                  <c.icon className="w-5 h-5 text-yellow" />
                </div>
                <h3 className="font-syne font-bold text-white mb-2">{c.title}</h3>
                <p className="text-white-muted text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Platforms */}
      <Section className="bg-[#0B0B0B]" withGrid>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <Badge>Platforms</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: 'clamp(22px,3vw,34px)', letterSpacing: '-0.02em' }}>
              The Platforms We Work On
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {platforms.map((p) => (
              <div key={p.name} className="bg-[#0F0F0F] border border-[#222] rounded-2xl p-5 hover:border-yellow/30 transition-all duration-300">
                <p className="font-syne font-bold text-yellow text-sm uppercase tracking-widest mb-3">{p.name}</p>
                <ul className="space-y-1.5">
                  {p.items.map((item) => (
                    <li key={item} className="text-white-muted text-xs flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-yellow/60 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section withGrid>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <Badge>How It Works</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: 'clamp(22px,3vw,34px)', letterSpacing: '-0.02em' }}>
              Our Migration & Build Process
            </h2>
          </div>
          <div className="space-y-3">
            {steps.map((s, i) => (
              <div key={s.num} className="flex gap-6 items-start bg-[#0F0F0F] border border-[#222] rounded-2xl p-5 hover:border-yellow/30 transition-all duration-300">
                <span className="stat-number text-2xl flex-shrink-0 w-10">{s.num}</span>
                <div>
                  <h3 className="font-syne font-bold text-white mb-1">{s.title}</h3>
                  <p className="text-white-muted text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Key metrics */}
      <Section className="bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-0 border border-[#222] rounded-2xl overflow-hidden">
            {[
              { icon: Layers, metric: '25–40%', label: 'Average cloud cost reduction for our clients' },
              { icon: Cpu, metric: '99.9%', label: 'Infrastructure uptime SLA we architect for' },
              { icon: BarChart3, metric: '<24h', label: 'Time to first meaningful data dashboard' },
            ].map((g, i) => (
              <div key={g.metric} className={`p-10 text-center ${i < 2 ? 'border-r border-[#222]' : ''}`}>
                <g.icon className="w-5 h-5 text-yellow mx-auto mb-3" />
                <div className="stat-number text-4xl mb-2">{g.metric}</div>
                <p className="text-white-muted text-sm max-w-[160px] mx-auto">{g.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section withGrid>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 space-y-3">
            <Badge>FAQ</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: 'clamp(22px,3vw,34px)', letterSpacing: '-0.02em' }}>Common Questions</h2>
          </div>
          <Accordion items={faqItems} />
        </div>
      </Section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-24 text-center relative overflow-hidden" style={{
        background: 'radial-gradient(ellipse at center, rgba(245,197,24,0.08) 0%, transparent 65%)',
      }}>
        <Badge>Get Started</Badge>
        <h2 className="font-syne font-extrabold text-white mt-4 mb-3" style={{ fontSize: 'clamp(22px,3vw,36px)', letterSpacing: '-0.02em' }}>
          Ready to Fix Your Infrastructure?
        </h2>
        <p className="text-white-muted mb-8 max-w-sm mx-auto text-sm">Let&apos;s start with a free infrastructure audit — no commitment required.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button href="/contact" size="lg">Book a Free Audit</Button>
          <Button href="/services" variant="secondary" size="lg">All Services</Button>
        </div>
      </section>
    </>
  );
}
