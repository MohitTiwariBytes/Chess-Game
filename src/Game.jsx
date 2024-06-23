import React, { useState } from 'react';
import { Chess } from 'chess.js';
import ChessboardComponent from './Chessboard';

const Game = () => {
  const [chess] = useState(new Chess());
  const [board, setBoard] = useState(chess.fen());

  const handleMove = ({ sourceSquare, targetSquare }) => {
    const move = chess.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q', // Example: promote to queen, adjust as needed
    });

    if (move !== null) {
      setBoard(chess.fen());
      setTimeout(makeBotMove, 500); // Example: Make bot move after a delay
    }
  };

  const makeBotMove = () => {
    const moves = chess.moves();
    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    chess.move(randomMove);
    setBoard(chess.fen());
  };

  return (
    <div>
      <ChessboardComponent position={board} onDrop={handleMove} />
    </div>
  );
};

export default Game;
