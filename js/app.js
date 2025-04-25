import { ThemeManager } from './themeManager.js';
import { LanguageManager } from './languageManager.js';
import { ExtensionManager } from './extensionManager.js';

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', () => {
    // Crear instancias de los gestores
    const themeManager = new ThemeManager();
    const languageManager = new LanguageManager();
    const extensionManager = new ExtensionManager();

    // Inicializar componentes
    themeManager.init();
    languageManager.init();
    extensionManager.loadExtensions();
});