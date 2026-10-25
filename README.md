# PageTurner Books – Responsive eCommerce Bookstore

A dependency-free, responsive front-end for an online bookstore, built with HTML, CSS and vanilla JavaScript using IBM Bob as the agentic coding assistant.

## Features
- Mobile-first responsive layout (2 → 3 → 4 → 5 column grid; stacked → inline header)
- Search by title/author, category filter chips, sorting (price, rating, title)
- Product detail modal (native `<dialog>`)
- Cart drawer with quantity controls, totals, and `localStorage` persistence
- Demo checkout, toast notifications
- Accessibility: skip link, ARIA labels/live regions, focus styles, keyboard (Esc) support, reduced-motion support
- No external assets: book covers are generated with CSS

## Run
Open `index.html` in a browser, or serve the folder:

```
npx serve .
```

## Structure
```
index.html
css/styles.css
js/app.js
```

## Built with IBM Bob
Bob scaffolded the structure, generated the catalog data, implemented the responsive CSS and cart logic, and reviewed accessibility.
