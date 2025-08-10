import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="border-b border-zinc-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-lg font-semibold text-blue-600">Didaflow</span>
          </div>
          <nav aria-label="Primary">
            <ul className="flex items-center gap-4 text-sm">
              <li><Link className="focus-ring" href="#soluzione">Soluzione</Link></li>
              <li><Link className="focus-ring" href="#contatti">Contatti</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
          <h1 className="mb-6 text-blue-600">Dai dati all&apos;azione</h1>
          <p className="mx-auto max-w-3xl text-lg text-zinc-700 mb-8">
            Didaflow trasforma le informazioni educative in decisioni strategiche per il futuro degli studenti.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="#demo"
              className="focus-ring inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 active:bg-blue-800"
            >
              Prenota Demo Gratuita
            </Link>
            <Link
              href="#scheda-tecnica"
              className="focus-ring inline-flex items-center justify-center rounded-md border border-zinc-300 px-6 py-3 font-medium hover:bg-zinc-50"
            >
              Scarica Scheda Tecnica
            </Link>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="bg-zinc-50 py-12 sm:py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-xl sm:text-2xl italic text-center mb-12 text-zinc-700 border-l-4 border-blue-600 pl-6">
                &ldquo;Università e dipartimenti producono migliaia di dati, ma non li usano per migliorare davvero attrattività, regolarità e occupabilità dei propri corsi.&rdquo;
              </blockquote>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-zinc-700 mb-6">
                    Nel sistema universitario europeo, la frammentazione dei dati tra sistemi informativi, rapporti ministeriali e indagini interne ostacola una visione unificata e strategica delle performance dei corsi.
                  </p>
                  <p className="text-lg text-zinc-700">
                    Gli strumenti attuali servono per il <strong>reporting</strong>, non per l&apos;<strong>azione</strong>. 
                    Questo porta a decisioni lente, poco informate e poco mirate, anche in presenza di criticità evidenti:
                  </p>
                </div>
                
                <div className="grid gap-6">
                  <div className="bg-white rounded-lg p-6 text-center border border-zinc-200 shadow-sm">
                    <div className="text-3xl font-bold text-red-500 mb-2">Calo</div>
                    <div className="text-zinc-700">Enrollment</div>
                  </div>
                  <div className="bg-white rounded-lg p-6 text-center border border-zinc-200 shadow-sm">
                    <div className="text-3xl font-bold text-red-500 mb-2">Aumento</div>
                    <div className="text-zinc-700">Dropout</div>
                  </div>
                  <div className="bg-white rounded-lg p-6 text-center border border-zinc-200 shadow-sm">
                    <div className="text-3xl font-bold text-red-500 mb-2">Aumento</div>
                    <div className="text-zinc-700">Skill Gap</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="soluzione" className="py-12 sm:py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <blockquote className="text-xl sm:text-2xl italic text-blue-600 mb-8">
                &ldquo;Trasformiamo i dati educativi in conoscenza strategica.&rdquo;
              </blockquote>
              <p className="text-lg text-zinc-700 max-w-3xl mx-auto mb-8">
                Didaflow è una piattaforma di Academic Intelligence che unifica i dati frammentati in un sistema intelligente che consente di:
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg border border-zinc-200 p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="mb-3 text-blue-600">Migliorare Attrattività</h3>
                <p className="text-zinc-700 text-sm">Analizzare performance e ottimizzare l&apos;appeal dei programmi formativi</p>
              </div>
              <div className="bg-white rounded-lg border border-zinc-200 p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="mb-3 text-blue-600">Aumentare Retention</h3>
                <p className="text-zinc-700 text-sm">Identificare studenti a rischio e intervenire preventivamente</p>
              </div>
              <div className="bg-white rounded-lg border border-zinc-200 p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="mb-3 text-blue-600">Ridurre Skill Gap</h3>
                <p className="text-zinc-700 text-sm">Monitorare e migliorare i tassi di placement lavorativo</p>
              </div>
            </div>
            
            <p className="text-center text-lg text-zinc-700">
              Con Didaflow, agisci prima che i problemi si manifestino, non dopo.
            </p>
          </div>
        </section>

        {/* Customer Citations */}
        <section className="bg-zinc-50 py-12 sm:py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center mb-12">Cosa dicono i nostri clienti</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm">
                <div className="text-3xl text-blue-600 mb-4">&ldquo;</div>
                <p className="text-zinc-700 mb-6 italic">
                  Se l&apos;avessi avuto durante la revisione, avrei risparmiato molto tempo e preso decisioni più informate sui nostri programmi.
                </p>
                <div>
                  <div className="font-medium">Prof.ssa Maria Rossi</div>
                  <div className="text-zinc-600 text-sm">Coordinatrice di Corso, Università di Bologna</div>
                </div>
              </div>
              <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm">
                <div className="text-3xl text-blue-600 mb-4">&ldquo;</div>
                <p className="text-zinc-700 mb-6 italic">
                  Finalmente possiamo anticipare i problemi invece di reagire quando è troppo tardi. Il ROI è stato immediato.
                </p>
                <div>
                  <div className="font-medium">Dr. Giuseppe Verdi</div>
                  <div className="text-zinc-600 text-sm">Delegato all&apos;Orientamento, Università di Bologna</div>
                </div>
              </div>
              <div className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm">
                <div className="text-3xl text-blue-600 mb-4">&ldquo;</div>
                <p className="text-zinc-700 mb-6 italic">
                  Didaflow ha trasformato il nostro approccio all&apos;innovazione didattica. Ora prendiamo decisioni data-driven, non per impressioni.
                </p>
                <div>
                  <div className="font-medium">Prof.ssa Laura Bianchi</div>
                  <div className="text-zinc-600 text-sm">Vice Preside, Bologna Business School</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intermediate CTA */}
        <section className="py-12 sm:py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-8">Scopri come Didaflow può trasformare la tua università</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="#demo"
                className="focus-ring inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 active:bg-blue-800"
              >
                Scopri come funziona
              </Link>
              <Link
                href="#scheda-tecnica"
                className="focus-ring inline-flex items-center justify-center rounded-md border border-zinc-300 px-6 py-3 font-medium hover:bg-zinc-50"
              >
                Scarica scheda tecnica
              </Link>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="bg-zinc-50 py-12 sm:py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center mb-12">Come funziona</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                  01
                </div>
                <h3 className="mb-3">Analisi delle esigenze</h3>
                <p className="text-zinc-700 text-sm">Consulenza iniziale per identificare le priorità specifiche e i KPI da monitorare.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                  02
                </div>
                <h3 className="mb-3">Connessione ai dati</h3>
                <p className="text-zinc-700 text-sm">Integrazione sicura con i sistemi esistenti (ESSE3, indagini, MIUR, ecc.).</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                  03
                </div>
                <h3 className="mb-3">Setup e personalizzazione</h3>
                <p className="text-zinc-700 text-sm">Configurazione della dashboard e formazione del team per l&apos;uso ottimale.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                  04
                </div>
                <h3 className="mb-3">Monitoraggio e supporto continuo</h3>
                <p className="text-zinc-700 text-sm">Assistenza continua e aggiornamenti per massimizzare il valore nel tempo.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Packages & Services */}
        <section className="py-12 sm:py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="mb-4">Pacchetti e servizi</h2>
              <p className="text-lg text-zinc-700">Soluzioni flessibili per ogni esigenza universitaria</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-lg border border-zinc-200 p-6 text-center shadow-sm">
                <h3 className="mb-2">Licenza SaaS</h3>
                <p className="text-zinc-700 mb-4 text-sm">Accesso alla piattaforma cloud</p>
                <div className="text-2xl font-bold text-blue-600 mb-6">€2.500-5.000/anno</div>
                <ul className="space-y-2 text-left text-sm">
                  <li className="flex items-center text-zinc-700">
                    <span className="text-green-500 mr-2">✓</span>
                    Dashboard real-time
                  </li>
                  <li className="flex items-center text-zinc-700">
                    <span className="text-green-500 mr-2">✓</span>
                    Analisi predittive
                  </li>
                  <li className="flex items-center text-zinc-700">
                    <span className="text-green-500 mr-2">✓</span>
                    Report automatici
                  </li>
                  <li className="flex items-center text-zinc-700">
                    <span className="text-green-500 mr-2">✓</span>
                    Supporto tecnico
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg border border-zinc-200 p-6 text-center shadow-sm">
                <h3 className="mb-2">Consulenza</h3>
                <p className="text-zinc-700 mb-4 text-sm">Personalizzazione e implementazione</p>
                <div className="text-2xl font-bold text-blue-600 mb-6">€5.000-15.000</div>
                <ul className="space-y-2 text-left text-sm">
                  <li className="flex items-center text-zinc-700">
                    <span className="text-green-500 mr-2">✓</span>
                    Analisi iniziale
                  </li>
                  <li className="flex items-center text-zinc-700">
                    <span className="text-green-500 mr-2">✓</span>
                    Integrazione sistemi
                  </li>
                  <li className="flex items-center text-zinc-700">
                    <span className="text-green-500 mr-2">✓</span>
                    Configurazione custom
                  </li>
                  <li className="flex items-center text-zinc-700">
                    <span className="text-green-500 mr-2">✓</span>
                    Formazione team
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg border border-zinc-200 p-6 text-center shadow-sm">
                <h3 className="mb-2">Training & Support</h3>
                <p className="text-zinc-700 mb-4 text-sm">Formazione continua e assistenza</p>
                <div className="text-2xl font-bold text-blue-600 mb-6">€1.500-3.000/anno</div>
                <ul className="space-y-2 text-left text-sm">
                  <li className="flex items-center text-zinc-700">
                    <span className="text-green-500 mr-2">✓</span>
                    Workshop mensili
                  </li>
                  <li className="flex items-center text-zinc-700">
                    <span className="text-green-500 mr-2">✓</span>
                    Supporto prioritario
                  </li>
                  <li className="flex items-center text-zinc-700">
                    <span className="text-green-500 mr-2">✓</span>
                    Best practices
                  </li>
                  <li className="flex items-center text-zinc-700">
                    <span className="text-green-500 mr-2">✓</span>
                    Aggiornamenti inclusi
                  </li>
                </ul>
              </div>
            </div>
            
            <p className="text-center text-zinc-700 italic text-sm">Le tariffe sono personalizzate in base alla dimensione dell&apos;università e alle esigenze specifiche.</p>
          </div>
        </section>

        {/* Final CTA */}
        <section id="demo" className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 sm:py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-6">Vuoi ridurre il dropout e migliorare le performance dei tuoi studenti?</h2>
            <p className="text-lg text-zinc-700 mb-8 max-w-2xl mx-auto">
              Prenota una demo personalizzata di Didaflow e scopri come trasformare i tuoi dati in azione strategica.
            </p>
            <Link
              href="#contatto"
              className="focus-ring inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-4 text-white text-lg font-medium hover:bg-blue-700 active:bg-blue-800"
            >
              Prenota Demo Gratuita
            </Link>
          </div>
        </section>

        {/* Team */}
        <section className="py-12 sm:py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center mb-12">Il nostro team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg border border-zinc-200 p-6 text-center shadow-sm">
                <div className="w-24 h-24 bg-zinc-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                  👨‍💼
                </div>
                <h3 className="mb-2">Dr. Marco Lozingaro</h3>
                <p className="text-blue-600 mb-4 font-medium">CEO & Founder</p>
                <p className="text-zinc-700 text-sm">
                  PhD in Computer Science, esperto di AI per l&apos;educazione. 10+ anni di ricerca nel machine learning applicato ai dati universitari.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-zinc-200 p-6 text-center shadow-sm">
                <div className="w-24 h-24 bg-zinc-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                  👩‍🔬
                </div>
                <h3 className="mb-2">Prof.ssa Elena Rossi</h3>
                <p className="text-blue-600 mb-4 font-medium">Head of Data Science</p>
                <p className="text-zinc-700 text-sm">
                  Professore Associato UNIBO, specialista in learning analytics. Autrice di 40+ pubblicazioni su AI interpretabile.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-zinc-200 p-6 text-center shadow-sm">
                <div className="w-24 h-24 bg-zinc-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                  👨‍💻
                </div>
                <h3 className="mb-2">Dr. Andrea Bianchi</h3>
                <p className="text-blue-600 mb-4 font-medium">CTO</p>
                <p className="text-zinc-700 text-sm">
                  Senior Software Engineer, ex-Google. Esperto in architetture scalabili e data engineering per EdTech.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contatti" className="bg-zinc-900 text-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <span className="text-xl font-semibold">Didaflow</span>
              </div>
              <p className="text-zinc-400 mb-6">
                Trasformiamo i dati universitari in azione strategica.
              </p>
              <p className="text-sm text-zinc-400 mb-4">
                🏛️ Didaflow è un progetto nato all&apos;interno dell&apos;Università di Bologna e ha ricevuto 
                supporto dal programma FAIR - Future Artificial Intelligence Research per l&apos;innalzamento del TRL
              </p>
              <div className="flex gap-4 text-sm text-zinc-400">
                <span>✓ Spin-off UNIBO accreditato</span>
                <span>✓ GDPR Compliance certificata</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Contatti</h4>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>📧 hello@didaflow.ai</li>
                <li>📞 +39 051 123 4567</li>
                <li>📍 Bologna, Italia</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Risorse</h4>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li><Link href="#" className="hover:text-white focus-ring">📄 Scheda Tecnica</Link></li>
                <li><Link href="#" className="hover:text-white focus-ring">📊 Whitepaper</Link></li>
                <li><Link href="#" className="hover:text-white focus-ring">🎯 Case Studies</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-zinc-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-400 text-sm">
              © {new Date().getFullYear()} Didaflow. Tutti i diritti riservati.
            </p>
            
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-zinc-400 hover:text-white focus-ring" title="LinkedIn">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}