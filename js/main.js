/* === ARCHIVO PRINCIPAL DE JAVASCRIPT === */

// Importar módulos
import './modules/navigation.js';
import './modules/animations.js';
import './modules/form.js';
import './modules/certificates.js';

// Clase principal de la aplicación
class PortfolioApp {
    constructor() {
        this.modules = {};
        this.init();
    }
    
    init() {
        // Esperar a que el DOM esté listo
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeModules();
            });
        } else {
            this.initializeModules();
        }
    }
    
    initializeModules() {
        try {
            // Inicializar módulos
            this.modules.navigation = new Navigation();
            this.modules.animations = new Animations();
            this.modules.contactForm = new ContactForm();
            this.modules.certificates = new Certificates();
            
            console.log('Portfolio inicializado correctamente');
        } catch (error) {
            console.error('Error al inicializar el portfolio:', error);
        }
    }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});

// Exportar para uso global
window.PortfolioApp = PortfolioApp; 