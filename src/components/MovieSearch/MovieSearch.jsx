import { useEffect, useState } from 'react'
import { useDebounce } from '../../hooks/useDebounce'
import './MovieSearch.css'

const SEARCH_DELAY_MS = 400

// Controlled search input: the text lives in this component's state and
// the input always shows that state. onChange updates it on every key,
// but the parent is told only when the user pauses for SEARCH_DELAY_MS.
function MovieSearch({ onSearch, placeholder = 'Busca por título o género' }) {
  const [text, setText] = useState('')
  const debouncedText = useDebounce(text, SEARCH_DELAY_MS)

  // Runs only when the debounced text changes, not on every key.
  // The delay comes from the custom hook: no setTimeout written by hand here.
  useEffect(() => {
    onSearch(debouncedText)
  }, [debouncedText, onSearch])

  return (
    <form className="movie-search" role="search" onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="movie-search-input">Buscar en la cartelera</label>
      <input
        id="movie-search-input"
        type="search"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder={placeholder}
        autoComplete="off"
      />
    </form>
  )
}

export default MovieSearch
