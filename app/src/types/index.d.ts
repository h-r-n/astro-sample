export interface Post {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: {
    title: string;
    image?: string;
    meta_title?: string;
    description?: string;
    date?: any;
    categories?: string[];
    tags?: string[];
    pickup: boolean;
  };
  render: () => Promise<{ Content: any }>;
}

export interface PostData {
  title: string;
  image?: string;
  categories: string[];
  description?: string;
  date: string;
  tags: string[];
  type: string;
  pickup: boolean;
}
