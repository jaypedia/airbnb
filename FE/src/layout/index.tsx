import { Outlet } from 'react-router-dom';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Providers } from '@/context';

const Layout = () => {
  return (
    <>
      <Providers>
        <Header />
        <Outlet />
      </Providers>
      <Footer />
    </>
  );
};

export default Layout;
