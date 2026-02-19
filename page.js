// Product Data Array
const products = [
    { id: 50, name: "RashMalai", category: "traditional", rating: 5, price: "", unit: "", image: "pic/rashmalai.png" },
    { id: 51, name: "Square Baklawa", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/square baklawa.webp" },
    { id: 1, name: "Refine Laddu", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/refine laddu.webp" },
    { id: 2, name: "Pinni Laddu", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/pinni laddu.webp" },
    { id: 3, name: "Paan Gilori", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/paan gilori.webp" },
    { id: 4, name: "Nariyal Barfi", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/nariyal barfi.webp" },
    { id: 5, name: "Myshor Pak", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/myshor pak.webp" },
    { id: 6, name: "Moti Choor Laddu", category: "traditional", rating: 5, price: "", unit: "", image: "pic/sweets/Moti choor laddu.webp" },
    { id: 7, name: "Moong Dal Barfi", category: "traditional", rating: 5, price: "", unit: "", image: "pic/sweets/moong dal barfi.webp" },
    { id: 8, name: "Modak", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/modak.webp" },
    { id: 9, name: "Mini Peda", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/mini peda.webp" },
    { id: 10, name: "Milk Cake", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/milk cake.webp" },
    { id: 11, name: "Mewa Pump", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/mewa pump.webp" },
    { id: 12, name: "Mewa Gond Laddu", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/mewa gond laddu.webp" },
    { id: 13, name: "Mati Pak", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/mati pak .webp" },
    { id: 14, name: "Mango Roll", category: "traditional", rating: 5, price: "", unit: "", image: "pic/sweets/mango roll.webp" },
    { id: 15, name: "Malpua", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/malpua.webp" },
    { id: 16, name: "Khoa Mewa Koyal", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/khoa mewa koyal.webp" },
    { id: 17, name: "Khoa Kaju Burfi", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/khoa kaju burfi.webp" },
    { id: 18, name: "Khoa Chocolate Burfi", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/khoa chocolate burfi.webp" },
    { id: 19, name: "Khoa Badam Roll", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/khoa badam roll.webp" },
    { id: 20, name: "Khaja", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/khaja.webp" },
    { id: 21, name: "Kesaria Pera", category: "traditional", rating: 5, price: "", unit: "", image: "pic/sweets/kesaria pera.webp" },
    { id: 22, name: "Kesaria Khoa Burfi", category: "traditional", rating: 5, price: "", unit: "", image: "pic/sweets/kesaria khoa burfi.webp" },
    { id: 23, name: "Karachi Halwa", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/karachi halwa.webp" },
    { id: 24, name: "Kaju Tika", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/kaju tika.webp" },
    { id: 25, name: "Kaju Roll", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/kaju roll.webp" },
    { id: 26, name: "Kaju Pudding", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/kaju pudding.webp" },
    { id: 27, name: "Kaju Gajak", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/kaju gajak.webp" },
    { id: 28, name: "Kaju Bite", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/kaju bite.webp" },
    { id: 29, name: "Anjeer Burfi", category: "traditional", rating: 5, price: "", unit: "", image: "pic/sweets/kaju anjeer burfi.webp" },
    { id: 30, name: "2 in1 barfi", category: "traditional", rating: 5, price: "", unit: "", image: "pic/sweets/2 in1 barfi.webp" },
    { id: 31, name: "Amriti", category: "traditional", rating: 5, price: "", unit: "", image: "pic/sweets/Amriti.webp" },
    { id: 32, name: "Apple Sweet", category: "traditional", rating: 5, price: "", unit: "", image: "pic/sweets/apple sweet.webp" },
    { id: 33, name: "Boondi Laddu", category: "traditional", rating: 5, price: "", unit: "", image: "pic/sweets/boondi laddu.webp" },
    { id: 34, name: "Gulabjam", category: "traditional", rating: 5, price: "", unit: "", image: "pic/sweets/gulabJam.webp" },
    { id: 35, name: "Kaju tart baklawa", category: "traditional", rating: 5, price: "", unit: "", image: "pic/sweets/kaju tart baklawa.webp" },
    { id: 36, name: "Kesaria cham cham", category: "traditional", rating: 5, price: "", unit: "", image: "pic/sweets/kesaria cham cham.webp" },
    { id: 37, name: "Kesaria malai jalebi", category: "traditional", rating: 5, price: "", unit: "", image: "pic/sweets/kesaria malai jalebi.webp" },
    { id: 38, name: "Khajur barfi", category: "traditional", rating: 5, price: "", unit: "", image: "pic/sweets/khajur barfi.webp" },
    { id: 39, name: "Kheer kadam", category: "traditional", rating: 5, price: "", unit: "", image: "pic/sweets/kheer kadam.webp" },
    { id: 40, name: "Meeta boondi", category: "traditional", rating: 5, price: "", unit: "", image: "pic/sweets/meeta boondi.webp" },
    { id: 41, name: "Ras kadam", category: "traditional", rating: 5, price: "", unit: "", image: "pic/sweets/ras kadam.webp" },
    { id: 42, name: "Rasgulla", category: "traditional", rating: 5, price: "", unit: "", image: "pic/sweets/Rasgulla.webp" },
    { id: 43, name: "Sada khoa burfi", category: "traditional", rating: 5, price: "", unit: "", image: "pic/sweets/sada khoa burfi.webp" },
    { id: 44, name: "Sada khoa", category: "traditional", rating: 5, price: "", unit: "", image: "pic/sweets/sada khoa.webp" },
    { id: 45, name: "Sandesh", category: "traditional", rating: 5, price: "", unit: "", image: "pic/sweets/sandesh.webp" },
    { id: 46, name: "Soanpapdi", category: "traditional", rating: 5, price: "", unit: "", image: "pic/sweets/soanpapdi.webp" },
    { id: 47, name: "Cold Coffee", category: "traditional", rating: 5, price: "", unit: "", image: "pic/sweets/Cold Coffee.webp" },
    { id: 48, name: "Badam Milk", category: "traditional", rating: 5, price: "", unit: "", image: "pic/sweets/Badam Milk.webp" },
    { id: 49, name: "Sweet Lassi", category: "traditional", rating: 5, price: "", unit: "", image: "pic/sweets/Sweet Lassi.webp" },

    { id: 53, name: "Chocolate Truffle", category: "designer", rating: 4.8, price: "", unit: "", image: "pic/cake/choco chip cake.webp" },
    { id: 54, name: "Celebration Cake", category: "designer", rating: 4.8, price: "", unit: "", image: "pic/cake/DSC_2327(1).webp" },
    { id: 55, name: "Celebration Cake", category: "designer", rating: 4.8, price: "", unit: "", image: "pic/cake/DSC_2347(1).webp" },
    { id: 56, name: "Celebration Cake", category: "designer", rating: 4.8, price: "", unit: "", image: "pic/cake/DSC_2384(1).webp" },
    { id: 57, name: "Celebration Cake", category: "designer", rating: 4.8, price: "", unit: "", image: "pic/cake/DSC_2453(1).webp" },
    { id: 58, name: "Celebration Cake", category: "designer", rating: 4.8, price: "", unit: "", image: "pic/cake/DSC_2460(1).webp" },
    { id: 59, name: "Celebration Cake", category: "designer", rating: 4.8, price: "", unit: "", image: "pic/cake/DSC_2468(1).webp" },
    { id: 60, name: "Celebration Cake", category: "designer", rating: 4.8, price: "", unit: "", image: "pic/cake/DSC_2290.webp" },
    { id: 61, name: "Celebration Cake", category: "designer", rating: 4.8, price: "", unit: "", image: "pic/cake/DSC_2297.webp" },

    { id: 62, name: "Chana jhor garam", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/chana jhor garam.webp" },
    { id: 63, name: "Khir Malai", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/chura mixture.webp" },
    { id: 64, name: "Kaju mixture", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/kaju mixture.webp" },
    { id: 65, name: "Makhana fry", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/makhana fry.webp" },
    { id: 66, name: "Masala Bhujia", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/masala bhujia.webp" },
    { id: 67, name: "Paneer Tikka", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/paneer tikka.webp" },
    { id: 68, name: "Aloo Paties", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/aloo paties.webp" },
    { id: 69, name: "Banana Chips", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/banana chips.webp" },
    { id: 70, name: "Bread Butter Toast", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/bread butter toast.webp" },
    { id: 71, name: "Burger", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/burger.webp" },
    { id: 72, name: "Cheese Burger", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/cheese burger.webp" },
    { id: 73, name: "Chilly Cheese Sandwich", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/chilly chease sandwich.webp" },
    { id: 74, name: "Chola Kulcha", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/chola kulcha.webp" },
    { id: 75, name: "Cookies", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/cookies.webp" },
    { id: 76, name: "Corn Sandwich", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/corn sandwich.webp" },
    { id: 77, name: "French Fries", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/french fries.webp" },
    { id: 78, name: "Ghatiya", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/ghatiya.webp" },
    { id: 79, name: "Hot Dog", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/hot dog.webp" },
    { id: 80, name: "Kachori sabzi", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/kachori sabzi.webp" },
    { id: 81, name: "Paneer bread pakora", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/paneer bread pakora.webp" },
    { id: 82, name: "Paneer Patties", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/paneer patties.webp" },
    { id: 83, name: "Paneer Pizza 5inch", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/paneer pizza 5inch.webp" },
    { id: 84, name: "Paneer Pokara", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/paneer pokara.webp" },
    { id: 85, name: "Paneer Rool", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/paneer rool.webp" },
    { id: 86, name: "Paneer Samosa", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/paneer samosa.webp" },
    { id: 87, name: "Paneer Stuffed Pizza", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/paneer stuffed pizza.webp" },
    { id: 88, name: "Pav Bhaji", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/pav bhaji.webp" },
    { id: 89, name: "Pav Bhaji Brade", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/paw bhaji brade.webp" },
    { id: 90, name: "Peri Peri French Fries", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/peri peri french fries.webp" },
    { id: 91, name: "Veg Pizza", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/pizza.webp" },
    { id: 92, name: "Somasa Chola", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/somasa chola.webp" },
    { id: 93, name: "Tuti Fruti Muffin", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/tuti fruti muffin.webp" },
    { id: 94, name: "Veg Cheese Pizza 10 inch", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/veg cheese pizza 10 inch.webp" },
    { id: 95, name: "Veg Fried Momo", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/veg fried momo.webp" },
    { id: 96, name: "Veg Pakora", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/veg pakora.webp" },
    { id: 97, name: "Veg Sandwich", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/veg sandwich.webp" },
    { id: 98, name: "Veg Stem Momo", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/veg stem momo.webp" },

    { id: 99, name: "Pastry", category: "chat", rating: 4.7, price: "", unit: "", image: "pic/Pastry/DSC_1815.webp" },
    { id: 100, name: "Pastry", category: "chat", rating: 4.7, price: "", unit: "", image: "pic/Pastry/DSC_1824.webp" },
    { id: 101, name: "Pastry", category: "chat", rating: 4.7, price: "", unit: "", image: "pic/Pastry/DSC_1832.webp" },
    { id: 102, name: "Pastry", category: "chat", rating: 4.7, price: "", unit: "", image: "pic/Pastry/DSC_1844.webp" },
    { id: 103, name: "Pastry", category: "chat", rating: 4.7, price: "", unit: "", image: "pic/Pastry/DSC_1850.webp" },
    { id: 104, name: "Pastry", category: "chat", rating: 4.7, price: "", unit: "", image: "pic/Pastry/DSC_1870.webp" },
    { id: 105, name: "Pastry", category: "chat", rating: 4.7, price: "", unit: "", image: "pic/Pastry/DSC_1878.webp" },
    { id: 106, name: "Pastry", category: "chat", rating: 4.7, price: "", unit: "", image: "pic/Pastry/DSC_1894.webp" },
    { id: 107, name: "Pastry", category: "chat", rating: 4.7, price: "", unit: "", image: "pic/Pastry/DSC_1907.webp" },
    { id: 108, name: "Pastry", category: "chat", rating: 4.7, price: "", unit: "", image: "pic/Pastry/DSC_1937.webp" },
    { id: 109, name: "Pastry", category: "chat", rating: 4.7, price: "", unit: "", image: "pic/Pastry/DSC_1951.webp" },
    { id: 110, name: "Pastry", category: "chat", rating: 4.7, price: "", unit: "", image: "pic/Pastry/DSC_1815.webp" },
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
    const phoneNumber = "919304863952"; // Updated number with no spaces
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