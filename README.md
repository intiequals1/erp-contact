# ERP.Contact

ERP.Contact ist eine deutschsprachige, statisch generierte Wissenswebsite zu Enterprise Resource Planning, integrierten Geschäftsprozessen, Projektarbeit, Unternehmensarchitektur sowie verantwortungsvoller künstlicher Intelligenz. Sie bündelt die Inhalte in verständlichen Themenpfaden und trennt aktuelle Wissensseiten von der historischen Bestandsaufnahme der früheren Website.

## Inhalt und Orientierung

Die Website führt von den ERP-Grundlagen über Module, Cloud ERP und Datenstrukturen zu fünf End-to-End-Prozessen. Weitere Bereiche behandeln Portfolio- und Projektmanagement, SAP Activate, Enterprise Architecture, APIs, künstliche Intelligenz, KI-Ethik und Ressourcen. Die Route `/ressourcen/research-briefings/` zeigt die visuellen Themencluster für ERP Brief und ERP Postimplementierung. Die historische Bestandsaufnahme liegt getrennt unter `/historie/`.

## Technologie

Das Projekt benötigt keine Datenbank und keinen Anwendungserver. Ein Node-basierter Generator erstellt vollständige HTML-Dateien in `dist/`. Jeder öffentliche Inhalt ist bereits im initialen HTML enthalten.

- `src/content.mjs` enthält Seitendaten, Navigation, Inhalte und gesetzliche Seiten.
- `src/research-briefings.mjs` definiert die neutralen Research-Bereiche.
- `scripts/build.mjs` generiert Seiten, Metadaten, JSON-LD, Sitemap, Robots-Datei und Routenmanifest.
- `scripts/serve.mjs` stellt den lokalen Preview-Server bereit.
- `public/` enthält CSS, JavaScript, SVG-Assets und `llms.txt`.
- `research/version-1/` enthält die quellennahe historische Bestandsaufnahme.
- `research/seo-evidence.md` und `research/legal-evidence.md` halten die verwendeten Quellen und Umsetzungsentscheidungen fest.

## Lokale Entwicklung

Voraussetzung ist Node.js 20 oder neuer. Es werden keine externen Laufzeitabhängigkeiten installiert.

```bash
npm run check
npm run build
npm run dev
```

`npm run check` prüft die JavaScript-Syntax. `npm run build` erzeugt den vollständigen statischen Stand in `dist/`. `npm run dev` baut zuerst und startet danach den lokalen Server auf Port 3000.

## Suchmaschinen und KI-lesbare Inhalte

Der Generator liefert für jede indexierbare Seite einen eigenen Titel, eine Beschreibung, Canonical-URL, Open-Graph-Daten und JSON-LD nach Schema.org. `sitemap.xml`, `robots.txt` und `manus-routes.json` werden aus den Seitendaten erstellt. Die Datei `/llms.txt` bietet zusätzlich eine knappe, kuratierte Orientierung für KI-Agenten. Sie ist ein ergänzendes Format, kein garantiertes Ranking-Signal.

## KI-Transparenz

Die Struktur, das Design und redaktionelle Textentwürfe dieser Website wurden mit KI erstellt und vom verantwortlichen Herausgeber geprüft. Dieser Hinweis ist sichtbar unter `/ki-transparenz/` und maschinenlesbar über Metadaten sowie strukturierte Seitendaten hinterlegt. Übernommene historische Quelleninhalte bleiben davon getrennt.

## Rechtliche Seiten und Betreiberpflege

Das Projekt enthält ein öffentlich verlinktes Impressum unter `/impressum/` und eine Datenschutzerklärung unter `/datenschutz/`. Der Stand umfasst die vorliegenden Angaben zu Diensteanbieter, Anschrift, Kontakt, GISA-Berechtigungen, gewerberechtlichem Kontext, Medieninhaber und Blattlinie. Plattform-Analyse und Plattform-Badge sind in der Projektkonfiguration deaktiviert.

Vor einer öffentlichen Veröffentlichung muss der verantwortliche Betreiber die Angaben erneut abgleichen. Besonders zu prüfen und gegebenenfalls zu ergänzen sind eine tatsächlich erteilte Umsatzsteuer-Identifikationsnummer, abweichende Firmenbuchdaten, Änderungen bei Gewerbeberechtigungen, der endgültige Hosting-Dienstleister samt Auftragsverarbeitung sowie weitere Datenverarbeitungen wie Formulare, Newsletter, eingebettete Medien, Analyse- oder Marketingdienste. Solche Funktionen dürfen erst nach Aktualisierung der Datenschutzerklärung aktiviert werden.

## Repository und Veröffentlichung

Das kanonische Repository ist `intiequals1/erp-contact`. Der Workflow `.github/workflows/deploy-pages.yml` prüft und baut die Website bei jedem Push nach `main` und stellt anschließend den Inhalt von `dist/` über GitHub Pages bereit. Die konfigurierte Produktionsdomain ist `https://erp.contact/`; der CNAME in der Repository-Wurzel dokumentiert diese Zuordnung. Die Repository-Sichtbarkeit wird unabhängig von der Website-Auslieferung in GitHub verwaltet.
