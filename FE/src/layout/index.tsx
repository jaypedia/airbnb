import { Outlet } from 'react-router-dom';

import Header from '@/components/Header';
import { SearchProvider } from '@/context/SearchProvider';

const Layout = () => {
  return (
    <SearchProvider>
      <Header />
      <Outlet />
    </SearchProvider>
  );
};

export default Layout;
