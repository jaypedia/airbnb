import styled from 'styled-components';

const GuestSelectorBtn = styled.button`
  font-size: 25px;
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1.5px solid #888;
  color: #888;
  border-radius: 50%;
`;

const GuestSelectorNumber = styled.span`
  font-size: 20px;
  margin: 5px;
`;

export { GuestSelectorBtn, GuestSelectorNumber };
