import { useState } from "react";

function Square() {
  const [value, setValue] = useState("");

  // handleClick digunakan untuk menghandle ketika button square di klik untuk memunculkan tampilan X / O nantinya.
  // handleClick wajib dibuat didalam function Square() karna akan digunakan oleh function Square()
  function handleClick() {
    setValue("X");
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <div className="board">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
}
