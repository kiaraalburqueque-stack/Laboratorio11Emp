import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import MovieList from './components/MovieList/MovieList'
import Footer from './components/Footer/Footer'
import { movies, featuredMovie } from './data/movies'
import { cinema } from './data/cinema'

// App is the only component that knows where the data comes from.
// It passes to each child just what that child needs.
function App() {
  return (
    <>
      <Header cinemaName={cinema.name} />
      <main>
        <Hero movie={featuredMovie} />
        <MovieList title="En cartelera" movies={movies} />
      </main>
      <Footer cinemaName={cinema.name} contact={cinema.contact} />
    </>
  )
}

export default App
