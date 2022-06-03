import * as S from './SearchBar.style';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';

import Modal from '@/components/Modal';
import { ACTION } from '@/constants/actions';
import searchBarText from '@/constants/searchBarData';
import { useSearchState, useSearchDispatch } from '@/context/SearchProvider';
import searchBarData from '@/mocks/searchBarTempData';
import { isLastElementinArray } from '@/utils/utils';

const SearchBar = ({ currentStyle }) => {
  const { isActivated, modalOn } = useSearchState();
  const dispatch = useSearchDispatch();

  const closeModal = () => {
    dispatch({ type: ACTION.CLOSE_MODAL });
  };

  return (
    <>
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
      {modalOn && <Modal onClose={closeModal} />}
    </>
  );
};

export default SearchBar;
