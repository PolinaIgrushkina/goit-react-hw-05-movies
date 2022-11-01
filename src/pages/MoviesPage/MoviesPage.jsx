import { fetchFindFilms } from 'helpers/api';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [searchWord, setSearchWord] = useState('');
  const [findingFilms, setFindingFilms] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    async function getFindFilms() {
      const films = await fetchFindFilms(query);
      setFindingFilms(films.results);
    }
    getFindFilms();
  }, [query, searchWord]);

  const handleSubmit = event => {
    event.preventDefault();

    if (searchWord.trim() === '') {
      alert('Please write what you need.');
      return;
    }
    setSearchParams({ query: searchWord });
  };

  const handleChange = event => {
    setSearchWord(event.currentTarget.value.toLowerCase());
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Search</button>
      </form>

      <ul>
        {findingFilms?.map(findingFilm => (
          <li key={findingFilm.id}>
            <Link to="">{findingFilm.original_title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
