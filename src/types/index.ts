export interface Article {
  id: string;
  slug: string;
  category: string;
  date: string;
  readingTime: string;
  type: "FOLDER" | "NEWS";
  title?: any;
  excerpt: any;
  image: string;
  link: string;
  badge?: string;
  content?: any;
  tags?: string[];
  summary?: string[];
  cover?: string;
  tagDescription?: string;
  _embedded?: Record<
    string,
    {
      source_url?: string;
      media_details?: {
        width?: number;
        height?: number;
      };
    }[]
  >;
  featuredImage: string;
  imageWidth?: number;
  imageHeight?: number;
}

export interface Event {
  id: string;
  date: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image?: string;
  link: string;
}
