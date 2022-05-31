import { FiUser, FiMenu, FiSearch } from 'react-icons/fi';
import { MdCancel } from 'react-icons/md';
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

const Search = styled(FiSearch)`
  color: ${({ theme: { color } }) => color.white};
  width: 23px;
  height: 23px;
`;

const Cancel = styled(MdCancel)`
  width: 20px;
  height: 20px;
  color: ${({ theme: { color } }) => color.grey4};
  position: absolute;
  top: 50%;
  right: ${({ isSearchBox }) => (isSearchBox ? '125px' : '25px')};
  transform: translateY(-50%);
`;

export { User, Menu, Search, Cancel };
