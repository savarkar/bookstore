import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, effect, inject, viewChild } from '@angular/core';
import { CartService } from '../cart.service';
import { CatalogService } from '../catalog.service';
import { CoverComponent } from './cover.component';

@Component({
  selector: 'app-book-dialog',
  imports: [CoverComponent, CurrencyPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <dialog
      #dlg
      class="dialog"
      aria-labelledby="dlgTitle"
      (close)="catalog.selected.set(null)"
      (click)="$event.target === dlg && dlg.close()"
    >
      <button class="icon-btn dlg-close" aria-label="Close" (click)="dlg.close()">&times;</button>
      @if (catalog.selected(); as b) {
        <div class="dlg-body">
          <app-cover [book]="b" />
          <div>
            <h2 id="dlgTitle">{{ b.title }}</h2>
            <div class="card-author">by {{ b.author }} · {{ b.category }}</div>
            <div class="rating">★ {{ b.rating }} / 5</div>
            <p>{{ b.desc }}</p>
            <p class="price" style="color: inherit; font-size: 1.3rem">{{ b.price | currency }}</p>
            <button class="btn" (click)="cart.add(b)">Add to cart</button>
          </div>
        </div>
      }
    </dialog>
  `
})
export class BookDialogComponent {
  protected readonly catalog = inject(CatalogService);
  protected readonly cart = inject(CartService);
  private readonly dlg = viewChild.required<ElementRef<HTMLDialogElement>>('dlg');

  constructor() {
    effect(() => {
      const el = this.dlg().nativeElement;
      if (this.catalog.selected()) {
        if (!el.open) el.showModal();
      } else if (el.open) {
        el.close();
      }
    });
  }
}
