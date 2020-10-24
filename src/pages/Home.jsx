import React from 'react';

import Hero from '../components/Hero';
import HomeSection from '../components/HomeSection';

import materia1 from '../assets/images/materia1.jpg';
import materia2 from '../assets/images/materia2.jpg';
import materia3 from '../assets/images/materia3.jpg';
import materia4 from '../assets/images/materia4.jpg';

import { getPlaylists } from '../api';

class Home extends React.Component {
  state = {
    loading: true,
    error: null,
    data: {
      lastCourses: [],
      lastSubjects: [],
    },
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const lastCourses = await getPlaylists();
      const lastSubjects = [
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
      ];
      const data = { lastCourses, lastSubjects };
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    const {
      loading,
      error,
      data: { lastCourses, lastSubjects },
    } = this.state;
    return (
      <main>
        <Hero />
        <HomeSection
          sectionTitle='Últimos cursos'
          sectionData={lastCourses}
          sectionLoading={loading}
          sectionError={error}
        />
        <HomeSection
          sectionTitle='Materias actualizadas'
          sectionData={lastSubjects}
          sectionLoading={loading}
          sectionError={error}
        />
      </main>
    );
  }
}

export default Home;
