import { Outlet } from 'react-router-dom';

import Header from '@/components/Header';
import { SearchProvider } from '@/context/SearchProvider';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Layout = () => {
  return (
    <SearchProvider>
      <Header />
      <Outlet />
    </SearchProvider>
      <Footer />
    </>
  );
};

export default Layout;
