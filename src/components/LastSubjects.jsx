import React from 'react';
import { Link } from 'react-router-dom';

import Loading from './Loading';
import Error from './Error.jsx';

import '../assets/styles/components/LastSubjects.css';

import materia1 from '../assets/images/materia1.jpg';
import materia2 from '../assets/images/materia2.jpg';
import materia3 from '../assets/images/materia3.jpg';
import materia4 from '../assets/images/materia4.jpg';

import { getLastSubjects } from '../api';

export class LastSubjects extends React.Component {
  state = {
    loading: true,
    error: null,
    data: {
      subjects: [],
    },
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const subjectNames = await getLastSubjects();
      console.log(subjectNames);
      const subjects = [
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
      const data = { subjects };
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    const {
      loading,
      error,
      data: { subjects },
    } = this.state;
    return (
      <section className='last-subjects'>
        <div className='last-subjects__container container'>
          <h2 className='last-subjects__title title-center'>Materias actualizadas</h2>
          {loading ? (
            <Loading />
          ) : error ? (
            <Error>{error.message}</Error>
          ) : (
            <div className='last-subjects__grid'>
              {subjects.length > 0 ? (
                subjects.map((subject) => (
                  <article key={subject.id} className='last-subject'>
                    <img className='last-subject__img' src={subject.imgSrc} alt={subject.imgAlt} />
                    <div className='last-subject__info'>
                      <h3 className='last-subject__title title-center'>{subject.title}</h3>
                      <Link
                        className='last-subject__link btn btn--gray'
                        to={`/materia/${subject.id}`}
                      >
                        Ver más
                      </Link>
                    </div>
                  </article>
                ))
              ) : (
                <p>No hay elementos en este momento</p>
              )}
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default LastSubjects;
