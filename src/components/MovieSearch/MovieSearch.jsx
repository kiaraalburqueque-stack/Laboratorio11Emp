import { useState } from 'react'
import './MovieSearch.css'

// Controlled search input: the text lives in this component's state and
// the input always shows that state. onChange updates it on every key.
// The parent hears about the text through the onSearch function.
function MovieSearch({ onSearch, placeholder = 'Busca por título o género' }) {
  const [text, setText] = useState('')

  function handleChange(event) {
    const value = event.target.value
    setText(value)
    onSearch(value)
  }

  return (
    <form className="movie-search" role="search" onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="movie-search-input">Buscar en la cartelera</label>
      <input
        id="movie-search-input"
        type="search"
        value={text}
        onChange={handleChange}
        placeholder={placeholder}
        autoComplete="off"
      />
    </form>
  )
}

export default MovieSearch
