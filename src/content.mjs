export const SITE = {
  name: 'ERP.Contact',
  wordmark: 'erp.contact',
  origin: 'https://www.erp.contact',
  description: 'ERP-Wissen, Geschäftsprozesse, Projektarbeit und verantwortungsvolle KI in einer vernetzten, verständlichen Wissensbasis.',
  ogImage: 'https://www.erp.contact/assets/og-erp-contact.svg',
  updated: '2026-10-27'
};

export const NAV = [
  { label: 'Einstieg', href: '/' },
  { label: 'ERP verstehen', href: '/erp/grundlagen/' },
  { label: 'Prozesse', href: '/prozesse/' },
  { label: 'Transformation', href: '/transformation/' },
  { label: 'KI & Ethik', href: '/ki/' },
  { label: 'KI-Transparenz', href: '/ki-transparenz/' },
  { label: 'Ressourcen', href: '/ressourcen/' },
  { label: 'Projekte', href: '/projekte/' },
  { label: 'Über', href: '/ueber/' },
  { label: 'Historie', href: '/historie/' }
];

const external = (label, href, text) => ({ label, href, text, external: true });
const internal = (label, href, text) => ({ label, href, text });

export const ARCHIVE = [
  { file: '01-erp-grundlagen-module.md', label: 'ERP-Grundlagen und ERP-Module', status: 'Startseiteninhalt und verifizierte Links erfasst; keine separate Grundlagen-Unterseite aufgefunden.' },
  { file: '02-cloud-erp.md', label: 'Cloud-ERP-Überblick', status: 'Sichtbarer Startseitenabschnitt und fünf direkte Anbieterziele dokumentiert.' },
  { file: '03-autorenprofil.md', label: 'Autorenprofil', status: 'Biografisches Startseitenfragment erfasst; keine eigene Profilseite nachweisbar.' },
  { file: '04-portfolio-projektmanagement.md', label: 'Portfolio & Projektmanagement', status: 'PPM, Projektmanagement, Activate, EPPM-Lernen und Zertifizierungsseite aufgenommen.' },
  { file: '05-s4hana-eppm.md', label: 'SAP S/4HANA EPPM', status: 'Öffentlich erreichbare PPM- und EPPM-Unterseiten quellennah dokumentiert.' },
  { file: '06-pm-activate.md', label: 'Projektmanagement und SAP Activate', status: 'Methoden- und Activate-Inhalte sowie Linkstatus erfasst.' },
  { file: '07-enterprise-architecture-apis.md', label: 'Enterprise Architecture und APIs', status: 'EA-Navigationsziel und API-Seite; EA-Seite enthielt Requirements Engineering statt EA-Fachtext.' },
  { file: '08-integrierte-prozesse.md', label: 'Integrierte Geschäftsprozesse', status: 'Prozessübersicht sowie auslesbare und inhaltsarme Unterseiten dokumentiert.' },
  { file: '09-record-to-report.md', label: 'Record-to-Report', status: 'Acht Prozessphasen, Detailseite und überprüfte SAP-Hilfeziele erfasst.' },
  { file: '10-recruit-to-retire.md', label: 'Recruit-to-Retire', status: 'Sieben Phasen des Beschäftigtenlebenszyklus aufgenommen.' },
  { file: '11-source-to-pay.md', label: 'Source-to-Pay', status: 'S2P-Seite, MRP-/Masterdatenbezüge und Prozessabfolge aufgenommen.' },
  { file: '12-design-to-operate.md', label: 'Design-to-Operate', status: 'Altseite erreichbar, aber außer Titel und Navigation ohne fachlichen Inhalt.' },
  { file: '13-lead-to-cash.md', label: 'Lead-to-Cash', status: 'Altseite erreichbar, aber außer Titel und Navigation ohne fachlichen Inhalt.' },
  { file: '14-konzepte-datenbanken.md', label: 'Zentrale Konzepte und Datenbanken', status: 'Unternehmensstruktur, Stammdaten, Bewegungsdaten und In-Memory-Notizen aufgenommen.' },
  { file: '15-ki-ethik.md', label: 'Künstliche Intelligenz und KI-Ethik', status: 'Nur kurze Startseiten-/Autorenbezüge sichtbar; keine Alt-Unterseite auffindbar.' },
  { file: '16-ressourcen-blog.md', label: 'Ressourcen und Blog-Hinweise', status: 'Train ERP und Blog News auffindbar, aber inhaltlich leer; überprüfte Ressourcen verzeichnet.' },
  { file: '17-impressum-historie.md', label: 'Impressum und historische Hinweise', status: 'Impressum sowie eingestellte EU-ODR-Angabe und fehlende Alt-Versionspfade dokumentiert.' }
];

export const PAGES = [
  {
    path: '/', section: 'Einstieg', title: 'ERP verstehen. Prozesse verbinden. Verantwortung klären.',
    metaTitle: 'ERP.Contact — ERP, Prozesse und verantwortungsvolle KI',
    description: 'ERP.Contact verbindet Grundlagen, End-to-End-Prozesse, Projektarbeit, Architektur und verantwortungsvolle KI in einer zugänglichen Wissensbasis.',
    keywords: 'ERP, Geschäftsprozesse, Projektmanagement, SAP, künstliche Intelligenz',
    eyebrow: 'Wissensbasis für Unternehmenssysteme',
    lead: 'ERP ist mehr als Software. Es verbindet Daten, Entscheidungen und Abläufe über Fachbereiche hinweg.',
    blocks: [
      { type: 'prose', heading: 'Ein Orientierungspunkt für vernetzte Arbeit', paragraphs: [
        'Diese Website ordnet ERP als integriertes, konfigurierbares Informationssystem ein. Im Mittelpunkt stehen nicht einzelne Produkte, sondern die Beziehungen zwischen Modulen, Daten, End-to-End-Prozessen, Projekten und Verantwortung.',
        'ERP.Contact verbindet Grundlagen, Prozesse, Projektarbeit und verantwortungsvolle KI in einer klaren Informationsarchitektur. Fachliche Themen, weiterführende Ressourcen und Projektkontexte bleiben dabei eindeutig voneinander unterscheidbar.'
      ]},
      { type: 'feature-grid', heading: 'Drei Einstiege', items: [
        { number: '01', title: 'ERP verstehen', text: 'Grundlagen, Module, Cloud ERP, Daten und zentrale Konzepte.', href: '/erp/grundlagen/' },
        { number: '02', title: 'Prozesse lesen', text: 'Fünf End-to-End-Prozesse und ihre fachübergreifenden Übergaben.', href: '/prozesse/' },
        { number: '03', title: 'Verantwortung einordnen', text: 'Projektarbeit, Architektur, APIs sowie KI und Ethik.', href: '/ki/' }
      ]},
      { type: 'process', heading: 'Ein System in Bewegung', intro: 'ERP verbindet diese Perspektiven. Die Darstellung ist eine Orientierung — konkrete Rollen, Begriffe und Systemgrenzen werden im jeweiligen Vorhaben abgestimmt.', items: [
        { number: 'A', title: 'Daten', text: 'Stammdaten und Transaktionen schaffen einen gemeinsamen Bezug für Fachbereiche.' },
        { number: 'B', title: 'Prozesse', text: 'Planung, Beschaffung, Leistungserbringung und Abschluss greifen ineinander.' },
        { number: 'C', title: 'Entscheidungen', text: 'Informationen werden erst dann wirksam, wenn Zuständigkeit und Kontext sichtbar bleiben.' }
      ]},
      { type: 'note', tone: 'teal', title: 'Orientierung', text: 'ERP.Contact ist als langfristig lesbare Wissensbasis angelegt: Begriffe, Prozesse, Projektkontexte und externe Ressourcen sind so verbunden, dass Zusammenhänge ohne Produkthandbuch verständlich werden.' }
    ],
    related: [internal('Prozessübersicht', '/prozesse/', 'End-to-End-Prozesse erkunden'), internal('ERP Terminology Trainer', '/ressourcen/', 'Begriffe systemübergreifend vergleichen')]
  },
  {
    path: '/erp/grundlagen', section: 'ERP verstehen', title: 'ERP-Grundlagen: Integration als gemeinsamer Rahmen',
    metaTitle: 'ERP-Grundlagen: Integration und Konfigurierbarkeit',
    description: 'ERP-Grundlagen zu Integration, Konfigurierbarkeit, Informationsmanagement und der Entwicklung von MRP bis ERP.',
    keywords: 'ERP Grundlagen, Integration, Konfigurierbarkeit, Informationsmanagement, MRP', eyebrow: 'ERP verstehen · 01',
    lead: 'Ein ERP-System koordiniert Ressourcen, Informationen und Funktionen über Abteilungsgrenzen hinweg.',
    blocks: [
      { type: 'prose', heading: 'Die übernommene Grundidee', paragraphs: [
        'Enterprise Resource Planning ist ein integriertes, konfigurierbares Informationssystem. Im Zentrum stehen die Verbindung von Geschäftsprozessen und Datenflüssen, die Anpassung an organisatorische Bedürfnisse, ein fachbereichsübergreifender Umfang sowie die zentrale Erfassung, Speicherung und Analyse von Informationen.',
        'Diese Seite ordnet diese Aussagen als Orientierung ein. Sie ersetzt keine fachliche System- oder Prozessanalyse für eine konkrete Organisation.'
      ]},
      { type: 'feature-grid', heading: 'Vier wiederkehrende Eigenschaften', items: [
        { number: 'I', title: 'Integration', text: 'Prozesse und Datenflüsse werden über Fachbereichsgrenzen hinweg verbunden.' },
        { number: 'II', title: 'Konfigurierbarkeit', text: 'Strukturen und Regeln werden an die Organisation angepasst.' },
        { number: 'III', title: 'Funktionsübergreifend', text: 'Finanzen, Beschaffung, Vertrieb, Personal und weitere Bereiche greifen aufeinander.' },
        { number: 'IV', title: 'Informationsmanagement', text: 'Daten werden erfasst, gespeichert, ausgewertet und für Entscheidungen genutzt.' }
      ]},
      { type: 'prose', heading: 'Von MRP zu ERP', paragraphs: [
        'ERP entwickelte sich aus Material Requirements Planning und Manufacturing Resource Planning zu einem Rahmen, der über reine Fertigungsfunktionen hinausgeht. Der Begriff bleibt perspektivabhängig: Fachseite, Implementierung, Betrieb und Steuerung setzen unterschiedliche Akzente.',
        'Deshalb ist ein gemeinsames Vokabular kein Selbstzweck: Es erleichtert die Verständigung zwischen Fachseite, Umsetzung, Analyse und Projektleitung.'
      ]},
      { type: 'note', tone: 'sand', title: 'Terminologie-Hinweis', text: 'Begriffe können sich zwischen ERP-Systemen, Teams und Organisationen unterscheiden. Für ein konkretes Vorhaben sollten Definitionen mit den zuständigen Fachverantwortlichen und Systemverantwortlichen abgestimmt werden.' }
    ], related: [internal('ERP-Module', '/erp/module/', 'Funktionsbereiche einordnen'), internal('Zentrale Konzepte', '/erp/konzepte/', 'Struktur, Stamm- und Bewegungsdaten'), internal('ERP Terminology Trainer', '/ressourcen/', 'Begriffe systemübergreifend vergleichen')]
  },
  {
    path: '/erp/module', section: 'ERP verstehen', title: 'ERP-Module: Funktionen entlang des Unternehmens',
    metaTitle: 'ERP-Module: Funktionen im Unternehmenskontext', description: 'Überblick über ERP-Module — von Vertrieb und Beschaffung bis Business Intelligence und E-Commerce.',
    keywords: 'ERP Module, Vertrieb, Beschaffung, Produktion, Buchhaltung, Business Intelligence', eyebrow: 'ERP verstehen · 02',
    lead: 'Module machen fachliche Zuständigkeiten sichtbar. Ihr Wert entsteht jedoch erst in den Übergaben zwischen ihnen.',
    blocks: [
      { type: 'prose', heading: 'Modulübersicht als Landkarte', paragraphs: ['ERP umfasst Funktionsbereiche von Vertrieb und Beschaffung bis zu Finanzen, Personal und Analyse. Die Begriffe und Zuordnungen sind keine universelle Taxonomie: Systeme und Organisationen schneiden Verantwortlichkeiten unterschiedlich zu.'] },
      { type: 'feature-grid', heading: 'Die sichtbaren Funktionsbereiche', items: [
        { number: '01', title: 'Sales & CRM', text: 'Auftrag, Terminierung, Versand, Rechnungsstellung sowie Kundenbeziehungen und -erfahrungen.' },
        { number: '02', title: 'Procurement & SCM', text: 'Beschaffung, Logistik, Lagerprozesse sowie Steuerung von Angebot und Nachfrage.' },
        { number: '03', title: 'Production & PLM', text: 'Planung und Optimierung von Fertigungskapazität und Materialressourcen.' },
        { number: '04', title: 'Accounting & Governance', text: 'Finanzvorgänge, Compliance, Leistungseinblicke und Steuerung von Unternehmensdiensten.' },
        { number: '05', title: 'Human Resource & EAM', text: 'Mitarbeiterdaten sowie nachhaltige Verwaltung von Anlagenlebenszyklen.' },
        { number: '06', title: 'BI & E-Commerce', text: 'Daten in Informationen überführen und externe Strategien unterstützen.' }
      ]},
      { type: 'prose', heading: 'Nicht nur ein Modulproblem', paragraphs: ['Wenn ein Kundenauftrag eine Lieferung, eine Rechnung, eine Buchung und eine Analyse auslöst, entstehen die relevanten Fragen oft an den Schnittstellen. Die Prozessseiten zeigen deshalb End-to-End-Sichten statt einer isolierten Modulbetrachtung.'] }
    ], related: [internal('Integrierte Prozesse', '/prozesse/', 'Von Modulen zu Übergaben'), internal('Cloud ERP', '/erp/cloud/', 'Bereitstellungs- und Plattformkontext')]
  },
  {
    path: '/erp/cloud', section: 'ERP verstehen', title: 'Cloud ERP: Plattform, Betrieb und Integrationsraum',
    metaTitle: 'Cloud ERP: Ein Überblick für Unternehmenssysteme', description: 'Cloud-ERP im Kontext von Echtzeitdaten, Skalierbarkeit, IT-Aufwand und unterschiedlichen Plattformansätzen.',
    keywords: 'Cloud ERP, SAP S/4HANA Cloud, Dynamics 365, Oracle ERP, Odoo', eyebrow: 'ERP verstehen · 03',
    lead: 'Cloud ERP verlagert nicht nur Infrastruktur. Es verändert, wie Systeme integriert, betrieben und weiterentwickelt werden.',
    blocks: [
      { type: 'prose', heading: 'Cloud-ERP einordnen', paragraphs: ['Cloud ERP integriert Prozesse wie Finanzen, Personal und Lieferkette in einer Cloud-gehosteten Plattform. Typische Ziele sind Echtzeitdatenzugriff, Skalierbarkeit und ein Betrieb, der sich stärker auf fachliche Weiterentwicklung konzentrieren kann.', 'Diese Darstellung ist ein Einstieg, keine Produktauswahl. Architektur, Datenstandorte, Erweiterbarkeit, Betriebsmodell und Governance müssen im jeweiligen Kontext betrachtet werden.'] },
      { type: 'feature-grid', heading: 'Plattformansätze im Überblick', items: [
        { number: 'SAP', title: 'SAP', text: 'S/4HANA Cloud wurde mit Automatisierung, KI-gestützten Einblicken und SAP-Integration verbunden.' },
        { number: 'MS', title: 'Microsoft', text: 'Dynamics 365 wurde als anpassbarer Cloud-Ansatz mit Microsoft-Ökosystembezug genannt.' },
        { number: 'IBM', title: 'IBM', text: 'IBM erschien im Zusammenhang mit Cloud-Infrastruktur und Diensten für ERP-Umgebungen.' },
        { number: 'ORA', title: 'Oracle', text: 'Oracle ERP Cloud wurde mit Finanzen, Projektmanagement, Beschaffung und Analytik verbunden.' },
        { number: 'ODO', title: 'Odoo', text: 'Odoo wurde als modularer, auch Open-Source-bezogener Ansatz für kleinere und mittlere Unternehmen eingeordnet.' }
      ]},
      { type: 'note', tone: 'sand', title: 'Einordnung statt Produktauswahl', text: 'Die genannten Plattformen zeigen unterschiedliche Ausprägungen von Cloud ERP. Sie sind keine Produktempfehlung; Auswahl, Betrieb, Datenstandorte, Erweiterbarkeit und Governance müssen zur jeweiligen Organisation passen.' }
    ], related: [internal('APIs', '/transformation/apis/', 'Integration gestalten'), internal('KI & Ethik', '/ki/', 'Automatisierung verantwortungsvoll einordnen')]
  },
  {
    path: '/erp/konzepte', section: 'ERP verstehen', title: 'Zentrale Konzepte: Struktur, Stammdaten, Dokumente',
    metaTitle: 'ERP-Konzepte: Struktur, Stamm- und Bewegungsdaten', description: 'Unternehmensstruktur, Customizing, Stamm- und Bewegungsdaten als zentrale Konzepte für ERP-Prozesse.',
    keywords: 'ERP Konzepte, Unternehmensstruktur, Customizing, Stammdaten, Bewegungsdaten', eyebrow: 'ERP verstehen · 04',
    lead: 'Gemeinsame Daten brauchen gemeinsame Strukturen — und klare Unterscheidungen zwischen Konfiguration und Tagesgeschäft.',
    blocks: [
      { type: 'prose', heading: 'Unternehmensstruktur und Customizing', paragraphs: ['ERP trennt Anwendungen für tägliche Abläufe von der Konfiguration der Geschäftsprozesse und Unternehmensstruktur. Dieses Customizing schafft den Rahmen, in dem tägliche Vorgänge verarbeitet werden.', 'Für die praktische Arbeit bedeutet das: Eine fachliche Frage kann sich auf die operativen Daten beziehen — oder auf die zugrunde liegende Struktur und Regel. Beide Ebenen sollten nicht verwechselt werden.'] },
      { type: 'feature-grid', heading: 'Drei Datenperspektiven', items: [
        { number: '01', title: 'Struktur', text: 'Organisationseinheiten und Zuordnungen geben Daten und Vorgängen einen Kontext.' },
        { number: '02', title: 'Stammdaten', text: 'Relativ stabile Informationen wie Materialien, Kunden, Lieferanten, Konten, Kostenstellen oder Mitarbeitende.' },
        { number: '03', title: 'Bewegungsdaten', text: 'Dokumentierte einzelne Prozessschritte wie Kundenauftrag, Lieferantenrechnung oder Fertigungsauftrag.' }
      ]},
      { type: 'note', tone: 'teal', title: 'Begriffe abstimmen', text: 'Teams können dieselben Begriffe unterschiedlich verwenden; eine abgestimmte Begriffsdefinition schafft Klarheit vor Konfiguration, Analyse und Integration.' }
    ], related: [internal('Datenbanken', '/erp/datenbanken/', 'Speicherung und Analyse'), internal('ERP Terminology Trainer', '/ressourcen/', 'Systemübergreifend vergleichen')]
  },
  {
    path: '/erp/datenbanken', section: 'ERP verstehen', title: 'Datenbanken: In-Memory und Kompression einordnen',
    metaTitle: 'ERP-Datenbanken: In-Memory und Kompression', description: 'In-Memory-Datenmanagement, spaltenbasierte Organisation und Kompressionsverfahren im ERP-Kontext.',
    keywords: 'ERP Datenbanken, In-Memory, Kompression, Column Store, Dictionary Encoding', eyebrow: 'ERP verstehen · 05',
    lead: 'Datenverarbeitung prägt, welche Analysen und Abläufe ein System in welcher Zeit unterstützen kann.',
    blocks: [
      { type: 'prose', heading: 'Datenverarbeitung einordnen', paragraphs: ['In-Memory-Datenmanagement, Multi-Core- und 64-Bit-Technologie, spaltenbasierte Organisation sowie Kompressionsalgorithmen sind wichtige Konzepte moderner Datenverarbeitung. In-Memory bedeutet, dass Daten im Arbeitsspeicher (RAM) verarbeitet werden.', 'Diese Website übernimmt den sichtbaren Ausgangspunkt, ergänzt ihn aber nicht um eine produktbezogene Leistungszusage. Datenbankarchitektur ist immer Teil eines größeren Zusammenspiels aus Datenmodell, Abfragen, Integration, Sicherheit und Betrieb.'] },
      { type: 'feature-grid', heading: 'Konzepte im Überblick', items: [
        { number: 'RAM', title: 'In-Memory', text: 'Datenmanagement mit Daten im Arbeitsspeicher für schnelle Verarbeitung und Analyse.' },
        { number: 'COL', title: 'Column-Based', text: 'Spaltenbasierte Organisation als Ansatz für Datenhaltung und analytische Verarbeitung.' },
        { number: 'DICT', title: 'Dictionary Encoding', text: 'Unterschiedliche Werte werden in einem Lexikon abgelegt und über IDs referenziert.' },
        { number: 'RLE', title: 'Run Length Encoding', text: 'Ein ebenfalls genannter Kompressionsansatz für Datenfolgen.' }
      ]}
    ], related: [internal('Zentrale Konzepte', '/erp/konzepte/', 'Daten im Prozesskontext'), internal('APIs', '/transformation/apis/', 'Daten sicher austauschen')]
  },
  {
    path: '/prozesse', section: 'Prozesse', title: 'Integrierte Geschäftsprozesse: Übergaben sichtbar machen',
    metaTitle: 'Integrierte Geschäftsprozesse im ERP-Kontext', description: 'Überblick zu funktionsübergreifenden ERP-Prozessen und fünf End-to-End-Sichten von Record-to-Report bis Lead-to-Cash.',
    keywords: 'integrierte Geschäftsprozesse, End-to-End, ERP Prozesse, R2R, S2P', eyebrow: 'Prozesse · Übersicht',
    lead: 'Integration zeigt sich nicht in einzelnen Modulen, sondern dort, wo Informationen, Verantwortung und Arbeit zwischen Bereichen weitergegeben werden.',
    blocks: [
      { type: 'prose', heading: 'Integration über Bereichsgrenzen', paragraphs: ['Integrierte Geschäftsprozesse verbinden Funktionen und Aktivitäten über Bereichsgrenzen hinweg. Entscheidend sind funktionsübergreifende Zusammenarbeit, Echtzeit-Datenaustausch, End-to-End-Sichtbarkeit, weniger Redundanz, einheitlichere Kundenerlebnisse und Anpassungsfähigkeit.', 'Die folgenden Prozessseiten nutzen diese Merkmale als Landkarte. Sie konzentrieren sich auf Übergaben, Informationsflüsse und Verantwortlichkeiten statt auf isolierte Modulgrenzen.'] },
      { type: 'feature-grid', heading: 'Fünf End-to-End-Sichten', items: [
        { number: 'R2R', title: 'Record-to-Report', text: 'Finanzielle Vorgänge erfassen, abstimmen, abschließen und berichten.', href: '/prozesse/record-to-report/' },
        { number: 'R2R', title: 'Recruit-to-Retire', text: 'Den Beschäftigtenlebenszyklus von Rekrutierung bis Offboarding gestalten.', href: '/prozesse/recruit-to-retire/' },
        { number: 'S2P', title: 'Source-to-Pay', text: 'Beschaffung, Material- und Dienstleistungsflüsse bis zur Zahlung verbinden.', href: '/prozesse/source-to-pay/' },
        { number: 'D2O', title: 'Design-to-Operate', text: 'Von Entwurf und Engineering über Produktion bis Betrieb denken.', href: '/prozesse/design-to-operate/' },
        { number: 'L2C', title: 'Lead-to-Cash', text: 'Von Lead und Kundenbeziehung über Auftrag bis zu Rechnung und Zahlung.', href: '/prozesse/lead-to-cash/' }
      ]},
      { type: 'note', tone: 'sand', title: 'Prozesssicht', text: 'Die fünf Prozesssichten bilden eine gemeinsame Landkarte. Ihre konkrete Ausgestaltung hängt von Branche, Organisation, Systemlandschaft und Reifegrad ab.' }
    ], related: [internal('Zentrale Konzepte', '/erp/konzepte/', 'Daten und Struktur für Prozesse'), internal('Portfolio & Projektmanagement', '/transformation/portfolio-projektmanagement/', 'Veränderung organisieren')]
  },
  {
    path: '/prozesse/record-to-report', section: 'Prozesse', title: 'Record-to-Report: Finanzinformationen nachvollziehbar führen',
    metaTitle: 'Record-to-Report: Finanzprozesse im ERP', description: 'Acht Schritte von Record-to-Report — von Transaktionserfassung bis kontinuierlicher Verbesserung.',
    keywords: 'Record-to-Report, R2R, Finanzabschluss, Hauptbuch, IFRS', eyebrow: 'Prozesse · R2R',
    lead: 'Record-to-Report verbindet Beleg, Buchung, Abstimmung, Abschluss, Bericht und Verbesserung.',
    blocks: [
      { type: 'process', heading: 'Acht Schritte im Überblick', intro: 'Die Prozesssicht verbindet die Verarbeitung einzelner Vorgänge mit Abschluss, Berichterstattung, Kontrolle und Verbesserung.', items: [
        { number: '01', title: 'Transaktionen erfassen', text: 'Verkäufe, Einkäufe, Aufwendungen und weitere Vorgänge werden mit Belegen dokumentiert.' },
        { number: '02', title: 'Journal buchen', text: 'Vorgänge werden ins Hauptbuch übertragen; Anpassungen bilden die Finanzlage ab.' },
        { number: '03', title: 'Konten abstimmen', text: 'Salden, Belege und externe Auszüge werden verglichen und Abweichungen geklärt.' },
        { number: '04', title: 'Periode abschließen', text: 'Offene Vorgänge und notwendige Anpassungsbuchungen werden berücksichtigt.' },
        { number: '05', title: 'Finanzberichte erstellen', text: 'Bilanz, Gewinn- und Verlustrechnung sowie Kapitalflussrechnung werden aufbereitet.' },
        { number: '06', title: 'Analysieren und prüfen', text: 'Ist, Budget und Forecast werden für Steuerung und Entscheidungen gegenübergestellt.' },
        { number: '07', title: 'Compliance sichern', text: 'Interne und externe Prüfung stützen sich auf nachvollziehbare Dokumentation.' },
        { number: '08', title: 'Verbessern', text: 'Erkenntnisse und Automatisierungsmöglichkeiten fließen in den Ablauf zurück.' }
      ]},
      { type: 'prose', heading: 'SAP Best Practices im Prozesskontext', paragraphs: ['SAP Best Practices werden häufig als einsatzbereite, modulare Scope Items für analytische, operative und integrative Geschäftsprozesse verstanden. Sie können einen strukturierten Ausgangspunkt bieten, ersetzen aber keine fachliche Klärung von Zielbild, Daten, Rollen und Abweichungen.'] },
      { type: 'links', heading: 'Weiterführende Detailverweise', items: [
        external('SAP Help: General Ledger', 'https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/651d8af3ea974ad1a4d74449122c620e/9f53c2531bb9b44ce10000000a174cb4.html?version=2021.000', 'Direkter Verweis auf weiterführende SAP-Dokumentation.'),
        external('SAP Help: General Journal Entries', 'https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/651d8af3ea974ad1a4d74449122c620e/b050d7531a4d424de10000000a174cb4.html?version=2021.000', 'Direkter Verweis auf weiterführende SAP-Dokumentation.')
      ]}
    ], related: [internal('Integrierte Prozesse', '/prozesse/', 'Zur Prozessübersicht'), internal('SAP Activate', '/transformation/sap-activate/', 'Implementierungsrahmen')]
  },
  {
    path: '/prozesse/recruit-to-retire', section: 'Prozesse', title: 'Recruit-to-Retire: Den Beschäftigtenlebenszyklus verbinden',
    metaTitle: 'Recruit-to-Retire: HR-Prozess im ERP-Kontext', description: 'Sieben Phasen von Recruit-to-Retire — Rekrutierung, Auswahl, Onboarding und Offboarding.',
    keywords: 'Recruit-to-Retire, HR Prozess, Onboarding, Talententwicklung, Offboarding', eyebrow: 'Prozesse · R2R',
    lead: 'Recruit-to-Retire beschreibt den Bogen vom ersten Kontakt mit Kandidatinnen und Kandidaten bis zum geordneten Austritt.',
    blocks: [
      { type: 'process', heading: 'Sieben Phasen im Überblick', intro: 'Recruit-to-Retire verbindet alle Phasen des Beschäftigtenlebenszyklus in einem gemeinsamen Rahmen.', items: [
        { number: '01', title: 'Recruitment', text: 'Bedarf klären, Rolle beschreiben, Kandidaten ansprechen und Bewerbungen verwalten.' },
        { number: '02', title: 'Selection', text: 'Vorauswahl, Interviews, Assessments und Referenzen strukturieren.' },
        { number: '03', title: 'Onboarding', text: 'Angebot, Vorbereitung, Orientierung, Ausstattung und erste Schulung verbinden.' },
        { number: '04', title: 'Performance Management', text: 'Ziele, Feedback und Reviews für einen laufenden Austausch nutzen.' },
        { number: '05', title: 'Development', text: 'Lernen, Karrierepfade und Nachfolgeplanung unterstützen.' },
        { number: '06', title: 'Retention', text: 'Arbeitsumfeld, Anerkennung, Engagement und Balance gestalten.' },
        { number: '07', title: 'Offboarding', text: 'Übergabe von Wissen, Exit-Gespräch und administrative Abschlüsse koordinieren.' }
      ]},
      { type: 'note', tone: 'teal', title: 'Übergaben zählen', text: 'Damit Wissen, Verantwortlichkeiten und Daten nicht verloren gehen, müssen gerade Onboarding und Offboarding bewusst gestaltet werden.' }
    ], related: [internal('Integrierte Prozesse', '/prozesse/', 'Zur Prozessübersicht'), internal('ERP Terminology Trainer', '/ressourcen/', 'Begriffe rollenbezogen erklären')]
  },
  {
    path: '/prozesse/source-to-pay', section: 'Prozesse', title: 'Source-to-Pay: Beschaffung bis Bezahlung verbinden',
    metaTitle: 'Source-to-Pay: Beschaffung im ERP-Kontext', description: 'Source-to-Pay, MRP, Stücklisten, Arbeitspläne, Kostenarten und Beschaffung im ERP-Kontext.',
    keywords: 'Source-to-Pay, S2P, Beschaffung, MRP, Stückliste', eyebrow: 'Prozesse · S2P',
    lead: 'Source-to-Pay verbindet Planung, Bedarfe, Beschaffung, Leistungserbringung und Abrechnung.',
    blocks: [
      { type: 'prose', heading: 'Beschaffung als integrierter Ablauf', paragraphs: ['Source-to-Pay verbindet Beschaffung bis Bezahlung mit MRP, Produktionsplanung, Stücklisten, Arbeitsplänen, Kostenarten und Fertigungsauftragsabrechnung.', 'Die Prozesssicht verbindet Beschaffung, Planung und Kostenbezug, damit Material- und Dienstleistungsflüsse nicht losgelöst von ihren wirtschaftlichen Folgen betrachtet werden.'] },
      { type: 'process', heading: 'Die angegebene Abfolge', items: [
        { number: '01', title: 'Bedarf planen', text: 'Bedarfsprognosen und Planung schaffen den Ausgangspunkt.' },
        { number: '02', title: 'Produktion planen', text: 'Kapazität und Materialbedarf werden auf die erwartete Nachfrage ausgerichtet.' },
        { number: '03', title: 'MRP ausführen', text: 'Als Outputs nannte die Quelle Bestellanforderungen, Terminpläne und geplante Aufträge.' },
        { number: '04', title: 'Beschaffen und abrechnen', text: 'Materialien und Dienstleistungen werden beschafft, verarbeitet und mit Kostenbezug abgerechnet.' }
      ]},
      { type: 'feature-grid', heading: 'Genannte Masterdaten', items: [
        { number: 'WC', title: 'Arbeitsplätze', text: 'Grundlage für Kapazität und Kostenberechnung von Arbeitsgängen.' },
        { number: 'RT', title: 'Arbeitspläne', text: 'Abfolge von Produktionsschritten.' },
        { number: 'BOM', title: 'Stücklisten', text: 'Benötigte Komponenten und Mengen.' },
        { number: 'CE', title: 'Kostenarten', text: 'Identifikation und Verrechnung von Kosten in Finanz- und Controllingbezug.' }
      ]}
    ], related: [internal('ERP-Module', '/erp/module/', 'Beschaffung und Supply Chain'), internal('Record-to-Report', '/prozesse/record-to-report/', 'Finanzieller Abschluss')]
  },
  {
    path: '/prozesse/design-to-operate', section: 'Prozesse', title: 'Design-to-Operate: Übersicht mit dokumentierter Lücke',
    metaTitle: 'Design-to-Operate: Vom Entwurf zum Betrieb', description: 'Design-to-Operate verbindet Entwurf, Engineering, Produktion, Betrieb und Lieferung in einer End-to-End-Sicht.',
    keywords: 'Design-to-Operate, D2O, Produktlebenszyklus, ERP Prozesse, Engineering', eyebrow: 'Prozesse · D2O',
    lead: 'Design-to-Operate verbindet in der Prozessübersicht Entwurf, Engineering, Produktion, Betrieb und Lieferung.',
    blocks: [
      { type: 'prose', heading: 'Vom Entwurf zum Betrieb', paragraphs: ['Design-to-Operate beschreibt den Produktlebenszyklus von Entwurf und Engineering über Produktion und Betrieb bis zur Lieferung.', 'Die Prozesssicht macht Übergaben zwischen Entwicklung, Planung, Fertigung, Anlagenbetrieb, Qualität und Logistik sichtbar. Sie hilft, Entscheidungen entlang des Lebenszyklus statt nur innerhalb einzelner Funktionen zu betrachten.'] },
      { type: 'note', tone: 'sand', title: 'Worauf es ankommt', text: 'Gemeinsame Daten, abgestimmte Stücklisten und Änderungen, nachvollziehbare Freigaben sowie Rückmeldungen aus dem Betrieb verbinden die beteiligten Funktionen.' },
      { type: 'prose', heading: 'Praktische Einordnung', paragraphs: ['Die konkrete Prozessgestaltung hängt von Produkt, Branche und Systemlandschaft ab. Ein gemeinsames Zielbild verhindert, dass Optimierungen im Entwurf spätere Auswirkungen auf Betrieb, Service oder Nachhaltigkeit übersehen.'] }
    ], related: [internal('Integrierte Prozesse', '/prozesse/', 'Zur Prozessübersicht'), internal('Historie', '/historie/', 'Vollständige Archivnotiz')]
  },
  {
    path: '/prozesse/lead-to-cash', section: 'Prozesse', title: 'Lead-to-Cash: Übersicht mit dokumentierter Lücke',
    metaTitle: 'Lead-to-Cash: Von Nachfrage zu Zahlung', description: 'Lead-to-Cash verbindet Leadmanagement, Kundenbeziehung, Angebot, Auftrag, Leistungserbringung, Rechnung und Zahlung.',
    keywords: 'Lead-to-Cash, L2C, Vertrieb, CRM, ERP Prozesse, Kundenbeziehung', eyebrow: 'Prozesse · L2C',
    lead: 'Lead-to-Cash führt von Lead und Kundenbeziehung über Auftragserfüllung bis zu Rechnung und Zahlung.',
    blocks: [
      { type: 'prose', heading: 'Vom Entwurf zum Betrieb', paragraphs: ['Lead-to-Cash verbindet die Gewinnung und Pflege von Vertriebsleads mit Verkauf, Auftragserfüllung, Rechnungsstellung und Zahlung.', 'Die Prozesssicht verknüpft Vertriebsinformationen mit Verfügbarkeit, Preisfindung, Lieferfähigkeit, Leistungserbringung, Abrechnung und Forderungsmanagement. So werden Kundenerlebnis und finanzielle Folgen gemeinsam betrachtet.'] },
      { type: 'note', tone: 'sand', title: 'Worauf es ankommt', text: 'Klare Übergaben zwischen Vertrieb, Service, Logistik und Finanzwesen machen den Prozess für Kunden und interne Teams nachvollziehbar.' },
      { type: 'prose', heading: 'Praktische Einordnung', paragraphs: ['Die konkrete Ausgestaltung hängt von Geschäftsmodell, Vertragsmodell und Systemlandschaft ab. Ein einheitlicher Daten- und Statusfluss verhindert, dass Kundenzusagen, Leistung und Rechnung auseinanderfallen.'] }
    ], related: [internal('ERP-Module', '/erp/module/', 'Sales und CRM'), internal('Historie', '/historie/', 'Vollständige Archivnotiz')]
  },
  {
    path: '/transformation', section: 'Transformation', title: 'Transformation: Veränderung als vernetztes Vorhaben',
    metaTitle: 'ERP-Transformation: Projekte, Architektur und APIs', description: 'ERP-Transformation im Zusammenspiel von Portfolioarbeit, Projektmanagement, SAP Activate, Architektur und APIs.',
    keywords: 'ERP Transformation, Projektmanagement, SAP Activate, Enterprise Architecture, APIs', eyebrow: 'Transformation · Übersicht',
    lead: 'Ein ERP-Vorhaben verändert Prozesse, Daten, Rollen und technische Grenzen gleichzeitig.',
    blocks: [
      { type: 'prose', heading: 'Mehr als Implementierung', paragraphs: ['ERP-Transformation verbindet Portfolio- und Projektmanagement, SAP Activate, EPPM, Requirements Engineering, Prozessmanagement und APIs. Diese Perspektiven ergänzen sich, ohne ein einheitliches Vorgehensmodell zu erzwingen.', 'Der gemeinsame Nenner: Veränderung braucht eine klare Ausgangsfrage, nachvollziehbare Entscheidungen und eine Sprache, die Fachseite, Projektteam und technische Umsetzung verbindet.'] },
      { type: 'feature-grid', heading: 'Orientierung für Veränderung', items: [
        { number: '01', title: 'Portfolio & Projekte', text: 'Prioritäten, Abhängigkeiten, Finanzen, Ressourcen und Nutzen sichtbar machen.', href: '/transformation/portfolio-projektmanagement/' },
        { number: '02', title: 'SAP S/4HANA EPPM', text: 'Portfolios und Projekte vom strategischen Rahmen bis zur Ausführung verbinden.', href: '/transformation/s4hana-eppm/' },
        { number: '03', title: 'SAP Activate', text: 'Best Practices, Guided Configuration und Methodik für strukturierte Implementierung.', href: '/transformation/sap-activate/' },
        { number: '04', title: 'Enterprise Architecture', text: 'Systemlandschaft, Anforderungen und Grenzen bewusst einordnen.', href: '/transformation/enterprise-architecture/' },
        { number: '05', title: 'APIs', text: 'Daten und Funktionen zwischen Systemen sicher und verständlich verbinden.', href: '/transformation/apis/' }
      ]}
    ], related: [internal('Integrierte Prozesse', '/prozesse/', 'Prozesssicht ergänzen'), internal('Projekte', '/projekte/', 'Konzepte und Prototypen')]
  },
  {
    path: '/transformation/portfolio-projektmanagement', section: 'Transformation', title: 'Portfolio & Projektmanagement: Prioritäten mit Ausführung verbinden',
    metaTitle: 'Portfolio und Projektmanagement im ERP-Kontext', description: 'Portfolio- und Projektmanagement, Planung, Ressourcen, Risiken, Finanzen und Steuerung im ERP-Kontext.',
    keywords: 'Portfolio Management, Projektmanagement, ERP Projekte, Ressourcen, Risikomanagement', eyebrow: 'Transformation · PPM',
    lead: 'Portfolios ordnen strategische Entscheidungen. Projekte übersetzen sie in konkrete Ergebnisse und Verantwortung.',
    blocks: [
      { type: 'prose', heading: 'Portfolioarbeit und Projektausführung', paragraphs: ['Enterprise Portfolio and Project Management verbindet strategische Prioritäten mit der Steuerung über den Projektlebenszyklus. Wichtige Perspektiven sind Finanzplanung, Risikomanagement, Ressourcenallokation und die Integration mit angrenzenden Systembereichen.', 'Portfolio-Definitionen, Priorisierungen, Initiativen und ihr Lebenszyklus stehen dabei neben Projektstrukturen, Zeitplanung, Ressourcenmanagement, Ausführung und Kontrolle.'] },
      { type: 'feature-grid', heading: 'Die sichtbaren Steuerungsfragen', items: [
        { number: 'P', title: 'Portfolio', text: 'Welche Initiativen gehören zusammen und wie werden sie priorisiert?' },
        { number: 'F', title: 'Finanzen', text: 'Wie werden Kosten, Kapazität und Finanzplanung mit der Durchführung verbunden?' },
        { number: 'R', title: 'Risiken', text: 'Welche Abhängigkeiten und Risiken müssen vor der Ausführung sichtbar werden?' },
        { number: 'E', title: 'Evidenz', text: 'Welche Daten und Kennzahlen machen Entscheidungen nachvollziehbar?' }
      ]},
      { type: 'note', tone: 'teal', title: 'Keine Produktzusage', text: 'Die Seite dient der fachlichen Orientierung. Funktionsumfang und Verfügbarkeit müssen für das konkrete SAP-Release und Betriebsmodell geprüft werden.' }
    ], related: [internal('SAP S/4HANA EPPM', '/transformation/s4hana-eppm/', 'Öffentliche EPPM-Details'), internal('Projektmanagement', '/transformation/projektmanagement/', 'Methoden und Projektrahmen')]
  },
  {
    path: '/transformation/s4hana-eppm', section: 'Transformation', title: 'SAP S/4HANA EPPM: Portfolio, Projekt, Finanzen, Ressourcen',
    metaTitle: 'SAP S/4HANA EPPM: Portfolio und Projektmanagement', description: 'Überblick zu SAP S/4HANA EPPM, Portfolioarbeit, Projektsteuerung und Ressourcen.',
    keywords: 'SAP S/4HANA EPPM, Portfolio Management, Project Management, SAP PS, Ressourcenmanagement', eyebrow: 'Transformation · EPPM',
    lead: 'EPPM verbindet strategische Portfolioarbeit mit operativer Projektausführung.',
    blocks: [
      { type: 'prose', heading: 'Portfolio, Projekte und Ressourcen verbinden', paragraphs: ['SAP S/4HANA EPPM verbindet Portfolio and Project Management, Commercial Project Management, SAP Project System, finanzielle Projektkontrolle und Ressourcenmanagement. Der Bogen reicht von Portfolio-Planung über Ausführung bis Abschluss.', 'Zur Einordnung gehören Fiori, Business Client und GUI, Finanz- und Kapazitätsplanung, Kostenplanung, Integrationsszenarien, Berechtigungen, Analytics Cloud, Dashboards, Kennzahlen und Scoring-Modelle.'] },
      { type: 'feature-grid', heading: 'Fünf Perspektiven im Überblick', items: [
        { number: '01', title: 'Portfolio Management', text: 'Strategische Entscheidungen und Aufsicht über Initiativen.' },
        { number: '02', title: 'Project Management', text: 'Planung, Steuerung und operative Ausführung einzelner Projekte.' },
        { number: '03', title: 'SAP Project System', text: 'Finanzielle Projektkontrolle und Budgetbezug.' },
        { number: '04', title: 'Commercial PM', text: 'Kommerzielle Aspekte im Projektkontext.' },
        { number: '05', title: 'Resource Management', text: 'Zuteilung und Nutzung von Ressourcen.' }
      ]},
      { type: 'note', tone: 'sand', title: 'Lernen und Qualifizierung', text: 'Lernpfade und Zertifizierungen verändern sich. Für aktuelle Inhalte, Prüfungen und Voraussetzungen sollten ausschließlich die offiziellen SAP-Lernangebote herangezogen werden.' }
    ], related: [internal('Historie', '/historie/', 'EPPM-Archivnotizen'), internal('SAP Activate', '/transformation/sap-activate/', 'Implementierung einordnen')]
  },
  {
    path: '/transformation/projektmanagement', section: 'Transformation', title: 'Projektmanagement: Klarheit vor Tempo',
    metaTitle: 'Projektmanagement: Methoden im ERP-Kontext', description: 'PMBOK, ISO 21500, PRINCE2, agile Methoden und SAP Activate im ERP-Projektkontext.',
    keywords: 'Projektmanagement, PMBOK, ISO 21500, PRINCE2, agile Methoden', eyebrow: 'Transformation · Projektmanagement',
    lead: 'Methoden strukturieren Zusammenarbeit. Sie ersetzen nicht die Klärung von Ziel, Umfang, Rollen und Entscheidungen.',
    blocks: [
      { type: 'prose', heading: 'Methoden im Projektkontext', paragraphs: ['Projektmanagement verbindet PMBOK, ISO-Standards, PRINCE2, Business-Continuity-Bezüge, agile Methoden und SAP Activate. Dazu gehören Projektauftrag und Stakeholderidentifikation, Projektziele und Umfang, Project Brief und PID, Vision und Roadmap sowie User Stories und Backlogs.', 'Die Seite wird hier nicht zu einem Methodenvergleich erweitert. Sie zeigt vielmehr, dass ERP-Projekte unterschiedliche Denkweisen verbinden müssen: klassische Steuerung, fachliche Anforderungen, iterative Arbeit und standardisierte Implementierungsrahmen.'] },
      { type: 'feature-grid', heading: 'Wiederkehrende Klärungen', items: [
        { number: 'Z', title: 'Ziel & Umfang', text: 'Was soll erreicht werden — und welche Grenzen gelten?' },
        { number: 'S', title: 'Stakeholder', text: 'Wer ist betroffen, wer entscheidet und wer benötigt Informationen?' },
        { number: 'A', title: 'Arbeitspakete', text: 'Wie werden Anforderungen, Aufgaben, Abhängigkeiten und Fortschritt sichtbar?' },
        { number: 'L', title: 'Lernen', text: 'Wie werden Erkenntnisse, Risiken und Anpassungen zurück in die Steuerung geführt?' }
      ]}
    ], related: [internal('SAP Activate', '/transformation/sap-activate/', 'Implementierungsrahmen'), internal('Portfolio & Projektmanagement', '/transformation/portfolio-projektmanagement/', 'Strategie und Ausführung')]
  },
  {
    path: '/transformation/sap-activate', section: 'Transformation', title: 'SAP Activate: Best Practices, Konfiguration, Methodik',
    metaTitle: 'SAP Activate: Best Practices und Methodik', description: 'Drei Säulen und sechs Phasen von SAP Activate im ERP-Implementierungskontext.',
    keywords: 'SAP Activate, Best Practices, Guided Configuration, Discover, Deploy', eyebrow: 'Transformation · SAP Activate',
    lead: 'SAP Activate verbindet Best Practices, Guided Configurations und eine strukturierte Methodik.',
    blocks: [
      { type: 'feature-grid', heading: 'Drei Säulen im Überblick', items: [
        { number: '01', title: 'Best Practices', text: 'Vorgefertigte, für SAP S/4HANA optimierte Geschäftsprozesse.' },
        { number: '02', title: 'Guided Configurations', text: 'Werkzeuge für standardisierte und anpassbare Systemkonfiguration, besonders im Cloud-Kontext.' },
        { number: '03', title: 'Methodology', text: 'Ein agiler Rahmen für die strukturierte Implementierung.' }
      ]},
      { type: 'process', heading: 'Sechs sichtbare Phasen', intro: 'Die Phasen geben ERP-Projekten einen verständlichen Rahmen von erster Orientierung bis zum laufenden Betrieb.', items: [
        { number: '01', title: 'Discover', text: 'Ausgangslage, Zielbild und Möglichkeiten erkunden.' },
        { number: '02', title: 'Prepare', text: 'Projekt aufsetzen, Rollen und Arbeitsweise vorbereiten.' },
        { number: '03', title: 'Explore', text: 'Prozesse und Anforderungen anhand eines Ausgangspunkts verstehen.' },
        { number: '04', title: 'Realize', text: 'Konfiguration, Erweiterung und Test in die Umsetzung führen.' },
        { number: '05', title: 'Deploy', text: 'Übergang in Nutzung und Betrieb organisieren.' },
        { number: '06', title: 'Run', text: 'Betrieb, Verbesserung und Weiterentwicklung fortführen.' }
      ]},
      { type: 'note', tone: 'sand', title: 'Linkpflege', text: 'Aktuelle Roadmaps, Lernangebote und Best Practices sollten stets direkt über die offiziellen SAP-Portale geprüft werden.' }
    ], related: [internal('Projektmanagement', '/transformation/projektmanagement/', 'Projektkontext'), internal('Record-to-Report', '/prozesse/record-to-report/', 'Best Practices im Prozesskontext')]
  },
  {
    path: '/transformation/enterprise-architecture', section: 'Transformation', title: 'Enterprise Architecture: Quellstatus und Anforderungen',
    metaTitle: 'Enterprise Architecture: Systeme bewusst gestalten', description: 'Enterprise Architecture verbindet Systemgrenzen, Informationsflüsse, Anforderungen und Veränderung zu einem nachvollziehbaren Gesamtbild.',
    keywords: 'Enterprise Architecture, Requirements Engineering, ERP Architektur, IREB, Systemlandschaft', eyebrow: 'Transformation · Enterprise Architecture',
    lead: 'Architektur braucht Perspektiven auf Systeme, Anforderungen, Informationen, Integrationen und Verantwortlichkeiten.',
    blocks: [
      { type: 'prose', heading: 'Architektur und Anforderungen', paragraphs: ['Enterprise Architecture und Requirements Engineering ergänzen sich: Architektur schafft Orientierung über Systeme und Abhängigkeiten, Anforderungen machen die erwartete Wirkung und die Kriterien für eine Lösung präzise.', 'Beide Perspektiven helfen, fachliche Ziele, technische Grenzen und Änderungen über den Lebenszyklus eines Systems hinweg nachvollziehbar zu gestalten.'] },
      { type: 'note', tone: 'sand', title: 'Zusammenspiel bewusst gestalten', text: 'Requirements Engineering und Enterprise Architecture können sich in einem Vorhaben berühren, sind aber nicht dasselbe. Eine klare Abgrenzung verhindert, dass Fachziele, Lösungsoptionen und Systemgrenzen vermischt werden.' },
      { type: 'prose', heading: 'Ein sinnvoller Anschluss', paragraphs: ['Für die Arbeit an Unternehmensarchitektur helfen Fragen nach Systemgrenzen, Informationsflüssen, Verantwortlichkeiten, Schnittstellen und Veränderungen. Konkrete Architekturentscheidungen benötigen jedoch einen belegten Kontext und sollten nicht aus einem Navigationspunkt abgeleitet werden.'] }
    ], related: [internal('APIs', '/transformation/apis/', 'Schnittstellen und Integration'), internal('Historie', '/historie/', 'Archivnotiz zur EA-Seite')]
  },
  {
    path: '/transformation/apis', section: 'Transformation', title: 'APIs: Daten und Funktionen zwischen Systemen verbinden',
    metaTitle: 'APIs: ERP-Integration und REST verständlich', description: 'REST, CRUD, HTTP-Methoden und ERP-Integration mit anderen Systemen verständlich erklärt.',
    keywords: 'APIs, REST, CRUD, ERP Integration, HTTP Methoden', eyebrow: 'Transformation · APIs',
    lead: 'APIs sind kein Selbstzweck. Sie schaffen eine vereinbarte Art, Daten und Funktionen über Systemgrenzen hinweg verfügbar zu machen.',
    blocks: [
      { type: 'prose', heading: 'APIs als Integrationsvertrag', paragraphs: ['REST ist ein Architekturstil für Webdienste. GET, POST, PUT und DELETE werden häufig für CRUD-Operationen genutzt. Im ERP-Kontext können APIs Daten und Funktionen zu Beständen, Aufträgen und Kunden mit CRM, E-Commerce und Drittanbieterdiensten verbinden.', 'Entscheidend ist nicht nur das technische Muster, sondern ein klarer Vertrag über Bedeutung, Datenqualität, Berechtigungen, Fehlerfälle und Änderungen.'] },
      { type: 'feature-grid', heading: 'Vier CRUD-Operationen', items: [
        { number: 'C', title: 'Create', text: 'Neue Daten oder Ressourcen anlegen.' },
        { number: 'R', title: 'Read', text: 'Bestehende Daten oder Ressourcen lesen.' },
        { number: 'U', title: 'Update', text: 'Bestehende Daten oder Ressourcen aktualisieren.' },
        { number: 'D', title: 'Delete', text: 'Daten oder Ressourcen löschen — nur mit klarer Berechtigung und Verantwortung.' }
      ]},
      { type: 'note', tone: 'teal', title: 'Integrationsfragen', text: 'Vor einer Schnittstelle sollten Bedeutung, Eigentümerschaft, Berechtigungen, Datenqualität, Fehlerbehandlung und Änderungsfolgen geklärt sein. Technische Erreichbarkeit allein ist keine fachliche Integration.' }
    ], related: [internal('Datenbanken', '/erp/datenbanken/', 'Datenhaltung einordnen'), internal('Enterprise Architecture', '/transformation/enterprise-architecture/', 'Systemgrenzen und Anforderungen')]
  },
  {
    path: '/ki', section: 'KI & Ethik', title: 'Künstliche Intelligenz im ERP-Kontext: Nutzen braucht Kontext',
    metaTitle: 'Künstliche Intelligenz im ERP-Kontext', description: 'KI im ERP-Kontext sachlich einordnen: Automatisierung, Einsichten, Daten, Verantwortung und nachvollziehbare Entscheidungen.',
    keywords: 'künstliche Intelligenz, ERP, Automatisierung, KI Governance, Verantwortung', eyebrow: 'KI & Ethik · 01',
    lead: 'KI kann Prozesse unterstützen. Ob sie verantwortungsvoll wirkt, entscheidet sich an Daten, Ziel, Kontrolle und Zuständigkeit.',
    blocks: [
      { type: 'prose', heading: 'KI im Unternehmenskontext', paragraphs: ['Künstliche Intelligenz kann Muster erkennen, Informationen strukturieren und wiederkehrende Tätigkeiten unterstützen. In Unternehmensprozessen entsteht ihr Nutzen jedoch nur im Zusammenspiel mit verlässlichen Daten, klaren Zielen und verantwortlichen Menschen.', 'Dieser Bereich ordnet Fragen ein, die bei KI-Unterstützung in Unternehmensprozessen relevant sind: Zweck, Daten, Kontrolle und Verantwortung.'] },
      { type: 'feature-grid', heading: 'Vier Fragen vor dem Einsatz', items: [
        { number: '01', title: 'Zweck', text: 'Welche Entscheidung oder Tätigkeit soll unterstützt werden — und warum?' },
        { number: '02', title: 'Daten', text: 'Welche Daten fließen ein, welche Qualität und welche Grenzen haben sie?' },
        { number: '03', title: 'Kontrolle', text: 'Wer prüft Ergebnisse, Ausnahmen und unerwartete Folgen?' },
        { number: '04', title: 'Verantwortung', text: 'Wer trägt die Entscheidung und kann sie begründen?' }
      ]},
      { type: 'note', tone: 'teal', title: 'Vernetzter Kontext', text: 'Der Ethik-Kontext ist auf ethics.at vernetzt. ERP.Contact verlinkt dorthin als Kontext, ohne fremde Seiteninhalte hier zu übernehmen.' }
    ], related: [internal('KI-Ethik', '/ki/ethik/', 'Verantwortung und Nachvollziehbarkeit'), internal('KI-Transparenz', '/ki-transparenz/', 'Transparenz über den Einsatz von KI'), external('ethics.at', 'https://www.ethics.at/', 'Vernetzter Ethik-Kontext')]
  },
  {
    path: '/ki/ethik', section: 'KI & Ethik', title: 'KI-Ethik: Verantwortung sichtbar halten',
    metaTitle: 'KI-Ethik: Verantwortung im ERP-Kontext', description: 'Eine sachliche Orientierung für KI-gestützte ERP-Arbeit: Transparenz, menschliche Verantwortung, Daten- und Wirkungskontext.',
    keywords: 'KI Ethik, ERP, Transparenz, Verantwortung, menschliche Kontrolle', eyebrow: 'KI & Ethik · 02',
    lead: 'Ethische Fragen beginnen nicht erst bei einem Modell. Sie beginnen bei der Wirkung, die ein Prozess auf Menschen und Entscheidungen hat.',
    blocks: [
      { type: 'prose', heading: 'Verantwortung praktisch gestalten', paragraphs: ['KI-gestützte Hinweise, Priorisierungen oder Automatisierungen dürfen Zuständigkeit und Begründbarkeit nicht verdecken. Ethische Einordnung beginnt dort, wo digitale Systeme Einfluss auf Menschen, Ressourcen und Entscheidungen nehmen.', 'Bei fachlich folgenreichen Entscheidungen muss erkennbar bleiben, welche Informationen verwendet wurden, wer die Entscheidung verantwortet und wie eine Korrektur möglich ist.'] },
      { type: 'feature-grid', heading: 'Leitfragen', items: [
        { number: 'T', title: 'Transparenz', text: 'Ist die Rolle der KI im Ablauf für Betroffene und Verantwortliche sichtbar?' },
        { number: 'M', title: 'Menschliche Verantwortung', text: 'Bleibt eine zuständige Person in der Lage, Ergebnisse zu prüfen und zu vertreten?' },
        { number: 'D', title: 'Datenkontext', text: 'Sind Herkunft, Qualität, Berechtigung und Grenzen der verwendeten Daten geklärt?' },
        { number: 'W', title: 'Wirkung', text: 'Welche Folgen kann eine Empfehlung oder Automatisierung für Menschen, Organisation und Umwelt haben?' }
      ]},
      { type: 'note', tone: 'sand', title: 'Begriffe und Teams', text: 'Auch Begriffe wie „Bias“, „Erklärbarkeit“, „Governance“ oder „menschliche Kontrolle“ können zwischen Teams unterschiedlich verstanden werden. Eine gemeinsame Definition mit Fach-, Datenschutz-, Compliance- und Technikverantwortlichen ist Teil verantwortungsvoller Arbeit.' }
    ], related: [internal('Künstliche Intelligenz', '/ki/', 'Zum ERP-Kontext'), external('ethics.at', 'https://www.ethics.at/', 'Vernetzter Ethik-Kontext')]
  },
  {
    path: '/ki-transparenz', section: 'KI & Ethik', title: 'KI-Transparenz für ERP.Contact',
    metaTitle: 'KI-Transparenz — ERP.Contact', description: 'Transparenzhinweis zu KI-unterstützter Struktur, Gestaltung und technischer Umsetzung von ERP.Contact.',
    keywords: 'KI Transparenz, ERP.Contact, Webdesign, technische Umsetzung, Quellen', eyebrow: 'Transparenz',
    lead: 'Transparenz bedeutet, die Rolle von KI sichtbar zu machen — und die Verantwortung nicht zu delegieren.',
    blocks: [
      { type: 'prose', heading: 'Was KI unterstützt hat', paragraphs: ['Struktur, Design und technische Umsetzung von ERP.Contact wurden KI-unterstützt erstellt. Dazu zählen die Informationsarchitektur, der statische Seitenaufbau und die redaktionelle Ausformulierung der Texte.', 'Der verantwortliche Herausgeber prüft die Ergebnisse vor Veröffentlichung. KI-Unterstützung ersetzt weder die fachliche Verantwortung noch die Pflicht, unpassende, unklare oder unzutreffende Inhalte zu korrigieren.'] },
      { type: 'prose', heading: 'Prüfung und Verantwortlichkeit', paragraphs: ['KI-Unterstützung ersetzt weder fachliche Prüfung noch redaktionelle Verantwortung. Aussagen zu Begriffen, Prozessen und Ressourcen werden vor Veröffentlichung auf Kontext, Verständlichkeit und technische Umsetzbarkeit geprüft.', 'Externe Verweise werden mit ihrem erkennbaren Zweck verlinkt. Inhalte, die fortlaufend aktualisiert werden, erhalten einen Status und Zeitstempel statt einer stillschweigenden Aktualitätsannahme.'] },
      { type: 'note', tone: 'teal', title: 'Transparenz im Alltag', text: 'Die KI-Transparenz macht die Rolle von KI sichtbar und beschreibt die menschliche Prüfung. Sie unterstützt damit eine sachliche, nachvollziehbare Nutzung digitaler Werkzeuge.' }
    ], related: [internal('KI-Ethik', '/ki/ethik/', 'Grundsätze und Fragen'), internal('Ressourcen', '/ressourcen/', 'Werkzeuge und vernetzte Kontexte')]
  },
  {
    path: '/ressourcen', section: 'Ressourcen', title: 'Ressourcen: Begriffe, Publikationen und Werkstätten',
    metaTitle: 'ERP-Ressourcen: Begriffe, Trainer und Werkstätten', description: 'Geprüfte Ressourcen für ERP-Begriffe, Veröffentlichungen, Research Briefings und vernetzte Werkstätten.',
    keywords: 'ERP Ressourcen, Terminologie, ERP Trainer, Substack, Digitalpath', eyebrow: 'Ressourcen',
    lead: 'Gute Ressourcen zeigen ihren Zweck. Sie verlinken direkt, benennen ihren Reifegrad und verstecken keine Weiterleitungen.',
    blocks: [
      { type: 'links', heading: 'Geprüfte Einstiegspunkte', items: [
        external('ERP Terminology Trainer', 'https://trainer.erp.contact/', 'Ein systemübergreifender Begriffstrainer für SAP, Dynamics 365, Odoo und generische ERP-Konzepte — mit Rollenperspektiven und Vergleichsfunktion.'),
        internal('ERP Research Briefings', '/ressourcen/perplexity-projekte/', 'Zwei Perplexity-Recherchebereiche für ERP-Briefing und Postimplementierung.'),
        external('Dangulea.at', 'https://www.dangulea.at/', 'Persönlicher Arbeits- und Projektkontext des Herausgebers.'),
        external('Digitalpath', 'https://www.digitalpath.at/', 'Unabhängiges Projektlabor für Konzepte, Prototypen und nachvollziehbare Reifegrade.'),
        external('Coolwebtoday.org', 'https://www.coolwebtoday.org/', 'Tool- und Journey-Werkstatt für konkrete digitale Vorhaben.'),
        external('Ethics.at', 'https://www.ethics.at/', 'Vernetzter Kontext für Ethik, Verantwortung und rechtliche Angaben.'),
        external('Substack: Claudiu Dangulea', 'https://substack.com/@intiequals1', 'Direkter Publikationshinweis ohne Google-Weiterleitungsadresse.')
      ]},
      { type: 'prose', heading: 'Verlässliche Linkpflege', paragraphs: ['Der ERP Terminology Trainer macht Begriffe aus SAP, Dynamics 365, Odoo und generischen ERP-Konzepten systemübergreifend vergleichbar. Er bietet einen direkt nutzbaren Lern- und Übersetzungsraum.', 'Ressourcen verweisen auf klare Zieladressen. Nicht verifizierbare oder nicht erreichbare Ziele werden nicht als aktuelle Arbeitsressource geführt.'] },
      { type: 'note', tone: 'sand', title: 'Begriffe über Systemgrenzen', text: 'Ein Buchungskreis, eine Legal Entity, ein Unternehmen oder eine generische Buchungseinheit können sich je nach System und Team überschneiden, ohne identisch zu sein. Der ERP Terminology Trainer dient als Lern- und Übersetzungswerkzeug; lokale Entscheidungen bleiben abzustimmen.' }
    ], related: [internal('ERP-Grundlagen', '/erp/grundlagen/', 'Begriffe im Kontext'), internal('Projekte', '/projekte/', 'Konzepte und Prototypen')]
  },
  {
    path: '/ressourcen/perplexity-projekte', section: 'Ressourcen', title: 'ERP Research Briefings: aktuelle Recherchebereiche',
    metaTitle: 'ERP Research Briefings: zwei Perplexity-Projekte', description: 'ERP Brief und ERP Postimplementierung als zwei vernetzte Recherchebereiche mit transparentem Aktualisierungsstatus.',
    keywords: 'ERP Brief, ERP Postimplementierung, Perplexity, ERP Recherche, Research Briefing', eyebrow: 'Ressourcen · Research Briefings',
    lead: 'Zwei Recherchebereiche bündeln aktuelle Fragestellungen zu ERP und Postimplementierung. Status, Quellenzugriff und Zeitstempel bleiben sichtbar.',
    blocks: [
      { type: 'prose', heading: 'Recherche als fortlaufender Arbeitsstand', paragraphs: ['ERP Research Briefings verbinden aktuelle Recherche mit einer klaren Einordnung in die Wissensbasis. Jeder Bereich bleibt direkt mit seinem Projekt verknüpft und erhält einen sichtbaren Aktualisierungsstatus.', 'Die tägliche Aktualisierung ergänzt nur Inhalte, die aus einem autorisierten Zugriff nachvollziehbar gelesen werden können. Ohne Zugriff werden keine Zusammenfassungen erfunden oder aus Anmeldeseiten abgeleitet.'] },
      { type: 'perplexity-projects', heading: 'Zwei vernetzte Recherchebereiche' },
      { type: 'note', tone: 'teal', title: 'Aktualisierungsprinzip', text: 'Jede Aktualisierung nennt ihren Stand. Projektinhalte bleiben von Linkstatus, Zugriffsvoraussetzungen und redaktioneller Einordnung unterscheidbar.' }
    ], related: [internal('Ressourcen', '/ressourcen/', 'Zur Ressourcenübersicht'), internal('Projekte', '/projekte/', 'Konzepte und Prototypen')]
  },
  {
    path: '/projekte', section: 'Projekte', title: 'Projekte: Konzepte und Prototypen transparent einordnen',
    metaTitle: 'ERP-nahe Konzepte und Prototypen', description: 'Projektkarten zu ERP, Wissen, Fulfillment und Abläufen — klar als Konzepte oder Prototypen ausgewiesen und mit Digitalpath vernetzt.',
    keywords: 'ERP Prototypen, DP-09, DP-10, DP-12, Knowledge Management, Digitalpath', eyebrow: 'Projektvernetzung',
    lead: 'Ein Konzept ist kein validiertes Ergebnis. Reifegrad, offene Fragen und der Verweis auf den aktuellen Projektkontext bleiben sichtbar.',
    blocks: [
      { type: 'project-grid', heading: 'Vernetzte Vorhaben', items: [
        { code: 'DP—09', title: 'ERP · Prozessabgleich', status: 'Konzept / Prototyp', text: 'Vorhaben zum Abgleich von Rechnungen und Bestellungen im ERP-Kontext. Logik, Voraussetzungen und Grenzen werden erst in belastbarer Detaildokumentation konkretisiert.' },
        { code: 'DP—10', title: 'Unternehmenssoftware', status: 'Konzept / Experimentierfeld', text: 'Arbeitsfeld für Geschäftsprozesse, Datenverarbeitung und Unternehmenssoftware. Konzept und technische Umsetzung bleiben getrennt ausgewiesen.' },
        { code: 'DP—12', title: 'Mikro-Fulfillment · Teilhabe', status: 'Konzeptskizze', text: 'Ein Ansatz zu automatisiertem Mikro-Fulfillment und inklusiver Gestaltung von Arbeitsschritten; Machbarkeit, Recht, Wirtschaftlichkeit und Trägerschaft bleiben offen.' },
        { code: 'KMH', title: 'Knowledge Management Hub', status: 'Konzept', text: 'Ein Arbeitsstrang für Zugang zu Wissen und organisatorisches Wissensmanagement, ohne Funktionen vorwegzunehmen.' },
        { code: 'AW', title: 'Ablauf-Werkbank', status: 'Konzept / Prototyp', text: 'Ein Raum, um Abläufe mit Beispieldaten sichtbar zu machen und Grenzen von Technik, Automatisierung und menschlicher Entscheidung zu prüfen.' }
      ]},
      { type: 'note', tone: 'teal', title: 'Belastbares Ziel statt erfundener Detail-URL', text: 'Alle Projektkarten verlinken bis zu einer belastbaren Detailseite auf die allgemeine Digitalpath-Startseite. Es werden keine projektbezogenen URLs erfunden.' },
      { type: 'links', heading: 'Projektkontext', items: [external('Digitalpath öffnen', 'https://www.digitalpath.at/', 'Konzepte, Prototypen und Erkenntnisse im unabhängigen Projektlabor.') ]}
    ], related: [internal('KI & Ethik', '/ki/', 'Verantwortung und Reifegrad'), internal('Ressourcen', '/ressourcen/', 'Werkstätten und Lernressourcen')]
  },
  {
    path: '/ueber', section: 'Über', title: 'Über ERP.Contact und den Herausgeber',
    metaTitle: 'Über ERP.Contact und Claudiu Dangulea', description: 'Über ERP.Contact, den Herausgeber und die vernetzten fachlichen Kontexte.',
    keywords: 'ERP.Contact, Claudiu Dangulea, SAP Consultant, Prozessmanagement, Business Intelligence', eyebrow: 'Über',
    lead: 'ERP.Contact verbindet Wissen über Unternehmenssysteme mit Fragen zu Prozessen, Daten, KI und Verantwortung.',
    blocks: [
      { type: 'prose', heading: 'Profil', paragraphs: ['Claudiu Dangulea arbeitet im Umfeld von ERP, Prozessmanagement, Business Intelligence und Data Literacy. Sein Hintergrund umfasst SAP FI/CO, Wirtschaftsinformatik, ERP Consulting und Weiterbildungen zu digitalen Technologien.', 'Im Mittelpunkt stehen künstliche Intelligenz, ihre ethischen Implikationen sowie nachhaltige Geschäftsmodelle und Technologien.'] },
      { type: 'prose', heading: 'Wofür ERP.Contact steht', paragraphs: ['ERP.Contact macht die Beziehungen zwischen ERP-Grundlagen, Prozessen, Projektarbeit, Architektur und KI verständlicher sichtbar. Die Seite führt keine Produktversprechen, keine Kundenfälle und keine nicht belegten Projektdetails ein.', 'Die vernetzten Seiten dangulea.at, digitalpath.at, coolwebtoday.org und ethics.at haben jeweils einen eigenen Zweck. ERP.Contact erklärt, wohin sie führen, statt ihren Inhalt zu duplizieren.'] },
      { type: 'links', heading: 'Weiterführende Kontexte', items: [
        external('dangulea.at', 'https://www.dangulea.at/', 'Persönlicher Kontext und weitere Arbeit.'),
        external('digitalpath.at', 'https://www.digitalpath.at/', 'Projektlabor mit transparenten Reifegraden.'),
        external('coolwebtoday.org', 'https://www.coolwebtoday.org/', 'Tool- und Journey-Werkstatt.'),
        external('ethics.at', 'https://www.ethics.at/', 'Ethik-Kontext und rechtliche Angaben.')
      ]}
    ], related: [internal('Impressum', '/impressum/', 'Angaben zum Diensteanbieter'), internal('KI-Transparenz', '/ki-transparenz/', 'Transparenz über KI-Unterstützung')]
  },
  {
    path: '/impressum', section: 'Rechtliches', title: 'Impressum', metaTitle: 'Impressum — ERP.Contact',
    description: 'Impressumsangaben für ERP.Contact.', keywords: 'Impressum, ERP.Contact, Claudiu Dangulea, Medieninhaber, Österreich', eyebrow: 'Rechtliches',
    lead: 'Angaben zum Diensteanbieter und Medieninhaber.',
    blocks: [
      { type: 'prose', heading: 'Diensteanbieter / Medieninhaber', paragraphs: ['Claudiu Dangulea', 'Karl-Popper-Straße 5/217<br>1100 Wien<br>Österreich'] },
      { type: 'feature-grid', heading: 'Kontakt und Angaben', items: [
        { number: 'E', title: 'E-Mail', text: '<a href="mailto:claudiu.dangulea@gmail.com">claudiu.dangulea@gmail.com</a>' },
        { number: 'T', title: 'Telefon', text: '<a href="tel:+436763013307">+43 676 30 133 07</a>' },
        { number: 'G1', title: 'GISA', text: '35190172 — Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik.' },
        { number: 'G2', title: 'GISA', text: '38180019 — Erstellung pädagogischer Konzepte für Internetplattformen, Unterrichtsmaterialien sowie Ausstattungen von Unterrichtsräumen unter Ausschluss baulicher Aspekte.' }
      ]},
      { type: 'prose', heading: 'Weitere Angaben', paragraphs: ['Nicht im Firmenbuch eingetragen.<br><br><strong>Verantwortlich für den Inhalt gemäß § 25 MedienG:</strong><br>Claudiu Dangulea, Anschrift wie oben.<br><br><strong>Blattlinie:</strong><br>Information über Person, Projekte und Leistungen.', 'Der Geltungsbereich umfasst dangulea.at sowie alle von Claudiu Dangulea betriebenen Webauftritte.'] },
      { type: 'note', tone: 'sand', title: 'Historischer Hinweis', text: 'Die EU-OS/ODR-Plattform wurde am 20.07.2025 eingestellt. Sie wird deshalb nicht als aktuelle Rechtsinformation ausgegeben. Hinweise auf frühere Angaben sind ausschließlich im separaten Archivbereich dokumentiert.' }
    ], related: [internal('Historie', '/historie/', 'Archivhinweise und rechtliche Einordnung'), internal('KI-Transparenz', '/ki-transparenz/', 'Transparenz über KI-Unterstützung')]
  },
  {
    path: '/historie', section: 'Historie', title: 'Webseiten-Historie: Version 1 → Version 2',
    metaTitle: 'Historie: ERP.Contact Version 1 und Version 2', description: 'Öffentlich erreichbare, quellennahe Aufnahme der bisherigen Google-Sites-Fassung von ERP.Contact als Version 1.',
    keywords: 'ERP.Contact Historie, Google Sites, Version 1, Quellenaufnahme, Version 2', eyebrow: 'Webseiten-Historie',
    lead: 'Version 2 baut neu auf. Version 1 bleibt als öffentlich erreichbare, quellennahe Inhaltsaufnahme sichtbar.',
    blocks: [
      { type: 'prose', heading: 'Was diese Historie leistet', paragraphs: ['Am 27. Oktober 2026 wurde die öffentlich sichtbare ERP.Contact-/Google-Sites-Fassung thematisch erfasst. Jede Archivnotiz dokumentiert Quell-URLs, sichtbaren Inhalt, Linkbefunde und Erfassungsgrenzen. Die vollständigen Notizen sind direkt erreichbar.', 'Die Aufnahme unterscheidet bewusst zwischen einer auffindbaren, inhaltlich gefüllten Altseite, einer sichtbaren aber inhaltsarmen Seite und einem nicht auffindbaren Ziel. Version 2 ergänzt diese Befunde nicht rückwirkend mit vermeintlichen Quelleninhalten.'] },
      { type: 'history-grid', heading: 'Version 1: vollständige Archivnotizen' },
      { type: 'note', tone: 'sand', title: 'Historische EU-OS/ODR-Angabe', text: 'Die frühere Impressumsseite enthielt einen Verweis auf die EU-ODR-Plattform. Die Zielseite teilte beim Abruf mit, dass die Plattform am 20.07.2025 eingestellt wurde. Diese Angabe bleibt ausschließlich Teil der historischen Dokumentation und ist keine aktuelle Rechtsinformation.' },
      { type: 'prose', heading: 'Version 2', paragraphs: ['Der Neuaufbau schafft eine moderne Informationsarchitektur, individuelle Metadaten, zugängliches HTML, direkte geprüfte Links und eine sichtbare KI-Transparenzseite. Die ursprünglichen Inhalte und der neue V2-Text sind klar voneinander abgegrenzt.'] }
    ], related: [internal('KI-Transparenz', '/ki-transparenz/', 'Entstehung von Version 2'), internal('Impressum', '/impressum/', 'Aktuelle Angaben')]
  }
];

export const FOOTER_LINKS = [
  internal('Historie', '/historie/', 'Version 1 und Version 2'),
  internal('KI-Transparenz', '/ki-transparenz/', 'KI-unterstützte Umsetzung offenlegen'),
  internal('Impressum', '/impressum/', 'Angaben zum Diensteanbieter'),
  external('ERP Terminology Trainer', 'https://trainer.erp.contact/', 'Systemübergreifende ERP-Begriffe'),
  external('Digitalpath', 'https://www.digitalpath.at/', 'Projektlabor'),
  external('Ethics.at', 'https://www.ethics.at/', 'Vernetzter Ethik-Kontext')
];
