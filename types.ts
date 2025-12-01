import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  details?: string[];
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ConditionCard {
  title: string;
  symptoms: string[];
  treatment: string;
}

export interface EducationItem {
  title: string;
  summary: string;
  details: {
    what: string;
    techniques?: string[];
    benefits?: Array<{ title: string; desc: string }>;
    when?: string[];
    process?: string[];
    safety?: string[];
    highlight?: string;
  };
}