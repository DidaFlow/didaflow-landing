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
        // Check if we're running from file:// protocol
        if (window.location.protocol === 'file:') {
            console.log('📁 File protocol detected, using embedded translations');
            this.loadEmbeddedTranslations();
            return;
        }

        try {
            const response = await fetch(`./languages/${this.currentLanguage}.json`);
            if (!response.ok) {
                throw new Error(`Failed to load ${this.currentLanguage} translations`);
            }
            this.translations = await response.json();
            console.log(`✅ Loaded ${this.currentLanguage} translations`);
        } catch (error) {
            console.error('Error loading translations:', error);
            console.log('🔄 Falling back to embedded translations');
            this.loadEmbeddedTranslations();
        }
    }

    loadFallbackTranslations() {
        // Hardcoded Italian translations as ultimate fallback
        this.translations = {
            "meta": {
                "title": "DidaFlow - Intelligenza Artificiale Interpretabile per l'Educazione",
                "description": "DidaFlow: piattaforma di intelligenza artificiale interpretabile per università ed enti formativi. Trasforma dati educativi in conoscenza strategica con approccio machine-in-the-loop.",
                "keywords": "EdTech, formazione professionale, enti formativi, e-learning, piattaforma didattica, formatori"
            },
            "hero": {
                "title": "Intelligenza Artificiale Interpretabile per l'Educazione",
                "subtitle": "Trasforma i tuoi dati educativi in conoscenza strategica e azionabile",
                "description": "DidaFlow è una piattaforma di intelligenza artificiale interpretabile che supporta università, business school ed enti formativi nel prevedere e migliorare l'efficacia dei percorsi didattici. Con il nostro approccio machine-in-the-loop, docenti e responsabili possono anticipare il rischio di abbandono, ottimizzare la soddisfazione studentesca e aumentare l'occupabilità dei laureati."
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
                "ai": {
                    "title": "Intelligenza Artificiale Interpretabile",
                    "description": "Approccio machine-in-the-loop che mantiene l'esperto di dominio al centro delle decisioni"
                },
                "prediction": {
                    "title": "Analisi Predittiva",
                    "description": "Anticipa il rischio di abbandono e simula l'andamento dei percorsi formativi"
                },
                "optimization": {
                    "title": "Ottimizzazione Didattica",
                    "description": "Migliora la progettazione dei corsi e riduci il disallineamento tra aspettative e offerta"
                },
                "knowledge": {
                    "title": "Knowledge Base",
                    "description": "Integra ricerca pedagogica e psicologica per decisioni basate sull'evidenza"
                }
            },
            "team": {
                "title": "Il Nostro Team",
                "founder": {
                    "name": "Marco Rossi",
                    "role": "CEO & Founder"
                },
                "cto": {
                    "name": "Laura Bianchi",
                    "role": "CTO"
                },
                "researcher": {
                    "name": "Prof. Andrea Verdi",
                    "role": "Head of Research"
                }
            },
            "partners": {
                "title": "I Nostri Partner",
                "unibo": {
                    "name": "Università di Bologna",
                    "description": "Collaborazione strategica per la ricerca in AI interpretabile nell'educazione"
                }
            },
            "launch": {
                "title": "📅 Lancio Previsto: H2 2025",
                "description": "Stiamo lavorando duramente per portarti la migliore esperienza possibile. Il lancio è previsto per la seconda metà del 2025. Iscriviti per ricevere aggiornamenti esclusivi!"
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
    }

    loadEmbeddedTranslations() {
        const allTranslations = {
            'it': {
                "meta": {
                    "title": "DidaFlow - Intelligenza Artificiale Interpretabile per l'Educazione",
                    "description": "DidaFlow: piattaforma di intelligenza artificiale interpretabile per università ed enti formativi. Trasforma dati educativi in conoscenza strategica con approccio machine-in-the-loop.",
                    "keywords": "EdTech, formazione professionale, enti formativi, e-learning, piattaforma didattica, formatori"
                },
                "hero": {
                    "title": "Intelligenza Artificiale Interpretabile per l'Educazione",
                    "subtitle": "Trasforma i tuoi dati educativi in conoscenza strategica e azionabile",
                    "description": "DidaFlow è una piattaforma di intelligenza artificiale interpretabile che supporta università, business school ed enti formativi nel prevedere e migliorare l'efficacia dei percorsi didattici. Con il nostro approccio machine-in-the-loop, docenti e responsabili possono anticipare il rischio di abbandono, ottimizzare la soddisfazione studentesca e aumentare l'occupabilità dei laureati."
                },
                "signup": {
                    "title": "🚀 Accesso Anticipato",
                    "subtitle": "Iscriviti alla lista d'attesa e sii tra i primi a scoprire DidaFlow",
                    "placeholder": "Inserisci la tua email",
                    "button": "Iscriviti Ora",
                    "success": "✅ Perfetto! Ti abbiamo aggiunto alla lista d'attesa. Ti contatteremo presto!",
                    "error": "Per favore inserisci un indirizzo email valido."
                },
                "team": {
                    "title": "Il Nostro Team",
                    "founder": { "name": "Marco Rossi", "role": "CEO & Founder" },
                    "cto": { "name": "Laura Bianchi", "role": "CTO" },
                    "researcher": { "name": "Prof. Andrea Verdi", "role": "Head of Research" }
                },
                "partners": {
                    "title": "I Nostri Partner",
                    "unibo": {
                        "name": "Università di Bologna",
                        "description": "Collaborazione strategica per la ricerca in AI interpretabile nell'educazione"
                    }
                },
                "launch": {
                    "title": "📅 Lancio Previsto: H2 2025",
                    "description": "Stiamo lavorando duramente per portarti la migliore esperienza possibile. Il lancio è previsto per la seconda metà del 2025. Iscriviti per ricevere aggiornamenti esclusivi!"
                },
                "social": { "linkedin": "LinkedIn", "twitter": "Twitter", "github": "GitHub" }
            },
            'en': {
                "meta": {
                    "title": "DidaFlow - Interpretable Artificial Intelligence for Education",
                    "description": "DidaFlow: interpretable artificial intelligence platform for universities and educational institutions. Transform educational data into strategic knowledge with a machine-in-the-loop approach.",
                    "keywords": "EdTech, professional training, educational institutions, e-learning, learning platform, educators"
                },
                "hero": {
                    "title": "Interpretable Artificial Intelligence for Education",
                    "subtitle": "Transform your educational data into strategic and actionable knowledge",
                    "description": "DidaFlow is an interpretable artificial intelligence platform that supports universities, business schools, and educational institutions in predicting and improving the effectiveness of educational pathways. With our machine-in-the-loop approach, faculty and administrators can anticipate dropout risk, optimize student satisfaction, and increase graduate employability."
                },
                "signup": {
                    "title": "🚀 Early Access",
                    "subtitle": "Join the waitlist and be among the first to discover DidaFlow",
                    "placeholder": "Enter your email",
                    "button": "Sign Up Now",
                    "success": "✅ Perfect! We've added you to the waitlist. We'll contact you soon!",
                    "error": "Please enter a valid email address."
                },
                "team": {
                    "title": "Our Team",
                    "founder": { "name": "Marco Rossi", "role": "CEO & Founder" },
                    "cto": { "name": "Laura Bianchi", "role": "CTO" },
                    "researcher": { "name": "Prof. Andrea Verdi", "role": "Head of Research" }
                },
                "partners": {
                    "title": "Our Partners",
                    "unibo": {
                        "name": "University of Bologna",
                        "description": "Strategic collaboration for research in interpretable AI in education"
                    }
                },
                "launch": {
                    "title": "📅 Expected Launch: H2 2025",
                    "description": "We're working hard to bring you the best possible experience. The launch is scheduled for the second half of 2025. Sign up to receive exclusive updates!"
                },
                "social": { "linkedin": "LinkedIn", "twitter": "Twitter", "github": "GitHub" }
            },
            'es': {
                "meta": {
                    "title": "DidaFlow - Inteligencia Artificial Interpretable para la Educación",
                    "description": "DidaFlow: plataforma de inteligencia artificial interpretable para universidades y entidades formativas. Transforma datos educativos en conocimiento estratégico con enfoque machine-in-the-loop.",
                    "keywords": "EdTech, formación profesional, entidades formativas, e-learning, plataforma didáctica, formadores"
                },
                "hero": {
                    "title": "Inteligencia Artificial Interpretable para la Educación",
                    "subtitle": "Transforma tus datos educativos en conocimiento estratégico y accionable",
                    "description": "DidaFlow es una plataforma de inteligencia artificial interpretable que apoya a universidades, escuelas de negocio y entidades formativas para predecir y mejorar la eficacia de los itinerarios educativos. Con nuestro enfoque machine-in-the-loop, profesores y responsables pueden anticipar el riesgo de abandono, optimizar la satisfacción estudiantil y aumentar la empleabilidad de los graduados."
                },
                "signup": {
                    "title": "🚀 Acceso Anticipado",
                    "subtitle": "Únete a la lista de espera y sé de los primeros en descubrir DidaFlow",
                    "placeholder": "Introduce tu email",
                    "button": "Regístrate Ahora",
                    "success": "✅ ¡Perfecto! Te hemos añadido a la lista de espera. ¡Te contactaremos pronto!",
                    "error": "Por favor introduce una dirección de email válida."
                },
                "team": {
                    "title": "Nuestro Equipo",
                    "founder": { "name": "Marco Rossi", "role": "CEO & Fundador" },
                    "cto": { "name": "Laura Bianchi", "role": "CTO" },
                    "researcher": { "name": "Prof. Andrea Verdi", "role": "Jefe de Investigación" }
                },
                "partners": {
                    "title": "Nuestros Socios",
                    "unibo": {
                        "name": "Universidad de Bolonia",
                        "description": "Colaboración estratégica para la investigación en IA interpretable en educación"
                    }
                },
                "launch": {
                    "title": "📅 Lanzamiento Previsto: H2 2025",
                    "description": "Estamos trabajando duro para ofrecerte la mejor experiencia posible. El lanzamiento está previsto para la segunda mitad de 2025. ¡Regístrate para recibir actualizaciones exclusivas!"
                },
                "social": { "linkedin": "LinkedIn", "twitter": "Twitter", "github": "GitHub" }
            },
            'fr': {
                "meta": {
                    "title": "DidaFlow - Intelligence Artificielle Interprétable pour l'Éducation",
                    "description": "DidaFlow : plateforme d'intelligence artificielle interprétable pour universités et organismes de formation. Transforme les données éducatives en connaissance stratégique avec une approche machine-in-the-loop.",
                    "keywords": "EdTech, formation professionnelle, organismes de formation, e-learning, plateforme didactique, formateurs"
                },
                "hero": {
                    "title": "Intelligence Artificielle Interprétable pour l'Éducation",
                    "subtitle": "Transformez vos données éducatives en connaissance stratégique et actionnable",
                    "description": "DidaFlow est une plateforme d'intelligence artificielle interprétable qui accompagne universités, écoles de commerce et organismes de formation pour prévoir et améliorer l'efficacité des parcours éducatifs. Avec notre approche machine-in-the-loop, enseignants et responsables peuvent anticiper le risque d'abandon, optimiser la satisfaction étudiante et augmenter l'employabilité des diplômés."
                },
                "signup": {
                    "title": "🚀 Accès Anticipé",
                    "subtitle": "Rejoignez la liste d'attente et soyez parmi les premiers à découvrir DidaFlow",
                    "placeholder": "Entrez votre email",
                    "button": "S'inscrire Maintenant",
                    "success": "✅ Parfait ! Nous vous avons ajouté à la liste d'attente. Nous vous contacterons bientôt !",
                    "error": "Veuillez entrer une adresse email valide."
                },
                "team": {
                    "title": "Notre Équipe",
                    "founder": { "name": "Marco Rossi", "role": "PDG & Fondateur" },
                    "cto": { "name": "Laura Bianchi", "role": "CTO" },
                    "researcher": { "name": "Prof. Andrea Verdi", "role": "Responsable Recherche" }
                },
                "partners": {
                    "title": "Nos Partenaires",
                    "unibo": {
                        "name": "Université de Bologne",
                        "description": "Collaboration stratégique pour la recherche en IA interprétable dans l'éducation"
                    }
                },
                "launch": {
                    "title": "📅 Lancement Prévu : H2 2025",
                    "description": "Nous travaillons dur pour vous apporter la meilleure expérience possible. Le lancement est prévu pour la seconde moitié de 2025. Inscrivez-vous pour recevoir des mises à jour exclusives !"
                },
                "social": { "linkedin": "LinkedIn", "twitter": "Twitter", "github": "GitHub" }
            }
        };
        
        this.translations = allTranslations[this.currentLanguage] || allTranslations['it'];
        console.log(`✅ Loaded embedded ${this.currentLanguage} translations`);
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