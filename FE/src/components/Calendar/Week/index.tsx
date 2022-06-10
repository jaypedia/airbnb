/* eslint-disable react/no-array-index-key */
import * as S from './Week.style';

import DateCell from '@/components/Calendar/DateCell';

const Week = ({ week, monthIdx }) => {
  return (
    <S.WeekRow>
      {week.map((date, index) => (
        <DateCell key={String(index)} date={date} monthIdx={monthIdx} />
      ))}
    </S.WeekRow>
  );
};

export default Week;
