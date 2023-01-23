import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Homepage } from 'pages/HomePage/Homepage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { AuthRoute, LoggedRoute } from './RedirectRoute';
import { useSelector } from 'react-redux';
import {
  selectIsError,
  selectIsLoading,
  selectIsLogged,
  selectUser,
} from 'redux/selectors';
import Notiflix from 'notiflix';
import { useEffect } from 'react';
// import { UserMenu } from './UserMenu/UserMenu';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  // const isError = useSelector(selectIsError);
  // const user = useSelector(selectUser);
  // const isLogged = useSelector(selectIsLogged);

  // useEffect(() => {
  //   isError && Notiflix.Notify.failure('Ooups... Something went wrong!');
  // }, [isError]);

  // useEffect(() => {
  //   isLogged &&
  //     Notiflix.Notify.success(
  //       `Succesfully logged in!  Name: ${user.name} Email: ${user.email}`
  //     );
  //   !isLogged && Notiflix.Notify.success(`You're not logged!`);
  // }, [isLogged, user]);

  return (
    <div>
      {isLoading && Notiflix.Loading.circle()}
      {!isLoading && Notiflix.Loading.remove()}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route
            path="register"
            element={<AuthRoute redirectTo="/" component={<RegisterPage />} />}
          />
          <Route
            path="login"
            element={<AuthRoute redirectTo="/" component={<LoginPage />} />}
          />
          <Route
            path="contacts"
            element={
              <LoggedRoute redirectTo="/" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
