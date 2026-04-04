import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Codemaxxers Privacy Policy — how we collect, use, and protect your data.',
};

const sections = [
  {
    title: 'Introduction',
    content: `Codemaxxers ("we", "us", "our") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services.

If you have questions or concerns about this policy or our practices, please contact us at privacy@codemaxxers.com.`,
  },
  {
    title: 'Data Collection',
    content: `We collect information that you voluntarily provide to us when you:
• Fill out our contact form (name, email, company, phone number, project description)
• Subscribe to our newsletter (email address)
• Engage our services (billing and company information)

We also automatically collect certain information when you visit our website, including IP addresses, browser type, pages visited, and time spent on pages via analytics tools (e.g., Vercel Analytics).`,
  },
  {
    title: 'How We Use Your Data',
    content: `We use the information we collect to:
• Respond to your project inquiries and provide our services
• Send you our newsletter (with your consent, which you can withdraw at any time)
• Improve our website and services based on usage analytics
• Comply with legal obligations
• Protect against fraud and unauthorized access

We do not sell, rent, or trade your personal information to third parties for their marketing purposes.`,
  },
  {
    title: 'Data Sharing',
    content: `We may share your information with:
• Service providers who assist us in operating our website (hosting, email, analytics) — under strict data processing agreements
• Legal authorities when required by law or to protect our rights
• Business successors in the event of a merger, acquisition, or sale of assets

All third-party service providers are bound by confidentiality agreements and are prohibited from using your personal information for any other purpose.`,
  },
  {
    title: 'Cookies',
    content: `We use cookies and similar tracking technologies to improve your browsing experience. These include:
• Essential cookies: Required for the website to function properly
• Analytics cookies: Help us understand how visitors interact with our site

You can control cookie settings through your browser preferences. Note that disabling certain cookies may affect website functionality.`,
  },
  {
    title: 'Your Rights (GDPR)',
    content: `If you are located in the European Economic Area (EEA), you have certain rights regarding your personal data:
• Right to Access: Request a copy of the personal data we hold about you
• Right to Rectification: Request correction of inaccurate data
• Right to Erasure: Request deletion of your personal data ("right to be forgotten")
• Right to Restrict Processing: Request we limit how we use your data
• Right to Data Portability: Receive your data in a structured, machine-readable format
• Right to Object: Object to our processing of your personal data

To exercise these rights, contact us at privacy@codemaxxers.com. We will respond within 30 days.`,
  },
  {
    title: 'Contact',
    content: `If you have questions about this Privacy Policy or our data practices, please contact us:

Codemaxxers
Email: privacy@codemaxxers.com
Website: https://codemaxxers.com

We take privacy seriously and will respond to all inquiries promptly.`,
  },
];

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <p className="text-yellow font-syne font-semibold text-sm uppercase tracking-widest mb-3">Legal</p>
          <h1 className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.02em" }}  mb-4>Privacy Policy</h1>
          <p className="text-white-muted">Last updated: November 2024</p>
        </div>

        <div className="space-y-0">
          {sections.map((section, index) => (
            <div key={section.title}>
              <div className="py-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-6 bg-yellow rounded-full" />
                  <h2 className="font-syne font-bold text-white text-xl">{section.title}</h2>
                </div>
                <p className="text-white-muted leading-relaxed whitespace-pre-line">{section.content}</p>
              </div>
              {index < sections.length - 1 && <div className="border-b border-[#1A1A1A]" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
