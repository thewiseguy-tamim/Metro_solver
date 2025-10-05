import { Megaphone, Sparkles, Shield, Home, Search, BarChart3 } from 'lucide-react';

export const SERVICES = [
  {
    id: 'svc-1',
    title: 'Digital Marketing',
    description:
      'We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is effortless and comfortable with our assistance.',
    icon: Megaphone,
    link: '#',
    featured: false,
  },
  {
    id: 'svc-2',
    title: 'SEO Marketing',
    description:
      'We are growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is effortless and comfortable with our assistance.',
    icon: Megaphone,
    link: '#',
    featured: false,      // shows the purple gradient + white outline
    label: '',
  },
  {
    id: 'svc-3',
    title: 'Consulting',
    description:
      'Strategy that scales with your goals. We design and iterate quickly to keep momentum.',
    icon: Sparkles,
    link: '#',
    featured: false,
  },
  {
    id: 'svc-4',
    title: 'Security',
    description:
      'Best practices and monitoring so your product stays safe and compliant.',
    icon: Shield,
    link: '#',
    featured: false,
  },
  {
    id: 'svc-5',
    title: 'Property Search',
    description:
      'Filters, alerts, and seamless browsing to find exactly what you’re after.',
    icon: Search,
    link: '#',
    featured: false,
  },
  {
    id: 'svc-6',
    title: 'Analytics',
    description:
      'Understand performance with clear dashboards and actionable insights.',
    icon: BarChart3,
    link: '#',
    featured: false,
  },
];