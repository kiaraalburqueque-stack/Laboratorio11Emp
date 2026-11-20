import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import MovieList from './components/MovieList/MovieList'
import Footer from './components/Footer/Footer'
import MovieSearch from './components/MovieSearch/MovieSearch'
import { movies, featuredMovie } from './data/movies'
import { cinema } from './data/cinema'

// App owns the data that several components share.
function App() {
  // Ids of the favorite movies. It lives here because the Header (counter)
  // and every MovieCard (heart button) need the same list.
  const [favorites, setFavorites] = useState([])

  // Search text reported by MovieSearch (already debounced). It lives in App
  // because MovieSearch writes it and MovieList, a sibling, reads it.
  const [query, setQuery] = useState('')

  // Adds the movie if it is not in the list, removes it if it is.
  // It builds a new array instead of changing the old one.
  function toggleFavorite(movieId) {
    setFavorites((current) =>
      current.includes(movieId)
        ? current.filter((id) => id !== movieId)
        : [...current, movieId],
    )
  }

  return (
    <>
      <Header cinemaName={cinema.name} favoritesCount={favorites.length} />
      <main>
        <Hero movie={featuredMovie} />
        <div className="container mt-4">
          <MovieSearch onSearch={setQuery} />
        </div>
        <MovieList
          title="En cartelera"
          movies={movies}
          query={query}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      </main>
      <Footer cinemaName={cinema.name} contact={cinema.contact} />
    </>
  )
}

export default App
