import { createContext, useContext, useReducer } from 'react';

import { ACTION } from '@/constants/actions';
import { MONTH_WIDTH_PX, TRANSITION_EFFECT } from '@/constants/calendar';
import { LANGUAGE } from '@/constants/constant';
import { getSliderMonthData } from '@/utils/calendar';

const initialState = {
  language: LANGUAGE.en,
  today: new Date(),
  year: new Date().getFullYear(),
  monthIdx: new Date().getMonth() - 1,
  monthData: getSliderMonthData(new Date().getFullYear(), new Date().getMonth() - 1),
  translateX: -MONTH_WIDTH_PX,
  transition: TRANSITION_EFFECT,
  isForwardClicked: false,
  monthCount: 2,
};

const CalendarStateContext = createContext(null);
const CalendarDispatchContext = createContext(null);

const useCalendarState = () => {
  const state = useContext(CalendarStateContext);
  if (!state) {
    throw new Error('Cannot find CalendarProvider');
  }
  return state;
};

const useCalendarDispatch = () => {
  const dispatch = useContext(CalendarDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find CalendarProvider');
  }
  return dispatch;
};

const calendarReducer = (state, action) => {
  switch (action.type) {
    case ACTION.TRANSITION_END_FORWARD: {
      const { year, monthIdx } = state;
      return {
        ...state,
        monthIdx: monthIdx + 1,
        monthData: getSliderMonthData(year, monthIdx + 1),
        translateX: -MONTH_WIDTH_PX,
        transition: null,
      };
    }
    case ACTION.TRANSITION_END_BACK: {
      const { year, monthIdx } = state;
      return {
        ...state,
        monthIdx: monthIdx - 1,
        monthData: getSliderMonthData(year, monthIdx - 1),
        translateX: -MONTH_WIDTH_PX,
        transition: null,
      };
    }
    case ACTION.CLICK_BACK: {
      const { translateX } = state;
      if (translateX > -MONTH_WIDTH_PX) return state;

      return {
        ...state,
        translateX: translateX + MONTH_WIDTH_PX,
        transition: TRANSITION_EFFECT,
        isForwardClicked: false,
      };
    }
    case ACTION.CLICK_FORWARD: {
      const { translateX } = state;
      if (translateX < -MONTH_WIDTH_PX) return state;

      return {
        ...state,
        translateX: translateX - MONTH_WIDTH_PX,
        transition: TRANSITION_EFFECT,
        isForwardClicked: true,
      };
    }
    case ACTION.CHANGE_LANGUAGE: {
      const { language } = state;
      if (language === LANGUAGE.en) {
        return {
          ...state,
          language: LANGUAGE.kr,
        };
      }

      return {
        ...state,
        language: LANGUAGE.en,
      };
    }
    case ACTION.CHANGE_MONTH_COUNT: {
      const { monthCount } = state;
      if (monthCount === 2) {
        return {
          ...state,
          monthCount: 1,
        };
      }

      return {
        ...state,
        monthCount: 2,
      };
    }
    default:
      console.log('Invaild action type');
  }
};

const CalendarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(calendarReducer, initialState);

  return (
    <CalendarStateContext.Provider value={state}>
      <CalendarDispatchContext.Provider value={dispatch}>
        {children}
      </CalendarDispatchContext.Provider>
    </CalendarStateContext.Provider>
  );
};

export { useCalendarState, useCalendarDispatch, CalendarProvider };
