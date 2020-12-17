import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Hero.css';

import pizarra from '../assets/images/pizarra.jpg';

const Hero = () => {
  const styles = {
    backgroundImage: `linear-gradient(0deg, white 0%, transparent 10%), url(${pizarra})`,
  };
  return (
    <section className='hero' style={styles}>
      <div className='hero__container container'>
        <h1 className='hero__title title'>
          <div>
            Bienvenido a <br />
            <span className='text--red'>
              tu
            </span> <span className='text--blue'>solucionario</span> de{' '}
            <span className='text--green'>matemáticas</span>
          </div>
        </h1>
        <p className='hero__description'>
          Cursos de matemáticas gratis para estudiantes escolares y universitarios
        </p>
        <div className='hero__buttons'>
          <Link className='btn btn--green' to='/materias'>
            Ver materias
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
