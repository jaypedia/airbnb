import * as S from './ArrowButtons.style';

import * as I from '@/styles/icons';

const ArrowButtons = ({ onBackClick, onForwardClick }) => {
  return (
    <S.BtnContainer>
      <I.ArrowBack onClick={onBackClick} />
      <I.ArrowForward onClick={onForwardClick} />
    </S.BtnContainer>
  );
};

export default ArrowButtons;
