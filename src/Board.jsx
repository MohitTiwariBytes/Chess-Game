import React from 'react';
import Square from './Square';
import Piece from './Piece';
import './Board.css';

const Board = () => {
  const initialPieces = [
    { type: 'rook', color: 'black', position: 0 },
    { type: 'knight', color: 'black', position: 1 },
    { type: 'bishop', color: 'black', position: 2 },
    { type: 'queen', color: 'black', position: 3 },
    { type: 'king', color: 'black', position: 4 },
    { type: 'bishop', color: 'black', position: 5 },
    { type: 'knight', color: 'black', position: 6 },
    { type: 'rook', color: 'black', position: 7 },
    { type: 'pawn', color: 'black', position: 8 },
    { type: 'pawn', color: 'black', position: 9 },
    { type: 'pawn', color: 'black', position: 10 },
    { type: 'pawn', color: 'black', position: 11 },
    { type: 'pawn', color: 'black', position: 12 },
    { type: 'pawn', color: 'black', position: 13 },
    { type: 'pawn', color: 'black', position: 14 },
    { type: 'pawn', color: 'black', position: 15 },
    { type: 'pawn', color: 'white', position: 48 },
    { type: 'pawn', color: 'white', position: 49 },
    { type: 'pawn', color: 'white', position: 50 },
    { type: 'pawn', color: 'white', position: 51 },
    { type: 'pawn', color: 'white', position: 52 },
    { type: 'pawn', color: 'white', position: 53 },
    { type: 'pawn', color: 'white', position: 54 },
    { type: 'pawn', color: 'white', position: 55 },
    { type: 'rook', color: 'white', position: 56 },
    { type: 'knight', color: 'white', position: 57 },
    { type: 'bishop', color: 'white', position: 58 },
    { type: 'queen', color: 'white', position: 59 },
    { type: 'king', color: 'white', position: 60 },
    { type: 'bishop', color: 'white', position: 61 },
    { type: 'knight', color: 'white', position: 62 },
    { type: 'rook', color: 'white', position: 63 }
  ];

  const renderSquare = (i) => {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const isBlack = (x + y) % 2 === 1;

    const piece = initialPieces.find(p => p.position === i);

    return (
      <Square key={i} isBlack={isBlack}>
        {piece && <Piece type={piece.type} color={piece.color} />}
      </Square>
    );
  };

  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i));
  }

  return <div className="board">{squares}</div>;
};

export default Board;
