import React from 'react';
import './Square.css';

const Square = ({ isBlack, children }) => {
  const className = isBlack ? 'square black' : 'square white';
  return <div className={className}>{children}</div>;
};

export default Square;
