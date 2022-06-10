import * as S from './OptionButton.style';

import { ACTION } from '@/constants/actions';
import { useCalendarState, useCalendarDispatch } from '@/context';
import { getLanguageButtonString } from '@/utils/calendar';

const LanguageButton = () => {
  const { language, monthCount } = useCalendarState();
  const dispatch = useCalendarDispatch();

  const handleLanguageButtonClick = () => {
    dispatch({
      type: ACTION.CHANGE_LANGUAGE,
    });
  };

  const handleMonthChangeButtonClick = () => {
    dispatch({
      type: ACTION.CHANGE_MONTH_COUNT,
    });
  };

  return (
    <S.OptionButtonContainer>
      <S.OptionButton onClick={handleLanguageButtonClick}>
        {getLanguageButtonString(language)}
      </S.OptionButton>
      <S.OptionButton
        onClick={handleMonthChangeButtonClick}
      >{`${monthCount} Month`}</S.OptionButton>
    </S.OptionButtonContainer>
  );
};

export default LanguageButton;
