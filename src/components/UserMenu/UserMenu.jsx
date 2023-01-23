import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/user/operations';
import { selectIsLogged, selectUser } from 'redux/selectors';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLogged);
  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logOut());

  return (
    <>
      {isLoggedIn && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <button type="button" onClick={handleLogOut}>
            Logout
          </button>
        </div>
      )}
    </>
  );
};
