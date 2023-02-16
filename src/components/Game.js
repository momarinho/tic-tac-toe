import React, { useState } from 'react';

import Board from './Board';

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    if (winner || squares[index]) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[index] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(squares);

  const getStatus = () => {
    if (winner) {
      return `Winner: ${winner}`;
    } else if (squares.every(Boolean)) {
      return 'Draw';
    } else {
      return `Next: ${xIsNext ? 'X' : 'O'}`;
    }
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">TicTacToe</h1>
      <Board squares={squares} onClick={handleClick} />
      {(winner || squares.every(Boolean)) && (
        <button
          className="bg-gray-500 text-white rounded-md py-2 px-4 mt-4 hover:bg-gray-700"
          onClick={handleReset}
        >
          Play again
        </button>
      )}
      <h1>{getStatus()}</h1>
    </div>
  );
};

export default Game;
