document.addEventListener('DOMContentLoaded', () => {
    // Animate steps on scroll
    const steps = document.querySelectorAll('.step');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.2 });
    
    steps.forEach(step => {
        observer.observe(step);
    });
    
    // Pledge button functionality
    const pledgeButton = document.querySelector('.pledge-button');
    
    pledgeButton.addEventListener('click', () => {
        pledgeButton.textContent = 'Pledge Taken! 🧦';
        pledgeButton.style.background = 'var(--accent-color)';
        pledgeButton.style.color = 'white';
        pledgeButton.disabled = true;
        
        // Create celebration effect
        createConfetti();
        
        // Show welcome message
        setTimeout(() => {
            alert('Welcome to the Cult of SOX! Your initiation has begun. Now go create your first meme!');
        }, 1000);
    });
    
    // Confetti effect function
    function createConfetti() {
        const confettiCount = 100;
        const container = document.querySelector('.cult-pledge');
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.background = getRandomColor();
            container.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }
        
        // Add confetti styles
        const style = document.createElement('style');
        style.textContent = `
            .confetti {
                position: absolute;
                width: 10px;
                height: 10px;
                background: var(--accent-color);
                opacity: 0.7;
                animation: confetti-fall 3s linear forwards;
            }
            
            @keyframes confetti-fall {
                0% {
                    transform: translateY(-100px) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(500px) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    function getRandomColor() {
        const colors = [
            '#9945FF', '#14F195', '#FF6B6B', '#4ECDC4', '#FFE66D'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});