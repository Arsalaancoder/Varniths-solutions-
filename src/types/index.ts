export type BusinessVerticalId = 'hr' | 'training' | 'tech';

export interface BusinessVertical {
  id: BusinessVerticalId;
  index: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  badge: string;
  image: string;
  highlightPoints: string[];
  primaryServiceCount: string;
}

export interface ServiceItem {
  id: string;
  vertical: BusinessVerticalId;
  title: string;
  slug: string;
  summary: string;
  description: string;
  category: string;
  duration?: string;
  deliveryMode: string;
  image: string;
  features: string[];
  benefits: string[];
  audience: string;
  processStages?: { title: string; desc: string }[];
}

export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  challenges: string[];
  solutionsProvided: string[];
  caseStudy: {
    headline: string;
    metrics: string;
    summary: string;
  };
}

export interface TransformationStage {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  image: string;
  quote: {
    text: string;
    context: string;
  };
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  serviceOrCourse: string;
  rating: number;
}

export interface ArticleItem {
  id: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  author: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'courses' | 'hr' | 'general';
}
