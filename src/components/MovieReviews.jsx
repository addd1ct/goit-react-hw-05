import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, {
      headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzY5OGY1YTA2YTEzMGI0N2JjOGFkOGExYTZmNGM3ZiIsIm5iZiI6MTc0MjY1NzAyMy4zODgsInN1YiI6IjY3ZGVkNWZmYzcwYWNkZDlkZjY5ZDExNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-gWVEtrqVuCWlHBdz6V1LgNNlOh3N2PYZuSGLIQe4KI' }
    }).then(response => setReviews(response.data.results));
  }, [movieId]);

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}><strong>{review.author}</strong>: {review.content}</li>
      ))}
    </ul>
  );
}

export default MovieReviews;