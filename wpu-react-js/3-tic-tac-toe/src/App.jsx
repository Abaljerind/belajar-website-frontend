import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  // useState dibawah akan membuat array yang punya 9 space dengan nilai null. fill() digunakan untuk mengisi nilai pada array nya.
  // cara dibawah ini disebut lifting state up, karena komponen utama nya (Board()) akan mengetahui apa saja perubahan yang terjadi pada Square(), komponen turunan.
  // const [squares, setSquares] = useState(Array(9).fill(null)); // => diganti dengan useState untuk history, jadi di lifting state up lagi.

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
    nextSquares[i] = xIsNext ? "X" : "O";

    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status = "";
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
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

// membuat komponen baru sebagai pembungkus yang paling atas untuk fungsi history
export default function Game() {
  // menambahkan useState untuk menentukan giliran
  // const [xIsnext, setXIsNext] = useState(true); // nilai awal bernilai true karna giliran pertama adalah X

  // useState untuk history
  const [history, setHistory] = useState([Array(9).fill(null)]);

  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    // dibawah ini, mengcopy array dan menambahkan array baru di akhirnya.
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const moves = history.map((squares, move) => {
    let description = "";
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
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
