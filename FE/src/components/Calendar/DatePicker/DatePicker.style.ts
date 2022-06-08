import styled from 'styled-components';

import { mixins } from '@/styles/mixins';
import { theme } from '@/styles/theme';

const selectedDateStyle = `
  background-color: ${theme.color.black};
  color: ${theme.color.white};
  border-radius:50%;
`;

const betweenDateStyle = `
  background-color: ${theme.color.grey6};
`;

const gradientDateStyle = `
  content: '';
  width: 125%;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, rgb(247, 247, 247) 50%, rgba(241, 241, 241, 0) 95%);
`;

const firstDateStyle = `
  ${gradientDateStyle}
  right: 70%;
  transform: rotate(180deg);
`;

const lastDateStyle = `
  ${gradientDateStyle}
  left: 70%;
`;

const DatePicker = styled.div`
  width: 100%;
  height: 100%;
  ${({ selected }) => selected && selectedDateStyle}
  position: relative;
`;

const DateTextBox = styled.div`
  ${mixins.flexBox({ justifyContent: 'center' })}
  width: 100%;
  height: 100%;
  ${({ isBetween }) => isBetween && betweenDateStyle}

  ::after {
    ${({ isFirstDate }) => isFirstDate && firstDateStyle}
    ${({ isLastDate }) => isLastDate && lastDateStyle}
  }
`;

export { DatePicker, DateTextBox };
