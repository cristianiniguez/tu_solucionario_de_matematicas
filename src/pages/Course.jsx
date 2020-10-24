import React from 'react';
import { Link } from 'react-router-dom';

import Loading from '../components/Loading';
import Error from '../components/Error';

import { getTitleFromPlaylist, getVideosFromPlaylist } from '../api';

import '../assets/styles/pages/Course.css';

class Course extends React.Component {
  state = {
    loading: true,
    error: null,
    data: {
      title: '',
      videos: [],
    },
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const { id } = this.props.match.params;
      const title = await getTitleFromPlaylist(id);
      const videos = await getVideosFromPlaylist(id);
      const data = { title, videos };
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    const {
      loading,
      error,
      data: { title, videos },
    } = this.state;
    return (
      <main>
        <section className='course-section'>
          <div className='container course-section__container'>
            {loading ? (
              <Loading />
            ) : error ? (
              <Error>Ha ocurrido un error</Error>
            ) : (
              <>
                <h1 className='course-section__title title'>{title}</h1>
                <div className='course-section__grid'>
                  {videos.map((item) => (
                    <div key={item.id} className='course'>
                      <h2 className='course__title title' key={item.id}>
                        {item.title}
                      </h2>
                      <Link className='course__link' to={`/video/${item.videoId}`}>
                        <i className='fas fa-play-circle'></i>
                      </Link>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
    );
  }
}

export default Course;
