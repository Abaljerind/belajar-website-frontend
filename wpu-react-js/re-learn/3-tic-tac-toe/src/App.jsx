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
    if (squares[i] || calculateWinner(squares)) return;

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

  const winner = calculateWinner(squares);
  let status = "";
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
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
    </>
  );
}

// fungsi pencari pemenang
function calculateWinner(squares) {
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
    // const a = lines[i][0]; // looping pertama, 0
    // const b = lines[i][1]; // looping kedua, 1
    // const c = lines[i][2]; // looping ketiga, 2

    // dengan teknik destructuring
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[c]) {
      return squares[a];
    }
  }

  return false;
}

export default Board;
