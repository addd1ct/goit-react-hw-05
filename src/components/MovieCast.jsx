import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
      headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzY5OGY1YTA2YTEzMGI0N2JjOGFkOGExYTZmNGM3ZiIsIm5iZiI6MTc0MjY1NzAyMy4zODgsInN1YiI6IjY3ZGVkNWZmYzcwYWNkZDlkZjY5ZDExNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-gWVEtrqVuCWlHBdz6V1LgNNlOh3N2PYZuSGLIQe4KI' }
    }).then(response => setCast(response.data.cast));
  }, [movieId]);

  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>{actor.name} as {actor.character}</li>
      ))}
    </ul>
  );
}

export default MovieCast;