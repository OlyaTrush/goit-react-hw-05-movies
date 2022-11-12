import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { SharedLayout } from 'components';

const HomePage = lazy(() =>
  import('../pages/HomePage/HomePage').then(module => ({
    default: module.HomePage,
  }))
);

const MoviesPage = lazy(() =>
  import('../pages/MoviesPage/MoviesPage').then(module => ({
    default: module.MoviesPage,
  }))
);

const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage').then(module => ({
    default: module.MovieDetailsPage,
  }))
);

const Cast = lazy(() =>
  import('../pages/Cast/Cast').then(module => ({
    default: module.Cast,
  }))
);

const Reviews = lazy(() =>
  import('../pages/Reviews/Reviews').then(module => ({
    default: module.Reviews,
  }))
);

const NotFound = lazy(() =>
  import('../pages/NotFound/NotFound').then(module => ({
    default: module.NotFound,
  }))
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />

        <Route path="/movies/:movieId/" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
