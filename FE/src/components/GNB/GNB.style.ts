import styled from 'styled-components';

import { mixins } from '@/styles/mixins';

const LogoText = styled.h1`
  font-size: ${({ theme: { fontSize } }) => fontSize.xxLarge};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.logo};
  color: ${({ theme: { color } }) => color.grey1};
  letter-spacing: -0.04em;
`;

const gnbPadding = {
  '/': '0 80px',
  '/search-result': '0 24px',
};

const GNBWrapper = styled.div`
  ${mixins.flexBox({ justifyContent: 'space-between' })};
  padding: ${({ path }) => gnbPadding[path]};
  height: 94px;
`;

const NavWrapper = styled.div`
  ${mixins.flexBox({ justifyContent: 'space-between' })}
  width: 186px;
`;

const NavItem = styled.li`
  color: ${({ theme: { color } }) => color.grey1};
  cursor: pointer;

  :hover {
    color: ${({ theme: { color } }) => color.black};
    text-decoration: underline;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  }
`;

const ProfileWrapper = styled.div`
  ${mixins.flexBox({ justifyContent: 'space-between' })};
  width: 76px;
  height: 40px;
  background-color: ${({ theme: { color } }) => color.white};
  padding: 4px;
  border: 1px solid ${({ theme: { color } }) => color.grey4};
  border-radius: 30px;
  cursor: pointer;
`;

const ProfileImgCircle = styled.div`
  ${mixins.flexBox({ justifyContent: 'center' })};
  width: 32px;
  height: 32px;
  background-color: ${({ theme: { color } }) => color.grey3};
  border-radius: 50%;
  padding: 5px;
`;

export { LogoText, GNBWrapper, NavWrapper, NavItem, ProfileWrapper, ProfileImgCircle };
