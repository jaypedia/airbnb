import searchBarText from '@/constants/searchBarText';

import * as S from './SearchBar.style';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';

const SearchBar = ({ currentStyle }) => {
  const checkLastElement = (index: number) => {
    return searchBarText.length === index + 1;
  };

  return (
    <S.SearchBarForm currentStyle={currentStyle}>
      {searchBarText.map(({ id, title, placeholder }, index) => (
        <SearchInput
          key={id}
          title={title}
          placeholder={placeholder}
          isLast={checkLastElement(index)}
        />
      ))}
      <SearchButton />
    </S.SearchBarForm>
  );
};

export default SearchBar;
