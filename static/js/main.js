// Back to Top Button Functionality
// Theme toggle (light/dark)
(function() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');

    const applyTheme = (theme) => {
        document.body.classList.toggle('light-theme', theme === 'light');
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = theme === 'light' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
        }
        themeToggle.setAttribute('aria-label', theme === 'light' ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro');
    };

    applyTheme(initialTheme);

    themeToggle.addEventListener('click', () => {
        const newTheme = document.body.classList.contains('light-theme') ? 'dark' : 'light';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
})();

// Scroll Progress Bar & Enhanced Navigation
(function() {
    const progressBar = document.getElementById('progressBar');
    const navbar = document.querySelector('.navbar');
    const backToTopButton = document.getElementById('backToTop');
    
    function updateScrollProgress() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = (window.scrollY / documentHeight) * 100;
        
        // Update progress bar
        if (progressBar) {
            progressBar.style.width = Math.min(scrolled, 100) + '%';
        }
        
        // Update navbar background on scroll
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        }
        
        // Show/hide back to top button
        if (backToTopButton) {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        }
    }
    
    // Smooth scroll to top when button is clicked
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial call
})();

// Active Navbar Link on Scroll
(function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function highlightNavLink() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
})();

// Smooth scroll for anchor links
(function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 100; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                        bsCollapse.hide();
                    }
                }
            }
        });
    });
})();



// Hero title animations - Enhanced reliability
(function() {
    let animationStarted = false;
    
    function startHeroAnimations() {
        if (animationStarted) return; // Prevent multiple starts
        animationStarted = true;
        
        const heroTitle = document.querySelector('.hero-title');
        const lastname = document.querySelector('.lastname');
        
        console.log('Starting hero animations...');
        
        // Set initial states
        if (heroTitle) {
            heroTitle.style.opacity = '0';
            heroTitle.style.transform = 'translateY(40px) scale(0.95)';
            heroTitle.style.filter = 'blur(4px)';
            heroTitle.style.transition = 'none'; // Disable transitions during animation setup
        }
        
        if (lastname) {
            lastname.style.opacity = '0';
            lastname.style.transform = 'translateX(-30px) scale(0.85)';
            lastname.style.filter = 'blur(3px)';
            lastname.style.transition = 'none'; // Disable transitions during animation setup
        }
        
        // Force reflow and start animations
        requestAnimationFrame(() => {
            if (heroTitle) {
                heroTitle.style.animation = 'heroTitleAnimation 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards';
                console.log('Hero title animation applied');
            }
            
            if (lastname) {
                lastname.style.animation = 'lastnameAnimation 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards';
                console.log('Lastname animation applied');
            }
        });
    }
    
    // Try multiple entry points for maximum reliability
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startHeroAnimations);
    } else {
        setTimeout(startHeroAnimations, 100);
    }
    
    // Backup triggers
    window.addEventListener('load', () => setTimeout(startHeroAnimations, 200));
})();

// Enhanced Intersection Observer for animations
(function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // For sections with section-fade class
                if (element.classList.contains('section-fade')) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
                // For cards
                else if (element.classList.contains('card')) {
                    // Get the animation delay from CSS
                    const delay = Array.from(element.parentNode.children).indexOf(element) * 0.1;
                    setTimeout(() => {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }, delay * 1000);
                }
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Initialize elements immediately and observe them
    function initializeAnimations() {
        // Initialize sections
        document.querySelectorAll('.section-fade').forEach(section => {
            if (section.style.opacity !== '1') { // Only if not already animated
                section.style.opacity = '0';
                section.style.transform = 'translateY(30px)';
                section.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                observer.observe(section);
            }
        });
        
        // Initialize cards with staggered delays
        document.querySelectorAll('.card').forEach((card, index) => {
            if (card.style.opacity !== '1') { // Only if not already animated
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px) scale(0.95)';
                card.style.transition = `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
                observer.observe(card);
            }
        });
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeAnimations);
    } else {
        initializeAnimations();
    }
})();

// Add loading state and handle direct URL navigation
document.addEventListener('DOMContentLoaded', function() {
    // Page is fully loaded
    document.body.classList.add('loaded');
    
    // Check if page loaded with hash (direct navigation)
    if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }
    
    // Trigger animations for elements already in viewport
    setTimeout(() => {
        document.querySelectorAll('.section-fade, .card').forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }, 500);
});
