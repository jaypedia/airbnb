import {
  useDatePickerState,
  useDatePickerDispatch,
  DatePickerProvider,
} from './DatePickerProvider';
import { useSearchState, useSearchDispatch, SearchProvider } from './SearchProvider';
import { useSearchUIState, useSearchUIDispatch, SearchUIProvider } from './SearchUIProvider';
import { useStyleState, useStyleDispatch, StyleProvider } from './StyleProvider';

const compose = providerArr => {
  return providerArr.reduce((Prev, Curr) => ({ children }) => {
    return (
      <Prev>
        <Curr>{children}</Curr>
      </Prev>
    );
  });
};

const Providers = compose([SearchProvider, SearchUIProvider, StyleProvider, DatePickerProvider]);

export {
  useSearchState,
  useSearchDispatch,
  useSearchUIState,
  useSearchUIDispatch,
  useStyleState,
  useStyleDispatch,
  useDatePickerState,
  useDatePickerDispatch,
  Providers,
};
