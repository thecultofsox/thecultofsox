document.addEventListener('DOMContentLoaded', () => {
    // Animate privacy sections on scroll
    const privacySections = document.querySelectorAll('.privacy-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });
    
    privacySections.forEach(section => {
        observer.observe(section);
    });
    
    // Add fun effect to the meme clause
    const memeNote = document.querySelector('.meme-note');
    
    memeNote.addEventListener('mouseenter', () => {
        memeNote.style.transform = 'scale(1.05)';
        memeNote.style.transition = 'transform 0.3s ease';
        
        // Add floating socks
        for (let i = 0; i < 5; i++) {
            const sock = document.createElement('span');
            sock.textContent = '🧦';
            sock.style.position = 'absolute';
            sock.style.fontSize = '1.5rem';
            sock.style.opacity = '0';
            sock.style.animation = `floatSock ${1 + Math.random() * 2}s ease-in-out forwards`;
            sock.style.animationDelay = `${i * 0.2}s`;
            memeNote.appendChild(sock);
        }
        
        // Add animation keyframes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatSock {
                0% {
                    opacity: 0;
                    transform: translateY(0) rotate(0deg);
                }
                50% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                    transform: translateY(-50px) rotate(360deg);
                }
            }
        `;
        document.head.appendChild(style);
    });
    
    memeNote.addEventListener('mouseleave', () => {
        memeNote.style.transform = 'scale(1)';
        
        // Remove all socks
        const socks = memeNote.querySelectorAll('span');
        socks.forEach(sock => {
            sock.remove();
        });
    });
});