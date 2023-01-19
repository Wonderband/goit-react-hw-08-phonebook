import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { Navigation } from '../Navigation/Navigation.jsx';
export const Layout = () => {
  return (
    <>
      <div className={css.container}>
        <header>
          <Navigation></Navigation>
        </header>
        HELLO! Im Layout
        <Outlet />
      </div>
    </>
  );
};
