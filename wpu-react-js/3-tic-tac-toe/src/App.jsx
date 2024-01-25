import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  // useState dibawah akan membuat array yang punya 9 space dengan nilai null. fill() digunakan untuk mengisi nilai pada array nya.
  // cara dibawah ini disebut lifting useState, karena komponen utama nya (Board()) akan mengetahui apa saja perubahan yang terjadi pada Square(), komponen turunan.
  const [squares, setSquares] = useState(Array(9).fill(null));

  // menambahkan useState untuk menentukan giliran
  const [xIsnext, setXIsNext] = useState(true); // nilai awal bernilai true karna giliran pertama adalah X

  function handleClick(i) {
    // pengkondisian untuk menentukan apakah square nya ada isinya atau tidak, kalo ada isinya maka tidak bisa diubah dan event onSquareClick berhenti, atau event onSquareClick bisa berhenti jika muncul pemenangnya yang mendapatkan data dari squares yang sudah di klik.
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();

    // pengkondisian untuk menentukan giliran
    // if (xIsnext) {
    //   nextSquares[i] = "X";
    // } else {
    //   nextSquares[i] = "O";
    // }

    // pengkondisian dengan ternary
    nextSquares[i] = xIsnext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsnext);
  }

  const winner = calculateWinner(squares);
  let status = "";
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsnext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// fungsi bantuan, logika untuk mencari pemenang, bukan bagian dari komponen, isinya bukan fitur react
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
    const a = lines[i][0]; // 0
    const b = lines[i][1]; // 1
    const c = lines[i][2]; // 2

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return false;
}
