
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const PrivacyNotice = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Privacy Notice / 
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent"> Datenschutzerklärung</span>
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-700/50 space-y-12">
            
            {/* English Section */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Privacy Policy (English)</h2>
              
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">1) Introduction and contact details of the person responsible</h3>
                  <p>
                    We are pleased that you are visiting our website and thank you for your interest. In the following privacy policy, we will inform you about how your personal data is handled when you use our website. Personal data is all data with which you can be personally identified.
                  </p>
                  <p className="mt-3">
                    The person responsible for data processing on this website within the meaning of the General Data Protection Regulation (GDPR) is the following:
                  </p>
                  <p className="mt-3">
                    nproxima UG (haftungsbeschränkt)<br />
                    Sudetenstrasse 32<br />
                    85622 Feldkirchen<br />
                    Deutschland<br />
                    Tel.: +491738649000<br />
                    E-Mail: contact@nproxima.ai
                  </p>
                  <p className="mt-3">
                    The person responsible for the processing of personal data is the natural or legal person who alone or jointly with others decides on the purposes and means of processing personal data.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2) Data collection when visiting our website</h3>
                  <p>
                    <strong>2.1</strong> If you use our website for information purposes only, i.e. if you do not register or otherwise provide us with information, we only collect data that your browser transmits to the site server (so-called "server log files"). When you access our website, we collect the following data, which is technically necessary for us to display the website to you:
                  </p>
                  <ul className="mt-3 list-disc list-inside space-y-1">
                    <li>The website you visited</li>
                    <li>Date and time of access</li>
                    <li>Amount of data sent in bytes</li>
                    <li>Source/reference from which you accessed the site</li>
                    <li>Browser used</li>
                    <li>Operating system used</li>
                    <li>IP address used (if applicable: in anonymized form)</li>
                  </ul>
                  <p className="mt-3">
                    The processing takes place in accordance with Art. 6 Para. 1 lit. f GDPR on the basis of our legitimate interest in improving the stability and functionality of our website. The data will not be passed on or used in any other way. However, we reserve the right to subsequently check the server log files if there are concrete indications of illegal use.
                  </p>
                  <p className="mt-3">
                    <strong>2.2</strong> For security reasons and to protect the transmission of personal data and other confidential content (e.g. orders or inquiries to the person responsible), this website uses SSL or TLS encryption. You can recognize an encrypted connection by the character string "https://" and the lock symbol in your browser line.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">3) Hosting & Content Delivery Network</h3>
                  <p>
                    For hosting our website and displaying the page content, we use a provider who provides its services itself or through selected subcontractors exclusively on servers within the European Union.
                  </p>
                  <p className="mt-3">
                    All data collected on our website is processed on these servers.
                  </p>
                  <p className="mt-3">
                    We have concluded a data processing agreement with the provider that ensures the protection of our website visitors' data and prohibits unauthorized disclosure to third parties.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4) Cookies</h3>
                  <p>
                    In order to make visiting our website attractive and to enable the use of certain functions, we use cookies, i.e. small text files that are stored on your device. Some of these cookies are automatically deleted after closing the browser (so-called "session cookies"), some of these cookies remain on your device for longer and enable the storage of page settings (so-called "persistent cookies"). In the latter case, you can find out the storage period from the overview of the cookie settings in your web browser.
                  </p>
                  <p className="mt-3">
                    If personal data is also processed by individual cookies used by us, the processing takes place in accordance with Art. 6 Para. 1 lit. b GDPR either to execute the contract, in accordance with Art. 6 Para. 1 lit. a GDPR in the event of consent being given, or in accordance with Art. 6 Para. 1 lit. f GDPR to protect our legitimate interests in the best possible functionality of the website and a customer-friendly and effective design of the page visit.
                  </p>
                  <p className="mt-3">
                    You can set your browser so that you are informed about the setting of cookies and can decide individually whether to accept them or exclude the acceptance of cookies for certain cases or in general.
                  </p>
                  <p className="mt-3">
                    Please note that if you do not accept cookies, the functionality of our website may be restricted.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">5) Contacting us</h3>
                  <p>
                    When you contact us (e.g. via contact form or email), personal data is collected. The data collected when you use a contact form can be seen in the respective contact form. This data is stored and used exclusively for the purpose of answering your request or for contacting you and the associated technical administration.
                  </p>
                  <p className="mt-3">
                    The legal basis for processing this data is our legitimate interest in answering your request in accordance with Art. 6 (1) (f) GDPR. If your contact is aimed at concluding a contract, an additional legal basis for processing is Art. 6 (1) (b) GDPR. Your data will be deleted after your request has been finally processed. This is the case if it can be inferred from the circumstances that the matter in question has been conclusively clarified and provided that there are no statutory retention periods to the contrary.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">6) Use of customer data for direct advertising</h3>
                  <p>
                    <strong>6.1 Registration for our email newsletter</strong>
                  </p>
                  <p className="mt-3">
                    If you subscribe to our email newsletter, we will regularly send you information about our offers. The only mandatory information for sending the newsletter is your email address. Providing further data is voluntary and is used to be able to address you personally. We use the so-called double opt-in procedure to send the newsletter. This means that we will only send you an email newsletter if you have expressly confirmed to us that you consent to receiving the newsletter. We will then send you a confirmation email asking you to confirm that you wish to receive the newsletter in the future by clicking on a corresponding link.
                  </p>
                  <p className="mt-3">
                    By activating the confirmation link, you give us your consent to use your personal data in accordance with Art. 6 Paragraph 1 Letter a of GDPR. When you register for the newsletter, we save your IP address entered by your Internet service provider (ISP) as well as the date and time of registration in order to be able to trace any possible misuse of your email address at a later date. The data we collect when you register for the newsletter is used exclusively for the purposes of advertising in the newsletter. You can unsubscribe from the newsletter at any time using the link provided for this purpose in the newsletter or by sending a corresponding message to the person responsible named at the beginning. After unsubscribing, your email address will be immediately deleted from our newsletter mailing list unless you have expressly consented to further use of your data or we reserve the right to use the data in any other way that is permitted by law and about which we will inform you in this declaration.
                  </p>
                  <p className="mt-3">
                    <strong>6.2 Sending the email newsletter to existing customers</strong>
                  </p>
                  <p className="mt-3">
                    If you have provided us with your email address when purchasing goods or services, we reserve the right to regularly send you offers for similar goods or services from our range to those you have already purchased by email. In accordance with Section 7 Paragraph 3 of the German Unfair Competition Act (UWG), we do not need to obtain your separate consent for this. The data processing is carried out solely on the basis of our legitimate interest in personalized direct advertising in accordance with Art. 6 Paragraph 1 Letter f of GDPR. If you have initially objected to the use of your email address for this purpose, we will not send you any emails.
                  </p>
                  <p className="mt-3">
                    You are entitled to object to the use of your email address for the aforementioned advertising purpose at any time with effect for the future by notifying the person responsible named at the beginning. You will only incur transmission costs according to the basic rates. After receipt of your objection, the use of your email address for advertising purposes will be stopped immediately.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">7) Rights of the data subject</h3>
                  <p>
                    <strong>7.1</strong> The applicable data protection law grants you the following rights as a data subject (rights to information and intervention) vis-à-vis the person responsible with regard to the processing of your personal data, whereby reference is made to the legal basis stated for the respective conditions for exercising them:
                  </p>
                  <ul className="mt-3 list-disc list-inside space-y-1">
                    <li>Right to information in accordance with Art. 15 GDPR;</li>
                    <li>Right to rectification in accordance with Art. 16 GDPR;</li>
                    <li>Right to erasure in accordance with Art. 17 GDPR;</li>
                    <li>Right to restriction of processing in accordance with Art. 18 GDPR;</li>
                    <li>Right to information in accordance with Art. 19 GDPR;</li>
                    <li>Right to data portability in accordance with Art. 20 GDPR;</li>
                    <li>Right to withdraw consent granted in accordance with Art. 7 Para. 3 GDPR;</li>
                    <li>Right to lodge a complaint in accordance with Art. 77 GDPR.</li>
                  </ul>
                  <p className="mt-3">
                    <strong>7.2 RIGHT TO OBJECT</strong>
                  </p>
                  <p className="mt-3 font-semibold">
                    IF WE PROCESS YOUR PERSONAL DATA BASED ON OUR OVERRIDING LEGITIMATE INTEREST AS PART OF A BALANCING OF INTERESTS, YOU HAVE THE RIGHT TO OBJECT TO THIS PROCESSING AT ANY TIME FOR REASONS ARISING FROM YOUR PARTICULAR SITUATION, WITH EFFECT FOR THE FUTURE.
                  </p>
                  <p className="mt-3 font-semibold">
                    IF YOU EXERCISE YOUR RIGHT TO OBJECT, WE WILL STOP PROCESSING THE DATA IN QUESTION. HOWEVER, WE RESERVE THE RIGHT TO FURTHER PROCESSING IF WE CAN PROVE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING WHICH OVERRIDE YOUR INTERESTS, FUNDAMENTAL RIGHTS AND FREEDOMS, OR IF THE PROCESSING SERVES THE ASSERTION, EXERCISE OR DEFENSE OF LEGAL CLAIMS.
                  </p>
                  <p className="mt-3 font-semibold">
                    IF YOUR PERSONAL DATA IS PROCESSED BY US IN ORDER TO CARRY OUT DIRECT MARKETING, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF PERSONAL DATA CONCERNING YOU FOR THE PURPOSE OF SUCH ADVERTISING. YOU CAN EXERCISE THE OBJECTION AS DESCRIBED ABOVE.
                  </p>
                  <p className="mt-3 font-semibold">
                    IF YOU EXERCISE YOUR RIGHT OF OBJECTION, WE WILL STOP PROCESSING THE DATA CONCERNED FOR DIRECT MARKETING PURPOSES.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">8) Duration of storage of personal data</h3>
                  <p>
                    The duration of storage of personal data is determined by the respective legal basis, the purpose of processing and – if applicable – also by the respective statutory retention period (e.g. retention periods under commercial and tax law).
                  </p>
                  <p className="mt-3">
                    When personal data is processed on the basis of an express consent in accordance with Art. 6 Para. 1 lit. a GDPR, the data concerned will be stored until you revoke your consent.
                  </p>
                  <p className="mt-3">
                    If there are statutory retention periods for data that are processed as part of legal or quasi-legal obligations on the basis of Art. 6 Para. 1 lit. b GDPR, these data will be routinely deleted after the retention periods have expired, provided that they are no longer required to fulfill or initiate a contract and/or we have no legitimate interest in continuing to store them.
                  </p>
                  <p className="mt-3">
                    When processing personal data on the basis of Art. 6 Para. 1 lit. f GDPR, these data will be stored until you exercise your right of objection in accordance with Art. 21 Para. 1 GDPR, unless we can demonstrate compelling legitimate reasons for the processing that outweigh your interests, rights and freedoms, or the processing serves to assert, exercise or defend legal claims.
                  </p>
                  <p className="mt-3">
                    When personal data is processed for the purpose of direct advertising on the basis of Art. 6 (1) (f) GDPR, this data will be stored until you exercise your right of objection in accordance with Art. 21 (2) GDPR.
                  </p>
                  <p className="mt-3">
                    Unless the other information in this declaration on specific processing situations indicates otherwise, stored personal data will be deleted when it is no longer necessary for the purposes for which it was collected or otherwise processed.
                  </p>
                </div>
              </div>
            </div>

            {/* German Section */}
            <div className="border-t border-gray-700 pt-12">
              <h2 className="text-3xl font-bold text-white mb-8">Datenschutzerklärung (Deutsch)</h2>
              
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">1) Einleitung und Kontaktdaten des Verantwortlichen</h3>
                  <p>
                    Wir freuen uns, dass Sie unsere Website besuchen und bedanken uns für Ihr Interesse. Im Folgenden informieren wir Sie über den Umgang mit Ihren personenbezogenen Daten bei der Nutzung unserer Website. Personenbezogene Daten sind hierbei alle Daten, mit denen Sie persönlich identifiziert werden können.
                  </p>
                  <p className="mt-3">
                    Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist
                  </p>
                  <p className="mt-3">
                    nproxima UG (haftungsbeschränkt)<br />
                    Sudetenstrasse 32<br />
                    85622 Feldkirchen<br />
                    Deutschland<br />
                    Tel.: +491738649000<br />
                    E-Mail: contact@nproxima.ai
                  </p>
                  <p className="mt-3">
                    Der für die Verarbeitung von personenbezogenen Daten Verantwortliche ist diejenige natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2) Datenerfassung beim Besuch unserer Website</h3>
                  <p>
                    <strong>2.1</strong> Bei der bloß informatorischen Nutzung unserer Website, also wenn Sie sich nicht registrieren oder uns anderweitig Informationen übermitteln, erheben wir nur solche Daten, die Ihr Browser an den Seitenserver übermittelt (sog. „Server-Logfiles"). Wenn Sie unsere Website aufrufen, erheben wir die folgenden Daten, die für uns technisch erforderlich sind, um Ihnen die Website anzuzeigen:
                  </p>
                  <ul className="mt-3 list-disc list-inside space-y-1">
                    <li>Unsere besuchte Website</li>
                    <li>Datum und Uhrzeit zum Zeitpunkt des Zugriffes</li>
                    <li>Menge der gesendeten Daten in Byte</li>
                    <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>
                    <li>Verwendeter Browser</li>
                    <li>Verwendetes Betriebssystem</li>
                    <li>Verwendete IP-Adresse (ggf.: in anonymisierter Form)</li>
                  </ul>
                  <p className="mt-3">
                    Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website. Eine Weitergabe oder anderweitige Verwendung der Daten findet nicht statt. Wir behalten uns allerdings vor, die Server-Logfiles nachträglich zu überprüfen, sollten konkrete Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.
                  </p>
                  <p className="mt-3">
                    <strong>2.2</strong> Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung personenbezogener Daten und anderer vertraulicher Inhalte (z.B. Bestellungen oder Anfragen an den Verantwortlichen) eine SSL-bzw. TLS-Verschlüsselung. Sie können eine verschlüsselte Verbindung an der Zeichenfolge „https://" und dem Schloss-Symbol in Ihrer Browserzeile erkennen.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">3) Hosting & Content-Delivery-Network</h3>
                  <p>
                    Für das Hosting unserer Website und die Darstellung der Seiteninhalte nutzen wir einen Anbieter, der seine Leistungen selbst oder durch ausgewählte Sub-Unternehmer ausschließlich auf Servern innerhalb der Europäischen Union erbringt.
                  </p>
                  <p className="mt-3">
                    Sämtliche auf unserer Website erhobenen Daten werden auf diesen Servern verarbeitet.
                  </p>
                  <p className="mt-3">
                    Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der den Schutz der Daten unserer Seitenbesucher sicherstellt und eine unberechtigte Weitergabe an Dritte untersagt.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4) Cookies</h3>
                  <p>
                    Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung bestimmter Funktionen zu ermöglichen, verwenden wir Cookies, also kleine Textdateien, die auf Ihrem Endgerät abgelegt werden. Teilweise werden diese Cookies nach Schließen des Browsers automatisch wieder gelöscht (sog. „Session-Cookies"), teilweise verbleiben diese Cookies länger auf Ihrem Endgerät und ermöglichen das Speichern von Seiteneinstellungen (sog. „persistente Cookies"). Im letzteren Fall können Sie die Speicherdauer der Übersicht zu den Cookie-Einstellungen Ihres Webbrowsers entnehmen.
                  </p>
                  <p className="mt-3">
                    Sofern durch einzelne von uns eingesetzte Cookies auch personenbezogene Daten verarbeitet werden, erfolgt die Verarbeitung gemäß Art. 6 Abs. 1 lit. b DSGVO entweder zur Durchführung des Vertrages, gemäß Art. 6 Abs. 1 lit. a DSGVO im Falle einer erteilten Einwilligung oder gemäß Art. 6 Abs. 1 lit. f DSGVO zur Wahrung unserer berechtigten Interessen an der bestmöglichen Funktionalität der Website sowie einer kundenfreundlichen und effektiven Ausgestaltung des Seitenbesuchs.
                  </p>
                  <p className="mt-3">
                    Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und einzeln über deren Annahme entscheiden oder die Annahme von Cookies für bestimmte Fälle oder generell ausschließen können.
                  </p>
                  <p className="mt-3">
                    Bitte beachten Sie, dass bei Nichtannahme von Cookies die Funktionalität unserer Website eingeschränkt sein kann.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">5) Kontaktaufnahme</h3>
                  <p>
                    Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail) werden personenbezogene Daten erhoben. Welche Daten im Falle der Nutzung eines Kontaktformulars erhoben werden, ist aus dem jeweiligen Kontaktformular ersichtlich. Diese Daten werden ausschließlich zum Zweck der Beantwortung Ihres Anliegens bzw. für die Kontaktaufnahme und die damit verbundene technische Administration gespeichert und verwendet.
                  </p>
                  <p className="mt-3">
                    Rechtsgrundlage für die Verarbeitung dieser Daten ist unser berechtigtes Interesse an der Beantwortung Ihres Anliegens gemäß Art. 6 Abs. 1 lit. f DSGVO. Zielt Ihre Kontaktierung auf den Abschluss eines Vertrages ab, so ist zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO. Ihre Daten werden nach abschließender Bearbeitung Ihrer Anfrage gelöscht. Dies ist der Fall, wenn sich aus den Umständen entnehmen lässt, dass der betroffene Sachverhalt abschließend geklärt ist und sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">6) Nutzung von Kundendaten zur Direktwerbung</h3>
                  <p>
                    <strong>6.1 Anmeldung zu unserem E-Mail-Newsletter</strong>
                  </p>
                  <p className="mt-3">
                    Wenn Sie sich zu unserem E-Mail Newsletter anmelden, übersenden wir Ihnen regelmäßig Informationen zu unseren Angeboten. Pflichtangabe für die Übersendung des Newsletters ist allein Ihre E-Mailadresse. Die Angabe weiterer Daten ist freiwillig und wird verwendet, um Sie persönlich ansprechen zu können. Für den Versand des Newsletters verwenden wir das sog. Double Opt-in Verfahren. Dies bedeutet, dass wir Ihnen erst dann einen E-Mail Newsletter übermitteln werden, wenn Sie uns ausdrücklich bestätigt haben, dass Sie in den Empfang von Newsletter einwilligen. Wir schicken Ihnen dann eine Bestätigungs-E-Mail, mit der Sie gebeten werden durch Anklicken eines entsprechenden Links zu bestätigen, dass Sie künftig den Newsletter erhalten wollen.
                  </p>
                  <p className="mt-3">
                    Mit der Aktivierung des Bestätigungslinks erteilen Sie uns Ihre Einwilligung für die Nutzung Ihrer personenbezogenen Daten gemäß Art. 6 Abs. 1 lit. a DSGVO. Bei der Anmeldung zum Newsletter speichern wir Ihre vom Internet Service-Provider (ISP) eingetragene IP-Adresse sowie das Datum und die Uhrzeit der Anmeldung, um einen möglichen Missbrauch Ihrer E-Mail- Adresse zu einem späteren Zeitpunkt nachvollziehen zu können. Die von uns bei der Anmeldung zum Newsletter erhobenen Daten werden ausschließlich für Zwecke der werblichen Ansprache im Wege des Newsletters benutzt. Sie können den Newsletter jederzeit über den dafür vorgesehenen Link im Newsletter oder durch entsprechende Nachricht an den eingangs genannten Verantwortlichen abbestellen. Nach erfolgter Abmeldung wird Ihre E-Mailadresse unverzüglich in unserem Newsletter-Verteiler gelöscht, soweit Sie nicht ausdrücklich in eine weitere Nutzung Ihrer Daten eingewilligt haben oder wir uns eine darüberhinausgehende Datenverwendung vorbehalten, die gesetzlich erlaubt ist und über die wir Sie in dieser Erklärung informieren.
                  </p>
                  <p className="mt-3">
                    <strong>6.2 Versand des E-Mail-Newsletters an Bestandskunden</strong>
                  </p>
                  <p className="mt-3">
                    Wenn Sie uns Ihre E-Mailadresse beim Kauf von Waren bzw. Dienstleistungen zur Verfügung gestellt haben, behalten wir uns vor, Ihnen regelmäßig Angebote zu ähnlichen Waren bzw. Dienstleistungen, wie den bereits gekauften, aus unserem Sortiment per E-Mail zuzusenden. Hierfür müssen wir gemäß § 7 Abs. 3 UWG keine gesonderte Einwilligung von Ihnen einholen. Die Datenverarbeitung erfolgt insoweit allein auf Basis unseres berechtigten Interesses an personalisierter Direktwerbung gemäß Art. 6 Abs. 1 lit. f DSGVO. Haben Sie der Nutzung Ihrer E-Mailadresse zu diesem Zweck anfänglich widersprochen, findet ein Mailversand unsererseits nicht statt.
                  </p>
                  <p className="mt-3">
                    Sie sind berechtigt, der Nutzung Ihrer E-Mailadresse zu dem vorbezeichneten Werbezweck jederzeit mit Wirkung für die Zukunft durch eine Mitteilung an den zu Beginn genannten Verantwortlichen zu widersprechen. Hierfür fallen für Sie lediglich Übermittlungskosten nach den Basistarifen an. Nach Eingang Ihres Widerspruchs wird die Nutzung Ihrer E-Mailadresse zu Werbezwecken unverzüglich eingestellt.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">7) Rechte des Betroffenen</h3>
                  <p>
                    <strong>7.1</strong> Das geltende Datenschutzrecht gewährt Ihnen gegenüber dem Verantwortlichen hinsichtlich der Verarbeitung Ihrer personenbezogenen Daten die nachstehenden Betroffenenrechte (Auskunfts- und Interventionsrechte), wobei für die jeweiligen Ausübungsvoraussetzungen auf die angeführte Rechtsgrundlage verwiesen wird:
                  </p>
                  <ul className="mt-3 list-disc list-inside space-y-1">
                    <li>Auskunftsrecht gemäß Art. 15 DSGVO;</li>
                    <li>Recht auf Berichtigung gemäß Art. 16 DSGVO;</li>
                    <li>Recht auf Löschung gemäß Art. 17 DSGVO;</li>
                    <li>Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO;</li>
                    <li>Recht auf Unterrichtung gemäß Art. 19 DSGVO;</li>
                    <li>Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO;</li>
                    <li>Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7 Abs. 3 DSGVO;</li>
                    <li>Recht auf Beschwerde gemäß Art. 77 DSGVO.</li>
                  </ul>
                  <p className="mt-3">
                    <strong>7.2 WIDERSPRUCHSRECHT</strong>
                  </p>
                  <p className="mt-3 font-semibold">
                    WENN WIR IM RAHMEN EINER INTERESSENABWÄGUNG IHRE PERSONENBEZOGENEN DATEN AUFGRUND UNSERES ÜBERWIEGENDEN BERECHTIGTEN INTERESSES VERARBEITEN, HABEN SIE DAS JEDERZEITIGE RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIESE VERARBEITUNG WIDERSPRUCH MIT WIRKUNG FÜR DIE ZUKUNFT EINZULEGEN.
                  </p>
                  <p className="mt-3 font-semibold">
                    MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE VERARBEITUNG DER BETROFFENEN DATEN. EINE WEITERVERARBEITUNG BLEIBT ABER VORBEHALTEN, WENN WIR ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN KÖNNEN, DIE IHRE INTERESSEN, GRUNDRECHTE UND GRUNDFREIHEITEN ÜBERWIEGEN, ODER WENN DIE VERARBEITUNG DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN DIENT.
                  </p>
                  <p className="mt-3 font-semibold">
                    WERDEN IHRE PERSONENBEZOGENEN DATEN VON UNS VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN. SIE KÖNNEN DEN WIDERSPRUCH WIE OBEN BESCHRIEBEN AUSÜBEN.
                  </p>
                  <p className="mt-3 font-semibold">
                    MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE VERARBEITUNG DER BETROFFENEN DATEN ZU DIREKTWERBEZWECKEN.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">8) Dauer der Speicherung personenbezogener Daten</h3>
                  <p>
                    Die Dauer der Speicherung von personenbezogenen Daten bemisst sich anhand der jeweiligen Rechtsgrundlage, am Verarbeitungszweck und – sofern einschlägig – zusätzlich anhand der jeweiligen gesetzlichen Aufbewahrungsfrist (z.B. handels- und steuerrechtliche Aufbewahrungsfristen).
                  </p>
                  <p className="mt-3">
                    Bei der Verarbeitung von personenbezogenen Daten auf Grundlage einer ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO werden die betroffenen Daten so lange gespeichert, bis Sie Ihre Einwilligung widerrufen.
                  </p>
                  <p className="mt-3">
                    Existieren gesetzliche Aufbewahrungsfristen für Daten, die im Rahmen rechtsgeschäftlicher bzw. rechtsgeschäftsähnlicher Verpflichtungen auf der Grundlage von Art. 6 Abs. 1 lit. b DSGVO verarbeitet werden, werden diese Daten nach Ablauf der Aufbewahrungsfristen routinemäßig gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind und/oder unsererseits kein berechtigtes Interesse an der Weiterspeicherung fortbesteht.
                  </p>
                  <p className="mt-3">
                    Bei der Verarbeitung von personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert, bis Sie Ihr Widerspruchsrecht nach Art. 21 Abs. 1 DSGVO ausüben, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
                  </p>
                  <p className="mt-3">
                    Bei der Verarbeitung von personenbezogenen Daten zum Zwecke der Direktwerbung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert, bis Sie Ihr Widerspruchsrecht nach Art. 21 Abs. 2 DSGVO ausüben.
                  </p>
                  <p className="mt-3">
                    Sofern sich aus den sonstigen Informationen dieser Erklärung über spezifische Verarbeitungssituationen nichts anderes ergibt, werden gespeicherte personenbezogene Daten im Übrigen dann gelöscht, wenn sie für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig sind.
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

export default PrivacyNotice;
