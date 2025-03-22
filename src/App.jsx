import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navigation from './components/Navigation';

const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./components/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <Router>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;