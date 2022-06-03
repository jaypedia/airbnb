import styled from 'styled-components';

import { shadow } from '@/styles/commonStyle';
import { mixins } from '@/styles/mixins';

const ModalContainer = styled.div`
  background-color: ${({ theme: { color } }) => color.white};
  ${shadow}
  border-radius: 40px;
  position: absolute;
  top: 202px;
  left: 50%;
  transform: translateX(-50%);
  padding: 60px;
  z-index: 1;
`;

const BackgroundLayer = styled.div`
  ${mixins.flexBox({ justifyContent: 'center' })}
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
`;

export { ModalContainer, BackgroundLayer };
