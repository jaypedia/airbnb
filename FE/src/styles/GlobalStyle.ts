import { createGlobalStyle } from 'styled-components';
import Normalize from '@/styles/Normalize';

const GlobalStyle = createGlobalStyle`
${Normalize}

* {
  font-family: 'Noto Sans KR', sans-serif;
  box-sizing: border-box;
}

button,
input,
select,
textarea {
  background-color: transparent;
  border: 0;

  &:focus {
    outline: none;
    box-shadow: none;
  }
}

a,
button {
  cursor: pointer;
}

ul, li {
  padding: 0;
  list-style: none;
}
`;

export default GlobalStyle;