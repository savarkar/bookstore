import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="toast" role="status" aria-live="polite" [class.show]="toast.visible()">{{ toast.message() }}</div>`
})
export class ToastComponent {
  protected readonly toast = inject(ToastService);
}
