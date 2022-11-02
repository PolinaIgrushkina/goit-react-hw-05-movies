import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <ul className={css.navigation}>
        <li>
          <NavLink
            to="/"
            end
            // className={({ isActive }) =>
            //   isActive ? css.active : css.navigation__item
            // }
            className={({ isActive }) =>
              `${css.navigation__item} ${isActive ? css.active : ''}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `${css.navigation__item} ${isActive ? css.active : ''}`
            }
          >
            Movies
          </NavLink>
        </li>
      </ul>

      <div>{children}</div>
    </>
  );
}
