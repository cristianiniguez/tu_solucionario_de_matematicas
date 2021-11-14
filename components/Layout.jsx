import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <div className='layout'>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>

      <style jsx>{`
        .layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .layout main {
          flex-grow: 1;
        }
      `}</style>
    </>
  );
};

export default Layout;
