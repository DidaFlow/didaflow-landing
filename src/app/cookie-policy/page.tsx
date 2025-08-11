import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | DidaFlow",
  description: "Informativa sui cookie utilizzati dal sito DidaFlow e come gestire le preferenze sui cookie.",
};

export default function CookiePolicy() {
  return (
    <>
      <header className="border-b border-zinc-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-lg font-semibold text-blue-600">DidaFlow</span>
          </Link>
          <nav aria-label="Primary">
            <ul className="flex items-center gap-4 text-sm">
              <li><Link className="focus-ring" href="/">Home</Link></li>
              <li><Link className="focus-ring" href="/contatti">Contatti</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="mb-12">
              <h1 className="mb-4">Cookie Policy</h1>
              <p className="text-lg text-zinc-700">
                Informativa sui cookie utilizzati dal sito DidaFlow
              </p>
              <p className="text-sm text-zinc-600 mt-2">
                Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
              </p>
            </header>

            <div className="prose prose-zinc max-w-none">
              <section className="mb-8">
                <h2>Cosa sono i Cookie</h2>
                <p>
                  I cookie sono piccoli file di testo che vengono memorizzati sul dispositivo dell&apos;utente 
                  quando visita un sito web. I cookie permettono al sito di riconoscere il dispositivo 
                  dell&apos;utente e memorizzare alcune informazioni sulle preferenze o azioni passate.
                </p>
              </section>

              <section className="mb-8">
                <h2>Come Utilizziamo i Cookie</h2>
                <p>
                  DidaFlow utilizza i cookie per diversi scopi legittimi che migliorano l&apos;esperienza 
                  dell&apos;utente e consentono il corretto funzionamento dei nostri servizi.
                </p>
              </section>

              <section className="mb-8">
                <h2>Tipi di Cookie Utilizzati</h2>
                
                <h3>1. Cookie Strettamente Necessari</h3>
                <p>
                  Questi cookie sono essenziali per il funzionamento del sito web e non possono essere disattivati.
                </p>
                <div className="bg-zinc-50 rounded-lg p-4 my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-zinc-200">
                        <th className="text-left py-2">Nome</th>
                        <th className="text-left py-2">Scopo</th>
                        <th className="text-left py-2">Durata</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-zinc-100">
                        <td className="py-2 font-mono">session_id</td>
                        <td className="py-2">Gestione della sessione utente</td>
                        <td className="py-2">Sessione</td>
                      </tr>
                      <tr className="border-b border-zinc-100">
                        <td className="py-2 font-mono">csrf_token</td>
                        <td className="py-2">Protezione da attacchi CSRF</td>
                        <td className="py-2">Sessione</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-mono">cookie_consent</td>
                        <td className="py-2">Memorizza le preferenze sui cookie</td>
                        <td className="py-2">1 anno</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3>2. Cookie di Performance e Analitici</h3>
                <p>
                  Questi cookie ci aiutano a capire come i visitatori interagiscono con il sito web, 
                  fornendo informazioni su metriche come il numero di visitatori, frequenza di rimbalzo, 
                  fonte di traffico, ecc.
                </p>
                <div className="bg-zinc-50 rounded-lg p-4 my-4">
                  <p className="text-sm text-zinc-600 mb-2">
                    <strong>Nota:</strong> L&apos;implementazione specifica di cookie analitici (es. Google Analytics, 
                    Adobe Analytics, etc.) dipenderà dalle scelte tecniche finali e richiederà 
                    aggiornamento di questa sezione.
                  </p>
                </div>

                <h3>3. Cookie di Funzionalità</h3>
                <p>
                  Questi cookie consentono al sito web di ricordare le scelte fatte dall&apos;utente 
                  (come nome utente, lingua o regione) e fornire funzionalità migliorate e personalizzate.
                </p>
                <div className="bg-zinc-50 rounded-lg p-4 my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-zinc-200">
                        <th className="text-left py-2">Nome</th>
                        <th className="text-left py-2">Scopo</th>
                        <th className="text-left py-2">Durata</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-zinc-100">
                        <td className="py-2 font-mono">language_pref</td>
                        <td className="py-2">Memorizza la preferenza di lingua</td>
                        <td className="py-2">6 mesi</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-mono">user_preferences</td>
                        <td className="py-2">Impostazioni personalizzate dell&apos;interfaccia</td>
                        <td className="py-2">1 anno</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-8">
                <h2>Cookie di Terze Parti</h2>
                <p>
                  Il nostro sito web può utilizzare servizi forniti da terze parti che possono 
                  impostare i propri cookie. Questi includono:
                </p>
                <ul>
                  <li><strong>Servizi di analisi:</strong> Per comprendere l&apos;utilizzo del sito</li>
                  <li><strong>Servizi di hosting:</strong> Per il funzionamento tecnico della piattaforma</li>
                  <li><strong>CDN (Content Delivery Network):</strong> Per migliorare le performance</li>
                </ul>
                <p>
                  Questi servizi hanno le loro politiche sui cookie e sulla privacy. 
                  Consigliamo di consultare le rispettive informative.
                </p>
              </section>

              <section className="mb-8">
                <h2>Gestione delle Preferenze sui Cookie</h2>
                
                <h3>Attraverso il Browser</h3>
                <p>
                  È possibile gestire i cookie attraverso le impostazioni del browser:
                </p>
                <ul>
                  <li><strong>Chrome:</strong> Impostazioni &gt; Privacy e sicurezza &gt; Cookie e altri dati dei siti</li>
                  <li><strong>Firefox:</strong> Opzioni &gt; Privacy e sicurezza &gt; Cookie e dati dei siti web</li>
                  <li><strong>Safari:</strong> Preferenze &gt; Privacy</li>
                  <li><strong>Edge:</strong> Impostazioni &gt; Privacy, ricerca e servizi</li>
                </ul>

                <h3>Attraverso le Nostre Impostazioni</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
                  <h4 className="font-medium text-blue-800 mb-3">Centro Preferenze Cookie</h4>
                  <p className="text-blue-700 text-sm mb-4">
                    Quando sarà implementato il sistema di gestione cookie, qui sarà disponibile 
                    un pannello per personalizzare le preferenze.
                  </p>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3">
                      <input type="checkbox" checked disabled className="rounded border-zinc-300" />
                      <span className="text-sm">Cookie strettamente necessari (sempre attivi)</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="rounded border-zinc-300" />
                      <span className="text-sm">Cookie di performance e analitici</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="rounded border-zinc-300" />
                      <span className="text-sm">Cookie di funzionalità</span>
                    </label>
                  </div>
                  <p className="text-xs text-blue-600 mt-4">
                    * Questa è un&apos;anteprima dell&apos;interfaccia. La funzionalità sarà attivata nell&apos;implementazione finale.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2>Conseguenze della Disattivazione dei Cookie</h2>
                <p>
                  La disattivazione di alcuni tipi di cookie può influire sull&apos;esperienza di navigazione:
                </p>
                <ul>
                  <li><strong>Cookie necessari:</strong> Il sito potrebbe non funzionare correttamente</li>
                  <li><strong>Cookie analitici:</strong> Non potremo migliorare il sito basandoci sui dati di utilizzo</li>
                  <li><strong>Cookie di funzionalità:</strong> Alcune preferenze non saranno memorizzate</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>Cookie e Dispositivi Mobili</h2>
                <p>
                  Sui dispositivi mobili, la gestione dei cookie avviene attraverso le impostazioni 
                  del browser mobile utilizzato. Per le app native (se disponibili), 
                  le preferenze sono gestite attraverso le impostazioni dell&apos;applicazione.
                </p>
              </section>

              <section className="mb-8">
                <h2>Aggiornamenti della Cookie Policy</h2>
                <p>
                  Questa Cookie Policy può essere aggiornata periodicamente per riflettere 
                  cambiamenti nelle nostre pratiche o per altri motivi operativi, legali o normativi.
                </p>
              </section>

              <section className="mb-8">
                <h2>Contatti</h2>
                <p>
                  Per domande su questa Cookie Policy o sui cookie utilizzati:
                </p>
                <p>
                  <strong>DidaFlow</strong><br />
                  Email: <a href="mailto:hello@didaflow.ai" className="text-blue-600 hover:text-blue-700">hello@didaflow.ai</a><br />
                  Bologna, Italia
                </p>
                <p>
                  Per questioni specifiche sulla privacy: 
                  <a href="mailto:rpd@fondazione-fair.it" className="text-blue-600 hover:text-blue-700 ml-1">
                    rpd@fondazione-fair.it
                  </a>
                </p>
              </section>

              <section className="mb-8">
                <h2>Link Utili</h2>
                <ul>
                  <li>
                    <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-700">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service" className="text-blue-600 hover:text-blue-700">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <a 
                      href="https://www.allaboutcookies.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      Maggiori informazioni sui cookie (All About Cookies)
                    </a>
                  </li>
                </ul>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-zinc-200">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/"
                  className="inline-flex items-center justify-center rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-50 focus-ring"
                >
                  ← Torna alla Home
                </Link>
                <Link 
                  href="/contatti"
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white text-sm font-medium hover:bg-blue-700 focus-ring"
                >
                  Contattaci
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-zinc-900 text-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <Link href="/" className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-semibold">DidaFlow</span>
            </Link>
            <p className="text-zinc-400 text-sm">
              © {new Date().getFullYear()} DidaFlow. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}