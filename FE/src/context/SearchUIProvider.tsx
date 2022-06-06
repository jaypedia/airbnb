import { createContext, useContext, useReducer } from 'react';

import { ACTION } from '@/constants/actions';

const initialState = {
  currentField: null,
  isActivated: false,
  modalOn: false,
};

const SearchUIStateContext = createContext(null);
const SearchUIDispatchContext = createContext(null);

const useSearchUIState = () => {
  const state = useContext(SearchUIStateContext);
  if (!state) {
    throw new Error('Cannot find SearchUIProvider');
  }
  return state;
};

const useSearchUIDispatch = () => {
  const dispatch = useContext(SearchUIDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find SearchUIProvider');
  }
  return dispatch;
};

const searchUIReducer = (state, action) => {
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
    default:
      console.log('Invaild action type');
  }
};

const SearchUIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchUIReducer, initialState);

  return (
    <SearchUIStateContext.Provider value={state}>
      <SearchUIDispatchContext.Provider value={dispatch}>
        {children}
      </SearchUIDispatchContext.Provider>
    </SearchUIStateContext.Provider>
  );
};

export { useSearchUIState, useSearchUIDispatch, SearchUIProvider };
