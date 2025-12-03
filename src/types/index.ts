export interface Article {
  id: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  link: string;
  badge?: string;
  content?: string;
  tags?: string[];
  summary?: string[];
  cover?: string;
  tagDescription?: string;
}
