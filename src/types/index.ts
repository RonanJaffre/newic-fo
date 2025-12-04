export interface Article {
  id: string;
  slug: string;
  category: string;
  date: string;
  readingTime: string;
  title?:
    | {
        rendered?: string;
      }
    | string;
  excerpt:
    | {
        rendered?: string;
      }
    | string;
  image: string;
  link: string;
  badge?: string;
  content?:
    | {
        rendered?: string;
      }
    | string;
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
