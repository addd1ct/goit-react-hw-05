import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import MovieList from '../components/MovieList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (!query) return;
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
          params: { query, language: 'en-US', page: 1, include_adult: false },
          headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzY5OGY1YTA2YTEzMGI0N2JjOGFkOGExYTZmNGM3ZiIsIm5iZiI6MTc0MjY1NzAyMy4zODgsInN1YiI6IjY3ZGVkNWZmYzcwYWNkZDlkZjY5ZDExNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-gWVEtrqVuCWlHBdz6V1LgNNlOh3N2PYZuSGLIQe4KI' }
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchMovies();
  }, [query]);

  const handleSearch = event => {
    event.preventDefault();
    const searchValue = event.target.elements.query.value.trim();
    if (!searchValue) return;
    setSearchParams({ query: searchValue });
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" name="query" defaultValue={query} placeholder="Search movies..." />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;