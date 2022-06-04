import * as S from './GNB.style';
import Logo from './Logo';
import NavMenu from './NavMenu';
import ProfileButton from './ProfileButton';

const GNB = ({ currentStyle }) => {
  return (
    <S.GNBWrapper currentStyle={currentStyle}>
      <Logo />
      <NavMenu />
      <ProfileButton />
    </S.GNBWrapper>
  );
};

export default GNB;
