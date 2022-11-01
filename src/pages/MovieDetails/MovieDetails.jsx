import { fetchFilmDetails } from 'helpers/api';
import { createImg } from 'helpers/createImg';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

export default function MovieDetails() {
  const [film, setFilm] = useState({});
  const { movieId } = useParams();

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
    <div>
      <Link to="/movies">Go back</Link>
      <div>
        <img src={createImg(poster_path)} alt="Film avatar" />
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
        <h3>Additional information</h3>

        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
}
