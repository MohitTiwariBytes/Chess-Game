import React from 'react';
import Chessboard from 'chessboardjsx';

const ChessboardComponent = ({ position, onDrop }) => {
  return (
    <Chessboard
      position={position}
      width={400}
      orientation="white"
      onDrop={onDrop}
      draggable={true} // Ensure pieces can be dragged
    />
  );
};

export default ChessboardComponent;
