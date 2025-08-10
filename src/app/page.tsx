import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Skip link for keyboard users */}
      <a href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus-ring bg-white px-3 py-2 rounded-md shadow">
        Salta al contenuto
      </a>
      <header className="border-b border-zinc-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-lg font-semibold text-blue-600">DidaFlow</span>
          </div>
          <nav aria-label="Primary">
            <ul className="flex items-center gap-4 text-sm">
              <li><Link className="focus-ring" href="#soluzione">Soluzione</Link></li>
              <li><Link className="focus-ring" href="#contatti">Contatti</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">
        {/* Hero Section */}
        <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
          <h1 className="mb-6 text-blue-600">DidaFlow trasforma i dati formativi in azioni strategiche</h1>
          <p className="mx-auto max-w-3xl text-lg text-zinc-700 mb-8">
            Aiutiamo istituzioni e provider di formazione a decidere in modo rapido, informato e mirato — per il successo di studenti e partecipanti.
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
                &ldquo;Gli ecosistemi della formazione generano grandi quantità di dati, ma raramente diventano leve operative per migliorare attrattività, continuità e occupabilità dei percorsi.&rdquo;
              </blockquote>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-zinc-700 mb-6">
                    In tutto il settore dell&apos;istruzione terziaria e professionale, la frammentazione tra sistemi interni, report istituzionali e survey impedisce una visione strategica unificata.
                  </p>
                  <p className="text-lg text-zinc-700">
                    Gli strumenti attuali sono pensati per il <strong>reporting</strong>, non per l&apos;<strong>azione</strong>: le decisioni arrivano tardi, sono poco mirate e basate su informazioni incomplete, anche davanti a segnali d&apos;allarme chiari.
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
                DidaFlow è la piattaforma di <em>Academic & Training Intelligence</em> che integra e potenzia i dati frammentati, offrendo insight chiari, azionabili e predittivi.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg border border-zinc-200 p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl" aria-hidden="true">🎯</span>
                </div>
                <h3 className="mb-3 text-blue-600">Aumentare l&apos;attrattività</h3>
                <p className="text-zinc-700 text-sm">Analizza performance e value proposition per programmi più competitivi.</p>
              </div>
              <div className="bg-white rounded-lg border border-zinc-200 p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl" aria-hidden="true">📈</span>
                </div>
                <h3 className="mb-3 text-blue-600">Migliorare continuità e completamento</h3>
                <p className="text-zinc-700 text-sm">Individua precocemente chi è a rischio e intervieni in modo preventivo.</p>
              </div>
              <div className="bg-white rounded-lg border border-zinc-200 p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl" aria-hidden="true">🚀</span>
                </div>
                <h3 className="mb-3 text-blue-600">Ridurre lo skill gap</h3>
                <p className="text-zinc-700 text-sm">Allinea percorsi e competenze al mercato del lavoro, migliorando placement e upskilling.</p>
              </div>
            </div>

            <p className="text-center text-lg text-zinc-700">
              Con DidaFlow, agisci prima che i problemi si manifestino, non dopo.
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
                  DidaFlow ha trasformato il nostro approccio all&apos;innovazione didattica. Ora prendiamo decisioni data-driven, non per impressioni.
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
            <h2 className="mb-8">Scopri come DidaFlow può trasformare la tua università</h2>
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
              Prenota una demo personalizzata di DidaFlow e scopri come trasformare i tuoi dati in azione strategica.
            </p>
            <Link
              href="#contatti"
              className="focus-ring inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-4 text-white text-lg font-medium hover:bg-blue-700 active:bg-blue-800"
            >
              Prenota Demo Gratuita
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-zinc-50 py-12 sm:py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="mb-4">Domande Frequenti</h2>
              <p className="text-lg text-zinc-700">Risposte alle domande più comuni su DidaFlow</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <details className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm">
                <summary className="font-medium text-lg cursor-pointer hover:text-blue-600 focus:text-blue-600 focus:outline-none">
                  Quanto tempo richiede l&apos;implementazione di DidaFlow?
                </summary>
                <div className="mt-4 text-zinc-700">
                  L&apos;implementazione tipica richiede 2-4 settimane, includendo l&apos;analisi iniziale, l&apos;integrazione con i sistemi esistenti e la formazione del team. Il tempo può variare in base alla complessità dei dati e al numero di sistemi da integrare.
                </div>
              </details>

              <details className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm">
                <summary className="font-medium text-lg cursor-pointer hover:text-blue-600 focus:text-blue-600 focus:outline-none">
                  DidaFlow è compatibile con il nostro sistema informativo esistente?
                </summary>
                <div className="mt-4 text-zinc-700">
                  Sì, DidaFlow si integra con i principali sistemi informativi universitari (ESSE3, U-GOV, Pentaho) e può connettersi via API o file export. Supportiamo anche l&apos;integrazione con database personalizzati e fogli di calcolo.
                </div>
              </details>

              <details className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm">
                <summary className="font-medium text-lg cursor-pointer hover:text-blue-600 focus:text-blue-600 focus:outline-none">
                  Come garantite la privacy e la sicurezza dei dati?
                </summary>
                <div className="mt-4 text-zinc-700">
                  Siamo pienamente conformi al GDPR e utilizziamo crittografia end-to-end per tutti i trasferimenti dati. I server sono ubicati in Europa, con backup automatici e accesso limitato tramite autenticazione multi-fattore. Tutti i dati rimangono di proprietà dell&apos;istituzione.
                </div>
              </details>

              <details className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm">
                <summary className="font-medium text-lg cursor-pointer hover:text-blue-600 focus:text-blue-600 focus:outline-none">
                  Possiamo personalizzare le analisi e i KPI mostrati?
                </summary>
                <div className="mt-4 text-zinc-700">
                  Assolutamente. Durante la fase di setup personalizziamo dashboard, KPI e report in base alle vostre priorità strategiche. Potete anche creare nuovi indicatori personalizzati e modificare le visualizzazioni in qualsiasi momento.
                </div>
              </details>

              <details className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm">
                <summary className="font-medium text-lg cursor-pointer hover:text-blue-600 focus:text-blue-600 focus:outline-none">
                  Che tipo di supporto offrite dopo l&apos;implementazione?
                </summary>
                <div className="mt-4 text-zinc-700">
                  Offriamo supporto tecnico continuativo, aggiornamenti regolari della piattaforma, formazione periodica per nuovi utenti e consulenza strategica per ottimizzare l&apos;utilizzo dei dati. Il supporto è incluso in tutti i pacchetti.
                </div>
              </details>

              <details className="bg-white rounded-lg border border-zinc-200 p-6 shadow-sm">
                <summary className="font-medium text-lg cursor-pointer hover:text-blue-600 focus:text-blue-600 focus:outline-none">
                  DidaFlow funziona anche per istituti di formazione professionale?
                </summary>
                <div className="mt-4 text-zinc-700">
                  Sì, DidaFlow è progettato per tutto il settore dell&apos;istruzione terziaria e professionale, inclusi centri di formazione, business school, istituti tecnici e provider di formazione aziendale. Adattiamo le metriche alle specificità di ogni contesto formativo.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-12 sm:py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center mb-12">Il nostro team</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg border border-zinc-200 p-6 text-center shadow-sm">
                <div className="w-24 h-24 bg-zinc-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl" aria-hidden="true">
                  👨‍💻
                </div>
                <h3 className="mb-2">Stefano Zingaro</h3>
                <p className="text-blue-600 mb-4 font-medium">Assistant Professor UNIBO, CTO & Founder</p>
                <p className="text-zinc-700 text-sm">
                  PhD in Computer Science, esperto di AI per l&apos;educazione. 10+ anni di ricerca nel machine learning applicato ai dati universitari.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-zinc-200 p-6 text-center shadow-sm">
                <div className="w-24 h-24 bg-zinc-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl" aria-hidden="true">
                  🎓
                </div>
                <h3 className="mb-2">Maurizio Gabbrielli</h3>
                <p className="text-blue-600 mb-4 font-medium">Full Professor UNIBO, Founder</p>
                <p className="text-zinc-700 text-sm">
                  Associate Dean for AI per BBS, autore di oltre 140 pubblicazioni su linguaggi di programmazione e intelligenza artificiale.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-zinc-200 p-6 text-center shadow-sm">
                <div className="w-24 h-24 bg-zinc-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl" aria-hidden="true">
                  🌍
                </div>
                <h3 className="mb-2">Francesco Balzan</h3>
                <p className="text-blue-600 mb-4 font-medium">CEO & Founder</p>
                <p className="text-zinc-700 text-sm">
                  PhD candidate in Ethic-Driven AI and Personalised Education, antropologo culturale e filosofo della scienza.
                </p>
              </div>
              <div className="bg-white rounded-lg border border-zinc-200 p-6 text-center shadow-sm">
                <div className="w-24 h-24 bg-zinc-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl" aria-hidden="true">
                  💼
                </div>
                <h3 className="mb-2">Cristiano Boscato</h3>
                <p className="text-blue-600 mb-4 font-medium">CEO di Dinova</p>
                <p className="text-zinc-700 text-sm">
                  Fondatore e guida di aziende di innovazione e digital transformation, nominato da Forbes tra i 100 manager più influenti in Italia (2022).
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
                <span className="text-xl font-semibold">DidaFlow</span>
              </div>
              <p className="text-zinc-400 mb-6">
                Trasformiamo i dati universitari in azione strategica.
              </p>
              <p className="text-sm text-zinc-400 mb-4">
                🏛️ DidaFlow è un progetto nato all&apos;interno dell&apos;Università di Bologna e ha ricevuto
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
                <li>📧 <a href="mailto:stefano.zingaro@unibo.it">hello@didaflow.ai</a></li>
                <li>📍 Bologna, Italia</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Risorse</h4>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li id="scheda-tecnica">
                  <Link href="/docs/scheda-tecnica.pdf" className="hover:text-white focus-ring">📄 Scheda Tecnica</Link>
                </li>
                <li><Link href="#" className="hover:text-white focus-ring">📊 Whitepaper</Link></li>
                <li><Link href="#" className="hover:text-white focus-ring">🎯 Case Studies</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">

            <p className="text-zinc-400 text-sm">
              © {new Date().getFullYear()} DidaFlow. Tutti i diritti riservati.
            </p>

            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-zinc-400 hover:text-white focus-ring" title="LinkedIn">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}