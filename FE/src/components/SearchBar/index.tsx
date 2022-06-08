import * as S from './SearchBar.style';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';

import Modal from '@/components/Modal';
import { SIZE } from '@/constants/constant';
import searchBarText from '@/constants/searchBarData';
import { useSearchUIState, useStyleState } from '@/context';
import searchBarData from '@/mocks/searchBarTempData';
import { isLastElementinArray } from '@/utils/utils';

const SearchBar = () => {
  const { isActivated, modalOn } = useSearchUIState();
  const { size } = useStyleState();

  return (
    <>
      <S.SearchBarForm size={size} isActivated={isActivated}>
        {size === SIZE.LARGE
          ? searchBarText.map(({ id, title, field, placeholder }, index) => (
              <SearchInput
                key={id}
                searchTitle={title}
                field={field}
                placeholder={placeholder}
                isLast={isLastElementinArray(searchBarText, index)}
              />
            ))
          : searchBarData.map(({ id, contents }, index) => (
              <SearchInput
                key={id}
                searchTitle={contents}
                isLast={isLastElementinArray(searchBarData, index)}
              />
            ))}
        <SearchButton />
      </S.SearchBarForm>
      {modalOn && <Modal />}
    </>
  );
};

export default SearchBar;
