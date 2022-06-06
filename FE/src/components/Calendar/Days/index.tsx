import * as S from './Days.style';

import { DAY_NAME } from '@/constants/calendar';

const Days = ({ language, isRight }) => {
  return (
    <S.DayList isRight={isRight}>
      {DAY_NAME.map((day, { id }) => (
        <S.DayItem key={id}>{day[language]}</S.DayItem>
      ))}
    </S.DayList>
  );
};

export default Days;
