import Link from 'next/link';
import Image from 'next/image';

import Container from './Container';
import Navbar from './Navbar';

import styles from '../styles/components/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Link href='/'>
          <a className={styles.img}>
            <Image
              src='/img/logo-tusoldemate.png'
              alt='Logo de Tu Solucionario de Matemáticas'
              layout='fixed'
              height={60}
              width={240}
            />
          </a>
        </Link>
        <Navbar />
      </Container>
    </header>
  );
};

export default Header;
