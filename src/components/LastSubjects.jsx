import React from 'react';
import { Link } from 'react-router-dom';

import Loading from './Loading';
import Error from './Error.jsx';

import '../assets/styles/components/HomeSection.css';

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
      <section className='home-section'>
        <div className='home-section__container container'>
          <h2 className='home-section__title title-center'>Materias actualizadas</h2>
          {loading ? (
            <Loading />
          ) : error ? (
            <Error>{error.message}</Error>
          ) : (
            <div className='home-section__grid'>
              {subjects.length > 0 ? (
                subjects.map((subject) => (
                  <article key={subject.id} className='home-article'>
                    <img className='home-article__img' src={subject.imgSrc} alt={subject.imgAlt} />
                    <div className='home-article__info'>
                      <h3 className='home-article__title title-center'>{subject.title}</h3>
                      <Link
                        className='home-article__link btn btn--gray'
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
