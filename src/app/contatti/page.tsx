import Link from "next/link";
import Icon from "../../components/Icon";
import {
  faEnvelope,
  faMapMarkerAlt,
  faBullseye,
  faGraduationCap,
  faBuilding,
  faTools,
  faFile,
  faQuestionCircle,
  faHome
} from '../../lib/fontawesome';

export const metadata = {
  title: "Contatti | DidaFlow - Academic & Training Intelligence",
  description: "Contatta il team DidaFlow per una demo personalizzata o per richiedere informazioni sui nostri servizi di Academic & Training Intelligence.",
};

export default function Contatti() {
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
              <li><Link className="focus-ring" href="/#soluzione">Soluzione</Link></li>
              <li><Link className="focus-ring text-blue-600 font-medium" href="/contatti">Contatti</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 py-12 sm:py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="mb-6 text-blue-600">Contatta DidaFlow</h1>
            <p className="text-lg text-zinc-700 max-w-2xl mx-auto">
              Sei pronto a trasformare i tuoi dati formativi in azioni strategiche? 
              Contattaci per una demo personalizzata o per maggiori informazioni.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="mb-8">Informazioni di contatto</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon icon={faEnvelope} className="text-blue-600" size="lg" aria-hidden />
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Email</h3>
                      <p className="text-zinc-700">
                        <a href="mailto:hello@didaflow.ai" className="text-blue-600 hover:text-blue-700 focus-ring">
                          hello@didaflow.ai
                        </a>
                      </p>
                      <p className="text-sm text-zinc-600 mt-1">
                        Risponderemo entro 24 ore lavorative
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon icon={faMapMarkerAlt} className="text-blue-600" size="lg" aria-hidden />
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Sede</h3>
                      <p className="text-zinc-700">Bologna, Italia</p>
                      <p className="text-sm text-zinc-600 mt-1">
                        Spin-off accreditato Università di Bologna
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon icon={faBullseye} className="text-blue-600" size="lg" aria-hidden />
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Demo personalizzata</h3>
                      <p className="text-zinc-700 mb-3">
                        Prenota una demo gratuita di 30 minuti per vedere DidaFlow in azione
                      </p>
                      <Link 
                        href="mailto:hello@didaflow.ai?subject=Richiesta Demo DidaFlow"
                        className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white text-sm font-medium hover:bg-blue-700 focus-ring"
                      >
                        Prenota Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="mb-8">Cosa possiamo fare per te</h2>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-lg border border-zinc-200 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon icon={faGraduationCap} className="text-blue-600" size="lg" aria-hidden />
                      <h3 className="font-medium text-blue-600">Università e Atenei</h3>
                    </div>
                    <p className="text-zinc-700 text-sm">
                      Analisi predittive su dropout, performance degli studenti, 
                      ottimizzazione dell&apos;offerta formativa e monitoraggio KPI istituzionali.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg border border-zinc-200 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon icon={faBuilding} className="text-blue-600" size="lg" aria-hidden />
                      <h3 className="font-medium text-blue-600">Business School</h3>
                    </div>
                    <p className="text-zinc-700 text-sm">
                      Intelligence per programmi executive, analisi del ROI della formazione, 
                      placement tracking e alumni engagement.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg border border-zinc-200 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon icon={faTools} className="text-blue-600" size="lg" aria-hidden />
                      <h3 className="font-medium text-blue-600">Formazione Professionale</h3>
                    </div>
                    <p className="text-zinc-700 text-sm">
                      Matching competenze-mercato del lavoro, ottimizzazione percorsi formativi 
                      e misurazione efficacia didattica.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                    <h3 className="font-medium text-blue-700 mb-3">📊 Consulenza personalizzata</h3>
                    <p className="text-blue-700 text-sm mb-4">
                      Ogni istituzione ha esigenze uniche. Offriamo consulenze su misura 
                      per identificare le migliori strategie data-driven per il tuo contesto.
                    </p>
                    <Link 
                      href="mailto:hello@didaflow.ai?subject=Richiesta Consulenza DidaFlow"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 focus-ring text-sm font-medium"
                    >
                      Richiedi consulenza →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-zinc-50 py-12 sm:py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-8">Supporto e risorse</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg border border-zinc-200 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Icon icon={faFile} className="text-zinc-600" size="lg" aria-hidden />
                  <h3 className="font-medium">Documentazione</h3>
                </div>
                <p className="text-zinc-700 text-sm mb-4">
                  Scarica la nostra scheda tecnica completa
                </p>
                <Link 
                  href="/docs/scheda-tecnica.pdf"
                  className="text-blue-600 hover:text-blue-700 focus-ring text-sm font-medium"
                >
                  Scarica PDF →
                </Link>
              </div>

              <div className="bg-white rounded-lg border border-zinc-200 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Icon icon={faQuestionCircle} className="text-zinc-600" size="lg" aria-hidden />
                  <h3 className="font-medium">FAQ</h3>
                </div>
                <p className="text-zinc-700 text-sm mb-4">
                  Risposte alle domande più frequenti
                </p>
                <Link 
                  href="/#faq"
                  className="text-blue-600 hover:text-blue-700 focus-ring text-sm font-medium"
                >
                  Vai alle FAQ →
                </Link>
              </div>

              <div className="bg-white rounded-lg border border-zinc-200 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Icon icon={faHome} className="text-zinc-600" size="lg" aria-hidden />
                  <h3 className="font-medium">Torna alla Home</h3>
                </div>
                <p className="text-zinc-700 text-sm mb-4">
                  Scopri di più sulla nostra soluzione
                </p>
                <Link 
                  href="/"
                  className="text-blue-600 hover:text-blue-700 focus-ring text-sm font-medium"
                >
                  Vai alla Home →
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