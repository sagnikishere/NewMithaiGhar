document.addEventListener('DOMContentLoaded', () => {

    // 1. MOBILE MENU LOGIC
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

    // 2. SWEET/HEART CURSOR EFFECT (Spreads emojis when moving mouse)
    // I included a glowing heart specifically for the contact/Valentine vibe
    const sweetsList = ['💖'];
    
    document.addEventListener('mousemove', function(e) {
        // Limit spawning frequency slightly so it's smooth
        if(Math.random() > 0.8) { 
            let sweet = document.createElement('span');
            // This class is defined in page.css which is linked to contact.html
            sweet.classList.add('cursor-sweet'); 
            sweet.innerText = sweetsList[Math.floor(Math.random() * sweetsList.length)];
            
            sweet.style.left = e.pageX + 'px';
            sweet.style.top = e.pageY + 'px';
            
            document.body.appendChild(sweet);
            
            // Remove from DOM after animation completes
            setTimeout(() => { sweet.remove(); }, 1000);
        }
    });

    // 3. SCROLL REVEAL ANIMATION (For the contact card and footer)
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

// --- WHATSAPP FORM LOGIC ---
function sendToWhatsapp(e) {
    e.preventDefault(); // Prevent standard form submission

    // 1. Get Values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if(name === "" || phone === "" || message === "") {
        alert("Please fill in all fields");
        return;
    }

    // 2. Construct the WhatsApp Message
    const whatsappMessage = `*New Inquiry from Website* %0a%0a` +
                            `*Name:* ${name} %0a` +
                            `*Phone:* ${phone} %0a` +
                            `*Message:* ${message}`;

    // 3. Your Business Number (Updated to your Darbhanga number)
    const phoneNumber = "919934750872"; 

    // 4. Create URL
    const url = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // 5. Open in new tab
    window.open(url, '_blank').focus();
}