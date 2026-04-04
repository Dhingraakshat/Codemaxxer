export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedin?: string;
}

export const team: TeamMember[] = [
  {
    name: 'Alex Rivera',
    role: 'CEO & Co-Founder',
    bio: 'Full-stack architect with 10+ years building SaaS products for Fortune 500 companies.',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Sam Chen',
    role: 'CTO & Co-Founder',
    bio: 'AI/ML engineer and distributed systems expert. Previously at Google Brain.',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Jordan Patel',
    role: 'Head of Design',
    bio: 'Design systems specialist focused on creating interfaces users love.',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Priya Sharma',
    role: 'Lead AI Engineer',
    bio: 'LLM fine-tuning and RAG pipeline specialist. PhD in Computer Science.',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Marcus Webb',
    role: 'Senior Full-Stack Developer',
    bio: 'Next.js and Node.js expert. Open source contributor with 2k+ GitHub stars.',
    linkedin: 'https://linkedin.com',
  },
];
