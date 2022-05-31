import styled from 'styled-components';
import heroImg from '@/assets/hero-img.png';

const headerHome = `
  background: url(${heroImg}) no-repeat;
  background-size: cover;
  height: 70vh;
`;

const headerSearch = `
  background-color: white;
  height: 94px;
`;

const headerStyle = {
  '/': headerHome,
  '/search-result': headerSearch,
};

const HeaderWrapper = styled.div`
  ${({ path }) => headerStyle[path]}
`;

export { HeaderWrapper };
