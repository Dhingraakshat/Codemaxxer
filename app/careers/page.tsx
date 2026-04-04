'use client';

import { useState } from 'react';
import { MapPin, Clock, ArrowRight, Globe, Zap, Heart, BookOpen, Coffee, TrendingUp } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Section from '@/components/layout/Section';
import PageHero from '@/components/layout/PageHero';
import Button from '@/components/ui/Button';
import { careers } from '@/data/careers';

const perks = [
  { icon: Globe, title: 'Fully Remote', desc: 'Work from anywhere in the world. We believe the best talent is everywhere.' },
  { icon: Zap, title: 'Impactful Work', desc: 'Build products that real users depend on, not internal tools that gather dust.' },
  { icon: Heart, title: 'Health Benefits', desc: 'Comprehensive health, dental, and vision coverage for you and your family.' },
  { icon: BookOpen, title: 'Learning Budget', desc: '$2,000 annual budget for courses, books, conferences, and certifications.' },
  { icon: Coffee, title: 'Async-First Culture', desc: 'No pointless meetings. We communicate thoughtfully and respect deep work.' },
  { icon: TrendingUp, title: 'Growth Path', desc: 'Clear career ladders, mentorship from senior engineers, and internal mobility.' },
];

const departments = ['All', 'Engineering', 'AI/ML', 'Design', 'Sales'];

export default function CareersPage() {
  const [activeDept, setActiveDept] = useState('All');

  const filtered = activeDept === 'All'
    ? careers
    : careers.filter((c) => c.department === activeDept);

  return (
    <>
      <PageHero
        badge="Careers"
        title="Build the Future. With Us."
        subtitle="We're a remote-first team of engineers, designers, and AI specialists obsessed with crafting excellent software. Come build with us."
      />

      {/* Perks */}
      <Section withGrid>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge>Why Codemaxxers</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.02em" }}>The Perks.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk) => (
              <div key={perk.title} className="bg-black-soft border border-[#2A2A2A] rounded-lg p-6 hover:border-yellow transition-all duration-300 group">
                <perk.icon className="w-7 h-7 text-yellow mb-4" />
                <h3 className="font-syne font-bold text-white mb-2">{perk.title}</h3>
                <p className="text-white-muted text-sm leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Open Roles */}
      <Section className="bg-black-soft" withGrid>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge>Open Roles</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.02em" }}>Join the Team.</h2>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={`px-5 py-2 rounded-full font-syne font-semibold text-sm transition-all duration-200 ${
                  activeDept === dept
                    ? 'bg-yellow text-black'
                    : 'border border-[#2A2A2A] text-white-muted hover:border-yellow hover:text-yellow'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filtered.map((role) => (
              <div key={role.id} className="bg-black border border-[#2A2A2A] rounded-lg p-6 hover:border-yellow transition-all duration-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 group">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-syne font-bold text-white group-hover:text-yellow transition-colors">{role.title}</h3>
                    <span className="text-xs font-syne font-semibold text-yellow bg-[rgba(245,197,24,0.1)] border border-yellow rounded-full px-2 py-0.5">
                      {role.department}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-white-muted text-sm">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{role.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{role.type}</span>
                  </div>
                </div>
                <a
                  href={`mailto:careers@codemaxxers.com?subject=Application: ${role.title}`}
                  className="inline-flex items-center gap-2 bg-yellow text-black font-syne font-bold text-sm px-5 py-2.5 rounded-sm hover:bg-yellow-soft transition-colors duration-200 flex-shrink-0"
                >
                  Apply <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
            {filtered.length === 0 && (
              <p className="text-center text-white-muted py-8">No open roles in this department right now. Check back soon!</p>
            )}
          </div>
        </div>
      </Section>

      {/* Life at Codemaxxers bento */}
      <Section withGrid>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge>Culture</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.02em" }}>Life at Codemaxxers.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-black-soft border border-[#2A2A2A] rounded-xl p-8 hover:border-yellow transition-all duration-300">
              <h3 className="font-syne font-bold text-white text-2xl mb-3">Async by Default</h3>
              <p className="text-white-muted leading-relaxed">
                We believe deep work produces the best code. Meetings are rare, decisions are documented,
                and you can structure your day around your peak hours — whether that&apos;s 6am or midnight.
              </p>
            </div>
            <div className="bg-yellow rounded-xl p-8 hover:shadow-[0_0_30px_rgba(245,197,24,0.3)] transition-all duration-300">
              <h3 className="font-syne font-bold text-black text-2xl mb-3">Ship Fast</h3>
              <p className="text-black leading-relaxed opacity-80">
                We iterate quickly, learn from production, and optimize for impact. Bureaucracy is a dirty word here.
              </p>
            </div>
            <div className="bg-black-soft border border-[#2A2A2A] rounded-xl p-8 hover:border-yellow transition-all duration-300">
              <h3 className="font-syne font-bold text-white text-xl mb-3">Learn Constantly</h3>
              <p className="text-white-muted text-sm leading-relaxed">Friday afternoons are for exploration and learning. No sprints, no deadlines.</p>
            </div>
            <div className="md:col-span-2 bg-black-soft border border-[#2A2A2A] rounded-xl p-8 hover:border-yellow transition-all duration-300">
              <h3 className="font-syne font-bold text-white text-2xl mb-3">Team of Experts</h3>
              <p className="text-white-muted leading-relaxed">
                You&apos;ll work alongside engineers who have shipped to millions of users, AI researchers with published papers,
                and designers who have won international awards. The talent bar is high — and it pushes you to grow.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* No open role CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-24 text-center bg-black"
        style={{ background: 'radial-gradient(ellipse at center, rgba(245,197,24,0.08) 0%, transparent 70%)' }}>
        <h2 className="font-syne font-extrabold text-3xl text-white mb-4">Don&apos;t See a Perfect Fit?</h2>
        <p className="text-white-muted mb-8 max-w-md mx-auto">
          We&apos;re always interested in exceptional people. Send us your CV and portfolio.
        </p>
        <Button href="mailto:careers@codemaxxers.com" variant="secondary">Send Open Application</Button>
      </section>
    </>
  );
}
