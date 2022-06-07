import { createContext, useContext, useReducer } from 'react';

import { ACTION } from '@/constants/actions';

const initialState = {
  currentField: '',
  focusedField: '',
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
      const { focusedField } = action.payload;
      return {
        ...state,
        isActivated: true,
        modalOn: true,
        focusedField,
      };
    }
    case ACTION.CLICK_FIELD: {
      const { currentField } = action.payload;
      return {
        ...state,
        currentField,
        focusedField: currentField,
      };
    }
    // Blur 이벤트 발생 시, 모달이 없는 상태에서만 isActivated: false로 변경
    case ACTION.BLUR_FIELD: {
      if (state.modalOn) {
        return state;
      }

      return {
        ...state,
        isActivated: false,
        focusedField: '',
      };
    }
    case ACTION.CLOSE_MODAL: {
      return {
        ...state,
        modalOn: false,
        isActivated: false,
        focusedField: '',
      };
    }
    case ACTION.CHANGE_FOCUS: {
      const { checkIn, focusedField } = action.payload;
      if (checkIn.kr) return state;

      return {
        ...state,
        focusedField,
      };
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
