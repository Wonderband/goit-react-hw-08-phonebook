import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Homepage } from 'pages/HomePage/Homepage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { AuthRoute, LoggedRoute } from './RedirectRoute';
// import { UserMenu } from './UserMenu/UserMenu';

export const App = () => {
  return (
    <div>
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
