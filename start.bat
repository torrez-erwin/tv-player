@echo off
echo ================================
echo    TV Player - Servidor Local
echo ================================
echo.
echo Iniciando servidor en http://localhost:8080
echo Presiona Ctrl+C para detener
echo.

if exist "%~dp0python.exe" (
    cd /d "%~dp0"
    python -m http.server 8080
) else if exist "%~dp0node.exe" (
    cd /d "%~dp0"
    node server.js
) else (
    python -m http.server 8080 2>nul || node -e "require('http').createServer((q,r)=>{require('fs').readFile('.'+(q.url==='/'?'/index.html':q.url),(e,c)=>{r.writeHead(e?404:200,{'Content-Type':'text/html'});r.end(e?'404':c)})}).listen(8080,()=>console.log('Servidor en http://localhost:8080'))"
)
