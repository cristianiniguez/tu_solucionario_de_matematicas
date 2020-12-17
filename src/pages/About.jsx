import React from 'react';
import parse from 'html-react-parser';

import about from '../docs/about.md';

import '../assets/styles/pages/About.css';

export class About extends React.Component {
  render() {
    return (
      <main>
        <section className='about-section'>
          <div className='container'>{parse(about)}</div>
        </section>
      </main>
    );
  }
}

export default About;
