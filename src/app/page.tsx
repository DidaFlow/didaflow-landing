'use client';

import { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import emailjs from '@emailjs/browser';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

// Translation data
const translations = {
  'it': {
    meta: {
      title: "DidaFlow - Trasforma i Dati Universitari in Azione Strategica",
      description: "Piattaforma AI per università che unifica dati frammentati e ottimizza attrattività, regolarità e occupabilità dei corsi. Scopri come passare dalla rendicontazione all'azione.",
      keywords: "università, EdTech, dropout, enrollment, AI, dati universitari, performance accademiche"
    },
    hero: {
      title: "Dai Dati alle Decisioni",
      subtitle: "La prima piattaforma AI che trasforma la frammentazione dei dati universitari in azione strategica",
      description: "Smetti di usare i dati solo per rendicontare. Inizia a utilizzarli per migliorare davvero attrattività, regolarità e occupabilità dei tuoi corsi."
    },
    problem: {
      title: "Il Problema",
      quote: "Università e dipartimenti producono migliaia di dati, ma non li usano per migliorare davvero attrattività, regolarità e occupabilità dei propri corsi.",
      description: "Nel sistema universitario europeo, la frammentazione dei dati tra sistemi informativi, report ministeriali e survey interne ostacola una visione unificata e strategica delle performance dei corsi.",
      impact: "Gli strumenti attuali servono **la rendicontazione**, non **l'azione**. Questo porta a decisioni lente, poco informate e scarsamente mirate, anche in presenza di evidenti criticità:",
      stats: [
        { value: "-15%", label: "Calo delle immatricolazioni negli ultimi 3 anni" },
        { value: "40%", label: "Studenti in ritardo nel conseguimento del titolo" },
        { value: "25%", label: "Tasso di abbandono medio nei primi due anni" }
      ]
    },
    solution: {
      title: "La Soluzione DidaFlow",
      description: "Unifichiamo i tuoi dati frammentati in una piattaforma intelligente che ti permette di:",
      benefits: [
        {
          icon: "🎯",
          title: "Predire il dropout",
          description: "Identifica studenti a rischio con 6 mesi di anticipo"
        },
        {
          icon: "📊",
          title: "Ottimizzare i corsi",
          description: "Analizza performance e migliora l'attrattività dei programmi"
        },
        {
          icon: "🚀",
          title: "Aumentare l'occupabilità",
          description: "Monitora e migliora i tassi di inserimento lavorativo"
        },
        {
          icon: "⚡",
          title: "Decidere velocemente",
          description: "Dashboard real-time per decisioni tempestive"
        }
      ]
    },
    testimonials: {
      title: "Cosa Dicono i Nostri Clienti",
      quotes: [
        {
          text: "Se lo avessi avuto durante la revisione, avrei risparmiato molto tempo e avrei preso decisioni più informate sui nostri programmi.",
          author: "Prof. Maria Rossi",
          role: "Coordinatore CdS, Università di Bologna"
        },
        {
          text: "Finalmente possiamo anticipare i problemi invece di reagire quando è troppo tardi. Il ROI è stato immediato.",
          author: "Dott. Giuseppe Verdi",
          role: "Delegato all'orientamento, Università di Bologna"
        },
        {
          text: "DidaFlow ha trasformato il nostro approccio all'innovazione didattica. Ora prendiamo decisioni basate sui dati, non sulle impressioni.",
          author: "Prof.ssa Laura Bianchi",
          role: "Associate Dean, Bologna Business School"
        }
      ]
    },
    cta_intermediate: {
      title: "Scopri Come DidaFlow Può Trasformare la Tua Università",
      buttons: [
        { text: "📺 Guarda la Demo", type: "primary" },
        { text: "📄 Scarica la Scheda Tecnica", type: "secondary" }
      ]
    },
    how_it_works: {
      title: "Come Funziona",
      steps: [
        {
          number: "01",
          title: "Analisi Esigenze",
          description: "Consulenza iniziale per identificare le tue priorità specifiche e i KPI da monitorare."
        },
        {
          number: "02", 
          title: "Connessione Dati",
          description: "Integrazione sicura con i tuoi sistemi esistenti (ESSE3, survey, MIUR, etc.)."
        },
        {
          number: "03",
          title: "Setup e Personalizzazione",
          description: "Configurazione dashboard e training del team per l'utilizzo ottimale."
        },
        {
          number: "04",
          title: "Monitoraggio Continuo",
          description: "Supporto ongoing e aggiornamenti per massimizzare il valore nel tempo."
        }
      ]
    },
    pricing: {
      title: "Pacchetti e Servizi",
      description: "Soluzioni flessibili per ogni esigenza universitaria",
      packages: [
        {
          name: "Licenza SaaS",
          description: "Accesso alla piattaforma cloud",
          price: "€2.500-5.000/anno",
          features: [
            "Dashboard real-time",
            "Analisi predittive",
            "Report automatici",
            "Supporto tecnico"
          ]
        },
        {
          name: "Consulenza",
          description: "Personalizzazione e implementazione",
          price: "€5.000-15.000",
          features: [
            "Analisi iniziale",
            "Integrazione sistemi",
            "Configurazione custom",
            "Formazione team"
          ]
        },
        {
          name: "Training & Supporto",
          description: "Formazione continua e assistenza",
          price: "€1.500-3.000/anno",
          features: [
            "Workshop mensili",
            "Supporto prioritario",
            "Best practices",
            "Aggiornamenti inclusi"
          ]
        }
      ],
      note: "Le tariffe sono personalizzate in base alle dimensioni dell'ateneo e alle esigenze specifiche."
    },
    team: {
      title: "Il Nostro Team",
      members: [
        {
          name: "Dr. Marco Lozingaro",
          role: "CEO & Founder",
          bio: "PhD in Computer Science, esperto in AI per l'educazione. 10+ anni di ricerca in machine learning applicato ai dati universitari.",
          image: "👨‍💼"
        },
        {
          name: "Prof.ssa Elena Rossi",
          role: "Head of Data Science",
          bio: "Professore Associato UNIBO, specialista in learning analytics. Autrice di 40+ pubblicazioni su AI interpretabile.",
          image: "👩‍🔬"
        },
        {
          name: "Dr. Andrea Bianchi",
          role: "CTO",
          bio: "Senior Software Engineer, ex-Google. Esperto in architetture scalabili e data engineering per EdTech.",
          image: "👨‍💻"
        }
      ]
    },
    funding: {
      title: "Riconoscimenti e Supporto",
      description: "🏛️ DidaFlow è un progetto nato all'interno dell'Università di Bologna e ha ricevuto supporto dal programma FAIR - Future Artificial Intelligence Research per l'innalzamento del TRL",
      certifications: [
        "Spin-off UNIBO accreditato",
        "GDPR Compliance certificata", 
        "ISO 27001 in corso"
      ]
    },
    cta_final: {
      title: "Vuoi Ridurre il Dropout e Migliorare le Performance dei Tuoi Studenti?",
      subtitle: "Prenota una demo personalizzata di DidaFlow e scopri come trasformare i tuoi dati in azione strategica.",
      button: "📅 Prenota la Demo Gratuita"
    },
    launch: {
      title: "🚀 Beta Disponibile - Lancio Q2 2025",
      description: "Partecipa al programma beta e influenza lo sviluppo del prodotto. Accesso anticipato con condizioni speciali."
    }
  },
  'en': {
    meta: {
      title: "DidaFlow - Transform University Data into Strategic Action",
      description: "AI platform for universities that unifies fragmented data and optimizes attractiveness, regularity and employability of courses. Discover how to move from reporting to action.",
      keywords: "university, EdTech, dropout, enrollment, AI, university data, academic performance"
    },
    hero: {
      title: "From Data to Decisions",
      subtitle: "The first AI platform that transforms university data fragmentation into strategic action",
      description: "Stop using data just for reporting. Start using it to truly improve the attractiveness, regularity and employability of your courses."
    },
    problem: {
      title: "The Problem",
      quote: "Universities and departments produce thousands of data, but don't use them to truly improve attractiveness, regularity and employability of their courses.",
      description: "In the European university system, data fragmentation between information systems, ministerial reports and internal surveys hinders a unified and strategic vision of course performance.",
      impact: "Current tools serve **reporting**, not **action**. This leads to slow, poorly informed and poorly targeted decisions, even in the presence of obvious criticalities:",
      stats: [
        { value: "-15%", label: "Drop in enrollments over the last 3 years" },
        { value: "40%", label: "Students delayed in degree completion" },
        { value: "25%", label: "Average dropout rate in the first two years" }
      ]
    },
    solution: {
      title: "The DidaFlow Solution",
      description: "We unify your fragmented data into an intelligent platform that allows you to:",
      benefits: [
        {
          icon: "🎯",
          title: "Predict dropout",
          description: "Identify at-risk students 6 months in advance"
        },
        {
          icon: "📊",
          title: "Optimize courses",
          description: "Analyze performance and improve program attractiveness"
        },
        {
          icon: "🚀",
          title: "Increase employability",
          description: "Monitor and improve job placement rates"
        },
        {
          icon: "⚡",
          title: "Decide quickly",
          description: "Real-time dashboard for timely decisions"
        }
      ]
    },
    testimonials: {
      title: "What Our Clients Say",
      quotes: [
        {
          text: "If I had had it during the review, I would have saved a lot of time and made more informed decisions about our programs.",
          author: "Prof. Maria Rossi",
          role: "Course Coordinator, University of Bologna"
        },
        {
          text: "Finally we can anticipate problems instead of reacting when it's too late. The ROI was immediate.",
          author: "Dr. Giuseppe Verdi",
          role: "Orientation Delegate, University of Bologna"
        },
        {
          text: "DidaFlow has transformed our approach to educational innovation. Now we make data-driven decisions, not impressions.",
          author: "Prof. Laura Bianchi",
          role: "Associate Dean, Bologna Business School"
        }
      ]
    },
    cta_intermediate: {
      title: "Discover How DidaFlow Can Transform Your University",
      buttons: [
        { text: "📺 Watch Demo", type: "primary" },
        { text: "📄 Download Technical Sheet", type: "secondary" }
      ]
    },
    how_it_works: {
      title: "How It Works",
      steps: [
        {
          number: "01",
          title: "Needs Analysis",
          description: "Initial consultation to identify your specific priorities and KPIs to monitor."
        },
        {
          number: "02", 
          title: "Data Connection",
          description: "Secure integration with your existing systems (ESSE3, surveys, MIUR, etc.)."
        },
        {
          number: "03",
          title: "Setup & Customization",
          description: "Dashboard configuration and team training for optimal use."
        },
        {
          number: "04",
          title: "Continuous Monitoring",
          description: "Ongoing support and updates to maximize value over time."
        }
      ]
    },
    pricing: {
      title: "Packages and Services",
      description: "Flexible solutions for every university need",
      packages: [
        {
          name: "SaaS License",
          description: "Access to cloud platform",
          price: "€2,500-5,000/year",
          features: [
            "Real-time dashboard",
            "Predictive analysis",
            "Automatic reports",
            "Technical support"
          ]
        },
        {
          name: "Consulting",
          description: "Customization and implementation",
          price: "€5,000-15,000",
          features: [
            "Initial analysis",
            "System integration",
            "Custom configuration",
            "Team training"
          ]
        },
        {
          name: "Training & Support",
          description: "Continuous training and assistance",
          price: "€1,500-3,000/year",
          features: [
            "Monthly workshops",
            "Priority support",
            "Best practices",
            "Updates included"
          ]
        }
      ],
      note: "Rates are customized based on university size and specific needs."
    },
    team: {
      title: "Our Team",
      members: [
        {
          name: "Dr. Marco Lozingaro",
          role: "CEO & Founder",
          bio: "PhD in Computer Science, expert in AI for education. 10+ years of research in machine learning applied to university data.",
          image: "👨‍💼"
        },
        {
          name: "Prof. Elena Rossi",
          role: "Head of Data Science",
          bio: "Associate Professor UNIBO, specialist in learning analytics. Author of 40+ publications on interpretable AI.",
          image: "👩‍🔬"
        },
        {
          name: "Dr. Andrea Bianchi",
          role: "CTO",
          bio: "Senior Software Engineer, ex-Google. Expert in scalable architectures and data engineering for EdTech.",
          image: "👨‍💻"
        }
      ]
    },
    funding: {
      title: "Recognition and Support",
      description: "🏛️ DidaFlow is a project born within the University of Bologna and has received support from the FAIR - Future Artificial Intelligence Research program for TRL advancement",
      certifications: [
        "Accredited UNIBO spin-off",
        "Certified GDPR Compliance", 
        "ISO 27001 in progress"
      ]
    },
    cta_final: {
      title: "Want to Reduce Dropout and Improve Your Students' Performance?",
      subtitle: "Book a personalized DidaFlow demo and discover how to transform your data into strategic action.",
      button: "📅 Book Free Demo"
    },
    launch: {
      title: "🚀 Beta Available - Launch Q2 2025",
      description: "Participate in the beta program and influence product development. Early access with special conditions."
    }
  }
};

export default function Home() {
  const [currentLang, setCurrentLang] = useState<'it' | 'en'>('it');
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init('GslY_SVDCKhYKOP2r');
    
    // Detect language
    const savedLang = localStorage.getItem('didaflow-language');
    if (savedLang && translations[savedLang as keyof typeof translations]) {
      setCurrentLang(savedLang as 'it' | 'en');
    } else {
      const browserLang = navigator.language.split('-')[0];
      if (translations[browserLang as keyof typeof translations]) {
        setCurrentLang(browserLang as 'it' | 'en');
      }
    }
  }, []);

  const t = translations[currentLang];

  const handleLanguageChange = (lang: 'it' | 'en') => {
    setCurrentLang(lang);
    localStorage.setItem('didaflow-language', lang);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Per favore inserisci un indirizzo email valido.');
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
      alert('Si è verificato un errore. Riprova più tardi.');
    }
  };

  return (
    <div className={`min-h-screen bg-slate-900 text-white ${inter.className}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-shapes">
          <div className="absolute w-20 h-20 bg-blue-500/10 rounded-full animate-float-1"></div>
          <div className="absolute w-32 h-32 bg-cyan-500/10 rounded-full animate-float-2"></div>
          <div className="absolute w-24 h-24 bg-blue-600/10 rounded-full animate-float-3"></div>
          <div className="absolute w-28 h-28 bg-cyan-400/10 rounded-full animate-float-4"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <div className="w-5 h-5 bg-white rounded-sm"></div>
          </div>
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            DidaFlow
          </div>
        </div>
        
        {/* Language Flags */}
        <div className="flex space-x-1">
          {[
            { code: 'it', flag: '🇮🇹', title: 'Italiano' },
            { code: 'en', flag: '🇬🇧', title: 'English' }
          ].map(({ code, flag, title }) => (
            <button
              key={code}
              onClick={() => handleLanguageChange(code as 'it' | 'en')}
              className={`text-lg p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                currentLang === code ? 'bg-blue-500/20 ring-1 ring-blue-400' : 'hover:bg-slate-800'
              }`}
              title={title}
            >
              {flag}
            </button>
          ))}
        </div>
      </nav>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            {t.hero.title}
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-slate-300 mb-8 max-w-4xl mx-auto">
            {t.hero.subtitle}
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto mb-12">
            {t.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
              📅 Prenota Demo Gratuita
            </button>
            <button className="px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:bg-slate-800 transition-all duration-300">
              📄 Scarica Scheda Tecnica
            </button>
          </div>
        </section>

        {/* Problem Section */}
        <section className="bg-slate-800/30 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.problem.title}</h2>
            
            <blockquote className="text-xl md:text-2xl italic text-center mb-12 text-slate-300 border-l-4 border-blue-500 pl-6">
              &ldquo;{t.problem.quote}&rdquo;
            </blockquote>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                  {t.problem.description}
                </p>
                <p className="text-lg text-slate-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.problem.impact.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }}>
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {t.problem.stats.map((stat, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-red-400 mb-2">{stat.value}</div>
                    <div className="text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">{t.solution.title}</h2>
            <p className="text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto">
              {t.solution.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.solution.benefits.map((benefit, index) => (
                <div key={index} className="bg-slate-800/30 rounded-xl p-6 text-center hover:bg-slate-800/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-slate-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-slate-800/30 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t.testimonials.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.testimonials.quotes.map((quote, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6">
                  <div className="text-4xl text-blue-400 mb-4">&ldquo;</div>
                  <p className="text-slate-300 mb-6 italic">{quote.text}</p>
                  <div>
                    <div className="font-semibold text-white">{quote.author}</div>
                    <div className="text-slate-400 text-sm">{quote.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Intermediate */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.cta_intermediate.title}</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {t.cta_intermediate.buttons.map((button, index) => (
                <button
                  key={index}
                  className={`px-8 py-4 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    button.type === 'primary'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600'
                      : 'border border-slate-600 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-slate-800/30 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t.how_it_works.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.how_it_works.steps.map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{step.title}</h3>
                  <p className="text-slate-400">{step.description}</p>
                  
                  {index < t.how_it_works.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent transform translate-x-8"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">{t.pricing.title}</h2>
            <p className="text-xl text-slate-300 text-center mb-16">{t.pricing.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {t.pricing.packages.map((pkg, index) => (
                <div key={index} className="bg-slate-800/30 rounded-xl p-8 text-center hover:bg-slate-800/50 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-white">{pkg.name}</h3>
                  <p className="text-slate-400 mb-4">{pkg.description}</p>
                  <div className="text-2xl font-bold text-blue-400 mb-6">{pkg.price}</div>
                  <ul className="space-y-2 text-left">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-300">
                        <span className="text-green-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <p className="text-center text-slate-400 italic">{t.pricing.note}</p>
          </div>
        </section>

        {/* Team */}
        <section className="bg-slate-800/30 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t.team.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.team.members.map((member, index) => (
                <div key={index} className="text-center bg-slate-800/50 rounded-xl p-8">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
                  <p className="text-blue-400 mb-4 font-medium">{member.role}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Funding & Certifications */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">{t.funding.title}</h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              {t.funding.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {t.funding.certifications.map((cert, index) => (
                <span key={index} className="px-4 py-2 bg-slate-800/50 rounded-full text-slate-300 text-sm">
                  ✓ {cert}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.cta_final.title}</h2>
            <p className="text-xl text-slate-300 mb-8">{t.cta_final.subtitle}</p>
            
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Inserisci la tua email aziendale"
                  className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                >
                  {t.cta_final.button}
                </button>
              </div>
            </form>
            
            {showSuccess && (
              <div className="max-w-md mx-auto p-4 bg-green-500/20 border border-green-400 rounded-lg text-green-300">
                ✅ Grazie! Ti contatteremo entro 24 ore per programmare la demo.
              </div>
            )}
          </div>
        </section>

        {/* Launch Info */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-slate-800/30 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4">{t.launch.title}</h3>
              <p className="text-slate-400">{t.launch.description}</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <div className="w-5 h-5 bg-white rounded-sm"></div>
                </div>
                <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  DidaFlow
                </div>
              </div>
              <p className="text-slate-400 mb-4">
                Trasforma i dati universitari in azione strategica.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contatti</h4>
              <ul className="space-y-2 text-slate-400">
                <li>📧 hello@didaflow.ai</li>
                <li>📞 +39 051 123 4567</li>
                <li>📍 Bologna, Italy</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Risorse</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">📄 Scheda Tecnica</a></li>
                <li><a href="#" className="hover:text-white transition-colors">📊 Whitepaper</a></li>
                <li><a href="#" className="hover:text-white transition-colors">🎯 Case Studies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 DidaFlow. Tutti i diritti riservati.
            </p>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white transition-colors" title="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" title="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
