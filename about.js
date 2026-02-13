document.addEventListener("DOMContentLoaded", () => {
    
    // 1. SCROLL ANIMATIONS (Reveal on scroll)
    const observerOptions = {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active-reveal");
                
                // If the element has a counter, start counting
                if (entry.target.querySelector('.counter')) {
                   startCounters(entry.target);
                }
                
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select elements to animate
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-text');
    revealElements.forEach(el => observer.observe(el));


    // 2. NUMBER COUNTER ANIMATION
    function startCounters(section) {
        const counters = section.querySelectorAll('.counter');
        const speed = 200; // Lower is slower

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-val');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target.toLocaleString(); 
                }
            };
            updateCount();
        });
    }

    // 3. SPECIAL BADGE OBSERVER
    const badgeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const numSpan = entry.target.querySelector('.num');
                if(numSpan) {
                    let start = 0;
                    let end = parseInt(numSpan.getAttribute('data-val'));
                    let duration = 2000;
                    let interval = duration / end;
                    
                    let timer = setInterval(() => {
                        start += 1;
                        numSpan.innerText = start;
                        if(start >= end) clearInterval(timer);
                    }, interval);
                    
                    badgeObserver.unobserve(entry.target);
                }
            }
        })
    });
    
    const badge = document.querySelector('.exp-badge');
    if(badge) badgeObserver.observe(badge);

    // ---------------------------------------------------------
    // NEW ADDITIONS: MOBILE MENU & CURSOR EFFECT
    // ---------------------------------------------------------

    // 4. MOBILE MENU LOGIC
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

    // 5. SWEET CURSOR EFFECT (Spreads sweets when moving mouse)
    const sweetsList = ['🍬', '🍩', '🧁', '🍫', '🍡', '🍮'];
    document.addEventListener('mousemove', function(e) {
        // Limit spawning frequency slightly so it's not overwhelming
        if(Math.random() > 0.8) { 
            let sweet = document.createElement('span');
            // Using the class we defined in page.css previously
            sweet.classList.add('cursor-sweet');
            sweet.innerText = sweetsList[Math.floor(Math.random() * sweetsList.length)];
            
            sweet.style.left = e.pageX + 'px';
            sweet.style.top = e.pageY + 'px';
            
            document.body.appendChild(sweet);
            
            setTimeout(() => { sweet.remove(); }, 1000);
        }
    });

});