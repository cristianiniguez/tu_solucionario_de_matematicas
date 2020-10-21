import React from 'react';

import Hero from '../components/Hero';
import HomeSection from '../components/HomeSection';

import course1 from '../assets/images/course1.jpg';
import course2 from '../assets/images/course2.jpg';
import course3 from '../assets/images/course3.jpg';
import course4 from '../assets/images/course3.jpg';

import materia1 from '../assets/images/materia1.jpg';
import materia2 from '../assets/images/materia2.jpg';
import materia3 from '../assets/images/materia3.jpg';
import materia4 from '../assets/images/materia4.jpg';

import { getPlaylists } from '../api';

const Home = () => {
  const [state, setState] = React.useState({
    lastCourses: [],
    lastSubjects: [
      {
        id: 1,
        imgSrc: materia1,
        imgAlt: 'Materia 1',
        title: 'Materia 1',
        description: 'lorem ipsum dolor',
      },
      {
        id: 2,
        imgSrc: materia2,
        imgAlt: 'Materia 2',
        title: 'Materia 2',
        description: 'lorem ipsum dolor',
      },
      {
        id: 3,
        imgSrc: materia3,
        imgAlt: 'Materia 3',
        title: 'Materia 3',
        description: 'lorem ipsum dolor',
      },
      {
        id: 4,
        imgSrc: materia4,
        imgAlt: 'Materia 4',
        title: 'Materia 4',
        description: 'lorem ipsum dolor',
      },
    ],
  });
  React.useEffect(() => {
    getPlaylists().then((data) => setState({ ...state, lastCourses: data }));
  }, []);
  return (
    <main>
      <Hero />
      <HomeSection sectionTitle='Últimos cursos' sectionData={state.lastCourses} />
      <HomeSection sectionTitle='Materias actualizadas' sectionData={state.lastSubjects} />
    </main>
  );
};

export default Home;
