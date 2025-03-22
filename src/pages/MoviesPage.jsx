import { useState } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const searchMovies = () => {
    axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}`, {
      headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzY5OGY1YTA2YTEzMGI0N2JjOGFkOGExYTZmNGM3ZiIsIm5iZiI6MTc0MjY1NzAyMy4zODgsInN1YiI6IjY3ZGVkNWZmYzcwYWNkZDlkZjY5ZDExNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-gWVEtrqVuCWlHBdz6V1LgNNlOh3N2PYZuSGLIQe4KI' }
    }).then(response => setMovies(response.data.results));
  };

  return (
    <div>
      <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
      <button onClick={searchMovies}>Search</button>
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;