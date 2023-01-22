import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { Navigation } from '../Navigation/Navigation.jsx';
import { UserMenu } from 'components/UserMenu/UserMenu';
export const Layout = () => {
  return (
    <>
      <div className={css.container}>
        <header>
          <Navigation></Navigation>
          <UserMenu />
        </header>
        {/* HELLO! Im Layout */}
        <Outlet />
      </div>
    </>
  );
};
