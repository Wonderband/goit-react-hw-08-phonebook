import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Homepage } from 'pages/HomePage/Homepage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { AuthRoute, LoggedRoute } from './RedirectRoute';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
import Notiflix from 'notiflix';
import { Page404 } from 'pages/Page404/Page404';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
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
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
};
