export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Testimonial {
  id: number;
  name: string;
  relation: string;
  quote: string;
  image: string;
}

export interface Doctor {
  id: number;
  name: string;
  role: string;
  credentials: string;
  image: string;
  bio: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}