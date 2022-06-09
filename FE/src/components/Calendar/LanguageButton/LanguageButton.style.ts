import styled from 'styled-components';

const LanguageButtonContainer = styled.div`
  width: 100%;
  padding: 20px 30px 0;
`;

const LanguageButton = styled.button`
  border: 1px solid ${({ theme: { color } }) => color.grey4};
  background-color: ${({ theme: { color } }) => color.white};
  border-radius: 20px;
  padding: 3px 10px;
  transition: all 0.5s ease;

  :hover {
    border: 1px solid ${({ theme: { color } }) => color.black};
  }
`;

export { LanguageButtonContainer, LanguageButton };
