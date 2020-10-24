import React from 'react';
import { Link } from 'react-router-dom';

import Loading from './Loading';
import Error from './Error.jsx';

import '../assets/styles/components/HomeSection.css';

const HomeSection = ({ sectionTitle, sectionData, sectionLoading, sectionError }) => {
  return (
    <section className='home-section'>
      <div className='home-section__container container'>
        <h2 className='home-section__title title-center'>{sectionTitle}</h2>
        {sectionLoading ? (
          <Loading />
        ) : sectionError ? (
          <Error>{sectionError.message}</Error>
        ) : (
          <div className='home-section__grid'>
            {sectionData.length > 0 ? (
              sectionData.map((data) => (
                <article key={data.id} className='home-article'>
                  <img className='home-article__img' src={data.imgSrc} alt={data.imgAlt} />
                  <div className='home-article__info'>
                    <h3 className='home-article__title title-center'>{data.title}</h3>
                    <Link className='home-article__link btn btn--gray' to={`/curso/${data.id}`}>
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
};

export default HomeSection;
