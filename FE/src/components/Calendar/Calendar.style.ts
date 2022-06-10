import styled from 'styled-components';

import { mixins } from '@/styles/mixins';

const CalendarContainer = styled.div`
  ${mixins.flexBox({ direction: 'column', justifyContent: 'space-between' })}
  width: ${({ monthCount }) => (monthCount === 2 ? '800px' : '400px')};
  position: relative;
  margin: 50px 60px;
`;

const CalendarCarouselContainer = styled.div`
  ${mixins.flexBox({ justifyContent: 'space-between' })}
  width: ${({ monthCount }) => (monthCount === 2 ? '800px' : '400px')};
  overflow: hidden;
  position: relative;
`;

const MonthsContainer = styled.div`
  ${mixins.flexBox({ alignItems: 'flex-start' })}
  transition: ${({ transition }) => transition};
  transform: ${({ translateX }) => `translateX(${translateX}px)`};
  height: 100%;
`;

export { CalendarContainer, CalendarCarouselContainer, MonthsContainer };
