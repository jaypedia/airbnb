/* eslint-disable react/no-array-index-key */
import ArrowButtons from './ArrowButtons';
import * as S from './Calendar.style';
import DaysOfTheWeek from './DaysOfTheWeek';
import Month from './Month';
import OptionButton from './OptionButton';

import { ACTION } from '@/constants/actions';
import { useCalendarDispatch, useCalendarState } from '@/context';

const Calendar = () => {
  const { translateX, transition, monthData, monthIdx, isForwardClicked, monthCount } =
    useCalendarState();

  const dispatch = useCalendarDispatch();

  const handleTransitionEnd = () => {
    if (isForwardClicked) {
      dispatch({
        type: ACTION.TRANSITION_END_FORWARD,
      });
    } else {
      dispatch({
        type: ACTION.TRANSITION_END_BACK,
      });
    }
  };

  return (
    <S.CalendarContainer monthCount={monthCount}>
      <S.CalendarCarouselContainer monthCount={monthCount}>
        <DaysOfTheWeek />
        {monthCount === 2 && <DaysOfTheWeek isRight />}
        <ArrowButtons />
        <S.MonthsContainer
          translateX={translateX}
          transition={transition}
          onTransitionEnd={handleTransitionEnd}
        >
          {monthData.map((data, index) => (
            <Month key={String(index)} monthData={data} monthIdx={monthIdx + index} />
          ))}
        </S.MonthsContainer>
      </S.CalendarCarouselContainer>
      <OptionButton />
    </S.CalendarContainer>
  );
};

export default Calendar;
