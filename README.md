# Laboratorio 10 – Componentes y eventos: Cartelera de cine

**Curso:** Desarrollo de Aplicaciones Empresariales (4-C24-A)
**Docente:** Michael Montgomery Rosell
**Alumna:** Kiara Alburqueque

Continuación de la cartelera del laboratorio 9 (React + Vite). En esta semana se agregan un botón reutilizable, películas favoritas con `useState`, un buscador controlado con retardo, el filtrado de la cartelera con estado vacío y el guardado de las favoritas en el navegador.

## Cómo levantar el proyecto

```bash
npm install
npm run dev
```

## Estructura

```
src/
├── App.jsx                 # estado compartido: favoritas y texto de búsqueda
├── components/
│   ├── Button/             # botón reutilizable (children + variant + size)
│   ├── Header/             # nombre, navegación y contador de favoritas
│   ├── Hero/               # banner con llamadas a la acción y el buscador (children)
│   ├── MovieSearch/        # entrada controlada con retardo
│   ├── MovieList/          # filtra por el texto y dibuja el estado vacío
│   ├── MovieCard/          # tarjeta con el botón de favorita
│   └── Footer/
├── hooks/
│   ├── useDebounce.js      # devuelve el valor cuando deja de cambiar
│   └── useLocalStorage.js  # useState que se guarda en localStorage
├── data/                   # cartelera y datos del cine
└── styles/                 # variables → reset → base → typography → forms → utilities
```

## Componentes reutilizables

| Componente | Por qué es reutilizable |
|---|---|
| `Button` | Recibe su contenido por `children` y su aspecto por `variant` (`primary`, `secondary`, `ghost`) y `size` (`md`, `sm`). Con `href` se dibuja como enlace. El mismo componente se usa para «Ver horarios», «Reservar por teléfono» y el botón de favorita de cada tarjeta, cambiando solo sus props. |
| `Hero` | Recibe la película por props y cualquier contenido extra por `children`: hoy el buscador, mañana otro bloque, sin tocar el componente. |
| `MovieSearch` | No sabe qué se filtra: avisa del texto por la función `onSearch` que le pasa el padre. |
| `useDebounce`, `useLocalStorage` | Hooks propios que sirven para cualquier valor, no solo para películas. |

## Datos que la aplicación recuerda

| Dato | Dónde vive | Por qué ahí |
|---|---|---|
| Películas favoritas (ids) | `App`, con `useLocalStorage` | Las usan el `Header` (contador) y cada `MovieCard` (botón): el estado sube al ancestro común. Se guarda en `localStorage` para que sobreviva a una recarga. |
| Texto que se escribe en el buscador | `MovieSearch`, con `useState` | Solo el input necesita cada pulsación; es una entrada controlada. |
| Texto de búsqueda con retardo | `App`, con `useState` | Lo escribe `MovieSearch` y lo lee `MovieList`, que son hermanos: el padre común es `App`. |
| Lista filtrada | No es estado: `MovieList` la calcula en cada render | Se deriva de la cartelera y del texto; guardarla en estado la duplicaría. |
