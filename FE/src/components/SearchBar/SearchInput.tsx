import { useState } from 'react';

import * as S from './SearchBar.style';

import { ACTION } from '@/constants/actions';
import { useSearchDispatch } from '@/context/SearchProvider';
import * as I from '@/styles/icons';

const SearchInput = ({
  searchTitle,
  isLast,
  isSelected = false,
  currentStyle,
  placeholder,
  field,
}) => {
  const dispatch = useSearchDispatch();
  const [isThisActivated, setIsThisActivated] = useState(false);

  const handleFocus = () => {
    dispatch({
      type: ACTION.FOCUS_FIELD,
    });
    setIsThisActivated(true);
  };

  const handleBlur = () => {
    dispatch({
      type: ACTION.BLUR_FIELD,
    });
    setIsThisActivated(false);
  };

  const handleClick = () => {
    dispatch({
      type: ACTION.CLICK_FIELD,
      payload: {
        currentField: field,
      },
    });
  };

  return (
    <>
      <S.SearchInputBox
        currentStyle={currentStyle}
        searchTitle={searchTitle}
        $isActivated={isThisActivated}
        onFocus={handleFocus}
        onBlur={handleBlur}
        tabIndex="0"
        onClick={handleClick}
      >
        <S.SearchTitleInputWrapper>
          <S.SearchTitle currentStyle={currentStyle}>{searchTitle}</S.SearchTitle>
          {currentStyle === 'large' && <S.SearchInput placeholder={placeholder} readOnly />}
          {isSelected && <I.Cancel $isLast={isLast} />}
        </S.SearchTitleInputWrapper>
      </S.SearchInputBox>
      {!isLast && <S.Divider currentStyle={currentStyle} />}
    </>
  );
};

export default SearchInput;
