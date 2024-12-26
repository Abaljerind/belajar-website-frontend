import { useState } from "react";

const groceryItems = [
  {
    id: 1,
    itemName: "Kopi Bubuk",
    itemQuantity: 2,
    checked: true,
  },
  {
    id: 2,
    itemName: "Gula Pasir",
    itemQuantity: 5,
    checked: false,
  },
  {
    id: 3,
    itemName: "Air Mineral",
    itemQuantity: 3,
    checked: false,
  },
];

export default function App() {
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Catatan Belanjaku 📝</h1>;
}

function Form({ onAddItem }) {
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

function GroceryList({ items, onDeleteItem, onToggleItem }) {
  return (
    <>
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button>Bersihkan Daftar</button>
      </div>
    </>
  );
}

function Footer() {
  return <footer className="stats">Ada 10 barang di daftar belanjaan, 5 barang sudah dibeli (50%)</footer>;
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li key={item.id}>
      <input type="checkbox" checked={item.checked} onChange={() => onToggleItem(item.id)} />
      <span style={item.checked ? { textDecoration: "line-through" } : {}}>
        {item.itemQuantity} {item.itemName}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>&times;</button>
    </li>
  );
}
