import { fetchFindFilms } from 'helpers/api';
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from './MoviesPage.module.css';
// import { omitBy } from 'lodash';

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page') ?? 1;
  const query = searchParams.get('query') ?? '';

  const [searchWord, setSearchWord] = useState(query ?? '');
  const [findingFilms, setFindingFilms] = useState([]);
  const [filmsData, setFilmsData] = useState([]);

  const location = useLocation();

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function getFindFilms() {
      const films = await fetchFindFilms(query, page);
      // (omitBy({ query, page }, item => !item));
      setFindingFilms(films.results);
      setFilmsData(films);
    }
    getFindFilms();
  }, [query, page]);

  const handleSubmit = event => {
    event.preventDefault();

    if (searchWord.trim() === '') {
      alert('Please write what you need.');
      return;
    }

    setSearchParams({ query: searchWord.trim().toLowerCase(), page: 1 });
    // (omitBy({ query: searchWord.trim().toLowerCase(), page: 1 }, item => !item;}));
  };

  const handleChange = event => {
    setSearchWord(event.currentTarget.value);
  };

  const handleChangePage = newPage => {
    setSearchParams({ query: searchWord.trim().toLowerCase(), page: newPage });
  };

  return (
    <div className={css.movies_container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={searchWord}
          className={css.movies_input}
        />
        <button type="submit" className={css.movies_button}>
          Search
        </button>
      </form>
      <ul className={css.movies_list}>
        {findingFilms.map(findingFilm => (
          <li key={findingFilm.id} className={css.movies_listItem}>
            <Link
              to={`/movies/${findingFilm.id}`}
              state={{ from: location }}
              className={css.movies_link}
            >
              {findingFilm.original_title}
            </Link>
          </li>
        ))}
      </ul>

      {filmsData?.total_pages && (
        <div>
          <ul className={css.movies_buttonList}>
            {[...Array(filmsData?.total_pages)].map((_, index) => (
              <li key={index}>
                <button
                  disabled={index + 1 === filmsData?.page}
                  onClick={() => handleChangePage(index + 1)}
                  className={css.movies_buttonItem}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
