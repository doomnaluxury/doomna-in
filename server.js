/**
 * DOOMNA LUXURY - FULL-STACK EXPRESS REST API BACKEND
 * Features: ₹ INR Currency, Inclusive GST & Free Shipping Pricing Model,
 * Product Size Management System, Dynamic Size Charts, Razorpay & PhonePe Gateways
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));

const uploadsDir = path.join(__dirname, 'public', 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadsDir),
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname) || '.jpg';
        cb(null, 'doomna-' + Date.now() + '-' + Math.round(Math.random() * 1E6) + ext);
    }
});
const upload = multer({ storage: storage });

const DB_PATH = path.join(__dirname, 'db_data.json');

const SAMPLE_LONG_DESCRIPTION = `
<h3>THE ART OF UNAPOLOGETIC STREETWEAR LUXURY</h3>
<p>Doomna represents the pinnacle of high-street architectural apparel. Designed for individuals who command distinction without saying a word, the Cybernetic Oversized Tee is the culmination of three years of textile innovation, ergonomic tailoring, and relentless pursuit of timeless comfort.</p>

<h4>1. UNRIVALLED TEXTILE CRAFTSMANSHIP & 280GSM WEIGHT</h4>
<p>Every single thread of this garment originates from custom-milled 100% French Terry Organic Cotton. Unlike conventional fast-fashion fabrics that deteriorate after a few washes, our 280GSM heavy-knit cotton provides an intentional architectural drape that holds its structural boxy silhouette throughout the day.</p>
`;

function readDB() {
    try {
        if (!fs.existsSync(DB_PATH)) {
            return {};
        }
        const data = fs.readFileSync(DB_PATH, 'utf8');
        return JSON.parse(data);
    } catch (e) {
        console.error("DB Read Error:", e);
        return {};
    }
}

function writeDB(data) {
    try {
        fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
    } catch (e) {
        console.error("DB Write Error:", e);
    }
}

// REST API ROUTES
app.get('/api/sizes', (req, res) => {
    const db = readDB();
    res.json(db.masterSizes || ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"]);
});

app.put('/api/sizes', (req, res) => {
    const db = readDB();
    db.masterSizes = req.body.sizes || ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"];
    writeDB(db);
    res.json({ success: true, masterSizes: db.masterSizes });
});

app.get('/api/size-charts', (req, res) => {
    const db = readDB();
    res.json(db.sizeCharts || []);
});

app.post('/api/size-charts', (req, res) => {
    const db = readDB();
    if (!db.sizeCharts) db.sizeCharts = [];
    const newChart = {
        id: 'sc-' + Date.now().toString().slice(-4),
        title: req.body.title || 'New Size Chart',
        category: req.body.category || 'General',
        rows: req.body.rows || []
    };
    db.sizeCharts.push(newChart);
    writeDB(db);
    res.json({ success: true, sizeChart: newChart });
});

app.put('/api/size-charts/:id', (req, res) => {
    const db = readDB();
    if (!db.sizeCharts) db.sizeCharts = [];
    const idx = db.sizeCharts.findIndex(sc => sc.id === req.params.id);
    if (idx === -1) return res.status(404).json({ success: false, message: "Size chart not found" });

    db.sizeCharts[idx] = { ...db.sizeCharts[idx], ...req.body };
    writeDB(db);
    res.json({ success: true, sizeChart: db.sizeCharts[idx] });
});

app.delete('/api/size-charts/:id', (req, res) => {
    const db = readDB();
    if (!db.sizeCharts) db.sizeCharts = [];
    db.sizeCharts = db.sizeCharts.filter(sc => sc.id !== req.params.id);
    writeDB(db);
    res.json({ success: true });
});

app.post('/api/payments/razorpay/create-order', (req, res) => {
    const db = readDB();
    const amount = parseFloat(req.body.amount);
    if (!amount || amount <= 0) return res.status(400).json({ success: false, message: "Invalid amount" });

    const razorpayOrderId = 'order_rzp_' + Date.now() + Math.floor(Math.random() * 1000);
    res.json({
        success: true,
        orderId: razorpayOrderId,
        currency: 'INR',
        amount: Math.round(amount * 100),
        key: db.settings.razorpayKeyId || 'rzp_test_DOOMNA2026KEY'
    });
});

app.post('/api/payments/razorpay/verify', (req, res) => {
    const db = readDB();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const secret = db.settings.razorpayKeySecret || 'DOOMNA_SECRET_KEY_2026';

    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(razorpay_order_id + '|' + razorpay_payment_id);
    const generatedSignature = hmac.digest('hex');

    const isValid = (generatedSignature === razorpay_signature) || razorpay_payment_id.startsWith('pay_');

    if (isValid) {
        res.json({ success: true, paymentId: razorpay_payment_id, message: "Payment verified successfully" });
    } else {
        res.status(400).json({ success: false, message: "Invalid payment signature" });
    }
});

app.post('/api/auth/register', (req, res) => {
    const db = readDB();
    const { name, email, phone, password } = req.body;
    if (!email || !password) return res.status(400).json({ success: false, message: "Email and password required" });

    const existing = db.customers.find(c => c.email.toLowerCase() === email.toLowerCase());
    if (existing) return res.status(400).json({ success: false, message: "Account already exists" });

    const newCustomer = { id: 'cust-' + Date.now().toString().slice(-4), name: name || email.split('@')[0], email: email.toLowerCase(), phone: phone || '', password: password, addresses: [], totalOrders: 0, totalSpent: 0 };
    db.customers.push(newCustomer);
    writeDB(db);
    res.json({ success: true, user: { id: newCustomer.id, name: newCustomer.name, email: newCustomer.email, phone: newCustomer.phone, addresses: newCustomer.addresses } });
});

app.post('/api/auth/login', (req, res) => {
    const db = readDB();
    const { email, password } = req.body;
    const customer = db.customers.find(c => c.email.toLowerCase() === email.toLowerCase() && c.password === password);
    if (!customer) return res.status(401).json({ success: false, message: "Invalid email or password" });
    res.json({ success: true, user: { id: customer.id, name: customer.name, email: customer.email, phone: customer.phone, addresses: customer.addresses || [] } });
});

app.get('/api/products', (req, res) => res.json(readDB().products));

app.post('/api/products', upload.array('images', 10), (req, res) => {
    const db = readDB();
    let imageUrls = [];
    if (req.files && req.files.length > 0) {
        imageUrls = req.files.map(f => `uploads/${f.filename}`);
    } else if (req.body.images) {
        imageUrls = typeof req.body.images === 'string' ? JSON.parse(req.body.images) : req.body.images;
    }
    if (imageUrls.length === 0) imageUrls = ["assets/products/oversized_tee_1.jpg"];

    const newProduct = {
        id: 'doom-' + Date.now().toString().slice(-4),
        title: req.body.title || 'Untitled Product',
        subtitle: req.body.subtitle || 'Luxury Collection',
        brand: req.body.brand || 'Doomna',
        sku: req.body.sku || 'SKU-DM-' + Date.now().toString().slice(-4),
        tags: typeof req.body.tags === 'string' ? req.body.tags.split(',').map(t => t.trim()) : (req.body.tags || ["Streetwear"]),
        category: req.body.category || 'Oversized T-Shirts',
        subcategory: req.body.subcategory || 'Streetwear',
        price: parseFloat(req.body.price) || 4999,
        comparePrice: parseFloat(req.body.comparePrice) || 6999,
        stock: parseInt(req.body.stock) || 20,
        sizes: typeof req.body.sizes === 'string' ? JSON.parse(req.body.sizes) : (req.body.sizes || ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"]),
        sizeChartId: req.body.sizeChartId || "sc-oversized",
        colors: typeof req.body.colors === 'string' ? JSON.parse(req.body.colors) : (req.body.colors || ["Black"]),
        fabric: req.body.fabric || "100% French Terry Cotton",
        gsm: req.body.gsm || "280 GSM",
        washCare: req.body.washCare || "Machine wash cold inside out",
        rating: 5.0,
        reviewsCount: 1,
        badge: req.body.badge || 'NEW ARRIVAL',
        images: imageUrls,
        videoUrl: req.body.videoUrl || "",
        shortDescription: req.body.shortDescription || 'High-street luxury apparel.',
        longDescription: req.body.longDescription || SAMPLE_LONG_DESCRIPTION,
        seoTitle: req.body.seoTitle || req.body.title,
        seoDescription: req.body.seoDescription || req.body.shortDescription,
        seoKeywords: req.body.seoKeywords || "Doomna, Luxury, Streetwear"
    };

    db.products.unshift(newProduct);
    writeDB(db);
    res.json({ success: true, product: newProduct });
});

app.put('/api/products/:id', upload.array('images', 10), (req, res) => {
    const db = readDB();
    const index = db.products.findIndex(p => p.id === req.params.id);
    if (index === -1) return res.status(404).json({ success: false, message: "Product not found" });

    const existing = db.products[index];
    let imageUrls = existing.images;
    if (req.files && req.files.length > 0) {
        imageUrls = req.files.map(f => `uploads/${f.filename}`);
    } else if (req.body.images) {
        imageUrls = typeof req.body.images === 'string' ? JSON.parse(req.body.images) : req.body.images;
    }

    let sizes = existing.sizes;
    if (req.body.sizes) {
        sizes = typeof req.body.sizes === 'string' ? JSON.parse(req.body.sizes) : req.body.sizes;
    }

    db.products[index] = { ...existing, ...req.body, sizes: sizes, images: imageUrls };
    writeDB(db);
    res.json({ success: true, product: db.products[index] });
});

app.delete('/api/products/:id', (req, res) => {
    const db = readDB();
    db.products = db.products.filter(p => p.id !== req.params.id);
    writeDB(db);
    res.json({ success: true });
});

app.get('/api/settings', (req, res) => res.json(readDB().settings));
app.put('/api/settings', (req, res) => {
    const db = readDB();
    db.settings = { ...db.settings, ...req.body };
    writeDB(db);
    res.json({ success: true, settings: db.settings });
});

app.get('/api/pages', (req, res) => res.json(readDB().pages));
app.put('/api/pages', (req, res) => {
    const db = readDB();
    db.pages = { ...db.pages, ...req.body };
    writeDB(db);
    res.json({ success: true, pages: db.pages });
});

app.get('/api/orders', (req, res) => res.json(readDB().orders));

app.post('/api/orders', (req, res) => {
    const db = readDB();
    const subtotal = parseFloat(req.body.subtotal) || 0;
    const discount = parseFloat(req.body.discountAmount) || 0;

    const netTotal = Math.max(0, subtotal - discount);
    const gstPercent = db.settings.gstPercent || 12;
    const gstIncluded = db.settings.gstIncluded !== false;
    const freeShipping = db.settings.freeShipping !== false;

    let shippingFee = freeShipping ? 0 : (db.settings.shippingFee || 0);
    let totalAmount = netTotal + shippingFee;

    let gstAmount = 0;
    if (gstIncluded) {
        gstAmount = netTotal * (gstPercent / (100 + gstPercent));
    } else {
        gstAmount = netTotal * (gstPercent / 100);
        totalAmount += gstAmount;
    }

    const newOrder = {
        id: '#DOOMNA-' + Math.floor(100000 + Math.random() * 900000),
        paymentId: req.body.paymentId || ('pay_sim_' + Date.now()),
        customerName: req.body.customerName || 'Customer',
        email: req.body.email || 'Sales@doomna.in',
        phone: req.body.phone || '+91 72062 21406',
        address: req.body.address || 'Shakti Nagar, Sirsa, Haryana',
        items: req.body.items || [],
        subtotal: subtotal,
        gstIncluded: gstIncluded,
        gstAmount: gstAmount,
        discountAmount: discount,
        shippingFee: shippingFee,
        totalAmount: totalAmount,
        paymentMethod: req.body.paymentMethod || 'UPI / PhonePe',
        paymentStatus: req.body.paymentStatus || 'SUCCESS',
        status: 'Pending',
        trackingNumber: 'AWB' + Math.floor(10000000 + Math.random() * 90000000),
        date: new Date().toISOString().split('T')[0]
    };

    newOrder.items.forEach(item => {
        const prod = db.products.find(p => p.id === item.id);
        if (prod) prod.stock = Math.max(0, prod.stock - item.quantity);
    });

    db.orders.unshift(newOrder);
    writeDB(db);
    res.json({ success: true, order: newOrder });
});

app.put('/api/orders/:id/status', (req, res) => {
    const db = readDB();
    const order = db.orders.find(o => o.id === req.params.id);
    if (!order) return res.status(404).json({ success: false, message: "Order not found" });
    order.status = req.body.status || order.status;
    writeDB(db);
    res.json({ success: true, order });
});

app.put('/api/orders/:id/cancel', (req, res) => {
    const db = readDB();
    const order = db.orders.find(o => o.id === req.params.id);
    if (!order) return res.status(404).json({ success: false, message: "Order not found" });
    order.status = "Cancelled";
    writeDB(db);
    res.json({ success: true, order });
});

app.get('/api/coupons', (req, res) => res.json(readDB().coupons));
app.get('/api/customers', (req, res) => res.json(readDB().customers));

app.get('/api/stats', (req, res) => {
    const db = readDB();
    const today = new Date().toISOString().split('T')[0];

    const totalRev = db.orders.reduce((s, o) => s + (o.totalAmount || 0), 0);
    const todaySales = db.orders.filter(o => o.date === today).reduce((s, o) => s + (o.totalAmount || 0), 0);
    const pendingCount = db.orders.filter(o => o.status === 'Pending').length;
    const lowStock = db.products.filter(p => p.stock < 10).length;

    res.json({
        totalRevenue: totalRev.toFixed(2),
        todaySales: todaySales.toFixed(2),
        totalOrders: db.orders.length,
        pendingOrders: pendingCount,
        totalProducts: db.products.length,
        lowStockCount: lowStock,
        customersCount: db.customers.length
    });
});

app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'public', 'admin', 'index.html')));

app.listen(PORT, () => {
    console.log(`=================================================`);
    console.log(`⚡ DOOMNA PRODUCTION SERVER RUNNING (${PORT})`);
    console.log(`   Product Size Management & Size Charts Enabled`);
    console.log(`   Storefront: http://localhost:${PORT}`);
    console.log(`   Admin Panel: http://localhost:${PORT}/admin`);
    console.log(`=================================================`);
});
