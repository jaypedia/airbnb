import * as S from './DateCell.style';

import DatePicker from '@/components/Calendar/DatePicker';
import { useCalendarState, useDatePickerState } from '@/context';
import { checkDateIsPast, getKoreanMonthDateString } from '@/utils/calendar';

const DateCell = ({ date, monthIdx }) => {
  const { year, today } = useCalendarState();
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
