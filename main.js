// DOM Elements
const brightnessToggle = document.getElementById('brightness-toggle');
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        brightnessToggle.textContent = '☀️';
    } else {
        brightnessToggle.textContent = '🌙';
    }
}

// Toggle Theme
brightnessToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        brightnessToggle.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'dark');
        brightnessToggle.textContent = '🌙';
    }
});

// Sidebar Toggle
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
    if (sidebar.classList.contains('open') && 
        !sidebar.contains(e.target) && 
        e.target !== menuToggle) {
        sidebar.classList.remove('open');
    }
});

// Initialize theme on load
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    
    // Add animation to elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe all feature cards and sections
    document.querySelectorAll('.feature-card, .intro-section').forEach(el => {
        observer.observe(el);
    });
});