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

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Footer items={items} />
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

function GroceryList({ items, onDeleteItem, onToggleItem, onClearItems }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  // if (sortBy === "input") {
  //   sortedItems = items;
  // }

  // if (sortBy === "name") {
  //   sortedItems = items.slice().sort((a, b) => a.itemName.localeCompare(b.itemName));
  // }

  // if (sortBy === "checked") {
  //   sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
  // }

  // sorting berdasarkan input, name & checked
  switch (sortBy) {
    case "name":
      sortedItems = items.slice().sort((a, b) => a.itemName.localeCompare(b.itemName));
      break;
    case "checked":
      sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
      break;
    default:
      sortedItems = items;
      break;
  }

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={onClearItems}>Bersihkan Daftar</button>
      </div>
    </>
  );
}

function Footer({ items }) {
  if (items.length === 0) return <footer className="stats">Daftar Belanja Kamu Masih Kosong!</footer>;

  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked === true).length;
  const percentage = Math.round((checkedItems / totalItems) * 100);

  return (
    <footer className="stats">
      Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah dibeli ({percentage}%)
    </footer>
  );
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
