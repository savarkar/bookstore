import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CartService } from '../cart.service';
import { CatalogService } from '../catalog.service';
import { SortKey } from '../book.model';
import { CoverComponent } from './cover.component';

@Component({
  selector: 'app-catalog',
  imports: [CoverComponent, CurrencyPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main id="catalog" class="container">
      <div class="toolbar">
        <div class="chips" role="group" aria-label="Filter by category">
          @for (c of catalog.categories; track c) {
            <button class="chip" [attr.aria-pressed]="c === catalog.category()" (click)="catalog.category.set(c)">
              {{ c }}
            </button>
          }
        </div>
        <div class="sort">
          <label for="sortSelect">Sort by</label>
          <select id="sortSelect" (change)="catalog.sort.set($any($event.target).value)">
            @for (o of sortOptions; track o.value) {
              <option [value]="o.value" [selected]="o.value === catalog.sort()">{{ o.label }}</option>
            }
          </select>
        </div>
      </div>

      <p class="result-count" aria-live="polite">
        {{ catalog.visible().length }} book{{ catalog.visible().length === 1 ? '' : 's' }}
      </p>

      <div class="grid">
        @for (b of catalog.visible(); track b.id) {
          <article class="card">
            <button class="cover-btn" [attr.aria-label]="'View details for ' + b.title" (click)="catalog.selected.set(b)">
              <app-cover [book]="b" />
            </button>
            <div class="card-body">
              <h3 class="card-title">{{ b.title }}</h3>
              <p class="card-author">{{ b.author }}</p>
              <span class="rating" [attr.aria-label]="'Rated ' + b.rating + ' out of 5'">
                {{ stars(b.rating) }} {{ b.rating }}
              </span>
              <div class="card-foot">
                <span class="price">{{ b.price | currency }}</span>
                <button class="btn small" (click)="cart.add(b)">Add</button>
              </div>
            </div>
          </article>
        }
      </div>

      @if (catalog.visible().length === 0) {
        <p class="empty">No books match your search.</p>
      }
    </main>
  `
})
export class CatalogComponent {
  protected readonly catalog = inject(CatalogService);
  protected readonly cart = inject(CartService);

  protected readonly sortOptions: { value: SortKey; label: string }[] = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-asc', label: 'Price: low to high' },
    { value: 'price-desc', label: 'Price: high to low' },
    { value: 'rating', label: 'Top rated' },
    { value: 'title', label: 'Title A–Z' }
  ];

  protected stars(r: number): string {
    const n = Math.round(r);
    return '★'.repeat(n) + '☆'.repeat(5 - n);
  }
}
