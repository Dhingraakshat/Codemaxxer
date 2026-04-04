import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Codemaxxers Terms of Service — the agreement governing use of our services.',
};

const sections = [
  {
    title: 'Agreement to Terms',
    content: `By accessing or using Codemaxxers services, engaging us for a project, or visiting our website, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.

These Terms constitute a legally binding agreement between you ("Client") and Codemaxxers ("Company"). We may update these Terms from time to time, and your continued use of our services constitutes acceptance of any changes.`,
  },
  {
    title: 'Services',
    content: `Codemaxxers provides software development, AI engineering, and technical consulting services. The specific scope, deliverables, timeline, and cost of each engagement are defined in a separate Statement of Work (SOW) or project agreement signed by both parties.

We reserve the right to refuse service to any party at our sole discretion. We do not guarantee specific business outcomes — we guarantee the delivery of the agreed technical specifications to the best of our professional ability.`,
  },
  {
    title: 'Intellectual Property',
    content: `Upon receipt of full payment, all custom code, designs, and materials created specifically for your project become your property. You grant us the right to display completed work in our portfolio and case studies unless you request otherwise in writing.

We retain ownership of any pre-existing frameworks, libraries, or proprietary tooling we use in your project. Open-source components used in your project are subject to their respective licenses. We will disclose all third-party components and their licenses in project documentation.`,
  },
  {
    title: 'Payments',
    content: `Payment terms are defined in each project agreement. Standard terms are:
• Fixed-price projects: 50% upfront, 50% on delivery
• Dedicated team engagements: Monthly billing in advance
• Consulting retainers: Monthly billing in advance

Invoices are due within 14 days of issuance. Late payments accrue interest at 1.5% per month. We reserve the right to pause work on engagements with outstanding balances over 30 days.

All prices are in USD unless otherwise stated. We are not responsible for currency conversion fees.`,
  },
  {
    title: 'Limitation of Liability',
    content: `To the maximum extent permitted by applicable law, Codemaxxers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of revenue, loss of data, or business interruption.

Our total liability for any claim arising from our services shall not exceed the total amount paid by you to Codemaxxers in the three months preceding the claim.

We provide a 90-day warranty covering bugs and defects in the code we deliver. This warranty does not cover issues arising from changes made by third parties, data corruption, or force majeure events.`,
  },
  {
    title: 'Governing Law',
    content: `These Terms of Service shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.

Any dispute arising from these Terms shall first be addressed through good-faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.

If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in full force and effect.

For questions about these Terms, contact legal@codemaxxers.com.`,
  },
];

export default function TermsPage() {
  return (
    <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <p className="text-yellow font-syne font-semibold text-sm uppercase tracking-widest mb-3">Legal</p>
          <h1 className="font-syne font-extrabold text-white mb-4" style={{ fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-0.02em" }}>Terms of Service</h1>
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
