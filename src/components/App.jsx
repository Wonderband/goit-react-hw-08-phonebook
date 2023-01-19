import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Section } from './Section/Section';
import { Homepage } from 'pages/HomePage/Homepage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </div>
  );
};
