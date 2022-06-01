import { useLocation } from 'react-router-dom';

import GNB from '@/components/GNB';
import SearchBar from '@/components/SearchBar';

import * as S from './Header.style';

const Header = () => {
  const { pathname } = useLocation();

  const currentStyle = {
    '/': 'main',
    '/search-result': 'searchResult',
  };

  return (
    <S.HeaderWrapper currentStyle={currentStyle[pathname]}>
      <GNB currentStyle={currentStyle[pathname]} />
      <SearchBar currentStyle={currentStyle[pathname]} />
    </S.HeaderWrapper>
  );
};

export default Header;
