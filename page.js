// Product Data Array
const products = [

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
    { id: 84, name: "Mati Pak", category: "traditional", rating: 4.9, price: "", unit: "", image: "pic/sweets/mati pak .JPG" },
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
    { id: 101, name: "2 in1 barfi", category: "traditional", rating: 5, price: "", unit: "", image:"pic/sweets/2 in1 barfi.JPG" },
    { id: 102, name: "Amriti", category: "traditional", rating: 5, price: "", unit: "", image:"pic/sweets/Amriti.JPG" },
    { id: 103, name: "Apple Sweet", category: "traditional", rating: 5, price: "", unit: "", image:"pic/sweets/apple sweet.JPG" },
    { id: 104, name: "Boondi Laddu", category: "traditional", rating: 5, price: "", unit: "", image:"pic/sweets/boondi laddu.JPG" },
    { id: 105, name: "Gulabjam", category: "traditional", rating: 5, price: "", unit: "", image:"pic/sweets/gulabJam.JPG" },
    { id: 106, name: "Kaju tart baklawa", category: "traditional", rating: 5, price: "", unit: "", image:"pic/sweets/kaju tart baklawa.JPG" },
    { id: 107, name: "Kesaria cham cham", category: "traditional", rating: 5, price: "", unit: "", image:"pic/sweets/kesaria cham cham.JPG" },
    { id: 108, name: "Kesaria malai jalebi", category: "traditional", rating: 5, price: "", unit: "", image:"pic/sweets/kesaria malai jalebi.JPG" },
    { id: 109, name: "Khajur barfi", category: "traditional", rating: 5, price: "", unit: "", image:"pic/sweets/khajur barfi.JPG" },
    { id: 110, name: "Kheer kadam", category: "traditional", rating: 5, price: "", unit: "", image:"pic/sweets/kheer kadam.JPG" },
    { id: 111, name: "Meeta boondi", category: "traditional", rating: 5, price: "", unit: "", image:"pic/sweets/meeta boondi.JPG" },
    { id: 112, name: "Ras kadam", category: "traditional", rating: 5, price: "", unit: "", image:"pic/sweets/ras kadam.JPG" },
    { id: 113, name: "Rasgulla", category: "traditional", rating: 5, price: "", unit: "", image:"pic/sweets/Rasgulla.JPG" },
    { id: 114, name: "Sada khoa burfi", category: "traditional", rating: 5, price: "", unit: "", image:"pic/sweets/sada khoa burfi.JPG" },
    { id: 115, name: "Sada khoa", category: "traditional", rating: 5, price: "", unit: "", image:"pic/sweets/sada khoa.JPG" },
    { id: 116, name: "Sandesh", category: "traditional", rating: 5, price: "", unit: "", image:"pic/sweets/sandesh.JPG" },
    { id: 117, name: "Soanpapdi", category: "traditional", rating: 5, price: "", unit: "", image:"pic/sweets/soanpapdi.JPG" },
    { id: 118, name: "Cold Coffee", category: "traditional", rating: 5, price: "", unit: "", image:"pic/sweets/Cold Coffee.JPG" },
    { id: 119, name: "Badam Milk", category: "traditional", rating: 5, price: "", unit: "", image:"pic/sweets/Badam Milk.JPG" },
    { id: 120, name: "Sweet Lassi", category: "traditional", rating: 5, price: "", unit: "", image:"pic/sweets/Sweet Lassi.JPG" },
    
    


    { id: 1, name: "Chocolate Truffle", category: "designer", rating: 4.8, price: "", unit: "", image: "pic/cake/choco chip cake.JPG" },
         { id: 10, name: "Celebration Cake", category: "designer", rating: 4.8, price: "", unit: "", image: "pic/cake/DSC_2327(1).JPG" },
         { id: 9, name: " Celebration Cake", category: "designer", rating: 4.8, price: "", unit: "", image: "pic/cake/DSC_2347(1).JPG" },
         { id: 11, name: "Celebration Cake", category: "designer", rating: 4.8, price: "", unit: "", image: "pic/cake/DSC_2384(1).JPG" },
         { id: 12, name: "Celebration Cake", category: "designer", rating: 4.8, price: "", unit: "", image: "pic/cake/DSC_2453(1).JPG" },
         { id: 13, name: "Celebration Cake", category: "designer", rating: 4.8, price: "", unit: "", image: "pic/cake/DSC_2460(1).JPG" },
         { id: 14, name: "Celebration Cake", category: "designer", rating: 4.8, price: "", unit: "", image: "pic/cake/DSC_2468(1).JPG" },
         { id: 15, name:  "Celebration Cake", category: "designer", rating: 4.8, price: "", unit: "", image: "pic/cake/DSC_2290.JPG" },
         { id: 191, name: "Celebration Cake", category: "designer", rating: 4.8, price: "", unit: "", image: "pic/cake/DSC_2397.JPG" },
    
        

    { id: 20, name: "Chana jhor garam", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/chana jhor garam.JPG" },
    { id: 30, name: "Khir Malai", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/chura mixture.JPG" },
    { id: 21, name: "Kaju mixture", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/kaju mixture.JPG" },
    { id: 31, name: "Makhana fry", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/makhana fry.JPG" },
    { id: 22, name: "Masala Bhujia", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/masala bhujia.JPG" },
    { id: 33, name: "Paneer Tikka", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/paneer tikka.JPG" },
    { id: 120, name: "Aloo Paties", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/aloo paties.JPG" },
    { id: 130, name: "Banana Chips", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/banana chips.JPG" },
    { id: 121, name: "Bread Butter Toast", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/bread butter toast.JPG" },
    { id: 131, name: "Burger", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/burger.JPG" },
    { id: 122, name: "Cheese Burger", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/cheese burger.JPG" },
    { id: 133, name: "Chilly Cheese Sandwich", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/chilly cheese sandwich.JPG" },
    { id: 1120, name: "Chola Kulcha", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/chola kulcha.JPG" },
    { id: 1130, name: "Cookies", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/cookies.JPG" },
    { id: 1121, name: "Corn Sandwich", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/corn sandwich.JPG" },
    { id: 1131, name: "French Fries", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/french fries.JPG" },
    { id: 1122, name: "Ghatiya", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/ghatiya.JPG" },
    { id: 1133, name: "Hot Dog", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/hot dog.JPG" },
    { id: 11130, name: "Kachori sabzi", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/kachori sabzi.JPG" },
    { id: 11121, name: "Paneer bread pakora", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/paneer bread pakora.JPG" },
    { id: 11131, name: "Paneer Patties", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/paneer patties.JPG" },
    { id: 11122, name: "Paneer Pizza 5inch", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/paneer pizza 5inch.JPG" },
    { id: 11133, name: "Paneer Pokara", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/paneer pokara.JPG" },
    { id: 150, name: "Paneer Rool", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/paneer rool.JPG" },
    { id: 151, name: "Paneer Samosa", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/paneer samosa.JPG" },
    { id: 152, name: "Paneer Stuffed Pizza", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/paneer stuffed pizza.JPG" },
    { id: 153, name: "Pav Bhaji", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/pav bhaji.JPG" },
    { id: 154, name: "Pav Bhaji Brade", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/pav bhaji brade.JPG" },
    { id: 155, name: "Peri Peri French Fries", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/peri peri french fries.JPG" },
    { id: 156, name: "Veg Pizza", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/pizza.JPG" },
    { id: 157, name: "Somasa Chola", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/somasa chola.JPG" },
    { id: 158, name: "Tuti Fruti Muffin", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/tuti fruti muffin.JPG" },
    { id: 159, name: "Veg Cheese Pizza 10 inch", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/veg cheese pizza 10 inch.JPG" },
    { id: 160, name: "Veg Fried Momo", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/veg fried momo.JPG" },
    { id: 161, name: "Veg Pakora", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/veg pakora.JPG" },
    { id: 162, name: "Veg Sandwich", category: "momos", rating: 4.9, price: "", unit: "", image: "pic/Namkeen/veg sandwich.JPG" },
    { id: 163, name: "Veg Stem Momo", category: "momos", rating: 5.0, price: "", unit: "", image: "pic/Namkeen/veg stem momo.JPG" },
    
       
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