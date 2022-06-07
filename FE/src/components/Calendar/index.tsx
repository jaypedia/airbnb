import { createContext, useState, useEffect, useMemo } from 'react';

import ArrowButtons from './ArrowButtons';
import * as S from './Calendar.style';
import DaysOfTheWeek from './DaysOfTheWeek';
import Month from './Month';

import { MONTH_WIDTH_PX } from '@/constants/calendar';
import { getSliderMonthData } from '@/utils/calendar';

export const CalendarContext = createContext(null);

const Calendar = ({ language }) => {
  const today = new Date();
  const year = today.getFullYear();
  const value = useMemo(() => ({ language, today, year }), []);

  const [slide, setSlide] = useState(-MONTH_WIDTH_PX);
  const [monthIdx, setMonthIdx] = useState(today.getMonth() - 1);
  const [monthData, setMonthData] = useState(getSliderMonthData(year, monthIdx));

  const handleBackClick = () => {
    setSlide(slide + MONTH_WIDTH_PX);
    setMonthIdx(monthIdx - 1);
    setMonthData(getSliderMonthData(year, monthIdx - 1));
  };

  const handleForwardClick = () => {
    setSlide(slide - MONTH_WIDTH_PX);
    setMonthIdx(monthIdx + 1);
    setMonthData(getSliderMonthData(year, monthIdx + 1));
  };

  // TODO: Slider 로직 수정
  useEffect(() => {
    setTimeout(() => {
      setSlide(-MONTH_WIDTH_PX);
    }, 0);
  }, [slide]);

  return (
    <CalendarContext.Provider value={value}>
      <S.CalendarContainer>
        <DaysOfTheWeek />
        <DaysOfTheWeek isRight />
        <ArrowButtons onBackClick={handleBackClick} onForwardClick={handleForwardClick} />
        <S.MonthsContainer slide={slide}>
          {monthData.map((data, index) => (
            <Month key={String(index)} monthData={data} monthIdx={monthIdx + index} year={year} />
          ))}
        </S.MonthsContainer>
      </S.CalendarContainer>
    </CalendarContext.Provider>
  );
};

export default Calendar;
