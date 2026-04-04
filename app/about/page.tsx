import type { Metadata } from 'next';
import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb, TrendingUp, MapPin, Calendar, Users } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Section from '@/components/layout/Section';
import PageHero from '@/components/layout/PageHero';
import TeamMemberCard from '@/components/shared/TeamMemberCard';
import { team } from '@/data/team';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Codemaxxers — our story, mission, values, and the team behind the software.',
};

const milestones = [
  { year: '2019', event: 'Founded by Alex Rivera and Sam Chen with a vision to build elite software products.' },
  { year: '2020', event: 'Landed first Fortune 500 client. Grew to 5 team members. Fully remote from day one.' },
  { year: '2021', event: 'Launched AI practice. Delivered 15+ projects across FinTech, HealthTech, and EdTech.' },
  { year: '2023', event: 'Crossed $2M ARR. Expanded team to 15. Opened AI R&D track with 3 published models.' },
  { year: '2024', event: 'Serving 50+ clients globally. Recognized as a top AI agency by TechCrunch.' },
];

const values = [
  { icon: Target, title: 'Craftsmanship', desc: 'We care deeply about the quality of every line of code, every pixel, every interaction.' },
  { icon: Eye, title: 'Transparency', desc: 'Radical honesty with clients and teammates. No surprises, no spin — just the truth.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We stay at the frontier, constantly learning and applying the latest in tech.' },
  { icon: TrendingUp, title: 'Impact', desc: 'We measure success by the real-world outcomes our clients achieve, not just delivery.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-black grid-overlay overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(ellipse, #F5C518 0%, transparent 70%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Badge>Our Story</Badge>
              <h1 className="font-syne font-extrabold text-white leading-tight" style={{ fontSize: "clamp(28px,4vw,46px)", letterSpacing: "-0.025em" }}>
                We Are <span className="text-yellow">Codemaxxers.</span>
              </h1>
              <p className="text-white-muted text-lg leading-relaxed max-w-lg">
                We are an elite, remote-first software agency obsessed with building products that actually matter.
                From FinTech to HealthTech, we ship fast and build right.
              </p>
              <Button href="/contact">Start a Project</Button>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Calendar, text: 'Founded 2019' },
                { icon: MapPin, text: 'Remote-First' },
                { icon: Users, text: '15+ Team Members' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 bg-black-soft border border-[#2A2A2A] rounded-full px-5 py-3">
                  <Icon className="w-4 h-4 text-yellow" />
                  <span className="font-syne font-semibold text-white text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <Section withGrid>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge>Our Journey</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.02em" }}>Five Years. One Mission.</h2>
          </div>
          <div className="space-y-0">
            {milestones.map((m, index) => (
              <div key={m.year} className="flex gap-8 relative">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-yellow flex items-center justify-center flex-shrink-0">
                    <span className="font-syne font-bold text-black text-xs">{m.year}</span>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-px flex-1 bg-[#2A2A2A] min-h-[48px] my-2" />
                  )}
                </div>
                <div className="pb-10 flex-1">
                  <p className="text-white-soft leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-black-soft" withGrid>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge>Purpose</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.02em" }}>Mission & Vision</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black border-t-4 border-t-yellow border border-[#2A2A2A] rounded-lg p-8">
              <h3 className="font-syne font-bold text-yellow text-lg mb-3 uppercase tracking-widest">Mission</h3>
              <p className="text-white-soft text-lg leading-relaxed">
                To empower businesses with world-class software — built with craftsmanship, delivered with speed,
                and designed to create lasting impact.
              </p>
            </div>
            <div className="bg-black border-t-4 border-t-yellow border border-[#2A2A2A] rounded-lg p-8">
              <h3 className="font-syne font-bold text-yellow text-lg mb-3 uppercase tracking-widest">Vision</h3>
              <p className="text-white-soft text-lg leading-relaxed">
                A world where every ambitious company — regardless of size — has access to elite engineering talent
                and AI capabilities that were once reserved for tech giants.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section withGrid>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge>Core Values</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.02em" }}>What Guides Us.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-black-soft border border-[#2A2A2A] rounded-lg p-6 hover:border-yellow transition-all duration-300 group text-center">
                <div className="w-12 h-12 rounded-full bg-[rgba(245,197,24,0.1)] flex items-center justify-center mx-auto mb-4 group-hover:bg-[rgba(245,197,24,0.2)] transition-colors">
                  <v.icon className="w-6 h-6 text-yellow" />
                </div>
                <h3 className="font-syne font-bold text-white mb-2">{v.title}</h3>
                <p className="text-white-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section className="bg-black-soft" withGrid>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge>The Team</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.02em" }}>The People Behind the Code.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {team.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </Section>

      {/* Culture */}
      <Section withGrid>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge>Culture</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.02em" }}>
              Remote-first. Results-driven.{' '}
              <span className="text-yellow">Human-always.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Async by Default', desc: 'We write things down, respect deep work, and trust each other to get things done without micromanagement.' },
              { title: 'Learning Culture', desc: 'Every team member gets a learning budget, conference attendance, and 20% time for exploration.' },
              { title: 'Global Team', desc: 'We hire the best, regardless of timezone. Diversity of background drives diversity of thought.' },
            ].map((c) => (
              <div key={c.title} className="bg-black-soft border border-[#2A2A2A] rounded-lg p-6 hover:border-yellow transition-all duration-300">
                <h3 className="font-syne font-bold text-white text-lg mb-2">{c.title}</h3>
                <p className="text-white-muted text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-white-muted mb-6">Want to join a team that cares deeply about the craft?</p>
            <Button href="/careers" variant="secondary">View Open Roles</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
