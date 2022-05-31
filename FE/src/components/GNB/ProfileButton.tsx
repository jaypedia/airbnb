import * as S from './GNB.style';
import * as I from '@/styles/icons';

const ProfileButton = () => {
  return (
    <S.ProfileWrapper>
      <I.Menu />
      <S.ProfileImgCircle>
        <I.User />
      </S.ProfileImgCircle>
    </S.ProfileWrapper>
  );
};

export default ProfileButton;
