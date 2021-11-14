import Link from 'next/link';

import Navbar from './Navbar';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <Link href='/'>
          <a>
            <img src='/img/logo-tusoldemate.png' alt='Logo de Tu Solucionario de Matemáticas' />
          </a>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
