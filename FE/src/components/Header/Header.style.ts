import styled from 'styled-components';
import heroImg from '@/assets/hero-img.png';
import { shadow } from '@/styles/commonStyle';

const main = `
  background: url(${heroImg}) no-repeat;
  background-size: cover;
  height: 70vh;
`;

const searchResult = `
  background-color: white;
  height: 94px;
  ${shadow}
`;

const headerStyle = {
  main,
  searchResult,
};

const HeaderWrapper = styled.div`
  ${({ currentStyle }) => headerStyle[currentStyle]}
`;

export { HeaderWrapper };
