import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLogged } from '../../redux/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLogged);
  // console.log(isLoggedIn);
  return (
    <nav className={css.nav}>
      <NavLink className={({ isActive }) => isActive && css.active} to="/">
        HOME
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) => isActive && css.active}
          to="/contacts"
        >
          CONTACTS
        </NavLink>
      )}
      {!isLoggedIn && (
        <NavLink
          className={({ isActive }) => isActive && css.active}
          to="/register"
        >
          REGISTER
        </NavLink>
      )}
      {!isLoggedIn && (
        <NavLink
          className={({ isActive }) => isActive && css.active}
          to="/login"
        >
          LOGIN
        </NavLink>
      )}
    </nav>
  );
};
