#!/bin/bash
# TV Player - Script de inicio
# Ejecuta un servidor local para evitar problemas de CORS

PORT=8080

echo "================================"
echo "   TV Player - Servidor Local"
echo "================================"
echo ""
echo "Iniciando servidor en http://localhost:$PORT"
echo "Presiona Ctrl+C para detener"
echo ""

if command -v python3 &> /dev/null; then
    cd "$(dirname "$0")"
    python3 -m http.server $PORT
elif command -v node &> /dev/null; then
    cd "$(dirname "$0")"
    node -e "
const http = require('http');
const fs = require('fs');
const path = require('path');

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

const server = http.createServer((req, res) => {
    let filePath = '.' + (req.url === '/' ? '/index.html' : req.url);
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

server.listen($PORT, () => {
    console.log('Servidor corriendo en http://localhost:$PORT');
});
"
else
    echo "Error: No se encontro Python3 ni Node.js"
    exit 1
fi
