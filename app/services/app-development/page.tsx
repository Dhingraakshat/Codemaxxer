import type { Metadata } from 'next';
import { Smartphone, Apple, Play, Wifi, Bell, CreditCard, Check, Gauge, Shield, RefreshCw } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Section from '@/components/layout/Section';
import PageHero from '@/components/layout/PageHero';
import Accordion from '@/components/ui/Accordion';

export const metadata: Metadata = {
  title: 'App Development',
  description: 'Native iOS & Android apps and cross-platform solutions built with React Native and Flutter.',
};

const appTypes = [
  { icon: Apple, title: 'iOS Native (Swift)', desc: 'Full-speed native iOS apps with SwiftUI and UIKit. Platform-first design, App Store optimized, maximum performance.' },
  { icon: Play, title: 'Android Native (Kotlin)', desc: 'Material Design 3 Android apps built with Kotlin and Jetpack Compose. Built to pass Google Play review first time.' },
  { icon: Smartphone, title: 'React Native', desc: 'Single codebase for both platforms. Near-native performance, shared business logic, 80% code reuse. Our go-to for most projects.' },
  { icon: RefreshCw, title: 'Flutter', desc: "Google's UI toolkit for pixel-perfect cross-platform apps. Ideal when your brand's visual identity is non-negotiable." },
  { icon: Wifi, title: 'Offline-First Apps', desc: 'Apps that work without internet, sync seamlessly when back online. Built with SQLite, Realm, or WatermelonDB.' },
  { icon: CreditCard, title: 'Mobile Commerce', desc: 'In-app purchases, Apple Pay, Google Pay, and Stripe mobile SDK integration. Conversion-optimized checkout flows.' },
];

const steps = [
  { num: '01', title: 'Discovery & UX', desc: 'User research, wireframes, and interactive prototypes. We validate the flow before any code is written.' },
  { num: '02', title: 'UI Design', desc: 'Platform-native design language — iOS Human Interface Guidelines and Material Design 3. Pixel-perfect screens.' },
  { num: '03', title: 'Development', desc: 'Sprint-based builds with a private TestFlight / Firebase App Distribution link after every sprint.' },
  { num: '04', title: 'QA & Device Testing', desc: 'Tested across real devices — not just simulators. iOS 16+, Android 10+, multiple screen sizes.' },
  { num: '05', title: 'Store Submission', desc: 'We handle provisioning profiles, screenshots, descriptions, and the full App Store / Play Store review process.' },
  { num: '06', title: 'Post-Launch Support', desc: 'Crash monitoring (Sentry), analytics (Mixpanel/Amplitude), and 30-day free support after go-live.' },
];

const stack = [
  { name: 'React Native', role: 'Cross-platform framework' },
  { name: 'Flutter', role: 'Cross-platform UI toolkit' },
  { name: 'Swift / SwiftUI', role: 'iOS native' },
  { name: 'Kotlin / Jetpack', role: 'Android native' },
  { name: 'Expo', role: 'RN toolchain' },
  { name: 'Firebase', role: 'Auth, DB, push' },
  { name: 'Sentry', role: 'Crash monitoring' },
  { name: 'Fastlane', role: 'CI/CD & releases' },
];

const faqItems = [
  { title: 'React Native or Flutter — which do you recommend?', content: 'React Native if your team uses JavaScript/TypeScript already, or if you need deep native module access. Flutter if pixel-perfect UI consistency across platforms is the top priority. We are equally proficient in both.' },
  { title: 'How long does it take to build a mobile app?', content: 'A focused MVP with 5–8 screens typically takes 8–14 weeks. A full-featured app with backend and integrations is 16–24 weeks. We give a precise estimate after the discovery phase.' },
  { title: 'Can you also build the backend/API?', content: 'Yes — most of our mobile projects include the full backend (Node.js / Python, PostgreSQL, Redis) and API layer. We prefer owning the whole stack for tighter integration and faster delivery.' },
  { title: 'Do you handle App Store and Play Store submission?', content: 'Completely. We handle developer accounts, certificates, screenshots, store listings, privacy policy requirements, and the review process. We have a near-100% first-submission approval rate.' },
  { title: 'What happens after launch?', content: 'We include 30 days of free post-launch support. After that, we offer monthly maintenance retainers covering OS updates, dependency upgrades, bug fixes, and performance monitoring.' },
  { title: 'Can you redesign or rebuild an existing app?', content: 'Absolutely. We do full rewrites, partial feature additions, and UI redesigns. We start with a code audit to understand the current state before recommending an approach.' },
];

export default function AppDevelopmentPage() {
  return (
    <>
      <PageHero
        badge="App Development"
        title="Apps People Actually Use."
        subtitle="Native iOS & Android. React Native. Flutter. We build mobile products that are fast, beautiful, and built to last — from concept to both stores."
      />

      {/* What we build */}
      <Section withGrid>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <Badge>What We Build</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: 'clamp(22px,3vw,34px)', letterSpacing: '-0.02em' }}>
              Six Types of Mobile Apps
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {appTypes.map((a) => (
              <div key={a.title} className="bg-[#0F0F0F] border border-[#222] rounded-2xl p-6 hover:border-yellow/40 transition-all duration-300 glow-card group">
                <div className="w-10 h-10 rounded-lg bg-yellow/10 border border-yellow/20 flex items-center justify-center mb-4">
                  <a.icon className="w-5 h-5 text-yellow" />
                </div>
                <h3 className="font-syne font-bold text-white mb-2">{a.title}</h3>
                <p className="text-white-muted text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-[#0B0B0B]" withGrid>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <Badge>Our Process</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: 'clamp(22px,3vw,34px)', letterSpacing: '-0.02em' }}>
              From Idea to Both Stores
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map((s) => (
              <div key={s.num} className="bg-[#0F0F0F] border border-[#222] rounded-2xl p-6 hover:border-yellow/30 transition-all duration-300">
                <span className="stat-number text-3xl mb-3 block">{s.num}</span>
                <h3 className="font-syne font-bold text-white mb-2">{s.title}</h3>
                <p className="text-white-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Quality guarantees */}
      <Section withGrid>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <Badge>Our Standards</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: 'clamp(22px,3vw,34px)', letterSpacing: '-0.02em' }}>
              What You Can Expect
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Gauge, metric: '60fps', label: 'Smooth animations on all target devices' },
              { icon: Shield, metric: 'A+', label: 'Security audit score — OWASP Mobile Top 10' },
              { icon: Check, metric: '99%', label: 'First-submission App Store approval rate' },
            ].map((g) => (
              <div key={g.metric} className="bg-[#0F0F0F] border border-[#222] rounded-2xl p-8 text-center hover:border-yellow/40 transition-all duration-300 glow-card">
                <g.icon className="w-6 h-6 text-yellow mx-auto mb-3" />
                <div className="stat-number text-4xl mb-2">{g.metric}</div>
                <p className="text-white-muted text-sm">{g.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Tech stack */}
      <Section className="bg-[#0B0B0B]" withGrid>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 space-y-3">
            <Badge>Tech Stack</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: 'clamp(22px,3vw,34px)', letterSpacing: '-0.02em' }}>Our Mobile Toolkit</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stack.map((t) => (
              <div key={t.name} className="bg-[#0F0F0F] border border-[#222] rounded-xl p-4 text-center hover:border-yellow/30 transition-all duration-300">
                <p className="font-syne font-bold text-white text-sm mb-1">{t.name}</p>
                <p className="text-white-muted text-xs">{t.role}</p>
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
          Ready to Build Your App?
        </h2>
        <p className="text-white-muted mb-8 max-w-sm mx-auto text-sm">Tell us your idea — we&apos;ll scope it and send a proposal within 48 hours.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button href="/contact" size="lg">Start Your App Project</Button>
          <Button href="/services" variant="secondary" size="lg">All Services</Button>
        </div>
      </section>
    </>
  );
}
