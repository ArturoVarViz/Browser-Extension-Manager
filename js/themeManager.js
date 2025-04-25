export class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    }

    init() {
        const savedTheme = localStorage.getItem('theme') || 
                          (this.prefersDarkScheme.matches ? 'dark' : 'light');
        
        this.applyTheme(savedTheme);
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        this.themeToggle.addEventListener('click', () => {
            const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' 
                            ? 'light' : 'dark';
            this.applyTheme(newTheme);
        });
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}