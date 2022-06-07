import * as S from './Week.style';

import DateCell from '@/components/Calendar/DateCell';

const Week = ({ week }) => {
  return (
    <S.WeekRow>
      {week.map((date, index) => (
        <DateCell key={String(index)} date={date} />
      ))}
    </S.WeekRow>
  );
};

export default Week;
