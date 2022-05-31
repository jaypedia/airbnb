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
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const headerStyle = {
  '/': headerHome,
  '/search-result': headerSearch,
};

const HeaderWrapper = styled.div`
  ${({ path }) => headerStyle[path]}
`;

export { HeaderWrapper };
