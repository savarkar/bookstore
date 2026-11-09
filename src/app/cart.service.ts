import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { Book } from './book.model';
import { CatalogService } from './catalog.service';
import { ToastService } from './toast.service';

const STORAGE_KEY = 'pageturner.cart.v1';

function load(): Record<number, number> {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}') || {};
  } catch {
    return {};
  }
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly catalog = inject(CatalogService);
  private readonly toast = inject(ToastService);

  /** book id -> quantity */
  private readonly quantities = signal<Record<number, number>>(load());
  readonly open = signal(false);

  readonly items = computed(() =>
    Object.entries(this.quantities())
      .map(([id, qty]) => ({ book: this.catalog.byId(+id), qty }))
      .filter((e): e is { book: Book; qty: number } => !!e.book)
  );
  readonly count = computed(() => this.items().reduce((n, e) => n + e.qty, 0));
  readonly total = computed(() => this.items().reduce((n, e) => n + e.qty * e.book.price, 0));

  constructor() {
    effect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(this.quantities())));
  }

  add(book: Book): void {
    this.setQty(book.id, (this.quantities()[book.id] ?? 0) + 1);
    this.toast.show(`Added "${book.title}" to cart`);
  }

  setQty(id: number, qty: number): void {
    this.quantities.update((q) => {
      const next = { ...q };
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });
  }

  checkout(): void {
    this.quantities.set({});
    this.open.set(false);
    this.toast.show('Thanks! Order placed (demo).');
  }
}
