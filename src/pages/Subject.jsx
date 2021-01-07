import React from 'react';
import { Link } from 'react-router-dom';

import Seo from '../components/Seo';
import Loading from '../components/Loading';
import Error from '../components/Error';

import '../assets/styles/pages/Subject.css';

import { getPlaylistsFromSubject } from '../api';
import allSubjects from '../utils/subjects';

export class Subject extends React.Component {
  state = {
    loading: true,
    error: null,
    data: {
      courses: [],
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const subject = this.props.match.params.name;
      const courses = await getPlaylistsFromSubject(subject);
      const data = { courses };
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    const {
      loading,
      error,
      data: { courses },
    } = this.state;

    const subject = this.props.match.params.name;
    const name = allSubjects[subject] ? allSubjects[subject].name : undefined;

    return (
      <>
        <Seo title={name} subtitle={`Cursos de ${name} en Tu Solucionario de Matemáticas`} />
        <main>
          <section className='subject-section'>
            <div className='container'>
              {name ? (
                <>
                  <h1 className={`subject-section__title title title--${subject}`}>{name}</h1>
                  <div className='subject-section__grid'>
                    {loading ? (
                      <Loading />
                    ) : error ? (
                      <Error>Ha ocurrido un error</Error>
                    ) : courses.length > 0 ? (
                      courses.map((course) => {
                        const { id, title, imgSrc, imgAlt } = course;
                        return (
                          <div key={id} className='subject-course'>
                            <figure className='subject-course__img'>
                              <img src={imgSrc} alt={imgAlt} />
                            </figure>
                            <h2 className='subject-course__title title'>{title}</h2>
                            <Link className='subject-course__link' to={`/curso/${id}`}>
                              <i className='fas fa-arrow-circle-right'></i>
                            </Link>
                          </div>
                        );
                      })
                    ) : (
                      <div className='subject-info'>
                        <p>Parece que aquí no hay cursos todavía</p>
                        <Link to='/materias' className='btn btn--red'>
                          Volver a materias
                        </Link>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className='subject-info'>
                  <p>El curso que estás buscando no existe</p>
                  <Link to='/materias' className='btn btn--red'>
                    Ir a materias
                  </Link>
                </div>
              )}
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Subject;
