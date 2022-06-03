import { createContext, useContext, useReducer } from 'react';

import { ACTION } from '@/constants/actions';

const initialState = {
  dates: {
    checkIn: '',
    checkOut: '',
  },
  price: {
    min: 0,
    max: 0,
  },
  guests: {
    adults: 0,
    children: 0,
    infants: 0,
  },
  currentField: null,
  isActivated: false,
  modalOn: false,
};

const SearchStateContext = createContext(null);
const SearchDispatchContext = createContext(null);

const useSearchState = () => {
  const state = useContext(SearchStateContext);
  if (!state) {
    throw new Error('Cannot find SearchProvider');
  }
  return state;
};

const useSearchDispatch = () => {
  const dispatch = useContext(SearchDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find SearchProvider');
  }
  return dispatch;
};

const searchReducer = (state, action) => {
  switch (action.type) {
    case ACTION.FOCUS_FIELD: {
      return {
        ...state,
        isActivated: true,
        modalOn: true,
      };
    }
    case ACTION.CLICK_FIELD: {
      const { currentField } = action.payload;
      return {
        ...state,
        currentField,
      };
    }
    case ACTION.BLUR_FIELD: {
      return { ...state, isActivated: false };
    }
    case ACTION.CLOSE_MODAL: {
      return { ...state, modalOn: false };
    }
    case ACTION.SELECT_DATES: {
      const { inputValue } = action.payload;
      return {
        ...state,
        dates: {
          checkIn: inputValue.checkIn,
          checkOut: inputValue.checkOut,
        },
      };
    }
    case ACTION.SELECT_PRICE: {
      const { inputValue } = action.payload;
      return {
        ...state,
        price: {
          min: inputValue.min,
          max: inputValue.max,
        },
      };
    }
    case ACTION.SELECT_GUESTS: {
      const { inputValue } = action.payload;
      return {
        ...state,
        guests: {
          adults: inputValue.adults,
          children: inputValue.children,
          infants: inputValue.infants,
        },
      };
    }
    default:
      console.log('Invaild action type');
  }
};

const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, initialState);

  return (
    <SearchStateContext.Provider value={state}>
      <SearchDispatchContext.Provider value={dispatch}>{children}</SearchDispatchContext.Provider>
    </SearchStateContext.Provider>
  );
};

export { useSearchState, useSearchDispatch, SearchProvider };
