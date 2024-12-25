import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function hanldeClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    <div className="board">
      <Square value={squares[0]} onSquareClick={() => hanldeClick(0)} />
      <Square value={squares[1]} onSquareClick={() => hanldeClick(1)} />
      <Square value={squares[2]} onSquareClick={() => hanldeClick(2)} />
      <Square value={squares[3]} onSquareClick={() => hanldeClick(3)} />
      <Square value={squares[4]} onSquareClick={() => hanldeClick(4)} />
      <Square value={squares[5]} onSquareClick={() => hanldeClick(5)} />
      <Square value={squares[6]} onSquareClick={() => hanldeClick(6)} />
      <Square value={squares[7]} onSquareClick={() => hanldeClick(7)} />
      <Square value={squares[8]} onSquareClick={() => hanldeClick(8)} />
    </div>
  );
}

export default Board;
