import { fetchTrendingFilms } from 'helpers/api';
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    async function getTrendingFilms() {
      const films = await fetchTrendingFilms();
      setTrendingFilms(films);
    }
    getTrendingFilms();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {trendingFilms.map(film => {
          return (
            <li key={film.id}>
              <Link to="/movies/:movieId">{film.original_title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
