
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const LegalNotice = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Impressum / 
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent"> Legal Notice</span>
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-700/50 space-y-12">
            
            {/* German Section */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Impressum (Deutsch)</h2>
              
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Unternehmen</h3>
                  <p>
                    nproxima UG (haftungsbeschränkt)<br />
                    Sudetenstrasse 32<br />
                    85622 Feldkirchen<br />
                    Deutschland
                  </p>
                  <p className="mt-3">
                    Tel.: +491738649000<br />
                    E-Mail: contact@nproxima.ai
                  </p>
                  <p className="mt-3">
                    Registergericht: Amtsgericht München<br />
                    Registernummer: HRB 299460
                  </p>
                  <p className="mt-3">
                    Geschäftsführer: Ralph de Wargny, Huseyin Levent Akyil
                  </p>
                  <p className="mt-3">
                    Plattform der EU-Kommission zur Online-Streitbeilegung: <a href="https://ec.europa.eu/odr" className="text-primary-400 hover:text-primary-300" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/odr</a>
                  </p>
                  <p className="mt-3">
                    Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Haftung für Inhalte</h3>
                  <p>
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                  </p>
                  <p className="mt-3">
                    Übersetzung, Druck, Vervielfältigung sowie Speicherung in Datenverarbeitungsanlagen nur mit ausdrücklicher Genehmigung der NProxima UG (haftungsbeschränkt). Alle genannten Marken und Logos sind Marken der entsprechenden Eigentümer oder der NProxima UG (haftungsbeschränkt).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Haftung für Links</h3>
                  <p>
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Urheberrecht</h3>
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Bildquellen</h3>
                  <p>
                    Die verwendeten Bilder auf unsere Webseiten sind Produkt-Designs oder Bildschirmfoto, andere Bilder wurden mit KI generiert.
                  </p>
                </div>
              </div>
            </div>

            {/* English Section */}
            <div className="border-t border-gray-700 pt-12">
              <h2 className="text-3xl font-bold text-white mb-8">Legal Notice (English)</h2>
              
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Company</h3>
                  <p>
                    nproxima UG (haftungsbeschränkt)<br />
                    Sudetenstrasse 32<br />
                    85622 Feldkirchen<br />
                    Deutschland
                  </p>
                  <p className="mt-3">
                    Tel.: +491738649000<br />
                    E-Mail: contact@nproxima.ai
                  </p>
                  <p className="mt-3">
                    Registered at the commercial courts of Munich (Germany) under registration number: HRB 299460
                  </p>
                  <p className="mt-3">
                    Managing Directors: Ralph de Wargny, Huseyin Levent Akyil
                  </p>
                  <p className="mt-3">
                    Online Dispute Resolution platform from the EU commission: <a href="https://ec.europa.eu/odr" className="text-primary-400 hover:text-primary-300" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/odr</a>
                  </p>
                  <p className="mt-3">
                    We are neither obliged nor willing to participate in a dispute resolution procedure before a consumer arbitration board.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Liability for content</h3>
                  <p>
                    The contents of our pages were created with the greatest care. However, we cannot assume any liability for the correctness, completeness and topicality of the contents. As a service provider, we are liable pursuant to § 7 para.1 DDG is responsible for its own content on these pages in accordance with the general laws. According to §§ 8 to 10 DDG, however, we are not obliged as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information in accordance with the general laws remain unaffected by this. However, liability in this respect is only possible from the time of knowledge of a specific infringement. As soon as we become aware of such infringements, we will remove this content immediately.
                  </p>
                  <p className="mt-3">
                    Translation, printing, duplication and storage in data processing systems of this publication are only permitted with the express permission of NProxima UG (haftungsbeschränkt). All trademarks and logos used or mentioned are trademarks of their respective owners or of NProxima UG (haftungsbeschränkt).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Liability for links</h3>
                  <p>
                    Our website contains links to external third-party websites over which we have no control. Therefore, we cannot accept any liability for this third-party content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not apparent at the time of linking. However, permanent monitoring of the content of the linked pages is not reasonable without concrete evidence of a violation of the law. If we become aware of any legal infringements, we will remove such links immediately.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Copyright</h3>
                  <p>
                    The content and works provided by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution or any form of exploitation outside the limits of copyright law require the prior written consent of the respective author or creator. Downloads and copies of these pages are only permitted for private, non-commercial use. Insofar as the content on this site has not been created by the operator, the copyright of third parties is respected. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Should we become aware of any such infringements, we will remove such content immediately.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Image sources</h3>
                  <p>
                    The images used on our website are product designs or screenshots and while others were generated by AI.
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

export default LegalNotice;
