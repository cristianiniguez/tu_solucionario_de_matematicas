import React from 'react';
import parse from 'html-react-parser';

import Seo from '../components/Seo';
import about from '../docs/about.md';

import '../assets/styles/pages/About.css';

export class About extends React.Component {
  render() {
    return (
      <>
        <Seo title='Acerca de' subtitle='Acerca de Tu Solucionario de Matemáticas' />
        <main>
          <section className='about-section'>
            <div className='container'>{parse(about)}</div>
          </section>
        </main>
      </>
    );
  }
}

export default About;
