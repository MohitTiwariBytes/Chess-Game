import React from 'react';
import './Piece.css';

const pieceSymbols = {
  king: '♔',
  queen: '♕',
  rook: '♖',
  bishop: '♗',
  knight: '♘',
  pawn: '♙'
};

const Piece = ({ type, color }) => {
  const symbol = pieceSymbols[type];
  return <div className={`piece ${color}`}>{symbol}</div>;
};

export default Piece;
