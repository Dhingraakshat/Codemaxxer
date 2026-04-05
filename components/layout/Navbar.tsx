'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X as CloseIcon, ChevronDown, Code2, Brain, Smartphone, Cloud, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
];

const serviceLinks = [
  { label: 'Web App Development', href: '/services/web-apps', icon: Code2, desc: 'SaaS, dashboards, APIs & more' },
  { label: 'AI Solutions', href: '/services/ai', icon: Brain, desc: 'LLMs, automation & ML pipelines' },
  { label: 'App Development', href: '/services/app-development', icon: Smartphone, desc: 'iOS, Android, React Native, Flutter' },
  { label: 'Cloud & Data Analytics', href: '/services/cloud-analytics', icon: Cloud, desc: 'AWS, Azure, GCP, dashboards' },
  { label: 'Innovative Solutions', href: '/services/innovative-solutions', icon: Lightbulb, desc: "Prototyping, R&D, CTO advisory" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          'backdrop-blur-md bg-[rgba(10,10,10,0.85)]',
          scrolled
            ? 'border-b border-[#2A2A2A] py-3'
            : 'border-b border-[#1A1A1A] py-5'
        )}
      >
        <div className="px-6 md:px-12 lg:px-24 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/favicon.svg"
              alt="Codemaxxers icon"
              width={28}
              height={28}
              className="opacity-90 group-hover:opacity-100 transition-opacity"
            />
            <span className="font-syne font-extrabold text-white tracking-tight flex items-center" style={{ fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
              CODEMA<span className="logo-xx">XX</span>ERS
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className={cn(
                    'flex items-center gap-1 text-sm font-syne font-medium transition-colors duration-200 group relative',
                    pathname.startsWith('/services') ? 'text-yellow' : 'text-white-soft hover:text-yellow'
                  )}>
                    {link.label}
                    <ChevronDown className={cn('w-3 h-3 transition-transform duration-200', servicesOpen && 'rotate-180')} />
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-yellow group-hover:w-full transition-all duration-300" />
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] bg-[#0D0D0D] border border-[#242424] rounded-xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                      >
                        <p className="text-white-muted text-[10px] font-syne uppercase tracking-[0.15em] px-3 pb-2 pt-1">Our Services</p>
                        <div className="grid grid-cols-2 gap-1">
                          {serviceLinks.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              className="flex items-start gap-3 p-3 rounded-md hover:bg-black-muted transition-colors duration-200 group"
                            >
                              <s.icon className="w-5 h-5 text-yellow mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="font-syne font-semibold text-white text-sm group-hover:text-yellow transition-colors">{s.label}</p>
                                <p className="text-white-muted text-xs mt-0.5">{s.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'text-sm font-syne font-medium transition-colors duration-200 group relative',
                    pathname === link.href ? 'text-yellow' : 'text-white-soft hover:text-yellow'
                  )}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-yellow group-hover:w-full transition-all duration-300" />
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button href="/contact" size="sm">Get a Quote</Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <CloseIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-black flex flex-col pt-24 px-8 pb-8"
          >
            <div className="space-y-1">
              {navLinks.map((link, i) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      'block py-4 font-syne font-bold text-2xl border-b border-[#1A1A1A] transition-colors duration-200',
                      pathname === link.href ? 'text-yellow' : 'text-white hover:text-yellow'
                    )}
                    style={{ borderLeftWidth: '3px', borderLeftColor: i % 2 === 0 ? '#F5C518' : 'transparent', paddingLeft: '12px' }}
                  >
                    {link.label}
                  </Link>
                  {link.hasDropdown && (
                    <div className="pl-4 pb-2 space-y-2 pt-2">
                      {serviceLinks.map((s) => (
                        <Link key={s.href} href={s.href} className="block text-white-muted hover:text-yellow py-1 font-syne text-sm transition-colors">
                          → {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/contact" size="lg" className="w-full justify-center">Get a Quote</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
