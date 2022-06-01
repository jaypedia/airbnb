import * as S from './SearchBar.style';
import * as I from '@/styles/icons';

const SearchBar = ({ currentStyle }) => {
  return (
    <S.SearchBarWrapper currentStyle={currentStyle}>
      <S.DateBox>
        <S.SearchTitleContentWrapper>
          <S.SearchTitle>체크인</S.SearchTitle>
          <S.SearchContent>날짜 입력</S.SearchContent>
          <I.Cancel />
        </S.SearchTitleContentWrapper>
      </S.DateBox>
      <S.Divider />
      <S.DateBox>
        <S.SearchTitleContentWrapper>
          <S.SearchTitle>체크아웃</S.SearchTitle>
          <S.SearchContent>날짜 입력</S.SearchContent>
          <I.Cancel />
        </S.SearchTitleContentWrapper>
      </S.DateBox>
      <S.Divider />
      <S.PriceBox>
        <S.SearchTitleContentWrapper>
          <S.SearchTitle>요금</S.SearchTitle>
          <S.SearchContent>금액대 설정</S.SearchContent>
          <I.Cancel />
        </S.SearchTitleContentWrapper>
      </S.PriceBox>
      <S.Divider />
      <S.SearchBox>
        <S.SearchTitleContentWrapper>
          <S.SearchTitle>인원</S.SearchTitle>
          <S.SearchContent>게스트 추가</S.SearchContent>
          <I.Cancel $isSearchBox />
        </S.SearchTitleContentWrapper>
        <S.SearchButton to="/search-result">
          <I.Search />
        </S.SearchButton>
      </S.SearchBox>
    </S.SearchBarWrapper>
  );
};

export default SearchBar;
