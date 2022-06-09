import styled from 'styled-components';

import { mixins } from '@/styles/mixins';

const CalendarContainer = styled.div`
  ${mixins.flexBox({ justifyContent: 'space-between' })}
  width: 800px;
  overflow: hidden;
  position: relative;
  margin: 50px 60px;
`;

const MonthsContainer = styled.div`
  ${mixins.flexBox({ alignItems: 'flex-start' })}
  transition: ${({ transition }) => transition};
  transform: ${({ translateX }) => `translateX(${translateX}px)`};
  height: 100%;
`;

export { CalendarContainer, MonthsContainer };
