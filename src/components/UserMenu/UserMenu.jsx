import { useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';

export const UserMenu = () => {
  const userData = useSelector(selectUser);
  return (
    <div>
      <p>{userData.user.email}</p>
      <p>{userData.user.name}</p>
      <button>Logout</button>
    </div>
  );
};
