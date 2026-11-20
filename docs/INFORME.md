# Laboratorio 09 – ReactJS · Desarrollo

> Formato pedido por la guía: nombre del alumno, título del desarrollo, captura del resultado, código, explicación del resultado y casos de prueba, más una captura de la estructura del proyecto en el editor.
> Las capturas se agregan en `docs/capturas/` (reemplazar los marcadores `[captura]`).

| Integrante | Desarrollo realizado |
|---|---|
| Kiara Alburqueque | Pasos 1–12: creación del proyecto, datos, componentes, composición, errores provocados y entrega (trabajo individual) |

---

## 1. Crear el proyecto con Vite y levantarlo

**Alumna:** Kiara Alburqueque

```bash
node -v                       # v20.19 o superior
npm create vite@latest Lab09EMP -- --template react
cd Lab09EMP
npm install
npm run dev
```

**Resultado:** el servidor de desarrollo queda en `http://localhost:5173`.
[captura: consola con `VITE vX ready` y la URL]

**Casos de prueba**
- `npm run dev` arranca sin errores en consola. ✔
- Al guardar un archivo, el navegador se actualiza solo (HMR). ✔

## 2. Limpiar el andamiaje

Se eliminaron `App.css`, `src/assets/react.svg`, `public/vite.svg` y el contador de ejemplo. Quedan `index.html`, `src/main.jsx` y `src/App.jsx` con lo mínimo que funciona.

## 3. Organizar `src/` y arquitectura de CSS

- `components/`: una carpeta por componente, con su `.jsx` y su `.css`.
- `data/`: datos de la cartelera y del cine.
- `styles/`: `variables.css` (tokens) → `reset.css` → `base.css`, todos importados en orden desde `index.css`, que a su vez se importa una sola vez en `main.jsx`.

[captura: estructura del proyecto en VS Code]

## 4. Archivo de datos

`src/data/movies.js` exporta 8 películas con `id`, `title`, `image`, `synopsis`, `rating`, `score`, `genre`, `duration` y `showtimes`, y la película destacada (`featuredMovie`).

## 5–9. Componentes

| Componente | Props | Responsabilidad |
|---|---|---|
| `Header` | `cinemaName` | Nombre del cine y navegación |
| `Footer` | `cinemaName`, `contact` | Contacto e información |
| `Hero` | `movie` | Banner de la película destacada |
| `MovieCard` | `movie` | Imagen, título, valoración y horarios de una película |
| `MovieList` | `title`, `movies` | Recorre la cartelera con `map` y dibuja una `MovieCard` por película con `key={movie.id}` |

Ejemplo (MovieList):

```jsx
{movies.map((movie) => (
  <MovieCard key={movie.id} movie={movie} />
))}
```

## 10. Composición en `App.jsx`

```jsx
<>
  <Header cinemaName={cinema.name} />
  <main>
    <Hero movie={featuredMovie} />
    <MovieList title="En cartelera" movies={movies} />
  </main>
  <Footer cinemaName={cinema.name} contact={cinema.contact} />
</>
```

[captura: página completa en el navegador]

**Casos de prueba**
- Se dibujan las 8 tarjetas, una por película del archivo de datos. ✔
- Cambiar un título en `movies.js` cambia la tarjeta sin tocar ningún componente. ✔
- Agregar una novena película al arreglo agrega una tarjeta más. ✔
- La consola del navegador no muestra advertencias. ✔

## 11. Tres errores típicos provocados

Cada error se provocó a propósito, se registró el mensaje y luego se revirtió.

### a) `class` en vez de `className`

```jsx
<article class="movie-card">
```

Mensaje en la consola del navegador:

```
Invalid DOM property `class`. Did you mean `className`?
```

**Por qué:** JSX es JavaScript y `class` es una palabra reservada; React usa `className`.

### b) Devolver dos nodos raíz

```jsx
return (
  <Header cinemaName={cinema.name} />
  <Footer cinemaName={cinema.name} contact={cinema.contact} />
)
```

Mensaje en la terminal y en la pantalla de error de Vite:

```
[plugin:vite:react-babel] Adjacent JSX elements must be wrapped in an enclosing tag.
Did you want a JSX fragment <>...</>?
```

**Por qué:** un componente devuelve un solo elemento. Se soluciona envolviendo en un fragmento `<>...</>` o en un `<div>`.

### c) Olvidar la `key` en el `map`

```jsx
{movies.map((movie) => (
  <MovieCard movie={movie} />
))}
```

Mensaje en la consola del navegador:

```
Each child in a list should have a unique "key" prop.
Check the render method of `MovieList`.
```

**Por qué:** React usa la `key` para saber qué elemento de la lista cambió, se agregó o se quitó. Se usa `movie.id`, que es único y estable (no el índice).

[capturas: un mensaje por cada error]

## 12. Entrega

- Repositorio: https://github.com/kiaraalburqueque-stack/Laboratorio9Emp
- Entregable con capturas, código y recorte en componentes subido al campus virtual.

---

## Conclusiones

1. Vite crea y levanta un proyecto de React en segundos y recarga los cambios al instante, lo que acelera el ciclo de escribir y comprobar.
2. Dividir la interfaz en componentes pequeños, cada uno con una sola responsabilidad y su propia carpeta y CSS, hace que la página sea fácil de leer, de modificar y de reutilizar.
3. Las props hacen que los datos fluyan solo de padre a hijo: `App` es el único que conoce los archivos de datos y los hijos solo reciben lo que necesitan, así que cambiar la cartelera no obliga a tocar ningún componente.
4. JSX tiene reglas propias (`className`, un solo nodo raíz, `key` en las listas); leer los mensajes de error de React y Vite indica exactamente qué regla se rompió y dónde.
