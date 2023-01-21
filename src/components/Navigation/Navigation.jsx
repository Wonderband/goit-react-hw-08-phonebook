import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/selectors';

export const Navigation = () => {
  const { isLoggedIn } = useSelector(selectUser);
  return (
    <nav className={css.nav}>
      <NavLink to="/">HOME</NavLink>
      {!isLoggedIn && <NavLink to="/register">REGISTER</NavLink>}
      {!isLoggedIn && <NavLink to="/login">LOGIN</NavLink>}
      {isLoggedIn && <NavLink to="/contacts">CONTACTS</NavLink>}
    </nav>
  );
};
