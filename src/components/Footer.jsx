import React from 'react';

import '../assets/styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <section className='footer__section social-links'>
          <h2 className='title'>Redes sociales</h2>
          <a href='https://www.facebook.com/tusolucionariodematematicas' target='_blank'>
            <i className='fab fa-facebook' />
            Facebook
          </a>
          <a href='https://www.youtube.com/channel/UCfndi4CyqsQc0zRzrMBgiOw' target='_blank'>
            <i className='fab fa-youtube' />
            Youtube
          </a>
        </section>
        <section className='footer__section about'>
          <h2 className='title'>Acerca de</h2>
          <a href='#'>
            <i className='fas fa-question-circle' />
            ¿Qué es ... ?
          </a>
          <a href='#'>
            <i className='fas fa-question-circle' />
            ¿Quién es ... ?
          </a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
