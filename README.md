# TV Player

Reproductor de TV en streaming con canales argentinos e internacionales.

## IMPORTANTE - Requisito

**Necesitas ejecutar un servidor local** para evitar problemas de CORS. No funciona abriendo `index.html` directamente.

## Inicio Rapido

### Opcion 1: Python (Recomendado)
```bash
cd tv-player
python3 -m http.server 8080
```

### Opcion 2: Node.js
```bash
cd tv-player
node server.js
```

### Opcion 3: Script automatico
```bash
chmod +x start.sh
./start.sh
```

Luego abre en tu navegador: **http://localhost:8080**

## Caracteristicas

- **89 canales** de TV en vivo
- **Sin login** - Acceso directo sin autenticacion
- **DRM ClearKey** - Proteccion de contenido compatible
- **EPG** - Informacion del programa actual
- **Categorias** - Organizacion por tipo de canal
- **Busqueda** - Filtrado de canales por nombre
- **Responsive** - Funciona en desktop y movil
- **Controles TV** - Navegacion con teclado y control remoto

## Controles

| Tecla | Accion |
|-------|--------|
| Flechas ↑↓ | Navegar canales |
| Numeros | Seleccionar canal directamente |
| Ctrl+D | Modo debug |
| Esc | Cerrar menu movil |

## Modo Debug

Para ver informacion de depuracion:
1. Presiona `Ctrl+D` en el navegador
2. O abre la consola (F12) y ejecuta:
   - `testChannel(0)` - Probar canal especifico
   - `testAllChannels()` - Probar primeros 10 canales
   - `getDebugInfo()` - Ver log de debug

## Canales Incluidos

| Categoria | Cantidad |
|-----------|----------|
| Nacionales | 12 |
| Deportes | 12 |
| Cine | 12 |
| Premium (HBO) | 8 |
| Infantil | 6 |
| Documentales | 5 |
| Series | 4 |
| Noticias | 4 |
| Internacionales | 10 |
| Musica | 3 |
| Otros | 13 |

## Estructura

```
tv-player/
├── index.html          # Pagina principal
├── server.js           # Servidor Node.js
├── start.sh            # Script de inicio (Linux/Mac)
├── start.bat           # Script de inicio (Windows)
├── css/
│   └── style.css       # Estilos
├── js/
│   ├── channels.js     # Lista de canales y keys
│   ├── player.js       # Logica del reproductor
│   └── app.js          # Interfaz de usuario
└── README.md
```

## Solucion de Problemas

### Error CORS
Si ves errores de CORS en la consola, asegurate de estar ejecutando el servidor local.

### Canal no reproduce
1. Abre la consola (F12)
2. Ejecuta `testChannel(numero_del_canal)`
3. Revisa los errores mostrados

### Token no obtiene
Verifica tu conexion a internet. El token se obtiene de `magisvideo.com`.

## Tecnologias

- JW Player 8.38.2
- DRM ClearKey
- DASH streaming
- HTML5 / CSS3 / JavaScript
