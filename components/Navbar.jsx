import { useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <nav className={`nav ${active ? 'nav--active' : ''}`}>
      <ul className='nav-menu'>
        <li className='nav-menu__item'>
          <Link className='nav-menu__link' href='/'>
            <a>Inicio</a>
          </Link>
        </li>
        <li className='nav-menu__item'>
          <Link className='nav-menu__link' href='/materias'>
            <a>Materias</a>
          </Link>
        </li>
        <li className='nav-menu__item'>
          <Link className='nav-menu__link' href='/acerca'>
            <a>Acerca de</a>
          </Link>
        </li>
      </ul>
      <button onClick={() => setActive(!active)} className='nav__btn'>
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
