import styled from 'styled-components';

import { mixins } from '@/styles/mixins';

const MonthContainer = styled.div`
  ${mixins.flexBox({ direction: 'column', justifyContent: 'flex-start' })};
  padding: 0px 27px;
  width: 390px;
  height: 100%;
`;
const YearMonthTextWrapper = styled.div`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 65px;
  width: 336px;
`;

const YearMonthText = styled.h2`
  font-size: ${({ theme: { fontSize } }) => fontSize.medium};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  color: ${({ theme: { color } }) => color.black};
`;

const DateTable = styled.table``;

const DateTableBody = styled.tbody``;

const WeekRow = styled.tr``;

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

export {
  MonthContainer,
  YearMonthTextWrapper,
  YearMonthText,
  DateTable,
  DateTableBody,
  WeekRow,
  DateCell,
};
