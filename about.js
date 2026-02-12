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
    // This function runs only when the stats section becomes visible
    function startCounters(section) {
        const counters = section.querySelectorAll('.counter');
        const speed = 200; // Lower is slower

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-val');
                const count = +counter.innerText;
                
                // Calculate increment step
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target.toLocaleString(); // Add commas (e.g., 50,000)
                }
            };
            updateCount();
        });
    }

    // Special check for the "Years of Experience" badge in the story section
    // because it's not inside the stats section
    const badgeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const numSpan = entry.target.querySelector('.num');
                if(numSpan) {
                    // Quick custom counter for the single badge
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

});