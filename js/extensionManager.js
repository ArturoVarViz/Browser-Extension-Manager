export class ExtensionManager {
    constructor() {
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;
                this.filterExtensions(filter);
            });
        });
    }

    async loadExtensions() {
        try {
            const response = await fetch('./data/data.json');
            const data = await response.json();
            
            if (!data || !data.extensions) {
                throw new Error('Formato de datos inválido');
            }

            const extensionList = document.getElementById('extensionList');
            extensionList.innerHTML = '';
            
            data.extensions.forEach(extension => {
                this.createExtensionCard(extension, extensionList);
            });
        } catch (error) {
            console.error('Error cargando las extensiones:', error);
            document.getElementById('extensionList').innerHTML = 
                '<p>Error al cargar las extensiones. Por favor, intenta más tarde.</p>';
        }
    }

    createExtensionCard(extension, container) {
        const card = document.createElement('div');
        card.className = 'extension-card';
        
        card.innerHTML = `
            <img src="${extension.logo}" alt="${extension.name}" class="extension-icon">
            <div class="extension-info">
                <h3>${extension.name}</h3>
                <p>${extension.description}</p>
            </div>
            <div class="extension-actions">
                <label class="toggle" for="${extension.name.replace(/\s+/g, '')}">
                    <input type="checkbox" 
                           class="toggle__input" 
                           id="${extension.name.replace(/\s+/g, '')}"
                           ${extension.isActive ? 'checked' : ''}>
                    <span class="toggle-track">
                        <span class="toggle-indicator">
                            <span class="checkMark">
                                <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
                                    <path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
                                </svg>
                            </span>
                        </span>
                    </span>
                </label>
            </div>
        `;

        const checkbox = card.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', (e) => this.toggleExtension(extension.name, e.target.checked));
        
        container.appendChild(card);
    }

    toggleExtension(name, isChecked) {
        const extensionCards = document.querySelectorAll('.extension-card');
        extensionCards.forEach(card => {
            if (card.querySelector('h3').textContent === name) {
                const checkbox = card.querySelector('input[type="checkbox"]');
                checkbox.checked = isChecked;
                card.classList.toggle('active', isChecked);
                
                const currentFilter = document.querySelector('.filter-btn.active').dataset.filter;
                this.filterExtensions(currentFilter);
            }
        });
    }

    filterExtensions(filter) {
        const cards = document.querySelectorAll('.extension-card');
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });

        cards.forEach(card => {
            const isActive = card.querySelector('input[type="checkbox"]').checked;
            if (filter === 'all') {
                card.style.display = 'flex';
            } else {
                card.style.display = (filter === 'active') === isActive ? 'flex' : 'none';
            }
        });
    }
}