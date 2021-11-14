import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import logo from '../logo2.svg';

const Navbar = () => {
  return (
    <NavObject className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <Link to="/">
        <img src={logo} alt="catalog" className="navbar-brand" width="60" height="48" />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            Products
          </Link>
        </li>
      </ul>
    </NavObject>
  );
};

const NavObject = styled.nav`
  background: var(--mainGray);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

export default Navbar;
