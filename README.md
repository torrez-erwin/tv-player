# TV Player

Reproductor de TV en streaming con canales argentinos e internacionales.

## Caracteristicas

- **89 canales** de TV en vivo
- **Sin login** - Acceso directo sin autenticacion
- **DRM ClearKey** - Proteccion de contenido compatible
- **EPG** - Informacion del programa actual
- **Categorias** - Organizacion por tipo de canal
- **Busqueda** - Filtrado de canales por nombre
- **Responsive** - Funciona en desktop y movil
- **Controles TV** - Navegacion con teclado y control remoto

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

## Tecnologias

- JW Player 8.38.2
- DRM ClearKey
- DASH streaming
- HTML5 / CSS3 / JavaScript

## Uso

1. Abrir `index.html` en un navegador
2. Seleccionar un canal de la barra lateral
3. Usar flechas del teclado para navegar
4. Presionar numeros para seleccionar canal directamente

## Estructura

```
tv-player/
├── index.html          # Pagina principal
├── css/
│   └── style.css       # Estilos
├── js/
│   ├── channels.js     # Lista de canales y keys
│   ├── player.js       # Logica del reproductor
│   └── app.js          # Interfaz de usuario
└── README.md
```

## Notas

- Los canales utilizan streaming DASH con DRM ClearKey
- El token de acceso se obtiene automaticamente del servidor
- Algunos canales pueden no estar disponibles en todo momento
- Se recomienda conexion a internet estable para mejor calidad
