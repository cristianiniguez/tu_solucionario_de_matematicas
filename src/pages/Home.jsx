import React from 'react';

import Hero from '../components/Hero';
import LastCourses from '../components/LastCourses';
import LastSubjects from '../components/LastSubjects';

class Home extends React.Component {
  render() {
    return (
      <main>
        <Hero />
        <LastCourses />
        <LastSubjects />
      </main>
    );
  }
}

export default Home;
