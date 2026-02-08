document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Cute Image Cycler Animation ---
    const imgElement = document.getElementById('cycler-img');
    const textElement = document.getElementById('cycler-text');
    
    const products = [
        { name: "Truffle Cake", src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1989&auto=format&fit=crop" },
        { name: "Rasmalai", src: "https://images.unsplash.com/photo-1631260406856-f033c7a950a3?q=80&w=2070&auto=format&fit=crop" },
        { name: "Gulab Jamun", src: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?q=80&w=2008&auto=format&fit=crop" },
        { name: "Veg Momos", src: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=2069&auto=format&fit=crop" },
        { name: "Samosa", src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop" },
        { name: "Chocolates", src: "https://images.unsplash.com/photo-1548848221-0c2e497ed557?q=80&w=2071&auto=format&fit=crop" }
    ];

    let index = 0;

    function cycleProduct() {
        if (!imgElement) return;
        imgElement.classList.remove('pop-anim');
        textElement.classList.remove('pop-anim');
        index = (index + 1) % products.length;
        
        setTimeout(() => {
            imgElement.src = products[index].src;
            textElement.textContent = products[index].name;
            imgElement.classList.add('pop-anim');
            textElement.classList.add('pop-anim');
        }, 50);
    }
    setInterval(cycleProduct, 2500);

    // --- 2. Category Filters ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filterValue = btn.getAttribute('data-filter');
            productCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                    card.style.opacity = 0;
                    card.style.transform = "translateY(20px)";
                    setTimeout(() => {
                        card.style.opacity = 1;
                        card.style.transform = "translateY(0)";
                    }, 100);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // --- 3. Mobile Menu ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'white';
                navLinks.style.padding = '2rem';
                navLinks.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)';
            }
        });
    }

    // --- 5. VALENTINE SHUTTER LOGIC ---
    const valentineOverlay = document.getElementById('valentine-overlay');
    const openShopBtn = document.getElementById('open-shop-btn');

    if (openShopBtn && valentineOverlay) {
        openShopBtn.addEventListener('click', () => {
            // Add class to trigger CSS transform animations (sliding panels)
            valentineOverlay.classList.add('open');
            
            // Optional: Remove from DOM after animation completes (1s) to free memory
            setTimeout(() => {
                valentineOverlay.style.display = 'none';
            }, 1000);
        });
    }
});

// --- 4. Direct WhatsApp Order Function ---
function orderNow(itemName, price) {
    const phoneNumber = "919934750872"; 
    const message = `Hello New Mithai Ghar! I would like to order: *${itemName}* (Price: ${price}). Please confirm available quantity.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}