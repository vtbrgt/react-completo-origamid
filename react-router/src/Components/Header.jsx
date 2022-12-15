import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <NavLink to="/" end activeStyle={{ color: 'aquamarine' }}>
        Home
      </NavLink>{' '}
      |{' '}
      <NavLink to="sobre" activeStyle={{ color: 'aquamarine' }}>
        Sobre
      </NavLink>{' '}
      |{' '}
      <NavLink to="login" activeStyle={{ color: 'aquamarine' }}>
        Login
      </NavLink>
    </nav>
  );
};

export default Header;
