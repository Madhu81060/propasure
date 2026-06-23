export interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
  time: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}


export interface TimelineStep {
  step: number;
  label: string;
  title: string;
  desc: string;
}

export interface TrustBenefit {
  title: string;
  desc: string;
  icon: string;
}

export interface StatItem {
  number: string;
  label: string;
  highlight?: boolean;
}

export interface ProblemItem {
  title: string;
  desc: string;
}

export interface SolutionItem {
  title: string;
  desc: string;
  icon?: string;
}
