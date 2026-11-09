import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BookDialogComponent } from './components/book-dialog.component';
import { CartDrawerComponent } from './components/cart-drawer.component';
import { CatalogComponent } from './components/catalog.component';
import { HeaderComponent } from './components/header.component';
import { ToastComponent } from './components/toast.component';
import { ChatComponent } from './chat/chat.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, CatalogComponent, CartDrawerComponent, BookDialogComponent, ToastComponent, ChatComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="skip-link" href="#catalog">Skip to catalog</a>
    <app-header />

    <section class="hero">
      <div class="container">
        <h1>Find your next favourite read</h1>
        <p>Bestsellers, classics and hidden gems — delivered to your door.</p>
        <a class="btn" href="#catalog">Shop now</a>
      </div>
    </section>

    <app-catalog />

    <footer class="site-footer">
      <div class="container">© {{ year }} PageTurner Books · Built with IBM Bob &amp; Angular</div>
    </footer>

    <app-cart-drawer />
    <app-book-dialog />
    <app-toast />
    <app-chat />
  `
})
export class App {
  protected readonly year = new Date().getFullYear();
}
