import { NavLink } from 'react-router-dom';

import * as S from './GNB.style';

const Logo = () => {
  return (
    <NavLink to="/">
      <S.LogoText>LOGO</S.LogoText>
    </NavLink>
  );
};

export default Logo;
