import React from 'react';
import { Link } from 'react-router-dom';

import Paragraph from '../components/Paragraph';
import Loading from '../components/Loading';
import Error from '../components/Error';

import { getPlaylistItemFromId } from '../api';

import '../assets/styles/pages/Video.css';

export class Video extends React.Component {
  state = {
    loading: true,
    error: null,
    data: {},
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const id = this.props.match.params.id;
      const data = await getPlaylistItemFromId(id);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    const { loading, error, data } = this.state;
    return (
      <main className='video'>
        {loading ? (
          <Loading />
        ) : error ? (
          <Error>Ha ocurrido un error</Error>
        ) : Object.keys(data).length > 0 ? (
          <>
            <section className='video__frame'>
              <iframe
                src={`https://www.youtube.com/embed/${data.videoId}`}
                frameBorder='0'
                allowFullScreen
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              ></iframe>
            </section>
            <section className='video__info'>
              <div className='container video__info-container'>
                <h1 className='video__title title'>{data.title}</h1>
                <Paragraph className='video__description'>{data.description}</Paragraph>
                <Link
                  to={`/curso/${data.playlistId}`}
                  className='btn btn--green video__playlist-link'
                >
                  Ir al curso
                </Link>
              </div>
            </section>
          </>
        ) : (
          <section>
            <p>Parece que el video que estás buscando no existe</p>
            <Link to='/materias' className='btn btn--red'>
              Volver a Materias
            </Link>
          </section>
        )}
      </main>
    );
  }
}

export default Video;
