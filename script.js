/* ============================================
   ANAMTA FURNITURE CRAFTERS - MAIN JS
   ============================================ */

// ---- Products Data ----
const PRODUCTS = [
  {
    id: 1,
    name: "Sheesham King Size Bed",
    category: "beds",
    categoryLabel: "Sheesham Beds",
    price: 48500,
    oldPrice: 58000,
    rating: 5,
    reviews: 24,
    badge: "best",
    badgeLabel: "Best Seller",
    description: "Handcrafted from premium Sheesham wood, this king-size bed features intricate carvings and a sturdy structure. Perfect blend of traditional craftsmanship and modern comfort.",
    materials: ["Natural Sheesham", "Honey Oak", "Walnut Finish"],
    icon: "bed",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600&q=80"
  },
  {
    id: 2,
    name: "Vintage Carved Sofa",
    category: "sofas",
    categoryLabel: "Luxury Sofas",
    price: 67000,
    oldPrice: 82000,
    rating: 5,
    reviews: 18,
    badge: "sale",
    badgeLabel: "Sale",
    description: "A masterpiece of traditional woodworking, this vintage carved sofa features hand-carved details on solid wood frame with premium upholstery.",
    materials: ["Premium Fabric", "Velvet", "Leather"],
    icon: "sofa",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80"
  },
  {
    id: 3,
    name: "Luxury 3 Seater Sofa",
    category: "sofas",
    categoryLabel: "Luxury Sofas",
    price: 54000,
    oldPrice: null,
    rating: 5,
    reviews: 31,
    badge: "new",
    badgeLabel: "New",
    description: "Contemporary 3-seater sofa with solid Sheesham wood legs and premium cushioning. Offers exceptional comfort for your living room.",
    materials: ["Premium Fabric", "Velvet", "Linen"],
    icon: "sofa",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80"
  },
  {
    id: 4,
    name: "Antique Wooden Chair",
    category: "antique",
    categoryLabel: "Antique Furniture",
    price: 18500,
    oldPrice: 23000,
    rating: 5,
    reviews: 12,
    badge: null,
    badgeLabel: null,
    description: "Replica of 19th-century royal chairs with hand-carved armrests and backrests. Crafted from aged Sheesham wood with traditional joinery.",
    materials: ["Natural Sheesham", "Teak", "Rosewood"],
    icon: "chair",
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80"
  },
  {
    id: 5,
    name: "Sheesham Dining Table",
    category: "dining",
    categoryLabel: "Dining Tables",
    price: 38000,
    oldPrice: 45000,
    rating: 5,
    reviews: 22,
    badge: "best",
    badgeLabel: "Best Seller",
    description: "6-seater dining table crafted from solid Sheesham wood with a natural grain finish. Features sturdy legs and a smooth, polished top surface.",
    materials: ["Natural Sheesham", "Dark Walnut", "Light Oak"],
    icon: "table",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80"
  },
  {
    id: 6,
    name: "Royal Wooden Wardrobe",
    category: "custom",
    categoryLabel: "Custom Furniture",
    price: 72000,
    oldPrice: 88000,
    rating: 5,
    reviews: 15,
    badge: "sale",
    badgeLabel: "Sale",
    description: "Majestic 4-door wardrobe with hand-carved panels, mirror, and multiple storage compartments. Built to last generations with solid Sheesham wood.",
    materials: ["Natural Sheesham", "Walnut", "Mahogany"],
    icon: "wardrobe",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
  },
  {
    id: 7,
    name: "Classic Coffee Table",
    category: "dining",
    categoryLabel: "Dining Tables",
    price: 22000,
    oldPrice: 27000,
    rating: 5,
    reviews: 28,
    badge: null,
    badgeLabel: null,
    description: "Elegant coffee table with under-shelf storage and hand-carved legs. The natural Sheesham grain adds warmth and character to any living space.",
    materials: ["Natural Sheesham", "Honey Oak", "Dark Walnut"],
    icon: "table",
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&q=80"
  },
  {
    id: 8,
    name: "Traditional Wooden Cabinet",
    category: "antique",
    categoryLabel: "Antique Furniture",
    price: 31000,
    oldPrice: null,
    rating: 4.5,
    reviews: 9,
    badge: "new",
    badgeLabel: "New",
    description: "Multi-purpose wooden cabinet with traditional brass fittings and hand-painted floral motifs. Perfect for displaying collectibles and storing essentials.",
    materials: ["Natural Sheesham", "Rosewood", "Teak"],
    icon: "cabinet",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80"
  },
  {
    id: 9,
    name: "Premium Recliner Sofa",
    category: "sofas",
    categoryLabel: "Luxury Sofas",
    price: 89000,
    oldPrice: 105000,
    rating: 5,
    reviews: 19,
    badge: "best",
    badgeLabel: "Best Seller",
    description: "Premium 2-seater recliner with solid Sheesham wood arms, built-in USB charging, and high-density foam cushions wrapped in genuine leather.",
    materials: ["Genuine Leather", "Premium Leatherette", "Velvet"],
    icon: "sofa",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80"
  },
  {
    id: 10,
    name: "Handcrafted Study Table",
    category: "custom",
    categoryLabel: "Custom Furniture",
    price: 26000,
    oldPrice: 32000,
    rating: 5,
    reviews: 16,
    badge: null,
    badgeLabel: null,
    description: "Spacious study table with built-in bookshelf, drawer unit, and cable management. Handcrafted from solid Sheesham wood for lasting durability.",
    materials: ["Natural Sheesham", "Honey Oak", "Walnut"],
    icon: "table",
    image: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&q=80"
  },
  {
    id: 11,
    name: "Antique Display Cabinet",
    category: "antique",
    categoryLabel: "Antique Furniture",
    price: 42000,
    oldPrice: 52000,
    rating: 5,
    reviews: 11,
    badge: "sale",
    badgeLabel: "Sale",
    description: "Elegant glass-fronted display cabinet with hand-carved wooden frame and interior lighting. Ideal for showcasing prized possessions and antiques.",
    materials: ["Natural Sheesham", "Dark Teak", "Aged Oak"],
    icon: "cabinet",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80"
  },
  {
    id: 12,
    name: "Sheesham Bedside Table",
    category: "beds",
    categoryLabel: "Sheesham Beds",
    price: 12000,
    oldPrice: 15000,
    rating: 5,
    reviews: 34,
    badge: null,
    badgeLabel: null,
    description: "Compact bedside table with drawer and open shelf, crafted from solid Sheesham wood. Pairs perfectly with any Anamta bed collection.",
    materials: ["Natural Sheesham", "Honey Oak", "Walnut"],
    icon: "table",
    image: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?w=600&q=80"
  }
];

const REVIEWS = [
  { name: "Rajesh Kumar", initials: "RK", rating: 5, date: "2 months ago", text: "Absolutely outstanding quality! The Sheesham King Size Bed I purchased exceeded all my expectations. The craftsmanship is impeccable and the delivery was prompt. Highly recommend Anamta Furniture Crafters to everyone." },
  { name: "Priya Sharma", initials: "PS", rating: 5, date: "3 months ago", text: "Very best service and excellent product quality. The staff was extremely helpful in choosing the right furniture for my home. The Vintage Carved Sofa looks like a masterpiece in my living room." },
  { name: "Anil Mehta", initials: "AM", rating: 5, date: "1 month ago", text: "Great furniture collection and incredibly helpful staff. Visited the showroom and was impressed by the variety. Ordered a custom dining table and it was delivered perfectly on time." },
  { name: "Sunita Joshi", initials: "SJ", rating: 5, date: "4 months ago", text: "Beautiful Sheesham wood furniture and fast delivery. The quality is unmatched at this price point. My entire bedroom set from Anamta is just gorgeous. Will definitely order again!" },
  { name: "Vikram Singh", initials: "VS", rating: 5, date: "5 months ago", text: "I'm thoroughly impressed with the antique wardrobe I purchased. The hand-carved details are stunning, and the wood quality is premium. This is true luxury furniture at an affordable price." },
  { name: "Meera Agarwal", initials: "MA", rating: 5, date: "6 months ago", text: "Exceptional customer service! They helped me design custom furniture for my new home. Every piece was crafted exactly as I imagined. The Sheesham wood finish is just beautiful." },
  { name: "Deepak Verma", initials: "DV", rating: 5, date: "2 weeks ago", text: "Outstanding experience from start to finish. The showroom in Basni MIA is well-organized and the staff is knowledgeable. My new sofa set is the talk of every guest who visits my home." },
  { name: "Kavitha Nair", initials: "KN", rating: 5, date: "3 weeks ago", text: "Perfect blend of traditional craftsmanship and modern design. The coffee table I bought is a showstopper in my living room. Excellent after-sales service too. 5 stars without hesitation!" },
  { name: "Ramesh Patel", initials: "RP", rating: 5, date: "7 months ago", text: "Anamta Furniture Crafters truly lives up to its premium reputation. The quality of Sheesham wood they use is the best I've seen. My family is very happy with all the furniture we bought." }
];

// ---- Cart System ----
const Cart = {
  items: JSON.parse(localStorage.getItem('anamta_cart') || '[]'),

  save() {
    localStorage.setItem('anamta_cart', JSON.stringify(this.items));
    this.updateBadge();
  },

  add(product, qty = 1) {
    const existing = this.items.find(i => i.id === product.id);
    if (existing) {
      existing.qty += qty;
    } else {
      this.items.push({ ...product, qty });
    }
    this.save();
    showToast(`${product.name}`, 'Added to cart!');
  },

  remove(id) {
    this.items = this.items.filter(i => i.id !== id);
    this.save();
  },

  updateQty(id, qty) {
    const item = this.items.find(i => i.id === id);
    if (item) {
      item.qty = Math.max(1, qty);
      this.save();
    }
  },

  getTotal() {
    return this.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  },

  getCount() {
    return this.items.reduce((sum, i) => sum + i.qty, 0);
  },

  updateBadge() {
    const count = this.getCount();
    document.querySelectorAll('.cart-badge').forEach(b => {
      b.textContent = count;
      b.style.display = count > 0 ? 'flex' : 'none';
    });
  }
};

// ---- Utility Functions ----
function formatPrice(p) {
  return '₹' + p.toLocaleString('en-IN');
}

function getProductIcon(icon) {
  const icons = {
    bed: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M2 9V5a2 2 0 012-2h16a2 2 0 012 2v4M2 9h20M2 9v10M22 9v10M2 19h20M7 9V7a1 1 0 011-1h8a1 1 0 011 1v2"/></svg>`,
    sofa: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M3 13V8a1 1 0 011-1h16a1 1 0 011 1v5M3 13H1v4h22v-4h-2M3 13h18M5 17v2M19 17v2M8 9h8"/></svg>`,
    chair: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M4 19V10a2 2 0 012-2h12a2 2 0 012 2v9M4 19h16M8 10V6a2 2 0 012-2h4a2 2 0 012 2v4M8 19v2M16 19v2"/></svg>`,
    table: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="2" y="7" width="20" height="3" rx="1"/><path d="M5 10v8M19 10v8M8 18h8"/></svg>`,
    wardrobe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="3" y="2" width="18" height="20" rx="1"/><path d="M12 2v20M7 11h2M15 11h2"/></svg>`,
    cabinet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 12h18M8 7.5v1M16 7.5v1M8 16.5v1M16 16.5v1"/></svg>`
  };
  return icons[icon] || icons.table;
}

function showToast(title, sub = '') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    toast.id = 'toast';
    toast.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
      <div class="toast-text">
        <div class="toast-title"></div>
        <div class="toast-sub"></div>
      </div>`;
    document.body.appendChild(toast);
  }
  toast.querySelector('.toast-title').textContent = title;
  toast.querySelector('.toast-sub').textContent = sub;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3200);
}

// ---- Navigation ----
function initNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const overlayBg = document.getElementById('overlayBg');
  const mobileNavClose = document.getElementById('mobileNavClose');
  const searchBtn = document.getElementById('searchBtn');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchClose = document.getElementById('searchClose');
  const searchInput = document.getElementById('searchInput');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.add('open');
      overlayBg.classList.add('show');
    });
  }
  if (mobileNavClose) {
    mobileNavClose.addEventListener('click', closeNav);
  }
  if (overlayBg) {
    overlayBg.addEventListener('click', closeNav);
  }
  function closeNav() {
    if (mobileNav) mobileNav.classList.remove('open');
    if (overlayBg) overlayBg.classList.remove('show');
  }

  if (searchBtn && searchOverlay) {
    searchBtn.addEventListener('click', () => {
      searchOverlay.classList.add('active');
      setTimeout(() => searchInput?.focus(), 100);
    });
  }
  if (searchClose) {
    searchClose.addEventListener('click', () => {
      searchOverlay.classList.remove('active');
    });
  }
  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
          window.location.href = `shop.html?search=${encodeURIComponent(query)}`;
        }
      }
      if (e.key === 'Escape') {
        searchOverlay.classList.remove('active');
      }
    });
  }

  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach(a => {
    if (a.getAttribute('href') === currentPage || 
        (currentPage === '' && a.getAttribute('href') === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Header scroll
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // Init cart badge
  Cart.updateBadge();
}

// ---- Product Card HTML ----
function createProductCard(p) {
  const badgeHtml = p.badge ? `<span class="product-badge badge-${p.badge}">${p.badgeLabel}</span>` : '';
  const oldPriceHtml = p.oldPrice ? `<span class="product-price-old">${formatPrice(p.oldPrice)}</span>` : '';
  const starsHtml = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 ? '½' : '');
  const imgHtml = p.image
    ? `<img src="${p.image}" alt="${p.name}" class="product-img" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
       <div class="product-placeholder" style="display:none;">${getProductIcon(p.icon)}<span>${p.categoryLabel}</span></div>`
    : `<div class="product-placeholder">${getProductIcon(p.icon)}<span>${p.categoryLabel}</span></div>`;

  return `
    <div class="product-card reveal" data-category="${p.category}" data-id="${p.id}">
      <div class="product-img-wrap">
        ${badgeHtml}
        ${imgHtml}
        <div class="product-actions">
          <button class="product-action-btn quick-view-btn" data-id="${p.id}" title="Quick View">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
          <button class="product-action-btn" title="Wishlist" onclick="showToast('Added to Wishlist', '${p.name}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">${p.categoryLabel}</div>
        <h3 class="product-name"><a href="product.html?id=${p.id}">${p.name}</a></h3>
        <div class="product-rating">
          <span class="stars-sm">${starsHtml}</span>
          <span class="count">(${p.reviews})</span>
        </div>
        <div class="product-price-row">
          <div>
            <span class="product-price">${formatPrice(p.price)}</span>
            ${oldPriceHtml}
          </div>
          <button class="add-to-cart-btn" onclick="Cart.add(PRODUCTS.find(x=>x.id===${p.id})); Cart.save()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            Add
          </button>
        </div>
      </div>
    </div>`;
}

// ---- Render Products Grid ----
function renderProducts(containerId, products, limit = null) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const list = limit ? products.slice(0, limit) : products;
  container.innerHTML = list.map(createProductCard).join('');
  initReveal();
  bindQuickView();
}

// ---- Filter Tabs ----
function initFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.dataset.category;
      const filtered = cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === cat);
      renderProducts('productsGrid', filtered);
    });
  });
}

// ---- Quick View Modal ----
function bindQuickView() {
  document.querySelectorAll('.quick-view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      const p = PRODUCTS.find(x => x.id === id);
      if (!p) return;
      openQuickView(p);
    });
  });
}

function openQuickView(p) {
  let modal = document.getElementById('quickViewModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'quickViewModal';
    document.body.appendChild(modal);
  }
  const stars = '★'.repeat(Math.floor(p.rating));
  modal.innerHTML = `
    <div class="modal">
      <button class="modal-close" onclick="document.getElementById('quickViewModal').classList.remove('active')">✕</button>
      <div class="modal-inner">
        <div class="modal-img">
          ${p.image
            ? `<img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none'">`
            : `${getProductIcon(p.icon)}<span>${p.name}</span>`}
        </div>
        <div class="modal-info">
          <div class="product-detail-category">${p.categoryLabel}</div>
          <h2 class="product-detail-title">${p.name}</h2>
          <div class="product-detail-rating">
            <span class="stars">${stars}</span>
            <span class="review-count-link">${p.reviews} reviews</span>
          </div>
          <div>
            <span class="product-detail-price">${formatPrice(p.price)}</span>
            ${p.oldPrice ? `<span class="price-compare">${formatPrice(p.oldPrice)}</span>` : ''}
          </div>
          <p style="font-size:0.88rem;color:var(--text-mid);line-height:1.75;margin:16px 0 24px;">${p.description}</p>
          <div class="product-cta-row">
            <button class="btn-add-cart" onclick="Cart.add(PRODUCTS.find(x=>x.id===${p.id})); document.getElementById('quickViewModal').classList.remove('active')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              Add to Cart
            </button>
            <a href="product.html?id=${p.id}" class="btn btn-outline" style="padding:16px 24px;font-size:0.78rem;">View Details</a>
          </div>
        </div>
      </div>
    </div>`;
  modal.classList.add('active');
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
}

// ---- Reveal on Scroll ----
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ---- Collections ----
const COLLECTIONS = [
  { name: "Sheesham Beds", count: "8 Products", category: "beds", icon: "bed",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=500&q=80" },
  { name: "Luxury Sofas", count: "10 Products", category: "sofas", icon: "sofa",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80" },
  { name: "Antique Pieces", count: "12 Products", category: "antique", icon: "cabinet",
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&q=80" },
  { name: "Dining Tables", count: "6 Products", category: "dining", icon: "table",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&q=80" },
  { name: "Custom Furniture", count: "Custom Order", category: "custom", icon: "wardrobe",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80" }
];

function renderCollections() {
  const grid = document.getElementById('collectionsGrid');
  if (!grid) return;
  grid.innerHTML = COLLECTIONS.map(c => `
    <a href="shop.html?category=${c.category}" class="collection-card reveal">
      ${c.image
        ? `<img src="${c.image}" alt="${c.name}" class="collection-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
        : ''}
      <div class="collection-placeholder" ${c.image ? 'style="display:none;"' : ''}>
        ${getProductIcon(c.icon)}
      </div>
      <div class="collection-info">
        <h3>${c.name}</h3>
        <span>${c.count}</span>
      </div>
      <div class="collection-arrow">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </div>
    </a>`).join('');
  initReveal();
}

// ---- Reviews ----
function renderReviews(containerId, limit = null) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const list = limit ? REVIEWS.slice(0, limit) : REVIEWS;
  container.innerHTML = list.map(r => `
    <div class="review-card reveal">
      <div class="reviewer-info">
        <div class="reviewer-avatar">${r.initials}</div>
        <div>
          <div class="reviewer-name">${r.name}</div>
          <div class="reviewer-date">${r.date}</div>
        </div>
      </div>
      <div class="stars-sm" style="margin-bottom:12px;">★★★★★</div>
      <p class="review-text">${r.text}</p>
    </div>`).join('');
  initReveal();
}

// ---- Cart Page ----
function renderCartPage() {
  const cartItems = document.getElementById('cartItems');
  const orderSummary = document.getElementById('orderSummary');
  if (!cartItems) return;

  if (Cart.items.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <h3>Your cart is empty</h3>
        <p>Looks like you haven't added any furniture yet.</p>
        <a href="shop.html" class="btn btn-primary">Browse Products</a>
      </div>`;
    if (orderSummary) orderSummary.innerHTML = '';
    return;
  }

  cartItems.innerHTML = `
    <table class="cart-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${Cart.items.map(item => `
          <tr>
            <td>
              <div class="cart-product">
                <div class="cart-img">
                  ${item.image
                    ? `<img src="${item.image}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none'">`
                    : getProductIcon(item.icon || 'table')}
                </div>
                <div>
                  <div class="cart-name"><a href="product.html?id=${item.id}">${item.name}</a></div>
                  <div class="cart-cat">${item.categoryLabel}</div>
                </div>
              </div>
            </td>
            <td><span class="cart-price">${formatPrice(item.price)}</span></td>
            <td>
              <div class="qty-control" style="display:inline-flex;">
                <button class="qty-btn" onclick="cartUpdateQty(${item.id}, ${item.qty - 1})">−</button>
                <input class="qty-num" type="number" value="${item.qty}" min="1" onchange="cartUpdateQty(${item.id}, parseInt(this.value))" style="width:48px;font-family:var(--font-sans);">
                <button class="qty-btn" onclick="cartUpdateQty(${item.id}, ${item.qty + 1})">+</button>
              </div>
            </td>
            <td><span class="cart-price">${formatPrice(item.price * item.qty)}</span></td>
            <td>
              <button class="cart-remove" onclick="cartRemove(${item.id})">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6M10 11v6M14 11v6M9 6V4h6v2"/></svg>
              </button>
            </td>
          </tr>`).join('')}
      </tbody>
    </table>`;

  const subtotal = Cart.getTotal();
  const shipping = subtotal > 50000 ? 0 : 1500;
  const total = subtotal + shipping;

  if (orderSummary) {
    orderSummary.innerHTML = `
      <div class="order-summary">
        <h3 class="summary-title">Order Summary</h3>
        <div class="summary-row"><span>Subtotal (${Cart.getCount()} items)</span><span>${formatPrice(subtotal)}</span></div>
        <div class="summary-row"><span>Shipping</span><span>${shipping === 0 ? '<span style="color:#34A853">FREE</span>' : formatPrice(shipping)}</span></div>
        ${shipping > 0 ? `<div class="summary-row" style="color:var(--gold);font-size:0.75rem;"><span>Add ${formatPrice(50000 - subtotal)} more for free shipping</span></div>` : ''}
        <div class="summary-divider"></div>
        <div class="summary-total"><span>Total</span><span>${formatPrice(total)}</span></div>
        <button class="checkout-btn" onclick="showToast('Thank you!', 'Checkout feature coming soon. Please call us at +91 98280 62372')">
          Proceed to Checkout
        </button>
        <div class="continue-shopping"><a href="shop.html">← Continue Shopping</a></div>
        <div class="secure-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          Secure Checkout
        </div>
      </div>`;
  }
}

function cartUpdateQty(id, qty) {
  if (qty < 1) return;
  Cart.updateQty(id, qty);
  renderCartPage();
}

function cartRemove(id) {
  Cart.remove(id);
  renderCartPage();
  showToast('Item removed', 'Cart updated');
}

// ---- Product Detail Page ----
function renderProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id')) || 1;
  const p = PRODUCTS.find(x => x.id === id) || PRODUCTS[0];

  // Update title
  document.title = `${p.name} — Anamta Furniture Crafters`;

  const nameEl = document.getElementById('productDetailName');
  const priceEl = document.getElementById('productDetailPrice');
  const catEl = document.getElementById('productDetailCat');
  const descEl = document.getElementById('productDetailDesc');
  const materialsEl = document.getElementById('productMaterials');

  if (nameEl) nameEl.textContent = p.name;
  if (priceEl) priceEl.innerHTML = `${formatPrice(p.price)} ${p.oldPrice ? `<span class="price-compare">${formatPrice(p.oldPrice)}</span>` : ''}`;
  if (catEl) catEl.textContent = p.categoryLabel;
  if (descEl) descEl.textContent = p.description;
  if (materialsEl && p.materials) {
    materialsEl.innerHTML = p.materials.map((m, i) => `<button class="material-btn ${i === 0 ? 'active' : ''}" onclick="this.parentNode.querySelectorAll('.material-btn').forEach(b=>b.classList.remove('active'));this.classList.add('active')">${m}</button>`).join('');
  }

  // Main icon
  const mainImgContent = document.getElementById('mainImgContent');
  if (mainImgContent) {
    if (p.image) {
      mainImgContent.innerHTML = `<img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;position:absolute;top:0;left:0;" onerror="this.style.display='none'">`;
      const mainImg = document.getElementById('mainImg');
      if (mainImg) mainImg.style.position = 'relative';
    } else {
      mainImgContent.innerHTML = getProductIcon(p.icon) + `<span>${p.name}</span>`;
    }
  }

  // Add to cart button
  const addBtn = document.getElementById('addToCartBtn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const qty = parseInt(document.getElementById('qtyInput')?.value || 1);
      Cart.add(p, qty);
    });
  }

  // Qty controls
  document.getElementById('qtyMinus')?.addEventListener('click', () => {
    const input = document.getElementById('qtyInput');
    if (input && parseInt(input.value) > 1) input.value = parseInt(input.value) - 1;
  });
  document.getElementById('qtyPlus')?.addEventListener('click', () => {
    const input = document.getElementById('qtyInput');
    if (input) input.value = parseInt(input.value) + 1;
  });

  // Related products
  const related = PRODUCTS.filter(x => x.category === p.category && x.id !== p.id).slice(0, 4);
  renderProducts('relatedProducts', related.length ? related : PRODUCTS.slice(0, 4));
}

// ---- Shop Page ----
function renderShopPage() {
  const params = new URLSearchParams(window.location.search);
  const catParam = params.get('category') || 'all';
  const searchParam = params.get('search') || '';

  let filtered = [...PRODUCTS];
  if (catParam !== 'all') filtered = filtered.filter(p => p.category === catParam);
  if (searchParam) filtered = filtered.filter(p =>
    p.name.toLowerCase().includes(searchParam.toLowerCase()) ||
    p.categoryLabel.toLowerCase().includes(searchParam.toLowerCase())
  );

  renderProducts('shopGrid', filtered);

  // Results count
  const countEl = document.getElementById('resultsCount');
  if (countEl) countEl.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} products`;

  // Category sidebar filters
  document.querySelectorAll('.category-filter').forEach(f => {
    const cat = f.dataset.category;
    if (cat === catParam) f.classList.add('active');
    f.addEventListener('click', () => {
      document.querySelectorAll('.category-filter').forEach(x => x.classList.remove('active'));
      f.classList.add('active');
      const newFiltered = cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === cat);
      renderProducts('shopGrid', newFiltered);
      if (countEl) countEl.textContent = `Showing ${newFiltered.length} of ${PRODUCTS.length} products`;
    });
  });

  // Sort
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      const val = sortSelect.value;
      let sortedGrid = [...filtered];
      if (val === 'price-asc') sortedGrid.sort((a, b) => a.price - b.price);
      else if (val === 'price-desc') sortedGrid.sort((a, b) => b.price - a.price);
      else if (val === 'name') sortedGrid.sort((a, b) => a.name.localeCompare(b.name));
      renderProducts('shopGrid', sortedGrid);
    });
  }

  if (searchParam) {
    const searchTitle = document.getElementById('searchTitle');
    if (searchTitle) searchTitle.textContent = `Results for "${searchParam}"`;
  }
}

// ---- Reviews Page ----
function renderReviewsPage() {
  renderReviews('reviewsPageGrid');
}

// ---- Init on Page Load ----
document.addEventListener('DOMContentLoaded', () => {
  initNav();

  const page = window.location.pathname.split('/').pop() || 'index.html';

  if (page === 'index.html' || page === '') {
    renderCollections();
    renderProducts('productsGrid', PRODUCTS, 8);
    renderReviews('reviewsGrid', 6);
    initFilterTabs();
  }
  if (page === 'shop.html') {
    renderShopPage();
  }
  if (page === 'product.html') {
    renderProductDetail();
  }
  if (page === 'cart.html') {
    renderCartPage();
  }
  if (page === 'reviews.html') {
    renderReviewsPage();
  }

  initReveal();
});
