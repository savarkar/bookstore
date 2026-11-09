import { ChangeDetectionStrategy, Component, ElementRef, effect, inject, viewChild } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(document:keydown.escape)': 'chat.open.set(false)' },
  template: `
    @if (!chat.open()) {
      <button class="chat-fab" aria-label="Open help chat" (click)="chat.open.set(true)">Help</button>
    }

    @if (chat.open()) {
      <section class="chat-panel" role="dialog" aria-label="Customer help chat">
        <header class="chat-head">
          <strong>PageTurner Help</strong>
          <button class="icon-btn" aria-label="Close chat" (click)="chat.open.set(false)">&times;</button>
        </header>

        <div #log class="chat-log" role="log" aria-live="polite">
          @for (m of chat.messages(); track m.id) {
            <div class="msg" [class.user]="m.from === 'user'">
              <p>{{ m.text }}</p>
              @if (m.portalUrl) {
                <a class="btn small" [href]="m.portalUrl" target="_blank" rel="noopener">Open support portal</a>
              }
              @if (m.escalateQuestion) {
                <button class="link-btn" (click)="chat.escalate(m.escalateQuestion, 'No problem.')">
                  Not what you needed? Talk to support
                </button>
              }
            </div>
          }
          @if (!chat.hasUserMessages()) {
            <div class="chat-starters">
              @for (s of chat.starters; track s) {
                <button class="chip" (click)="chat.send(s)">{{ s }}</button>
              }
            </div>
          }
        </div>

        <form class="chat-form" (submit)="submit($event, box)">
          <label for="chatInput" class="sr-only">Type your question</label>
          <input #box id="chatInput" autocomplete="off" placeholder="Ask about shipping, returns…" />
          <button class="btn small" type="submit">Send</button>
        </form>
      </section>
    }
  `
})
export class ChatComponent {
  protected readonly chat = inject(ChatService);
  private readonly log = viewChild<ElementRef<HTMLElement>>('log');
  private readonly box = viewChild<ElementRef<HTMLInputElement>>('box');

  constructor() {
    effect(() => {
      this.chat.messages();
      this.chat.open();
      setTimeout(() => {
        const el = this.log()?.nativeElement;
        if (el) el.scrollTop = el.scrollHeight;
      });
    });
    effect(() => {
      if (this.chat.open()) setTimeout(() => this.box()?.nativeElement.focus());
    });
  }

  protected submit(e: Event, input: HTMLInputElement): void {
    e.preventDefault();
    this.chat.send(input.value);
    input.value = '';
  }
}
