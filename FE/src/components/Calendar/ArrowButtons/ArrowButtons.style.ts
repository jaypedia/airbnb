import styled from 'styled-components';

import { mixins } from '@/styles/mixins';

const BtnContainer = styled.div`
  ${mixins.flexBox({ justifyContent: 'space-between' })}
  width: 800px;
  height: 0;
  position: absolute;
  top: 20px;
  padding: 0 20px;
  z-index: 1;
`;

export { BtnContainer };
