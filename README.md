# Laboratorio 09 – ReactJS: Cartelera de cine

**Curso:** Desarrollo de Aplicaciones Empresariales (4-C24-A)
**Docente:** Michael Montgomery Rosell
**Alumna:** Kiara Alburqueque

Aplicación en React + Vite que muestra la cartelera de un cine ("Cine Tecsup") armada con componentes funcionales que reciben sus datos por *props*.

## Requisitos

- Node.js 20.19 o superior (`node -v`)
- npm

## Cómo levantar el proyecto

```bash
npm install
npm run dev
```

Abrir la URL que muestra la consola (por defecto http://localhost:5173).

## Dependencias declaradas

| Paquete | Tipo | Para qué |
|---|---|---|
| `react` | dependencia | Librería de componentes |
| `react-dom` | dependencia | Dibuja los componentes en el navegador |
| `vite` | desarrollo | Servidor de desarrollo y empaquetado |
| `@vitejs/plugin-react` | desarrollo | Soporte de JSX y recarga rápida en Vite |

## Estructura del proyecto

```
Lab09EMP/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── favicon.svg
│   └── posters/            # pósters de las 8 películas (SVG)
└── src/
    ├── main.jsx            # punto de entrada: monta <App /> en #root
    ├── App.jsx             # compone la página y reparte los datos
    ├── components/         # una carpeta por componente (JSX + CSS)
    │   ├── Header/
    │   ├── Hero/
    │   ├── MovieList/
    │   ├── MovieCard/
    │   └── Footer/
    ├── data/
    │   ├── movies.js       # cartelera: 8 películas
    │   └── cinema.js       # nombre y datos de contacto del cine
    └── styles/             # arquitectura de CSS
        ├── index.css       # importa todo en orden
        ├── variables.css   # colores, espacios, tipografía
        ├── reset.css       # normaliza el navegador
        └── base.css        # estilos globales y .container
```

## Recorte de la interfaz en componentes

```
App
├── Header      (cinemaName)
├── main
│   ├── Hero        (movie)           -> película destacada
│   └── MovieList   (title, movies)
│       └── MovieCard × 8  (movie)    -> key = movie.id
└── Footer      (cinemaName, contact)
```

- **App** es el único componente que importa los archivos de `data/`. Los hijos no saben de dónde vienen los datos: solo reciben lo que necesitan por props.
- **Header**: nombre del cine y navegación.
- **Hero**: banner de la película destacada (recibe `movie`).
- **MovieList**: recorre `movies` con `map` y dibuja una `MovieCard` por película, pasando `key={movie.id}`.
- **MovieCard**: imagen, título, clasificación, valoración y horarios de una película.
- **Footer**: datos de contacto e información del cine.

Más detalle (errores provocados, casos de prueba y conclusiones) en [`docs/INFORME.md`](docs/INFORME.md).
