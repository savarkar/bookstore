import { Injectable, computed, signal } from '@angular/core';
import { FAQS, STARTER_IDS, SUPPORT_PORTAL_URL } from './faq.data';
import { buildIndex, findAnswer, wantsHuman } from './faq.matcher';

export interface Ticket {
  id: string;
  question: string;
  createdAt: string;
}

export interface ChatMessage {
  id: number;
  from: 'bot' | 'user';
  text: string;
  /** Set when the message routed the customer to the support portal. */
  ticket?: Ticket;
  portalUrl?: string;
  /** Offer a "Talk to support" button under an FAQ answer. */
  escalateQuestion?: string;
}

const TICKETS_KEY = 'pageturner.tickets.v1';
const GREETING =
  'Hi! I can answer common questions about orders, shipping, returns, payments and your account. Try one of these, or type your own:';

function loadTickets(): Ticket[] {
  try {
    return JSON.parse(localStorage.getItem(TICKETS_KEY) ?? '[]') || [];
  } catch {
    return [];
  }
}

@Injectable({ providedIn: 'root' })
export class ChatService {
  private readonly index = buildIndex(FAQS);
  private nextId = 1;

  readonly open = signal(false);
  readonly messages = signal<ChatMessage[]>([{ id: this.nextId++, from: 'bot', text: GREETING }]);
  readonly tickets = signal<Ticket[]>(loadTickets());
  readonly starters = STARTER_IDS.map((id) => FAQS.find((f) => f.id === id)!.q);
  readonly hasUserMessages = computed(() => this.messages().some((m) => m.from === 'user'));

  send(raw: string): void {
    const text = raw.trim();
    if (!text) return;
    this.push({ from: 'user', text });

    if (wantsHuman(text)) {
      this.escalate(text, 'Sure, I will pass this to our support team.');
      return;
    }

    const match = findAnswer(text, this.index);
    if (match) {
      this.push({ from: 'bot', text: match.faq.a, escalateQuestion: text });
    } else {
      this.escalate(text, "I don't have an answer for that yet, so I have passed it to our support team.");
    }
  }

  /** Creates a support ticket (stored locally in this demo) and points the customer at the portal. */
  escalate(question: string, intro: string): void {
    const ticket: Ticket = {
      id: 'PT-' + Math.floor(100000 + Math.random() * 900000),
      question,
      createdAt: new Date().toISOString()
    };
    this.tickets.update((t) => [...t, ticket]);
    localStorage.setItem(TICKETS_KEY, JSON.stringify(this.tickets()));

    const portalUrl = `${SUPPORT_PORTAL_URL}?ref=${ticket.id}&subject=${encodeURIComponent(question)}`;
    this.push({
      from: 'bot',
      text: `${intro} Your reference is ${ticket.id}. An agent will reply within 1 business day.`,
      ticket,
      portalUrl
    });
  }

  private push(m: Omit<ChatMessage, 'id'>): void {
    this.messages.update((list) => [...list, { id: this.nextId++, ...m }]);
  }
}
