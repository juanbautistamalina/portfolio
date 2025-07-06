/* === MÓDULO DE ANIMACIONES === */

class Animations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.init();
    }
    
    init() {
        this.setupScrollAnimations();
        this.setupTypeWriter();
    }
    
    setupScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, this.observerOptions);
        
        document.addEventListener('DOMContentLoaded', () => {
            const animatedElements = document.querySelectorAll('.skill-card, .project-card, .certificate-card');
            
            animatedElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });
        });
    }
    
    setupTypeWriter() {
        document.addEventListener('DOMContentLoaded', () => {
            const heroTitle = document.querySelector('.hero-title');
            if (heroTitle) {
                const originalText = heroTitle.textContent;
                this.typeWriter(heroTitle, originalText, 150);
            }
        });
    }
    
    typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        const type = () => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        };
        
        type();
    }
    
    animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        const updateCounter = () => {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + '+';
            }
        };
        
        updateCounter();
    }
}

// Exportar para uso global
window.Animations = Animations; 