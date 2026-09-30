export interface SchoolModule {
  id: string;
  title: string;
  category: 'Administration' | 'Academics' | 'Finance' | 'Logistics' | 'Communication';
  icon: string;
  tagline: string;
  description: string;
  zeroManualFeature: string;
  adminBenefit: string;
  studentBenefit: string;
  metrics: string;
}

export interface BeforeAfterItem {
  workflow: string;
  traditionalWay: string;
  traditionalCostTime: string;
  schoolTekWay: string;
  automationGain: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  targetSchool: string;
  pricePerStudentMonthly: number;
  pricePerStudentAnnual: number;
  highlighted?: boolean;
  features: string[];
  schoolTekCapabilities: string[];
  ctaText: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  school: string;
  location: string;
  studentCount: number;
  keyMetric: string;
  rating: number;
  avatar: string;
}

export interface SimulationEvent {
  id: string;
  time: string;
  type: 'attendance' | 'fee' | 'substitution' | 'transport' | 'grade';
  title: string;
  detail: string;
  badge: string;
  studentName?: string;
  status: 'automated' | 'syncing' | 'completed';
}

export interface DemoLeadForm {
  schoolName: string;
  contactName: string;
  email: string;
  phone: string;
  role: string;
  studentCount: number;
  board: string;
  primaryPainPoint: string;
}
