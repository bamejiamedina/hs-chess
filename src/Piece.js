import { useState } from 'react';
import './App.css';

function Piece({ data }) {
  
  return (
    <div>
      {data && <img src={`${process.env.PUBLIC_URL}/${data.player}-${data.type}.svg`} alt={`${data.player} ${data.type}`} />}
    </div>
  );
}

export default Piece;