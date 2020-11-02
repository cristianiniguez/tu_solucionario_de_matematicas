import React from 'react';

import about from '../docs/about.md';

import '../assets/styles/pages/About.css';

export class About extends React.Component {
  render() {
    return (
      <main>
        <section className='about-section'>
          <div className='container' dangerouslySetInnerHTML={{ __html: about }}></div>
        </section>
      </main>
    );
  }
}

export default About;
