import type { Metadata } from 'next';
import { Lightbulb, FlaskConical, Rocket, Users, Cpu, Search, ArrowRight } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Section from '@/components/layout/Section';
import PageHero from '@/components/layout/PageHero';

export const metadata: Metadata = {
  title: 'Innovative Solutions',
  description: 'Not sure what you need yet? We explore, prototype, and validate bold ideas before writing a single line of production code.',
};

const offerings = [
  {
    icon: Search,
    title: 'Technical Feasibility Studies',
    desc: "You have a bold idea — we pressure-test it. We research technical constraints, identify blockers early, and give you an honest answer on what's possible, what's hard, and what to do first.",
  },
  {
    icon: FlaskConical,
    title: 'Product Prototyping',
    desc: 'Clickable prototypes and functional proof-of-concepts in days, not months. Validate with real users before committing to a full build. Kill bad ideas cheaply — pursue good ones confidently.',
  },
  {
    icon: Lightbulb,
    title: 'Emerging Tech Exploration',
    desc: 'Blockchain, AR/VR, edge computing, generative AI, spatial computing — we evaluate new technologies for your specific business context and tell you what creates value vs what is just hype.',
  },
  {
    icon: Rocket,
    title: 'Innovation Sprints',
    desc: 'A focused 2–4 week sprint with a dedicated team to explore and prototype a specific problem. Clear brief, fixed timebox, tangible output — a working demo and a decision-ready report.',
  },
  {
    icon: Users,
    title: 'Startup CTO Advisory',
    desc: 'Non-technical founder? We act as your fractional CTO — helping you make the right technology decisions, evaluate vendors, hire engineers, and avoid expensive early mistakes.',
  },
  {
    icon: Cpu,
    title: 'R&D Partnerships',
    desc: 'Long-term research partnerships for companies investing in proprietary technology. We embed with your team, contribute to your IP, and help turn research into real products.',
  },
];

const howItWorks = [
  {
    step: '01',
    title: 'Free Discovery Call',
    desc: "Tell us your idea — no pitch deck needed. We'll ask the right questions to understand what you're trying to achieve and whether we are the right fit.",
  },
  {
    step: '02',
    title: 'Problem Framing',
    desc: "We write back with a clear framing of the problem, initial hypotheses, and a proposed approach. This is free and takes 24–48 hours.",
  },
  {
    step: '03',
    title: 'Sprint or Study',
    desc: "Depending on the problem: a technical feasibility study (1 week), a prototype sprint (2–4 weeks), or ongoing advisory. Fixed scope, fixed price.",
  },
  {
    step: '04',
    title: 'Output & Decision',
    desc: "Every engagement ends with a concrete output — working demo, feasibility report, architecture proposal, or go/no-go recommendation. You leave with clarity.",
  },
];

const examples = [
  {
    label: 'AI-Powered Document Processing',
    desc: 'A legal firm asked: can AI reliably extract clauses from unstructured contracts? We ran a 2-week feasibility study, built a prototype with 94% accuracy, and they greenlit a $200k build.',
  },
  {
    label: 'Blockchain for Supply Chain',
    desc: 'A logistics company wanted to explore blockchain for provenance tracking. We evaluated 3 approaches, prototyped the most viable, and recommended against full blockchain in favour of a simpler trusted-ledger approach — saving them 18 months of misdirected effort.',
  },
  {
    label: 'Generative AI for E-commerce',
    desc: 'A retailer wanted AI-generated product descriptions at scale. We prototyped a fine-tuned GPT pipeline in 10 days, proved the quality threshold, and they went to production with us in 8 weeks.',
  },
];

export default function InnovativeSolutionsPage() {
  return (
    <>
      <PageHero
        badge="Innovative Solutions"
        title="Have a Bold Idea? Let's Think Together."
        subtitle="Not every problem has an obvious solution. We explore, prototype, and validate before writing a line of production code — so you invest in what works."
      />

      {/* What we offer */}
      <Section withGrid>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <Badge>What We Offer</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: 'clamp(22px,3vw,34px)', letterSpacing: '-0.02em' }}>
              Six Ways We Help You Innovate
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {offerings.map((o) => (
              <div key={o.title} className="bg-[#0F0F0F] border border-[#222] rounded-2xl p-6 hover:border-yellow/40 transition-all duration-300 glow-card">
                <div className="w-10 h-10 rounded-lg bg-yellow/10 border border-yellow/20 flex items-center justify-center mb-4">
                  <o.icon className="w-5 h-5 text-yellow" />
                </div>
                <h3 className="font-syne font-bold text-white mb-2">{o.title}</h3>
                <p className="text-white-muted text-sm leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section className="bg-[#0B0B0B]" withGrid>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <Badge>How It Works</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: 'clamp(22px,3vw,34px)', letterSpacing: '-0.02em' }}>
              From Vague Idea to Clear Decision
            </h2>
          </div>
          <div className="space-y-3">
            {howItWorks.map((s) => (
              <div key={s.step} className="flex gap-6 items-start bg-[#0F0F0F] border border-[#222] rounded-2xl p-6 hover:border-yellow/30 transition-all duration-300">
                <span className="stat-number text-2xl flex-shrink-0 w-10">{s.step}</span>
                <div>
                  <h3 className="font-syne font-bold text-white mb-1">{s.title}</h3>
                  <p className="text-white-muted text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Examples */}
      <Section withGrid>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <Badge>Examples</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: 'clamp(22px,3vw,34px)', letterSpacing: '-0.02em' }}>
              What This Looks Like in Practice
            </h2>
          </div>
          <div className="space-y-4">
            {examples.map((e) => (
              <div key={e.label} className="bg-[#0F0F0F] border-l-4 border-yellow border border-[#222] rounded-2xl p-6 hover:border-yellow/60 transition-all duration-300">
                <h3 className="font-syne font-bold text-white mb-2">{e.label}</h3>
                <p className="text-white-muted text-sm leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why this matters callout */}
      <Section className="bg-[#0B0B0B]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-yellow/5 border border-yellow/20 rounded-2xl p-10">
            <Lightbulb className="w-8 h-8 text-yellow mx-auto mb-4" />
            <h3 className="font-syne font-bold text-white text-xl mb-3">
              &ldquo;Build it and see&rdquo; is the most expensive strategy.
            </h3>
            <p className="text-white-muted text-sm leading-relaxed max-w-lg mx-auto">
              Most failed software projects fail because of wrong assumptions, not bad code. A two-week feasibility study or prototype sprint costs a fraction of a full build — and can save you 6 months of wasted effort and hundreds of thousands in sunk costs.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-24 text-center relative overflow-hidden" style={{
        background: 'radial-gradient(ellipse at center, rgba(245,197,24,0.08) 0%, transparent 65%)',
      }}>
        <Badge>Let&apos;s Talk</Badge>
        <h2 className="font-syne font-extrabold text-white mt-4 mb-3" style={{ fontSize: 'clamp(22px,3vw,36px)', letterSpacing: '-0.02em' }}>
          What&apos;s Your Bold Idea?
        </h2>
        <p className="text-white-muted mb-8 max-w-sm mx-auto text-sm">
          Book a free 30-min call — no pitch deck, no commitment. Just a conversation about what you&apos;re trying to build.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button href="/contact" size="lg">Book a Free Call</Button>
          <Button href="/services" variant="secondary" size="lg">All Services</Button>
        </div>
      </section>
    </>
  );
}
