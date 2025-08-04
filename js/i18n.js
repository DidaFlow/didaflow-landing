/**
 * DidaFlow Internationalization System
 * Supports: Italian (it), English (en), Spanish (es), French (fr)
 */

class I18n {
    constructor() {
        this.currentLanguage = 'it'; // Default language
        this.translations = {};
        this.supportedLanguages = {
            'it': 'Italiano',
            'en': 'English', 
            'es': 'Español',
            'fr': 'Français'
        };
        
        this.init();
    }

    async init() {
        // Detect user language preference
        this.detectLanguage();
        
        // Load translations
        await this.loadTranslations();
        
        // Apply translations
        this.applyTranslations();
        
        // Setup language selector
        this.setupLanguageSelector();
    }

    detectLanguage() {
        // 1. Check localStorage
        const savedLang = localStorage.getItem('didaflow-language');
        if (savedLang && this.supportedLanguages[savedLang]) {
            this.currentLanguage = savedLang;
            return;
        }

        // 2. Check browser language
        const browserLang = navigator.language.split('-')[0];
        if (this.supportedLanguages[browserLang]) {
            this.currentLanguage = browserLang;
            return;
        }

        // 3. Default to Italian
        this.currentLanguage = 'it';
    }

    async loadTranslations() {
        try {
            const response = await fetch(`./languages/${this.currentLanguage}.json`);
            if (!response.ok) {
                throw new Error(`Failed to load ${this.currentLanguage} translations`);
            }
            this.translations = await response.json();
            console.log(`✅ Loaded ${this.currentLanguage} translations`);
        } catch (error) {
            console.error('Error loading translations:', error);
            // Fallback to Italian if current language fails
            if (this.currentLanguage !== 'it') {
                this.currentLanguage = 'it';
                try {
                    const response = await fetch('./languages/it.json');
                    this.translations = await response.json();
                    console.log('✅ Loaded fallback Italian translations');
                } catch (fallbackError) {
                    console.error('Failed to load fallback translations:', fallbackError);
                    // Use hardcoded fallback
                    this.loadFallbackTranslations();
                }
            } else {
                // Use hardcoded fallback
                this.loadFallbackTranslations();
            }
        }
    }

    loadFallbackTranslations() {
        // Hardcoded Italian translations as ultimate fallback
        this.translations = {
            "meta": {
                "title": "DidaFlow - Rivoluzionando l'Educazione Universitaria",
                "description": "DidaFlow sta arrivando! La nuova piattaforma EdTech che trasformerà il modo di fare formazione per enti formativi di ogni tipo.",
                "keywords": "EdTech, formazione professionale, enti formativi, e-learning, piattaforma didattica, formatori"
            },
            "hero": {
                "title": "Rivoluzionando l'Educazione",
                "subtitle": "La piattaforma EdTech che trasforma il modo di fare formazione",
                "description": "DidaFlow è una piattaforma innovativa dedicata agli enti formativi di ogni tipo. Offriamo strumenti avanzati per la creazione di percorsi formativi efficaci, la collaborazione tra formatori e l'analisi dei risultati di apprendimento."
            },
            "signup": {
                "title": "🚀 Accesso Anticipato",
                "subtitle": "Iscriviti alla lista d'attesa e sii tra i primi a scoprire DidaFlow",
                "placeholder": "Inserisci la tua email",
                "button": "Iscriviti Ora",
                "success": "✅ Perfetto! Ti abbiamo aggiunto alla lista d'attesa. Ti contatteremo presto!",
                "error": "Per favore inserisci un indirizzo email valido."
            },
            "features": {
                "design": {
                    "title": "Design Intuitivo",
                    "description": "Interface moderna e user-friendly progettata per formatori e studenti"
                },
                "analytics": {
                    "title": "Analytics Avanzati",
                    "description": "Monitoraggio dettagliato dei progressi e dell'engagement degli studenti"
                },
                "collaboration": {
                    "title": "Collaborazione",
                    "description": "Strumenti per facilitare la comunicazione e il lavoro di gruppo"
                },
                "performance": {
                    "title": "Performance",
                    "description": "Velocità e affidabilità per un'esperienza di apprendimento fluida"
                }
            },
            "launch": {
                "title": "📅 Lancio Previsto: Q2 2025",
                "description": "Stiamo lavorando duramente per portarti la migliore esperienza possibile. Il lancio è previsto per il secondo trimestre del 2025. Iscriviti per ricevere aggiornamenti esclusivi!"
            },
            "social": {
                "linkedin": "LinkedIn",
                "twitter": "Twitter",
                "github": "GitHub"
            }
        };
        console.log('⚠️ Using hardcoded fallback translations');
    }

    t(key) {
        const keys = key.split('.');
        let value = this.translations;
        
        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                console.warn(`Translation missing for key: ${key}`);
                return key; // Return key if translation not found
            }
        }
        
        return value;
    }

    applyTranslations() {
        // Update meta tags
        document.title = this.t('meta.title');
        document.querySelector('meta[name="description"]').content = this.t('meta.description');
        document.querySelector('meta[name="keywords"]').content = this.t('meta.keywords');
        
        // Update HTML lang attribute
        document.documentElement.lang = this.currentLanguage;

        // Update content elements
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            
            if (element.tagName === 'INPUT' && element.type === 'email') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });
    }

    async changeLanguage(newLang) {
        if (!this.supportedLanguages[newLang]) {
            console.error(`Unsupported language: ${newLang}`);
            return;
        }

        this.currentLanguage = newLang;
        localStorage.setItem('didaflow-language', newLang);
        
        await this.loadTranslations();
        this.applyTranslations();
        
        // Update language selector
        this.updateLanguageSelector();
    }

    setupLanguageSelector() {
        const languageSelector = document.getElementById('languageSelector');
        if (!languageSelector) return;

        // Clear existing options
        languageSelector.innerHTML = '';

        // Add language options
        Object.entries(this.supportedLanguages).forEach(([code, name]) => {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = name;
            option.selected = code === this.currentLanguage;
            languageSelector.appendChild(option);
        });

        // Add change event listener
        languageSelector.addEventListener('change', (e) => {
            this.changeLanguage(e.target.value);
        });
    }

    updateLanguageSelector() {
        const languageSelector = document.getElementById('languageSelector');
        if (languageSelector) {
            languageSelector.value = this.currentLanguage;
        }
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }

    getSupportedLanguages() {
        return this.supportedLanguages;
    }
}

// Initialize i18n when DOM is loaded
let i18n;

function initializeI18n() {
    try {
        console.log('🌐 Initializing i18n system...');
        i18n = new I18n();
        // Make i18n globally available
        window.i18n = i18n;
    } catch (error) {
        console.error('Failed to initialize i18n:', error);
    }
}

// Multiple initialization methods for reliability
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeI18n);
} else {
    // DOM already loaded
    initializeI18n();
}

// Fallback initialization
window.addEventListener('load', () => {
    if (!window.i18n) {
        console.log('🔄 Fallback i18n initialization...');
        initializeI18n();
    }
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = I18n;
}