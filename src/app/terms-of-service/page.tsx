import Link from "next/link";

export const metadata = {
  title: "Terms of Service | DidaFlow",
  description: "Termini e condizioni d'uso dei servizi DidaFlow - Academic & Training Intelligence platform.",
};

export default function TermsOfService() {
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
              <h1 className="mb-4">Terms of Service</h1>
              <p className="text-lg text-zinc-700">
                Termini e condizioni d&apos;uso dei servizi DidaFlow
              </p>
              <p className="text-sm text-zinc-600 mt-2">
                Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
              </p>
            </header>

            <div className="prose prose-zinc max-w-none">
              <section className="mb-8">
                <h2>1. Accettazione dei Termini</h2>
                <p>
                  Accedendo e utilizzando i servizi DidaFlow (il &quot;Servizio&quot;), l&apos;utente accetta di essere vincolato 
                  da questi Termini di Servizio (&quot;Termini&quot;). Se non si accettano tutti i termini e le condizioni 
                  di questo accordo, non è possibile utilizzare il Servizio.
                </p>
              </section>

              <section className="mb-8">
                <h2>2. Descrizione del Servizio</h2>
                <p>
                  DidaFlow è una piattaforma di Academic & Training Intelligence che fornisce:
                </p>
                <ul>
                  <li>Analisi e visualizzazione di dati educativi</li>
                  <li>Dashboard per il monitoraggio delle performance formative</li>
                  <li>Strumenti di business intelligence per istituzioni educative</li>
                  <li>Servizi di consulenza specializzata</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>3. Utilizzo del Servizio</h2>
                <h3>3.1 Licenza d&apos;uso</h3>
                <p>
                  DidaFlow concede all&apos;utente una licenza limitata, non esclusiva, non trasferibile per utilizzare 
                  il Servizio in conformità con questi Termini.
                </p>
                
                <h3>3.2 Restrizioni</h3>
                <p>L&apos;utente si impegna a non:</p>
                <ul>
                  <li>Utilizzare il Servizio per scopi illegali o non autorizzati</li>
                  <li>Tentare di accedere a dati non autorizzati</li>
                  <li>Interferire con il funzionamento del Servizio</li>
                  <li>Copiare, modificare o distribuire il software o i contenuti del Servizio</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>4. Account Utente</h2>
                <p>
                  L&apos;accesso al Servizio può richiedere la creazione di un account. L&apos;utente è responsabile per:
                </p>
                <ul>
                  <li>Mantenere la riservatezza delle credenziali di accesso</li>
                  <li>Tutte le attività che avvengono sotto il proprio account</li>
                  <li>Notificare immediatamente DidaFlow di qualsiasi uso non autorizzato</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>5. Protezione dei Dati</h2>
                <p>
                  DidaFlow si impegna a proteggere i dati degli utenti in conformità con:
                </p>
                <ul>
                  <li>Regolamento Generale sulla Protezione dei Dati (GDPR)</li>
                  <li>Normative italiane ed europee sulla privacy</li>
                  <li>Standard internazionali di sicurezza informatica</li>
                </ul>
                <p>
                  Per maggiori dettagli, consultare la nostra{" "}
                  <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-700">
                    Privacy Policy
                  </Link>.
                </p>
              </section>

              <section className="mb-8">
                <h2>6. Proprietà Intellettuale</h2>
                <p>
                  Il Servizio e i suoi contenuti originali, funzionalità e funzioni sono e rimarranno 
                  proprietà esclusiva di DidaFlow e dei suoi licenziatari. Il Servizio è protetto da 
                  copyright, marchi commerciali e altre leggi.
                </p>
              </section>

              <section className="mb-8">
                <h2>7. Limitazione di Responsabilità</h2>
                <p>
                  DidaFlow non sarà responsabile per eventuali danni indiretti, incidentali, speciali, 
                  consequenziali o punitivi, inclusa la perdita di profitti, dati, uso, avviamento o 
                  altre perdite intangibili.
                </p>
              </section>

              <section className="mb-8">
                <h2>8. Modifiche ai Termini</h2>
                <p>
                  DidaFlow si riserva il diritto di modificare questi Termini in qualsiasi momento. 
                  Le modifiche entreranno in vigore immediatamente dopo la pubblicazione. 
                  L&apos;uso continuato del Servizio dopo eventuali modifiche costituisce accettazione dei nuovi Termini.
                </p>
              </section>

              <section className="mb-8">
                <h2>9. Risoluzione</h2>
                <p>
                  Questi Termini rimangono in vigore fino alla risoluzione da parte dell&apos;utente o di DidaFlow. 
                  DidaFlow può sospendere o terminare l&apos;accesso al Servizio immediatamente, senza preavviso, 
                  per qualsiasi motivo.
                </p>
              </section>

              <section className="mb-8">
                <h2>10. Legge Applicabile</h2>
                <p>
                  Questi Termini sono disciplinati e interpretati in conformità alle leggi italiane. 
                  Qualsiasi controversia sarà di competenza esclusiva dei tribunali di Bologna, Italia.
                </p>
              </section>

              <section className="mb-8">
                <h2>11. Contatti</h2>
                <p>
                  Per domande sui presenti Termini di Servizio, contattare:
                </p>
                <p>
                  <strong>DidaFlow</strong><br />
                  Email: <a href="mailto:hello@didaflow.ai" className="text-blue-600 hover:text-blue-700">hello@didaflow.ai</a><br />
                  Bologna, Italia
                </p>
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