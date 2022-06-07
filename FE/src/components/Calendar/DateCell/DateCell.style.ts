import styled from 'styled-components';

const DateCell = styled.td`
  width: 48px;
  height: 47px;
  text-align: center;
  font-size: ${({ theme: { fontSize } }) => fontSize.xSmall};
  cursor: pointer;

  :hover {
    background-color: black;
    color: white;
    border-radius: 50%;
  }
`;

export { DateCell };
