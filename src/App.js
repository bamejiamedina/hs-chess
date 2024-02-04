import './App.css';
import { useState } from 'react';
import Board from './Board';
import PieceDetails from './PieceDetails';

function App() {
  const createInitialBoard = () => {
    const board = [];
    for (let i = 0; i < 8; i++) {
      const row = [];
      for (let j = 0; j < 8; j++) {
        if ((i === 0 && j === 0) || (i === 7 && j === 0)) {
          row.push({
            isOccupied: true,
            piece: {
              name: '',
              type: 'rook',
              player: 'black',
              attack: null,
              health: null,
              notes: ''
            }
          });
        } else if ((i === 0 && j === 7) || (i === 7 && j === 7)) {
          row.push({
            isOccupied: true,
            piece: {
              name: '',
              type: 'rook',
              player: 'white',
              attack: null,
              health: null,
              notes: ''
            }
          });
        } else if (j === 1) {
          row.push({
            isOccupied: true,
            piece: {
              name: '',
              type: 'pawn',
              player: 'black',
              attack: null,
              health: null,
              notes: ''
            }
          });
        } else if (j === 6) {
          row.push({
            isOccupied: true,
            piece: {
              name: '',
              type: 'pawn',
              player: 'white',
              attack: null,
              health: null,
              notes: ''
            }
          });
        } else if ((j === 0 && i === 1) || (j === 0 && i === 6)) {
          row.push({
            isOccupied: true,
            piece: {
              name: '',
              type: 'knight',
              player: 'black',
              attack: null,
              health: null,
              notes: ''
            }
          });
        } else if ((j === 7 && i === 1) || (j === 7 && i === 6)) {
          row.push({
            isOccupied: true,
            piece: {
              name: '',
              type: 'knight',
              player: 'white',
              attack: null,
              health: null,
              notes: ''
            }
          });
        } else if ((j === 7 && i === 2) || (j === 7 && i === 5)) {
          row.push({
            isOccupied: true,
            piece: {
              name: '',
              type: 'bishop',
              player: 'white',
              attack: null,
              health: null,
              notes: ''
            }
          });
        } else if ((j === 0 && i === 2) || (j === 0 && i === 5)) {
          row.push({
            isOccupied: true,
            piece: {
              name: '',
              type: 'bishop',
              player: 'black',
              attack: null,
              health: null,
              notes: ''
            }
          });
        } else if (j === 7 && i === 3) {
          row.push({
            isOccupied: true,
            piece: {
              name: '',
              type: 'queen',
              player: 'white',
              attack: null,
              health: null,
              notes: ''
            }
          });
        } else if (j === 0 && i === 3) {
          row.push({
            isOccupied: true,
            piece: {
              name: '',
              type: 'queen',
              player: 'black',
              attack: null,
              health: null,
              notes: ''
            }
          });
        } else if (j === 7 && i === 4) {
          row.push({
            isOccupied: true,
            piece: {
              name: '',
              type: 'king',
              player: 'white',
              attack: null,
              health: null,
              notes: ''
            }
          });
        } else if (j === 0 && i === 4) {
          row.push({
            isOccupied: true,
            piece: {
              name: '',
              type: 'king',
              player: 'black',
              attack: null,
              health: null,
              notes: ''
            }
          });
        } else {
          row.push({
            isOccupied: false,
            piece: null
          });
        }
      }
      board.push(row);
    }
    return board;
  }

  const [board, setBoard] = useState(createInitialBoard);
  const [selectedSquare, setSelectedSquare] = useState(null);

  const selectSquare = (square, coordinates) => {
    setSelectedSquare({...square, coordinates});
  };

  return (
    <div className="App">
      <div className="content">
        <Board board={board} selectSquare={selectSquare} selectedSquare={selectedSquare} />
        <PieceDetails square={selectedSquare} />
      </div>
    </div>
  );
}

export default App;