document.addEventListener('DOMContentLoaded', () => {
    // Animate community elements on scroll
    const communityElements = document.querySelectorAll('.channel-card, .rule-item, .event-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    communityElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(element);
    });
    
    // Add pulse animation to channel links
    const channelLinks = document.querySelectorAll('.channel-link');
    
    channelLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.animation = 'pulse 1s infinite';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.animation = '';
        });
    });
    
    // Add keyframes for pulse animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
});