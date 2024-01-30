import { useState } from "react";

// komponen Form
export default function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  // function untuk menangani perubahan state
  function handleSubmit(e) {
    e.preventDefault();

    // guard clause => menjaga sebelum user melakukan sesuatu pada field input, jika masih kosong maka tidak ada data yang diinput.
    if (name === "") {
      return;
    }

    const newItem = {
      name: name,
      quantity: quantity,
      checked: false,
      id: Date.now(),
    };
    onAddItem(newItem);

    console.log(newItem);

    // set ulang nilai name dan quantity nya
    setName("");
    setQuantity(1);
  }

  // membuat array untuk jumlah barang yang mau di beli, _, i adalah parameter map, _ untuk nilai yang mau diinput didalam array tapi karna _ maka artinya dikosongkan, i untuk index nya, karna yang mau dipakai adalah index nya agar dibuat pengulangan dari 1 sampai 20, itu sebabnya i + 1 agar mulainya dari 1 sampai 20.
  const quantityNum = [...Array(20)].map((_, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ));

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {quantityNum}
        </select>
        <input
          type="text"
          placeholder="nama barang..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button>Tambah</button>
    </form>
  );
}
