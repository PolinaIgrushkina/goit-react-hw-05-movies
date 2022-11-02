import { fetchFilmDetails } from 'helpers/api';
import { createImg } from 'helpers/createImg';
import React from 'react';
import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';

export default function MovieDetails() {
  const [film, setFilm] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function getDetails() {
      const details = await fetchFilmDetails(movieId);
      setFilm(details);
    }
    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { poster_path, release_date, vote_average, overview, genres } = film;
  return (
    <div className={css.movie_container}>
      <Link to={location.state?.from ?? '/'} className={css.goBack}>
        Go back
      </Link>
      <div>
        <img src={createImg(poster_path)} alt="Film avatar" width="300px" />
        <h2>
          {film.title} ({release_date?.slice(0, 4)})
        </h2>
        <p>User score: {Math.round(vote_average * 10)} %</p>
        <h3>Overwiev</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>
          {genres?.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </p>
      </div>

      <div>
        <h3 className={css.movie_title}>Additional information</h3>

        <ul className={css.movie_additionalList}>
          <li>
            <Link
              state={{ from: location?.state?.from }}
              to={`/movies/${movieId}/cast`}
              className={css.movie_additionalItem}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              state={{ from: location?.state?.from }}
              to={`/movies/${movieId}/reviews`}
              className={css.movie_additionalItem}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>

      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
