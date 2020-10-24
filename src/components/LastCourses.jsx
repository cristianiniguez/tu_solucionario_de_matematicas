import React from 'react';
import { Link } from 'react-router-dom';

import Loading from './Loading';
import Error from './Error.jsx';

import '../assets/styles/components/LastCourses.css';

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
      <section className='last-courses'>
        <div className='last-courses__container container'>
          <h2 className='last-courses__title title-center'>Últimos cursos</h2>
          {loading ? (
            <Loading />
          ) : error ? (
            <Error>{error.message}</Error>
          ) : (
            <div className='last-courses__grid'>
              {courses.length > 0 ? (
                courses.map((course) => (
                  <article key={course.id} className='last-course'>
                    <img className='last-course__img' src={course.imgSrc} alt={course.imgAlt} />
                    <div className='last-course__info'>
                      <h3 className='last-course__title title-center'>{course.title}</h3>
                      <Link className='last-course__link btn btn--gray' to={`/curso/${course.id}`}>
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
