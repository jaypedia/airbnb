import * as S from './ArrowButtons.style';

import { ACTION } from '@/constants/actions';
import { useCalendarDispatch } from '@/context';
import * as I from '@/styles/icons';

const ArrowButtons = () => {
  const dispatch = useCalendarDispatch();

  const handleBackClick = () => {
    dispatch({
      type: ACTION.CLICK_BACK,
    });
  };

  const handleForwardClick = () => {
    dispatch({
      type: ACTION.CLICK_FORWARD,
    });
  };

  return (
    <S.BtnContainer>
      <I.ArrowBack onClick={handleBackClick} />
      <I.ArrowForward onClick={handleForwardClick} />
    </S.BtnContainer>
  );
};

export default ArrowButtons;
