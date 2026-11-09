import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CartService } from '../cart.service';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="site-header">
      <div class="container header-inner">
        <a href="#" class="logo" aria-label="PageTurner Books home">Page<span>Turner</span></a>

        <form class="search" role="search" (submit)="$event.preventDefault()">
          <label for="searchInput" class="sr-only">Search books</label>
          <input
            type="search"
            id="searchInput"
            placeholder="Search title or author…"
            autocomplete="off"
            [value]="catalog.query()"
            (input)="catalog.query.set($any($event.target).value)"
          />
        </form>

        <button
          class="cart-btn"
          aria-label="Open cart"
          aria-controls="cartDrawer"
          [attr.aria-expanded]="cart.open()"
          (click)="cart.open.set(true)"
        >
          Cart <span class="badge">{{ cart.count() }}</span>
        </button>
      </div>
    </header>
  `
})
export class HeaderComponent {
  protected readonly catalog = inject(CatalogService);
  protected readonly cart = inject(CartService);
}
