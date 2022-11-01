import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import Layout from './Layout/Layout';
import MovieDetails from 'pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" elemnet={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Layout>
    </>
  );
};
