import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderDesafio.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink className="link" to="produtos" end>
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="contato">
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
