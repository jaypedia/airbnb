import * as S from './Month.style';

import { MONTH_NAME } from '@/constants/calendar';
import { LANGUAGE } from '@/constants/constant';

const Month = ({ language, monthData, monthIdx, year }) => {
  const getYearMonthText = () => {
    return language === LANGUAGE.en
      ? `${MONTH_NAME[monthIdx][language]} ${year}`
      : `${year}년 ${MONTH_NAME[monthIdx][language]}`;
  };

  return (
    <S.MonthContainer>
      <S.YearMonthTextWrapper>
        <S.YearMonthText>{getYearMonthText()}</S.YearMonthText>
      </S.YearMonthTextWrapper>
      <S.DateTable>
        <S.DateTableBody>
          {monthData.map(week => (
            <S.WeekRow key={String(week)}>
              {week.map(date => (
                <S.DateCell key={String(date)}>{date}</S.DateCell>
              ))}
            </S.WeekRow>
          ))}
        </S.DateTableBody>
      </S.DateTable>
    </S.MonthContainer>
  );
};

export default Month;
