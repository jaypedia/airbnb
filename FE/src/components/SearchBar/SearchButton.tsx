import * as I from '@/styles/icons';

import * as S from './SearchBar.style';

const SearchButton = ({ isActivated = false }) => {
  return (
    <S.SearchButton type="submit" $isActivated={isActivated}>
      <I.Search />
      {isActivated && <S.SearchButtonText>검색</S.SearchButtonText>}
    </S.SearchButton>
  );
};

export default SearchButton;
