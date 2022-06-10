import * as S from './DaysOfTheWeek.style';

import { DAY_NAME } from '@/constants/calendar';
import { useCalendarState } from '@/context';

const DaysOfTheWeek = ({ isRight }) => {
  const { language } = useCalendarState();

  return (
    <S.DayList isRight={isRight}>
      {DAY_NAME.map((day, { id }) => (
        <S.DayItem key={id}>{day[language]}</S.DayItem>
      ))}
    </S.DayList>
  );
};

export default DaysOfTheWeek;
