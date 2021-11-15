import clsx from 'clsx';

const Title = ({ children, className, center, as = 'h1' }) => {
  const Tag = as;

  return (
    <>
      <Tag className={clsx('title', className)}>{children}</Tag>

      <style jsx>{`
        .title {
          font-family: var(--font-titles);
          ${center ? 'text-align: center;' : ''}
        }
      `}</style>
    </>
  );
};

export default Title;
