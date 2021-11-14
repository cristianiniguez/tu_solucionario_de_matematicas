import clsx from 'clsx';

const Container = ({ children, className = null, maxWidth = 1024 }) => {
  return (
    <>
      <div className={clsx(className, 'container')}>{children}</div>

      <style jsx>{`
        .container {
          max-width: ${maxWidth}px;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
};

export default Container;
