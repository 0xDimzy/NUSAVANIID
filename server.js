const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT_DIR = __dirname;
const DEPLOY_DIR = path.join(ROOT_DIR, 'nusavaniid-deploy');
const DEFAULT_PORT = parseInt(process.env.PORT || '3000', 10);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8'
};

function resolveFilePath(reqUrl) {
  const parsedUrl = new URL(reqUrl, 'http://localhost');
  let pathname = decodeURIComponent(parsedUrl.pathname);
  const useRoot = parsedUrl.searchParams.get('mode') === 'root';

  if (pathname.endsWith('/')) {
    pathname += 'index.html';
  }

  // Strip leading slash for path joining
  const relPath = pathname.replace(/^\/+/, '');

  // If user requested root explicitly or starts with /root/
  if (useRoot) {
    const candidate = path.join(ROOT_DIR, relPath);
    if (candidate.startsWith(ROOT_DIR) && fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return candidate;
    }
  }

  // If request explicitly targets /nusavaniid-deploy/...
  if (relPath.startsWith('nusavaniid-deploy/')) {
    const subPath = relPath.replace(/^nusavaniid-deploy\//, '');
    const inDeploy = path.join(DEPLOY_DIR, subPath);
    if (inDeploy.startsWith(DEPLOY_DIR) && fs.existsSync(inDeploy) && fs.statSync(inDeploy).isFile()) {
      return inDeploy;
    }
    // Fallback to ROOT_DIR for missing assets in deploy (e.g. assets, images, galeri, site.config.js)
    const inRoot = path.join(ROOT_DIR, subPath);
    if (inRoot.startsWith(ROOT_DIR) && fs.existsSync(inRoot) && fs.statSync(inRoot).isFile()) {
      return inRoot;
    }
  }

  // By default, prioritize nusavaniid-deploy (active development folder)
  const inDeploy = path.join(DEPLOY_DIR, relPath);
  if (inDeploy.startsWith(DEPLOY_DIR) && fs.existsSync(inDeploy) && fs.statSync(inDeploy).isFile()) {
    return inDeploy;
  }

  // Fallback to ROOT_DIR (assets, images, galeri, site.config.js, etc.)
  const inRoot = path.join(ROOT_DIR, relPath);
  if (inRoot.startsWith(ROOT_DIR) && fs.existsSync(inRoot) && fs.statSync(inRoot).isFile()) {
    return inRoot;
  }

  // Clean-URL fallback (mirrors .htaccess RewriteRule): /products -> products.html
  if (relPath && !path.extname(relPath)) {
    const withHtml = relPath + '.html';
    const inDeployHtml = path.join(DEPLOY_DIR, withHtml);
    if (inDeployHtml.startsWith(DEPLOY_DIR) && fs.existsSync(inDeployHtml) && fs.statSync(inDeployHtml).isFile()) {
      return inDeployHtml;
    }
    const inRootHtml = path.join(ROOT_DIR, withHtml);
    if (inRootHtml.startsWith(ROOT_DIR) && fs.existsSync(inRootHtml) && fs.statSync(inRootHtml).isFile()) {
      return inRootHtml;
    }
  }

  return null;
}

const server = http.createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Method Not Allowed');
    return;
  }

  const filePath = resolveFilePath(req.url);

  if (!filePath) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`404 Not Found: ${req.url}`);
    console.log(`[404] ${req.method} ${req.url}`);
    return;
  }

  try {
    const stat = fs.statSync(filePath);
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    const isMedia = ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif', '.ico', '.mp4', '.webm', '.woff', '.woff2', '.ttf'].includes(ext);
    const cacheHeader = isMedia
      ? 'public, max-age=604800, stale-while-revalidate=86400'
      : 'no-cache';

    // Handle range requests (for videos like .mp4)
    const range = req.headers.range;
    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : stat.size - 1;
      const chunksize = end - start + 1;

      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${stat.size}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': contentType,
        'Cache-Control': cacheHeader
      });

      if (req.method === 'HEAD') {
        res.end();
        return;
      }

      const stream = fs.createReadStream(filePath, { start, end });
      stream.pipe(res);
    } else {
      res.writeHead(200, {
        'Content-Length': stat.size,
        'Content-Type': contentType,
        'Accept-Ranges': 'bytes',
        'Cache-Control': cacheHeader
      });

      if (req.method === 'HEAD') {
        res.end();
        return;
      }

      const stream = fs.createReadStream(filePath);
      stream.pipe(res);
    }

    console.log(`[200] ${req.method} ${req.url} -> ${path.relative(ROOT_DIR, filePath)}`);
  } catch (err) {
    console.error(`[500] ${req.method} ${req.url}:`, err.message);
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('500 Internal Server Error');
  }
});

function startServer(port) {
  server.listen(port, '0.0.0.0', () => {
    console.log('\n======================================================');
    console.log(`🚀 Nusavaniid Local Development Server Running!`);
    console.log(`\n👉 Local URL:   http://localhost:${port}`);
    console.log(`👉 Active Site: nusavaniid-deploy (latest edits)`);
    console.log(`👉 Root Site:   http://localhost:${port}/?mode=root`);
    console.log('======================================================\n');
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`Port ${port} is in use, trying port ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('Server error:', err);
    }
  });
}

startServer(DEFAULT_PORT);

