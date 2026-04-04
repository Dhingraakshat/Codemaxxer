import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Calendar, Users, Clock, Building2 } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Section from '@/components/layout/Section';
import { caseStudies } from '@/data/case-studies';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.excerpt,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) notFound();

  const currentIndex = caseStudies.findIndex((c) => c.slug === slug);
  const prev = caseStudies[currentIndex - 1];
  const next = caseStudies[currentIndex + 1];

  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 grid-overlay overflow-hidden"
        style={{ backgroundColor: study.coverColor }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top, rgba(245,197,24,0.08) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <Link href="/work" className="inline-flex items-center gap-2 text-white-muted hover:text-yellow transition-colors duration-200 mb-8 font-syne text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Work
          </Link>
          <div className="space-y-4">
            <Badge>{study.category}</Badge>
            <h1 className="font-syne font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-3xl">
              {study.title}
            </h1>
            <p className="text-yellow font-syne font-semibold text-lg">{study.metric}</p>
          </div>
        </div>
      </section>

      {/* Overview row */}
      <Section withGrid>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Building2, label: 'Client', value: study.client },
              { icon: Building2, label: 'Industry', value: study.industry },
              { icon: Clock, label: 'Timeline', value: study.timeline },
              { icon: Users, label: 'Team Size', value: `${study.teamSize} engineers` },
            ].map((item) => (
              <div key={item.label} className="bg-black-soft border border-[#2A2A2A] rounded-lg p-4 text-center">
                <p className="text-white-muted text-xs font-syne uppercase tracking-widest mb-1">{item.label}</p>
                <p className="font-syne font-bold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Challenge */}
      <Section className="bg-black-soft" withGrid>
        <div className="max-w-4xl mx-auto">
          <Badge>The Challenge</Badge>
          <h2 className="font-syne font-bold text-white text-3xl mt-4 mb-4">What We Were Up Against</h2>
          <p className="text-white-soft text-lg leading-relaxed">{study.challenge}</p>
        </div>
      </Section>

      {/* Approach */}
      <Section withGrid>
        <div className="max-w-4xl mx-auto">
          <Badge>The Approach</Badge>
          <h2 className="font-syne font-bold text-white text-3xl mt-4 mb-4">How We Solved It</h2>
          <p className="text-white-soft text-lg leading-relaxed">{study.approach}</p>
        </div>
      </Section>

      {/* Key Features */}
      <Section className="bg-black-soft" withGrid>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <Badge>Key Features</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.02em" }}>What We Built</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {study.features.map((feature) => (
              <div key={feature.title} className="bg-black border border-[#2A2A2A] rounded-lg p-6 hover:border-yellow transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-[rgba(245,197,24,0.1)] flex items-center justify-center mb-4">
                  <div className="w-4 h-4 bg-yellow rounded-sm" />
                </div>
                <h3 className="font-syne font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white-muted text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Results */}
      <Section withGrid>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <Badge>Results</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.02em" }}>The Numbers.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {study.results.map((result) => (
              <div key={result.label} className="text-center bg-black-soft border border-[#2A2A2A] rounded-xl p-8 hover:border-yellow transition-all duration-300">
                <div className="font-syne font-extrabold text-yellow text-5xl mb-2">{result.value}</div>
                <p className="text-white-muted font-syne uppercase tracking-widest text-sm">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Tech Stack */}
      <Section className="bg-black-soft" withGrid>
        <div className="max-w-4xl mx-auto">
          <Badge>Tech Stack</Badge>
          <h2 className="font-syne font-bold text-white text-3xl mt-4 mb-6">Built With</h2>
          <div className="flex flex-wrap gap-3">
            {study.techStack.map((tech) => (
              <span key={tech} className="px-4 py-2 bg-black border border-[#2A2A2A] rounded-full text-white-soft font-syne text-sm hover:border-yellow hover:text-yellow transition-all duration-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      <Section withGrid>
        <div className="max-w-3xl mx-auto">
          <div className="bg-black-soft border-l-4 border-l-yellow border border-[#2A2A2A] rounded-xl p-8">
            <p className="text-yellow font-syne font-extrabold text-5xl leading-none mb-4 opacity-60">&ldquo;</p>
            <p className="text-white-soft text-lg leading-relaxed mb-6">{study.testimonial.quote}</p>
            <div>
              <p className="font-syne font-bold text-white">{study.testimonial.author}</p>
              <p className="text-white-muted text-sm">{study.testimonial.role}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Prev / Next */}
      <Section className="bg-black-soft" withGrid>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          {prev ? (
            <Link href={`/work/${prev.slug}`} className="group flex items-center gap-4 bg-black border border-[#2A2A2A] rounded-lg p-6 hover:border-yellow transition-all duration-300">
              <ArrowLeft className="w-5 h-5 text-yellow flex-shrink-0" />
              <div>
                <p className="text-white-muted text-xs font-syne uppercase tracking-widest mb-1">Previous</p>
                <p className="font-syne font-bold text-white group-hover:text-yellow transition-colors">{prev.title}</p>
              </div>
            </Link>
          ) : <div />}
          {next && (
            <Link href={`/work/${next.slug}`} className="group flex items-center justify-end gap-4 bg-black border border-[#2A2A2A] rounded-lg p-6 hover:border-yellow transition-all duration-300 text-right">
              <div>
                <p className="text-white-muted text-xs font-syne uppercase tracking-widest mb-1">Next</p>
                <p className="font-syne font-bold text-white group-hover:text-yellow transition-colors">{next.title}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-yellow flex-shrink-0" />
            </Link>
          )}
        </div>
      </Section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-24 text-center relative overflow-hidden"
        style={{ background: 'radial-gradient(ellipse at center, rgba(245,197,24,0.1) 0%, transparent 70%)' }}>
        <h2 className="font-syne font-extrabold text-white mb-4" style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.02em" }}>Want Results Like These?</h2>
        <p className="text-white-muted mb-8 max-w-md mx-auto">Let&apos;s talk about your project.</p>
        <Button href="/contact" size="lg">Start Your Project</Button>
      </section>
    </>
  );
}
