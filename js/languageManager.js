export class LanguageManager {
    constructor() {
        this.translations = {
            en: {
                title: 'Extensions',
                all: 'All',
                active: 'Active',
                inactive: 'Inactive',
                errorLoading: 'Error loading extensions. Please try again later.'
            },
            es: {
                title: 'Extensiones',
                all: 'Todas',
                active: 'Activas',
                inactive: 'Inactivas',
                errorLoading: 'Error al cargar las extensiones. Por favor, intenta más tarde.'
            }
        };
        this.langToggle = document.getElementById('langToggle');
    }

    init() {
        const savedLang = localStorage.getItem('language') || 'en';
        this.applyLanguage(savedLang);
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        this.langToggle.addEventListener('click', () => {
            const newLang = document.documentElement.lang === 'en' ? 'es' : 'en';
            this.applyLanguage(newLang);
        });
    }

    applyLanguage(lang) {
        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);
        this.updateUIText(lang);
    }

    updateUIText(lang) {
        document.querySelector('h1').textContent = this.translations[lang].title;
        document.querySelector('[data-filter="all"]').textContent = this.translations[lang].all;
        document.querySelector('[data-filter="active"]').textContent = this.translations[lang].active;
        document.querySelector('[data-filter="inactive"]').textContent = this.translations[lang].inactive;
    }
}