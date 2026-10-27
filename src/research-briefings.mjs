export const RESEARCH_BRIEFINGS = [
  {
    id: 'erp-brief',
    title: 'ERP Brief',
    kind: 'KI-gestützter Research-Bereich',
    stage: 'Themenrahmen bereit · Quellenzugriff ausstehend',
    lastUpdated: 'Arbeitsstand geprüft: 27.10.2026',
    summary: 'Ein strukturierter Überblick für Entwicklungen rund um Unternehmenssysteme, Prozesse, Architektur und verantwortungsvolle KI. Eine sichtbare Zusammenfassung folgt erst, wenn der zugehörige Arbeitsbereich über einen angemeldeten Browserzugriff lesbar ist.',
    statusSteps: [
      { label: 'Themenrahmen', value: 'angelegt' },
      { label: 'Quellenzugriff', value: 'ausstehend' },
      { label: 'Fachliche Einordnung', value: 'vorbereitet' }
    ],
    clusters: [
      { code: '01', label: 'Systemfundament', title: 'ERP-Grundlagen & Module', text: 'Systeme, Datenobjekte und Funktionsbereiche als gemeinsamer Orientierungsrahmen.', href: '/erp/grundlagen/' },
      { code: '02', label: 'Prozesssicht', title: 'End-to-End-Prozesse', text: 'Bereichsübergreifende Übergaben von der Planung bis zur Auswertung sichtbar machen.', href: '/prozesse/' },
      { code: '03', label: 'Systemgestaltung', title: 'Architektur & APIs', text: 'Systemgrenzen, Integrationen und nachvollziehbare Informationsflüsse einordnen.', href: '/transformation/' },
      { code: '04', label: 'Verantwortung', title: 'KI & Ethik', text: 'Nutzen, Kontrolle und Zuständigkeit bei KI-unterstützten Entscheidungen klären.', href: '/ki/' }
    ],
    references: [
      { label: 'ERP-Grundlagen', href: '/erp/grundlagen/', context: 'Begriffe und Integrationslogik' },
      { label: 'Prozessübersicht', href: '/prozesse/', context: 'Fünf vernetzte Prozessperspektiven' },
      { label: 'KI-Transparenz', href: '/ki-transparenz/', context: 'Rolle von KI im Informationsangebot' }
    ],
    disclosure: 'Clusterstruktur und spätere Kurzfassungen können KI-unterstützt entstehen. Der verantwortliche Herausgeber prüft Relevanz, Kontext und Formulierung vor einer sichtbaren Aktualisierung.'
  },
  {
    id: 'erp-postimplementierung',
    title: 'ERP Postimplementierung',
    kind: 'KI-gestützter Research-Bereich',
    stage: 'Themenrahmen bereit · Quellenzugriff ausstehend',
    lastUpdated: 'Arbeitsstand geprüft: 27.10.2026',
    summary: 'Ein Arbeitsbereich für die Zeit nach dem Go-live: Stabilisierung, Nutzung, Daten- und Prozessqualität sowie nachvollziehbare Wirkung. Eine sichtbare Zusammenfassung folgt erst, wenn der zugehörige Arbeitsbereich über einen angemeldeten Browserzugriff lesbar ist.',
    statusSteps: [
      { label: 'Themenrahmen', value: 'angelegt' },
      { label: 'Quellenzugriff', value: 'ausstehend' },
      { label: 'Fachliche Einordnung', value: 'vorbereitet' }
    ],
    clusters: [
      { code: '01', label: 'Stabilisierung', title: 'Betrieb & Übergaben', text: 'Störungen, Verantwortlichkeiten und Übergaben nach dem Go-live bewusst bearbeiten.', href: '/prozesse/' },
      { code: '02', label: 'Nutzung', title: 'Rollen & Projektarbeit', text: 'Adoption, Befähigung und Veränderungsarbeit mit klaren Zuständigkeiten verbinden.', href: '/transformation/projektmanagement/' },
      { code: '03', label: 'Qualität', title: 'Daten & Prozessklarheit', text: 'Stammdaten, Regeln und Prozessvarianten als Grundlage für belastbare Steuerung pflegen.', href: '/erp/konzepte/' },
      { code: '04', label: 'Wirkung', title: 'Portfolio & Kennzahlen', text: 'Nutzenannahmen, Prioritäten und messbare Verbesserungen über den Betrieb hinweg verfolgen.', href: '/transformation/portfolio-projektmanagement/' }
    ],
    references: [
      { label: 'Projektmanagement', href: '/transformation/projektmanagement/', context: 'Veränderung und Verantwortlichkeit' },
      { label: 'Zentrale Konzepte', href: '/erp/konzepte/', context: 'Daten, Regeln und Struktur' },
      { label: 'SAP Activate', href: '/transformation/sap-activate/', context: 'Phasen und kontinuierliche Verbesserung' }
    ],
    disclosure: 'Clusterstruktur und spätere Kurzfassungen können KI-unterstützt entstehen. Der verantwortliche Herausgeber prüft Relevanz, Kontext und Formulierung vor einer sichtbaren Aktualisierung.'
  }
];
