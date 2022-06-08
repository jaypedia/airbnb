import { createContext, useContext, useReducer } from 'react';

import { ACTION } from '@/constants/actions';
import { SIZE } from '@/constants/constant';

const initialState = {
  path: '/',
  size: SIZE.LARGE,
};

const StyleStateContext = createContext(null);
const StyleDispatchContext = createContext(null);

const useStyleState = () => {
  const state = useContext(StyleStateContext);
  if (!state) {
    throw new Error('Cannot find StyleProvider');
  }
  return state;
};

const useStyleDispatch = () => {
  const dispatch = useContext(StyleDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find StyleProvider');
  }
  return dispatch;
};

const styleReducer = (state, action) => {
  switch (action.type) {
    case ACTION.SET_PATH: {
      const { currentPath } = action.payload;

      const sizeObj = {
        '/': SIZE.LARGE,
        '/search-result': SIZE.SMALL,
      };

      const size = sizeObj[currentPath];

      return {
        ...state,
        size,
        path: currentPath,
      };
    }
    default:
      console.log('Invaild action type');
  }
};

const StyleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(styleReducer, initialState);

  return (
    <StyleStateContext.Provider value={state}>
      <StyleDispatchContext.Provider value={dispatch}>{children}</StyleDispatchContext.Provider>
    </StyleStateContext.Provider>
  );
};

export { useStyleState, useStyleDispatch, StyleProvider };
