// parent component
import React, { useState, useEffect } from "react";

function App() {
  // useState
  // kiri -> getter
  // kanan -> setter
  // didalam tanda kurung useState() -> nilai default dari state yang kita punya
  // state -> anggap saja data sementara, bisa tipe data apa saja
  const [getPacarSaya, setPacarSaya] = useState(1);

  const [getNamaPacar, setNamaPacar] = useState("");
  // useEffect() -> untuk render setiap perubahan object yang terjadi didalam browsernya.
  useEffect(() => {
    if (getPacarSaya === 1) {
      setNamaPacar("Alisa");
    } else {
      setNamaPacar("uhuy");
    }
  }, [getPacarSaya]);

  return (
    <>
      <h5>nama pacar: {getNamaPacar}</h5>
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
