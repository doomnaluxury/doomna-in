/* ==========================================================================
   DOOMNA LUXURY - INTERNATIONAL PRODUCTION STOREFRONT CONTROLLER
   Features: ₹ INR Currency, Inclusive GST & Free Shipping Pricing Engine,
   Product Size Management System, Color Variants Swatches, Fully Synced Admin Catalog
   ========================================================================== */

const DEFAULT_PRODUCTS = [
    {
        id: "doom-01",
        title: "Cybernetic Oversized Tee",
        subtitle: "Signature 280GSM Drop-Shoulder Streetwear",
        brand: "Doomna",
        sku: "SKU-DM-001",
        tags: ["Streetwear", "Oversized", "Heavyweight", "Neon"],
        category: "Oversized T-Shirts",
        subcategory: "Graphic Streetwear",
        price: 4999,
        comparePrice: 6999,
        stock: 45,
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"],
        sizeChartId: "sc-oversized",
        colors: ["Obsidian Black", "Lime Neon"],
        colorVariants: [
            { color: "Obsidian Black", colorHex: "#070707", swatchImg: "assets/products/oversized_tee_1.jpg", images: ["assets/products/oversized_tee_1.jpg", "assets/products/oversized_tee_2.jpg"], stock: 45, sku: "SKU-DM-001-BLK", price: 4999 },
            { color: "Lime Neon", colorHex: "#CCFF00", swatchImg: "assets/products/oversized_tee_2.jpg", images: ["assets/products/oversized_tee_2.jpg", "assets/products/oversized_tee_1.jpg"], stock: 20, sku: "SKU-DM-001-LME", price: 4999 }
        ],
        fabric: "100% French Terry Organic Cotton",
        gsm: "280 GSM Heavyweight",
        washCare: "Machine wash cold inside out, lay flat to dry, do not iron on print.",
        rating: 4.9,
        reviewsCount: 28,
        badge: "BESTSELLER",
        enabled: true,
        images: [
            "assets/products/oversized_tee_1.jpg",
            "assets/products/oversized_tee_2.jpg",
            "assets/products/polo_tee_1.jpg",
            "assets/products/coord_set_1.jpg",
            "assets/products/polo_tee_2.jpg"
        ],
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        shortDescription: "Heavyweight 280GSM French Terry cotton featuring high-density silicone neon print and relaxed drop-shoulder cut.",
        longDescription: "<h3>THE ART OF UNAPOLOGETIC STREETWEAR LUXURY</h3><p>Doomna represents the pinnacle of high-street architectural apparel. Designed for individuals who command distinction without saying a word, the Cybernetic Oversized Tee is the culmination of three years of textile innovation, ergonomic tailoring, and relentless pursuit of timeless comfort.</p>",
        seoTitle: "Doomna Cybernetic Oversized Tee | Premium Streetwear",
        seoDescription: "Shop the Doomna Cybernetic Oversized Tee in 280GSM cotton. Fast shipping across India.",
        seoKeywords: "Doomna, Oversized T-Shirt, Streetwear, Heavyweight Cotton, Luxury Apparel"
    },
    {
        id: "doom-02",
        title: "Doomna Neon Monogram Tee",
        subtitle: "Vibrant Lime 3D Monogram Collection",
        brand: "Doomna",
        sku: "SKU-DM-002",
        tags: ["Neon", "Monogram", "Oversized"],
        category: "Oversized T-Shirts",
        subcategory: "Monogram Series",
        price: 5499,
        comparePrice: 7499,
        stock: 20,
        sizes: ["S", "M", "L", "XL", "XXL"],
        sizeChartId: "sc-oversized",
        colors: ["Lime Neon", "Jet Black"],
        colorVariants: [
            { color: "Lime Neon", colorHex: "#CCFF00", swatchImg: "assets/products/oversized_tee_2.jpg", images: ["assets/products/oversized_tee_2.jpg", "assets/products/oversized_tee_1.jpg"], stock: 20, sku: "SKU-DM-002-LME", price: 5499 },
            { color: "Jet Black", colorHex: "#070707", swatchImg: "assets/products/oversized_tee_1.jpg", images: ["assets/products/oversized_tee_1.jpg", "assets/products/oversized_tee_2.jpg"], stock: 15, sku: "SKU-DM-002-BLK", price: 5499 }
        ],
        fabric: "100% Combed Milled Cotton",
        gsm: "300 GSM Heavyweight",
        washCare: "Hand wash cold, do not bleach, tumble dry low.",
        rating: 4.8,
        reviewsCount: 19,
        badge: "LIMITED DROP",
        enabled: true,
        images: [
            "assets/products/oversized_tee_2.jpg",
            "assets/products/oversized_tee_1.jpg",
            "assets/products/coord_set_1.jpg"
        ],
        videoUrl: "",
        shortDescription: "Vibrant lime neon signature tee crafted from premium combed organic cotton with 3D embossed logo graphics.",
        longDescription: "<h3>VIBRANT NEON MONOGRAM</h3><p>Elevate your high-street silhouette with our signature 3D embossed neon monogram tee.</p>",
        seoTitle: "Doomna Neon Monogram Tee",
        seoDescription: "Limited drop neon monogram tee by Doomna.",
        seoKeywords: "Doomna, Neon Tee, Monogram"
    },
    {
        id: "doom-03",
        title: "Obsidian Jacquard Knitted Polo",
        subtitle: "Tailored Jacquard Tipping Luxury Knit",
        brand: "Doomna",
        sku: "SKU-DM-003",
        tags: ["Polo", "Knitted", "Luxury"],
        category: "Polo T-Shirts",
        subcategory: "Knitted Luxury",
        price: 6999,
        comparePrice: 8999,
        stock: 30,
        sizes: ["M", "L", "XL", "XXL", "3XL"],
        sizeChartId: "sc-polo",
        colors: ["Obsidian Black", "Crisp White"],
        colorVariants: [
            { color: "Obsidian Black", colorHex: "#070707", swatchImg: "assets/products/polo_tee_1.jpg", images: ["assets/products/polo_tee_1.jpg", "assets/products/polo_tee_2.jpg"], stock: 30, sku: "SKU-DM-003-BLK", price: 6999 },
            { color: "Crisp White", colorHex: "#FFFFFF", swatchImg: "assets/products/polo_tee_2.jpg", images: ["assets/products/polo_tee_2.jpg", "assets/products/polo_tee_1.jpg"], stock: 18, sku: "SKU-DM-003-WHT", price: 6999 }
        ],
        fabric: "100% Mercerized Cotton Knit",
        gsm: "260 GSM Premium Knit",
        washCare: "Dry clean recommended or gentle hand wash cold.",
        rating: 5.0,
        reviewsCount: 34,
        badge: "NEW ARRIVAL",
        enabled: true,
        images: [
            "assets/products/polo_tee_1.jpg",
            "assets/products/polo_tee_2.jpg"
        ],
        videoUrl: "",
        shortDescription: "Tailored luxury knitted polo with high-contrast lime tipping on collar and sleeves. Modern slim-regular fit.",
        longDescription: "<h3>TAILORED LUXURY KNIT</h3><p>Mercerized cotton knit polo with custom high-contrast lime tipping.</p>",
        seoTitle: "Doomna Obsidian Knitted Polo",
        seoDescription: "Luxury knitted polo shirt by Doomna.",
        seoKeywords: "Doomna, Polo, Knitted Polo"
    },
    {
        id: "doom-04",
        title: "Atelier Emblem White Polo",
        subtitle: "Crisp Architectural Pima Polo",
        brand: "Doomna",
        sku: "SKU-DM-004",
        tags: ["Polo", "White", "Emblem"],
        category: "Polo T-Shirts",
        subcategory: "Classic Luxe",
        price: 6499,
        comparePrice: 7999,
        stock: 18,
        sizes: ["S", "M", "L", "XL", "XXL"],
        sizeChartId: "sc-polo",
        colors: ["Crisp White", "Matte Black"],
        colorVariants: [
            { color: "Crisp White", colorHex: "#FFFFFF", swatchImg: "assets/products/polo_tee_2.jpg", images: ["assets/products/polo_tee_2.jpg", "assets/products/polo_tee_1.jpg"], stock: 18, sku: "SKU-DM-004-WHT", price: 6499 }
        ],
        fabric: "Pima Cotton Blend",
        gsm: "250 GSM Soft Touch",
        washCare: "Machine wash warm with like colors.",
        rating: 4.7,
        reviewsCount: 15,
        badge: "BESTSELLER",
        enabled: true,
        images: [
            "assets/products/polo_tee_2.jpg",
            "assets/products/polo_tee_1.jpg"
        ],
        videoUrl: "",
        shortDescription: "Crisp architectural white polo shirt featuring subtle matte black hardware buttons and chest emblem.",
        longDescription: "<h3>CRISP ARCHITECTURAL POLO</h3><p>Premium Pima cotton blend featuring matte black hardware buttons.</p>",
        seoTitle: "Doomna White Polo Shirt",
        seoDescription: "Crisp white luxury polo shirt.",
        seoKeywords: "Doomna, White Polo"
    },
    {
        id: "doom-05",
        title: "Vanguard Track Co-ord Set",
        subtitle: "Two-Piece Oversized Shirt Jacket & Trousers",
        brand: "Doomna",
        sku: "SKU-DM-005",
        tags: ["Co-ord", "Tracksuit", "Streetwear"],
        category: "Co-ord Sets",
        subcategory: "Streetwear Sets",
        price: 12999,
        comparePrice: 16999,
        stock: 12,
        sizes: ["M", "L", "XL", "XXL"],
        sizeChartId: "sc-coord",
        colors: ["Stealth Black", "Lime Piping"],
        colorVariants: [
            { color: "Stealth Black", colorHex: "#070707", swatchImg: "assets/products/coord_set_1.jpg", images: ["assets/products/coord_set_1.jpg", "assets/products/coord_set_2.jpg"], stock: 12, sku: "SKU-DM-005-BLK", price: 12999 }
        ],
        fabric: "Heavyweight Double Knit Cotton Blend",
        gsm: "350 GSM Fleece",
        washCare: "Machine wash cold inside out, tumble dry low.",
        rating: 4.9,
        reviewsCount: 42,
        badge: "EXCLUSIVE",
        enabled: true,
        images: [
            "assets/products/coord_set_1.jpg",
            "assets/products/coord_set_2.jpg"
        ],
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        shortDescription: "Two-piece luxury high-street ensemble including oversized shirt jacket and matching relaxed cargo pants.",
        longDescription: "<h3>LUXURY STREETWEAR ENSEMBLE</h3><p>Two-piece co-ord set with 350GSM fleece and waterproof metallic hardware.</p>",
        seoTitle: "Doomna Vanguard Co-ord Set",
        seoDescription: "Luxury co-ord set for men by Doomna.",
        seoKeywords: "Doomna, Co-ord Set, Streetwear"
    },
    {
        id: "doom-06",
        title: "Monochrome Cyber Co-ord Set",
        subtitle: "Runway High-Contrast Piping Set",
        brand: "Doomna",
        sku: "SKU-DM-006",
        tags: ["Co-ord", "Runway", "Tailored"],
        category: "Co-ord Sets",
        subcategory: "Runway Collection",
        price: 14999,
        comparePrice: 18999,
        stock: 8,
        sizes: ["L", "XL", "XXL", "3XL"],
        sizeChartId: "sc-coord",
        colors: ["Monochrome Black & White", "Lime Accents"],
        colorVariants: [
            { color: "Monochrome Black & White", colorHex: "#070707", swatchImg: "assets/products/coord_set_2.jpg", images: ["assets/products/coord_set_2.jpg", "assets/products/coord_set_1.jpg"], stock: 8, sku: "SKU-DM-006-MONO", price: 14999 }
        ],
        fabric: "Structured Poly-Cotton Twill",
        gsm: "320 GSM Heavy Twill",
        washCare: "Dry clean only.",
        rating: 4.9,
        reviewsCount: 31,
        badge: "LIMITED DROP",
        enabled: true,
        images: [
            "assets/products/coord_set_2.jpg",
            "assets/products/coord_set_1.jpg"
        ],
        videoUrl: "",
        shortDescription: "Signature streetwear co-ord featuring lime neon piping accents, custom metallic zippers, and tailored trousers.",
        longDescription: "<h3>RUNWAY MONOCHROME CO-ORD</h3><p>Structured poly-cotton twill with high-contrast neon accents.</p>",
        seoTitle: "Doomna Monochrome Co-ord Set",
        seoDescription: "Runway edition co-ord set by Doomna.",
        seoKeywords: "Doomna, Cyber Co-ord Set"
    }
];

const DEFAULT_SIZE_CHARTS = [
    {
        id: "sc-oversized",
        title: "Oversized Fit Size Chart",
        category: "Oversized T-Shirts",
        rows: [
            { size: "XS", chest: "40\"", length: "27\"", shoulder: "20\"", sleeve: "8\"" },
            { size: "S", chest: "42\"", length: "28\"", shoulder: "21\"", sleeve: "8.5\"" },
            { size: "M", chest: "44\"", length: "29\"", shoulder: "22\"", sleeve: "9\"" },
            { size: "L", chest: "46\"", length: "30\"", shoulder: "23\"", sleeve: "9.5\"" },
            { size: "XL", chest: "48\"", length: "31\"", shoulder: "24\"", sleeve: "10\"" },
            { size: "XXL", chest: "50\"", length: "32\"", shoulder: "25\"", sleeve: "10.5\"" },
            { size: "3XL", chest: "52\"", length: "33\"", shoulder: "26\"", sleeve: "11\"" },
            { size: "4XL", chest: "54\"", length: "34\"", shoulder: "27\"", sleeve: "11.5\"" }
        ]
    },
    {
        id: "sc-polo",
        title: "Polo Knitted Size Chart",
        category: "Polo T-Shirts",
        rows: [
            { size: "S", chest: "38\"", length: "26.5\"", shoulder: "17.5\"", sleeve: "7.5\"" },
            { size: "M", chest: "40\"", length: "27.5\"", shoulder: "18.5\"", sleeve: "8\"" },
            { size: "L", chest: "42\"", length: "28.5\"", shoulder: "19.5\"", sleeve: "8.5\"" },
            { size: "XL", chest: "44\"", length: "29.5\"", shoulder: "20.5\"", sleeve: "9\"" },
            { size: "XXL", chest: "46\"", length: "30.5\"", shoulder: "21.5\"", sleeve: "9.5\"" },
            { size: "3XL", chest: "48\"", length: "31.5\"", shoulder: "22.5\"", sleeve: "10\"" }
        ]
    },
    {
        id: "sc-coord",
        title: "Co-ord Set Size Chart",
        category: "Co-ord Sets",
        rows: [
            { size: "S", chest: "42\"", length: "28\"", shoulder: "21\"", sleeve: "24\"" },
            { size: "M", chest: "44\"", length: "29\"", shoulder: "22\"", sleeve: "25\"" },
            { size: "L", chest: "46\"", length: "30\"", shoulder: "23\"", sleeve: "26\"" },
            { size: "XL", chest: "48\"", length: "31\"", shoulder: "24\"", sleeve: "27\"" },
            { size: "XXL", chest: "50\"", length: "32\"", shoulder: "25\"", sleeve: "28\"" }
        ]
    }
];

let products = DEFAULT_PRODUCTS;
let sizeCharts = DEFAULT_SIZE_CHARTS;
let settings = {
    siteName: "Doomna", currency: "₹", currencyCode: "INR",
    announcementBar: "⚡ FREE SHIPPING ACROSS INDIA • INCLUSIVE OF ALL TAXES • USE CODE DOOMNA10 FOR 10% OFF",
    heroTitle: "HIGH-STREET OPULENCE.", heroSubtitle: "Comfort Crafted For Timeless Luxury. Engineered with heavyweight 280GSM French Terry cotton and sleek architectural cuts.",
    heroBadgeText: "SS26 LIMITED DROP AVAILABLE NOW", heroImageUrl: "assets/hero-brand.jpg",
    heroLeftImg: "assets/products/oversized_tee_1.jpg", heroRightImg: "assets/products/coord_set_1.jpg",
    featuredProducts: {
        left: { productId: "doom-01", title: "Cybernetic Oversized Tee", tag: "NEW DROP", imageUrl: "assets/products/oversized_tee_1.jpg", enabled: true },
        right: { productId: "doom-03", title: "Obsidian Jacquard Polo", tag: "EXCLUSIVE", imageUrl: "assets/products/polo_tee_1.jpg", enabled: true }
    },
    whatsappNumber: "+91 72062 21406", conciergeEmail: "Sales@doomna.in", phone: "+91 72062 21406",
    address: "Shakti Nagar, Sirsa, Haryana", footerTagline: "Comfort Crafted For Timeless Luxury",
    gstIncluded: true, freeShipping: true, enableWishlist: true, gstPercent: 12, shippingFee: 0, freeShippingThreshold: 0
};
let pages = {};
let cart = JSON.parse(localStorage.getItem('doomna_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('doomna_wishlist')) || [];
let compareList = JSON.parse(localStorage.getItem('doomna_compare')) || [];
let recentlyViewed = JSON.parse(localStorage.getItem('doomna_recent')) || [];
let currentUser = JSON.parse(localStorage.getItem('doomna_user')) || null;

let activeCategory = 'all';
let searchQuery = '';
let currentSort = 'featured';
let selectedSizes = {};
let selectedColors = {};
let currentLanguage = localStorage.getItem('doomna_lang') || 'en';
let activeProduct = null;
let activeImageIndex = 0;
let activeColorVariant = null;
let lightboxZoomScale = 1;
let appliedPromo = null;
let isBackendAvailable = false;
let pendingCheckoutData = null;
let touchStartX = 0;
let touchEndX = 0;

const TRANSLATIONS = {
    en: { explore: "EXPLORE COLLECTION", viewCategories: "VIEW CATEGORIES", curatedSelections: "CURATED SELECTIONS", signatureCategories: "SIGNATURE CATEGORIES", catalog: "DYNAMIC CATALOG", theDoomnaDrop: "THE DOOMNA DROP" },
    hi: { explore: "संग्रह देखें", viewCategories: "श्रेणियां देखें", curatedSelections: "विशेष चयन", signatureCategories: "हमारी खास श्रेणियां", catalog: "कैटलॉग", theDoomnaDrop: "दूम्ना कलेक्शन" }
};

async function checkBackendConnectivity() {
    try {
        const res = await fetch('/api/products');
        if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data) && data.length > 0) {
                isBackendAvailable = true;
                products = data;
            }
        }
    } catch (e) { isBackendAvailable = false; }
}

function getLocalData() {
    const raw = localStorage.getItem('doomna_db');
    if (!raw) return null;
    return JSON.parse(raw);
}

document.addEventListener('DOMContentLoaded', async () => {
    await checkBackendConnectivity();
    await loadStoreData();
    setupEventListeners();
    setupPdpMainFrameSwipe();
    setupLightboxSwipeAndKeys();
    updateUserHeaderState();
    updateCartUI();
    updateWishlistUI();
    updateCompareUI();
    applyLanguage(currentLanguage);
});

async function loadStoreData() {
    if (isBackendAvailable) {
        try {
            const [pRes, sRes, pgRes, scRes] = await Promise.all([
                fetch('/api/products').then(r => r.json()),
                fetch('/api/settings').then(r => r.json()),
                fetch('/api/pages').then(r => r.json()),
                fetch('/api/size-charts').then(r => r.json())
            ]);
            if (Array.isArray(pRes) && pRes.length > 0) products = pRes;
            if (sRes) settings = sRes;
            if (pgRes) pages = pgRes;
            if (Array.isArray(scRes) && scRes.length > 0) sizeCharts = scRes;
        } catch (e) { fallbackLocal(); }
    } else {
        fallbackLocal();
    }

    if (!products || products.length === 0) products = DEFAULT_PRODUCTS;
    if (!sizeCharts || sizeCharts.length === 0) sizeCharts = DEFAULT_SIZE_CHARTS;

    renderCMS(settings);
    renderProducts();
}

function fallbackLocal() {
    const local = getLocalData();
    if (local && local.products && local.products.length > 0) {
        products = local.products;
        settings = local.settings || settings;
        pages = local.pages || {};
        sizeCharts = local.sizeCharts || DEFAULT_SIZE_CHARTS;
    } else {
        products = DEFAULT_PRODUCTS;
        sizeCharts = DEFAULT_SIZE_CHARTS;
        const dbToSave = { products: DEFAULT_PRODUCTS, masterSizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"], sizeCharts: DEFAULT_SIZE_CHARTS, settings, pages: {}, orders: [], coupons: [], customers: [] };
        localStorage.setItem('doomna_db', JSON.stringify(dbToSave));
    }
}

function formatINR(amount) {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
}

function applyLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('doomna_lang', lang);
    const langSelect = document.getElementById('langSelect');
    if (langSelect) langSelect.value = lang;

    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.textContent = dict[key];
    });
    renderProducts();
}

function renderCMS(cms) {
    if (!cms) return;

    const announceEl = document.getElementById('announcementText');
    const badgeEl = document.getElementById('heroBadge');
    const titleEl = document.getElementById('heroTitle');
    const subEl = document.getElementById('heroSubtitle');
    const centerLogo = document.getElementById('heroCenterLogo');
    const leftCard = document.querySelector('.hero-side-card.left-card');
    const rightCard = document.querySelector('.hero-side-card.right-card');
    const leftImg = document.getElementById('heroLeftImg');
    const rightImg = document.getElementById('heroRightImg');
    const waBtn = document.getElementById('whatsappFloat');

    if (announceEl && cms.announcementBar) announceEl.innerHTML = `<span>${cms.announcementBar}</span>`;
    if (badgeEl && cms.heroBadgeText) badgeEl.innerHTML = `<span class="pulse-dot"></span> ${cms.heroBadgeText}`;
    if (titleEl && cms.heroTitle) titleEl.innerHTML = cms.heroTitle;
    if (subEl && cms.heroSubtitle) subEl.textContent = cms.heroSubtitle;
    if (centerLogo && cms.heroImageUrl) centerLogo.src = cms.heroImageUrl;

    const feat = cms.featuredProducts || {
        left: { productId: "doom-01", title: "Cybernetic Oversized Tee", tag: "NEW DROP", imageUrl: "assets/products/oversized_tee_1.jpg", enabled: true },
        right: { productId: "doom-03", title: "Obsidian Jacquard Polo", tag: "EXCLUSIVE", imageUrl: "assets/products/polo_tee_1.jpg", enabled: true }
    };

    if (leftCard && leftImg) {
        if (feat.left && feat.left.enabled !== false) {
            leftCard.style.display = 'block';
            leftImg.src = feat.left.imageUrl || cms.heroLeftImg || 'assets/products/oversized_tee_1.jpg';
            const tagEl = leftCard.querySelector('.side-card-tag');
            if (tagEl) tagEl.textContent = feat.left.tag || 'NEW DROP';
            leftCard.style.cursor = 'pointer';
            leftCard.onclick = () => openProductDetailPage(feat.left.productId || 'doom-01');
        } else {
            leftCard.style.display = 'none';
        }
    }

    if (rightCard && rightImg) {
        if (feat.right && feat.right.enabled !== false) {
            rightCard.style.display = 'block';
            rightImg.src = feat.right.imageUrl || cms.heroRightImg || 'assets/products/coord_set_1.jpg';
            const tagEl = rightCard.querySelector('.side-card-tag');
            if (tagEl) tagEl.textContent = feat.right.tag || 'EXCLUSIVE';
            rightCard.style.cursor = 'pointer';
            rightCard.onclick = () => openProductDetailPage(feat.right.productId || 'doom-03');
        } else {
            rightCard.style.display = 'none';
        }
    }

    if (waBtn) {
        const phoneClean = (cms.whatsappNumber || '+917206221406').replace(/[^0-9]/g, '');
        waBtn.href = `https://wa.me/${phoneClean}?text=Hi%20Doomna,%20I%20have%20a%20query`;
    }

    const wishBtn = document.getElementById('wishlistBtn');
    if (wishBtn) {
        wishBtn.style.display = (cms.enableWishlist !== false) ? 'flex' : 'none';
    }

    if (cms.address) {
        const addrEl = document.getElementById('contactAddress');
        if (addrEl) addrEl.textContent = cms.address;
    }
    if (cms.conciergeEmail) {
        const emailEl = document.getElementById('contactEmailDisplay');
        if (emailEl) emailEl.textContent = cms.conciergeEmail;
    }
    if (cms.phone) {
        const phoneEl = document.getElementById('contactPhoneDisplay');
        if (phoneEl) phoneEl.textContent = cms.phone;
    }
}

function setupEventListeners() {
    const langSelect = document.getElementById('langSelect');
    if (langSelect) langSelect.addEventListener('change', (e) => applyLanguage(e.target.value));

    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    if (mobileToggle) mobileToggle.addEventListener('click', () => navLinks.classList.toggle('active'));

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
            searchInput.value = ''; searchQuery = ''; clearSearch.style.display = 'none'; renderProducts();
        });
    }

    const filterTabs = document.querySelectorAll('#filterTabs .tab-btn');
    filterTabs.forEach(btn => {
        btn.addEventListener('click', () => {
            filterTabs.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.getAttribute('data-filter');
            renderProducts();
        });
    });

    const catCards = document.querySelectorAll('.category-card');
    catCards.forEach(card => {
        card.addEventListener('click', () => {
            filterCategory(card.getAttribute('data-category'));
            showMainView();
            document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
        });
    });

    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) sortSelect.addEventListener('change', (e) => { currentSort = e.target.value; renderProducts(); });

    const cartBtn = document.getElementById('cartBtn');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const cartOverlay = document.getElementById('cartOverlay');
    if (cartBtn) cartBtn.addEventListener('click', openCartDrawer);
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);

    const applyPromoBtn = document.getElementById('applyPromoBtn');
    if (applyPromoBtn) applyPromoBtn.addEventListener('click', handleApplyPromo);

    const proceedCheckoutBtn = document.getElementById('proceedCheckoutBtn');
    if (proceedCheckoutBtn) {
        proceedCheckoutBtn.addEventListener('click', () => {
            if (cart.length === 0) return showToast("Your cart is empty!", "fa-triangle-exclamation");
            closeCartDrawer();
            openCheckoutModal();
        });
    }

    const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
    if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', closeCheckoutModal);

    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) checkoutForm.addEventListener('submit', handleCheckoutSubmit);

    const loginForm = document.getElementById('loginForm');
    if (loginForm) loginForm.addEventListener('submit', handleLoginSubmit);

    const registerForm = document.getElementById('registerForm');
    if (registerForm) registerForm.addEventListener('submit', handleRegisterSubmit);

    const forgotForm = document.getElementById('forgotForm');
    if (forgotForm) {
        forgotForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast("Password reset link sent to your email!", "fa-envelope");
            switchAuthTab('login');
        });
    }

    const continueShoppingBtn = document.getElementById('continueShoppingBtn');
    if (continueShoppingBtn) continueShoppingBtn.addEventListener('click', () => document.getElementById('orderSuccessModal').classList.remove('active'));

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast("Message sent to Doomna Concierge!", "fa-paper-plane");
            contactForm.reset();
        });
    }
}

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');
    if (!grid) return;

    let filtered = (products || DEFAULT_PRODUCTS).filter(p => {
        if (p.enabled === false) return false;
        const matchesCat = (activeCategory === 'all') || (p.category === activeCategory);
        const matchesSearch = p.title.toLowerCase().includes(searchQuery) ||
                              p.category.toLowerCase().includes(searchQuery) ||
                              (p.description || '').toLowerCase().includes(searchQuery);
        return matchesCat && matchesSearch;
    });

    if (currentSort === 'price-low') filtered.sort((a, b) => a.price - b.price);
    else if (currentSort === 'price-high') filtered.sort((a, b) => b.price - a.price);
    else if (currentSort === 'rating') filtered.sort((a, b) => b.rating - a.rating);

    if (filtered.length === 0) {
        grid.style.display = 'none';
        if (noResults) noResults.style.display = 'block';
        return;
    }

    grid.style.display = 'grid';
    if (noResults) noResults.style.display = 'none';

    const isWishlistEnabled = settings.enableWishlist !== false;

    grid.innerHTML = filtered.map(p => {
        const chosenSize = selectedSizes[p.id] || '';
        const mainImg = (p.images && p.images.length > 0) ? p.images[0] : 'assets/products/oversized_tee_1.jpg';
        const isOutOfStock = p.stock <= 0;
        const isWishlisted = wishlist.includes(p.id);

        return `
            <div class="product-card">
                <span class="product-badge">${p.badge || 'NEW'}</span>
                
                ${isWishlistEnabled ? `
                    <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" 
                            onclick="event.stopPropagation(); toggleWishlist('${p.id}')" title="Wishlist">
                        <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                    </button>
                ` : ''}

                <div class="product-img-wrap" onclick="openProductDetailPage('${p.id}')">
                    <img src="${mainImg}" alt="${p.title}">
                </div>

                <div class="product-details">
                    <span class="product-cat">${p.category}</span>
                    <h3 class="product-title" onclick="openProductDetailPage('${p.id}')" style="cursor:pointer;">${p.title}</h3>
                    
                    <div class="product-price-row">
                        <span class="product-price">${formatINR(p.price)}</span>
                        ${p.comparePrice ? `<span class="pdp-compare-price">${formatINR(p.comparePrice)}</span>` : ''}
                    </div>

                    <div style="font-size:0.7rem; color:var(--accent-lime); font-weight:700; margin: 2px 0 6px 0;">
                        Inclusive of all taxes • Free Shipping
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 6px;">
                        <span class="size-selector-label">Select Size:</span>
                        <small style="color:${isOutOfStock ? '#ff4d4d' : 'var(--text-secondary)'}; font-weight:700; font-size:0.7rem;">
                            ${isOutOfStock ? 'OUT OF STOCK' : p.stock + ' in stock'}
                        </small>
                    </div>

                    <div class="size-options">
                        ${(p.sizes || ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL']).map(size => `
                            <button class="size-btn ${chosenSize === size ? 'selected' : ''}" 
                                    onclick="selectProductSize('${p.id}', '${size}')">
                                ${size}
                            </button>
                        `).join('')}
                    </div>

                    <button class="add-cart-btn" ${isOutOfStock ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''} onclick="handleAddToCart('${p.id}')">
                        <i class="fa-solid fa-bag-shopping"></i> ${isOutOfStock ? 'SOLD OUT' : 'ADD TO CART'}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function selectProductSize(productId, size) {
    selectedSizes[productId] = size;
    renderProducts();

    if (activeProduct && activeProduct.id === productId) {
        renderPdpSizeSelectionUI(productId);
    }
}

function renderPdpSizeSelectionUI(productId) {
    const sizeContainer = document.getElementById('pdpSizeOptions');
    const indicator = document.getElementById('pdpSelectedSizeDisplay');
    if (!activeProduct || activeProduct.id !== productId) return;

    const chosenSize = selectedSizes[productId] || '';

    if (sizeContainer) {
        sizeContainer.innerHTML = (activeProduct.sizes || ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL']).map(size => `
            <button class="size-btn ${chosenSize === size ? 'selected' : ''}" onclick="selectProductSize('${productId}', '${size}')">
                ${size}
            </button>
        `).join('');
    }

    if (indicator) {
        if (chosenSize) {
            indicator.innerHTML = `<i class="fa-solid fa-circle-check neon-text"></i> Selected Size: <strong style="color:var(--text-white); margin-left:4px;">${chosenSize}</strong>`;
        } else {
            indicator.innerHTML = `<span style="color:var(--text-secondary);"><i class="fa-solid fa-info-circle"></i> Please select your size</span>`;
        }
    }
}

function filterCategory(categoryName) {
    activeCategory = categoryName;
    const tabs = document.querySelectorAll('#filterTabs .tab-btn');
    tabs.forEach(btn => {
        if (btn.getAttribute('data-filter') === categoryName) btn.classList.add('active');
        else btn.classList.remove('active');
    });
    renderProducts();
}

function showMainView() {
    document.getElementById('mainView').style.display = 'block';
    document.getElementById('productDetailView').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openProductDetailPage(productId) {
    const product = (products || DEFAULT_PRODUCTS).find(p => p.id === productId);
    if (!product) return;

    activeProduct = product;
    activeImageIndex = 0;

    if (!recentlyViewed.find(r => r.id === product.id)) {
        recentlyViewed.unshift(product);
        if (recentlyViewed.length > 4) recentlyViewed.pop();
        localStorage.setItem('doomna_recent', JSON.stringify(recentlyViewed));
    }

    document.getElementById('mainView').style.display = 'none';
    document.getElementById('productDetailView').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    document.getElementById('pdpBrand').textContent = product.brand || 'Doomna';
    document.getElementById('pdpSku').textContent = product.sku || 'SKU-DM-001';
    document.getElementById('pdpSubcategory').textContent = product.subcategory || product.category;
    document.getElementById('pdpTitle').textContent = product.title;
    document.getElementById('pdpSubtitle').textContent = product.subtitle || 'Comfort Crafted For Timeless Luxury';
    document.getElementById('pdpPrice').textContent = formatINR(product.price);

    const compareEl = document.getElementById('pdpComparePrice');
    const badgeEl = document.getElementById('pdpDiscountBadge');
    if (product.comparePrice && product.comparePrice > product.price) {
        compareEl.style.display = 'inline';
        compareEl.textContent = formatINR(product.comparePrice);
        const discount = Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100);
        badgeEl.textContent = `${discount}% OFF`;
        badgeEl.style.display = 'inline';
    } else {
        compareEl.style.display = 'none';
        badgeEl.style.display = 'none';
    }

    document.getElementById('pdpShortDescription').textContent = product.shortDescription || product.description || '';
    
    const longDescContainer = document.getElementById('pdpLongDescription');
    if (longDescContainer) {
        longDescContainer.innerHTML = product.longDescription || product.description || 'Full craft story coming soon...';
    }

    document.getElementById('pdpFabric').textContent = product.fabric || '100% Organic Heavyweight Cotton';
    document.getElementById('pdpGsm').textContent = product.gsm || '280 GSM Heavyweight';
    document.getElementById('pdpWashCare').textContent = product.washCare || 'Machine wash cold inside out';
    document.getElementById('pdpColors').textContent = (product.colors || ['Obsidian Black']).join(', ');

    renderPdpColorVariants(product);
    renderPdpSizeSelectionUI(product.id);

    const pdpWishBtn = document.getElementById('pdpWishlistBtn');
    if (pdpWishBtn) {
        const isW = wishlist.includes(product.id);
        pdpWishBtn.innerHTML = `<i class="${isW ? 'fa-solid' : 'fa-regular'} fa-heart" style="${isW ? 'color:#ff4d4d;' : ''}"></i>`;
    }

    document.getElementById('pdpAddToCartBtn').onclick = () => handlePdpAddToCart();
    document.getElementById('pdpBuyNowBtn').onclick = () => handlePdpBuyNow();
    document.getElementById('pdpWishlistBtn').onclick = () => toggleWishlist(product.id);
    document.getElementById('pdpCompareBtn').onclick = () => toggleCompare(product.id);

    renderRelatedProducts(product.category, product.id);
    renderRecentlyViewedGrid();
}

function renderPdpColorVariants(product) {
    const swatchesContainer = document.getElementById('pdpColorSwatchesList');
    const nameDisplay = document.getElementById('pdpSelectedColorName');
    if (!swatchesContainer) return;

    const variants = product.colorVariants && product.colorVariants.length > 0 ? product.colorVariants : [
        { color: (product.colors && product.colors[0]) || "Obsidian Black", colorHex: "#070707", swatchImg: product.images[0], images: product.images, stock: product.stock, price: product.price }
    ];

    const currentSelColor = selectedColors[product.id] || variants[0].color;
    activeColorVariant = variants.find(v => v.color === currentSelColor) || variants[0];

    if (nameDisplay) nameDisplay.textContent = activeColorVariant.color;

    swatchesContainer.innerHTML = variants.map(v => `
        <div class="color-swatch-item ${v.color === activeColorVariant.color ? 'active' : ''}" 
             title="${v.color}" onclick="selectProductColorVariant('${product.id}', '${v.color}')">
            ${v.swatchImg ? `<img src="${v.swatchImg}" alt="${v.color}">` : `<div class="color-dot-fill" style="background:${v.colorHex || '#000'};"></div>`}
        </div>
    `).join('');

    const activeImages = activeColorVariant.images && activeColorVariant.images.length > 0 ? activeColorVariant.images : product.images;
    const thumbsList = document.getElementById('pdpThumbnailsList');

    thumbsList.innerHTML = activeImages.map((img, idx) => `
        <img src="${img}" alt="Thumb ${idx}" class="pdp-thumb ${idx === 0 ? 'active' : ''}" onclick="switchPdpMediaByIndex(${idx}, this)">
    `).join('');

    if (product.videoUrl) {
        thumbsList.innerHTML += `
            <div class="pdp-thumb video-thumb" onclick="switchPdpMedia('${product.videoUrl}', true, this)" style="display:flex; align-items:center; justify-content:center; background:#1c1c1c; color:var(--accent-lime);">
                <i class="fa-solid fa-play"></i>
            </div>
        `;
    }

    switchPdpMediaByIndex(0, thumbsList.children[0]);
}

function selectProductColorVariant(productId, colorName) {
    selectedColors[productId] = colorName;
    if (activeProduct && activeProduct.id === productId) {
        renderPdpColorVariants(activeProduct);
    }
}

function handlePdpAddToCart() {
    if (!activeProduct) return;
    const chosenSize = selectedSizes[activeProduct.id];
    if (!chosenSize) {
        showToast("Please select a size before continuing.", "fa-triangle-exclamation");
        return;
    }
    const chosenColor = selectedColors[activeProduct.id] || (activeColorVariant ? activeColorVariant.color : 'Obsidian Black');
    handleAddToCart(activeProduct.id, chosenSize, chosenColor);
}

function handlePdpBuyNow() {
    if (!activeProduct) return;
    const chosenSize = selectedSizes[activeProduct.id];
    if (!chosenSize) {
        showToast("Please select a size before continuing.", "fa-triangle-exclamation");
        return;
    }
    const chosenColor = selectedColors[activeProduct.id] || (activeColorVariant ? activeColorVariant.color : 'Obsidian Black');
    handleAddToCart(activeProduct.id, chosenSize, chosenColor);
    openCheckoutModal();
}

function navigatePdpImage(direction) {
    if (!activeProduct) return;
    const currentImages = (activeColorVariant && activeColorVariant.images && activeColorVariant.images.length > 0) ? activeColorVariant.images : activeProduct.images;
    if (!currentImages || currentImages.length === 0) return;

    const total = currentImages.length;
    activeImageIndex = (activeImageIndex + direction + total) % total;
    
    const thumbs = document.querySelectorAll('#pdpThumbnailsList .pdp-thumb');
    const targetThumb = thumbs[activeImageIndex];
    switchPdpMediaByIndex(activeImageIndex, targetThumb);
}

function switchPdpMediaByIndex(index, thumbEl) {
    if (!activeProduct) return;
    const currentImages = (activeColorVariant && activeColorVariant.images && activeColorVariant.images.length > 0) ? activeColorVariant.images : activeProduct.images;
    if (!currentImages) return;

    activeImageIndex = index;
    const imgUrl = currentImages[index] || currentImages[0];
    switchPdpMedia(imgUrl, false, thumbEl);
}

function switchPdpMedia(mediaUrl, isVideo, thumbEl) {
    const mainImg = document.getElementById('pdpMainImage');
    const mainVideo = document.getElementById('pdpMainVideo');
    document.querySelectorAll('.pdp-thumb').forEach(t => t.classList.remove('active'));
    if (thumbEl) thumbEl.classList.add('active');

    if (isVideo) {
        mainImg.style.display = 'none';
        mainVideo.style.display = 'block';
        mainVideo.src = mediaUrl;
        mainVideo.play();
    } else {
        mainVideo.style.display = 'none';
        mainVideo.pause();
        mainImg.style.display = 'block';
        mainImg.style.opacity = '0';
        mainImg.src = mediaUrl;
        setTimeout(() => mainImg.style.opacity = '1', 50);
    }
}

function setupPdpMainFrameSwipe() {
    const frame = document.getElementById('pdpMainMediaFrame');
    if (!frame) return;

    let pStartX = 0;
    let pEndX = 0;

    frame.addEventListener('touchstart', (e) => {
        pStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    frame.addEventListener('touchend', (e) => {
        pEndX = e.changedTouches[0].screenX;
        const threshold = 40;
        if (pEndX < pStartX - threshold) navigatePdpImage(1);
        else if (pEndX > pStartX + threshold) navigatePdpImage(-1);
    }, { passive: true });
}

// FULLSCREEN PRODUCT LIGHTBOX GALLERY LOGIC WITH TOUCH SWIPE & KEYBOARD ARROWS
function openPdpLightboxFromMain() {
    openPdpLightbox(activeImageIndex || 0);
}

function openPdpLightbox(index = 0) {
    if (!activeProduct) return;
    const currentImages = (activeColorVariant && activeColorVariant.images && activeColorVariant.images.length > 0) ? activeColorVariant.images : activeProduct.images;
    if (!currentImages || currentImages.length === 0) return;

    activeImageIndex = index;
    lightboxZoomScale = 1;

    const modal = document.getElementById('pdpLightboxModal');
    const mainImg = document.getElementById('lightboxMainImage');
    const counter = document.getElementById('lightboxCounter');
    const thumbsStrip = document.getElementById('lightboxThumbsStrip');

    if (!modal || !mainImg) return;

    mainImg.src = currentImages[activeImageIndex] || currentImages[0];
    mainImg.style.transform = 'scale(1)';

    if (counter) counter.textContent = `${activeImageIndex + 1} / ${currentImages.length}`;

    if (thumbsStrip) {
        thumbsStrip.innerHTML = currentImages.map((img, idx) => `
            <img src="${img}" alt="Strip Thumb ${idx}" class="${idx === activeImageIndex ? 'active' : ''}" onclick="openPdpLightbox(${idx})">
        `).join('');
    }

    modal.classList.add('active');
}

function closePdpLightbox() {
    const modal = document.getElementById('pdpLightboxModal');
    if (modal) modal.classList.remove('active');
}

function navigatePdpLightbox(direction) {
    if (!activeProduct) return;
    const currentImages = (activeColorVariant && activeColorVariant.images && activeColorVariant.images.length > 0) ? activeColorVariant.images : activeProduct.images;
    if (!currentImages) return;

    const total = currentImages.length;
    activeImageIndex = (activeImageIndex + direction + total) % total;
    openPdpLightbox(activeImageIndex);
}

function zoomPdpLightbox(factor) {
    const mainImg = document.getElementById('lightboxMainImage');
    if (!mainImg) return;
    lightboxZoomScale = Math.max(0.5, Math.min(3, lightboxZoomScale * factor));
    mainImg.style.transform = `scale(${lightboxZoomScale})`;
}

function resetPdpLightboxZoom() {
    const mainImg = document.getElementById('lightboxMainImage');
    if (!mainImg) return;
    lightboxZoomScale = 1;
    mainImg.style.transform = 'scale(1)';
}

function setupLightboxSwipeAndKeys() {
    const lightboxModal = document.getElementById('pdpLightboxModal');
    if (!lightboxModal) return;

    lightboxModal.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightboxModal.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleLightboxSwipe();
    }, { passive: true });

    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('pdpLightboxModal');
        if (!modal || !modal.classList.contains('active')) return;

        if (e.key === 'ArrowLeft') navigatePdpLightbox(-1);
        else if (e.key === 'ArrowRight') navigatePdpLightbox(1);
        else if (e.key === 'Escape') closePdpLightbox();
    });
}

function handleLightboxSwipe() {
    const swipeThreshold = 40;
    if (touchEndX < touchStartX - swipeThreshold) navigatePdpLightbox(1);
    else if (touchEndX > touchStartX + swipeThreshold) navigatePdpLightbox(-1);
}

function openSizeChartModal() {
    const modal = document.getElementById('sizeChartModal');
    const tableContainer = document.getElementById('pdpSizeChartContainer');
    if (!modal || !tableContainer) return;

    let activeChart = (sizeCharts || DEFAULT_SIZE_CHARTS).find(sc => sc.id === (activeProduct ? activeProduct.sizeChartId : 'sc-oversized'));
    if (!activeChart) activeChart = sizeCharts[0] || DEFAULT_SIZE_CHARTS[0];

    tableContainer.innerHTML = `
        <div style="margin-bottom:16px;">
            <strong style="color:var(--accent-lime); font-size:1.1rem;">${activeChart.title}</strong>
            <span style="font-size:0.8rem; color:var(--text-secondary); margin-left:8px;">(${activeChart.category})</span>
        </div>
        <table class="admin-table">
            <thead>
                <tr>
                    <th>Size</th>
                    <th>Chest (in)</th>
                    <th>Length (in)</th>
                    <th>Shoulder (in)</th>
                    <th>Sleeve (in)</th>
                </tr>
            </thead>
            <tbody>
                ${(activeChart.rows || []).map(r => `
                    <tr>
                        <td><strong>${r.size}</strong></td>
                        <td>${r.chest}</td>
                        <td>${r.length}</td>
                        <td>${r.shoulder || '-'}</td>
                        <td>${r.sleeve || '-'}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    modal.classList.add('active');
}

function renderRelatedProducts(category, currentId) {
    const grid = document.getElementById('relatedProductsGrid');
    if (!grid) return;
    const related = (products || DEFAULT_PRODUCTS).filter(p => p.category === category && p.id !== currentId).slice(0, 3);
    grid.innerHTML = related.map(p => `
        <div class="product-card">
            <div class="product-img-wrap" onclick="openProductDetailPage('${p.id}')">
                <img src="${p.images[0]}" alt="${p.title}">
            </div>
            <div class="product-details">
                <h4 style="font-family:var(--font-heading); font-size:1rem; cursor:pointer;" onclick="openProductDetailPage('${p.id}')">${p.title}</h4>
                <span class="product-price">${formatINR(p.price)}</span>
            </div>
        </div>
    `).join('');
}

function renderRecentlyViewedGrid() {
    const grid = document.getElementById('recentlyViewedGrid');
    if (!grid) return;
    grid.innerHTML = recentlyViewed.map(p => `
        <div class="product-card">
            <div class="product-img-wrap" onclick="openProductDetailPage('${p.id}')">
                <img src="${p.images[0]}" alt="${p.title}">
            </div>
            <div class="product-details">
                <h4 style="font-family:var(--font-heading); font-size:1rem; cursor:pointer;" onclick="openProductDetailPage('${p.id}')">${p.title}</h4>
                <span class="product-price">${formatINR(p.price)}</span>
            </div>
        </div>
    `).join('');
}

function handleAddToCart(productId, explicitSize = null, explicitColor = null) {
    const p = (products || DEFAULT_PRODUCTS).find(prod => prod.id === productId);
    if (!p || p.stock <= 0) return;

    const size = explicitSize || selectedSizes[productId] || (p.sizes ? p.sizes[0] : 'L');
    const color = explicitColor || selectedColors[productId] || (p.colors ? p.colors[0] : 'Obsidian Black');

    if (!size) {
        showToast("Please select a size before continuing.", "fa-triangle-exclamation");
        return;
    }

    const existing = cart.find(i => i.id === productId && i.size === size && i.color === color);

    if (existing) existing.quantity += 1;
    else cart.push({ id: p.id, title: p.title, price: p.price, image: (p.images && p.images[0]) ? p.images[0] : 'assets/products/oversized_tee_1.jpg', size: size, color: color, quantity: 1 });

    saveCart();
    updateCartUI();
    showToast(`Added ${p.title} (${color} / ${size}) to cart`, "fa-bag-shopping");
    openCartDrawer();
}

function updateCartQuantity(productId, size, delta) {
    const index = cart.findIndex(i => i.id === productId && i.size === size);
    if (index > -1) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) cart.splice(index, 1);
    }
    saveCart();
    updateCartUI();
}

function removeFromCart(productId, size) {
    cart = cart.filter(i => !(i.id === productId && i.size === size));
    saveCart();
    updateCartUI();
}

function saveCart() { localStorage.setItem('doomna_cart', JSON.stringify(cart)); }

function updateCartUI() {
    const badge = document.getElementById('cartBadge');
    const countTitle = document.getElementById('cartCountTitle');
    const container = document.getElementById('cartItemsContainer');
    const subtotalEl = document.getElementById('cartSubtotal');
    const shippingEl = document.getElementById('cartShipping');
    const totalEl = document.getElementById('cartTotal');

    const count = cart.reduce((s, i) => s + i.quantity, 0);
    if (badge) badge.textContent = count;
    if (countTitle) countTitle.textContent = count;

    if (!container) return;
    if (cart.length === 0) {
        container.innerHTML = `<div class="cart-empty-msg"><i class="fa-solid fa-bag-shopping"></i><p>Your shopping cart is empty.</p></div>`;
        if (subtotalEl) subtotalEl.textContent = '₹0.00';
        if (shippingEl) shippingEl.textContent = 'FREE';
        if (totalEl) totalEl.textContent = '₹0.00';
        return;
    }

    let subtotal = cart.reduce((s, i) => s + (i.price * i.quantity), 0);
    let discountAmount = appliedPromo ? subtotal * (appliedPromo.discountPercent / 100) : 0;
    let total = subtotal - discountAmount;

    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.title}" class="cart-item-img">
            <div class="cart-item-info">
                <div>
                    <h4 class="cart-item-title">${item.title}</h4>
                    <div class="cart-item-meta">Color: <span>${item.color || 'Black'}</span> | Size: <strong style="color:var(--accent-lime);">${item.size}</strong></div>
                </div>
                <div class="cart-item-bottom">
                    <span class="cart-item-price">${formatINR(item.price * item.quantity)}</span>
                    <div class="qty-control">
                        <button class="qty-btn" onclick="updateCartQuantity('${item.id}', '${item.size}', -1)">-</button>
                        <span class="qty-val">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateCartQuantity('${item.id}', '${item.size}', 1)">+</button>
                    </div>
                    <button class="remove-item-btn" onclick="removeFromCart('${item.id}', '${item.size}')"><i class="fa-regular fa-trash-can"></i></button>
                </div>
            </div>
        </div>
    `).join('');

    if (subtotalEl) subtotalEl.textContent = formatINR(subtotal);
    if (shippingEl) shippingEl.textContent = 'FREE';
    if (totalEl) totalEl.textContent = formatINR(total);
}

function openCartDrawer() { document.getElementById('cartDrawer').classList.add('active'); document.getElementById('cartOverlay').classList.add('active'); }
function closeCartDrawer() { document.getElementById('cartDrawer').classList.remove('active'); document.getElementById('cartOverlay').classList.remove('active'); }

function handleApplyPromo() {
    const input = document.getElementById('promoInput');
    const msg = document.getElementById('promoMessage');
    if (!input || !msg) return;

    const code = input.value.trim().toUpperCase();
    if (code === 'DOOMNA10') {
        appliedPromo = { code: 'DOOMNA10', discountPercent: 10 };
        msg.textContent = "10% Discount Code Applied!";
        msg.className = "promo-msg success";
        updateCartUI();
    } else {
        msg.textContent = "Invalid code";
        msg.className = "promo-msg error";
    }
}

function openCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    if (!modal) return;

    let subtotal = cart.reduce((s, i) => s + (i.price * i.quantity), 0);
    let discountAmount = appliedPromo ? subtotal * (appliedPromo.discountPercent / 100) : 0;
    let total = subtotal - discountAmount;

    document.getElementById('chkSubtotal').textContent = formatINR(subtotal);
    document.getElementById('chkGst').textContent = 'Included';
    document.getElementById('chkShipping').textContent = 'FREE';
    document.getElementById('chkTotal').textContent = formatINR(total);

    if (currentUser) {
        document.getElementById('chkFirstName').value = currentUser.name ? currentUser.name.split(' ')[0] : '';
        document.getElementById('chkLastName').value = currentUser.name ? currentUser.name.split(' ').slice(1).join(' ') : '';
        document.getElementById('chkEmail').value = currentUser.email || '';
        document.getElementById('chkPhone').value = currentUser.phone || '';
        if (currentUser.addresses && currentUser.addresses.length > 0) {
            document.getElementById('chkAddress').value = currentUser.addresses[0].line;
        }
    }

    document.getElementById('checkoutItemsList').innerHTML = cart.map(i => `
        <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.85rem;">
            <span>${i.title} (${i.color || 'Black'} / <strong style="color:var(--accent-lime);">${i.size}</strong>) x${i.quantity}</span>
            <strong>${formatINR(i.price * i.quantity)}</strong>
        </div>
    `).join('');

    modal.classList.add('active');
}

function closeCheckoutModal() { document.getElementById('checkoutModal').classList.remove('active'); }

async function handleCheckoutSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('chkFirstName').value + ' ' + document.getElementById('chkLastName').value;
    const email = document.getElementById('chkEmail').value;
    const phone = document.getElementById('chkPhone').value;
    const address = document.getElementById('chkAddress').value + ', ' + document.getElementById('chkCity').value;
    const payMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    let subtotal = cart.reduce((s, i) => s + (i.price * i.quantity), 0);
    let discountAmount = appliedPromo ? subtotal * (appliedPromo.discountPercent / 100) : 0;
    const shippingFee = 0;
    const totalAmount = subtotal - discountAmount;

    pendingCheckoutData = { customerName: name, email, phone, address, items: [...cart], subtotal, discountAmount, shippingFee, totalAmount, payMethod };

    if (payMethod === 'razorpay') {
        initiateRazorpayPayment(pendingCheckoutData);
    } else if (payMethod === 'phonepe') {
        initiatePhonePePayment(pendingCheckoutData);
    } else {
        completeOrderPlacement(pendingCheckoutData, 'pay_cod_' + Date.now());
    }
}

function initiateRazorpayPayment(data) {
    const razorpayKey = settings.razorpayKeyId || 'rzp_test_DOOMNA2026KEY';

    const options = {
        key: razorpayKey,
        amount: Math.round(data.totalAmount * 100),
        currency: 'INR',
        name: 'Doomna Luxury Atelier',
        description: 'High-Street Luxury Fashion Checkout',
        image: 'assets/hero-brand.jpg',
        handler: function (response) {
            completeOrderPlacement(data, response.razorpay_payment_id || ('pay_rzp_' + Date.now()));
        },
        prefill: { name: data.customerName, email: data.email, contact: data.phone },
        theme: { color: '#CCFF00' },
        modal: { ondismiss: function () { showPaymentFailure("Payment window closed by user."); } }
    };

    if (window.Razorpay) {
        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', function (resp) {
            showPaymentFailure(resp.error.description || "Razorpay payment failed.");
        });
        rzp.open();
    } else {
        completeOrderPlacement(data, 'pay_rzp_sim_' + Date.now());
    }
}

function initiatePhonePePayment(data) {
    showToast("Connecting to PhonePe Gateway...", "fa-mobile-screen");
    setTimeout(() => {
        completeOrderPlacement(data, 'pay_ppe_sim_' + Date.now());
    }, 1200);
}

function showPaymentFailure(reason) {
    closeCheckoutModal();
    const reasonEl = document.getElementById('paymentFailedReason');
    if (reasonEl) reasonEl.textContent = reason;
    document.getElementById('paymentFailedModal').classList.add('active');
}

function retryPayment() {
    document.getElementById('paymentFailedModal').classList.remove('active');
    openCheckoutModal();
}

function switchPaymentMethod() {
    document.getElementById('paymentFailedModal').classList.remove('active');
    openCheckoutModal();
}

async function completeOrderPlacement(data, paymentId) {
    let orderId = '#DOOMNA-' + Math.floor(100000 + Math.random() * 900000);
    let awb = 'AWB' + Math.floor(10000000 + Math.random() * 90000000);

    const payload = {
        customerName: data.customerName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        items: data.items,
        subtotal: data.subtotal,
        discountAmount: data.discountAmount,
        shippingFee: 0,
        gstIncluded: true,
        paymentMethod: data.payMethod.toUpperCase(),
        paymentId: paymentId,
        paymentStatus: 'SUCCESS'
    };

    if (isBackendAvailable) {
        try {
            const res = await fetch('/api/orders', {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            }).then(r => r.json());

            if (res.success) {
                orderId = res.order.id;
                awb = res.order.trackingNumber;
            }
        } catch (err) {}
    }

    document.getElementById('confirmedOrderId').textContent = orderId;
    document.getElementById('confirmedPaymentId').textContent = paymentId;
    document.getElementById('confirmedAwb').textContent = awb;

    const waText = encodeURIComponent(`⚡ DOOMNA ORDER CONFIRMED!\nOrder: ${orderId}\nPayment ID: ${paymentId}\nCustomer: ${data.customerName}\nTotal: ₹${data.totalAmount} (Free Shipping & Inclusive GST)\nDelivery: Shakti Nagar, Sirsa, Haryana`);
    const waFloat = document.getElementById('whatsappFloat');
    if (waFloat) waFloat.href = `https://wa.me/917206221406?text=${waText}`;

    closeCheckoutModal();
    cart = [];
    appliedPromo = null;
    saveCart();
    updateCartUI();

    document.getElementById('orderSuccessModal').classList.add('active');
}

// CUSTOMER AUTH & ACCOUNT CONTROLLER
function handleUserButtonClick() {
    if (currentUser) openAccountDashboard();
    else document.getElementById('authModal').classList.add('active');
}

function updateUserHeaderState() {
    const label = document.getElementById('userLabel');
    if (!label) return;
    if (currentUser) label.textContent = currentUser.name ? currentUser.name.split(' ')[0] : 'Account';
    else label.textContent = 'Sign In';
}

function switchAuthTab(tab) {
    document.getElementById('loginForm').style.display = tab === 'login' ? 'block' : 'none';
    document.getElementById('registerForm').style.display = tab === 'register' ? 'block' : 'none';
    document.getElementById('forgotForm').style.display = tab === 'forgot' ? 'block' : 'none';

    document.getElementById('btnTabLogin').classList.toggle('active', tab === 'login');
    document.getElementById('btnTabRegister').classList.toggle('active', tab === 'register');
}

async function handleLoginSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (isBackendAvailable) {
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            }).then(r => r.json());

            if (res.success) {
                currentUser = res.user;
                if (currentUser.wishlist) wishlist = currentUser.wishlist;
                localStorage.setItem('doomna_user', JSON.stringify(currentUser));
                localStorage.setItem('doomna_wishlist', JSON.stringify(wishlist));
                updateUserHeaderState();
                updateWishlistUI();
                renderProducts();
                document.getElementById('authModal').classList.remove('active');
                showToast(`Welcome back, ${currentUser.name}!`, "fa-circle-check");
                return;
            } else return alert(res.message);
        } catch (err) {}
    }

    currentUser = { id: 'cust-local', name: email.split('@')[0], email, phone: '+917206221406', addresses: [] };
    localStorage.setItem('doomna_user', JSON.stringify(currentUser));
    updateUserHeaderState();
    document.getElementById('authModal').classList.remove('active');
    showToast(`Welcome back, ${currentUser.name}!`, "fa-circle-check");
}

async function handleRegisterSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const phone = document.getElementById('regPhone').value;
    const password = document.getElementById('regPassword').value;

    if (isBackendAvailable) {
        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, phone, password })
            }).then(r => r.json());

            if (res.success) {
                currentUser = res.user;
                localStorage.setItem('doomna_user', JSON.stringify(currentUser));
                updateUserHeaderState();
                document.getElementById('authModal').classList.remove('active');
                showToast("Account Created Successfully!", "fa-user-check");
                return;
            } else return alert(res.message);
        } catch (err) {}
    }

    currentUser = { id: 'cust-' + Date.now().toString().slice(-4), name, email, phone, addresses: [] };
    localStorage.setItem('doomna_user', JSON.stringify(currentUser));
    updateUserHeaderState();
    document.getElementById('authModal').classList.remove('active');
    showToast("Account Created Successfully!", "fa-user-check");
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('doomna_user');
    updateUserHeaderState();
    document.getElementById('accountModal').classList.remove('active');
    showToast("Logged out of account", "fa-power-off");
}

function openAccountDashboard() {
    if (!currentUser) return;
    document.getElementById('accName').value = currentUser.name || '';
    document.getElementById('accEmail').value = currentUser.email || '';
    document.getElementById('accPhone').value = currentUser.phone || '';

    renderUserOrders();
    renderUserAddresses();
    document.getElementById('accountModal').classList.add('active');
}

function switchAccountTab(tab, btnEl) {
    document.querySelectorAll('.account-menu-btn').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');

    document.getElementById('accTabProfile').style.display = tab === 'profile' ? 'block' : 'none';
    document.getElementById('accTabOrders').style.display = tab === 'orders' ? 'block' : 'none';
    document.getElementById('accTabAddresses').style.display = tab === 'addresses' ? 'block' : 'none';
}

function saveUserProfile() {
    if (!currentUser) return;
    currentUser.name = document.getElementById('accName').value;
    currentUser.phone = document.getElementById('accPhone').value;
    localStorage.setItem('doomna_user', JSON.stringify(currentUser));
    updateUserHeaderState();
    showToast("Profile Updated!", "fa-user-pen");
}

async function renderUserOrders() {
    const tbody = document.getElementById('userOrdersTableBody');
    if (!tbody) return;

    let ordersList = [];
    if (isBackendAvailable) {
        try {
            const allOrders = await fetch('/api/orders').then(r => r.json());
            ordersList = allOrders.filter(o => o.email === currentUser.email);
        } catch (e) {}
    } else {
        const db = getLocalData();
        ordersList = ((db || {}).orders || []).filter(o => o.email === currentUser.email);
    }

    if (ordersList.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;">No orders placed yet.</td></tr>`;
        return;
    }

    tbody.innerHTML = ordersList.map(o => `
        <tr>
            <td><strong>${o.id}</strong></td>
            <td>${o.date}</td>
            <td><strong class="neon-text">${formatINR(o.totalAmount)}</strong></td>
            <td><span class="badge-status-${(o.status || 'delivered').toLowerCase()}">${o.status}</span></td>
            <td>
                <div style="display:flex; gap:6px;">
                    <button class="btn btn-outline" style="padding:4px 8px; font-size:0.7rem;" onclick="printGstInvoice()"><i class="fa-solid fa-file-invoice"></i> Invoice</button>
                    ${o.status === 'Pending' ? `<button class="btn btn-outline" style="padding:4px 8px; font-size:0.7rem; color:#ff4d4d;" onclick="cancelCustomerOrder('${o.id}')">Cancel</button>` : ''}
                </div>
            </td>
        </tr>
    `).join('');
}

async function cancelCustomerOrder(orderId) {
    if (!confirm("Cancel order " + orderId + "?")) return;
    if (isBackendAvailable) {
        await fetch(`/api/orders/${orderId}/cancel`, { method: 'PUT' });
    }
    showToast("Order cancelled", "fa-circle-xmark");
    renderUserOrders();
}

function renderUserAddresses() {
    const list = document.getElementById('userAddressesList');
    if (!list) return;

    const addrs = currentUser.addresses || [];
    if (addrs.length === 0) {
        list.innerHTML = `<p style="color:var(--text-secondary);">No saved shipping addresses.</p>`;
        return;
    }

    list.innerHTML = addrs.map(a => `
        <div style="background:var(--bg-card); padding:12px; border-radius:var(--radius-sm); margin-bottom:8px; border:1px solid var(--border-subtle);">
            <strong>${a.title || 'Shipping Address'}</strong>
            <p style="font-size:0.85rem; color:var(--text-secondary);">${a.line}</p>
        </div>
    `).join('');
}

function addNewAddressPrompt() {
    const line = prompt("Enter full shipping address (e.g. Flat 101, Shakti Nagar, Sirsa, Haryana 125055):");
    if (line) {
        if (!currentUser.addresses) currentUser.addresses = [];
        currentUser.addresses.push({ id: 'addr-' + Date.now(), title: 'Address ' + (currentUser.addresses.length + 1), line });
        localStorage.setItem('doomna_user', JSON.stringify(currentUser));
        renderUserAddresses();
        showToast("Address saved!", "fa-location-dot");
    }
}

// WISHLIST MANAGEMENT
function toggleWishlist(productId) {
    if (settings.enableWishlist === false) {
        showToast("Wishlist is currently disabled by Admin", "fa-triangle-exclamation");
        return;
    }

    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast("Removed from Wishlist", "fa-heart");
    } else {
        wishlist.push(productId);
        showToast("Added to Wishlist", "fa-heart");
    }

    localStorage.setItem('doomna_wishlist', JSON.stringify(wishlist));
    if (currentUser) {
        currentUser.wishlist = wishlist;
        localStorage.setItem('doomna_user', JSON.stringify(currentUser));
    }

    updateWishlistUI();
    renderProducts();

    if (activeProduct && activeProduct.id === productId) {
        const pdpWishBtn = document.getElementById('pdpWishlistBtn');
        if (pdpWishBtn) {
            const isW = wishlist.includes(productId);
            pdpWishBtn.innerHTML = `<i class="${isW ? 'fa-solid' : 'fa-regular'} fa-heart" style="${isW ? 'color:#ff4d4d;' : ''}"></i>`;
        }
    }
}

function updateWishlistUI() {
    const badge = document.getElementById('wishlistBadge');
    if (badge) badge.textContent = wishlist.length;
}

function openWishlistDrawer() {
    if (settings.enableWishlist === false) {
        showToast("Wishlist feature is currently disabled", "fa-triangle-exclamation");
        return;
    }

    const container = document.getElementById('wishlistItemsContainer');
    const drawer = document.getElementById('wishlistDrawer');
    const overlay = document.getElementById('wishlistOverlay');

    const wishProducts = (products || DEFAULT_PRODUCTS).filter(p => wishlist.includes(p.id));

    if (wishProducts.length === 0) {
        container.innerHTML = `
            <div style="text-align:center; padding:40px 20px; color:var(--text-secondary);">
                <i class="fa-regular fa-heart" style="font-size:2.5rem; margin-bottom:12px; color:rgba(255,255,255,0.2);"></i>
                <p>Your Wishlist is empty.</p>
            </div>
        `;
    } else {
        container.innerHTML = wishProducts.map(p => `
            <div class="cart-item">
                <img src="${p.images[0]}" alt="${p.title}" class="cart-item-img">
                <div class="cart-item-info">
                    <div>
                        <h4 class="cart-item-title">${p.title}</h4>
                        <div style="color:var(--accent-lime); font-weight:800;">${formatINR(p.price)}</div>
                    </div>
                    <div class="cart-item-bottom">
                        <button class="btn btn-primary" onclick="handleAddToCart('${p.id}'); closeWishlistDrawer();" style="padding:6px 12px; font-size:0.75rem;"><i class="fa-solid fa-bag-shopping"></i> Add to Cart</button>
                        <button class="remove-item-btn" onclick="toggleWishlist('${p.id}'); openWishlistDrawer();"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    drawer.classList.add('active');
    overlay.classList.add('active');
}

function closeWishlistDrawer() {
    document.getElementById('wishlistDrawer').classList.remove('active');
    document.getElementById('wishlistOverlay').classList.remove('active');
}

function toggleCompare(productId) {
    const index = compareList.indexOf(productId);
    if (index > -1) compareList.splice(index, 1);
    else {
        if (compareList.length >= 3) compareList.shift();
        compareList.push(productId);
        showToast("Added to Comparison", "fa-code-compare");
    }
    localStorage.setItem('doomna_compare', JSON.stringify(compareList));
    updateCompareUI();
}

function updateCompareUI() {
    const badge = document.getElementById('compareBadge');
    if (badge) badge.textContent = compareList.length;
}

function openCompareModal() {
    const container = document.getElementById('compareTableContainer');
    const compProds = (products || DEFAULT_PRODUCTS).filter(p => compareList.includes(p.id));

    if (compProds.length === 0) {
        container.innerHTML = '<p style="text-align:center;">No products added for comparison.</p>';
    } else {
        container.innerHTML = `
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>Feature</th>
                        ${compProds.map(p => `<th>${p.title}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    <tr><td><strong>Price</strong></td>${compProds.map(p => `<td>${formatINR(p.price)}</td>`).join('')}</tr>
                    <tr><td><strong>Category</strong></td>${compProds.map(p => `<td>${p.category}</td>`).join('')}</tr>
                    <tr><td><strong>Fabric</strong></td>${compProds.map(p => `<td>${p.fabric || '100% Cotton'}</td>`).join('')}</tr>
                    <tr><td><strong>GSM Weight</strong></td>${compProds.map(p => `<td>${p.gsm || '280 GSM'}</td>`).join('')}</tr>
                    <tr><td><strong>Sizes</strong></td>${compProds.map(p => `<td>${(p.sizes || []).join(', ')}</td>`).join('')}</tr>
                </tbody>
            </table>
        `;
    }
    document.getElementById('compareModal').classList.add('active');
}

function printGstInvoice() { window.print(); }

function openPolicyPage(pageKey) {
    const content = pages[pageKey] || "Policy details loading...";
    alert(content);
}

function shareProduct(type) {
    const url = window.location.href;
    if (type === 'whatsapp') {
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent('Check out Doomna Luxury: ' + url)}`);
    } else if (type === 'twitter') {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`);
    } else {
        navigator.clipboard.writeText(url);
        showToast("Link copied to clipboard!", "fa-link");
    }
}

function showToast(msg, icon = 'fa-circle-check') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid ${icon} neon-text"></i> <span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}
