import React, { useState, useEffect } from 'react';
import Board from './Board';

const AIGame = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (!xIsNext) {
      setTimeout(() => {
        const aiMove = getAiMove(squares);
        handleClick(aiMove);
      }, 500);
    }
  }, [xIsNext]);

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

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  const getAiMove = (squares) => {
    const emptySquares = squares.reduce(
      (acc, curr, index) => (!curr ? [...acc, index] : acc),
      []
    );
    return emptySquares[Math.floor(Math.random() * emptySquares.length)];
  };

  useEffect(() => {
    setWinner(calculateWinner(squares));
  }, [squares]);

  const getStatus = () => {
    const winner = calculateWinner(squares);
    if (winner) {
      return `Winner: ${winner}`;
    } else if (squares.every(Boolean)) {
      return 'Draw';
    } else {
      return `Next: ${xIsNext ? 'X' : 'O'}`;
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-700 flex flex-col items-center justify-center">
      <div>
        <h1 className="text-2xl text-gray-100 font-bold mb-4">
          Single Player Mode
        </h1>
        <div className="bg-gray-400 rounded-lg py-4 px-4">
          <Board squares={squares} onClick={handleClick} />
        </div>
        {(winner || squares.every(Boolean)) && (
          <button
            className="bg-gray-500 text-white rounded-md py-2 px-4 mt-4 hover:bg-gray-600"
            onClick={handleReset}
          >
            Play again
          </button>
        )}
        <h1 className="font-bold text-gray-100 mt-4">{getStatus()}</h1>
      </div>
    </div>
  );
};

export default AIGame;
