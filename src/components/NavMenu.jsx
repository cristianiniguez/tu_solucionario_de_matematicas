import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/NavMenu.css';

const NavMenu = () => {
  const [active, setActive] = React.useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <nav className={`nav ${active ? 'nav--active' : ''}`}>
      <ul className='nav-menu'>
        <li className='nav-menu__item'>
          <Link className='nav-menu__link' to='/' onClick={() => setActive(false)}>
            Inicio
          </Link>
        </li>
        <li className='nav-menu__item'>
          <Link className='nav-menu__link' to='/materias' onClick={() => setActive(false)}>
            Materias
          </Link>
        </li>
        <li className='nav-menu__item'>
          <Link className='nav-menu__link' to='/recursos' onClick={() => setActive(false)}>
            Recursos
          </Link>
        </li>
        <li className='nav-menu__item'>
          <Link className='nav-menu__link' to='/acerca' onClick={() => setActive(false)}>
            Acerca de
          </Link>
        </li>
      </ul>
      <button onClick={handleClick} className='nav__btn'>
        <i className='fas fa-bars'></i>
      </button>
    </nav>
  );
};

export default NavMenu;
