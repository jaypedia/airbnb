import * as S from './Calendar.style';
import Days from './Days';
import Month from './Month';

import { LANGUAGE } from '@/constants/constant';
import { getMonthArr } from '@/utils/calendar';

const Calendar = () => {
  const today = new Date();
  const year = today.getFullYear();
  const monthIdx1 = today.getMonth();
  const monthIdx2 = today.getMonth() + 1;

  const monthData1 = getMonthArr(year, monthIdx1);
  const monthData2 = getMonthArr(year, monthIdx2);

  return (
    <S.CalendarContainer>
      <Days language={LANGUAGE.en} />
      <Days language={LANGUAGE.en} isRight />
      <Month language={LANGUAGE.en} monthData={monthData1} monthIdx={monthIdx1} year={year} />
      <Month language={LANGUAGE.en} monthData={monthData2} monthIdx={monthIdx2} year={year} />
    </S.CalendarContainer>
  );
};

export default Calendar;
