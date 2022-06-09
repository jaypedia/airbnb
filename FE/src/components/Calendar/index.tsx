/* eslint-disable react/no-array-index-key */
import { createContext, useState, useMemo } from 'react';

import ArrowButtons from './ArrowButtons';
import * as S from './Calendar.style';
import DaysOfTheWeek from './DaysOfTheWeek';
import Month from './Month';

import { MONTH_WIDTH_PX } from '@/constants/calendar';
import { TRANSITION_EFFECT } from '@/styles/commonStyle';
import { getSliderMonthData } from '@/utils/calendar';

export const CalendarContext = createContext(null);

const Calendar = ({ language }) => {
  const today = new Date();
  const year = today.getFullYear();
  const value = useMemo(() => ({ language, today, year }), []);

  const [translateX, setTranslateX] = useState(-MONTH_WIDTH_PX);
  const [monthIdx, setMonthIdx] = useState(today.getMonth() - 1);
  const [monthData, setMonthData] = useState(getSliderMonthData(year, monthIdx));
  const [transition, setTransition] = useState(TRANSITION_EFFECT);
  const [isForwardClicked, setIsForwardClicked] = useState(false);

  const handleBackClick = () => {
    if (translateX > -MONTH_WIDTH_PX) return;
    setTranslateX(translateX + MONTH_WIDTH_PX);
    setTransition(TRANSITION_EFFECT);
    setIsForwardClicked(false);
  };

  const handleForwardClick = () => {
    if (translateX < -MONTH_WIDTH_PX) return;
    setTranslateX(translateX - MONTH_WIDTH_PX);
    setTransition(TRANSITION_EFFECT);
    setIsForwardClicked(true);
  };

  const handleTransitionEnd = () => {
    setTranslateX(-MONTH_WIDTH_PX);
    setTransition(null);

    if (isForwardClicked) {
      setMonthIdx(monthIdx + 1);
      setMonthData(getSliderMonthData(year, monthIdx + 1));
    } else {
      setMonthIdx(monthIdx - 1);
      setMonthData(getSliderMonthData(year, monthIdx - 1));
    }
  };

  return (
    <CalendarContext.Provider value={value}>
      <S.CalendarContainer>
        <DaysOfTheWeek />
        <DaysOfTheWeek isRight />
        <ArrowButtons onBackClick={handleBackClick} onForwardClick={handleForwardClick} />
        <S.MonthsContainer
          translateX={translateX}
          transition={transition}
          onTransitionEnd={handleTransitionEnd}
        >
          {monthData.map((data, index) => (
            <Month key={String(index)} monthData={data} monthIdx={monthIdx + index} year={year} />
          ))}
        </S.MonthsContainer>
      </S.CalendarContainer>
    </CalendarContext.Provider>
  );
};

export default Calendar;
