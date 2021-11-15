import Seo from '../components/Seo';
import Layout from '../components/Layout';
import { Hero } from '../sections';

const HomePage = () => {
  return (
    <>
      <Seo />
      <Layout>
        <Hero />
      </Layout>
    </>
  );
};

export default HomePage;
