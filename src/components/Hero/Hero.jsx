import './Hero.css'

// Banner for the featured movie. It only knows the movie it receives by props.
function Hero({ movie }) {
  return (
    <section className="hero" id="featured">
      <div
        className="hero__backdrop"
        style={{ backgroundImage: `url(${movie.image})` }}
        aria-hidden="true"
      />
      <div className="hero__content container">
        <img className="hero__poster" src={movie.image} alt={movie.title} />
        <div className="hero__info">
          <span className="hero__badge">Película destacada</span>
          <h1 className="hero__title">{movie.title}</h1>
          <p className="hero__meta">
            {movie.genre} · {movie.duration} min · {movie.rating} · ⭐ {movie.score}
          </p>
          <p className="hero__synopsis">{movie.synopsis}</p>
          <a href="#billboard" className="hero__button">
            Ver horarios
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
