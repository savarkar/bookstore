(() => {
  'use strict';

  const BOOKS = [
    { id: 1, title: 'The Silent Orchard', author: 'Maya Lindqvist', category: 'Fiction', price: 14.99, rating: 4.5, color: '#b4442c', desc: 'A quiet family secret unravels over one long, golden harvest season.' },
    { id: 2, title: 'Orbital Drift', author: 'Kenji Arai', category: 'Sci-Fi', price: 17.5, rating: 4.7, color: '#2b4a8f', desc: 'A salvage crew finds a derelict ship that is not as empty as it seems.' },
    { id: 3, title: 'Clean Code Habits', author: 'Rosa Delgado', category: 'Technology', price: 39.0, rating: 4.8, color: '#1f6f5c', desc: 'Practical, language-agnostic habits for writing code teams enjoy maintaining.' },
    { id: 4, title: 'Salt & Smoke', author: 'Tomas Reyes', category: 'Cooking', price: 28.0, rating: 4.4, color: '#7a3b1e', desc: 'Fire-cooked recipes and the stories behind them, from coast to mountain.' },
    { id: 5, title: 'The Cartographer\'s Wife', author: 'Imani Okafor', category: 'Fiction', price: 12.99, rating: 4.2, color: '#5b3a77', desc: 'A historical novel of love and maps in 18th-century Lagos.' },
    { id: 6, title: 'Mind the Gap', author: 'Priya Natarajan', category: 'Self-Help', price: 16.0, rating: 4.0, color: '#c07d00', desc: 'A gentle guide to closing the distance between intention and action.' },
    { id: 7, title: 'Neon Requiem', author: 'Jax Moreau', category: 'Sci-Fi', price: 15.25, rating: 4.3, color: '#7c1d6f', desc: 'A cyberpunk detective hunts a killer who exists only as data.' },
    { id: 8, title: 'A Brief History of Rivers', author: 'Elena Fischer', category: 'Non-Fiction', price: 21.0, rating: 4.6, color: '#1b6a8a', desc: 'How rivers shaped civilizations, borders, and the future of water.' },
    { id: 9, title: 'JavaScript Unpacked', author: 'Sam Whitaker', category: 'Technology', price: 34.5, rating: 4.5, color: '#8a7a00', desc: 'A clear tour of the language from closures to modern async patterns.' },
    { id: 10, title: 'Midnight at the Lighthouse', author: 'Corin Blake', category: 'Mystery', price: 13.75, rating: 4.1, color: '#233d4d', desc: 'Three guests, one storm, and a keeper who never came down.' },
    { id: 11, title: 'The Last Baker of Lisbon', author: 'Ana Ferreira', category: 'Fiction', price: 15.0, rating: 4.6, color: '#a85a32', desc: 'A warm story of bread, neighbours and a neighbourhood facing change.' },
    { id: 12, title: 'Deep Focus', author: 'Daniel Cho', category: 'Self-Help', price: 18.99, rating: 4.4, color: '#2f6b3a', desc: 'Science-backed routines for doing meaningful work in a distracted world.' },
    { id: 13, title: 'Whispers in the Fog', author: 'Helen Marsh', category: 'Mystery', price: 11.99, rating: 3.9, color: '#4d5560', desc: 'A village, a missing teacher, and a town that prefers silence.' },
    { id: 14, title: 'Pasta by Hand', author: 'Giulia Romano', category: 'Cooking', price: 26.5, rating: 4.7, color: '#c4452b', desc: 'Shapes, doughs and sauces from every region of Italy.' },
    { id: 15, title: 'Edge of Tomorrow\'s Sky', author: 'Noor Haddad', category: 'Sci-Fi', price: 16.75, rating: 4.5, color: '#14507a', desc: 'The first generation born on Mars must decide if Earth is still home.' },
    { id: 16, title: 'Money, Simply', author: 'Victor Lam', category: 'Non-Fiction', price: 19.0, rating: 4.3, color: '#3a6b2a', desc: 'Personal finance explained without jargon or judgement.' }
  ];

  const STORAGE_KEY = 'pageturner.cart.v1';
  const $ = (s) => document.querySelector(s);
  const fmt = (n) => '$' + n.toFixed(2);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const state = { category: 'All', query: '', sort: 'featured', cart: load() };

  function load() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch { return {}; }
  }
  function save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cart)); }

  const stars = (r) => '★'.repeat(Math.round(r)) + '☆'.repeat(5 - Math.round(r));
  const coverHTML = (b, cls = '') =>
    `<div class="cover ${cls}" style="background:linear-gradient(160deg, ${b.color}, #111)">
       <span class="c-title">${esc(b.title)}</span><span class="c-author">${esc(b.author)}</span></div>`;

  /* ---------- Catalog ---------- */
  function renderChips() {
    const cats = ['All', ...new Set(BOOKS.map((b) => b.category))];
    $('#categoryChips').innerHTML = cats
      .map((c) => `<button class="chip" data-cat="${esc(c)}" aria-pressed="${c === state.category}">${esc(c)}</button>`)
      .join('');
  }

  function visibleBooks() {
    const q = state.query.trim().toLowerCase();
    let list = BOOKS.filter((b) =>
      (state.category === 'All' || b.category === state.category) &&
      (!q || b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q)));
    const sorters = {
      'price-asc': (a, b) => a.price - b.price,
      'price-desc': (a, b) => b.price - a.price,
      rating: (a, b) => b.rating - a.rating,
      title: (a, b) => a.title.localeCompare(b.title)
    };
    if (sorters[state.sort]) list = [...list].sort(sorters[state.sort]);
    return list;
  }

  function renderGrid() {
    const list = visibleBooks();
    $('#bookGrid').innerHTML = list.map((b) => `
      <article class="card">
        <button class="cover-btn" data-view="${b.id}" aria-label="View details for ${esc(b.title)}">${coverHTML(b)}</button>
        <div class="card-body">
          <h3 class="card-title">${esc(b.title)}</h3>
          <p class="card-author">${esc(b.author)}</p>
          <span class="rating" aria-label="Rated ${b.rating} out of 5">${stars(b.rating)} ${b.rating}</span>
          <div class="card-foot">
            <span class="price">${fmt(b.price)}</span>
            <button class="btn small" data-add="${b.id}">Add</button>
          </div>
        </div>
      </article>`).join('');
    $('#emptyMsg').hidden = list.length > 0;
    $('#resultCount').textContent = `${list.length} book${list.length === 1 ? '' : 's'}`;
  }

  /* ---------- Cart ---------- */
  const cartEntries = () => Object.entries(state.cart)
    .map(([id, qty]) => ({ book: BOOKS.find((b) => b.id === +id), qty }))
    .filter((e) => e.book);

  function renderCart() {
    const entries = cartEntries();
    const count = entries.reduce((n, e) => n + e.qty, 0);
    const total = entries.reduce((n, e) => n + e.qty * e.book.price, 0);
    $('#cartCount').textContent = count;
    $('#cartTotal').textContent = fmt(total);
    $('#checkoutBtn').disabled = count === 0;
    $('#cartList').innerHTML = entries.length
      ? entries.map(({ book: b, qty }) => `
        <li class="cart-item">
          ${coverHTML(b, 'mini-cover').replace(/<span.*?<\/span>/g, '')}
          <div>
            <div class="ci-title">${esc(b.title)}</div>
            <div class="ci-meta">${fmt(b.price)} each</div>
            <div class="qty">
              <button data-dec="${b.id}" aria-label="Decrease quantity">−</button>
              <span aria-live="polite">${qty}</span>
              <button data-inc="${b.id}" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <div><strong>${fmt(b.price * qty)}</strong><br><button class="remove" data-remove="${b.id}">Remove</button></div>
        </li>`).join('')
      : '<li class="cart-empty">Your cart is empty.</li>';
  }

  function setQty(id, qty) {
    if (qty <= 0) delete state.cart[id]; else state.cart[id] = qty;
    save(); renderCart();
  }

  function openCart(open) {
    $('#cartDrawer').classList.toggle('open', open);
    $('#cartDrawer').setAttribute('aria-hidden', String(!open));
    $('#cartBtn').setAttribute('aria-expanded', String(open));
    $('#overlay').hidden = !open;
    if (open) $('#closeCart').focus(); else $('#cartBtn').focus();
  }

  let toastTimer;
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg; t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 1800);
  }

  function addToCart(id) {
    setQty(id, (state.cart[id] || 0) + 1);
    toast(`Added "${BOOKS.find((b) => b.id === id).title}" to cart`);
  }

  /* ---------- Details dialog ---------- */
  function showBook(id) {
    const b = BOOKS.find((x) => x.id === id);
    $('#dlgBody').innerHTML = `
      ${coverHTML(b)}
      <div>
        <h2 id="dlgTitle">${esc(b.title)}</h2>
        <div class="card-author">by ${esc(b.author)} · ${esc(b.category)}</div>
        <div class="rating">${stars(b.rating)} ${b.rating}</div>
        <p>${esc(b.desc)}</p>
        <p class="price" style="color:inherit;font-size:1.3rem">${fmt(b.price)}</p>
        <button class="btn" data-add="${b.id}">Add to cart</button>
      </div>`;
    $('#bookDialog').showModal();
  }

  /* ---------- Events ---------- */
  document.addEventListener('click', (e) => {
    const t = e.target.closest('button');
    if (!t) return;
    const d = t.dataset;
    if (d.cat) { state.category = d.cat; renderChips(); renderGrid(); }
    else if (d.add) addToCart(+d.add);
    else if (d.view) showBook(+d.view);
    else if (d.inc) setQty(+d.inc, state.cart[d.inc] + 1);
    else if (d.dec) setQty(+d.dec, state.cart[d.dec] - 1);
    else if (d.remove) setQty(+d.remove, 0);
  });

  $('#searchForm').addEventListener('submit', (e) => e.preventDefault());
  $('#searchInput').addEventListener('input', (e) => { state.query = e.target.value; renderGrid(); });
  $('#sortSelect').addEventListener('change', (e) => { state.sort = e.target.value; renderGrid(); });
  $('#cartBtn').addEventListener('click', () => openCart(true));
  $('#closeCart').addEventListener('click', () => openCart(false));
  $('#overlay').addEventListener('click', () => openCart(false));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && $('#cartDrawer').classList.contains('open')) openCart(false); });
  $('#closeDialog').addEventListener('click', () => $('#bookDialog').close());
  $('#bookDialog').addEventListener('click', (e) => { if (e.target === e.currentTarget) e.currentTarget.close(); });
  $('#checkoutBtn').addEventListener('click', () => {
    state.cart = {}; save(); renderCart(); openCart(false);
    toast('Thanks! Order placed (demo).');
  });

  $('#year').textContent = new Date().getFullYear();
  renderChips(); renderGrid(); renderCart();
})();
