import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/user/operations';
import { selectIsLogged, selectUser } from 'redux/selectors';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLogged);
  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logOut());

  return (
    <>
      {isLoggedIn && (
        <div className={css.userMenu}>
          <p>
            <span className={css.creden}>Name:</span> {user.name}
          </p>
          <p>
            <span className={css.creden}>Email:</span> {user.email}
          </p>
          <button
            className={css.logoutButton}
            type="button"
            onClick={handleLogOut}
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
};
