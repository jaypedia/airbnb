import * as S from './GNB.style';
import Logo from './Logo';
import NavMenu from './NavMenu';
import ProfileButton from './ProfileButton';

import { useStyleState } from '@/context';

const GNB = () => {
  const { size } = useStyleState();

  return (
    <S.GNBWrapper size={size}>
      <Logo />
      <NavMenu />
      <ProfileButton />
    </S.GNBWrapper>
  );
};

export default GNB;
