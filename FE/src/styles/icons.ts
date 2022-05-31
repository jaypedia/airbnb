import { FiUser, FiMenu } from 'react-icons/fi';
import styled from 'styled-components';

const User = styled(FiUser)`
  color: ${({ theme: { color } }) => color.white};
  width: 20px;
  height: 20px;
`;

const Menu = styled(FiMenu)`
  color: ${({ theme: { color } }) => color.grey2};
  margin-left: 10px;
`;

export { User, Menu };
