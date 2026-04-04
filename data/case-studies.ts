export interface CaseStudy {
  slug: string;
  title: string;
  category: 'Web App' | 'AI Solution';
  client: string;
  industry: string;
  timeline: string;
  teamSize: string;
  year: string;
  coverColor: string;
  excerpt: string;
  metric: string;
  challenge: string;
  approach: string;
  features: { icon: string; title: string; desc: string }[];
  results: { value: string; label: string }[];
  techStack: string[];
  testimonial: { quote: string; author: string; role: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'nexapay-fintech-platform',
    title: 'NexaPay — FinTech Payment Platform',
    category: 'Web App',
    client: 'NexaPay Inc.',
    industry: 'FinTech',
    timeline: '4 months',
    teamSize: '5',
    year: '2024',
    coverColor: '#0D1B2A',
    excerpt: 'Built a real-time payment processing platform handling $2M+ daily transactions.',
    metric: '99.99% uptime, $2M+ daily volume',
    challenge: 'NexaPay needed a robust, PCI-DSS compliant payment platform capable of handling thousands of concurrent transactions with sub-100ms latency. Their legacy system was failing under load and causing significant revenue loss.',
    approach: 'We designed a microservices architecture with Redis-backed queuing, event-driven processing, and a Next.js dashboard with real-time WebSocket updates. Stripe was integrated as the payment processor with custom fraud detection logic.',
    features: [
      { icon: 'Zap', title: 'Real-Time Processing', desc: 'Sub-100ms transaction processing with WebSocket live updates' },
      { icon: 'Shield', title: 'PCI-DSS Compliance', desc: 'Full compliance with payment card industry security standards' },
      { icon: 'BarChart', title: 'Analytics Dashboard', desc: 'Real-time revenue analytics and transaction monitoring' },
      { icon: 'RefreshCw', title: 'Auto-Reconciliation', desc: 'Automated daily reconciliation with multi-currency support' },
    ],
    results: [
      { value: '99.99%', label: 'Platform Uptime' },
      { value: '$2M+', label: 'Daily Transaction Volume' },
      { value: '<80ms', label: 'Average Response Time' },
    ],
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe API', 'AWS'],
    testimonial: {
      quote: 'Codemaxxers delivered a world-class payment platform in just 4 months. Our transaction volume tripled within weeks of launch.',
      author: 'David Kim',
      role: 'CTO, NexaPay Inc.',
    },
  },
  {
    slug: 'medai-diagnostic-assistant',
    title: 'MedAI — Diagnostic Assistant',
    category: 'AI Solution',
    client: 'HealthFirst Labs',
    industry: 'HealthTech',
    timeline: '6 months',
    teamSize: '4',
    year: '2024',
    coverColor: '#0A1A1A',
    excerpt: 'AI-powered medical image analysis reducing diagnostic time by 60%.',
    metric: '60% faster diagnostics',
    challenge: 'Radiologists at HealthFirst Labs were overwhelmed with image backlogs, causing delays of 48+ hours for critical diagnoses. They needed an AI system that could pre-screen images with high accuracy.',
    approach: 'We built a HIPAA-compliant AI pipeline using OpenAI Vision APIs fine-tuned on medical imaging data. A FastAPI backend handles image ingestion, while a React dashboard surfaces AI findings with confidence scores for physician review.',
    features: [
      { icon: 'Eye', title: 'Vision AI Analysis', desc: 'Automated screening of X-rays, MRIs, and CT scans' },
      { icon: 'AlertTriangle', title: 'Priority Flagging', desc: 'Urgent cases automatically escalated to top of queue' },
      { icon: 'FileText', title: 'Report Generation', desc: 'AI-drafted radiology reports for physician review' },
      { icon: 'Lock', title: 'HIPAA Compliance', desc: 'End-to-end encrypted, fully HIPAA-compliant data handling' },
    ],
    results: [
      { value: '60%', label: 'Faster Diagnostics' },
      { value: '94.7%', label: 'AI Accuracy Rate' },
      { value: '3x', label: 'More Cases Processed Daily' },
    ],
    techStack: ['Python', 'FastAPI', 'OpenAI Vision', 'PostgreSQL', 'React', 'Docker'],
    testimonial: {
      quote: 'The AI assistant has transformed our radiology department. We can now process 3x the cases with the same team size.',
      author: 'Dr. Sarah Mitchell',
      role: 'Chief Radiologist, HealthFirst Labs',
    },
  },
  {
    slug: 'logisync-supply-chain',
    title: 'LogiSync — Supply Chain SaaS',
    category: 'Web App',
    client: 'LogiSync',
    industry: 'Logistics',
    timeline: '5 months',
    teamSize: '6',
    year: '2023',
    coverColor: '#0A0D1A',
    excerpt: 'End-to-end supply chain visibility platform for 200+ enterprise clients.',
    metric: '200+ enterprise clients onboarded',
    challenge: 'LogiSync needed a multi-tenant SaaS platform that could give enterprise clients real-time visibility across complex global supply chains with thousands of shipments in motion simultaneously.',
    approach: 'We architected a GraphQL-powered multi-tenant platform with real-time tracking via WebSockets, a dynamic mapping interface, and an intelligent alerting system that notifies stakeholders of delays and exceptions.',
    features: [
      { icon: 'Map', title: 'Live Tracking Map', desc: 'Real-time shipment tracking across global supply chains' },
      { icon: 'Bell', title: 'Smart Alerts', desc: 'AI-powered delay prediction with proactive notifications' },
      { icon: 'Users', title: 'Multi-Tenant', desc: 'Isolated, secure environments for each enterprise client' },
      { icon: 'BarChart2', title: 'Analytics Suite', desc: 'Deep-dive analytics on supplier performance and costs' },
    ],
    results: [
      { value: '200+', label: 'Enterprise Clients' },
      { value: '40%', label: 'Reduction in Delays' },
      { value: '$4M+', label: 'ARR at Launch' },
    ],
    techStack: ['Next.js', 'TypeScript', 'MongoDB', 'GraphQL', 'AWS', 'Redis'],
    testimonial: {
      quote: "LogiSync's platform has given us unprecedented visibility into our supply chain. The ROI was evident within the first quarter.",
      author: 'Marcus Johnson',
      role: 'VP Operations, LogiSync',
    },
  },
  {
    slug: 'edubot-learning-assistant',
    title: 'EduBot — AI Learning Assistant',
    category: 'AI Solution',
    client: 'EduTech Corp',
    industry: 'EdTech',
    timeline: '3 months',
    teamSize: '3',
    year: '2024',
    coverColor: '#120A1A',
    excerpt: 'Personalized AI tutor reducing student study time by 40% while improving outcomes.',
    metric: '40% study time reduction',
    challenge: 'EduTech Corp wanted to build a personalized AI tutor that could adapt to each student\'s learning style, identify knowledge gaps, and deliver targeted content — all within a tight 3-month window.',
    approach: 'We built a RAG-powered tutoring system using LangChain and OpenAI, with a Pinecone vector store for curriculum content. The AI adapts its teaching style based on student performance data, offering quizzes, explanations, and study plans.',
    features: [
      { icon: 'Brain', title: 'Adaptive Learning', desc: 'AI adapts content difficulty based on real-time performance' },
      { icon: 'Target', title: 'Gap Analysis', desc: 'Identifies and targets specific knowledge gaps per student' },
      { icon: 'BookOpen', title: 'RAG Curriculum', desc: 'Answers grounded in verified curriculum materials' },
      { icon: 'TrendingUp', title: 'Progress Tracking', desc: 'Detailed learning analytics for students and educators' },
    ],
    results: [
      { value: '40%', label: 'Study Time Reduction' },
      { value: '28%', label: 'Grade Improvement' },
      { value: '92%', label: 'Student Satisfaction' },
    ],
    techStack: ['Python', 'LangChain', 'OpenAI', 'React', 'FastAPI', 'Pinecone'],
    testimonial: {
      quote: 'EduBot transformed how our students learn. Study time dropped 40% while test scores improved significantly.',
      author: 'Jennifer Torres',
      role: 'CEO, EduTech Corp',
    },
  },
  {
    slug: 'propvision-real-estate',
    title: 'PropVision — Real Estate Analytics',
    category: 'Web App',
    client: 'PropVision',
    industry: 'Real Estate',
    timeline: '4 months',
    teamSize: '4',
    year: '2023',
    coverColor: '#1A0D0A',
    excerpt: 'AI-assisted property valuation and market analytics platform.',
    metric: '3x faster property valuations',
    challenge: 'PropVision\'s manual property valuation process took 5+ business days and was inconsistent across agents. They needed an automated system that could deliver accurate valuations in minutes.',
    approach: 'We built a Next.js platform integrating custom ML models trained on historical sales data, public records, and market trends. The system generates automated valuations with confidence intervals and comparable property analysis.',
    features: [
      { icon: 'Home', title: 'Instant Valuation', desc: 'AI-generated property valuations in under 2 minutes' },
      { icon: 'TrendingUp', title: 'Market Analytics', desc: 'Hyper-local market trend analysis and forecasting' },
      { icon: 'Search', title: 'Comp Analysis', desc: 'Automated comparable sales analysis with adjustments' },
      { icon: 'FileText', title: 'Report Export', desc: 'Professional PDF reports for client presentations' },
    ],
    results: [
      { value: '3x', label: 'Faster Valuations' },
      { value: '94%', label: 'Accuracy vs Appraisals' },
      { value: '500+', label: 'Agents Using Platform' },
    ],
    techStack: ['Next.js', 'Python', 'ML Models', 'PostgreSQL', 'AWS', 'TailwindCSS'],
    testimonial: {
      quote: 'PropVision cut our valuation time from 5 days to 2 hours. Our agents can now serve 3x more clients.',
      author: 'Robert Chen',
      role: 'CEO, PropVision',
    },
  },
  {
    slug: 'retailmind-recommendation',
    title: 'RetailMind — AI Recommendation Engine',
    category: 'AI Solution',
    client: 'RetailMind',
    industry: 'E-commerce',
    timeline: '2 months',
    teamSize: '3',
    year: '2024',
    coverColor: '#0A1A0D',
    excerpt: 'Product recommendation engine boosting average order value by 35%.',
    metric: '35% increase in AOV',
    challenge: 'RetailMind\'s generic "you may also like" recommendations were driving less than 2% click-through rates. They needed a sophisticated personalization engine that could dramatically increase AOV.',
    approach: 'We built a real-time recommendation engine using collaborative filtering and LLM-enhanced product understanding. Redis caches personalized recommendation vectors, with a FastAPI service delivering sub-50ms recommendations at scale.',
    features: [
      { icon: 'Cpu', title: 'Real-Time Personalization', desc: 'Sub-50ms personalized recommendations at scale' },
      { icon: 'TrendingUp', title: 'Behavioral Analysis', desc: 'Deep analysis of browsing and purchase patterns' },
      { icon: 'ShoppingCart', title: 'Cross-Sell Engine', desc: 'Intelligent bundling and upsell opportunity detection' },
      { icon: 'BarChart', title: 'A/B Testing', desc: 'Built-in experimentation framework for optimization' },
    ],
    results: [
      { value: '35%', label: 'Increase in AOV' },
      { value: '8.4%', label: 'Recommendation CTR' },
      { value: '$1.2M', label: 'Additional Monthly Revenue' },
    ],
    techStack: ['Python', 'FastAPI', 'Redis', 'OpenAI', 'React', 'Docker'],
    testimonial: {
      quote: 'RetailMind\'s recommendation engine paid for itself in the first week. Our AOV jumped 35% immediately after launch.',
      author: 'Aisha Patel',
      role: 'Head of E-commerce, RetailMind',
    },
  },
];
