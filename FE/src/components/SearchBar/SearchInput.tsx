import { useState } from 'react';

import * as S from './SearchBar.style';

import { ACTION } from '@/constants/actions';
import { SIZE } from '@/constants/constant';
import { useSearchDispatch } from '@/context/SearchProvider';
import { useStyleState } from '@/context/StyleProvider';
import * as I from '@/styles/icons';

const SearchInput = ({ searchTitle, isLast, isSelected = false, placeholder, field }) => {
  const dispatch = useSearchDispatch();
  const { size } = useStyleState();
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
          {size === SIZE.LARGE && <S.SearchInput placeholder={placeholder} readOnly />}
          {isSelected && <I.Cancel $isLast={isLast} />}
        </S.SearchTitleInputWrapper>
      </S.SearchInputBox>
      {!isLast && <S.Divider size={size} />}
    </>
  );
};

export default SearchInput;
