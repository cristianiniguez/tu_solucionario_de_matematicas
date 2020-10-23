import React from 'react';
import { Link } from 'react-router-dom';

import { getTitleFromPlaylist, getVideosFromPlaylist } from '../api';

import '../assets/styles/pages/Course.css';

const getVideos = (id) => {
  const [state, setState] = React.useState({ title: '', videos: [] });
  React.useEffect(() => {
    getTitleFromPlaylist(id).then((dataTitle) => {
      getVideosFromPlaylist(id).then((dataVideos) =>
        setState({ title: dataTitle, videos: dataVideos }),
      );
    });
  }, []);
  return state;
};

const Course = (props) => {
  const state = getVideos(props.match.params.id);
  return (
    <main>
      <section className='course-section'>
        <div className='container course-section__container'>
          <h1 className='course-section__title title'>{state.title}</h1>
          <div className='course-section__grid'>
            {state.videos.map((item) => (
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
        </div>
      </section>
    </main>
  );
};

export default Course;
