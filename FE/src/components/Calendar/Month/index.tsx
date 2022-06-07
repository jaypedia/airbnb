import { useContext } from 'react';

import * as S from './Month.style';

import { CalendarContext } from '@/components/Calendar';
import Week from '@/components/Calendar/Week';
import { getYearMonthText } from '@/utils/calendar';

const Month = ({ monthData, monthIdx, year }) => {
  const { language } = useContext(CalendarContext);
  const yearMonthText = getYearMonthText(language, monthIdx, year);

  return (
    <S.MonthWrapper>
      <S.YearMonthTextWrapper>
        <S.YearMonthText>{yearMonthText}</S.YearMonthText>
      </S.YearMonthTextWrapper>
      <S.DateTable>
        <S.DateTableBody>
          {monthData.map((week, index) => (
            <Week key={String(index)} week={week} />
          ))}
        </S.DateTableBody>
      </S.DateTable>
    </S.MonthWrapper>
  );
};

export default Month;
