export interface Faq {
  id: number;
  /** Canonical customer question */
  q: string;
  /** Static answer */
  a: string;
  /** Extra synonyms / keywords used for matching */
  k?: string;
}
