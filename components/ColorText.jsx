const ColorText = ({ children, as = 'span', color }) => {
  const Tag = as;

  return (
    <>
      <Tag className='color-text'>{children}</Tag>

      <style jsx>{`
        .color-text {
          color: ${color};
        }
      `}</style>
    </>
  );
};

export default ColorText;
