import { LoginForm } from 'components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLogged, selectUser } from 'redux/user/selectors';

export const UserMenu = () => {
  const userData = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLogged);
  return (
    <>
      {isLoggedIn && (
        <div>
          <p>{userData.user.email}</p>
          <p>{userData.user.name}</p>
          <button>Logout</button>
        </div>
      )}
    </>
  );
};
