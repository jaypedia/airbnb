import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import * as S from './Header.style';

import GNB from '@/components/GNB';
import SearchBar from '@/components/SearchBar';
import { ACTION } from '@/constants/actions';
import { useStyleDispatch, useStyleState } from '@/context/StyleProvider';

const Header = () => {
  const { pathname } = useLocation();
  const { size } = useStyleState();
  const dispatch = useStyleDispatch();

  useEffect(() => {
    dispatch({
      type: ACTION.SET_PATH,
      payload: { currentPath: pathname },
    });
  }, [pathname]);

  return (
    <S.HeaderWrapper size={size}>
      <GNB />
      <SearchBar />
    </S.HeaderWrapper>
  );
};

export default Header;
