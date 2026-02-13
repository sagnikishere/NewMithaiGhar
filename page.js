// Product Data Array
const products = [
    { id: 1, name: "Chocolate Truffle", category: "designer", rating: 4.8, price: "", unit: "", image: "pic/cake/choco chip cake.JPG" },
         { id: 10, name: "Chocolate Truffle", category: "designer", rating: 4.8, price: "", unit: "", image: "pic/cake/DSC_2327(1).JPG" },
         { id: 9, name: "Chocolate Truffle", category: "designer", rating: 4.8, price: "", unit: "", image: "pic/cake/DSC_2347(1).JPG" },
         { id: 11, name: "Chocolate Truffle", category: "designer", rating: 4.8, price: "", unit: "", image: "pic/cake/DSC_2384(1).JPG" },
         { id: 12, name: "Chocolate Truffle", category: "designer", rating: 4.8, price: "", unit: "", image: "pic/cake/DSC_2453(1).JPG" },
         { id: 13, name: "Chocolate Truffle", category: "designer", rating: 4.8, price: "", unit: "", image: "pic/cake/DSC_2460(1).JPG" },
         { id: 14, name: "Chocolate Truffle", category: "designer", rating: 4.8, price: "", unit: "", image: "pic/cake/DSC_2468(1).JPG" },
         { id: 15, name: "Chocolate Truffle", category: "designer", rating: 4.8, price: "", unit: "", image: "pic/cake/DSC_2491.JPG" },
        
    { id: 20, name: "Chana jhor garam", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/chana jhor garam.JPG" },
    { id: 30, name: "Khir Malai", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/chura mixture.JPG" },
    { id: 21, name: "Kaju mixture", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/kaju mixture.JPG" },
    { id: 31, name: "Makhana fry", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/makhana fry.JPG" },
    { id: 22, name: "Masala Bhujia", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/masala bhujia.JPG" },
    { id: 33, name: "Paneer Tikka", category: "momos", rating: 5.0, price: "₹900", unit: "", image: "pic/Namkeen/paneer tikka.JPG" },
      
        { id: 41, name: "Pastry", category: "chat", rating: 4.7, price: "", unit: "", image: "pic/Pastry/DSC_1815.JPG" },
        { id: 42, name: "Pastry", category: "chat", rating: 4.7, price: "", unit: "", image: "pic/Pastry/DSC_1824.JPG" },
        { id: 43, name: "Pastry", category: "chat", rating: 4.7, price: "", unit: "", image: "pic/Pastry/DSC_1832.JPG" },
        { id: 44, name: "Pastry", category: "chat", rating: 4.7, price: "", unit: "", image: "pic/Pastry/DSC_1844.JPG" },
        { id: 45, name: "Pastry", category: "chat", rating: 4.7, price: "", unit: "", image: "pic/Pastry/DSC_1850.JPG" },
        { id: 46, name: "Pastry", category: "chat", rating: 4.7, price: "", unit: "", image: "pic/Pastry/DSC_1870.JPG" },
        { id: 47, name: "Pastry", category: "chat", rating: 4.7, price: "", unit: "", image: "pic/Pastry/DSC_1878.JPG" },
        { id: 48, name: "Pastry", category: "chat", rating: 4.7, price: "", unit: "", image: "pic/Pastry/DSC_1894.JPG" },
        { id: 49, name: "Pastry", category: "chat", rating: 4.7, price: "", unit: "", image: "pic/Pastry/DSC_1907.JPG" },
        { id: 50, name: "Pastry", category: "chat", rating: 4.7, price: "", unit: "", image: "pic/Pastry/DSC_1937.JPG" },
        { id: 51, name: "Pastry", category: "chat", rating: 4.7, price: "", unit: "", image: "pic/Pastry/DSC_1951.JPG" },
        { id: 52, name: "Pastry", category: "chat", rating: 4.7, price: "", unit: "", image: "pic/Pastry/DSC_1815.JPG" },
            
           
    { id: 7, name: "RashMalai", category: "traditional", rating: 5, price: "", unit: "", image: "pic/rashmalai.png" },
    { id: 71, name: "Square Baklawa", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/square baklawa.JPG" },
    { id: 72, name: "Refine Laddu", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/refine laddu.JPG" },
    { id: 73, name: "Pinni Laddu", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/pinni laddu.JPG" },
    { id: 74, name: "Paan Gilori", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/paan gilori.JPG" },
    { id: 75, name: "Nariyal Barfi", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/nariyal barfi.JPG" },
    { id: 76, name: "Myshor Pak", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/myshor pak.JPG" },
    { id: 77, name: "Moti Choor Laddu", category: "traditional", rating: 5, price: "", unit: "", image: "pic/sweets/Moti choor laddu.JPG" },
    { id: 78, name: "Moong Dal Barfi", category: "traditional", rating: 5, price: "", unit: "", image: "pic/sweets/moong dal barfi.JPG" },
    { id: 79, name: "Modak", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/modak.JPG" },
    { id: 80, name: "Mini Peda", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/mini peda.JPG" },
    { id: 81, name: "Milk Cake", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/milk cake.JPG" },
    { id: 82, name: "Mewa Pump", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/mewa pump.JPG" },
    { id: 83, name: "Mewa Gond Laddu", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/mewa gond laddu.JPG" },
    { id: 84, name: "Mati Pak", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/mati pak.JPG" },
    { id: 85, name: "Mango Roll", category: "traditional", rating: 5, price: "", unit: "", image:"pic/sweets/mango roll.JPG" },
    { id: 86, name: "Malpua", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/malpua.JPG" },
    { id: 87, name: "Khoa Mewa Koyal", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/khoa mewa koyal.JPG" },
    { id: 88, name: "Khoa Kaju Burfi", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/khoa kaju burfi.JPG" },
    { id: 89, name: "Khoa Chocolate Burfi", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/khoa chocolate burfi.JPG" },
    { id: 90, name: "Khoa Badam Roll", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/khoa badam roll.JPG" },
    { id: 91, name: "Khaja", category:"traditional", rating :4.9 , price:"", unit:"", image:"pic/sweets/khaja.JPG"},
    { id: 92, name: "Kesaria Pera", category: "traditional", rating: 5, price: "", unit: "", image: "pic/sweets/kesaria pera.JPG" },
    { id: 93, name: "Kesaria Khoa Burfi", category: "traditional", rating: 5, price: "", unit: "", image: "pic/sweets/kesaria khoa burfi.JPG" },
    { id: 94, name: "Karachi Halwa", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/karachi halwa.JPG" },
    { id: 95, name: "Kaju Tika", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/kaju tika.JPG" },
    { id: 96, name: "Kaju Roll", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/kaju roll.JPG" },
    { id: 97, name: "Kaju Pudding", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/kaju pudding.JPG" },
    { id: 98, name: "Kaju Gajak", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/kaju gajak.JPG" },
    { id: 99, name: "Kaju Bite", category:"traditional", rating :4.9 , price:"", unit:"", image:"pic/sweets/kaju bite.JPG"},
    { id: 100, name: "Anjeer Burfi", category: "traditional", rating: 5, price: "", unit: "", image:"pic/sweets/kaju anjeer burfi.JPG" },

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