import * as S from './GNB.style';
import Logo from './Logo';
import NavMenu from './NavMenu';
import ProfileButton from './ProfileButton';

const GNB = ({ path }) => {
  return (
    <>
      <S.GNBWrapper path={path}>
        <Logo />
        <NavMenu />
        <ProfileButton />
      </S.GNBWrapper>
    </>
  );
};

export default GNB;
