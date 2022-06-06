import { Outlet } from 'react-router-dom';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { SearchProvider } from '@/context/SearchProvider';
import { StyleProvider } from '@/context/StyleProvider';

const Layout = () => {
  return (
    <>
      <SearchProvider>
        <StyleProvider>
          <Header />
        </StyleProvider>
        <Outlet />
      </SearchProvider>
      <Footer />
    </>
  );
};

export default Layout;
