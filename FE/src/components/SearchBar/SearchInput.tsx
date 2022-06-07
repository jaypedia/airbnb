import { useState } from 'react';

import * as S from './SearchBar.style';

import { ACTION } from '@/constants/actions';
import { SIZE, INPUT_FIELD, LANGUAGE } from '@/constants/constant';
import {
  useSearchUIDispatch,
  useStyleState,
  useDatePickerState,
  useDatePickerDispatch,
} from '@/context';
import * as I from '@/styles/icons';

const SearchInput = ({ searchTitle, isLast, placeholder, field }) => {
  const searchUIdispatch = useSearchUIDispatch();
  const datePickerDispatch = useDatePickerDispatch();
  const { size } = useStyleState();
  const [isThisActivated, setIsThisActivated] = useState(false);
  const { checkIn, checkOut } = useDatePickerState();

  const handleFocus = () => {
    searchUIdispatch({
      type: ACTION.FOCUS_FIELD,
    });
    setIsThisActivated(true);
  };

  const handleBlur = () => {
    searchUIdispatch({
      type: ACTION.BLUR_FIELD,
    });
    setIsThisActivated(false);
  };

  const handleClick = () => {
    searchUIdispatch({
      type: ACTION.CLICK_FIELD,
      payload: {
        currentField: field,
      },
    });
  };

  const getFieldValue = languge => {
    switch (field) {
      case INPUT_FIELD.CHECK_IN: {
        return checkIn[languge];
      }
      case INPUT_FIELD.CHECK_OUT: {
        return checkOut[languge];
      }
      case INPUT_FIELD.PRICE: {
        return '';
      }
      case INPUT_FIELD.GUESTS: {
        return '';
      }
      default:
        console.log('Invaild field');
    }
  };

  const fieldValue = getFieldValue(LANGUAGE.kr);

  const handleDeleteBtnClick = field => {
    const fieldObj = {
      checkIn: ACTION.DELETE_CHECK_IN,
      checkOut: ACTION.DELETE_CHECK_OUT,
    };
    datePickerDispatch({ type: fieldObj[field] });
  };

  return (
    <>
      <S.SearchInputBox
        size={size}
        searchTitle={searchTitle}
        $isActivated={isThisActivated}
        onFocus={handleFocus}
        onBlur={handleBlur}
        tabIndex="0"
        onClick={handleClick}
      >
        <S.SearchTitleInputWrapper>
          <S.SearchTitle size={size}>{searchTitle}</S.SearchTitle>
          {size === SIZE.LARGE && (
            <S.SearchInput placeholder={placeholder} readOnly value={fieldValue} />
          )}
          {fieldValue && <I.Cancel $isLast={isLast} onClick={() => handleDeleteBtnClick(field)} />}
        </S.SearchTitleInputWrapper>
      </S.SearchInputBox>
      {!isLast && <S.Divider size={size} />}
    </>
  );
};

export default SearchInput;
