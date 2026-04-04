import type { Metadata } from 'next';
import { Brain, MessageSquare, RefreshCw, Database, Cpu, Star, ShieldCheck } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Section from '@/components/layout/Section';
import PageHero from '@/components/layout/PageHero';
import Accordion from '@/components/ui/Accordion';
import { caseStudies } from '@/data/case-studies';

export const metadata: Metadata = {
  title: 'AI Solutions',
  description: 'Production-grade AI solutions — LLM chatbots, process automation, data pipelines, model fine-tuning.',
};

const problems = [
  {
    problem: 'Your team is drowning in repetitive manual work',
    solution: 'We build intelligent automation that handles the repetitive, so your team focuses on the creative.',
    icon: RefreshCw,
  },
  {
    problem: 'You\'re sitting on valuable data you can\'t use',
    solution: 'We build RAG systems and analytics pipelines that turn your data into actionable intelligence.',
    icon: Database,
  },
  {
    problem: 'Generic AI tools don\'t understand your domain',
    solution: 'We fine-tune models on your data for domain-specific accuracy that off-the-shelf AI cannot match.',
    icon: Brain,
  },
];

const capabilities = [
  { icon: MessageSquare, title: 'LLM Chatbots & Assistants', desc: 'Context-aware AI assistants with memory, tool use, and fallback handling for production environments.' },
  { icon: RefreshCw, title: 'Process Automation', desc: 'End-to-end automation of document processing, email workflows, approvals, and data entry.' },
  { icon: Database, title: 'RAG & Data Pipelines', desc: 'Retrieval-augmented generation systems that ground AI answers in your verified knowledge base.' },
  { icon: Cpu, title: 'Model Fine-Tuning', desc: 'LoRA and full fine-tuning on proprietary datasets using HuggingFace and custom training infrastructure.' },
  { icon: Star, title: 'Recommendation Engines', desc: 'Personalization systems using collaborative filtering, content-based filtering, and LLM-enhanced ranking.' },
];

const faqItems = [
  { title: 'Which AI models do you work with?', content: 'We work with OpenAI (GPT-4, GPT-4o), Anthropic (Claude 3.5), Google (Gemini), Meta (Llama), and Mistral. We recommend the best model for your specific use case and cost requirements.' },
  { title: 'How do you handle data privacy with AI?', content: 'We use Azure OpenAI or AWS Bedrock for enterprise clients who cannot send data to third-party APIs. For sensitive industries, we deploy open-source models on your own infrastructure.' },
  { title: 'What is RAG and do I need it?', content: 'RAG (Retrieval-Augmented Generation) grounds LLM responses in your specific documents and data, preventing hallucinations and ensuring accuracy. Most business AI applications benefit from RAG.' },
  { title: 'How accurate are your AI systems?', content: 'It depends on the task, but our medical imaging AI achieves 94.7% accuracy. We always benchmark against baselines and report honest accuracy metrics before you commit.' },
  { title: 'Can AI replace my existing software?', content: 'Usually AI enhances rather than replaces. We identify the highest-value AI integration points in your existing workflow and add intelligence where it creates the most ROI.' },
  { title: 'How long does an AI project take?', content: 'A focused automation or chatbot project takes 6–10 weeks. Complex ML pipelines or model fine-tuning projects take 10–20 weeks. We scope each engagement precisely in discovery.' },
  { title: 'What about AI hallucinations?', content: 'We use RAG grounding, output validation, confidence scoring, and human-in-the-loop review for high-stakes decisions. Hallucinations are a solvable engineering problem.' },
  { title: 'Do you offer ongoing model maintenance?', content: 'Yes. Models drift over time as your data evolves. Our maintenance retainers include quarterly retraining, performance monitoring, and prompt engineering updates.' },
];

const medai = caseStudies.find((c) => c.slug === 'medai-diagnostic-assistant')!;

export default function AIPage() {
  return (
    <>
      <PageHero
        badge="AI Solutions"
        title="AI That Actually Works for Your Business."
        subtitle="Not demos — deployed, production-grade AI that integrates into your workflow and delivers measurable ROI from day one."
      />

      {/* Problem → Solution */}
      <Section withGrid>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge>The Problem</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.02em" }}>We Solve Real AI Problems.</h2>
          </div>
          <div className="space-y-4">
            {problems.map((p, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-0 bg-black-soft border border-[#2A2A2A] rounded-xl overflow-hidden hover:border-yellow transition-all duration-300">
                <div className="p-6 border-b md:border-b-0 md:border-r border-[#2A2A2A] flex items-start gap-4">
                  <p.icon className="w-6 h-6 text-white-muted flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white-muted text-xs font-syne uppercase tracking-widest mb-2">The Problem</p>
                    <p className="text-white-soft">{p.problem}</p>
                  </div>
                </div>
                <div className="p-6 flex items-start gap-4 bg-[rgba(245,197,24,0.03)]">
                  <div className="w-2 h-2 rounded-full bg-yellow flex-shrink-0 mt-2" />
                  <div>
                    <p className="text-yellow text-xs font-syne uppercase tracking-widest mb-2">Our Solution</p>
                    <p className="text-white-soft">{p.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* AI Capabilities */}
      <Section className="bg-black-soft" withGrid>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge>Capabilities</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.02em" }}>Five Core AI Services.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="bg-black border border-[#2A2A2A] rounded-lg p-6 hover:border-yellow transition-all duration-300 group">
                <cap.icon className="w-7 h-7 text-yellow mb-4" />
                <h3 className="font-syne font-bold text-white mb-2">{cap.title}</h3>
                <p className="text-white-muted text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Responsible AI */}
      <Section withGrid>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge>Responsible AI</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.02em" }}>Ethics Built In, Not Bolted On.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: ShieldCheck, title: 'Data Privacy First', desc: 'We never train on client data without explicit consent. Enterprise clients can deploy fully on-premise.' },
              { icon: Brain, title: 'Explainable AI', desc: 'For regulated industries, we build models with explainability features so decisions can be audited.' },
              { icon: RefreshCw, title: 'Human-in-the-Loop', desc: 'High-stakes AI decisions always have a human review checkpoint. Automation assists, not replaces, judgment.' },
              { icon: Star, title: 'Bias Monitoring', desc: 'We test for demographic bias and monitor model performance across user segments post-deployment.' },
            ].map((item) => (
              <div key={item.title} className="bg-black-soft border border-[#2A2A2A] rounded-lg p-6 flex gap-4">
                <item.icon className="w-6 h-6 text-yellow flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-syne font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-white-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Tech Stack */}
      <Section className="bg-black-soft" withGrid>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge>Tech Stack</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.02em" }}>Our AI Toolkit.</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {['OpenAI', 'Anthropic', 'HuggingFace', 'LangChain', 'Python', 'FastAPI', 'Pinecone', 'PostgreSQL'].map((tech) => (
              <span key={tech} className="px-5 py-2.5 bg-black border border-[#2A2A2A] rounded-full text-white-soft font-syne font-medium hover:border-yellow hover:text-yellow transition-all duration-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Case Study Spotlight */}
      <Section withGrid>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 space-y-3">
            <Badge>Case Study</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.02em" }}>AI in Production.</h2>
          </div>
          <div className="bg-black-soft border-t-4 border-t-yellow border border-[#2A2A2A] rounded-xl p-8">
            <Badge>{medai.category}</Badge>
            <h3 className="font-syne font-bold text-white text-2xl mt-4 mb-2">{medai.title}</h3>
            <p className="text-yellow font-semibold mb-4">{medai.metric}</p>
            <p className="text-white-muted mb-6">{medai.excerpt}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {medai.techStack.map((t) => (
                <span key={t} className="px-3 py-1 bg-black border border-[#2A2A2A] rounded-full text-xs text-white-muted font-syne">{t}</span>
              ))}
            </div>
            <Button href={`/work/${medai.slug}`} variant="secondary">Read Case Study</Button>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-black-soft" withGrid>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <Badge>FAQ</Badge>
            <h2 className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.02em" }}>AI Questions, Answered.</h2>
          </div>
          <Accordion items={faqItems} />
        </div>
      </Section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-24 text-center relative overflow-hidden"
        style={{ background: 'radial-gradient(ellipse at center, rgba(245,197,24,0.1) 0%, transparent 70%)' }}>
        <h2 className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.02em" }}  mb-4>Ready to Add AI to Your Product?</h2>
        <p className="text-white-muted mb-8 max-w-md mx-auto">Let&apos;s scope an AI pilot that proves value in 6 weeks.</p>
        <Button href="/contact" size="lg">Start an AI Pilot</Button>
      </section>
    </>
  );
}
