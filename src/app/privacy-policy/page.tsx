import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | DidaFlow",
  description: "Informativa sulla privacy e trattamento dei dati personali per i servizi DidaFlow - Academic & Training Intelligence platform.",
};

export default function PrivacyPolicy() {
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
              <h1 className="mb-4">Privacy Policy</h1>
              <p className="text-lg text-zinc-700">
                Informativa sulla privacy e trattamento dei dati personali
              </p>
              <p className="text-sm text-zinc-600 mt-2">
                Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
              </p>
            </header>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <span className="text-2xl">⚠️</span>
                </div>
                <div>
                  <h3 className="font-medium text-blue-800 mb-2">Nota importante</h3>
                  <p className="text-blue-700 text-sm">
                    Questa è una versione template della Privacy Policy. Prima della pubblicazione in produzione, 
                    sarà necessario personalizzarla con i dettagli specifici dell&apos;implementazione tecnica, 
                    dei fornitori utilizzati, e delle procedure interne di DidaFlow.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-zinc max-w-none">
              <section className="mb-8">
                <h2>1. Titolare del Trattamento</h2>
                <p>
                  Il Titolare del trattamento dei dati personali è:
                </p>
                <p>
                  <strong>DidaFlow</strong><br />
                  Spin-off Università di Bologna<br />
                  Sede: Bologna, Italia<br />
                  Email: <a href="mailto:hello@didaflow.ai" className="text-blue-600 hover:text-blue-700">hello@didaflow.ai</a>
                </p>
                <p>
                  Responsabile per la protezione dei dati (RPD): 
                  <a href="mailto:rpd@fondazione-fair.it" className="text-blue-600 hover:text-blue-700 ml-1">
                    rpd@fondazione-fair.it
                  </a>
                </p>
              </section>

              <section className="mb-8">
                <h2>2. Tipi di Dati Raccolti</h2>
                <p>
                  DidaFlow può raccogliere e trattare le seguenti categorie di dati personali:
                </p>
                
                <h3>2.1 Dati di Contatto</h3>
                <ul>
                  <li>Nome e cognome</li>
                  <li>Indirizzo email</li>
                  <li>Numero di telefono (se fornito)</li>
                  <li>Organizzazione di appartenenza</li>
                </ul>

                <h3>2.2 Dati di Utilizzo del Servizio</h3>
                <ul>
                  <li>Log di accesso e utilizzo della piattaforma</li>
                  <li>Indirizzo IP</li>
                  <li>Informazioni del browser e dispositivo</li>
                  <li>Dati di navigazione e interazione</li>
                </ul>

                <h3>2.3 Dati Educativi (per clienti istituzionali)</h3>
                <ul>
                  <li>Dati aggregati e anonimizzati su performance didattiche</li>
                  <li>Statistiche su enrollment e dropout</li>
                  <li>Metriche di engagement formativo</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>3. Finalità e Base Giuridica del Trattamento</h2>
                
                <h3>3.1 Fornitura del Servizio</h3>
                <p>
                  <strong>Finalità:</strong> Erogazione dei servizi di Academic & Training Intelligence<br />
                  <strong>Base giuridica:</strong> Esecuzione del contratto (Art. 6(1)(b) GDPR)
                </p>

                <h3>3.2 Comunicazioni e Supporto</h3>
                <p>
                  <strong>Finalità:</strong> Risposta a richieste, supporto tecnico, aggiornamenti sul servizio<br />
                  <strong>Base giuridica:</strong> Interesse legittimo (Art. 6(1)(f) GDPR) o consenso
                </p>

                <h3>3.3 Miglioramento del Servizio</h3>
                <p>
                  <strong>Finalità:</strong> Analisi e miglioramento delle funzionalità della piattaforma<br />
                  <strong>Base giuridica:</strong> Interesse legittimo (Art. 6(1)(f) GDPR)
                </p>

                <h3>3.4 Adempimenti Legali</h3>
                <p>
                  <strong>Finalità:</strong> Rispetto degli obblighi normativi e fiscali<br />
                  <strong>Base giuridica:</strong> Adempimento di obblighi legali (Art. 6(1)(c) GDPR)
                </p>
              </section>

              <section className="mb-8">
                <h2>4. Condivisione dei Dati</h2>
                <p>
                  I dati personali possono essere condivisi con:
                </p>
                <ul>
                  <li><strong>Fornitori di servizi tecnologici:</strong> Per hosting, backup e manutenzione della piattaforma</li>
                  <li><strong>Partner accademici:</strong> Nel rispetto degli accordi di collaborazione con l&apos;Università di Bologna</li>
                  <li><strong>Autorità competenti:</strong> Quando richiesto dalla legge</li>
                </ul>
                <p>
                  Tutti i fornitori esterni sono selezionati in base a rigorosi criteri di sicurezza e 
                  sono vincolati da accordi di trattamento dati conformi al GDPR.
                </p>
              </section>

              <section className="mb-8">
                <h2>5. Trasferimenti Internazionali</h2>
                <p>
                  I dati personali sono trattati principalmente all&apos;interno dello Spazio Economico Europeo (SEE). 
                  Eventuali trasferimenti verso paesi terzi sono effettuati solo con adeguate garanzie di protezione, 
                  incluse clausole contrattuali standard approvate dalla Commissione Europea.
                </p>
              </section>

              <section className="mb-8">
                <h2>6. Conservazione dei Dati</h2>
                <p>
                  I dati personali sono conservati per il tempo necessario alle finalità del trattamento:
                </p>
                <ul>
                  <li><strong>Dati di contatto:</strong> Fino alla revoca del consenso o cessazione del rapporto</li>
                  <li><strong>Dati contrattuali:</strong> Per la durata del contratto + 10 anni (obblighi fiscali)</li>
                  <li><strong>Log di sicurezza:</strong> Massimo 12 mesi</li>
                  <li><strong>Dati aggregati/anonimi:</strong> Senza limiti temporali</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>7. Diritti dell&apos;Interessato</h2>
                <p>
                  In conformità al GDPR, gli utenti hanno diritto a:
                </p>
                <ul>
                  <li><strong>Accesso:</strong> Ottenere informazioni sui propri dati trattati</li>
                  <li><strong>Rettifica:</strong> Correggere dati inesatti o incompleti</li>
                  <li><strong>Cancellazione:</strong> Richiedere la cancellazione dei propri dati</li>
                  <li><strong>Limitazione:</strong> Limitare il trattamento in specifiche circostanze</li>
                  <li><strong>Portabilità:</strong> Ricevere i propri dati in formato strutturato</li>
                  <li><strong>Opposizione:</strong> Opporsi al trattamento basato su interesse legittimo</li>
                  <li><strong>Revoca del consenso:</strong> Quando il trattamento è basato su consenso</li>
                </ul>
                <p>
                  Per esercitare questi diritti, contattare: 
                  <a href="mailto:hello@didaflow.ai" className="text-blue-600 hover:text-blue-700 ml-1">
                    hello@didaflow.ai
                  </a>
                </p>
              </section>

              <section className="mb-8">
                <h2>8. Sicurezza dei Dati</h2>
                <p>
                  DidaFlow implementa misure tecniche e organizzative appropriate per garantire 
                  un livello di sicurezza adeguato al rischio, incluse:
                </p>
                <ul>
                  <li>Crittografia dei dati in transito e a riposo</li>
                  <li>Controlli di accesso basati su ruoli</li>
                  <li>Monitoraggio continuo della sicurezza</li>
                  <li>Backup regolari e procedure di disaster recovery</li>
                  <li>Formazione periodica del personale sulla protezione dati</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>9. Cookie e Tecnologie Similari</h2>
                <p>
                  Il sito utilizza cookie e tecnologie similari. Per maggiori informazioni, 
                  consultare la nostra{" "}
                  <Link href="/cookie-policy" className="text-blue-600 hover:text-blue-700">
                    Cookie Policy
                  </Link>.
                </p>
              </section>

              <section className="mb-8">
                <h2>10. Modifiche alla Privacy Policy</h2>
                <p>
                  Questa Privacy Policy può essere aggiornata periodicamente. Le modifiche sostanziali 
                  saranno comunicate agli utenti tramite email o attraverso avviso sulla piattaforma.
                </p>
              </section>

              <section className="mb-8">
                <h2>11. Contatti e Reclami</h2>
                <p>
                  Per domande sulla privacy o per esercitare i propri diritti:
                </p>
                <p>
                  <strong>DidaFlow</strong><br />
                  Email: <a href="mailto:hello@didaflow.ai" className="text-blue-600 hover:text-blue-700">hello@didaflow.ai</a><br />
                  RPD: <a href="mailto:rpd@fondazione-fair.it" className="text-blue-600 hover:text-blue-700">rpd@fondazione-fair.it</a>
                </p>
                <p>
                  Gli interessati hanno diritto di proporre reclamo al Garante per la protezione 
                  dei dati personali (www.gpdp.it) in caso di trattamento illecito dei dati.
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
                  Contattaci per domande
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