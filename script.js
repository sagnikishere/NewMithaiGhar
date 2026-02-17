document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. PRODUCT CYCLER (Hero Section) ---
    const imgElement = document.getElementById('cycler-img');
    const textElement = document.getElementById('cycler-text');
    
    // Replace these URLs with your actual local images or Unsplash links
    const products = [
        { name: "Modak", src: "pic/sweets/modak.webp" },
        { name: "Chocolate Laddu", src: "pic/sweets/chocolate laddu.webp" },
        { name: "Tasty Cake", src: "pic/Pastry/DSC_1850.webp" },
        { name: "Paneer Tikka", src: "pic/Namkeen/paneer tikka.webp" }
    ];

    let index = 0;

    function cycleProduct() {
        if (!imgElement) return;
        
        // Remove animation class to reset
        imgElement.classList.remove('pop-anim');
        textElement.classList.remove('pop-anim');
        
        // Update Index
        index = (index + 1) % products.length;
        
        // Small delay to allow CSS reset, then change src and add animation
        setTimeout(() => {
            imgElement.src = products[index].src;
            textElement.textContent = products[index].name;
            
            imgElement.classList.add('pop-anim');
            textElement.classList.add('pop-anim');
        }, 50);
    }
    setInterval(cycleProduct, 3000);


    // --- 2. VALENTINE CURSOR SPRAY ---
    document.addEventListener('mousemove', function(e) {
        // Create heart element
        let heart = document.createElement('span');
        heart.classList.add('cursor-heart');
        
        // Position it at mouse coordinates
        let x = e.offsetX;
        let y = e.offsetY;
        
        // For whole page tracking (better than offsetX sometimes)
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

    // --- 3. FLYING LOVE BALLOONS ---
    function createBalloon() {
        const balloonContainer = document.getElementById('balloon-container');
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.innerHTML = '❤️'; // Or use an image 🎈
        
        // Random horizontal position
        balloon.style.left = Math.random() * 100 + 'vw';
        
        // Random size
        balloon.style.fontSize = (Math.random() * 20 + 20) + 'px';
        
        // Random animation duration
        balloon.style.animationDuration = (Math.random() * 5 + 5) + 's';
        
        balloonContainer.appendChild(balloon);
        
        // Remove after animation ends
        setTimeout(() => {
            balloon.remove();
        }, 10000);
    }
    // Create a balloon every 500ms
    setInterval(createBalloon, 500);


    // --- 4. MOBILE MENU TOGGLE ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            // Toggle the class 'active' on navLinks
            navLinks.classList.toggle('active');
            
            // Toggle icon shape
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


    // --- 5. VALENTINE SHUTTER LOGIC ---
    const valentineOverlay = document.getElementById('valentine-overlay');
    const openShopBtn = document.getElementById('open-shop-btn');

    if (openShopBtn && valentineOverlay) {
        openShopBtn.addEventListener('click', () => {
            valentineOverlay.classList.add('open');
            setTimeout(() => {
                valentineOverlay.style.display = 'none';
            }, 1000);
        });
    }
});

// --- 6. WHATSAPP ORDER FUNCTION ---
function orderNow(itemName, price) {
    const phoneNumber = "919934750872"; 
    const message = `Hello New Mithai Ghar! I want to order for Valentine's: *${itemName}* (Price: ${price}).`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}