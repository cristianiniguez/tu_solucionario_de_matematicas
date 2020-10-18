import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/NavMenu.css';

const NavMenu = () => {
  return (
    <nav className='nav'>
      <ul className='nav-menu'>
        <li className='nav-menu__item'>
          <Link className='nav-menu__link' to='/'>
            Inicio
          </Link>
        </li>
        <li className='nav-menu__item'>
          <Link className='nav-menu__link' to='/materias'>
            Materias
          </Link>
        </li>
        <li className='nav-menu__item'>
          <Link className='nav-menu__link' to='/recursos'>
            Recursos
          </Link>
        </li>
        <li className='nav-menu__item'>
          <Link className='nav-menu__link' to='/acerca'>
            Acerca de
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
