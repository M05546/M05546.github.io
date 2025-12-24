// Mark that JavaScript is running - this helps CSS know JS is available
document.documentElement.classList.add('js-enabled');

// Theme toggle functionality
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (!systemPrefersDark) {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

// Run immediately to prevent flash
initTheme();

// Theme toggle button handler
function setupThemeToggle() {
    const toggleBtn = document.querySelector('.theme-toggle');
    if (!toggleBtn) return;
    
    toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        if (newTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
        } else {
            document.documentElement.setAttribute('data-theme', newTheme);
        }
        
        localStorage.setItem('theme', newTheme);
    });
}

// Scroll animations with multiple fallbacks
function setupScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // If no elements found, exit
    if (fadeElements.length === 0) return;
    
    // If IntersectionObserver is not supported, show everything immediately
    if (!('IntersectionObserver' in window)) {
        fadeElements.forEach(el => el.classList.add('visible'));
        return;
    }
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));
    
    // Safety fallback: show all elements after 2 seconds regardless
    setTimeout(() => {
        fadeElements.forEach(el => {
            if (!el.classList.contains('visible')) {
                el.classList.add('visible');
            }
        });
    }, 2000);
}

// Smooth scroll for nav links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Nav background on scroll
function setupNavScroll() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'var(--nav-bg-scroll)';
        } else {
            nav.style.background = 'var(--nav-bg)';
        }
    });
}

// Initialize everything
function init() {
    setupThemeToggle();
    setupScrollAnimations();
    setupSmoothScroll();
    setupNavScroll();
}

// Run init when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    // DOM already loaded, run now
    init();
}
