import { Outlet } from 'react-router-dom';

import Calendar from '@/components/Calendar';
import Header from '@/components/Header';
import { SearchProvider } from '@/context/SearchProvider';

const Layout = () => {
  return (
    <SearchProvider>
      <Header />
      <Outlet />
      <Calendar />
    </SearchProvider>
  );
};

export default Layout;
