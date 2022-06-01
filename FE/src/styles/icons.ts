import { FiMenu, FiSearch } from 'react-icons/fi';
import { FaAirbnb, FaUserCircle } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import styled from 'styled-components';

const User = styled(FaUserCircle)`
  color: ${({ theme: { color } }) => color.grey3};
  width: 32px;
  height: 32px;
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
  right: ${({ $isSearchBox }) => ($isSearchBox ? '125px' : '15px')};
  transform: translateY(-50%);
`;

const Airbnb = styled(FaAirbnb)`
  width: 40px;
  height: 40px;
  color: ${({ theme: { color } }) => color.pink};
`;

export { User, Menu, Search, Cancel, Airbnb };
