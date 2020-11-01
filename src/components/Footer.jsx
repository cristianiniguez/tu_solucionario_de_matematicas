import React from 'react';

import '../assets/styles/components/Footer.css';

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
              <i className='fab fa-facebook' />
              Facebook
            </a>
            <a
              className='footer__social-link'
              href='https://www.youtube.com/channel/UCfndi4CyqsQc0zRzrMBgiOw'
              target='_blank'
            >
              <i className='fab fa-youtube' />
              Youtube
            </a>
          </p>
        </section>
        <section className='footer__section copy'>
          <p>
            &copy;{' '}
            <a href='https://cristianiniguez.github.io' target='_blank'>
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
