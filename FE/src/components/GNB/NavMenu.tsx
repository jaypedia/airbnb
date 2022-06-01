import * as S from './GNB.style';

const NavMenu = () => {
  return (
    <S.NavWrapper>
      <S.NavItem to="/search-result">숙소</S.NavItem>
      <S.NavItem to="/search-result">체험</S.NavItem>
      <S.NavItem to="/search-result">온라인 체험</S.NavItem>
    </S.NavWrapper>
  );
};

export default NavMenu;
