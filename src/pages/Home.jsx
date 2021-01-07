import React from 'react';

import Seo from '../components/Seo';
import Hero from '../components/Hero';
import LastCourses from '../components/LastCourses';
import LastSubjects from '../components/LastSubjects';

class Home extends React.Component {
  render() {
    return (
      <>
        <Seo subtitle='Cursos de matemáticas gratis para estudiantes escolares y universitarios' />
        <main>
          <Hero />
          <LastCourses />
          <LastSubjects />
        </main>
      </>
    );
  }
}

export default Home;
