import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { ARCHIVE, FOOTER_LINKS, NAV, PAGES, SITE } from '../src/content.mjs';
import { PERPLEXITY_PROJECTS } from '../src/perplexity-projects.mjs';

const root = resolve(import.meta.dirname, '..');
const dist = join(root, 'dist');
const publicDir = join(root, 'public');
const archiveDir = join(root, 'research', 'version-1');

const esc = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const routePath = (path) => path === '/' ? '/' : `${path.replace(/\/$/, '')}/`;
const outputPath = (path) => path === '/' ? join(dist, 'index.html') : join(dist, path.replace(/^\//, ''), 'index.html');
const archiveSlug = (file) => file.replace(/\.md$/, '');
const archiveHref = (file) => `/historie/archiv/${archiveSlug(file)}/`;
const archiveDownloadHref = (file) => `/historie/archiv/downloads/${file}`;

function link(item, className = '') {
  const classes = className ? ` class="${className}"` : '';
  const external = item.external ? ' target="_blank" rel="noopener noreferrer" data-external="true"' : '';
  const marker = item.external ? '<span class="external-mark" aria-hidden="true">↗</span><span class="sr-only"> (öffnet in neuem Tab)</span>' : '';
  return `<a${classes} href="${esc(item.href)}"${external}>${item.label}${marker}</a>`;
}

function renderNav() {
  return `<nav class="primary-nav" aria-label="Hauptnavigation" data-primary-nav>
    <ul>${NAV.map((item) => `<li>${link(item)}</li>`).join('')}</ul>
  </nav>`;
}

function renderFeatureGrid(block) {
  return `<section class="content-section">
    <div class="section-heading"><p class="section-kicker">Knotenpunkte</p><h2>${block.heading}</h2></div>
    <div class="feature-grid">${block.items.map((item) => {
      const inner = `<span class="feature-number">${esc(item.number)}</span><h3>${item.title}</h3><p>${item.text}</p>`;
      return item.href ? `<a class="feature-card" href="${item.href}">${inner}<span class="card-arrow" aria-hidden="true">→</span></a>` : `<article class="feature-card">${inner}</article>`;
    }).join('')}</div>
  </section>`;
}

function renderProcess(block) {
  return `<section class="content-section process-section">
    <div class="section-heading"><p class="section-kicker">Prozessfaden</p><h2>${block.heading}</h2>${block.intro ? `<p class="section-intro">${block.intro}</p>` : ''}</div>
    <ol class="process-list">${block.items.map((item) => `<li><span class="process-number">${esc(item.number)}</span><div><h3>${item.title}</h3><p>${item.text}</p></div></li>`).join('')}</ol>
  </section>`;
}

function renderProse(block) {
  return `<section class="content-section prose-section">
    <div class="section-heading"><p class="section-kicker">Einordnung</p><h2>${block.heading}</h2></div>
    <div class="prose">${block.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('')}</div>
  </section>`;
}

function renderNote(block) {
  return `<aside class="note note-${block.tone || 'teal'}" aria-label="Hinweis: ${esc(block.title)}"><span class="note-marker" aria-hidden="true">●</span><div><h2>${block.title}</h2><p>${block.text}</p></div></aside>`;
}

function renderLinks(block) {
  return `<section class="content-section">
    <div class="section-heading"><p class="section-kicker">Direkte Verweise</p><h2>${block.heading}</h2></div>
    <div class="resource-list">${block.items.map((item) => `<article class="resource-item"><div><h3>${link(item)}</h3><p>${item.text}</p></div><span aria-hidden="true">→</span></article>`).join('')}</div>
  </section>`;
}

function renderProjectGrid(block) {
  return `<section class="content-section">
    <div class="section-heading"><p class="section-kicker">Projektlabor</p><h2>${block.heading}</h2></div>
    <div class="project-grid">${block.items.map((item) => `<article class="project-card"><div class="project-topline"><span class="project-code">${item.code}</span><span class="status-badge">${item.status}</span></div><h3>${item.title}</h3><p>${item.text}</p>${link({ label: 'Bei Digitalpath einordnen', href: 'https://www.digitalpath.at/', external: true })}</article>`).join('')}</div>
  </section>`;
}

function renderPerplexityProjects(block) {
  return `<section class="content-section">
    <div class="section-heading"><p class="section-kicker">Recherchebereiche</p><h2>${block.heading}</h2></div>
    <div class="research-grid">${PERPLEXITY_PROJECTS.map((project) => {
      const timestamp = project.lastUpdated ? `Stand: ${project.lastUpdated}` : 'Noch keine autorisierte Inhaltsaktualisierung';
      return `<article class="research-card"><p class="research-kind">${project.kind}</p><h3>${project.title}</h3><p>${project.summary}</p><div class="research-meta"><span>${project.updateStatus}</span><span>${timestamp}</span></div><a class="text-link" href="${project.url}" target="_blank" rel="noopener noreferrer">Projekt bei Perplexity öffnen <span aria-hidden="true">↗</span><span class="sr-only"> (öffnet in neuem Tab)</span></a></article>`;
    }).join('')}</div>
  </section>`;
}

function renderHistoryGrid() {
  return `<section class="content-section">
    <div class="section-heading"><p class="section-kicker">Archiv</p><h2>Version 1: vollständige Archivnotizen</h2></div>
    <div class="archive-grid">${ARCHIVE.map((entry, index) => `<article class="archive-card"><span class="archive-number">${String(index + 1).padStart(2, '0')}</span><h3><a href="${archiveHref(entry.file)}">${entry.label}</a></h3><p>${entry.status}</p><a class="text-link" href="${archiveHref(entry.file)}">Archivnotiz lesen <span aria-hidden="true">→</span></a></article>`).join('')}</div>
  </section>`;
}

function inlineMarkdown(value) {
  return esc(value)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)(?:[^)]*)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1<span class="sr-only"> (öffnet in neuem Tab)</span></a>')
    .replace(/&lt;(https?:\/\/[^&]+)&gt;/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1<span class="sr-only"> (öffnet in neuem Tab)</span></a>');
}

function markdownToArchiveHtml(markdown) {
  const output = [];
  const references = [];
  let paragraph = [];
  let list = null;
  const flushParagraph = () => {
    if (paragraph.length) output.push(`<p>${inlineMarkdown(paragraph.join(' '))}</p>`);
    paragraph = [];
  };
  const flushList = () => {
    if (list?.items.length) output.push(`<${list.type}>${list.items.map((item) => `<li>${inlineMarkdown(item)}</li>`).join('')}</${list.type}>`);
    list = null;
  };
  for (const rawLine of markdown.split(/\r?\n/)) {
    const line = rawLine.trim();
    const reference = line.match(/^\[(\d+)\]:\s+(https?:\/\/\S+)(?:\s+"([^"]+)")?\s*$/);
    if (reference) {
      flushParagraph();
      flushList();
      references.push({ number: reference[1], href: reference[2], label: reference[3] || reference[2] });
      continue;
    }
    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }
    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      flushList();
      if (heading[1].length > 1) output.push(`<h${heading[1].length}>${inlineMarkdown(heading[2])}</h${heading[1].length}>`);
      continue;
    }
    if (/^---+$/.test(line)) {
      flushParagraph();
      flushList();
      output.push('<hr>');
      continue;
    }
    const unordered = line.match(/^-\s+(.+)$/);
    const ordered = line.match(/^\d+\.\s+(.+)$/);
    if (unordered || ordered) {
      flushParagraph();
      const type = ordered ? 'ol' : 'ul';
      if (!list || list.type !== type) {
        flushList();
        list = { type, items: [] };
      }
      list.items.push((unordered || ordered)[1]);
      continue;
    }
    paragraph.push(line);
  }
  flushParagraph();
  flushList();
  if (references.length) output.push(`<section class="archive-references"><h2>Quellen aus der Archivnotiz</h2><ol>${references.map((reference) => `<li><a href="${esc(reference.href)}" target="_blank" rel="noopener noreferrer">[${reference.number}] ${esc(reference.label)}<span class="sr-only"> (öffnet in neuem Tab)</span></a></li>`).join('')}</ol></section>`);
  return output.join('\n');
}

function createArchivePage(entry, markdown) {
  const path = archiveHref(entry.file).replace(/\/$/, '');
  return {
    path,
    section: 'Historie · Version 1',
    title: entry.label,
    metaTitle: `Version 1: ${entry.label} | ERP.Contact`,
    description: `Quellennahe Archivnotiz der öffentlich sichtbaren ERP.Contact-Fassung zu ${entry.label}.`,
    keywords: 'ERP.Contact Historie, Version 1, Quellenaufnahme, Google Sites',
    eyebrow: 'Version 1 · Quellennahe Archivnotiz',
    lead: entry.status,
    noindex: true,
    contentHtml: `<article class="archive-document"><p class="archive-source">Öffentliche Bestandsaufnahme vom 27.10.2026. Die Notiz dokumentiert sichtbare Inhalte, Quellen und Erfassungsgrenzen. <a href="${archiveDownloadHref(entry.file)}" download>Rohfassung als Markdown herunterladen</a>.</p>${markdownToArchiveHtml(markdown)}</article>`,
    related: [{ label: 'Zur Historie', href: '/historie/', text: 'Alle Version-1-Notizen im Überblick' }, { label: 'KI-Transparenz', href: '/ki-transparenz/', text: 'Abgrenzung von Quelle und Version 2' }]
  };
}

function renderBlock(block) {
  if (block.type === 'feature-grid') return renderFeatureGrid(block);
  if (block.type === 'process') return renderProcess(block);
  if (block.type === 'prose') return renderProse(block);
  if (block.type === 'note') return renderNote(block);
  if (block.type === 'links') return renderLinks(block);
  if (block.type === 'project-grid') return renderProjectGrid(block);
  if (block.type === 'perplexity-projects') return renderPerplexityProjects(block);
  if (block.type === 'history-grid') return renderHistoryGrid();
  return '';
}

function renderRelated(page) {
  if (!page.related?.length) return '';
  return `<aside class="related-panel"><p class="section-kicker">Weiterdenken</p><h2>Verbindungen</h2><ul>${page.related.map((item) => `<li>${link(item)}<span>${item.text}</span></li>`).join('')}</ul></aside>`;
}

function renderDocument(page) {
  const canonicalPath = routePath(page.path);
  const canonical = `${SITE.origin}${canonicalPath}`;
  const currentPath = canonicalPath;
  const nav = NAV.map((item) => {
    const isCurrent = routePath(item.href.replace(/\/$/, '') || '/') === currentPath;
    return `<li><a href="${item.href}"${isCurrent ? ' aria-current="page"' : ''}>${item.label}</a></li>`;
  }).join('');
  const footerLinks = FOOTER_LINKS.map((item) => `<li>${link(item)}</li>`).join('');
  const pageBlocks = page.contentHtml ?? page.blocks.map(renderBlock).join('');
  return `<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(page.metaTitle)}</title>
  <meta name="description" content="${esc(page.description)}">
  <meta name="keywords" content="${esc(page.keywords)}">
  <meta name="author" content="Claudiu Dangulea">
  <meta name="robots" content="${page.noindex ? 'noindex,follow' : 'index,follow'}">
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="ERP.Contact">
  <meta property="og:title" content="${esc(page.metaTitle)}">
  <meta property="og:description" content="${esc(page.description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${SITE.ogImage}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(page.metaTitle)}">
  <meta name="twitter:description" content="${esc(page.description)}">
  <meta name="twitter:image" content="${SITE.ogImage}">
  <meta name="theme-color" content="#0b716f">
  <link rel="icon" href="/assets/erp-contact-mark.svg" type="image/svg+xml">
  <script>document.documentElement.classList.add('js')</script>
  <link rel="stylesheet" href="/assets/site.css">
</head>
<body>
  <a class="skip-link" href="#inhalt">Zum Inhalt springen</a>
  <header class="site-header">
    <div class="header-shell">
      <a class="brand" href="/" aria-label="ERP.Contact Startseite"><span class="brand-node" aria-hidden="true"></span><span>erp</span><i aria-hidden="true">.</i><span>contact</span></a>
      <button class="nav-toggle" type="button" aria-controls="hauptnavigation" aria-expanded="false" data-nav-toggle><span aria-hidden="true">☰</span><span>Menü</span></button>
      <nav id="hauptnavigation" class="primary-nav" aria-label="Hauptnavigation" data-primary-nav><ul>${nav}</ul></nav>
    </div>
  </header>
  <main id="inhalt">
    <section class="page-hero">
      <div class="hero-rail"><span>${esc(page.section)}</span><span class="rail-line" aria-hidden="true"></span><span>${page.path === '/' ? 'ERP' : '2026'}</span></div>
      <div class="hero-content"><p class="eyebrow">${page.eyebrow}</p><h1>${page.title}</h1><p class="lead">${page.lead}</p></div>
    </section>
    <div class="page-layout"><div class="content-stack">${pageBlocks}</div>${renderRelated(page)}</div>
  </main>
  <footer class="site-footer">
    <div class="footer-shell"><div><a class="brand footer-brand" href="/"><span class="brand-node" aria-hidden="true"></span><span>erp</span><i aria-hidden="true">.</i><span>contact</span></a><p>Systeme verstehen. Beziehungen sichtbar machen.</p></div><nav aria-label="Footer-Navigation"><ul>${footerLinks}</ul></nav><p class="footer-meta">Stand: 27.10.2026<br>© ${new Date().getFullYear()} Claudiu Dangulea</p></div>
  </footer>
  <script src="/assets/site.js" defer></script>
</body>
</html>`;
}

async function writeOutput(path, contents) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, contents, 'utf8');
}

async function main() {
  await rm(dist, { recursive: true, force: true });
  await mkdir(dist, { recursive: true });
  await cp(publicDir, dist, { recursive: true });
  await cp(archiveDir, join(dist, 'historie', 'archiv', 'downloads'), { recursive: true });
  const archivePages = [];
  for (const entry of ARCHIVE) archivePages.push(createArchivePage(entry, await readFile(join(archiveDir, entry.file), 'utf8')));

  for (const page of PAGES) await writeOutput(outputPath(page.path), renderDocument(page));
  for (const page of archivePages) await writeOutput(outputPath(page.path), renderDocument(page));

  const notFound = { path: '/404', section: 'Nicht gefunden', title: 'Diese Seite wurde nicht gefunden.', metaTitle: 'Seite nicht gefunden — ERP.Contact', description: 'Die aufgerufene Seite ist nicht verfügbar.', keywords: '404, ERP.Contact', eyebrow: '404', lead: 'Bitte nutzen Sie die Navigation oder kehren Sie zur Startseite zurück.', blocks: [{ type: 'links', heading: 'Weiter', items: [{ label: 'Zur Startseite', href: '/', text: 'ERP.Contact öffnen' }, { label: 'Zur Historie', href: '/historie/', text: 'Quellaufnahme ansehen' }] }], related: [] };
  await writeOutput(join(dist, '404.html'), renderDocument(notFound));

  const routes = { routes: [...PAGES, ...archivePages].map((page) => ({ path: routePath(page.path), title: page.metaTitle })) };
  await writeOutput(join(dist, 'manus-routes.json'), `${JSON.stringify(routes, null, 2)}\n`);
  const urls = PAGES.map((page) => `  <url><loc>${SITE.origin}${routePath(page.path)}</loc><lastmod>${SITE.updated}</lastmod><changefreq>monthly</changefreq><priority>${page.path === '/' ? '1.0' : '0.7'}</priority></url>`).join('\n');
  await writeOutput(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
  await writeOutput(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /historie/archiv/\n\nSitemap: ${SITE.origin}/sitemap.xml\n`);
  const readme = `# ERP.Contact Version 2\n\nStatischer Build. Die vollständige Version-1-Aufnahme liegt unter \`/historie/archiv/\`; sie bleibt öffentlich erreichbar, wird aber nicht eigenständig indexiert.\n`;
  await writeOutput(join(dist, 'README.txt'), readme);
}

await main();
console.log(`Built ${PAGES.length} public pages and ${ARCHIVE.length} archived Version-1 notes in ${dist}`);
