import './MovieCard.css'

// Card for a single movie. It receives the movie by props and does not
// know where the data comes from.
function MovieCard({ movie }) {
  const { title, image, rating, score, genre, duration, showtimes } = movie

  return (
    <article className="movie-card">
      <div className="movie-card__image-wrapper">
        <img className="movie-card__image" src={image} alt={`Póster de ${title}`} />
        <span className="movie-card__rating">{rating}</span>
      </div>

      <div className="movie-card__body">
        <h3 className="movie-card__title">{title}</h3>
        <p className="movie-card__meta">
          {genre} · {duration} min
        </p>
        <p className="movie-card__score">⭐ {score.toFixed(1)} / 10</p>

        <ul className="movie-card__showtimes">
          {showtimes.map((time) => (
            <li key={time} className="movie-card__time">
              {time}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default MovieCard
