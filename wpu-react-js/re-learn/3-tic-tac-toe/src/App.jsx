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
  const [xIsNext, setXIsNext] = useState(true);

  function hanldeClick(i) {
    // cek apakah squares nya sudah ada isinya atau belum, kalau sudah ada jangan diubah
    if (squares[i]) return;

    const nextSquares = squares.slice();
    // cek apakah xIsNext bernilai true? untuk mengganti giliran antara X dan O
    // if (xIsNext === true) {
    //   nextSquares[i] = "X";
    // } else {
    //   nextSquares[i] = "O";
    // }
    nextSquares[i] = xIsNext === true ? "X" : "O";

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
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
