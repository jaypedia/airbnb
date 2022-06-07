import { useContext } from 'react';

import * as S from './DatePicker.style';

import { CalendarContext } from '@/components/Calendar';
import { ACTION } from '@/constants/actions';
import { INPUT_FIELD } from '@/constants/constant';
import {
  useDatePickerDispatch,
  useDatePickerState,
  useSearchUIState,
  useSearchUIDispatch,
} from '@/context';
import { getKoreanMonthDateString } from '@/utils/calendar';

const DatePicker = ({ date, monthIdx }) => {
  const { checkIn, checkOut } = useDatePickerState();
  const { year } = useContext(CalendarContext);
  const { focusedField } = useSearchUIState();
  const datePickerdispatch = useDatePickerDispatch();
  const searchUIDispatch = useSearchUIDispatch();
  const checkInOutString = getKoreanMonthDateString(date, monthIdx);
  const dateObj = new Date(year, monthIdx, date);

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

  return (
    <S.DatePicker onClick={handleClick} selected={checkSelectedDate()}>
      <S.DateTextBox isBetween={checkBetween()}>{date}</S.DateTextBox>
    </S.DatePicker>
  );
};

export default DatePicker;
