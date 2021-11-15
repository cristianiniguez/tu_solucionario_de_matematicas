import { FaFacebook, FaYoutube } from 'react-icons/fa';

import Container from './Container';

import styles from '../styles/components/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <section>
          <p>
            <a
              className={styles['social-link']}
              href='https://www.facebook.com/tusolucionariodematematicas'
              target='_blank'
              rel='noreferrer'
            >
              <FaFacebook />
              <span>Facebook</span>
            </a>
            <a
              className={styles['social-link']}
              href='https://www.youtube.com/channel/UCfndi4CyqsQc0zRzrMBgiOw'
              target='_blank'
              rel='noreferrer'
            >
              <FaYoutube />
              <span>Youtube</span>
            </a>
          </p>
        </section>
        <section>
          <p>
            &copy;{' '}
            <a href='https://www.cristianiniguez.com' target='_blank' rel='noreferrer'>
              Cristian iñiguez
            </a>{' '}
            - 2020
          </p>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
