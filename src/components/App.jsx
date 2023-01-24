import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/Hage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { AuthRoute, LoggedRoute } from './RedirectRoute';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
import Notiflix from 'notiflix';
import { Page404 } from 'pages/Page404/Page404';
import { lazy, Suspense, useEffect } from 'react';
import { getUserData } from 'redux/user/operations';

// const HomePage = lazy(() => import('pages/HomePage/Homepage'));
// const RegisterPage = lazy(() => {
//   'pages/RegisterPage/RegisterPage';
// });
// const LoginPage = lazy(() => {
//   'pages/LoginPage/LoginPage';
// });
// const ContactsPage = lazy(() => {
//   'pages/ContactsPage/ContactsPage';
// });

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
    dispatch(getUserData(token));
  }, [dispatch]);

  return (
    <div>
      {isLoading && Notiflix.Loading.circle()}
      {!isLoading && Notiflix.Loading.remove()}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Suspense fallback={Notiflix.Loading.circle()}>
            <Route index element={<HomePage />} />
            <Route
              path="register"
              element={
                <AuthRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="login"
              element={
                <AuthRoute redirectTo="/contacts" component={<LoginPage />} />
              }
            />
            <Route
              path="contacts"
              element={
                <LoggedRoute redirectTo="/login" component={<ContactsPage />} />
              }
            />
            <Route path="*" element={<Page404 />} />
          </Suspense>
        </Route>
      </Routes>
    </div>
  );
};
