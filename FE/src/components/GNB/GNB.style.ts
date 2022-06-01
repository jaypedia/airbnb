import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { shadow } from '@/styles/commonStyle';
import { mixins } from '@/styles/mixins';

const LogoWrapper = styled.div`
  ${mixins.flexBox({ justifyContent: 'space-between' })};
  width: 116px;
`;

const LogoText = styled.h1`
  font-size: ${({ theme: { fontSize } }) => fontSize.xLarge};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  color: ${({ theme: { color } }) => color.pink};
  letter-spacing: -0.04em;
`;

const gnbPadding = {
  main: '0 80px',
  searchResult: '0 24px',
};

const GNBWrapper = styled.div`
  ${mixins.flexBox({ justifyContent: 'space-between' })};
  padding: ${({ currentStyle }) => gnbPadding[currentStyle]};
  height: 94px;
`;

const NavWrapper = styled.div`
  ${mixins.flexBox({ justifyContent: 'space-between' })}
  width: 186px;
`;

const NavItem = styled(Link)`
  color: ${({ theme: { color } }) => color.grey1};
  cursor: pointer;

  :hover {
    color: ${({ theme: { color } }) => color.grey3};
    text-decoration: underline;
  }
`;

const ProfileButton = styled.button`
  ${mixins.flexBox({ justifyContent: 'space-between' })};
  width: 76px;
  height: 40px;
  background-color: ${({ theme: { color } }) => color.white};
  padding: 4px;
  border: 1px solid ${({ theme: { color } }) => color.grey4};
  border-radius: 30px;
  transition: all 0.5 ease;

  :hover {
    ${shadow}
  }
`;

export { LogoWrapper, LogoText, GNBWrapper, NavWrapper, NavItem, ProfileButton };
