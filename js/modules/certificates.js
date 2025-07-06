/* === MÓDULO DE CERTIFICADOS === */

class Certificates {
    constructor() {
        this.popupBg = document.getElementById('certificatePopupBg');
        this.popup = document.getElementById('certificatePopup');
        this.popupImg = document.getElementById('certificatePopupImg');
        this.closeBtn = document.getElementById('certificatePopupClose');
        
        this.init();
    }
    
    init() {
        this.setupCertificateCards();
        this.setupPopupClose();
    }
    
    setupCertificateCards() {
        const certificateCards = document.querySelectorAll('.certificate-card');
        
        certificateCards.forEach(card => {
            card.addEventListener('click', () => {
                const imgSrc = card.getAttribute('data-img');
                this.openPopup(imgSrc);
            });
        });
    }
    
    setupPopupClose() {
        // Cerrar con el botón X
        this.closeBtn.addEventListener('click', () => {
            this.closePopup();
        });
        
        // Cerrar haciendo clic en el fondo
        this.popupBg.addEventListener('click', (e) => {
            if (e.target === this.popupBg) {
                this.closePopup();
            }
        });
        
        // Cerrar con ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.popupBg.classList.contains('active')) {
                this.closePopup();
            }
        });
    }
    
    openPopup(imgSrc) {
        this.popupImg.src = imgSrc;
        this.popupBg.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    closePopup() {
        this.popupBg.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Exportar para uso global
window.Certificates = Certificates; 