import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
export const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/register">REGISTER</NavLink>
      <NavLink to="/login">LOGIN</NavLink>
      <NavLink to="/contacts">CONTACTS</NavLink>
    </nav>
  );
};
