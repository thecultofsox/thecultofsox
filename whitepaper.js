document.addEventListener('DOMContentLoaded', () => {
    // Animate whitepaper sections on scroll
    const whitepaperSections = document.querySelectorAll('.whitepaper-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });
    
    whitepaperSections.forEach(section => {
        observer.observe(section);
    });
    
    // Add highlight effect to sections when they come into view
    const highlightObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.backgroundColor = 'rgba(153, 69, 255, 0.05)';
                entry.target.style.transition = 'background-color 0.5s ease';
                
                // Remove highlight after a delay
                setTimeout(() => {
                    entry.target.style.backgroundColor = '';
                }, 1000);
            }
        });
    }, { threshold: 0.2 });
    
    whitepaperSections.forEach(section => {
        highlightObserver.observe(section);
    });
});