import { useContext } from 'react';

import * as S from './DatePicker.style';

import { CalendarContext } from '@/components/Calendar';
import { ACTION } from '@/constants/actions';
import { useDatePickerDispatch, useDatePickerState } from '@/context';
import { getKoreanMonthDateString } from '@/utils/calendar';

const DatePicker = ({ date, monthIdx }) => {
  const { checkIn, checkOut } = useDatePickerState();
  const { year } = useContext(CalendarContext);
  const dispatch = useDatePickerDispatch();
  const checkInOutString = getKoreanMonthDateString(date, monthIdx);
  const dateObj = new Date(year, monthIdx, date);

  const handleClick = () => {
    dispatch({
      type: ACTION.PICK_DATE,
      payload: {
        year,
        date,
        monthIdx,
      },
    });
  };

  const checkSelectedDate = () => {
    return checkIn.kr === checkInOutString || checkOut.kr === checkInOutString;
  };

  const checkBetween = () => {
    return checkIn.dateObj < dateObj && checkOut.dateObj > dateObj;
  };

  return (
    <S.DatePicker onClick={handleClick} selected={checkSelectedDate()}>
      <S.DateTextBox isBetween={checkBetween()}>{date}</S.DateTextBox>
    </S.DatePicker>
  );
};

export default DatePicker;
