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
`;

const NavWrapper = styled.div`
  ${mixins.flexBox({ justifyContent: 'space-between' })}
  width: 186px;
`;

const NavItem = styled.li`
  color: ${({ theme: { color } }) => color.grey1};
`;

export { LogoText, GNBWrapper, NavWrapper, NavItem };
