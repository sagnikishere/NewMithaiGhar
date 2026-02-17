document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. PRODUCT CYCLER (Hero Section) ---
    const imgElement = document.getElementById('cycler-img');
    const textElement = document.getElementById('cycler-text');
    
    // Kept your file names exactly as requested
    const products = [
        { name: "Modak", src: "pic/sweets/modak.webp" },
        { name: "Chocolate Laddu", src: "pic/sweets/chocolate laddu.webp" },
        { name: "Tasty Cake", src: "pic/Pastry/DSC_1850.webp" },
        { name: "Paneer Tikka", src: "pic/Namkeen/paneer tikka.webp" }
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
    setInterval(cycleProduct, 3000);


    // --- 2. MOBILE MENU TOGGLE ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            const icon = hamburger.querySelector('i');
            if(navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }


    // --- 3. AESTHETIC WELCOME SHUTTER (AUTO LOAD) ---
    const welcomeOverlay = document.getElementById('welcome-overlay');

    if (welcomeOverlay) {
        // Automatically open the shutter after 2.5 seconds simulating a loader
        setTimeout(() => {
            welcomeOverlay.classList.add('open');
            
            // Remove from DOM flow after transition finishes to prevent blocking clicks
            setTimeout(() => {
                welcomeOverlay.style.display = 'none';
            }, 1200); 
        }, 2500); 
    }
});

// --- 4. WHATSAPP ORDER FUNCTION (Updated Message) ---
function orderNow(itemName, price) {
    const phoneNumber = "919934750872"; 
    // Removed "for Valentine's" from the template
    const message = `Hello New Mithai Ghar! I want to order: *${itemName}* (Price: ${price}).`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// --- CURSOR HEART EFFECT ---
    document.addEventListener('mousemove', function(e) {
        // Create heart element
        let heart = document.createElement('span');
        heart.classList.add('cursor-heart');
        
        // Position it at mouse coordinates (pageX/Y for whole page tracking)
        heart.style.left = e.pageX + 'px';
        heart.style.top = e.pageY + 'px';
        
        // Random size for variety
        let size = Math.random() * 20 + 10; 
        heart.style.width = size + 'px';
        heart.style.height = size + 'px';
        
        document.body.appendChild(heart);
        
        // Remove after animation (1s) to prevent memory leak
        setTimeout(() => {
            heart.remove();
        }, 1000);
    });