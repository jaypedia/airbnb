import styled from 'styled-components';

import { mixins } from '@/styles/mixins';

const DayList = styled.ul`
  ${mixins.flexBox({ justifyContent: 'space-between' })}
  position: absolute;
  top: 60px;
  left: ${({ isRight }) => (isRight ? '405px' : 0)};
  padding: 0px 27px;
  height: 22px;
`;

const DayItem = styled.li`
  font-size: ${({ theme: { fontSize } }) => fontSize.xxSmall};
  color: ${({ theme: { color } }) => color.grey3};
  width: 48px;
  text-align: center;
`;

export { DayList, DayItem };
