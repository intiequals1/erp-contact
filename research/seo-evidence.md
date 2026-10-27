# SEO- und KI-lesbare Inhaltsstruktur

Stand: 27.10.2026

Die Seite bleibt statisch generiert und liefert ihre Inhalte ohne JavaScript. Die Umsetzung folgt drei Regeln:

1. Pro Route gibt es einen eigenen Titel, eine Beschreibung, Canonical-URL, Open-Graph-Daten und sichtbaren Hauptinhalt.
2. JSON-LD beschreibt nur Inhalte, die auf der jeweiligen Seite sichtbar sind. Es ergänzt sie um Seitentyp, Sprache, Autor, Prüfstand und einen maschinenlesbaren KI-Hinweis.
3. Die ergänzende `llms.txt` bietet KI-Agenten eine kurze, kuratierte Einstiegskarte. Sie ist ein offener Vorschlag für LLM-lesbare Websites und kein garantiertes Ranking-Signal.

## Quellen

- Google Search Central erklärt, dass strukturierte Daten den sichtbaren Seiteninhalt beschreiben müssen und empfiehlt JSON-LD als wartbare Implementierung: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- Schema.org dokumentiert `WebPage` unter anderem mit `lastReviewed`, `mainContentOfPage`, `relatedLink`, `speakable`, `about` und `dateModified`: https://schema.org/WebPage
- llmstxt.org beschreibt `llms.txt` als kompakte, kuratierte Markdown-Einstiegskarte für LLMs und Agenten: https://llmstxt.org/
