import { fetcActors } from 'helpers/api';
import { createImg } from 'helpers/createImg';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState();

  useEffect(() => {
    async function getCast() {
      const actorsData = await fetcActors(movieId);
      setActors(actorsData);
    }
    getCast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul className={css.cast_list}>
      {actors?.map(actor => (
        <li key={actor.id} className={css.cast_item}>
          <img
            src={createImg(actor.profile_path)}
            alt="actor"
            width="200px"
            height="300px"
          />
          <p>Name: {actor.original_name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
}
