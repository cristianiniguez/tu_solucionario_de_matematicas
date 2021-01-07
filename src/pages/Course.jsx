import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

import Seo from '../components/Seo';
import Loading from '../components/Loading';
import Error from '../components/Error';

import { getInfoFromPlaylist, getVideosFromPlaylist } from '../api';

import '../assets/styles/pages/Course.css';

class Course extends React.Component {
  state = {
    loading: true,
    error: null,
    data: {
      info: {
        title: '',
        subject: '',
      },
      videos: [],
      pages: {
        previous: undefined,
        next: undefined,
      },
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.location.search !== prevProps.location.search) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const { id } = this.props.match.params;
      const info = await getInfoFromPlaylist(id);
      const { pageToken } = queryString.parse(this.props.location.search);
      const { videos, pages } = await getVideosFromPlaylist(id, pageToken);
      const data = { info, videos, pages };
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  prevPage = () => {
    this.props.history.push(`?pageToken=${this.state.data.pages.previous}`);
  };

  nextPage = () => {
    this.props.history.push(`?pageToken=${this.state.data.pages.next}`);
  };

  render() {
    const {
      loading,
      error,
      data: { info, videos, pages },
    } = this.state;

    return (
      <>
        <Seo title={info.title} subtitle={info.description} />
        <main>
          <section className='course-section'>
            <div className='container course-section__container'>
              {loading ? (
                <Loading />
              ) : error ? (
                <Error>Ha ocurrido un error</Error>
              ) : (
                <>
                  <h1 className='course-section__title title'>
                    <Link
                      className='course-section__subject'
                      to={`/materias/${info.subject.toLowerCase()}`}
                    >
                      {info.subject}
                    </Link>{' '}
                    / {info.title}
                  </h1>
                  <div className='course-section__grid'>
                    {videos.map((item) => (
                      <div key={item.id} className='course'>
                        <figure className='course__img'>
                          <img src={item.imgSrc} alt={item.title} />
                        </figure>
                        <h2 className='course__title title' key={item.id}>
                          {item.title}
                        </h2>
                        <Link className='course__link' to={`/video/${item.id}`}>
                          <i className='fas fa-play-circle'></i>
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className='course-section__buttons'>
                    <button
                      className={`btn btn--${pages.previous ? 'red' : 'off'}`}
                      onClick={pages.previous && this.prevPage}
                    >
                      <i className='fas fa-arrow-left'></i>
                    </button>
                    <button
                      className={`btn btn--${pages.next ? 'red' : 'off'}`}
                      onClick={pages.next && this.nextPage}
                    >
                      <i className='fas fa-arrow-right'></i>
                    </button>
                  </div>
                </>
              )}
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Course;
