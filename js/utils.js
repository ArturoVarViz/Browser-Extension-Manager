const translations = {
    en: {
        title: 'Extensions',
        all: 'All',
        active: 'Active',
        inactive: 'Inactive',
        errorLoading: 'Error loading extensions. Please try again later.',
        remove: 'Remove',
        add: 'Add'
    },
    es: {
        title: 'Extensiones',
        all: 'Todas',
        active: 'Activas',
        inactive: 'Inactivas',
        errorLoading: 'Error al cargar las extensiones. Por favor, intenta más tarde.',
        remove: 'Eliminar',
        add: 'Agregar'
    }
};

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error al guardar en localStorage:', error);
    }
}

function getFromLocalStorage(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error('Error al leer de localStorage:', error);
        return null;
    }
}

function toggleLanguage() {
    const currentLang = document.documentElement.lang === 'en' ? 'es' : 'en';
    document.documentElement.lang = currentLang;
    updateUILanguage(currentLang);
    localStorage.setItem('language', currentLang);
}

function updateUILanguage(lang) {
    document.querySelector('h1').textContent = translations[lang].title;
    document.querySelector('[data-filter="all"]').textContent = translations[lang].all;
    document.querySelector('[data-filter="active"]').textContent = translations[lang].active;
    document.querySelector('[data-filter="inactive"]').textContent = translations[lang].inactive;
}

// Initialize language
document.getElementById('langToggle').addEventListener('click', toggleLanguage);