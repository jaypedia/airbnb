import styled from 'styled-components';

import { mixins } from '@/styles/mixins';
import { theme } from '@/styles/theme';
import { Link } from 'react-router-dom';

const SearchBarWrapper = styled.div`
  ${mixins.flexBox({ justifyContent: 'space-between' })};
  background-color: ${({ theme: { color } }) => color.white};
  position: absolute;
  width: 916px;
  height: 76px;
  left: 50%;
  transform: translateX(-50%);
  top: ${({ path }) => (path === '/' ? '110px' : '22px')};
  border: 1px solid ${({ theme: { color } }) => color.grey4};
  border-radius: 60px;
`;

const SearchButton = styled(Link)`
  background-color: ${({ theme: { color } }) => color.pink};
  width: 40px;
  height: 40px;
  border-radius: 30px;
  padding: 8px;
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

const SearchContent = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.small};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.regular};
  color: ${({ theme: { color } }) => color.grey2};
  line-height: 23px;
  text-transform: uppercase;
`;

const SearchTitleContentWrapper = styled.div`
  ${mixins.flexBox({ direction: 'column', alignItems: 'baseline' })};
  width: 130px;
`;

const SearchBarBoxStyle = `
  height: 100%;
  border-radius: 60px;
  cursor: pointer;
  padding: 25px;
  position: relative;

  :hover {
   background-color: ${theme.color.grey5};
  }
`;

const DateBox = styled.div`
  ${SearchBarBoxStyle}
  ${mixins.flexBox({ justifyContent: 'center' })};
  width: 360px;
  padding-left: 40px;
`;

const PriceBox = styled.div`
  ${SearchBarBoxStyle}
  ${mixins.flexBox({ justifyContent: 'flex-start' })};
  width: 258px;
`;

const SearchBox = styled.div`
  ${SearchBarBoxStyle}
  ${mixins.flexBox({ justifyContent: 'space-between' })};
  width: 300px;
`;

const Divider = styled.div`
  width: 1px;
  height: 44px;
  background-color: ${({ theme: { color } }) => color.grey5};
`;

export {
  SearchBarWrapper,
  SearchButton,
  SearchButtonText,
  SearchTitle,
  SearchContent,
  SearchTitleContentWrapper,
  DateBox,
  PriceBox,
  SearchBox,
  Divider,
};
