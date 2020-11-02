import React from 'react';

const Paragraph = ({ className, children }) =>
  children.split(/\n+/).map((part, id) => (
    <p key={id} className={className}>
      {part}
    </p>
  ));
export default Paragraph;
