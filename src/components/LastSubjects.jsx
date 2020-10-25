import React from 'react';
import { Link } from 'react-router-dom';

import Loading from './Loading';
import Error from './Error.jsx';

import '../assets/styles/components/LastSubjects.css';

import { getLastSubjects } from '../api';
import allSubjects from '../utils/subjects';

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
      const subjects = await getLastSubjects();
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
                subjects.map((subject) => {
                  const { id, name, logo } = allSubjects[subject.toLowerCase()];
                  return (
                    <article key={id} className='last-subject'>
                      <img className='last-subject__img' src={logo} alt={name} />
                      <div className='last-subject__info'>
                        <h3
                          className={`last-subject__title title-center title--${subject.toLowerCase()}`}
                        >
                          {name}
                        </h3>
                        <Link
                          className='last-subject__link btn btn--gray'
                          to={`/materias/${subject.toLowerCase()}`}
                        >
                          Ver más
                        </Link>
                      </div>
                    </article>
                  );
                })
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
