'use client';

import Link from 'next/link';
import Image from 'next/image';
import { GitBranch, ExternalLink, X, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Work', href: '/work' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
];

const serviceLinks = [
  { label: 'Web App Development', href: '/services/web-apps' },
  { label: 'AI Solutions', href: '/services/ai' },
  { label: 'All Services', href: '/services' },
];

const resourceLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#181818]">
      <div className="px-6 md:px-12 lg:px-24 pt-20 pb-12 border-b border-[#161616]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <Image src="/favicon.svg" alt="Codemaxxers" width={48} height={48} className="opacity-90" />
              <div
                className="font-syne font-extrabold text-white leading-none select-none flex items-baseline"
                style={{ fontSize: 'clamp(28px, 4.5vw, 52px)', letterSpacing: '-0.03em' }}
              >
                <span>CODEMA</span>
                <span className="logo-xx">XX</span>
                <span>ERS</span>
              </div>
            </div>
            <p className="text-white-muted mt-3 text-sm max-w-xs leading-relaxed">
              Building the software that drives the future — one exceptional product at a time.
            </p>
          </div>
          <div className="lg:max-w-sm w-full">
            <p className="font-syne font-semibold text-white text-sm mb-1">Stay in the loop</p>
            <p className="text-white-muted text-xs mb-3">Insights on AI, web dev, and building fast.</p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-yellow font-syne font-semibold text-sm">
                <span className="w-5 h-5 rounded-full bg-yellow/20 border border-yellow flex items-center justify-center text-xs">✓</span>
                You&rsquo;re subscribed!
              </div>
            ) : (
              <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-[#111] border border-[#2A2A2A] rounded-md text-white text-sm px-3 py-2.5 focus:outline-none focus:border-yellow transition-colors placeholder-white-muted"
                />
                <button type="submit" className="bg-yellow text-black font-syne font-bold text-sm px-4 py-2.5 rounded-md hover:bg-yellow-soft transition-all duration-200 flex items-center gap-1.5 group">
                  Sub <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-24 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { title: 'Company', links: companyLinks },
            { title: 'Services', links: serviceLinks },
            { title: 'Resources', links: resourceLinks },
          ].map(({ title, links }) => (
            <div key={title}>
              <h4 className="font-syne font-bold text-white mb-5 text-xs uppercase tracking-[0.15em]">{title}</h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-white-muted hover:text-yellow transition-colors duration-200 text-sm group flex items-center gap-1">
                      <span className="text-yellow opacity-0 group-hover:opacity-100 transition-opacity text-xs">›</span>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="font-syne font-bold text-white mb-5 text-xs uppercase tracking-[0.15em]">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-white-muted text-sm"><Mail className="w-3.5 h-3.5 text-yellow flex-shrink-0" />hello@codemaxxers.com</li>
              <li className="flex items-center gap-2.5 text-white-muted text-sm"><Phone className="w-3.5 h-3.5 text-yellow flex-shrink-0" />+371 25138257</li>
              <li className="flex items-center gap-2.5 text-white-muted text-sm"><MapPin className="w-3.5 h-3.5 text-yellow flex-shrink-0" />Remote-First, Worldwide</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-24 py-6 border-t border-[#141414] flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white-muted text-xs">© {new Date().getFullYear()} Codemaxxers. All rights reserved.</p>
        <div className="flex items-center gap-2.5">
          {[
            { icon: GitBranch, href: 'https://github.com', label: 'GitHub' },
            { icon: ExternalLink, href: 'https://www.linkedin.com/company/codemaxxers', label: 'LinkedIn' },
            { icon: X, href: 'https://twitter.com', label: 'Twitter' },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="w-8 h-8 rounded-full border border-[#252525] flex items-center justify-center text-white-muted hover:text-yellow hover:border-yellow/50 hover:bg-yellow/5 transition-all duration-200">
              <Icon className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}