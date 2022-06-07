import { useContext, useState } from 'react';

import * as S from './DateCell.style';

import { CalendarContext } from '@/components/Calendar';
import DatePicker from '@/components/Calendar/DatePicker';
import { useDatePickerState } from '@/context';
import { checkDateIsPast, getKoreanMonthDateString } from '@/utils/calendar';

const DateCell = ({ date, monthIdx }) => {
  const { year, today } = useContext(CalendarContext);
  const { checkIn, checkOut } = useDatePickerState();

  const isThisDatePast = checkDateIsPast({ year, monthIdx, date, today });
  const checkInOutString = getKoreanMonthDateString(date, monthIdx);

  const [isCheckIn, setIsCheckIn] = useState(false);
  const [isCheckOut, setIsCheckOut] = useState(false);

  const handleDateClick = () => {
    // TODO: 로직 구현
  };

  return (
    <S.DateCell
      isPast={isThisDatePast}
      isBlank={!date}
      onClick={handleDateClick}
      isCheckIn={isCheckIn}
      isCheckOut={isCheckOut}
    >
      {!isThisDatePast && date ? <DatePicker date={date} monthIdx={monthIdx} /> : date}
    </S.DateCell>
  );
};

export default DateCell;
