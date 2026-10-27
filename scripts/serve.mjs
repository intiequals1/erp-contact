import { createReadStream, existsSync } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const dist = join(root, 'dist');
const port = Number(process.env.PORT || 3000);
const mime = { '.css': 'text/css; charset=utf-8', '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.md': 'text/markdown; charset=utf-8', '.svg': 'image/svg+xml', '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8' };

function resolvePath(pathname) {
  const decoded = decodeURIComponent(pathname);
  const safePath = normalize(decoded).replace(/^(\.\.([/\\]|$))+/, '');
  const candidate = join(dist, safePath);
  if (!candidate.startsWith(dist)) return join(dist, '404.html');
  return candidate;
}

async function toFile(pathname) {
  const target = resolvePath(pathname === '/' ? '/index.html' : pathname);
  try {
    const entry = await stat(target);
    if (entry.isDirectory()) return join(target, 'index.html');
    return target;
  } catch {
    if (!extname(pathname)) return join(resolvePath(pathname), 'index.html');
    return target;
  }
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
  const file = await toFile(url.pathname);
  const found = existsSync(file);
  const target = found ? file : join(dist, '404.html');
  const status = found ? 200 : 404;
  res.writeHead(status, { 'Content-Type': mime[extname(target)] || 'application/octet-stream', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
  createReadStream(target).pipe(res);
});

server.listen(port, '0.0.0.0', () => console.log(`ERP.Contact preview running at http://0.0.0.0:${port}`));
