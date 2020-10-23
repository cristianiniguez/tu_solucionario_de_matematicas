import React from 'react';
import { Link } from 'react-router-dom';

import { getTitleFromPlaylist, getVideosFromPlaylist } from '../api';

const Course = (props) => {
  const id = props.match.params.id;
  const [state, setState] = React.useState({ title: '', videos: [] });
  React.useEffect(() => {
    getTitleFromPlaylist(id).then((dataTitle) => {
      getVideosFromPlaylist(id).then((dataVideos) =>
        setState({ title: dataTitle, videos: dataVideos }),
      );
    });
  }, []);
  return (
    <main>
      <section className='course-section'>
        <div className='container course-section__container'>
          <h2 className='course-section__title title'>{state.title}</h2>
          <div className='course-section__grid'>
            {state.videos.map((item) => (
              <Link
                key={item.id}
                to={`/video/${item.videoId}`}
                className='course-section__link course-link'
              >
                <h3 className='course-link__title' key={item.id}>
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Course;
