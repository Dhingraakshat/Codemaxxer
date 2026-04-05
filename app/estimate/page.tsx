import CostEstimator from '@/components/home/CostEstimator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Cost Estimator — Codemaxxers',
  description: 'Get an instant estimate for your project. Select services, complexity, and see real-time pricing with our 50% launch discount applied automatically.',
};

export default function EstimatePage() {
  return <CostEstimator />;
}
