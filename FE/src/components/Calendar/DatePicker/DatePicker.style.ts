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

const DatePicker = styled.div`
  width: 100%;
  height: 100%;
  ${({ selected }) => selected && selectedDateStyle}
`;

const DateTextBox = styled.div`
  ${mixins.flexBox({ justifyContent: 'center' })}
  width: 100%;
  height: 100%;
  ${({ isBetween }) => isBetween && betweenDateStyle}
`;

export { DatePicker, DateTextBox };
