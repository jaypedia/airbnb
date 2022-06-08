import styled from 'styled-components';

import { theme } from '@/styles/theme';

const setCursor = (isPast, isBlank) => {
  if (isBlank) {
    return 'auto';
  }
  if (isPast) {
    return 'not-allowed';
  }
  return 'pointer';
};

const checkInDateStyle = `
  background-color: ${theme.color.grey6};
  border-top-left-radius:50%;
  border-bottom-left-radius:50%;
`;

const checkOutDateStyle = `
  background-color: ${theme.color.grey6};
  border-top-right-radius:50%;
  border-bottom-right-radius:50%;
`;

const DateCell = styled.td`
  width: 48px;
  height: 47px;
  text-align: center;
  font-size: ${({ theme: { fontSize } }) => fontSize.xSmall};
  cursor: ${({ isPast, isBlank }) => setCursor(isPast, isBlank)};
  color: ${({ theme: { color }, isPast }) => (isPast ? color.grey4 : color.black)};
  border: 0;
  padding: 0;
  background-color: ${({ theme: { color } }) => color.white};
  ${({ isCheckIn }) => isCheckIn && checkInDateStyle};
  ${({ isCheckOut }) => isCheckOut && checkOutDateStyle};
`;

export { DateCell };
