// parent component
import React, { useState } from "react";

function App() {
  // kiri -> getter
  // kanan -> setter
  // didalam tanda kurung useState() -> nilai default dari state yang kita punya
  // state -> anggap saja data sementara, bisa tipe data apa saja
  const [getPacarSaya, setPacarSaya] = useState(1);

  return (
    <>
      <h1>saya punya: {getPacarSaya} pacar.</h1>
      {/* pada function setPacarSaya() dibawah, terdapat callback function untuk menambah data dengan parameter "previousData" */}
      <button onClick={() => setPacarSaya((previousData) => previousData + 1)}>
        Tambah pacar
      </button>

      <button
        onClick={() =>
          setPacarSaya((previousData) =>
            previousData === 0 ? 0 : previousData - 1
          )
        }
      >
        Putusin pacar
      </button>
    </>
  );
}

export default App;
