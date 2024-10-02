import { Outlet } from 'react-router-dom';

import { HeaderComponent } from '../components/Header';
import { NavbarComponent } from '../components/Navbar';
import { FooterComponent } from '../components/Footer';

const Layout = () => (
  <div className="App">
    <HeaderComponent />
    <NavbarComponent />
    <Outlet />
    <FooterComponent />
  </div>
);

export default Layout;
