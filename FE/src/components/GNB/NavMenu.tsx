import { NavLink } from 'react-router-dom';
import * as S from './GNB.style';

const NavMenu = () => {
  return (
    <S.NavWrapper>
      <S.NavItem>숙소</S.NavItem>
      <S.NavItem>체험</S.NavItem>
      <S.NavItem>온라인 체험</S.NavItem>
    </S.NavWrapper>
  );
};

export default NavMenu;
