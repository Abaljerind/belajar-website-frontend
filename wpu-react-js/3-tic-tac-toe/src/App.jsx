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

  return (
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
  );
}
