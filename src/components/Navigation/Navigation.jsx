import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLogged, selectUser } from '../../redux/user/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLogged);
  console.log(isLoggedIn);
  return (
    <nav className={css.nav}>
      <NavLink to="/">HOME</NavLink>
      {isLoggedIn && <NavLink to="/contacts">CONTACTS</NavLink>}
      {!isLoggedIn && <NavLink to="/register">REGISTER</NavLink>}
      {!isLoggedIn && <NavLink to="/login">LOGIN</NavLink>}
    </nav>
  );
};
