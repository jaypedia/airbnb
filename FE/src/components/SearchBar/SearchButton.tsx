import * as S from './SearchBar.style';

import { useStyleState } from '@/context';
import * as I from '@/styles/icons';

const SearchButton = ({ isActivated = false }) => {
  const { size } = useStyleState();

  return (
    <S.SearchButton type="submit" $isActivated={isActivated} size={size}>
      <I.Search />
      {isActivated && <S.SearchButtonText>검색</S.SearchButtonText>}
    </S.SearchButton>
  );
};

export default SearchButton;
