import { useLocation } from 'react-router-dom';

import * as S from './Header.style';

import GNB from '@/components/GNB';
import SearchBar from '@/components/SearchBar';
import { SIZE } from '@/constants/constant';

const Header = () => {
  const { pathname } = useLocation();

  const currentStyle = {
    '/': SIZE.LARGE,
    '/search-result': SIZE.SMALL,
  };

  return (
    <S.HeaderWrapper currentStyle={currentStyle[pathname]}>
      <GNB currentStyle={currentStyle[pathname]} />
      <SearchBar currentStyle={currentStyle[pathname]} />
    </S.HeaderWrapper>
  );
};

export default Header;
