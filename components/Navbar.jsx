import { useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

import styles from '../styles/components/Navbar.module.scss';
import clsx from 'clsx';

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    // <nav className={`nav ${active ? 'nav--active' : ''}`}>
    <nav className={clsx(styles.nav, { [styles['nav--active']]: active })}>
      <ul className={styles.menu}>
        <li>
          <Link href='/'>
            <a>Inicio</a>
          </Link>
        </li>
        <li>
          <Link href='/materias'>
            <a>Materias</a>
          </Link>
        </li>
        <li>
          <Link href='/acerca'>
            <a>Acerca de</a>
          </Link>
        </li>
      </ul>
      <button onClick={() => setActive(!active)} className={styles.btn}>
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
