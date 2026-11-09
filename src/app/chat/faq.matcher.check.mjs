// Run: node --experimental-strip-types src/app/chat/faq.matcher.check.mjs   (Node >= 22.18 strips types by default)
import { FAQS } from './faq.data.ts';
import { buildIndex, findAnswer, wantsHuman } from './faq.matcher.ts';

const index = buildIndex(FAQS);
let failed = 0;
const eq = (name, got, want) => {
  const ok = got === want;
  if (!ok) failed++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}  ->  got ${got}, want ${want}`);
};

// Data integrity
eq('FAQ count', FAQS.length, 100);
eq('unique ids', new Set(FAQS.map((f) => f.id)).size, 100);
eq('ids are 1..100', FAQS.every((f, i) => f.id === i + 1), true);

// Every canonical question must resolve to itself
const selfMiss = FAQS.filter((f) => findAnswer(f.q, index)?.faq.id !== f.id).map((f) => f.id);
eq('every canonical question matches itself (misses: ' + selfMiss.join(',') + ')', selfMiss.length, 0);

// Paraphrases -> expected FAQ id
const cases = [
  ['where is my package', 2],
  ['how much does shipping cost', 16],
  ['what is your return policy', 31],
  ['can I pay with paypal', 46],
  ['I forgot my password', 56],
  ['do you ship to other countries', [20, 21]],
  ['how long until my refund arrives', 33],
  ['my parcel arrived broken', 25],
  ['do you offer student discount', 87],
  ['how can I cancel my order', 4],
  ['what are your support hours', 94],
  ['do you sell ebooks', 69]
];
for (const [q, id] of cases) {
  const got = findAnswer(q, index)?.faq.id ?? null;
  const ids = [].concat(id);
  eq(`"${q}"`, ids.includes(got), true);
}

// New / unrelated questions must NOT match (-> escalate)
const unknown = [
  'can you recommend a vegan restaurant near me',
  'what is the capital of france',
  'asdf qwerty',
  'my kid spilled juice on the library copy I borrowed'
];
for (const q of unknown) eq(`unknown "${q}"`, findAnswer(q, index)?.faq.id ?? null, null);

// Human hand-off intent
eq('wantsHuman: talk to a human', wantsHuman('I want to talk to a human'), true);
eq('wantsHuman: complaint', wantsHuman('I have a complaint'), true);
eq('wantsHuman: normal q', wantsHuman('how much is shipping'), false);

console.log(failed ? `\n${failed} FAILED` : '\nAll checks passed');
process.exit(failed ? 1 : 0);
