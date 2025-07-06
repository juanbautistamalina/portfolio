/* === MÓDULO DE NAVEGACIÓN === */

class Navigation {
    constructor() {
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.header = document.querySelector('.header');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        this.init();
    }
    
    init() {
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.setupScrollEffects();
        this.setupNavLinks();
    }
    
    setupMobileMenu() {
        this.hamburger.addEventListener('click', () => {
            this.hamburger.classList.toggle('active');
            this.navMenu.classList.toggle('active');
        });
    }
    
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    setupScrollEffects() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                this.header.style.background = 'rgba(33, 43, 47, 0.98)';
                this.header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
            } else {
                this.header.style.background = 'rgba(33, 43, 47, 0.95)';
                this.header.style.boxShadow = '0 2px 12px 0 #ff5a5f22';
            }
        });
    }
    
    setupNavLinks() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.hamburger.classList.remove('active');
                this.navMenu.classList.remove('active');
            });
        });
    }
}

// Exportar para uso global
window.Navigation = Navigation; 