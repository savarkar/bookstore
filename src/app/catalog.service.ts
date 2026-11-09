import { Injectable, computed, signal } from '@angular/core';
import { Book, SortKey } from './book.model';
import { BOOKS } from './books.data';

const SORTERS: Record<Exclude<SortKey, 'featured'>, (a: Book, b: Book) => number> = {
  'price-asc': (a, b) => a.price - b.price,
  'price-desc': (a, b) => b.price - a.price,
  rating: (a, b) => b.rating - a.rating,
  title: (a, b) => a.title.localeCompare(b.title)
};

@Injectable({ providedIn: 'root' })
export class CatalogService {
  readonly books = BOOKS;
  readonly categories = ['All', ...new Set(BOOKS.map((b) => b.category))];

  readonly category = signal('All');
  readonly query = signal('');
  readonly sort = signal<SortKey>('featured');
  readonly selected = signal<Book | null>(null);

  readonly visible = computed(() => {
    const q = this.query().trim().toLowerCase();
    const cat = this.category();
    const list = this.books.filter(
      (b) =>
        (cat === 'All' || b.category === cat) &&
        (!q || b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q))
    );
    const sort = this.sort();
    return sort === 'featured' ? list : [...list].sort(SORTERS[sort]);
  });

  byId(id: number): Book | undefined {
    return this.books.find((b) => b.id === id);
  }
}
