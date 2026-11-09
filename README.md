# PageTurner Books – Angular Storefront

Responsive eCommerce bookstore front-end built with Angular (standalone components, signals, new control flow), developed with IBM Bob as the agentic coding assistant.

## Run
```
npm install
npm start        # http://localhost:4200
npm run build
```

## Architecture
| Piece | Role |
|---|---|
| `CatalogService` | Catalog, search / category / sort state as signals, `visible` computed |
| `CartService` | Cart quantities (signal), totals (computed), `localStorage` persistence (effect) |
| `ToastService` | Notification state |
| `HeaderComponent`, `CatalogComponent`, `CartDrawerComponent`, `BookDialogComponent`, `ToastComponent`, `CoverComponent` | OnPush UI components |

Responsive, mobile-first CSS in `src/styles.css` (2 → 3 → 4 → 5 column grid, stacked → inline header). Accessibility: skip link, ARIA labels/live regions, focus management, Esc to close, reduced-motion support.

## Demo use case: "Back-to-School Bundle" for a campus bookstore client
**Persona:** Aisha, a first-year student on a phone between lectures.
**Goal:** Find and buy required Technology and Self-Help titles under budget.

Demo flow (~3 min):
1. Open on a phone-width viewport; show the stacked header and 2-column grid.
2. Filter by **Technology**, sort by **Price: low to high**.
3. Search "code"; open *Clean Code Habits* in the detail dialog; add it to the cart.
4. Switch to **Self-Help**, add *Deep Focus*.
5. Open the cart drawer; adjust quantity, check the total, refresh the page to show cart persistence.
6. Check out (demo), then widen the viewport to show the 3 → 4 → 5 column layouts.

Future extensions: real catalog API (`HttpClient`), routing for product pages, a "bundle discount" rule in `CartService`, payment gateway integration.

## How IBM Bob was used
1. Reviewed the existing vanilla JS prototype and chose an Angular migration path.
2. Scaffolded the Angular CLI workspace.
3. Split the monolithic script into services (state) and components (UI).
4. Reused the responsive CSS and catalog data unchanged.
5. Ran `ng build` to validate; removed unused imports.

## Help chat (FAQ bot + support escalation)
A floating **Help** button opens a chat that answers repetitive customer questions from a repository of **100 static FAQs** (orders, shipping, returns, payments, account, products, digital, offers, support) in [src/app/chat/faq.data.ts](src/app/chat/faq.data.ts).

- **Known question** -> instant canned answer (keyword matching with stop-words and light stemming, [aq.matcher.ts](src/app/chat/faq.matcher.ts)). Each answer also has a "Talk to support" link.
- **New / unmatched question**, or the customer asks for a human/complaint -> a ticket reference (`PT-123456`) is created and an **Open support portal** button links to the portal with the reference and question pre-filled.
- Policies in the FAQ (30-day returns, $4.99 shipping, etc.) are **sample values** - replace them with the client's real ones.
- `SUPPORT_PORTAL_URL` in `faq.data.ts` is a placeholder; point it at the client's portal (Zendesk, ServiceNow, ...). Tickets are only stored in `localStorage` in this demo; a real integration would POST them to the portal's API from `ChatService.escalate`.

Checks: `node --no-warnings src/app/chat/faq.matcher.check.mjs` (data integrity, paraphrases, unknown questions).
