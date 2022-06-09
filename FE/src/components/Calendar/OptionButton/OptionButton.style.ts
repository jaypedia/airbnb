import styled from 'styled-components';

const OptionButtonContainer = styled.div`
  width: 100%;
  padding: 20px 30px 0;
`;

const OptionButton = styled.button`
  border: 1px solid ${({ theme: { color } }) => color.grey4};
  background-color: ${({ theme: { color } }) => color.white};
  border-radius: 20px;
  padding: 3px 10px;
  transition: all 0.5s ease;
  margin-right: 10px;

  :hover {
    border: 1px solid ${({ theme: { color } }) => color.black};
  }
`;

export { OptionButtonContainer, OptionButton };
