import type { Faq } from './faq.model';

const STOP = new Set([
  'a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'am', 'do', 'does', 'did', 'i', 'my', 'me', 'we', 'our',
  'you', 'your', 'can', 'could', 'would', 'should', 'will', 'how', 'what', 'where', 'when', 'why', 'which',
  'who', 'to', 'of', 'for', 'in', 'on', 'it', 'its', 'and', 'or', 'if', 'with', 'at', 'by', 'from', 'this',
  'that', 'there', 'any', 'about', 'please', 'hi', 'hello', 'hey', 'thanks', 'thank', 'want', 'need', 'have',
  'has', 'get', 'some', 'tell', 'know', 'not', 'no', 'but', 'so', 'im', 'until'
]);

/** Very small stemmer so "shipping", "ships" and "shipped" all match "ship". */
function stem(w: string): string {
  if (w.length > 4 && w.endsWith('ies')) w = w.slice(0, -3) + 'y';
  else if (w.length > 3 && w.endsWith('s') && !w.endsWith('ss')) w = w.slice(0, -1);
  if (w.length > 5 && w.endsWith('ing')) w = w.slice(0, -3);
  else if (w.length > 4 && w.endsWith('ed')) w = w.slice(0, -2);
  if (w.length > 3 && w[w.length - 1] === w[w.length - 2] && !/[aeiou]/.test(w[w.length - 1])) w = w.slice(0, -1);
  if (w.length > 4 && w.endsWith('e')) w = w.slice(0, -1);
  return w;
}

export function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w && !STOP.has(w))
    .map(stem);
}

export interface FaqMatch {
  faq: Faq;
  score: number;
}

/** Minimum share of the customer's meaningful words that must appear in the FAQ entry. */
const MIN_COVERAGE = 0.6;

export function buildIndex(faqs: Faq[]): { faq: Faq; words: Set<string> }[] {
  return faqs.map((faq) => ({ faq, words: new Set(tokenize(`${faq.q} ${faq.k ?? ''}`)) }));
}

/** Returns the best FAQ for the query, or null when nothing is a confident match. */
export function findAnswer(query: string, index: ReturnType<typeof buildIndex>): FaqMatch | null {
  const words = [...new Set(tokenize(query))];
  if (!words.length) return null;

  let best: FaqMatch | null = null;
  for (const { faq, words: entryWords } of index) {
    const hits = words.filter((w) => entryWords.has(w)).length;
    if (!hits) continue;
    const coverage = hits / words.length;
    if (coverage < MIN_COVERAGE) continue;
    const score = 0.7 * coverage + 0.3 * (hits / entryWords.size);
    if (!best || score > best.score) best = { faq, score };
  }
  return best;
}

/** True when the customer explicitly asks for a person / wants to raise a complaint. */
export function wantsHuman(text: string): boolean {
  return /\b(human|agent|representative|real person|complain|complaint|speak to|talk to|raise a ticket|create a ticket|open a ticket)\b/i.test(text);
}
