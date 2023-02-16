import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Menu from './Menu';
const Navigation = () => {
  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
    </>
  );
};

export default Navigation;
