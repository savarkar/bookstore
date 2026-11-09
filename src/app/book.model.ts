export interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  price: number;
  rating: number;
  color: string;
  desc: string;
}

export type SortKey = 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'title';
