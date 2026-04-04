export interface JobRole {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
}

export const careers: JobRole[] = [
  {
    id: 'senior-fullstack',
    title: 'Senior Full-Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-Time',
  },
  {
    id: 'ai-ml-engineer',
    title: 'AI/ML Engineer',
    department: 'AI/ML',
    location: 'Remote',
    type: 'Full-Time',
  },
  {
    id: 'frontend-developer',
    title: 'Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-Time or Contract',
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-Time',
  },
  {
    id: 'sales-engineer',
    title: 'Sales Engineer',
    department: 'Sales',
    location: 'Remote',
    type: 'Full-Time',
  },
];
