// Product Data Array
const products = [
    { id: 1, name: "Chocolate Truffle", category: "designer", rating: 4.8, price: "₹500", unit: "", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Veg Momos (Steam)", category: "momos", rating: 4.9, price: "₹80", unit: "", image: "https://images.unsplash.com/photo-1626776876729-bab4306261ca?auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "Khir Malai", category: "traditional", rating: 5.0, price: "₹900", unit: "/kg", image: "https://images.unsplash.com/photo-1517260739337-6799d2ff1fdb?auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "Raj Kachori", category: "chat", rating: 4.7, price: "₹120", unit: "", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80" },
    { id: 5, name: "Black Forest Cake", category: "designer", rating: 4.5, price: "₹450", unit: "", image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?auto=format&fit=crop&w=500&q=80" },
    { id: 6, name: "Paneer Momos", category: "momos", rating: 4.8, price: "₹120", unit: "", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=500&q=80" },
    { id: 7, name: "Rasgulla", category: "traditional", rating: 4.9, price: "₹250", unit: "/kg", image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&w=500&q=80" },
    { id: 8, name: "Dahi Puri", category: "chat", rating: 4.6, price: "₹90", unit: "", image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=80" },
     { id: 1, name: "Chocolate Truffle", category: "designer", rating: 4.8, price: "₹500", unit: "", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Veg Momos (Steam)", category: "momos", rating: 4.9, price: "₹80", unit: "", image: "https://images.unsplash.com/photo-1626776876729-bab4306261ca?auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "Khir Malai", category: "traditional", rating: 5.0, price: "₹900", unit: "/kg", image: "https://images.unsplash.com/photo-1517260739337-6799d2ff1fdb?auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "Raj Kachori", category: "chat", rating: 4.7, price: "₹120", unit: "", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80" },
    { id: 5, name: "Black Forest Cake", category: "designer", rating: 4.5, price: "₹450", unit: "", image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?auto=format&fit=crop&w=500&q=80" },
    { id: 6, name: "Paneer Momos", category: "momos", rating: 4.8, price: "₹120", unit: "", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=500&q=80" },
    { id: 7, name: "Rasgulla", category: "traditional", rating: 4.9, price: "₹250", unit: "/kg", image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&w=500&q=80" },
    { id: 8, name: "Dahi Puri", category: "chat", rating: 4.6, price: "₹90", unit: "", image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=80" }
];

const productGrid = document.getElementById('productGrid');
const filterBtns = document.querySelectorAll('.cat-card');

// --- RENDER PRODUCTS ---
function renderProducts(filterCategory = 'all') {
    productGrid.innerHTML = ''; 
    const filteredProducts = filterCategory === 'all' ? products : products.filter(product => product.category === filterCategory);

    filteredProducts.forEach((product, index) => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.style.animationDelay = `${index * 0.1}s`; // Staggered pop-in effect
        
        card.innerHTML = `
            <div class="wishlist-btn" onclick="toggleWishlist(this)"><i class="fas fa-heart"></i></div>
            <div class="p-image" onclick="openModal(${product.id})" style="cursor: pointer;">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="p-info">
                <h4>${product.name}</h4>
                <div class="rating"><i class="fas fa-star"></i> ${product.rating}</div>
                <div class="p-action">
                    <span class="price">${product.price}${product.unit}</span>
                    <button class="order-btn" onclick="orderNow('${product.name}', '${product.price}${product.unit}')">
                        Order <i class="fab fa-whatsapp"></i>
                    </button>
                </div>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// --- CATEGORY FILTERS ---
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        filterBtns.forEach(b => b.classList.remove('active-filter'));
        btn.classList.add('active-filter');
        const category = btn.getAttribute('data-filter');
        renderProducts(category);
    });
});

function toggleWishlist(element) { element.classList.toggle('active'); }

// --- MODAL LOGIC ---
const modal = document.getElementById('productModal');
const mImg = document.getElementById('m-img');
const mTitle = document.getElementById('m-title');
const mPrice = document.getElementById('m-price');

function openModal(id) {
    const product = products.find(p => p.id === id);
    if(product) {
        mImg.src = product.image;
        mTitle.innerText = product.name;
        mPrice.innerText = product.price + product.unit;
        modal.classList.add('active');
    }
}

function closeModal() { modal.classList.remove('active'); }
window.onclick = function(event) { if (event.target == modal) { closeModal(); } }

function orderNow(itemName, price) {
    const phoneNumber = "919934750872"; 
    const message = `Hello New Mithai Ghar! I want to order from the Menu: *${itemName}* (Price: ${price}).`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}
function orderFromModal() { orderNow(mTitle.innerText, mPrice.innerText); }


// --- INITIALIZATION & EFFECTS ---
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('all');

    // 1. Mobile Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if(navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars'); icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times'); icon.classList.add('fa-bars');
            }
        });
    }

    // 2. Cursor Sweet Spreader Effect
    const sweetsList = ['🍬', '🍩', '🧁', '🍫', '🍡', '🍮'];
    document.addEventListener('mousemove', function(e) {
        // Limit spawning frequency slightly for performance
        if(Math.random() > 0.8) { 
            let sweet = document.createElement('span');
            sweet.classList.add('cursor-sweet');
            sweet.innerText = sweetsList[Math.floor(Math.random() * sweetsList.length)];
            
            // Spawn exactly at cursor
            sweet.style.left = e.pageX + 'px';
            sweet.style.top = e.pageY + 'px';
            
            document.body.appendChild(sweet);
            
            // Remove from DOM after animation completes
            setTimeout(() => { sweet.remove(); }, 1000);
        }
    });

    // 3. Scroll Reveal Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-up').forEach((el) => {
        observer.observe(el);
    });
});