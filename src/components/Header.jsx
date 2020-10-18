import React from 'react';
import { Link } from 'react-router-dom';

import NavMenu from './NavMenu';

import '../assets/styles/components/Header.css';

import logo_tusoldemate from '../assets/images/logo-tusoldemate.png';

const Header = () => {
  return (
    <header className='header'>
      <div className='container header__container'>
        <Link to='/' className='header__img'>
          <img src={logo_tusoldemate} alt='logo-tusoldemate' />
        </Link>
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;
