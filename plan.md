# ERP.Contact — Implementierungsplan

## Ausgangslage und Ziel

ERP.Contact wird als eigenständige, deutschsprachige Wissenswebsite aufgebaut. Die aktuelle Informationsseite richtet sich an Menschen, die ERP-Systeme, Geschäftsprozesse, Projekt- und Architekturarbeit sowie den Einsatz von KI fachlich einordnen wollen. Eine getrennte Historie bewahrt die frühere Google-Sites-Struktur als nachvollziehbaren Archivbereich, ohne die fachlichen Seiten davon abhängig zu machen.

Das Projekt wird als statische Website ohne Datenbank, Login oder Server umgesetzt. Der Build erzeugt für jede Informationsseite eine eigene vollständige HTML-Datei. Dadurch bleiben Inhalte, Seitentitel, Beschreibungen und Open-Graph-Daten ohne JavaScript lesbar. Interaktionen beschränken sich auf progressive Verbesserungen der Mobilnavigation.

## Quellengrundlage und Migration

Die öffentliche Bestandsaufnahme wird im Repository unter `research/version-1/` dokumentiert. Jede thematische Archivnotiz führt die gefundene öffentliche Quell-URL, die quellennah aufgenommene Aussage, Linkbefunde und den Erfassungsstatus. Die Website stellt diese Aufnahme anschließend im Bereich **Historie** öffentlich bereit. Nicht auffindbare Altseiten werden dort transparent als nicht öffentlich reproduzierbar gekennzeichnet; sie werden nicht mit vermuteten Inhalten ergänzt.

Die Informationsarchitektur ordnet ERP-Grundlagen, ERP-Module, Cloud-ERP, Autor, Portfolio-/Projektmanagement, SAP S/4HANA EPPM, Projektmanagement, SAP Activate, Enterprise Architecture, APIs, integrierte Prozesse, die fünf End-to-End-Prozesse, zentrale Konzepte, Datenbanken, künstliche Intelligenz, KI-Ethik, Ressourcen, Research Briefings, Blog-Hinweise und Impressum.

## Informationsarchitektur

- **Startseite**: Einordnung, Themenkarte, Einstieg in Prozesse und klare Querverweise.
- **ERP verstehen**: Grundlagen, Module, Cloud ERP, zentrale Konzepte und Datenbanken.
- **Prozesse**: Prozessübersicht sowie einzelne Seiten zu Record-to-Report, Recruit-to-Retire, Source-to-Pay, Design-to-Operate und Lead-to-Cash.
- **Transformation**: Portfolio & Projektmanagement, SAP S/4HANA EPPM, Projektmanagement, SAP Activate, Enterprise Architecture und APIs.
- **KI & Ethik**: Künstliche Intelligenz, KI-Ethik sowie eine separate KI-Transparenzseite.
- **Ressourcen**: Begriffsarbeit, ERP Terminology Trainer, ERP Research Briefings, Blog-Hinweise und kuratierte externe Verknüpfungen.
- **Projekte**: Klar als Konzepte/Prototypen markierte Karten zu DP-09, DP-10, DP-12, Knowledge Management Hub und Ablauf-Werkbank; bis zu belastbaren Detailseiten führen alle auf `https://www.digitalpath.at/`.
- **Über / Rechtliches**: Autorenprofil, Impressum, Historie (Version 1) und Quellenhinweise.

In produktnahen Seiten wird eine sichtbare Begriffsnotiz integriert: Terminologie kann je nach ERP-System, Team und Organisation variieren; für Vorhaben ist eine Abstimmung mit den jeweiligen Fachverantwortlichen erforderlich. Der ERP Terminology Trainer wird als systemübergreifendes Werkzeug für SAP, Dynamics 365, Odoo und generische ERP-Begriffe verlinkt.

## Link- und Rechtskonzept

Es werden ausschließlich überprüfte direkte Ziele verwendet. Der Terminologie-Link zeigt auf `https://trainer.erp.contact/` und trägt die verständliche Bezeichnung **ERP Terminology Trainer**. Die externe Vernetzung erklärt ihren Zweck und führt auf die funktionierenden `www`-Hosts `https://www.dangulea.at/`, `https://www.digitalpath.at/`, `https://www.coolwebtoday.org/` und `https://www.ethics.at/`. Nicht erreichbare YouTube-Ziele werden nicht übernommen. Die frühere EU-OS/ODR-Angabe wird ausschließlich im historischen Version-1-Kontext mit dem Hinweis auf die Einstellung der Plattform am 20.07.2025 dokumentiert; sie erscheint nicht als aktuelle Rechtsinformation.

## Designentscheidung

### Verworfene Stilrichtungen

- **Brutalistisches Archiv-Interface** (0,06): klar dokumentarisch, jedoch für ein fachliches Einstiegsangebot zu rau.
- **Aquarellartige Sustainability-Ästhetik** (0,04): freundlich, aber zu wenig präzise für Systeme, Prozesse und Architektur.
- **Gläserne futuristische KI-Oberfläche** (0,08): reizvoll, aber ungeeignet für nachvollziehbare, langfristig lesbare Wissensinhalte.

### Gewählter Stil: Editoriale Systemkartografie

- **Designbewegung**: Schweizer Informationsdesign trifft auf technische Handbücher und Prozesslandkarten.
- **Leitprinzipien**: fachliche Klarheit, sichtbare Beziehungen, ruhige Lesbarkeit und eine konsequente Trennung zwischen Wissen, Quelle und Projektstatus.
- **Farbphilosophie**: Ein warmes Papierweiß und tiefes Graphit vermitteln Verlässlichkeit; ein präzises Petrol führt durch System- und Prozessbeziehungen; dezentes Ocker kennzeichnet historische bzw. konzeptionelle Hinweise. Die Signaturfarbe ist **ERP-Petrol**.
- **Layoutparadigma**: Seitlicher Orientierungspfad und vertikale Themenbänder statt einer austauschbaren zentrierten Kartenwand. Auf kleinen Bildschirmen wird der Pfad zu einer fokussierten Inhaltsnavigation.
- **Signatur-Elemente**: nummerierte Wissensmarken, Prozessfäden als Linienführung und kleine Systemknoten für Querverbindungen.
- **Interaktion**: Interaktionen geben Orientierung, nicht Ablenkung. Navigation, Filter und Aufklapper bleiben tastaturbedienbar und ohne JavaScript inhaltlich ersetzbar.
- **Animation**: Dezente, kurze Übergänge ausschließlich bei Hover, Fokus und Navigation; bei `prefers-reduced-motion` vollständig reduziert.
- **Typografie**: Eine sachliche Grotesk mit System-Fallbacks für Fließtext; eine robuste Monospace für Prozesscodes, Quellen und Begriffe. Hierarchie über Größe, Abstand und Gewicht statt dekorativer Effekte.
- **Markenessenz**: *ERP.Contact macht Unternehmenssysteme, Prozesse und Verantwortungsfragen verständlich miteinander verbunden.* Persönlichkeitsmerkmale: präzise, ruhig, vernetzt.
- **Markenstimme**: Klar und erklärend statt werblich. Beispiel: „Prozesse verbinden Fachbereiche — und machen Abhängigkeiten sichtbar.“ Beispiel: „Konzept ist kein Nachweis: Reifegrad und Grenzen bleiben benannt.“
- **Wortmarke**: `erp.contact` als eigens gesetzte Wortmarke mit einem verbindenden Punkt/Knoten zwischen beiden Teilen; der Punkt wird als Systemknoten in der Navigation wiederholt.

## Technische Struktur

```text
.
├── src/                 # Seitendaten, Layout- und Inhaltsbausteine
├── scripts/             # statischer Build und lokaler Preview-Server
├── public/              # statische Dateien: robots, Sitemap, Routenmanifest, Icons
├── research/version-1/  # quellennahe öffentliche Bestandsaufnahme
├── dist/                # generierter, veröffentlichter statischer Build
├── plan.md              # dieser Plan
├── TODO.md              # nachverfolgbare Lieferziele
└── app.config.ts        # Plattform-Logo-Metadaten
```

Ein Node-basierter Build ohne fremde Laufzeitabhängigkeiten erzeugt `dist/`. Die Seitendaten definieren Route, Titel, Beschreibung, Inhaltsblöcke, Querverweise und Indexierungsstatus. Ein gemeinsames Layout erzeugt semantisches HTML mit Header, Navigation, Main, Fußzeile und Seitennavigation. `manus-routes.json`, `sitemap.xml` und `robots.txt` werden als statische Dokumente bereitgestellt.

## Suchmaschinen- und Zugänglichkeitsstandard

Jede indexierbare Seite erhält einen individuellen Titel, eine Beschreibung, kanonische `https://erp.contact/`-Adresse, Open-Graph-Daten und bedeutungsvollen initialen HTML-Inhalt. Die Seite nutzt semantische Überschriften, Skip-Link, sichtbare Fokuszustände, ausreichende Kontraste, beschreibende Links und responsive Zeilenlängen. Der öffentliche Verlauf und die KI-Transparenzseite sind über die Haupt- und Fußnavigation erreichbar.

## KI-Transparenz

Die separate Seite erläutert sachlich: Struktur, Gestaltung und technische Umsetzung der Website wurden KI-unterstützt erstellt und vom verantwortlichen Herausgeber geprüft. Projektkarten deklarieren ihren jeweiligen Reifegrad direkt am Element.

## Materialgrenzen

Es werden keine Aussagen über nicht belegte Projektfunktionen, Detail-URLs oder nicht auffindbare Altseiten erfunden. DP-09, DP-10, DP-12, Knowledge Management Hub und Ablauf-Werkbank bleiben als Konzept/Prototyp sichtbar und verlinken ausschließlich auf die verifizierte Einstiegsseite von Digitalpath. Die Implementierung verwendet keine Datenbank, keinen Server und keine Tracking- oder Werbenetzwerke.

## Research Briefings

Die zwei Research-Bereiche „ERP Brief“ und „ERP Postimplementierung“ sind als eigene, statusklare Ressourcenseite eingebunden. Ihre Pflege ist für einen angemeldeten Browserzugriff vorgesehen und verwendet keine externe Programmierschnittstelle oder Guthaben. Cookie-, Anmelde- und Fehlerseiten werden nicht als fachliche Inhalte verarbeitet. Erst nach einem erfolgreichen Zugriff auf die tatsächlichen Projektinhalte wird ein sinnvoller täglicher Pflegeablauf definiert.
