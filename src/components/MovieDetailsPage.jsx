import { useEffect, useState } from 'react';
import { useParams, Link, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import MovieCast from '../components/MovieCast';
import MovieReviews from '../components/MovieReviews';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
      headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzY5OGY1YTA2YTEzMGI0N2JjOGFkOGExYTZmNGM3ZiIsIm5iZiI6MTc0MjY1NzAyMy4zODgsInN1YiI6IjY3ZGVkNWZmYzcwYWNkZDlkZjY5ZDExNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-gWVEtrqVuCWlHBdz6V1LgNNlOh3N2PYZuSGLIQe4KI' }
    }).then(response => setMovie(response.data));
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Routes>
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReviews />} />
      </Routes>
    </div>
  );
}

export default MovieDetailsPage;