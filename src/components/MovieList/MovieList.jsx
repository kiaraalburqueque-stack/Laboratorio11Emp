import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'

// Grid that renders one MovieCard per movie using map.
// Each element gets a unique key (the movie id).
function MovieList({ title, movies }) {
  return (
    <section className="movie-list container" id="billboard">
      <h2 className="movie-list__title">{title}</h2>
      <div className="movie-list__grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  )
}

export default MovieList
