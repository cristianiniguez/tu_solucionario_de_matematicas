import React from 'react';
import { Link } from 'react-router-dom';

import Seo from '../components/Seo';
import '../assets/styles/pages/Subjects.css';

import allSubjects from '../utils/subjects';

export class Subjects extends React.Component {
  render() {
    return (
      <>
        <Seo
          title='Materias'
          subtitle='Navega a través de las diferentes materias de nuestros cursos'
        />
        <main>
          <section className='subjects-section'>
            <div className='container'>
              <h1 className='subjects-section__title title title-center'>Materias</h1>
              <div className='subjects-section__grid'>
                {Object.keys(allSubjects).map((sbj) => {
                  const { id, name, logo } = allSubjects[sbj];
                  return (
                    <Link key={id} to={`/materias/${sbj}`} className='subjects-section__link'>
                      <figure className='subjects-section__img'>
                        <img src={logo} alt={name} />
                      </figure>
                      <h2 className='subjects-section__subtitle subtitle subtitle-center'>
                        {name}
                      </h2>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Subjects;
