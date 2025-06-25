import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Cookie
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent"> Policy</span>
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-700/50 space-y-8">
            
            {/* English Version */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Cookie Policy (EU)</h2>
              
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  This Cookie Policy was last updated on June 25, 2025 and applies to citizens and legal permanent residents of the European Economic Area and Switzerland.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">1. Introduction</h3>
                  <p>
                    Our website, <a href="https://co-mind.ai" className="text-primary-400 hover:text-primary-300">https://co-mind.ai</a> (hereinafter: "the website") uses cookies and other related technologies (for convenience all technologies are referred to as "cookies"). Cookies are also placed by third parties we have engaged. In the document below we inform you about the use of cookies on our website.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2. What are cookies?</h3>
                  <p>
                    A cookie is a small simple file that is sent along with pages of this website and stored by your browser on the hard drive of your computer or another device. The information stored therein may be returned to our servers or to the servers of the relevant third parties during a subsequent visit.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">3. Consent Management</h3>
                  <p>
                    When you visit our website for the first time, we will show you a banner with information about cookies. You can choose to accept all cookies or decline optional ones. Your preference is stored in your browser's local storage as 'cookieConsent' to remember your choice for future visits.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4. Types of Cookies We Use</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h4 className="text-lg font-medium text-white mb-2">4.1 Essential Cookies</h4>
                      <p className="text-sm text-gray-300 mb-2">These cookies are necessary for the website to function properly.</p>
                      <ul className="text-sm text-gray-400 space-y-1 ml-4 list-disc">
                        <li><strong>cookieConsent</strong> - Stores your cookie preference choice (localStorage)</li>
                        <li><strong>React Application Cookies</strong> - Session management and application state</li>
                      </ul>
                      <p className="text-xs text-green-400 mt-2">Always active - No consent required</p>
                    </div>

                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h4 className="text-lg font-medium text-white mb-2">4.2 Analytics Cookies (Google Analytics)</h4>
                      <p className="text-sm text-gray-300 mb-2">These cookies help us understand how visitors interact with our website.</p>
                      <ul className="text-sm text-gray-400 space-y-1 ml-4 list-disc">
                        <li><strong>_ga</strong> - Distinguishes unique users (expires: 2 years)</li>
                        <li><strong>_ga_*</strong> - Used to persist session state (expires: 2 years)</li>
                        <li><strong>_gid</strong> - Distinguishes unique users (expires: 24 hours)</li>
                        <li><strong>_gat</strong> - Used to throttle request rate (expires: 1 minute)</li>
                      </ul>
                      <p className="text-xs text-blue-400 mt-2">Requires consent - Only loaded when you accept optional cookies</p>
                    </div>

                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h4 className="text-lg font-medium text-white mb-2">4.3 Third-Party Service Cookies</h4>
                      <p className="text-sm text-gray-300 mb-2">Cookies from external services integrated into our website.</p>
                      <ul className="text-sm text-gray-400 space-y-1 ml-4 list-disc">
                        <li><strong>Calendly</strong> - Embedded scheduling widget cookies for booking functionality</li>
                        <li><strong>Calendly tracking cookies</strong> - Analytics and performance for scheduling features</li>
                      </ul>
                      <p className="text-xs text-orange-400 mt-2">Functional cookies - Always active for service functionality</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">5. Managing Your Cookie Preferences</h3>
                  <p className="mb-3">You have several options to manage cookies:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Our Cookie Banner:</strong> Accept all or decline optional cookies when you first visit</li>
                    <li><strong>Browser Settings:</strong> Disable cookies entirely through your browser settings</li>
                    <li><strong>Individual Control:</strong> Essential cookies cannot be disabled as they are necessary for website functionality</li>
                  </ul>
                  <p className="mt-3 text-sm text-yellow-400">
                    Note: Disabling cookies may impact website functionality and your user experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">6. Placed cookies</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h4 className="text-lg font-medium text-white mb-1">React/Vite Application</h4>
                      <p className="text-sm text-gray-400 mb-2">Functional</p>
                      <p className="text-sm">Essential cookies for the React application functionality, session management, and user preferences storage.</p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h4 className="text-lg font-medium text-white mb-1">Analytics & Performance</h4>
                      <p className="text-sm text-gray-400 mb-2">Functional</p>
                      <p className="text-sm">Cookies used to monitor website performance and user interaction analytics.</p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h4 className="text-lg font-medium text-white mb-1">Third-party Services</h4>
                      <p className="text-sm text-gray-400 mb-2">Functional</p>
                      <p className="text-sm">Cookies from external services integrated into our React application for enhanced functionality.</p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h4 className="text-lg font-medium text-white mb-1">Miscellaneous</h4>
                      <p className="text-sm text-gray-400 mb-2">Purpose pending investigation</p>
                      <p className="text-sm">Other cookies that may be set by various components of our web application.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">7. Consent</h3>
                  <p>
                    When you visit our website for the first time, we will show you a pop-up with an explanation about cookies. As soon as you click on "Save preferences", you consent to us using the categories of cookies and plug-ins you selected in the pop-up, as described in this Cookie Policy. You can disable the use of cookies via your browser, but please note that our website may no longer work properly.
                  </p>
                  <div className="mt-4">
                    <h4 className="text-lg font-medium text-white mb-2">7.1 Manage your consent settings</h4>
                    <p>
                      You have loaded the Cookie Policy without javascript support. On AMP, you can use the manage consent button on the bottom of the page.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">8. Enabling/disabling and deleting cookies</h3>
                  <p>
                    You can use your internet browser to automatically or manually delete cookies. You can also specify that certain cookies may not be placed. Another option is to change the settings of your internet browser so that you receive a message each time a cookie is placed. For more information about these options, please refer to the instructions in the Help section of your browser.
                  </p>
                  <p className="mt-3">
                    Please note that our website may not work properly if all cookies are disabled. If you do delete the cookies in your browser, they will be placed again after your consent when you visit our website again.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">9. Your rights with respect to personal data</h3>
                  <p className="mb-3">You have the following rights with respect to your personal data:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>You have the right to know why your personal data is needed, what will happen to it, and how long it will be retained for.</li>
                    <li><strong>Right of access:</strong> You have the right to access your personal data that is known to us.</li>
                    <li><strong>Right to rectification:</strong> you have the right to supplement, correct, have deleted or blocked your personal data whenever you wish.</li>
                    <li>If you give us your consent to process your data, you have the right to revoke that consent and to have your personal data deleted.</li>
                    <li><strong>Right to transfer your data:</strong> you have the right to request all your personal data from the controller and transfer it in its entirety to another controller.</li>
                    <li><strong>Right to object:</strong> you may object to the processing of your data. We comply with this, unless there are justified grounds for processing.</li>
                  </ul>
                  <p className="mt-3">
                    To exercise these rights, please contact us. Please refer to the contact details at the bottom of this Cookie Policy. If you have a complaint about how we handle your data, we would like to hear from you, but you also have the right to submit a complaint to the supervisory authority (the Data Protection Authority).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">10. Contact details</h3>
                  <p className="mb-3">For questions and/or comments about our Cookie Policy and this statement, please contact us by using the following contact details:</p>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <p>
                      nproxima UG (haftungsbeschränkt)<br />
                      Sudetenstr. 32, 85622, Feldkirchen, Germany<br />
                      Germany
                    </p>
                    <p className="mt-3">
                      Website: <a href="https://co-mind.ai" className="text-primary-400 hover:text-primary-300">https://co-mind.ai</a><br />
                      Email: <a href="mailto:contact@nproxima.ai" className="text-primary-400 hover:text-primary-300">contact@nproxima.ai</a><br />
                      Phone number: <a href="tel:+491738649000" className="text-primary-400 hover:text-primary-300">+491738649000</a>
                    </p>
                  </div>
                  <p className="mt-4 text-sm text-gray-400">
                    This Cookie Policy was synchronized with cookiedatabase.org on April 9, 2025.
                  </p>
                </div>
              </div>
            </div>

            {/* German Version */}
            <div className="mt-16 pt-8 border-t border-gray-700/50">
              <h2 className="text-3xl font-bold text-white mb-8">Cookie-Richtlinie (EU)</h2>
              
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  Diese Cookie-Richtlinie wurde zuletzt am 25. Juni 2025 aktualisiert und gilt für Bürger und Personen mit dauerhaftem Aufenthaltsrecht im Europäischen Wirtschaftsraum und der Schweiz.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">1. Einführung</h3>
                  <p>
                    Unsere Website, <a href="https://co-mind.ai" className="text-primary-400 hover:text-primary-300">https://co-mind.ai</a> (nachfolgend: "die Website") verwendet Cookies und andere verwandte Technologien (der Einfachheit halber werden alle Technologien als "Cookies" bezeichnet). Cookies werden auch von Dritten platziert, die wir beauftragt haben. Im folgenden Dokument informieren wir Sie über die Verwendung von Cookies auf unserer Website.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2. Was sind Cookies?</h3>
                  <p>
                    Ein Cookie ist eine kleine, einfache Datei, die zusammen mit den Seiten dieser Website gesendet und von Ihrem Browser auf der Festplatte Ihres Computers oder einem anderen Gerät gespeichert wird. Die darin gespeicherten Informationen können bei einem späteren Besuch an unsere Server oder an die Server der entsprechenden Dritten zurückgesendet werden.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">3. Einverständnisverwaltung</h3>
                  <p>
                    Wenn Sie unsere Website zum ersten Mal besuchen, zeigen wir Ihnen ein Banner mit Informationen über Cookies. Sie können wählen, alle Cookies zu akzeptieren oder optionale abzulehnen. Ihre Präferenz wird im lokalen Speicher Ihres Browsers als 'cookieConsent' gespeichert, um sich Ihre Wahl für zukünftige Besuche zu merken.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4. Arten von Cookies, die wir verwenden</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h4 className="text-lg font-medium text-white mb-2">4.1 Wesentliche Cookies</h4>
                      <p className="text-sm text-gray-300 mb-2">Diese Cookies sind für das ordnungsgemäße Funktionieren der Website erforderlich.</p>
                      <ul className="text-sm text-gray-400 space-y-1 ml-4 list-disc">
                        <li><strong>cookieConsent</strong> - Speichert Ihre Cookie-Präferenz (localStorage)</li>
                        <li><strong>React-Anwendungs-Cookies</strong> - Sitzungsverwaltung und Anwendungsstatus</li>
                      </ul>
                      <p className="text-xs text-green-400 mt-2">Immer aktiv - Keine Einwilligung erforderlich</p>
                    </div>

                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h4 className="text-lg font-medium text-white mb-2">4.2 Analyse-Cookies (Google Analytics)</h4>
                      <p className="text-sm text-gray-300 mb-2">Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.</p>
                      <ul className="text-sm text-gray-400 space-y-1 ml-4 list-disc">
                        <li><strong>_ga</strong> - Unterscheidet eindeutige Benutzer (läuft ab: 2 Jahre)</li>
                        <li><strong>_ga_*</strong> - Wird verwendet, um den Sitzungszustand beizubehalten (läuft ab: 2 Jahre)</li>
                        <li><strong>_gid</strong> - Unterscheidet eindeutige Benutzer (läuft ab: 24 Stunden)</li>
                        <li><strong>_gat</strong> - Wird verwendet, um die Anfragerate zu drosseln (läuft ab: 1 Minute)</li>
                      </ul>
                      <p className="text-xs text-blue-400 mt-2">Erfordert Einwilligung - Wird nur geladen, wenn Sie optionale Cookies akzeptieren</p>
                    </div>

                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h4 className="text-lg font-medium text-white mb-2">4.3 Drittanbieter-Service-Cookies</h4>
                      <p className="text-sm text-gray-300 mb-2">Cookies von externen Diensten, die in unsere Website integriert sind.</p>
                      <ul className="text-sm text-gray-400 space-y-1 ml-4 list-disc">
                        <li><strong>Calendly</strong> - Eingebettete Terminplanungs-Widget-Cookies für Buchungsfunktionalität</li>
                        <li><strong>Calendly-Tracking-Cookies</strong> - Analyse und Leistung für Terminplanungsfunktionen</li>
                      </ul>
                      <p className="text-xs text-orange-400 mt-2">Funktionale Cookies - Immer aktiv für Service-Funktionalität</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">5. Verwaltung Ihrer Cookie-Präferenzen</h3>
                  <p className="mb-3">Sie haben mehrere Optionen zur Verwaltung von Cookies:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Unser Cookie-Banner:</strong> Akzeptieren Sie alle oder lehnen Sie optionale Cookies beim ersten Besuch ab</li>
                    <li><strong>Browser-Einstellungen:</strong> Deaktivieren Sie Cookies vollständig über Ihre Browser-Einstellungen</li>
                    <li><strong>Individuelle Kontrolle:</strong> Wesentliche Cookies können nicht deaktiviert werden, da sie für die Website-Funktionalität erforderlich sind</li>
                  </ul>
                  <p className="mt-3 text-sm text-yellow-400">
                    Hinweis: Das Deaktivieren von Cookies kann die Website-Funktionalität und Ihre Benutzererfahrung beeinträchtigen.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">6. Ihre Rechte bezüglich personenbezogener Daten</h3>
                  <p className="mb-3">Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Sie haben das Recht zu erfahren, warum Ihre personenbezogenen Daten benötigt werden, was damit geschieht und wie lange sie gespeichert werden.</li>
                    <li><strong>Auskunftsrecht:</strong> Sie haben das Recht auf Zugang zu Ihren uns bekannten personenbezogenen Daten.</li>
                    <li><strong>Berichtigungsrecht:</strong> Sie haben das Recht, Ihre personenbezogenen Daten jederzeit zu ergänzen, zu korrigieren, löschen zu lassen oder zu sperren.</li>
                    <li>Wenn Sie uns Ihre Einwilligung zur Datenverarbeitung geben, haben Sie das Recht, diese Einwilligung zu widerrufen und Ihre personenbezogenen Daten löschen zu lassen.</li>
                    <li><strong>Recht auf Datenübertragung:</strong> Sie haben das Recht, alle Ihre personenbezogenen Daten vom Verantwortlichen anzufordern und vollständig an einen anderen Verantwortlichen zu übertragen.</li>
                    <li><strong>Widerspruchsrecht:</strong> Sie können der Verarbeitung Ihrer Daten widersprechen. Wir entsprechen dem, es sei denn, es gibt berechtigte Gründe für die Verarbeitung.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">7. Kontaktdaten</h3>
                  <p className="mb-3">Bei Fragen und/oder Kommentaren zu unserer Cookie-Richtlinie und dieser Erklärung kontaktieren Sie uns bitte über folgende Kontaktdaten:</p>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <p>
                      nproxima UG (haftungsbeschränkt)<br />
                      Sudetenstr. 32, 85622, Feldkirchen, Deutschland<br />
                      Deutschland
                    </p>
                    <p className="mt-3">
                      Website: <a href="https://co-mind.ai" className="text-primary-400 hover:text-primary-300">https://co-mind.ai</a><br />
                      E-Mail: <a href="mailto:contact@nproxima.ai" className="text-primary-400 hover:text-primary-300">contact@nproxima.ai</a><br />
                      Telefonnummer: <a href="tel:+491738649000" className="text-primary-400 hover:text-primary-300">+491738649000</a>
                    </p>
                  </div>
                  <p className="mt-4 text-sm text-gray-400">
                    Diese Cookie-Richtlinie wurde am 25. Juni 2025 mit cookiedatabase.org synchronisiert.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
