import type { Metadata } from 'next';
import { Code2, LayoutDashboard, ShoppingCart, Server, Smartphone, Building2, Check, Zap, Shield, TrendingUp } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Section from '@/components/layout/Section';
import PageHero from '@/components/layout/PageHero';
import Accordion from '@/components/ui/Accordion';
import { caseStudies } from '@/data/case-studies';

export const metadata: Metadata = {
  title: 'Web App Development',
  description: 'We build fast, scalable web applications — SaaS platforms, e-commerce, dashboards, and APIs.',
};

const appTypes = [
  { icon: Code2, title: 'SaaS Platform', desc: 'Multi-tenant, scalable subscription products with billing, auth, and analytics built in.' },
  { icon: ShoppingCart, title: 'E-commerce', desc: 'High-converting stores with custom checkout, inventory, and headless commerce architectures.' },
  { icon: LayoutDashboard, title: 'Admin Dashboard', desc: 'Internal tools with complex data visualizations, RBAC, and real-time updates.' },
  { icon: Server, title: 'REST / GraphQL API', desc: 'Developer-friendly APIs with OpenAPI docs, rate limiting, and 99.9% uptime SLA.' },
  { icon: Smartphone, title: 'Progressive Web App', desc: 'Offline-capable, installable PWAs with Lighthouse scores consistently above 95.' },
  { icon: Building2, title: 'Enterprise Portal', desc: 'Secure enterprise portals with SSO, audit trails, and compliance built from the start.' },
];

const devProcess = [
  { num: '01', title: 'Discovery', desc: 'Stakeholder interviews, requirements documentation, and technical feasibility assessment.' },
  { num: '02', title: 'Architecture', desc: 'Database schema, system design, tech stack selection, and infrastructure planning.' },
  { num: '03', title: 'UI/UX Design', desc: 'Wireframes, component library, and high-fidelity prototypes reviewed and approved by you.' },
  { num: '04', title: 'Development', desc: 'Agile sprints with weekly demos, CI/CD pipelines, and continuous code reviews.' },
  { num: '05', title: 'QA & Testing', desc: 'Unit, integration, E2E, and load testing. Cross-browser and device verification.' },
  { num: '06', title: 'Launch & Monitor', desc: 'Staged rollout, performance monitoring, error tracking, and 90-day warranty.' },
];

const faqItems = [
  { title: 'How long does it take to build a web app?', content: 'Most MVPs take 8–12 weeks. Full-featured SaaS products take 14–20 weeks. We give you a precise timeline after a discovery session where we scope all requirements.' },
  { title: 'What tech stack do you use?', content: 'We default to Next.js, TypeScript, Node.js, PostgreSQL, and AWS. We adapt based on your existing infrastructure and specific needs — we have expertise across most modern stacks.' },
  { title: 'Do you build mobile apps too?', content: 'We specialize in web apps and PWAs. For native mobile, we partner with trusted specialists — but most of our clients find a PWA meets their mobile needs at a fraction of the cost.' },
  { title: 'How do you handle security?', content: 'Security is baked in from architecture design. We follow OWASP guidelines, implement proper auth (OAuth2/JWT), encrypt data at rest and in transit, and run regular dependency audits.' },
  { title: 'Can you take over an existing codebase?', content: 'Yes. We perform a thorough code audit, document the architecture, and create a remediation plan before writing a single line of code. We have rescued many projects from technical debt hell.' },
  { title: 'What does the post-launch support look like?', content: 'Every project includes a 90-day warranty — bugs are fixed at no extra cost. Beyond that, we offer monthly retainer packages for ongoing maintenance, features, and growth engineering.' },
  { title: 'How do you ensure the project stays on budget?', content: 'Fixed-price projects have a locked scope. For dedicated team engagements, you get weekly burn reports and can adjust scope at any time. We never surprise our clients with invoices.' },
  { title: 'Do you have experience with compliance (GDPR, HIPAA, SOC 2)?', content: 'Yes. We have built HIPAA-compliant HealthTech platforms, GDPR-compliant SaaS products for European markets, and are guiding two clients through SOC 2 certification currently.' },
];

const nexapay = caseStudies.find((c) => c.slug === 'nexapay-fintech-platform')!;

export default function WebAppsPage() {
  return (
    <>
      <PageHero
        badge="Web App Development"
        title="Web Applications That Scale."
        subtitle="From MVP to enterprise-grade platform — we architect, design, and build web apps that handle real-world load and real-world complexity."
      />

      {/* What we build */}
      <Section withGrid>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge>What We Build</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.02em" }}>Six Types. Infinite Variations.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {appTypes.map((app) => (
              <div key={app.title} className="bg-black-soft border border-[#2A2A2A] rounded-lg p-6 hover:border-yellow transition-all duration-300 group">
                <app.icon className="w-7 h-7 text-yellow mb-4" />
                <h3 className="font-syne font-bold text-white mb-2">{app.title}</h3>
                <p className="text-white-muted text-sm leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Dev Process */}
      <Section className="bg-black-soft" withGrid>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge>Development Process</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.02em" }}>How We Build.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {devProcess.map((step) => (
              <div key={step.num} className="bg-black border border-[#2A2A2A] rounded-lg p-6 hover:border-yellow transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-yellow flex items-center justify-center mb-4">
                  <span className="font-syne font-bold text-black text-xs">{step.num}</span>
                </div>
                <h3 className="font-syne font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Tech Stack */}
      <Section withGrid>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge>Tech Stack</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.02em" }}>Our Default Stack.</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {['Next.js', 'React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS', 'Docker'].map((tech) => (
              <span key={tech} className="px-5 py-2.5 bg-black-soft border border-[#2A2A2A] rounded-full text-white-soft font-syne font-medium hover:border-yellow hover:text-yellow transition-all duration-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Performance Guarantees */}
      <Section className="bg-black-soft" withGrid>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge>Our Commitment</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.02em" }}>Performance Guarantees.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Zap, metric: '< 1s', label: 'Load Time', desc: 'Core Web Vitals optimized for LCP under 1 second on standard connections.' },
              { icon: TrendingUp, metric: '99.9%', label: 'Uptime SLA', desc: 'Redundant infrastructure, auto-scaling, and 24/7 monitoring for maximum availability.' },
              { icon: Shield, metric: 'A+', label: 'Security Score', desc: 'Mozilla Observatory A+ rating standard. Secure headers, CSP, and HTTPS enforced.' },
            ].map((g) => (
              <div key={g.label} className="bg-black border border-[#2A2A2A] rounded-lg p-8 text-center hover:border-yellow transition-all duration-300">
                <g.icon className="w-8 h-8 text-yellow mx-auto mb-4" />
                <div className="font-syne font-extrabold text-yellow text-4xl mb-1">{g.metric}</div>
                <div className="font-syne font-bold text-white text-sm uppercase tracking-widest mb-3">{g.label}</div>
                <p className="text-white-muted text-sm">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Case Study Spotlight */}
      <Section withGrid>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 space-y-3">
            <Badge>Case Study</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.02em" }}>See It in Action.</h2>
          </div>
          <div className="bg-black-soft border-t-4 border-t-yellow border border-[#2A2A2A] rounded-xl p-8">
            <Badge>{nexapay.category}</Badge>
            <h3 className="font-syne font-bold text-white text-2xl mt-4 mb-2">{nexapay.title}</h3>
            <p className="text-yellow font-semibold mb-4">{nexapay.metric}</p>
            <p className="text-white-muted mb-6">{nexapay.excerpt}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {nexapay.techStack.map((t) => (
                <span key={t} className="px-3 py-1 bg-black border border-[#2A2A2A] rounded-full text-xs text-white-muted font-syne">{t}</span>
              ))}
            </div>
            <Button href={`/work/${nexapay.slug}`} variant="secondary">Read Case Study</Button>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-black-soft" withGrid>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <Badge>FAQ</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.02em" }}>Common Questions.</h2>
          </div>
          <Accordion items={faqItems} />
        </div>
      </Section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-24 text-center relative overflow-hidden"
        style={{ background: 'radial-gradient(ellipse at center, rgba(245,197,24,0.1) 0%, transparent 70%)' }}>
        <h2 className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.02em" }}  mb-4>Start Building Today.</h2>
        <p className="text-white-muted mb-8 max-w-md mx-auto">Get a detailed proposal within 48 hours. Zero obligation.</p>
        <Button href="/contact" size="lg">Get a Free Proposal</Button>
      </section>
    </>
  );
}
