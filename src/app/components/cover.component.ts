import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'app-cover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="cover" [class.mini-cover]="mini()" [style.background]="gradient()">
      @if (!mini()) {
        <span class="c-title">{{ book().title }}</span>
        <span class="c-author">{{ book().author }}</span>
      }
    </div>
  `
})
export class CoverComponent {
  readonly book = input.required<Book>();
  readonly mini = input(false);
  protected readonly gradient = computed(() => `linear-gradient(160deg, ${this.book().color}, #111)`);
}
