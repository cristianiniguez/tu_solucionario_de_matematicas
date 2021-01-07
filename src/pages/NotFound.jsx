import React from 'react';
import { Link } from 'react-router-dom';

import Seo from '../components/Seo';

import '../assets/styles/pages/NotFound.css';

const NotFound = () => {
  return (
    <>
      <Seo title='No encontrado' />
      <main>
        <section className='notfound'>
          <h1 className='notfound__title title'>Error 404: Not Found</h1>
          <p className='notfound__message'>Lo que estás buscando no está aquí</p>
          <Link className='notfound__btn btn btn--green' to='/'>
            Ir al Home
          </Link>
        </section>
      </main>
    </>
  );
};

export default NotFound;
