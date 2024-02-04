import './App.css';

function PieceDetails({ square }) {
  if (!square) {
    return <div>Select a square to see its piece details.</div>;
  }
  
  return (
    <div className='piece-details'>
      {square.piece && (
        <><h2>{square.piece.name}</h2><p>Type: {square.piece.type}</p><p>Attack: {square.piece.attack}</p><p>Health: {square.piece.health}</p><p>Notes: {square.piece.notes}</p><p>Player: {square.piece.player}</p></>
      )}
    </div>
  );
}

export default PieceDetails;