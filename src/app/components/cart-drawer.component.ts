import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, effect, inject, viewChild } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-drawer',
  imports: [CurrencyPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(document:keydown.escape)': 'cart.open.set(false)' },
  template: `
    @if (cart.open()) {
      <div class="overlay" (click)="cart.open.set(false)"></div>
    }
    <aside
      class="drawer"
      id="cartDrawer"
      aria-label="Shopping cart"
      [class.open]="cart.open()"
      [attr.aria-hidden]="!cart.open()"
    >
      <div class="drawer-head">
        <h2>Your cart</h2>
        <button #closeBtn class="icon-btn" aria-label="Close cart" (click)="cart.open.set(false)">&times;</button>
      </div>

      <ul class="cart-list">
        @for (e of cart.items(); track e.book.id) {
          <li class="cart-item">
            <div class="cover mini-cover" [style.background]="'linear-gradient(160deg,' + e.book.color + ', #111)'"></div>
            <div>
              <div class="ci-title">{{ e.book.title }}</div>
              <div class="ci-meta">{{ e.book.price | currency }} each</div>
              <div class="qty">
                <button aria-label="Decrease quantity" (click)="cart.setQty(e.book.id, e.qty - 1)">−</button>
                <span aria-live="polite">{{ e.qty }}</span>
                <button aria-label="Increase quantity" (click)="cart.setQty(e.book.id, e.qty + 1)">+</button>
              </div>
            </div>
            <div>
              <strong>{{ e.book.price * e.qty | currency }}</strong><br />
              <button class="remove" (click)="cart.setQty(e.book.id, 0)">Remove</button>
            </div>
          </li>
        } @empty {
          <li class="cart-empty">Your cart is empty.</li>
        }
      </ul>

      <div class="drawer-foot">
        <div class="total-row"><span>Total</span><strong>{{ cart.total() | currency }}</strong></div>
        <button class="btn block" [disabled]="cart.count() === 0" (click)="cart.checkout()">Checkout</button>
      </div>
    </aside>
  `
})
export class CartDrawerComponent {
  protected readonly cart = inject(CartService);
  private readonly closeBtn = viewChild.required<ElementRef<HTMLButtonElement>>('closeBtn');

  constructor() {
    effect(() => {
      if (this.cart.open()) this.closeBtn().nativeElement.focus();
    });
  }
}
