import { useState } from "react";

export default function Form({ onAddItem }) {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    // guard clause -> untuk pengecekan apakah itemName ada isinya atau cuma string kosong, kalau kosong langsung keluar dari function ini sehingga data tidak dimasukkan.
    if (!itemName) return;

    const newItem = { itemName, itemQuantity, checked: false, id: Date.now() };
    onAddItem(newItem);

    setItemName("");
    setItemQuantity(1);
  }

  const quantityNum = [...Array(20)].map((_, index) => (
    <option value={index + 1} key={index + 1}>
      {index + 1}
    </option>
  ));
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select value={itemQuantity} onChange={(e) => setItemQuantity(+e.target.value)}>
          {quantityNum}
        </select>
        <input
          type="text"
          placeholder="nama barang..."
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </div>
      <button>Tambah</button>
    </form>
  );
}
