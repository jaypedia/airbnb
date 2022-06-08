import { FaAirbnb, FaUserCircle } from 'react-icons/fa';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { MdCancel } from 'react-icons/md';
import styled from 'styled-components';

import { theme } from './theme';

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
  right: ${({ $isLast }) => ($isLast ? '125px' : '15px')};
  transform: translateY(-50%);

  :hover {
    color: ${({ theme: { color } }) => color.grey3};
  }
`;

const Airbnb = styled(FaAirbnb)`
  width: 40px;
  height: 40px;
  color: ${({ theme: { color } }) => color.pink};
`;

const arrowStyle = `
  width: 30px;
  height: 30px;
  padding: 5px;
  color: ${theme.color.grey3};
  cursor: pointer;

  :hover {
    background-color: ${theme.color.grey6};
    border-radius: 50%;
  }
`;

const ArrowBack = styled(IoIosArrowBack)`
  ${arrowStyle}
`;

const ArrowForward = styled(IoIosArrowForward)`
  ${arrowStyle}
`;

export { User, Menu, Search, Cancel, Airbnb, ArrowBack, ArrowForward };
