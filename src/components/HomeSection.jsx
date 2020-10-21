import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/HomeSection.css';

const HomeSection = ({ sectionTitle, sectionData }) => {
  return (
    <section className='home-section'>
      <div className='home-section__container container'>
        <h2 className='home-section__title title-center'>{sectionTitle}</h2>
        <div className='home-section__grid'>
          {sectionData.map((data) => (
            <article key={data.id} className='home-article'>
              <img className='home-article__img' src={data.imgSrc} alt={data.imgAlt} />
              <div className='home-article__info'>
                <h3 className='home-article__title title-center'>{data.title}</h3>
                <p className='home-article__description'>{data.description}</p>
                <Link className='home-article__link btn btn--gray' to={`/cursos/${data.id}`}>
                  Ver más
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
