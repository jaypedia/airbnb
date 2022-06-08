import { useContext } from 'react';

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

  return (
    <S.DateCell
      isPast={isThisDatePast}
      isBlank={!date}
      isCheckIn={checkIn.kr !== checkOut.kr && checkIn.kr === checkInOutString}
      isCheckOut={checkIn.kr !== checkOut.kr && checkOut.kr === checkInOutString}
    >
      {!isThisDatePast && date ? <DatePicker date={date} monthIdx={monthIdx} /> : date}
    </S.DateCell>
  );
};

export default DateCell;
