# Änderungsprotokoll

## 2026-11-16 – Datenschutzerklärung an den Live-Betrieb angepasst, Datenschutzhinweis

### Was geändert wurde

- `src/content.mjs` (Seite `/datenschutz/`):
  - „Technische Bereitstellung“ nennt jetzt GitHub Pages (GitHub, Inc., USA) als Hosting-Anbieter, die Übermittlung in die USA auf Grundlage des EU-US Data Privacy Framework und einen Link zur Datenschutzerklärung von GitHub. Entfernt wurde der Satz, der Hosting-Dienstleister werde „vor einer öffentlichen Veröffentlichung“ ergänzt.
  - „Keine eigenen Trackingdienste“ heißt jetzt „Keine Cookies, kein Tracking, keine Drittdienste“. Der Abschnitt hält ausdrücklich fest, dass alle Dateien von erp.contact geladen werden und keine Schriftarten von externen Servern kommen. Der Verweis auf „Plattform-Analyse und Plattform-Badge“ wurde entfernt; er bezog sich auf die frühere Entwicklungsplattform und ist für Besucherinnen und Besucher ohne Bedeutung.
  - Neuer Abschnitt „Datenschutzhinweis“: Zweck, Schlüssel, Speicherdauer, Rechtsgrundlage § 165 Abs. 3 TKG 2021.
  - Stand 16.11.2026.
- `public/assets/site.js`, `public/assets/site.css`: Datenschutzhinweis am unteren Rand, ohne Einwilligungsabfrage. „Verstanden“ speichert im localStorage `erpcontact.datenschutzhinweis.v1` = `geschlossen`.
- `dist/`: neu gebaut (`npm run build`).
- `README.md`, `TODO.md`: Hosting-Stand und Hinweis nachgetragen.

### Warum

- Am 16.11.2026 wurden alle eigenen Websites live geprüft (Cookies, Browser-Speicher, angefragte Hosts). Anlass war, dass dangulea.at Schriftarten bis dahin von Google-Servern geladen hatte.
- Technisch war erp.contact sauber: nur Anfragen an erp.contact, keine Cookies, kein Browser-Speicher, keine eingebundenen Drittdienste.
- Die Datenschutzerklärung entsprach aber nicht dem Live-Betrieb. Sie kündigte den Hosting-Anbieter für „vor einer öffentlichen Veröffentlichung“ an, obwohl die Seite bereits öffentlich über GitHub Pages ausgeliefert wird (Antwort-Header `server: GitHub.com`). Art. 13 DSGVO verlangt, Empfänger und Drittlandübermittlungen zu nennen. Bei GitHub Pages ist das GitHub, Inc. in den USA.
- Der Datenschutzhinweis wurde auf Wunsch des Betreibers für alle eigenen Seiten einheitlich eingeführt. Eine Einwilligung wird bewusst nicht abgefragt, weil die Seite nichts einsetzt, das eine erfordert. Das Merken des Schließens ist in der Datenschutzerklärung offengelegt.

## 2026-11-16 – Verweis auf die ePrivacy-Richtlinie

### Was geändert wurde

- Datenschutzerklärung, Abschnitt „Datenschutzhinweis“: Neben § 165 Abs. 3 TKG 2021 steht jetzt auch die zugrunde liegende EU-Norm, Art. 5 Abs. 3 der ePrivacy-Richtlinie 2002/58/EG.

### Warum

- Auf Hinweis des Betreibers. § 165 Abs. 3 TKG 2021 setzt die Vorgabe der ePrivacy-Richtlinie für das Speichern von Informationen im Endgerät in österreichisches Recht um. Der Doppelverweis macht für Leserinnen und Leser außerhalb Österreichs nachvollziehbar, auf welcher Regel die einwilligungsfreie Speicherung beruht.
