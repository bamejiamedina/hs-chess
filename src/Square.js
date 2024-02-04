import { useState } from 'react';
import Piece from './Piece';
import './App.css';

function Square({ data, selectSquare, selectedSquare, coordinates }) {
  const selected = selectedSquare && coordinates[0] === selectedSquare.coordinates[0] && coordinates[1] === selectedSquare.coordinates[1];

  return (
<div className={`square ${selected ? 'selected' : ''}`} onClick={() => {
    selectSquare(data, coordinates);
    console.log('data: ', data.i, data.j);
    console.log('coordinates: ', coordinates);
    }}>
      {data.isOccupied && <Piece data={data.piece} />}
    </div>
  );
}

export default Square;