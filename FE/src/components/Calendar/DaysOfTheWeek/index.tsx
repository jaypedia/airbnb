import { useContext } from 'react';

import * as S from './DaysOfTheWeek.style';

import { CalendarContext } from '@/components/Calendar';
import { DAY_NAME } from '@/constants/calendar';

const DaysOfTheWeek = ({ isRight }) => {
  const { language } = useContext(CalendarContext);

  return (
    <S.DayList isRight={isRight}>
      {DAY_NAME.map((day, { id }) => (
        <S.DayItem key={id}>{day[language]}</S.DayItem>
      ))}
    </S.DayList>
  );
};

export default DaysOfTheWeek;
