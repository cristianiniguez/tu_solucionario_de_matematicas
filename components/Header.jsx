import Link from 'next/link';

import Container from './Container';
import Navbar from './Navbar';

import styles from '../styles/components/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Link href='/'>
          <a className={styles.img}>
            <img src='/img/logo-tusoldemate.png' alt='Logo de Tu Solucionario de Matemáticas' />
          </a>
        </Link>
        <Navbar />
      </Container>
    </header>
  );
};

export default Header;
