import { useContext } from 'react';

import * as S from './DateCell.style';

import { CalendarContext } from '@/components/Calendar';

const DateCell = ({ date, monthIdx }) => {
  const { year, today } = useContext(CalendarContext);

  const isPast = () => {
    const thisDate = new Date(year, monthIdx, date);
    return today > thisDate;
  };

  return <S.DateCell isPast={isPast()}>{date}</S.DateCell>;
};

export default DateCell;
