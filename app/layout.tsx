import type { Metadata } from 'next';
import { Syne, DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dmsans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Codemaxxers — Web App Development & AI Solutions',
    template: '%s | Codemaxxers',
  },
  description:
    'Codemaxxers is an elite IT company specializing in web application development and AI solutions. We build the software that drives the future.',
  keywords: ['web development', 'AI solutions', 'SaaS', 'next.js', 'machine learning', 'software agency'],
  authors: [{ name: 'Codemaxxers' }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Codemaxxers — Web App Development & AI Solutions',
    description: 'We build the software that drives the future.',
    url: 'https://codemaxxers.com',
    siteName: 'Codemaxxers',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Codemaxxers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codemaxxers — Web App Development & AI Solutions',
    description: 'We build the software that drives the future.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="bg-[#0A0A0A] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
