document.addEventListener('DOMContentLoaded', () => {
    // Animate roadmap phases on scroll
    const roadmapPhases = document.querySelectorAll('.roadmap-phase');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.2 });
    
    roadmapPhases.forEach(phase => {
        observer.observe(phase);
    });
});