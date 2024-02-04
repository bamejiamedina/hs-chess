import Square from './Square';
import { useEffect, useState } from 'react';
import './App.css';

function Board({ board, selectSquare, selectedSquare }) {

  return (
    <div className='board'>
      {board.map((row, i) => (
        <div key={i}>
          {row.map((square, j) => (
            <Square
              key={j}
              data={square}
              selectSquare={selectSquare}
              selectedSquare={selectedSquare}
              coordinates={[i, j]} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;