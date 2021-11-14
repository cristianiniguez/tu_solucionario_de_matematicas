import { FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <section className='footer__section social-links'>
          <p>
            <a
              className='footer__social-link'
              href='https://www.facebook.com/tusolucionariodematematicas'
              target='_blank'
            >
              <FaFacebook />
              Facebook
            </a>
            <a
              className='footer__social-link'
              href='https://www.youtube.com/channel/UCfndi4CyqsQc0zRzrMBgiOw'
              target='_blank'
            >
              <FaYoutube />
              Youtube
            </a>
          </p>
        </section>
        <section className='footer__section copy'>
          <p>
            &copy;{' '}
            <a href='https://www.cristianiniguez.com' target='_blank'>
              Cristian iñiguez
            </a>{' '}
            - 2020
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
