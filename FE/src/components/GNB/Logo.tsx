import { NavLink } from 'react-router-dom';

import * as S from './GNB.style';

import * as I from '@/styles/icons';

const Logo = () => {
  return (
    <NavLink to="/">
      <S.LogoWrapper>
        <I.Airbnb />
        <S.LogoText>airbnb</S.LogoText>
      </S.LogoWrapper>
    </NavLink>
  );
};

export default Logo;
