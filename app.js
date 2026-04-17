// Product Dataset (20 items)
const products = [
    { id: 1, title: "Sony WH-1000XM5 Headphones", category: "Electronics", price: 348.00, rating: 4.8, tags: ["premium", "audio", "noise-canceling"], image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 2, title: "Apple Watch Series 9", category: "Electronics", price: 399.00, rating: 4.9, tags: ["premium", "smartwatch", "fitness"], image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 3, title: "Mechanical Keychron K2", category: "Electronics", price: 89.99, rating: 4.6, tags: ["budget", "keyboard", "gaming"], image: "https://images.unsplash.com/photo-1595225476474-87563907a212?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 4, title: "Logitech MX Master 3S Mouse", category: "Electronics", price: 99.99, rating: 4.7, tags: ["premium", "mouse", "productivity"], image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 5, title: "Anker Soundcore Earbuds", category: "Electronics", price: 49.99, rating: 4.4, tags: ["budget", "audio", "earbuds"], image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 6, title: "Minimalist Leather Backpack", category: "Accessories", price: 125.00, rating: 4.5, tags: ["premium", "bag", "travel", "gift"], image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 7, title: "Nike Air Force 1 '07", category: "Clothing", price: 110.00, rating: 4.7, tags: ["premium", "shoes", "sneakers"], image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 8, title: "Adidas Ultraboost 22", category: "Clothing", price: 190.00, rating: 4.8, tags: ["premium", "shoes", "running"], image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 9, title: "Classic Cotton T-Shirt", category: "Clothing", price: 15.00, rating: 4.2, tags: ["budget", "apparel", "casual"], image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 10, title: "Levi's 501 Original Jeans", category: "Clothing", price: 60.00, rating: 4.6, tags: ["mid-range", "apparel", "denim"], image: "https://images.unsplash.com/photo-1542272604-780c8e434fba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 11, title: "Ray-Ban Aviator Sunglasses", category: "Accessories", price: 150.00, rating: 4.7, tags: ["premium", "eyewear", "summer", "gift"], image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 12, title: "Casio Vintage Watch", category: "Accessories", price: 25.00, rating: 4.5, tags: ["budget", "watch", "retro", "gift"], image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 13, title: "Yeti Rambler Tumbler", category: "Home", price: 35.00, rating: 4.8, tags: ["mid-range", "drinkware", "gift"], image: "https://images.unsplash.com/photo-1614735241165-6756e1df61ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 14, title: "AeroPress Coffee Maker", category: "Home", price: 40.00, rating: 4.9, tags: ["budget", "coffee", "kitchen", "gift"], image: "https://images.unsplash.com/photo-1595928642581-f50f4f3453a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 15, title: "Kindle Paperwhite", category: "Electronics", price: 140.00, rating: 4.8, tags: ["premium", "ereader", "gift", "reading"], image: "https://images.unsplash.com/photo-1592496001020-d31bd830651f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 16, title: "Liforme Yoga Mat", category: "Sports", price: 150.00, rating: 4.9, tags: ["premium", "yoga", "fitness"], image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 17, title: "Bowflex SelectTech Dumbbells", category: "Sports", price: 400.00, rating: 4.8, tags: ["premium", "fitness", "weights", "gym"], image: "https://images.unsplash.com/photo-1586401700818-24cb6131c944?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 18, title: "Spalding Basketball", category: "Sports", price: 30.00, rating: 4.5, tags: ["budget", "sports", "game", "gift"], image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 19, title: "Hydro Flask Water Bottle", category: "Accessories", price: 45.00, rating: 4.7, tags: ["mid-range", "hydration", "sports", "gift"], image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 20, title: "Sony PlayStation 5", category: "Electronics", price: 499.99, rating: 4.9, tags: ["premium", "gaming", "console", "gift"], image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
];

// State & Personalization
let cart = JSON.parse(localStorage.getItem('shopmind_cart')) || [];
let searchHistory = JSON.parse(localStorage.getItem('shopmind_history')) || [];
let eventsLog = JSON.parse(localStorage.getItem('shopmind_events')) || [];

function trackEvent(name, data = {}) {
    eventsLog.push({ event: name, timestamp: Date.now(), ...data });
    localStorage.setItem('shopmind_events', JSON.stringify(eventsLog));
}

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');
const cartItemsContainer = document.getElementById('cart-items');
const cartBadge = document.getElementById('cart-badge');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartTaxEl = document.getElementById('cart-tax');
const cartTotalEl = document.getElementById('cart-total');
const cartToggleBtn = document.getElementById('cart-toggle');
const closeCartBtn = document.getElementById('close-cart');
const cartSection = document.getElementById('cart-section');
const heroInsight = document.getElementById('hero-insight');
const personalizedHeader = document.getElementById('personalized-header');
const searchInsights = document.getElementById('search-insights');
let filterChips = document.querySelectorAll('.chip');

// Initialize
function init() {
    renderPersonalizedHome();
    updateCartUI();
    setupEventListeners();
    updateHeroInsight();
}

function updateHeroInsight(msg = null) {
    if (!heroInsight) return;
    if (msg) {
        heroInsight.innerHTML = `<i class="ph-fill ph-lightning"></i> <span>${msg}</span>`;
        heroInsight.style.display = 'flex';
    } else {
        if (cart.length > 0) {
            heroInsight.innerHTML = `<i class="ph-fill ph-lightning"></i> <span>Smart Budget Optimizer is analyzing your cart...</span>`;
            heroInsight.style.display = 'flex';
        } else {
            heroInsight.style.display = 'none';
        }
    }
}

function renderPersonalizedHome() {
    if (searchHistory.length > 0) {
        let recentCategories = [];
        let recentTags = [];
        searchHistory.slice(-5).forEach(h => {
            recentCategories.push(...h.categories);
            recentTags.push(...h.tags);
        });

        // Determine top category
        const catFreq = {};
        recentCategories.forEach(c => catFreq[c] = (catFreq[c] || 0) + 1);
        const topCategory = Object.keys(catFreq).sort((a, b) => catFreq[b] - catFreq[a])[0];

        if (topCategory && personalizedHeader) {
            personalizedHeader.innerHTML = `Welcome back 👋 Based on your interest in <strong>${topCategory}</strong>...`;
            personalizedHeader.style.display = 'block';
        }

        const recs = recommendationEngine.getRecommendations({
            budget: null,
            categories: [...new Set(recentCategories)],
            tags: [...new Set(recentTags)]
        });

        if (recs.exactMatch && recs.products.length > 0) {
            recs.products.forEach(p => p.aiReason = "Popular in your past searches");
            renderProducts(recs.products, "Recommended for you based on your recent searches.");
            return;
        }
    }
    renderProducts(products); // fallback
}

// Render Products
function renderProducts(productsToRender, explanation = null) {
    productsGrid.innerHTML = '';

    if (explanation) {
        const expDiv = document.createElement('div');
        expDiv.innerHTML = `<i class="ph ph-info"></i> ${explanation}`;
        expDiv.style.gridColumn = '1 / -1';
        expDiv.style.padding = '1rem';
        expDiv.style.background = 'rgba(6, 182, 212, 0.1)';
        expDiv.style.border = '1px solid var(--accent-cyan)';
        expDiv.style.borderRadius = 'var(--radius-sm)';
        expDiv.style.color = 'var(--accent-cyan)';
        expDiv.style.display = 'flex';
        expDiv.style.alignItems = 'center';
        expDiv.style.gap = '0.5rem';
        expDiv.style.marginBottom = '0.5rem';
        productsGrid.appendChild(expDiv);
    }

    if (productsToRender.length === 0) {
        productsGrid.innerHTML += '<p style="color: var(--text-secondary); grid-column: 1/-1; text-align: center;">No exact match. Showing closest alternatives...</p>';
        return;
    }

    productsToRender.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            ${product.badge ? product.badge : ''}
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                ${product.aiReason ? `<p class="ai-reason">✨ ${product.aiReason}</p>` : ''}
                <div style="display: flex; align-items: center; gap: 0.25rem; color: #fbbf24; font-size: 0.85rem; margin-bottom: 0.5rem;">
                    <i class="ph-fill ph-star"></i>
                    <span>${product.rating}</span>
                </div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart-btn" data-id="${product.id}">
                    <i class="ph ph-shopping-cart-simple"></i> Add to Cart
                </button>
            </div>
        `;
        productsGrid.appendChild(card);
    });

    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.dataset.id);
            addToCart(id);
        });
    });
}

function filterProducts(category) {
    if (category === 'All') {
        renderPersonalizedHome();
    } else {
        if (personalizedHeader) personalizedHeader.style.display = 'none';
        const filtered = products.filter(p => p.category === category);
        filtered.forEach(p => p.aiReason = `Popular in ${category}`);
        renderProducts(filtered);
    }
}

// Cart Logic
function addToCart(productId) {
    trackEvent('add_to_cart', { productId });

    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    if (window.innerWidth <= 992) cartSection.classList.add('open');

    // Cart Bounce Animation
    if (cartToggleBtn) {
        cartToggleBtn.classList.remove('bump');
        void cartToggleBtn.offsetWidth; // trigger reflow
        cartToggleBtn.classList.add('bump');
    }
}

function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) cart = cart.filter(i => i.id !== productId);

    updateCartUI();
}

function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    localStorage.setItem('shopmind_cart', JSON.stringify(cart)); // Persist cart

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Your cart is empty</div>';
    } else {
        cart.forEach(item => {
            const el = document.createElement('div');
            el.className = 'cart-item';
            el.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.title}</div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem;">
                        <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                        <div class="cart-item-actions">
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                            <button class="remove-btn" onclick="removeFromCart(${item.id})"><i class="ph ph-trash"></i></button>
                        </div>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(el);
        });
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    cartSubtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    cartTaxEl.textContent = `$${tax.toFixed(2)}`;
    cartTotalEl.textContent = `$${total.toFixed(2)}`;

    // Call Optimizer
    if (typeof CartOptimizer !== 'undefined') {
        CartOptimizer.analyzeCart(cart);
    }
}

// Smart Cart Optimizer
const CartOptimizer = {
    getValueScore(product) {
        return (product.rating * 2) / Math.log(product.price + 10);
    },

    getTypicalBudget() {
        const budgets = searchHistory.filter(h => h.budget !== null).map(h => h.budget);
        if (budgets.length === 0) return 2000;
        const sum = budgets.reduce((a, b) => a + b, 0);
        return sum / budgets.length;
    },

    analyzeCart(currentCart) {
        const container = document.getElementById('cart-optimizer-suggestions');
        if (!container) return;
        container.innerHTML = '';

        if (currentCart.length === 0) {
            updateHeroInsight(null);
            return;
        }

        const total = currentCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const typicalBudget = this.getTypicalBudget();
        const isOverBudget = total > typicalBudget;

        let suggestions = [];
        const catalogScores = products.map(p => ({ ...p, vs: this.getValueScore(p) }));

        currentCart.forEach(cartItem => {
            const currentVs = this.getValueScore(cartItem);

            const alternatives = catalogScores.filter(alt => {
                if (alt.id === cartItem.id) return false;
                if (alt.category !== cartItem.category) return false;

                const hasMatchingTag = alt.tags.some(tag => cartItem.tags.includes(tag));
                if (!hasMatchingTag) return false;

                return alt.vs > currentVs && alt.price < cartItem.price;
            });

            if (alternatives.length > 0) {
                alternatives.sort((a, b) => {
                    const savingsA = cartItem.price - a.price;
                    const savingsB = cartItem.price - b.price;
                    const vsImpA = a.vs - currentVs;
                    const vsImpB = b.vs - currentVs;
                    return (savingsB * vsImpB) - (savingsA * vsImpA);
                });

                const bestAlt = alternatives[0];
                const savings = cartItem.price - bestAlt.price;

                let reason = `⚡ Better rating for lower price`;
                if (savings > 50) reason = `⚡ Switch to this better value option`;
                else if (isOverBudget) reason = `⚡ Helps you stay under budget`;

                suggestions.push({
                    type: 'swap',
                    originalId: cartItem.id,
                    suggestedItem: bestAlt,
                    savings: savings,
                    vsImprovement: bestAlt.vs - currentVs,
                    reason: reason
                });
            }
        });

        // Cart Overload Detection
        if (isOverBudget && currentCart.length > 1) {
            let lowestValueItem = currentCart[0];
            let lowestVs = this.getValueScore(lowestValueItem);
            currentCart.forEach(item => {
                const vs = this.getValueScore(item);
                if (vs < lowestVs) {
                    lowestVs = vs;
                    lowestValueItem = item;
                }
            });

            const hasSwapForLowest = suggestions.some(s => s.originalId === lowestValueItem.id);
            if (!hasSwapForLowest) {
                suggestions.push({
                    type: 'remove',
                    originalId: lowestValueItem.id,
                    savings: lowestValueItem.price,
                    vsImprovement: 0,
                    reason: `Removing this overpriced item helps stay in budget.`
                });
            }
        }

        suggestions.sort((a, b) => b.savings - a.savings);
        suggestions = suggestions.slice(0, 2);

        this.renderSuggestions(suggestions, container);

        // Update Hero Insight
        let totalSavings = suggestions.reduce((sum, s) => sum + s.savings, 0);
        if (suggestions.length > 0) {
            updateHeroInsight(`You can save $${totalSavings.toFixed(2)} today. ${suggestions.length} smarter alternatives found!`);
        } else {
            updateHeroInsight(null);
        }
    },

    renderSuggestions(suggestions, container) {
        if (suggestions.length === 0) return;

        suggestions.forEach(s => {
            const div = document.createElement('div');
            div.className = 'suggestion-card';

            if (s.type === 'swap') {
                div.innerHTML = `
                    <div class="suggestion-info">
                        <div class="suggestion-title">💡 Swap: ${s.suggestedItem.title}</div>
                        <div class="suggestion-reason">${s.reason}</div>
                        <div class="suggestion-savings">Save $${s.savings.toFixed(2)}</div>
                    </div>
                    <button class="swap-btn" onclick="executeOptimizerAction('swap', ${s.originalId}, ${s.suggestedItem.id})">Swap</button>
                `;
            } else if (s.type === 'remove') {
                const item = cart.find(i => i.id === s.originalId);
                div.innerHTML = `
                    <div class="suggestion-info">
                        <div class="suggestion-title">⚠️ Over Budget: Remove ${item.title}</div>
                        <div class="suggestion-reason">${s.reason}</div>
                        <div class="suggestion-savings">Save $${s.savings.toFixed(2)}</div>
                    </div>
                    <button class="swap-btn remove-action-btn" onclick="executeOptimizerAction('remove', ${s.originalId})">Remove</button>
                `;
            }
            container.appendChild(div);
        });
    }
};

window.executeOptimizerAction = function (action, originalId, suggestedId = null) {
    if (action === 'swap') {
        const item = cart.find(i => i.id === originalId);
        const qty = item ? item.quantity : 1;
        removeFromCart(originalId);

        const suggested = products.find(p => p.id === suggestedId);
        if (suggested) {
            cart.push({ ...suggested, quantity: qty });
            updateCartUI();
        }
        showOptimizationMessage("Cart optimized for better value!");
    } else if (action === 'remove') {
        removeFromCart(originalId);
        showOptimizationMessage("Item removed to stay under budget!");
    }
};

window.showOptimizationMessage = function (msg) {
    const container = document.getElementById('cart-optimizer-suggestions');
    if (container) {
        container.innerHTML = `<div class="optimization-success"><i class="ph-fill ph-check-circle"></i> ${msg}</div>`;
        setTimeout(() => {
            CartOptimizer.analyzeCart(cart);
        }, 3000);
    }
};

// Recommendation Engine
const recommendationEngine = {
    parseInput(text) {
        const lower = text.toLowerCase();
        let budget = null;

        const underMatch = lower.match(/(?:under|below|less than|max|budget of|<)\s*[$]?\s*(\d+(?:\.\d+)?)/);
        if (underMatch) {
            budget = parseFloat(underMatch[1]);
        } else {
            const priceMatch = lower.match(/\$\s*(\d+(?:\.\d+)?)/);
            if (priceMatch) budget = parseFloat(priceMatch[1]);
        }

        const keywords = {
            "Electronics": ["phone", "headphone", "audio", "earbuds", "watch", "smartwatch", "mouse", "keyboard", "gaming", "tech", "console", "kindle", "speaker", "electronic"],
            "Clothing": ["shirt", "shoe", "sneaker", "apparel", "jeans", "clothing", "wear", "jacket", "hoodie"],
            "Accessories": ["bag", "backpack", "sunglasses", "bottle", "wallet", "accessory"],
            "Home": ["home", "coffee", "tumbler", "kitchen", "decor", "mug"],
            "Sports": ["sports", "yoga", "fitness", "basketball", "weights", "workout", "gym", "dumbbell"]
        };

        let detectedCategories = [];
        let detectedTags = [];

        for (const [category, words] of Object.entries(keywords)) {
            for (const word of words) {
                if (lower.includes(word)) {
                    if (!detectedCategories.includes(category)) detectedCategories.push(category);
                    detectedTags.push(word);
                }
            }
        }

        if (lower.includes("gift")) detectedTags.push("gift");
        if (lower.includes("cheap") || lower.includes("budget") || lower.includes("affordable")) detectedTags.push("budget");
        if (lower.includes("premium") || lower.includes("best") || lower.includes("high-end") || lower.includes("luxury")) detectedTags.push("premium");

        const words = lower.replace(/[^\w\s]/g, '').split(/\s+/).filter(w => w.length > 2);
        const stopWords = ['under', 'below', 'less', 'than', 'max', 'budget', 'for', 'the', 'and', 'with', 'show', 'find', 'need', 'want', 'looking'];
        words.forEach(w => {
            if (!stopWords.includes(w) && !detectedTags.includes(w)) {
                detectedTags.push(w);
            }
        });

        return { budget, categories: detectedCategories, tags: detectedTags };
    },

    getRecommendations(parsed) {
        let filtered = [...products];

        // 1. Relevance Scoring
        if (parsed.categories.length > 0 || parsed.tags.length > 0) {
            filtered.forEach(p => {
                p.relevanceScore = 0;
                if (parsed.categories.includes(p.category)) p.relevanceScore += 5;
                parsed.tags.forEach(tag => {
                    if (p.tags.includes(tag)) p.relevanceScore += 3;
                    if (p.title.toLowerCase().includes(tag)) p.relevanceScore += 4;
                });
            });

            filtered = filtered.filter(p => p.relevanceScore > 0);

            if (filtered.length === 0) {
                return { exactMatch: false, reason: "no_relevance", products: [] };
            }
        }

        // 2. Strict Budget Filter
        if (parsed.budget !== null) {
            const affordable = filtered.filter(p => p.price <= parsed.budget);
            if (affordable.length > 0) {
                filtered = affordable;
                filtered.forEach(p => {
                    p.relevanceScore = (p.relevanceScore || 0) + (p.price / parsed.budget);
                });
            } else {
                return { exactMatch: false, reason: "budget_exceeded", relevantProducts: filtered };
            }
        }

        // 3. Final Ranking
        filtered.sort((a, b) => {
            const scoreA = (a.relevanceScore || 0) + a.rating;
            const scoreB = (b.relevanceScore || 0) + b.rating;
            return scoreB - scoreA;
        });

        const finalProducts = filtered.slice(0, 4);
        finalProducts.forEach((p, index) => {
            // Apply Badges
            p.badge = null;
            if (index === 0 && parsed.budget && p.price <= parsed.budget) {
                p.aiReason = "Best value for your budget";
                p.badge = '<span class="ai-badge badge-budget">Budget Pick 💰</span>';
            }
            else if (p.rating >= 4.8) {
                p.aiReason = "Highly rated option";
                p.badge = '<span class="ai-badge badge-rated">Top Rated ⭐</span>';
            }
            else if (parsed.categories.length > 0 && parsed.categories.includes(p.category)) {
                p.aiReason = `Top match for ${p.category}`;
            }
            else {
                p.aiReason = "Matches your search criteria";
            }

            // Value Badge fallback
            if (CartOptimizer.getValueScore(p) > 20 && !p.badge) {
                p.badge = '<span class="ai-badge badge-value">Best Value 🔥</span>';
            }
        });

        return { exactMatch: true, products: finalProducts };
    },

    getFallbackRecommendations(parsed, reason, relevantProducts) {
        if (reason === "budget_exceeded" && relevantProducts && relevantProducts.length > 0) {
            const closest = relevantProducts.sort((a, b) => a.price - b.price).slice(0, 3);
            closest.forEach(p => p.aiReason = "Closest match slightly over budget");
            return closest;
        }

        const topRated = [...products].sort((a, b) => b.rating - a.rating).slice(0, 4);
        topRated.forEach(p => p.aiReason = "Highly rated alternative");
        return topRated;
    }
};

// Chat Logic
function handleChatSubmit(e) {
    e.preventDefault();
    const text = chatInput.value.trim();
    if (!text) return;

    trackEvent('search', { query: text });
    addChatMessage(text, 'user');
    chatInput.value = '';

    // Show Thinking Skeleton in Chat
    const thinkingId = 'thinking-' + Date.now();
    const thinkingDiv = document.createElement('div');
    thinkingDiv.className = `message ai-message`;
    thinkingDiv.id = thinkingId;
    thinkingDiv.innerHTML = `<div class="message-content skeleton"><div class="skeleton-text" style="width:100px; margin:0;"></div></div>`;
    chatMessages.appendChild(thinkingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Show Products Skeleton
    if (personalizedHeader) personalizedHeader.style.display = 'none';
    productsGrid.innerHTML = '';
    for (let i = 0; i < 4; i++) {
        productsGrid.innerHTML += `
            <div class="product-card skeleton">
                <div class="skeleton-img"></div>
                <div class="product-info">
                    <div class="skeleton-title"></div>
                    <div class="skeleton-text"></div>
                    <div class="skeleton-text" style="width: 50%;"></div>
                    <div class="skeleton-btn"></div>
                </div>
            </div>`;
    }

    setTimeout(() => {
        document.getElementById(thinkingId)?.remove();
        const parsed = recommendationEngine.parseInput(text);

        // Update Search Insights
        if (searchInsights) {
            searchInsights.style.display = 'block';
            let insightsHtml = '';
            if (parsed.budget) insightsHtml += `<span>Budget: $${parsed.budget}</span>`;
            if (parsed.categories.length) insightsHtml += `<span>Category: ${parsed.categories.join(', ')}</span>`;
            if (parsed.tags.length) insightsHtml += `<span>Keywords: ${parsed.tags.join(', ')}</span>`;
            searchInsights.innerHTML = insightsHtml || `<span>Broad Search</span>`;
        }

        if (parsed.budget === null && parsed.categories.length === 0 && parsed.tags.length === 0) {
            if (text.toLowerCase().includes("hello") || text.toLowerCase().includes("hi")) {
                addChatMessage("Hello! I'm ShopMind AI. How can I help you find the perfect product today?", 'ai');
                renderPersonalizedHome();
                return;
            }
        }

        if (parsed.categories.length > 0 || parsed.tags.length > 0) {
            searchHistory.push(parsed);
            localStorage.setItem('shopmind_history', JSON.stringify(searchHistory));
        }

        const results = recommendationEngine.getRecommendations(parsed);

        let aiResponse = "";
        let explanation = null;
        let productsToShow = [];

        if (results.exactMatch) {
            productsToShow = results.products;
            let reasons = [];
            if (parsed.budget) reasons.push(`budget (under $${parsed.budget})`);
            if (parsed.categories.length > 0) reasons.push(`category (${parsed.categories.join(', ')})`);
            if (parsed.tags.length > 0 && parsed.categories.length === 0) reasons.push(`keywords`);

            if (reasons.length > 0) {
                explanation = `Recommended because it fits your ${reasons.join(' and ')}.`;
                aiResponse = "Here are some great options I found based on your request!";
            } else {
                explanation = "Recommended based on top overall ratings.";
                aiResponse = "I've pulled up some of our top-rated products for you to check out!";
            }

            filterChips.forEach(c => c.classList.remove('active'));
            if (parsed.categories.length === 1) {
                const chip = document.querySelector(`.chip[data-category="${parsed.categories[0]}"]`);
                if (chip) chip.classList.add('active');
            } else {
                document.querySelector('.chip[data-category="All"]')?.classList.add('active');
            }

        } else {
            productsToShow = recommendationEngine.getFallbackRecommendations(parsed, results.reason, results.relevantProducts);

            if (results.reason === "budget_exceeded") {
                explanation = "These are the closest alternatives slightly above your budget.";
                aiResponse = `I couldn't find exact matches under $${parsed.budget}, but here are some great alternatives close to your budget!`;
            } else {
                explanation = "Recommended based on top overall ratings.";
                aiResponse = "I couldn't find exactly what you were looking for, but you might like these highly-rated items!";
            }

            filterChips.forEach(c => c.classList.remove('active'));
            document.querySelector('.chip[data-category="All"]')?.classList.add('active');
        }

        renderProducts(productsToShow, explanation);
        addChatMessage(aiResponse, 'ai');
    }, 800); // Simulated AI thinking delay
}

function addChatMessage(text, sender) {
    const div = document.createElement('div');
    div.className = `message ${sender}-message`;
    div.innerHTML = `<div class="message-content">${text}</div>`;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleCheckout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const orderId = Math.floor(100000 + Math.random() * 900000);
    const deliveryDays = Math.floor(Math.random() * 3) + 3; // 3 to 5
    
    alert(`Order Placed Successfully!\nOrder ID: #${orderId}\nDelivery: ${deliveryDays} days\nThank you for shopping with ShopMind AI!`);
    
    cart = [];
    updateCartUI();
}

// Event Listeners
function setupEventListeners() {
    chatForm.addEventListener('submit', handleChatSubmit);
    cartToggleBtn.addEventListener('click', () => cartSection.classList.toggle('open'));
    closeCartBtn.addEventListener('click', () => cartSection.classList.remove('open'));

    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', handleCheckout);
    }

    filterChips.forEach(chip => {
        chip.dataset.category = chip.textContent;
        chip.addEventListener('click', (e) => {
            filterChips.forEach(c => c.classList.remove('active'));
            e.currentTarget.classList.add('active');
            filterProducts(e.currentTarget.textContent);
        });
    });

    window.updateQuantity = updateQuantity;
    window.removeFromCart = removeFromCart;
}

// Run
document.addEventListener('DOMContentLoaded', init);
