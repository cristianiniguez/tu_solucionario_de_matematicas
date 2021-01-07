import React from 'react';
import Helmet from 'react-helmet';

const Seo = ({ title, subtitle }) => {
  return (
    <Helmet>
      <title>
        {title ? `${title} | Tu Solucionario de Matemáticas` : 'Tu Solucionario de Matemáticas'}
      </title>
      {subtitle && <meta name='description' content={subtitle} />}
    </Helmet>
  );
};

export default Seo;
