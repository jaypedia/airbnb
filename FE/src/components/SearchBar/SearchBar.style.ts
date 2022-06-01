import styled from 'styled-components';

import { mixins } from '@/styles/mixins';

const searchBarTopLocation = {
  main: '110px',
  searchResult: '22px',
};

const SearchBarForm = styled.form`
  ${mixins.flexBox({ justifyContent: 'space-between' })};
  background-color: ${({ theme: { color } }) => color.white};
  position: absolute;
  width: 916px;
  height: 76px;
  left: 50%;
  transform: translateX(-50%);
  top: ${({ currentStyle }) => searchBarTopLocation[currentStyle]};
  border: 1px solid ${({ theme: { color } }) => color.grey4};
  border-radius: 60px;
`;

const SearchButton = styled.button`
  ${mixins.flexBox({ justifyContent: 'space-around' })};
  background-color: ${({ theme: { color } }) => color.pink};
  width: ${({ $isActivated }) => ($isActivated ? '90px' : '40px')};
  height: 40px;
  border-radius: 30px;
  padding: ${({ $isActivated }) => ($isActivated ? '8px 16px 8px 8px' : '8px')};
  position: absolute;
  right: 10px;
`;

const SearchButtonText = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { fontSize } }) => fontSize.medium};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
`;

const SearchTitle = styled.h3`
  font-size: ${({ theme: { fontSize } }) => fontSize.xxSmall};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  color: ${({ theme: { color } }) => color.black};
  line-height: 17px;
  text-transform: uppercase;
  margin-bottom: 4px;
`;

const SearchInput = styled.input`
  font-size: ${({ theme: { fontSize } }) => fontSize.small};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.regular};
  color: ${({ theme: { color } }) => color.grey2};
  line-height: 23px;
  text-transform: uppercase;
  cursor: pointer;
`;

const SearchTitleInputWrapper = styled.div`
  ${mixins.flexBox({ direction: 'column', alignItems: 'baseline' })};
  width: 130px;
`;

const SearchInputStyle = `
  height: 100%;
  border-radius: 60px;
  cursor: pointer;
  padding: 25px;
  position: relative;

  :hover {
   background-color: rgb(44 42 42 / 10%);
  }
`;

const SearchInputBoxWidth = {
  체크인: '180px',
  체크아웃: '180px',
  요금: '258px',
  인원: '300px',
};

const SearchInputBox = styled.div`
  ${SearchInputStyle}
  ${mixins.flexBox({ justifyContent: 'flex-start' })};
  width: ${({ title }) => SearchInputBoxWidth[title]};
  padding-left: ${({ title }) => title === '체크인' && '40px'};
`;

const Divider = styled.div`
  width: 1px;
  height: 44px;
  background-color: ${({ theme: { color } }) => color.grey5};
`;

export {
  SearchBarForm,
  SearchButton,
  SearchButtonText,
  SearchTitle,
  SearchInput,
  SearchTitleInputWrapper,
  SearchInputBox,
  Divider,
};
