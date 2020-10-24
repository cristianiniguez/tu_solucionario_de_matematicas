import React from 'react';
import { Link } from 'react-router-dom';

import Loading from './Loading';
import Error from './Error.jsx';

import '../assets/styles/components/HomeSection.css';

import { getLastPlaylists } from '../api';

export class LastCourses extends React.Component {
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
      const courses = await getLastPlaylists();
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
    return (
      <section className='home-section'>
        <div className='home-section__container container'>
          <h2 className='home-section__title title-center'>Últimos cursos</h2>
          {loading ? (
            <Loading />
          ) : error ? (
            <Error>{error.message}</Error>
          ) : (
            <div className='home-section__grid'>
              {courses.length > 0 ? (
                courses.map((course) => (
                  <article key={course.id} className='home-article'>
                    <img className='home-article__img' src={course.imgSrc} alt={course.imgAlt} />
                    <div className='home-article__info'>
                      <h3 className='home-article__title title-center'>{course.title}</h3>
                      <Link className='home-article__link btn btn--gray' to={`/curso/${course.id}`}>
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

export default LastCourses;
