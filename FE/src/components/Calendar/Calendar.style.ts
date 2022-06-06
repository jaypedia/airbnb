import styled from 'styled-components';

import { mixins } from '@/styles/mixins';

const CalendarContainer = styled.div`
  ${mixins.flexBox({ justifyContent: 'space-between' })}
  width: 800px;
  height: 390px;
  overflow: hidden;
  position: relative;
  margin: 50px 60px;
`;

export { CalendarContainer };
