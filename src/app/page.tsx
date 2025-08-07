'use client';

import { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import emailjs from '@emailjs/browser';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

// Translation data
const translations = {
  'it': {
    meta: {
      title: "DidaFlow - Intelligenza Artificiale Interpretabile per l'Educazione",
      description: "DidaFlow: piattaforma di intelligenza artificiale interpretabile per università ed enti formativi. Trasforma dati educativi in conoscenza strategica con approccio machine-in-the-loop.",
      keywords: "EdTech, formazione professionale, enti formativi, e-learning, piattaforma didattica, formatori"
    },
    hero: {
      title: "Intelligenza Artificiale Interpretabile per l'Educazione",
      subtitle: "Trasforma i tuoi dati educativi in conoscenza strategica e azionabile",
      description: "DidaFlow è una piattaforma di intelligenza artificiale interpretabile che supporta università, business school ed enti formativi nel prevedere e migliorare l'efficacia dei percorsi didattici. Con il nostro approccio machine-in-the-loop, docenti e responsabili possono anticipare il rischio di abbandono, ottimizzare la soddisfazione studentesca e aumentare l'occupabilità dei laureati."
    },
    signup: {
      title: "🚀 Accesso Anticipato",
      subtitle: "Iscriviti alla lista d'attesa e sii tra i primi a scoprire DidaFlow",
      placeholder: "Inserisci la tua email",
      button: "Iscriviti Ora",
      success: "✅ Perfetto! Ti abbiamo aggiunto alla lista d'attesa. Ti contatteremo presto!",
      error: "Per favore inserisci un indirizzo email valido."
    },
    team: {
      title: "Il Nostro Team",
      founder: { name: "Marco Rossi", role: "CEO & Founder" },
      cto: { name: "Laura Bianchi", role: "CTO" },
      researcher: { name: "Prof. Andrea Verdi", role: "Head of Research" }
    },
    partners: {
      title: "I Nostri Partner",
      unibo: {
        name: "Università di Bologna",
        description: "Collaborazione strategica per la ricerca in AI interpretabile nell'educazione"
      }
    },
    launch: {
      title: "📅 Lancio Previsto: H2 2025",
      description: "Stiamo lavorando duramente per portarti la migliore esperienza possibile. Il lancio è previsto per la seconda metà del 2025. Iscriviti per ricevere aggiornamenti esclusivi!"
    }
  },
  'en': {
    meta: {
      title: "DidaFlow - Interpretable Artificial Intelligence for Education",
      description: "DidaFlow: interpretable artificial intelligence platform for universities and educational institutions. Transform educational data into strategic knowledge with a machine-in-the-loop approach.",
      keywords: "EdTech, professional training, educational institutions, e-learning, learning platform, educators"
    },
    hero: {
      title: "Interpretable Artificial Intelligence for Education",
      subtitle: "Transform your educational data into strategic and actionable knowledge",
      description: "DidaFlow is an interpretable artificial intelligence platform that supports universities, business schools, and educational institutions in predicting and improving the effectiveness of educational pathways. With our machine-in-the-loop approach, faculty and administrators can anticipate dropout risk, optimize student satisfaction, and increase graduate employability."
    },
    signup: {
      title: "🚀 Early Access",
      subtitle: "Join the waitlist and be among the first to discover DidaFlow",
      placeholder: "Enter your email",
      button: "Sign Up Now",
      success: "✅ Perfect! We've added you to the waitlist. We'll contact you soon!",
      error: "Please enter a valid email address."
    },
    team: {
      title: "Our Team",
      founder: { name: "Marco Rossi", role: "CEO & Founder" },
      cto: { name: "Laura Bianchi", role: "CTO" },
      researcher: { name: "Prof. Andrea Verdi", role: "Head of Research" }
    },
    partners: {
      title: "Our Partners",
      unibo: {
        name: "University of Bologna",
        description: "Strategic collaboration for research in interpretable AI in education"
      }
    },
    launch: {
      title: "📅 Expected Launch: H2 2025",
      description: "We're working hard to bring you the best possible experience. The launch is scheduled for the second half of 2025. Sign up to receive exclusive updates!"
    }
  },
  'es': {
    meta: {
      title: "DidaFlow - Inteligencia Artificial Interpretable para la Educación",
      description: "DidaFlow: plataforma de inteligencia artificial interpretable para universidades y entidades formativas. Transforma datos educativos en conocimiento estratégico con enfoque machine-in-the-loop.",
      keywords: "EdTech, formación profesional, entidades formativas, e-learning, plataforma didáctica, formadores"
    },
    hero: {
      title: "Inteligencia Artificial Interpretable para la Educación",
      subtitle: "Transforma tus datos educativos en conocimiento estratégico y accionable",
      description: "DidaFlow es una plataforma de inteligencia artificial interpretable que apoya a universidades, escuelas de negocio y entidades formativas para predecir y mejorar la eficacia de los itinerarios educativos. Con nuestro enfoque machine-in-the-loop, profesores y responsables pueden anticipar el riesgo de abandono, optimizar la satisfacción estudiantil y aumentar la empleabilidad de los graduados."
    },
    signup: {
      title: "🚀 Acceso Anticipado",
      subtitle: "Únete a la lista de espera y sé de los primeros en descubrir DidaFlow",
      placeholder: "Introduce tu email",
      button: "Regístrate Ahora",
      success: "✅ ¡Perfecto! Te hemos añadido a la lista de espera. ¡Te contactaremos pronto!",
      error: "Por favor introduce una dirección de email válida."
    },
    team: {
      title: "Nuestro Equipo",
      founder: { name: "Marco Rossi", role: "CEO & Fundador" },
      cto: { name: "Laura Bianchi", role: "CTO" },
      researcher: { name: "Prof. Andrea Verdi", role: "Jefe de Investigación" }
    },
    partners: {
      title: "Nuestros Socios",
      unibo: {
        name: "Universidad de Bolonia",
        description: "Colaboración estratégica para la investigación en IA interpretable en educación"
      }
    },
    launch: {
      title: "📅 Lanzamiento Previsto: H2 2025",
      description: "Estamos trabajando duro para ofrecerte la mejor experiencia posible. El lanzamiento está previsto para la segunda mitad de 2025. ¡Regístrate para recibir actualizaciones exclusivas!"
    }
  },
  'fr': {
    meta: {
      title: "DidaFlow - Intelligence Artificielle Interprétable pour l'Éducation",
      description: "DidaFlow : plateforme d'intelligence artificielle interprétable pour universités et organismes de formation. Transforme les données éducatives en connaissance stratégique avec une approche machine-in-the-loop.",
      keywords: "EdTech, formation professionnelle, organismes de formation, e-learning, plateforme didactique, formateurs"
    },
    hero: {
      title: "Intelligence Artificielle Interprétable pour l'Éducation",
      subtitle: "Transformez vos données éducatives en connaissance stratégique et actionnable",
      description: "DidaFlow est une plateforme d'intelligence artificielle interprétable qui accompagne universités, écoles de commerce et organismes de formation pour prévoir et améliorer l'efficacité des parcours éducatifs. Avec notre approche machine-in-the-loop, enseignants et responsables peuvent anticiper le risque d'abandon, optimiser la satisfaction étudiante et augmenter l'employabilité des diplômés."
    },
    signup: {
      title: "🚀 Accès Anticipé",
      subtitle: "Rejoignez la liste d'attente et soyez parmi les premiers à découvrir DidaFlow",
      placeholder: "Entrez votre email",
      button: "S'inscrire Maintenant",
      success: "✅ Parfait ! Nous vous avons ajouté à la liste d'attente. Nous vous contacterons bientôt !",
      error: "Veuillez entrer une adresse email valide."
    },
    team: {
      title: "Notre Équipe",
      founder: { name: "Marco Rossi", role: "PDG & Fondateur" },
      cto: { name: "Laura Bianchi", role: "CTO" },
      researcher: { name: "Prof. Andrea Verdi", role: "Responsable Recherche" }
    },
    partners: {
      title: "Nos Partenaires",
      unibo: {
        name: "Université de Bologne",
        description: "Collaboration stratégique pour la recherche en IA interprétable dans l'éducation"
      }
    },
    launch: {
      title: "📅 Lancement Prévu : H2 2025",
      description: "Nous travaillons dur pour vous apporter la meilleure expérience possible. Le lancement est prévu pour la seconde moitié de 2025. Inscrivez-vous pour recevoir des mises à jour exclusives !"
    }
  }
};

export default function Home() {
  const [currentLang, setCurrentLang] = useState<'it' | 'en' | 'es' | 'fr'>('it');
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init('GslY_SVDCKhYKOP2r');
    
    // Detect language
    const savedLang = localStorage.getItem('didaflow-language');
    if (savedLang && translations[savedLang as keyof typeof translations]) {
      setCurrentLang(savedLang as 'it' | 'en' | 'es' | 'fr');
    } else {
      const browserLang = navigator.language.split('-')[0];
      if (translations[browserLang as keyof typeof translations]) {
        setCurrentLang(browserLang as 'it' | 'en' | 'es' | 'fr');
      }
    }
  }, []);

  const t = translations[currentLang];

  const handleLanguageChange = (lang: 'it' | 'en' | 'es' | 'fr') => {
    setCurrentLang(lang);
    localStorage.setItem('didaflow-language', lang);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert(t.signup.error);
      return;
    }

    const templateParams = {
      user_email: email,
      message: 'Nuovo iscritto alla lista d\'attesa DidaFlow',
      timestamp: new Date().toLocaleString('it-IT')
    };

    try {
      await emailjs.send('service_3vqbzec', 'template_63bzn4d', templateParams);
      setShowSuccess(true);
      setEmail('');
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('Errore invio email:', error);
      alert(t.signup.error);
    }
  };

  return (
    <div className={`min-h-screen bg-slate-900 text-white relative overflow-hidden ${inter.className}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-shapes">
          <div className="absolute w-20 h-20 bg-blue-500/20 rounded-full animate-float-1"></div>
          <div className="absolute w-32 h-32 bg-cyan-500/20 rounded-full animate-float-2"></div>
          <div className="absolute w-24 h-24 bg-blue-600/20 rounded-full animate-float-3"></div>
          <div className="absolute w-28 h-28 bg-cyan-400/20 rounded-full animate-float-4"></div>
        </div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        {/* Logo */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-sm"></div>
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              DidaFlow
            </div>
          </div>
        </div>

        {/* Language Flags */}
        <div className="flex justify-center space-x-2 mb-12">
          {[
            { code: 'it', flag: '🇮🇹', title: 'Italiano' },
            { code: 'en', flag: '🇬🇧', title: 'English' },
            { code: 'es', flag: '🇪🇸', title: 'Español' },
            { code: 'fr', flag: '🇫🇷', title: 'Français' }
          ].map(({ code, flag, title }) => (
            <button
              key={code}
              onClick={() => handleLanguageChange(code as 'it' | 'en' | 'es' | 'fr')}
              className={`text-2xl p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                currentLang === code ? 'bg-blue-500/20 ring-2 ring-blue-400' : 'hover:bg-slate-800'
              }`}
              title={title}
            >
              {flag}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            {t.hero.title}
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-slate-300 mb-8">
            {t.hero.subtitle}
          </h2>
          
          <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto mb-12">
            {t.hero.description}
          </p>

          {/* Email Signup */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-semibold mb-4">{t.signup.title}</h3>
            <p className="text-slate-400 mb-6">{t.signup.subtitle}</p>
            
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.signup.placeholder}
                className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                {t.signup.button}
              </button>
            </form>
            
            {showSuccess && (
              <div className="mt-4 p-4 bg-green-500/20 border border-green-400 rounded-lg text-green-300">
                {t.signup.success}
              </div>
            )}
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8">{t.team.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">👨‍💼</div>
                <h4 className="font-semibold text-lg">{t.team.founder.name}</h4>
                <p className="text-slate-400">{t.team.founder.role}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">👩‍💻</div>
                <h4 className="font-semibold text-lg">{t.team.cto.name}</h4>
                <p className="text-slate-400">{t.team.cto.role}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">👨‍🔬</div>
                <h4 className="font-semibold text-lg">{t.team.researcher.name}</h4>
                <p className="text-slate-400">{t.team.researcher.role}</p>
              </div>
            </div>
          </div>

          {/* Partners Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8">{t.partners.title}</h3>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl mb-4">🎓</div>
              <h4 className="font-semibold text-lg mb-2">{t.partners.unibo.name}</h4>
              <p className="text-slate-400">{t.partners.unibo.description}</p>
            </div>
          </div>

          {/* Launch Timeline */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-semibold mb-4">{t.launch.title}</h3>
            <p className="text-slate-400">{t.launch.description}</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-2xl hover:scale-110 transition-transform duration-300" title="LinkedIn">💼</a>
            <a href="#" className="text-2xl hover:scale-110 transition-transform duration-300" title="Twitter">🐦</a>
            <a href="#" className="text-2xl hover:scale-110 transition-transform duration-300" title="GitHub">⚡</a>
          </div>
        </div>
      </div>
    </div>
  );
}
