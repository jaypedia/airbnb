import GNB from '@/components/GNB';
import { useLocation } from 'react-router-dom';
import SearchBar from '@/components/SearchBar';
import * as S from './Header.style';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <S.HeaderWrapper path={pathname}>
      <GNB path={pathname} />
      <SearchBar path={pathname} />
    </S.HeaderWrapper>
  );
};

export default Header;
