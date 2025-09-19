document.addEventListener('DOMContentLoaded', () => {
    // Animate about cards on scroll
    const aboutCards = document.querySelectorAll('.about-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    aboutCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
    
    // Add special effect to the creed list
    const creedItems = document.querySelectorAll('.creed-list li');
    
    creedItems.forEach((item, index) => {
        item.style.opacity = 0;
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        
        // Create observer for creed items
        const creedObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateX(0)';
                }
            });
        }, { threshold: 0.2 });
        
        creedObserver.observe(item);
    });
    
    // Add hover effect to tokenomics items
    const tokenomicsItems = document.querySelectorAll('.about-card:nth-child(3) p');
    
    tokenomicsItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.color = 'var(--accent-color)';
            item.style.transition = 'color 0.3s ease';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.color = 'var(--text-color)';
        });
    });
    
    // Add floating socks effect to the origin story
    const originCard = document.querySelector('.about-card:nth-child(1)');
    
    originCard.addEventListener('mouseenter', () => {
        // Create floating socks
        for (let i = 0; i < 3; i++) {
            createFloatingSock(originCard);
        }
    });
    
    function createFloatingSock(container) {
        const sock = document.createElement('div');
        sock.textContent = '🧦';
        sock.style.position = 'absolute';
        sock.style.fontSize = '1.5rem';
        sock.style.opacity = '0';
        sock.style.zIndex = '1';
        
        // Random position within the card
        const left = Math.random() * 80 + 10;
        sock.style.left = `${left}%`;
        sock.style.top = `${Math.random() * 80 + 10}%`;
        
        // Random animation
        const duration = 2 + Math.random() * 2;
        sock.style.animation = `floatSock ${duration}s ease-in-out forwards`;
        
        container.appendChild(sock);
        
        // Remove sock after animation
        setTimeout(() => {
            sock.remove();
        }, duration * 1000);
    }
    
    // Add keyframes for floating animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatSock {
            0% {
                opacity: 0;
                transform: translateY(0) rotate(0deg);
            }
            20% {
                opacity: 1;
            }
            80% {
                opacity: 1;
            }
            100% {
                opacity: 0;
                transform: translateY(-50px) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add typewriter effect to the origin story
    const originText = document.querySelector('.about-card:nth-child(1) p');
    const originalText = originText.textContent;
    
    originText.textContent = '';
    
    let charIndex = 0;
    let typewriterInterval;
    
    function startTypewriter() {
        typewriterInterval = setInterval(() => {
            if (charIndex < originalText.length) {
                originText.textContent += originalText.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typewriterInterval);
            }
        }, 20);
    }
    
    // Start typewriter when the card is in view
    const originObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            startTypewriter();
            originObserver.disconnect();
        }
    }, { threshold: 0.5 });
    
    originObserver.observe(originCard);
});