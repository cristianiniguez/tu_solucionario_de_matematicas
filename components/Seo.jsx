import Head from 'next/head';

const Seo = ({ title, description }) => {
  const siteTitle = 'Tu Solucionario de Matemáticas';
  return (
    <Head>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta
        name='description'
        content={
          description || 'Cursos de matemáticas gratis para estudiantes escolares y universitarios'
        }
      />
      <link rel='icon' href='/img/favicon.svg' />
    </Head>
  );
};

export default Seo;
