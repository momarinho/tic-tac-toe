import React from 'react';

import Square from './Square';

export default function Board({ squares, onClick }) {
  const renderSquare = (index) => {
    return <Square value={squares[index]} onClick={() => onClick(index)} />;
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
    </div>
  );
}
