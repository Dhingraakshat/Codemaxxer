'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Clock, CheckCircle2, GitBranch, Link as LinkIcon, X } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Section from '@/components/layout/Section';
import Accordion from '@/components/ui/Accordion';
import PageHero from '@/components/layout/PageHero';

interface FormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  budget: string;
  description: string;
  privacy: boolean;
}

const faqItems = [
  { title: 'How quickly do you respond to inquiries?', content: 'We respond to all project inquiries within 24 hours on business days. For urgent matters, email us directly at hello@codemaxxers.com.' },
  { title: 'What is your minimum project size?', content: 'Our minimum engagement is $15,000 for fixed-price projects. We also offer consulting retainers starting at $5,000/month.' },
  { title: 'Do you work with early-stage startups?', content: 'Yes! We love working with founders to build their first product. We offer flexible payment terms for pre-seed and seed-stage startups.' },
  { title: 'Can you sign an NDA before we discuss our project?', content: 'Absolutely. We sign NDAs routinely before discovery calls. Just mention it when you reach out and we\'ll send one over immediately.' },
  { title: 'What information should I have ready for our first call?', content: 'Bring your vision, any existing mockups or specs, your target users, desired timeline, and budget range. The more context you give us, the better we can help.' },
  { title: 'Do you offer equity arrangements?', content: 'In select cases for early-stage companies, we can structure partial equity arrangements. This is assessed on a case-by-case basis.' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) setSubmitted(true);
  };

  return (
    <>
      <PageHero
        badge="Contact"
        title="Let's Build Together."
        subtitle="Tell us about your project and we'll have a tailored proposal in your inbox within 48 hours."
      />

      <Section withGrid>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-[rgba(245,197,24,0.15)] flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-yellow" />
                  </div>
                  <h3 className="font-syne font-bold text-white text-2xl mb-3">Message Received!</h3>
                  <p className="text-white-muted max-w-sm">
                    Thanks for reaching out. We&apos;ll review your project details and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white-soft text-sm font-syne font-medium mb-2">
                        Full Name <span className="text-yellow">*</span>
                      </label>
                      <input
                        {...register('name', { required: 'Name is required' })}
                        placeholder="John Doe"
                        className="w-full bg-black-muted border border-[#2A2A2A] rounded-md px-4 py-3 text-white placeholder-white-muted focus:outline-none focus:border-yellow transition-colors"
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-white-soft text-sm font-syne font-medium mb-2">
                        Email <span className="text-yellow">*</span>
                      </label>
                      <input
                        {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
                        type="email"
                        placeholder="john@company.com"
                        className="w-full bg-black-muted border border-[#2A2A2A] rounded-md px-4 py-3 text-white placeholder-white-muted focus:outline-none focus:border-yellow transition-colors"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white-soft text-sm font-syne font-medium mb-2">Company (optional)</label>
                      <input
                        {...register('company')}
                        placeholder="Acme Inc."
                        className="w-full bg-black-muted border border-[#2A2A2A] rounded-md px-4 py-3 text-white placeholder-white-muted focus:outline-none focus:border-yellow transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white-soft text-sm font-syne font-medium mb-2">Phone (optional)</label>
                      <input
                        {...register('phone')}
                        type="tel"
                        placeholder="+1 555 000 0000"
                        className="w-full bg-black-muted border border-[#2A2A2A] rounded-md px-4 py-3 text-white placeholder-white-muted focus:outline-none focus:border-yellow transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white-soft text-sm font-syne font-medium mb-2">
                        Service Needed <span className="text-yellow">*</span>
                      </label>
                      <select
                        {...register('service', { required: 'Please select a service' })}
                        className="w-full bg-black-muted border border-[#2A2A2A] rounded-md px-4 py-3 text-white focus:outline-none focus:border-yellow transition-colors appearance-none"
                      >
                        <option value="">Select a service</option>
                        <option value="web-app">Web App Development</option>
                        <option value="ai">AI Solutions</option>
                        <option value="both">Both</option>
                        <option value="consulting">Consulting</option>
                      </select>
                      {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>}
                    </div>
                    <div>
                      <label className="block text-white-soft text-sm font-syne font-medium mb-2">
                        Budget Range <span className="text-yellow">*</span>
                      </label>
                      <select
                        {...register('budget', { required: 'Please select a budget' })}
                        className="w-full bg-black-muted border border-[#2A2A2A] rounded-md px-4 py-3 text-white focus:outline-none focus:border-yellow transition-colors appearance-none"
                      >
                        <option value="">Select budget</option>
                        <option value="15-30k">$15k – $30k</option>
                        <option value="30-60k">$30k – $60k</option>
                        <option value="60-100k">$60k – $100k</option>
                        <option value="100k+">$100k+</option>
                      </select>
                      {errors.budget && <p className="text-red-400 text-xs mt-1">{errors.budget.message}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-white-soft text-sm font-syne font-medium mb-2">
                      Project Description <span className="text-yellow">*</span>
                    </label>
                    <textarea
                      {...register('description', { required: 'Please describe your project' })}
                      rows={4}
                      placeholder="Tell us about your project, goals, and any technical requirements..."
                      className="w-full bg-black-muted border border-[#2A2A2A] rounded-md px-4 py-3 text-white placeholder-white-muted focus:outline-none focus:border-yellow transition-colors resize-none"
                    />
                    {errors.description && <p className="text-red-400 text-xs mt-1">{errors.description.message}</p>}
                  </div>
                  <div className="flex items-start gap-3">
                    <input
                      {...register('privacy', { required: 'You must accept the privacy policy' })}
                      type="checkbox"
                      id="privacy"
                      className="mt-1 accent-yellow"
                    />
                    <label htmlFor="privacy" className="text-white-muted text-sm">
                      I agree to the{' '}
                      <a href="/privacy" className="text-yellow hover:underline">Privacy Policy</a>
                      {' '}and consent to Codemaxxers contacting me about my project.
                    </label>
                  </div>
                  {errors.privacy && <p className="text-red-400 text-xs">{errors.privacy.message}</p>}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-yellow text-black font-syne font-bold py-4 rounded-sm hover:bg-yellow-soft transition-colors duration-200 disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-black-soft border border-[#2A2A2A] rounded-xl p-6 space-y-5">
                <h3 className="font-syne font-bold text-white text-lg">Get in Touch</h3>
                {[
                  { icon: Mail, label: 'Email', value: 'hello@codemaxxers.com' },
                  { icon: Phone, label: 'Phone', value: '+1 (555) 000-0000' },
                  { icon: MapPin, label: 'Location', value: 'Remote-First, Worldwide' },
                  { icon: Clock, label: 'Response Time', value: 'Within 24 business hours' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(245,197,24,0.1)] flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-yellow" />
                    </div>
                    <div>
                      <p className="text-white-muted text-xs font-syne uppercase tracking-widest">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-black-soft border border-[#2A2A2A] rounded-xl p-6">
                <h3 className="font-syne font-bold text-white text-lg mb-3">Book a Free Call</h3>
                <p className="text-white-muted text-sm mb-4">Prefer to talk? Schedule a 30-minute discovery call to discuss your project in detail.</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-yellow text-black font-syne font-bold px-5 py-3 rounded-sm hover:bg-yellow-soft transition-colors duration-200 text-sm"
                >
                  Book on Calendly →
                </a>
              </div>

              <div className="bg-black-soft border border-[#2A2A2A] rounded-xl p-6">
                <h3 className="font-syne font-bold text-white text-sm uppercase tracking-widest mb-3">Social</h3>
                <div className="flex gap-3">
                  {[
                    { icon: GitBranch, label: 'GitHub', href: 'https://github.com' },
                    { icon: LinkIcon, label: 'LinkedIn', href: 'https://linkedin.com' },
                    { icon: X, label: 'Twitter', href: 'https://twitter.com' },
                  ].map(({ icon: Icon, label, href }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-[#2A2A2A] flex items-center justify-center text-white-muted hover:text-yellow hover:border-yellow transition-all duration-200"
                      aria-label={label}>
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-black-soft" withGrid>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <Badge>FAQ</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.02em" }}>Before You Reach Out.</h2>
          </div>
          <Accordion items={faqItems} />
        </div>
      </Section>
    </>
  );
}
