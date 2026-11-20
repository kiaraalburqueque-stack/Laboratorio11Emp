import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'

// Grid that renders one MovieCard per movie using map.
// It does not own the favorites: it receives the list and the function
// from App and hands each card only what that card needs.
function MovieList({ title, movies, favorites, onToggleFavorite }) {
  return (
    <section className="movie-list container" id="billboard">
      <h2 className="movie-list__title">{title}</h2>
      <div className="movie-list__grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isFavorite={favorites.includes(movie.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </section>
  )
}

export default MovieList
