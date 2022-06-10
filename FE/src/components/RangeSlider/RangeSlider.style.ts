import styled from 'styled-components';

const GraphBar = styled.div`
  width: 20px;
  height: ${props => `${props.barHeight}px`};
  background-color: ${props => (props.isInRange ? '#B0B0B0' : '#DDDDDD')};
  border: 1px solid #fff;
`;

const GraphBox = styled.div`
  height: 100px;
  display: flex;
  align-items: flex-end;
  margin: 20px 0px;
`;

export { GraphBar, GraphBox };
