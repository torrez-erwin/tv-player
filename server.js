const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 8080;
const TOKEN_URL = 'https://magisvideo.com/token_flow_automatico/token.json';
const BASE_DIR = path.join(__dirname);

const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

function fetchToken() {
    return new Promise((resolve, reject) => {
        https.get(TOKEN_URL, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    reject(new Error('Failed to parse token'));
                }
            });
        }).on('error', reject);
    });
}

const server = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url, true);

    // CORS headers for all responses
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    // API endpoint for token
    if (parsedUrl.pathname === '/api/token') {
        try {
            const token = await fetchToken();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(token));
        } catch (error) {
            console.error('Token fetch error:', error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Failed to fetch token' }));
        }
        return;
    }

    // Static files
    let filePath = path.join(BASE_DIR, parsedUrl.pathname === '/' ? '/index.html' : parsedUrl.pathname);
    const ext = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404);
                res.end('404 Not Found');
            } else {
                res.writeHead(500);
                res.end('Server Error: ' + err.code);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log('================================');
    console.log('   TV Player - Servidor Local');
    console.log('================================');
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log(`API Token: http://localhost:${PORT}/api/token`);
    console.log('Presiona Ctrl+C para detener');
});
