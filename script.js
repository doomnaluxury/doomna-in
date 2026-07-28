/* ==========================================================================
   DOOMNA LUXURY - E-COMMERCE CORE LOGIC
   Features: Catalog rendering, Search, Category filters, Size selector,
   Cart Drawer, Checkout & Payment flow, Authentication Modal, Toasts
   ========================================================================== */

// 1. PRODUCT DATABASE
const PRODUCTS = [
    {
        id: "doom-01",
        title: "Cybernetic Oversized Tee",
        category: "Oversized T-Shirts",
        price: 85,
        rating: 4.9,
        badge: "BESTSELLER",
        image: "assets/products/oversized_tee_1.jpg",
        description: "Heavyweight 280GSM French Terry cotton featuring high-density silicone neon print and relaxed drop-shoulder cut."
    },
    {
        id: "doom-02",
        title: "Doomna Neon Monogram Tee",
        category: "Oversized T-Shirts",
        price: 95,
        rating: 4.8,
        badge: "LIMITED DROP",
        image: "assets/products/oversized_tee_2.jpg",
        description: "Vibrant lime neon signature tee crafted from premium combed organic cotton with 3D embossed logo graphics."
    },
    {
        id: "doom-03",
        title: "Obsidian Jacquard Knitted Polo",
        category: "Polo T-Shirts",
        price: 120,
        rating: 5.0,
        badge: "NEW ARRIVAL",
        image: "assets/products/polo_tee_1.jpg",
        description: "Tailored luxury knitted polo with high-contrast lime tipping on collar and sleeves. Modern slim-regular fit."
    },
    {
        id: "doom-04",
        title: "Atelier Emblem White Polo",
        category: "Polo T-Shirts",
        price: 110,
        rating: 4.7,
        badge: "BESTSELLER",
        image: "assets/products/polo_tee_2.jpg",
        description: "Crisp architectural white polo shirt featuring subtle matte black hardware buttons and chest emblem."
    },
    {
        id: "doom-05",
        title: "Vanguard Track Co-ord Set",
        category: "Co-ord Sets",
        price: 240,
        rating: 4.9,
        badge: "EXCLUSIVE",
        image: "assets/products/coord_set_1.jpg",
        description: "Two-piece luxury high-street ensemble including oversized shirt jacket and matching relaxed cargo pants."
    },
    {
        id: "doom-06",
        title: "Monochrome Cyber Co-ord Set",
        category: "Co-ord Sets",
        price: 260,
        rating: 4.9,
        badge: "LIMITED DROP",
        image: "assets/products/coord_set_2.jpg",
        description: "Signature streetwear co-ord featuring lime neon piping accents, custom metallic zippers, and tailored trousers."
    }
];

// 2. STATE MANAGEMENT
let cart = JSON.parse(localStorage.getItem('doomna_cart')) || [];
let activeCategory = 'all';
let searchQuery = '';
let currentSort = 'featured';
let selectedSizes = {}; // Product ID -> Chosen Size (default 'L')
let appliedPromo = null; // { code: 'DOOMNA10', discountPercent: 10 }
let currentUser = JSON.parse(localStorage.getItem('doomna_user')) || null;

// Initialize default selected size ('L') for all products
PRODUCTS.forEach(p => {
    selectedSizes[p.id] = 'L';
});

// DOM ELEMENTS
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    renderProducts();
    updateCartUI();
    updateUserUI();
    setupEventListeners();
}

// 3. EVENT LISTENERS SETUP
function setupEventListeners() {
    // Navigation Scroll & Sticky state
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.8)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Search Input Logic
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim().toLowerCase();
            clearSearch.style.display = searchQuery.length > 0 ? 'block' : 'none';
            renderProducts();
        });
    }
    if (clearSearch) {
        clearSearch.addEventListener('click', () => {
            searchInput.value = '';
            searchQuery = '';
            clearSearch.style.display = 'none';
            renderProducts();
        });
    }

    // Category Filter Tabs
    const filterTabs = document.querySelectorAll('#filterTabs .tab-btn');
    filterTabs.forEach(btn => {
        btn.addEventListener('click', () => {
            filterTabs.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.getAttribute('data-filter');
            renderProducts();
        });
    });

    // Category Cards click handlers
    const catCards = document.querySelectorAll('.category-card');
    catCards.forEach(card => {
        card.addEventListener('click', () => {
            const cat = card.getAttribute('data-category');
            filterCategory(cat);
            document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Sort Dropdown
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderProducts();
        });
    }

    // Reset Filters Button
    const resetBtn = document.getElementById('resetFiltersBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            activeCategory = 'all';
            searchQuery = '';
            if (searchInput) searchInput.value = '';
            if (clearSearch) clearSearch.style.display = 'none';
            const firstTab = document.querySelector('#filterTabs .tab-btn');
            if (firstTab) {
                filterTabs.forEach(b => b.classList.remove('active'));
                firstTab.classList.add('active');
            }
            renderProducts();
        });
    }

    // Cart Drawer Controls
    const cartBtn = document.getElementById('cartBtn');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const cartOverlay = document.getElementById('cartOverlay');
    if (cartBtn) cartBtn.addEventListener('click', openCartDrawer);
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);

    // Promo Code Application
    const applyPromoBtn = document.getElementById('applyPromoBtn');
    if (applyPromoBtn) {
        applyPromoBtn.addEventListener('click', handleApplyPromo);
    }

    // Proceed to Checkout
    const proceedCheckoutBtn = document.getElementById('proceedCheckoutBtn');
    if (proceedCheckoutBtn) {
        proceedCheckoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showToast("Your cart is empty!", "fa-triangle-exclamation");
                return;
            }
            closeCartDrawer();
            openCheckoutModal();
        });
    }

    // Checkout Modal Controls
    const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
    if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', closeCheckoutModal);

    // Checkout Form Submit
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckoutSubmit);
    }

    // Payment Option toggle
    const payOptions = document.querySelectorAll('.payment-option');
    payOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            payOptions.forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
            const radio = opt.querySelector('input[type="radio"]');
            if (radio) radio.checked = true;

            const cardFields = document.getElementById('cardFields');
            if (cardFields) {
                cardFields.style.display = (radio.value === 'card') ? 'block' : 'none';
            }
        });
    });

    // Continue Shopping button in Order Confirmation Modal
    const continueShoppingBtn = document.getElementById('continueShoppingBtn');
    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', () => {
            document.getElementById('orderSuccessModal').classList.remove('active');
        });
    }

    // Auth Modal Controls
    const userBtn = document.getElementById('userBtn');
    const closeAuthBtn = document.getElementById('closeAuthBtn');
    const authModal = document.getElementById('authModal');
    const tabLogin = document.getElementById('tabLogin');
    const tabSignup = document.getElementById('tabSignup');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (userBtn) {
        userBtn.addEventListener('click', () => {
            if (currentUser) {
                if (confirm(`Logged in as ${currentUser.name}. Do you want to sign out?`)) {
                    currentUser = null;
                    localStorage.removeItem('doomna_user');
                    updateUserUI();
                    showToast("Signed out successfully", "fa-right-from-bracket");
                }
            } else {
                authModal.classList.add('active');
            }
        });
    }
    if (closeAuthBtn) {
        closeAuthBtn.addEventListener('click', () => {
            authModal.classList.remove('active');
        });
    }

    if (tabLogin && tabSignup) {
        tabLogin.addEventListener('click', () => {
            tabLogin.classList.add('active');
            tabSignup.classList.remove('active');
            loginForm.style.display = 'block';
            signupForm.style.display = 'none';
        });
        tabSignup.addEventListener('click', () => {
            tabSignup.classList.add('active');
            tabLogin.classList.remove('active');
            signupForm.style.display = 'block';
            loginForm.style.display = 'none';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            currentUser = { name: email.split('@')[0], email: email };
            localStorage.setItem('doomna_user', JSON.stringify(currentUser));
            updateUserUI();
            authModal.classList.remove('active');
            showToast(`Welcome back, ${currentUser.name}!`, "fa-circle-check");
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            currentUser = { name: name, email: email };
            localStorage.setItem('doomna_user', JSON.stringify(currentUser));
            updateUserUI();
            authModal.classList.remove('active');
            showToast(`Welcome to Doomna VIP, ${currentUser.name}!`, "fa-gem");
        });
    }

    // Quick View Close
    const closeQuickViewBtn = document.getElementById('closeQuickViewBtn');
    if (closeQuickViewBtn) {
        closeQuickViewBtn.addEventListener('click', () => {
            document.getElementById('quickViewModal').classList.remove('active');
        });
    }

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast("Message sent to VIP Concierge!", "fa-paper-plane");
            contactForm.reset();
        });
    }

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast("Subscribed to VIP Drops!", "fa-envelope-open-text");
            newsletterForm.reset();
        });
    }
}

// 4. RENDER PRODUCTS
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');
    if (!grid) return;

    // Filter Logic
    let filtered = PRODUCTS.filter(product => {
        const matchesCategory = (activeCategory === 'all') || (product.category === activeCategory);
        const matchesSearch = product.title.toLowerCase().includes(searchQuery) ||
                              product.category.toLowerCase().includes(searchQuery) ||
                              product.description.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    // Sort Logic
    if (currentSort === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    if (filtered.length === 0) {
        grid.style.display = 'none';
        if (noResults) noResults.style.display = 'block';
        return;
    }

    grid.style.display = 'grid';
    if (noResults) noResults.style.display = 'none';

    grid.innerHTML = filtered.map(product => {
        const chosenSize = selectedSizes[product.id] || 'L';
        return `
            <div class="product-card">
                <span class="product-badge">${product.badge}</span>
                <div class="product-img-wrap">
                    <img src="${product.image}" alt="${product.title}">
                    <button class="quickview-btn" onclick="openQuickView('${product.id}')">
                        <i class="fa-regular fa-eye"></i> Quick View
                    </button>
                </div>

                <div class="product-details">
                    <span class="product-cat">${product.category}</span>
                    <h3 class="product-title">${product.title}</h3>
                    
                    <div class="product-price-row">
                        <span class="product-price">$${product.price}.00</span>
                        <div class="product-rating">
                            <i class="fa-solid fa-star"></i> ${product.rating}
                        </div>
                    </div>

                    <span class="size-selector-label">Select Size:</span>
                    <div class="size-options">
                        ${['M', 'L', 'XL', 'XXL'].map(size => `
                            <button class="size-btn ${chosenSize === size ? 'selected' : ''}" 
                                    onclick="selectProductSize('${product.id}', '${size}')">
                                ${size}
                            </button>
                        `).join('')}
                    </div>

                    <button class="add-cart-btn" onclick="handleAddToCart('${product.id}')">
                        <i class="fa-solid fa-bag-shopping"></i> ADD TO CART
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Select Product Size
function selectProductSize(productId, size) {
    selectedSizes[productId] = size;
    renderProducts();
}

// Filter Category Helper
function filterCategory(categoryName) {
    activeCategory = categoryName;
    const tabs = document.querySelectorAll('#filterTabs .tab-btn');
    tabs.forEach(btn => {
        if (btn.getAttribute('data-filter') === categoryName) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    renderProducts();
}

// 5. CART FUNCTIONALITY
function handleAddToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const size = selectedSizes[productId] || 'L';
    
    // Check if item with same ID & size exists in cart
    const existingIndex = cart.findIndex(item => item.id === productId && item.size === size);
    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            size: size,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showToast(`Added ${product.title} (${size}) to cart`, "fa-bag-shopping");
    openCartDrawer();
}

function updateCartQuantity(productId, size, delta) {
    const itemIndex = cart.findIndex(item => item.id === productId && item.size === size);
    if (itemIndex > -1) {
        cart[itemIndex].quantity += delta;
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
    }
    saveCart();
    updateCartUI();
}

function removeFromCart(productId, size) {
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    saveCart();
    updateCartUI();
    showToast("Item removed from cart", "fa-trash-can");
}

function saveCart() {
    localStorage.setItem('doomna_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const badge = document.getElementById('cartBadge');
    const countTitle = document.getElementById('cartCountTitle');
    const container = document.getElementById('cartItemsContainer');
    const subtotalEl = document.getElementById('cartSubtotal');
    const shippingEl = document.getElementById('cartShipping');
    const totalEl = document.getElementById('cartTotal');
    const progressFill = document.getElementById('shippingProgress');
    const shippingText = document.getElementById('shippingBarText');

    const totalCount = cart.reduce((sum, i) => sum + i.quantity, 0);
    if (badge) badge.textContent = totalCount;
    if (countTitle) countTitle.textContent = totalCount;

    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty-msg">
                <i class="fa-solid fa-bag-shopping"></i>
                <p>Your shopping cart is empty.</p>
                <a href="#shop" onclick="closeCartDrawer()" class="btn btn-outline" style="margin-top: 16px;">EXPLORE DROP</a>
            </div>
        `;
        if (subtotalEl) subtotalEl.textContent = '$0.00';
        if (shippingEl) shippingEl.textContent = '$0.00';
        if (totalEl) totalEl.textContent = '$0.00';
        if (progressFill) progressFill.style.width = '0%';
        if (shippingText) shippingText.innerHTML = 'Add $150 more for <strong>FREE EXPRESS SHIPPING</strong>';
        return;
    }

    let subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let discountAmount = 0;

    if (appliedPromo) {
        discountAmount = subtotal * (appliedPromo.discountPercent / 100);
    }

    const freeShippingThreshold = 150;
    const shippingCost = subtotal >= freeShippingThreshold ? 0 : 15;
    const total = subtotal - discountAmount + shippingCost;

    // Shipping progress
    const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
    if (progressFill) progressFill.style.width = `${progressPercent}%`;
    
    if (shippingText) {
        if (subtotal >= freeShippingThreshold) {
            shippingText.innerHTML = '🎉 You unlocked <strong>FREE EXPRESS SHIPPING!</strong>';
        } else {
            const diff = freeShippingThreshold - subtotal;
            shippingText.innerHTML = `Add <strong>$${diff.toFixed(2)}</strong> more for <strong>FREE EXPRESS SHIPPING</strong>`;
        }
    }

    // Render items
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.title}" class="cart-item-img">
            <div class="cart-item-info">
                <div>
                    <h4 class="cart-item-title">${item.title}</h4>
                    <div class="cart-item-meta">Size: <span>${item.size}</span></div>
                </div>

                <div class="cart-item-bottom">
                    <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                    <div class="qty-control">
                        <button class="qty-btn" onclick="updateCartQuantity('${item.id}', '${item.size}', -1)">-</button>
                        <span class="qty-val">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateCartQuantity('${item.id}', '${item.size}', 1)">+</button>
                    </div>
                    <button class="remove-item-btn" onclick="removeFromCart('${item.id}', '${item.size}')">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Summary numbers
    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    
    const discountRow = document.getElementById('discountRow');
    const discountEl = document.getElementById('cartDiscount');
    if (appliedPromo && discountRow && discountEl) {
        discountRow.style.display = 'flex';
        discountEl.textContent = `-$${discountAmount.toFixed(2)}`;
    } else if (discountRow) {
        discountRow.style.display = 'none';
    }

    if (shippingEl) shippingEl.textContent = shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
}

// Cart Drawer Handlers
function openCartDrawer() {
    document.getElementById('cartDrawer').classList.add('active');
    document.getElementById('cartOverlay').classList.add('active');
}

function closeCartDrawer() {
    document.getElementById('cartDrawer').classList.remove('active');
    document.getElementById('cartOverlay').classList.remove('active');
}

// Promo Code Handler
function handleApplyPromo() {
    const input = document.getElementById('promoInput');
    const msg = document.getElementById('promoMessage');
    if (!input || !msg) return;

    const code = input.value.trim().toUpperCase();
    if (code === 'DOOMNA10') {
        appliedPromo = { code: 'DOOMNA10', discountPercent: 10 };
        msg.textContent = "Promo code applied: 10% OFF!";
        msg.className = "promo-msg success";
        showToast("10% Discount Applied!", "fa-tag");
        updateCartUI();
    } else if (code === '') {
        msg.textContent = "Please enter a promo code";
        msg.className = "promo-msg error";
    } else {
        msg.textContent = "Invalid promo code";
        msg.className = "promo-msg error";
    }
}

// 6. CHECKOUT FLOW
function openCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    if (!modal) return;

    // Render Mini Summary
    const itemsList = document.getElementById('checkoutItemsList');
    const subtotalEl = document.getElementById('chkSubtotal');
    const shippingEl = document.getElementById('chkShipping');
    const totalEl = document.getElementById('chkTotal');

    let subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let discountAmount = appliedPromo ? subtotal * (appliedPromo.discountPercent / 100) : 0;
    const shippingCost = subtotal >= 150 ? 0 : 15;
    const total = subtotal - discountAmount + shippingCost;

    if (itemsList) {
        itemsList.innerHTML = cart.map(item => `
            <div class="mini-item">
                <img src="${item.image}" alt="${item.title}">
                <div>
                    <strong>${item.title}</strong><br>
                    <span style="color: var(--text-secondary);">Size: ${item.size} | Qty: ${item.quantity}</span>
                </div>
                <div style="margin-left: auto; font-weight: 800;">$${(item.price * item.quantity).toFixed(2)}</div>
            </div>
        `).join('');
    }

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (shippingEl) shippingEl.textContent = shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;

    modal.classList.add('active');
}

function closeCheckoutModal() {
    document.getElementById('checkoutModal').classList.remove('active');
}

function handleCheckoutSubmit(e) {
    e.preventDefault();

    const orderId = '#DOOMNA-' + Math.floor(100000 + Math.random() * 900000);
    document.getElementById('confirmedOrderId').textContent = orderId;

    closeCheckoutModal();

    // Clear cart
    cart = [];
    appliedPromo = null;
    saveCart();
    updateCartUI();

    // Show Confirmation Modal
    document.getElementById('orderSuccessModal').classList.add('active');
}

// 7. USER AUTH UI UPDATE
function updateUserUI() {
    const userLabel = document.getElementById('userLabel');
    if (!userLabel) return;

    if (currentUser) {
        userLabel.textContent = currentUser.name;
    } else {
        userLabel.textContent = 'Sign In';
    }
}

// 8. QUICK VIEW MODAL
function openQuickView(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const content = document.getElementById('quickViewContent');
    const modal = document.getElementById('quickViewModal');
    if (!content || !modal) return;

    const chosenSize = selectedSizes[product.id] || 'L';

    content.innerHTML = `
        <div class="quickview-img-frame">
            <img src="${product.image}" alt="${product.title}">
        </div>
        <div style="display: flex; flex-direction: column; justify-content: center;">
            <span class="product-cat">${product.category}</span>
            <h2 style="font-family: var(--font-heading); font-size: 1.8rem; margin: 6px 0 12px 0;">${product.title}</h2>
            <div style="font-size: 1.4rem; font-weight: 800; color: var(--accent-lime); margin-bottom: 16px;">$${product.price}.00</div>
            <p style="color: var(--text-secondary); margin-bottom: 24px; font-size: 0.9rem;">${product.description}</p>
            
            <span class="size-selector-label">Select Size:</span>
            <div class="size-options" style="margin-bottom: 24px;">
                ${['M', 'L', 'XL', 'XXL'].map(size => `
                    <button class="size-btn ${chosenSize === size ? 'selected' : ''}" 
                            onclick="selectProductSize('${product.id}', '${size}'); openQuickView('${product.id}');">
                        ${size}
                    </button>
                `).join('')}
            </div>

            <button class="btn btn-primary" onclick="handleAddToCart('${product.id}'); document.getElementById('quickViewModal').classList.remove('active');">
                <i class="fa-solid fa-bag-shopping"></i> ADD TO CART
            </button>
        </div>
    `;

    modal.classList.add('active');
}

// 9. TOAST NOTIFICATION UTILITY
function showToast(message, iconClass = "fa-circle-check") {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span>${message}</span>`;
    
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
