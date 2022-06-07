import { createContext, useContext, useReducer } from 'react';

import { ACTION } from '@/constants/actions';
import { getKoreanMonthDateString } from '@/utils/calendar';

const initialState = {
  checkIn: {
    dateObj: null,
    kr: '',
  },
  checkOut: {
    dateObj: null,
    kr: '',
  },
};

const DatePickerStateContext = createContext(null);
const DatePickerDispatchContext = createContext(null);

const useDatePickerState = () => {
  const state = useContext(DatePickerStateContext);
  if (!state) {
    throw new Error('Cannot find DatePickerProvider');
  }
  return state;
};

const useDatePickerDispatch = () => {
  const dispatch = useContext(DatePickerDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find DatePickerProvider');
  }
  return dispatch;
};

const DatePickerReducer = (state, action) => {
  switch (action.type) {
    case ACTION.PICK_DATE: {
      const { checkIn } = state;
      const { year, date, monthIdx } = action.payload;
      const checkInOutString = getKoreanMonthDateString(date, monthIdx);
      const dateObj = new Date(year, monthIdx, date);

      if (checkIn.kr && checkIn.dateObj <= dateObj) {
        return {
          ...state,
          checkOut: {
            dateObj,
            kr: checkInOutString,
          },
        };
      }

      return {
        ...state,
        checkIn: {
          dateObj,
          kr: checkInOutString,
        },
      };
    }
    case ACTION.DELETE_CHECK_IN: {
      return {
        ...state,
        checkIn: {
          dateObj: null,
          kr: '',
        },
        checkOut: {
          dateObj: null,
          kr: '',
        },
      };
    }
    case ACTION.DELETE_CHECK_OUT: {
      return {
        ...state,
        checkOut: {
          dateObj: null,
          kr: '',
        },
      };
    }
    default:
      console.log('Invaild action type');
  }
};

const DatePickerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DatePickerReducer, initialState);

  return (
    <DatePickerStateContext.Provider value={state}>
      <DatePickerDispatchContext.Provider value={dispatch}>
        {children}
      </DatePickerDispatchContext.Provider>
    </DatePickerStateContext.Provider>
  );
};

export { useDatePickerState, useDatePickerDispatch, DatePickerProvider };
