import * as S from './SearchBar.style';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';

import searchBarText from '@/constants/searchBarData';
import { useSearchState } from '@/context/SearchProvider';
import searchBarData from '@/mocks/searchBarTempData';
import { isLastElementinArray } from '@/utils/utils';

const SearchBar = ({ currentStyle }) => {
  const { isActivated } = useSearchState();

  return (
    <S.SearchBarForm currentStyle={currentStyle} isActivated={isActivated}>
      {currentStyle === 'large'
        ? searchBarText.map(({ id, title, field, placeholder }, index) => (
            <SearchInput
              key={id}
              searchTitle={title}
              field={field}
              currentStyle={currentStyle}
              placeholder={placeholder}
              isLast={isLastElementinArray(searchBarText, index)}
            />
          ))
        : searchBarData.map(({ id, contents }, index) => (
            <SearchInput
              key={id}
              searchTitle={contents}
              currentStyle={currentStyle}
              isLast={isLastElementinArray(searchBarData, index)}
            />
          ))}
      <SearchButton currentStyle={currentStyle} />
    </S.SearchBarForm>
  );
};

export default SearchBar;
