import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/trending/movie/day', {
      headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzY5OGY1YTA2YTEzMGI0N2JjOGFkOGExYTZmNGM3ZiIsIm5iZiI6MTc0MjY1NzAyMy4zODgsInN1YiI6IjY3ZGVkNWZmYzcwYWNkZDlkZjY5ZDExNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-gWVEtrqVuCWlHBdz6V1LgNNlOh3N2PYZuSGLIQe4KI' }
    }).then(response => setMovies(response.data.results));
  }, []);

  return <MovieList movies={movies} />;
}

export default HomePage;