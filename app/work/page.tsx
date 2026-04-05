import type { Metadata } from 'next';
import { ArrowRight, MessageSquare } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import PageHero from '@/components/layout/PageHero';
import Section from '@/components/layout/Section';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Explore what Codemaxxers builds — web apps, AI, mobile, cloud, and more.',
};

const services = [
  { label: 'Web App Development', href: '/services/web-apps', desc: 'SaaS platforms, dashboards, e-commerce, APIs' },
  { label: 'AI Solutions', href: '/services/ai', desc: 'LLM chatbots, automation, RAG pipelines, ML models' },
  { label: 'App Development', href: '/services/app-development', desc: 'iOS, Android, React Native, Flutter' },
  { label: 'Cloud & Data Analytics', href: '/services/cloud-analytics', desc: 'AWS, Azure, GCP, data warehousing, dashboards' },
  { label: 'Innovative Solutions', href: '/services/innovative-solutions', desc: 'Prototyping, R&D, feasibility, CTO advisory' },
];

export default function WorkPage() {
  return (
    <>
      <PageHero
        badge="Our Work"
        title="Built for Impact."
        subtitle="We let our services and client results speak for themselves. Explore what we build — or reach out to discuss your project."
      />

      <Section withGrid>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <Badge>What We Build</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: 'clamp(22px,3vw,34px)', letterSpacing: '-0.02em' }}>
              Five Practices. <span className="text-yellow">Deep Expertise.</span>
            </h2>
            <p className="text-white-muted text-sm max-w-md mx-auto">
              Every service page includes detailed capabilities, our process, tech stack, and what you can expect from working with us.
            </p>
          </div>

          <div className="space-y-3 mb-14">
            {services.map((s, i) => (
              <Link key={s.label} href={s.href}
                className="flex items-center justify-between gap-6 bg-[#0F0F0F] border border-[#222] rounded-2xl px-6 py-5 hover:border-yellow/40 hover:bg-[#111] transition-all duration-300 group"
              >
                <div className="flex items-center gap-5">
                  <span className="stat-number text-xl w-8 flex-shrink-0 opacity-60">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="font-syne font-bold text-white group-hover:text-yellow transition-colors">{s.label}</p>
                    <p className="text-white-muted text-xs mt-0.5">{s.desc}</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-white-muted group-hover:text-yellow group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
              </Link>
            ))}
          </div>

          <div className="bg-yellow/5 border border-yellow/20 rounded-2xl p-8 text-center">
            <MessageSquare className="w-8 h-8 text-yellow mx-auto mb-4" />
            <h3 className="font-syne font-bold text-white text-lg mb-2">Want to See What We'd Build for You?</h3>
            <p className="text-white-muted text-sm mb-6 max-w-md mx-auto">
              Tell us about your project — we'll send a scoped proposal with relevant examples within 48 hours.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button href="/contact" size="md">Discuss Your Project</Button>
              <Button href="/services" variant="secondary" size="md">Explore Services</Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
