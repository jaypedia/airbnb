/* eslint-disable react/no-array-index-key */

import * as S from './Month.style';

import Week from '@/components/Calendar/Week';
import { useCalendarState } from '@/context';
import { getYearMonthText } from '@/utils/calendar';

const Month = ({ monthData, monthIdx }) => {
  const { language, year } = useCalendarState();
  const yearMonthText = getYearMonthText(language, monthIdx, year);

  return (
    <S.MonthWrapper>
      <S.YearMonthTextWrapper>
        <S.YearMonthText>{yearMonthText}</S.YearMonthText>
      </S.YearMonthTextWrapper>
      <S.DateTable>
        <S.DateTableBody>
          {monthData.map((week, index) => (
            <Week key={String(index)} week={week} monthIdx={monthIdx} />
          ))}
        </S.DateTableBody>
      </S.DateTable>
    </S.MonthWrapper>
  );
};

export default Month;
