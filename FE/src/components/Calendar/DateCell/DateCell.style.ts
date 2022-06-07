import styled from 'styled-components';

const DateCell = styled.td`
  width: 48px;
  height: 47px;
  text-align: center;
  font-size: ${({ theme: { fontSize } }) => fontSize.xSmall};
  cursor: ${({ isPast }) => (isPast ? 'not-allowed' : 'pointer')};
  color: ${({ theme: { color }, isPast }) => (isPast ? color.grey4 : color.black)};
  border-radius: 50%;

  ${({ isPast }) =>
    !isPast &&
    `
  :hover {
    background-color: black;
    color: white;
  }
  `}
`;

export { DateCell };
