import styled from 'styled-components';

import { shadow, ActivatedInputShadow } from '@/styles/commonStyle';
import { mixins } from '@/styles/mixins';
import { theme } from '@/styles/theme';

const large = `
width: 916px;
height: 76px;
top: 110px;
`;

const small = `
width: 410px;
height: 48px;
top: 22px;

:hover {
  ${shadow}
}
`;

const searchBarSize = {
  large,
  small,
};

const SearchBarForm = styled.form`
  ${mixins.flexBox({ justifyContent: 'space-between' })};
  ${({ currentStyle }) => searchBarSize[currentStyle]}
  background-color: ${({ theme: { color }, isActivated }) =>
    isActivated ? color.grey6 : color.white};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid ${({ theme: { color } }) => color.grey5};
  border-radius: 60px;
  transition: all 0.5 ease;
  z-index: 1;
`;

const searchButtonSize = {
  large: `
    width: 40px;
    height: 40px;
  `,
  small: `
  width: 32px;
  height: 32px;
  `,
};

const SearchButton = styled.button`
  ${mixins.flexBox({ justifyContent: 'space-around' })};
  ${({ currentStyle }) => searchButtonSize[currentStyle]}
  background-color: ${({ theme: { color } }) => color.pink};
  width: ${({ $isActivated }) => $isActivated && '90px'};
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

const searchTitleFont = {
  large: `
    font-weight: ${theme.fontWeight.bold};
    margin-bottom: 4px;
    line-height: 17px;
  `,
  small: `
    font-weight: ${theme.fontWeight.regular};
    padding-left: 10px;
  `,
};

const SearchTitle = styled.p`
  ${({ currentStyle }) => searchTitleFont[currentStyle]}
  font-size: ${({ theme: { fontSize } }) => fontSize.xxSmall};
  color: ${({ theme: { color } }) => color.black};
  text-transform: uppercase;
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

const SearchInputStyle = {
  small: `
  height: 100%;
  cursor: pointer;
  position: relative;
  padding-left: 10px;
  `,

  large: `
  height: 100%;
  border-radius: 60px;
  cursor: pointer;
  padding: 25px;
  position: relative;
  `,
};

const SearchInputBoxWidth = {
  체크인: '180px',
  체크아웃: '180px',
  요금: '258px',
  인원: '300px',
};

const SearchInputBox = styled.div`
  ${mixins.flexBox({ justifyContent: 'flex-start' })}
  ${({ currentStyle }) => SearchInputStyle[currentStyle]};
  ${({ $isActivated }) => $isActivated && ActivatedInputShadow}
  width: ${({ searchTitle }) =>
    SearchInputBoxWidth[searchTitle] ? SearchInputBoxWidth[searchTitle] : '136px'};
  padding-left: ${({ searchTitle }) => searchTitle === '체크인' && '40px'};
  background-color: ${({ theme: { color }, $isActivated }) => $isActivated && color.white};
`;

const Divider = styled.div`
  width: 1px;
  height: ${({ currentStyle }) => (currentStyle === 'large' ? '44px' : '25px')};
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
