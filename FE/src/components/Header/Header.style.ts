import styled from 'styled-components';

import heroImg from '@/assets/hero-img.png';
import { shadow } from '@/styles/commonStyle';

const large = `
  background: url(${heroImg}) no-repeat;
  background-size: cover;
  height: 70vh;
`;

const small = `
  background-color: white;
  height: 94px;
  ${shadow}
`;

const headerStyle = {
  large,
  small,
};

const HeaderWrapper = styled.div`
  ${({ currentStyle }) => headerStyle[currentStyle]}
`;

export { HeaderWrapper };
