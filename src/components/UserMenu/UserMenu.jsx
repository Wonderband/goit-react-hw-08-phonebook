import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/user/operations';
import { selectIsLogged, selectUser } from 'redux/user/selectors';

export const UserMenu = () => {
  const userData = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLogged);
  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logOut());

  return (
    <>
      {isLoggedIn && (
        <div>
          <p>{userData.user.email}</p>
          <p>{userData.user.name}</p>
          <button type="button" onClick={handleLogOut}>
            Logout
          </button>
        </div>
      )}
    </>
  );
};
