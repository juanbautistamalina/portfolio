/* === MÓDULO DE FORMULARIO === */

class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }
    
    init() {
        if (this.form) {
            this.setupFormSubmission();
        }
    }
    
    setupFormSubmission() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }
    
    handleSubmit() {
        const formData = new FormData(this.form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        if (this.validateForm(data)) {
            this.submitForm(data);
        }
    }
    
    validateForm(data) {
        // Validar campos requeridos
        if (!data.name || !data.email || !data.subject || !data.message) {
            this.showNotification('Por favor, completa todos los campos', 'error');
            return false;
        }
        
        // Validar email
        if (!this.isValidEmail(data.email)) {
            this.showNotification('Por favor, ingresa un email válido', 'error');
            return false;
        }
        
        return true;
    }
    
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    submitForm(data) {
        // Simular envío (aquí puedes integrar con un servicio real)
        this.showNotification('Mensaje enviado correctamente. ¡Te responderé pronto!', 'success');
        this.form.reset();
    }
    
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Estilos de la notificación
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${this.getNotificationColor(type)};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 400px;
        `;
        
        document.body.appendChild(notification);
        
        // Animar entrada
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Configurar cierre
        this.setupNotificationClose(notification);
    }
    
    getNotificationColor(type) {
        const colors = {
            success: '#10b981',
            error: '#ef4444',
            info: '#6366f1'
        };
        return colors[type] || colors.info;
    }
    
    setupNotificationClose(notification) {
        const closeBtn = notification.querySelector('.notification-close');
        
        closeBtn.addEventListener('click', () => {
            this.closeNotification(notification);
        });
        
        // Auto-cerrar después de 5 segundos
        setTimeout(() => {
            if (document.body.contains(notification)) {
                this.closeNotification(notification);
            }
        }, 5000);
    }
    
    closeNotification(notification) {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }
}

// Exportar para uso global
window.ContactForm = ContactForm; 