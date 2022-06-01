import * as I from '@/styles/icons';

import * as S from './SearchBar.style';

const SearchInput = ({ title, placeholder, isLast, isActivated = false, isSelected = false }) => {
  return (
    <>
      <S.SearchInputBox title={title} $isActivated={isActivated}>
        <S.SearchTitleInputWrapper>
          <S.SearchTitle>{title}</S.SearchTitle>
          <S.SearchInput placeholder={placeholder} readOnly />
          {isSelected && <I.Cancel $isLast={isLast} />}
        </S.SearchTitleInputWrapper>
      </S.SearchInputBox>
      {!isLast && <S.Divider />}
    </>
  );
};

export default SearchInput;
