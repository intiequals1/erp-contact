# ERP.Contact-Archivnotiz: Enterprise Architecture und APIs

## Erfassungsstatus

Die öffentliche Startseite `https://www.erp.contact/` war abrufbar. Ihre Navigation verlinkt ausdrücklich auf **Enterprise Architecture** (`/EA`) und **APIs** (`/EA/api`). Beide Pfade sind öffentlich abrufbar. Die APIs-Seite enthält eine längere Darstellung zu REST, RESTful APIs und ERP-Integration. Die Seite „Enterprise Architecture“ selbst enthält dagegen kein erkennbares EA-Fachkapitel: der abrufbare Inhalt handelt von einem Buch zu Requirements Engineering. Die Seite und ihr sichtbarer Link wurden dennoch erfasst; ihr Text wird nicht als Enterprise-Architecture-Inhalt umgedeutet.

Sowohl der URL-Pfad `https://www.erp.contact/EA/api` als auch die direkte Google-Sites-Adresse `https://sites.google.com/view/erpprofessional/EA/api` lieferten denselben API-Seiteninhalt. Damit ist das direkte Google-Sites-Ziel überprüft und kann anstelle einer Google-Weiterleitung verwendet werden. Für die EA-Seite ist die öffentliche URL `https://www.erp.contact/EA` abrufbar. Eine spezifische, weitergehende Enterprise-Architecture-Unterseite oder ein eigenständiger Text zu EA jenseits dieses Navigationsziels wurde in der Websuche nicht gefunden.

Bei der Prüfung der auf den Seiten sichtbaren Quellenlinks wurde kein fachlich einschlägiges Ziel als defekt/nicht erreichbar festgestellt: die nachstehend aufgeführten drei API-Artikelziele und der SOPHIST-Link waren abrufbar. Es werden keine nicht erreichbaren YouTube-Ziele übernommen. „Nicht auffindbar“ bezieht sich hier auf eine eigenständige EA-Fachunterseite bzw. einen entsprechenden Fachtext, nicht auf den Linkpfad `/EA`, der tatsächlich erreichbar ist.

## Quellnahe Inhaltsaufnahme

### Startseite und Navigation

Die Startseite beschreibt ERP als integriertes, konfigurierbares Informationssystem zur Koordination und Verwaltung von Ressourcen, Informationen und Funktionen über Abteilungsgrenzen hinweg. Als Merkmale nennt sie Integration von Geschäftsprozessen und Datenflüssen, Anpassbarkeit, Funktionsübergreifung sowie zentrale Informationssammlung, -speicherung und -analyse. Im Abschnitt zu ERP-Modulen erscheinen unter anderem Corporate Performance and Governance, Enterprise Asset Management, Customer Services (CRM), Business Intelligence und E-Commerce. Der Abschnitt „Cloud ERP“ beschreibt integrierte Geschäftsprozesse wie Finanzen, HR und Supply Chain sowie Echtzeit-Zugriff, Skalierbarkeit und geringeren IT-Aufwand; bei SAP S/4HANA Cloud wird Integration mit anderen SAP-Diensten erwähnt. Dies ist der tatsächlich sichtbare verwandte Kontext auf der Homepage, nicht eine explizite EA- oder API-Erörterung. [1]

In der Startseiten-Navigation sind die Ziele „Enterprise Architecture“ (`/EA`), „APIs“ (`/EA/api`), „Integrated Business Processes“ und „Data Bases“ sichtbar. Die darunter gelisteten Prozessziele heißen Record-to-Report, Details: Record2Report, Recruit-to-Retire, Source-to-Pay, Design-to-Operate, Lead-to-Cash und Central Concepts. Sie werden hier nur als sichtbare Navigation dokumentiert; ihre Inhalte wurden für diese Themenaufnahme nicht inhaltlich ausgewertet. [1]

### Ziel „Enterprise Architecture“

`https://www.erp.contact/EA` ist erreichbar. Der sichtbare Seiteninhalt trägt den Titel „Basiswissen Requirements Engineering - 5. Auflage“ und nennt als Stichpunkte einen Bezug zum überarbeiteten Lehrplan 3.0 des IREB CPRE Foundation Level, erläuternde Beispiele zur Entwicklung eines Smart-Home-Systems, Multimedia-Inhalte sowie Kernfakten und Weblinks. Das ist nach dem abrufbaren Text Requirements Engineering, kein inhaltlicher Beitrag zu Enterprise Architecture. Die Seite verlinkt auf die SOPHIST-Publikation `https://www.sophist.de/publikationen/basiswissenrequirementsengineering/`; das direkte Ziel ist erreichbar und beschreibt das Buch „Basiswissen Requirements Engineering“, die Vorbereitung auf die CPRE-Foundation-Level-Prüfung und die Orientierung am IREB-Lehrplan. Die auf ERP.Contact genannte Lehrplanversion 3.0 und die auf der aktuellen SOPHIST-Seite genannte Version 3.2 werden hier jeweils als Wortlaut der betreffenden Quelle festgehalten, nicht harmonisiert. [2] [3]

### Ziel „APIs“

Die erreichbare Seite beginnt mit „Building a Simple CRUD Application with Express and MongoDB“ und einem Abschnitt „REST vs. RESTful“. Sie definiert REST als Architekturstil mit Einschränkungen und Grundsätzen für Webdienste und führt GET, POST, PUT und DELETE als HTTP-Methoden für CRUD-Operationen an URL-identifizierten Ressourcen an. RESTful APIs beschreibt sie als Webdienste, die REST-Grundsätzen folgen. [4]

Unter „Hauptunterschiede“ ordnet die Seite den Vergleich nach Definition, Arbeitsweise, Datenformat, Protokoll und Cache-Fähigkeit. Sie stellt REST-API als Interaktion von Client und Server über Anfrage und Antwort dar. Bei RESTful APIs nennt sie Interoperabilität, JSON/HTTP/Text und einen mehrschichtigen Ansatz. Unter „Ähnlichkeiten“ steht, beide beruhten auf REST und seien zustandslos; jede Anfrage enthalte die für ihre Bearbeitung nötigen Informationen. Die Seite schließt diesen Teil mit der Aussage, REST API und RESTful API würden oft synonym verwendet, aber die Unterscheidung sei für die Wahl einer API wichtig. Die hier wiedergegebenen Aussagen sind eine quellennahe Erfassung des Seitentexts, keine unabhängige fachliche Bestätigung jeder dortigen Abgrenzung. [4]

Ein weiterer Abschnitt trägt die Überschrift „How to API in SAP?“; darauf folgen „Wie sich dies auf ein ERP-System bezieht“ und eine Einordnung von CRUD: Erstellen, Lesen, Aktualisieren und Löschen seien grundlegende Datenoperationen, etwa für Bestände, Aufträge und Kunden. APIs ermöglichten Datenaustausch und Integration zwischen dem ERP und anderer Software, beispielhaft CRM, E-Commerce und Drittanbieterdienste. RESTful APIs würden als standardisierte Möglichkeit dargestellt, über das Internet auf ERP-Daten zuzugreifen und sie zu bearbeiten. Die Seite fasst REST als zustandslosen, Client-Server-basierten und cachefähigen Architekturstil zusammen und nennt HTTP sowie GET, POST, PUT und DELETE. [4]

Auf der API-Seite sind außerdem Quellen zum CRUD/Express/MongoDB-Tutorial, zu REST-Clients und REST-Services sowie zwei REST-vs.-RESTful-Artikel sichtbar. Die direkt erreichbaren Ziele sind unten aufgeführt. Der Artikel von freeCodeCamp „Building a Simple CRUD Application with Express and MongoDB“ behandelt im Original CRUD, Express/Node.js und MongoDB anhand einer einfachen Anwendung; der andere freeCodeCamp-Artikel ist eine Einführung in REST-Services, Endpunkte, HTTP-Methoden und REST-Clients. GeeksforGeeks und HevoData führen jeweils einen Vergleich von REST API und RESTful API. Diese Fremdquellen sind nur als verlinkte Ziele dokumentiert; sie erweitern nicht den ERP.Contact-Seitentext. [5] [6] [7] [8]

## Öffentlich sichtbare und überprüfte Ziele

- `https://www.erp.contact/` — Startseite, abrufbar; Navigation mit Enterprise Architecture und APIs. [1]
- `https://www.erp.contact/EA` — in der Navigation als „Enterprise Architecture“ verlinkt; abrufbar, Inhalt jedoch Requirements Engineering. [2]
- `https://www.erp.contact/EA/api` — in der Navigation als „APIs“ verlinkt; abrufbar, API-/REST-/ERP-Inhalt. [4]
- `https://sites.google.com/view/erpprofessional/EA/api` — direkte Google-Sites-Adresse; geprüft und mit identischem Seiteninhalt erreichbar. [9]
- `https://www.sophist.de/publikationen/basiswissenrequirementsengineering/` — auf der EA-Seite verlinktes Buchziel; abrufbar. [3]
- `https://www.freecodecamp.org/news/building-a-simple-crud-application-with-express-and-mongodb-63f80f3eb1cd/` — auf der API-Seite verlinkter Artikel; abrufbar. [5]
- `https://www.freecodecamp.org/news/rest-api-tutorial-rest-client-rest-service-and-api-calls-explained-with-code-examples/` — auf der API-Seite verlinktes REST-Tutorial; abrufbar. [6]
- `https://www.geeksforgeeks.org/know-the-difference-between-rest-api-and-restful-api/` — per Google-Weiterleitungslink als REST-vs.-RESTful-Ziel verlinkt; das direkte Ziel ist abrufbar und wird hier statt der Weiterleitung notiert. [7]
- `https://hevodata.com/learn/rest-vs-restful-apis/` — per Google-Weiterleitungslink als REST-vs.-RESTful-Ziel verlinkt; das direkte Ziel ist abrufbar und wird hier statt der Weiterleitung notiert. [8]
- `https://patreon.com/CoolwebToday?...` — auf den Seiten sichtbarer allgemeiner „…weitere Artikel“-Verweis; nicht Bestandteil des EA/API-Fachinhalts. Nicht weiter als Fachquelle ausgewertet. [4]

**Nicht gefunden:** Die Suche nach einer eigenständigen ERP.Contact-Seite oder einem eindeutigen Textfragment, das Enterprise Architecture fachlich behandelt, ergab keinen passenden Treffer. Erfasst wurde deshalb der erreichbare Navigationspunkt `/EA` mit seinem tatsächlichen Requirements-Engineering-Inhalt sowie der auf der Startseite sichtbare allgemeine ERP-Kontext. Es wurden keine Vermutungen über eine nicht sichtbare EA-Seite ergänzt.

## References

[1]: https://www.erp.contact/ "ERP.Contact – Startseite"
[2]: https://www.erp.contact/EA "ERP.Contact – Enterprise Architecture"
[3]: https://www.sophist.de/publikationen/basiswissenrequirementsengineering/ "SOPHIST – Basiswissen Requirements Engineering"
[4]: https://www.erp.contact/EA/api "ERP.Contact – APIs"
[5]: https://www.freecodecamp.org/news/building-a-simple-crud-application-with-express-and-mongodb-63f80f3eb1cd/ "freeCodeCamp – Building a Simple CRUD Application with Express and MongoDB"
[6]: https://www.freecodecamp.org/news/rest-api-tutorial-rest-client-rest-service-and-api-calls-explained-with-code-examples/ "freeCodeCamp – REST API Tutorial, REST Client, REST Service and API Calls"
[7]: https://www.geeksforgeeks.org/know-the-difference-between-rest-api-and-restful-api/ "GeeksforGeeks – Know the Difference Between REST API and RESTful API"
[8]: https://hevodata.com/learn/rest-vs-restful-apis/ "HevoData – REST vs RESTful APIs"
[9]: https://sites.google.com/view/erpprofessional/EA/api "ERP.Professional Google Sites – APIs"
