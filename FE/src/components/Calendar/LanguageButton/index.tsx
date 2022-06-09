import * as S from './LanguageButton.style';

import { ACTION } from '@/constants/actions';
import { useCalendarState, useCalendarDispatch } from '@/context';
import { getLanguageButtonString } from '@/utils/calendar';

const LanguageButton = () => {
  const { language } = useCalendarState();
  const dispatch = useCalendarDispatch();

  const handleLanguageButtonClick = () => {
    dispatch({
      type: ACTION.CHANGE_LANGUAGE,
    });
  };

  return (
    <S.LanguageButtonContainer>
      <S.LanguageButton onClick={handleLanguageButtonClick}>
        {getLanguageButtonString(language)}
      </S.LanguageButton>
    </S.LanguageButtonContainer>
  );
};

export default LanguageButton;
