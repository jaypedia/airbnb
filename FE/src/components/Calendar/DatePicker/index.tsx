import * as S from './DatePicker.style';

import { ACTION } from '@/constants/actions';
import { INPUT_FIELD } from '@/constants/constant';
import {
  useCalendarState,
  useDatePickerDispatch,
  useDatePickerState,
  useSearchUIState,
  useSearchUIDispatch,
} from '@/context';
import { getKoreanMonthDateString } from '@/utils/calendar';

const DatePicker = ({ date, monthIdx }) => {
  const { checkIn, checkOut } = useDatePickerState();
  const { year } = useCalendarState();
  const { focusedField } = useSearchUIState();
  const datePickerdispatch = useDatePickerDispatch();
  const searchUIDispatch = useSearchUIDispatch();
  const checkInOutString = getKoreanMonthDateString(date, monthIdx);
  const dateObj = new Date(year, monthIdx, date);
  const currentDate = dateObj.getDate();
  const lastDate = new Date(year, monthIdx + 1, 0).getDate();

  const handleClick = () => {
    const field =
      focusedField === INPUT_FIELD.CHECK_OUT ? INPUT_FIELD.CHECK_IN : INPUT_FIELD.CHECK_OUT;

    datePickerdispatch({
      type: ACTION.PICK_DATE,
      payload: {
        year,
        date,
        monthIdx,
        focusedField,
      },
    });

    searchUIDispatch({
      type: ACTION.CHANGE_FOCUS,
      payload: {
        checkIn,
        focusedField: field,
      },
    });
  };

  const checkSelectedDate = () => {
    return checkIn.kr === checkInOutString || checkOut.kr === checkInOutString;
  };

  const checkBetween = () => {
    if (!checkIn.kr) return;
    return checkIn.dateObj < dateObj && checkOut.dateObj > dateObj;
  };

  const isBetween = checkBetween();

  return (
    <S.DatePicker onClick={handleClick} selected={checkSelectedDate()}>
      <S.DateTextBox
        isBetween={isBetween}
        isFirstDate={isBetween && date === 1}
        isLastDate={isBetween && currentDate === lastDate}
      >
        {date}
      </S.DateTextBox>
    </S.DatePicker>
  );
};

export default DatePicker;
