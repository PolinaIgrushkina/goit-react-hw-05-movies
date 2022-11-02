import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <ul className={css.navigation}>
        <li>
          <NavLink to="/" className={css.navigation__item}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={css.navigation__item}>
            Movies
          </NavLink>
        </li>
      </ul>

      <div>{children}</div>
    </>
  );
}
