import { useState } from "react";

// data belanja dalam bentuk array
const groceryItems = [
  {
    id: 1,
    name: "Kopi Bubuk",
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: "Gula Pasir",
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: "Air Mineral",
    quantity: 3,
    checked: false,
  },
];

export default function App() {
  // lifting state up agar Form dan GroceryList bisa saling mengirim data
  const [items, setItems] = useState(groceryItems);

  // function untuk menangani ketika adanya perubahan, ketika berhasil menambahkan item baru dari form
  function handleAddItem(item) {
    setItems([...items, item]); // artinya, menduplikasi array items menjadi array baru bernama 'item', agar array items tidak berubah ketika ada penambahan item baru. sehingga array item yg baru akan ditimpa oleh data item yang baru dimasukkan lewat form. Cara duplikasi array nya, di spread dulu items nya dengan '...items' jadi array baru yang isinya persis sama dengan array items dari useState, lalu di akhir ditambahkan elemen baru si 'item', sehingga akan dibuat array baru yang ditambah satu datanya dibelakang, pada array item.
  }

  function handleDeleteItem(id) {
    // setItems carikan data dari items dengan filter menjadi satu satu dengan nama 'item', lalu item tadi di cari yang id nya tidak sama dengan id pada parameter handleDeleteItem.
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
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
      <Footer />
    </div>
  );
}

// komponen Header
function Header() {
  return <h1>Catatan Belanjaku 📝</h1>;
}

// komponen Form
function Form({ onAddItem }) {
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

// komponen GroceryList
function GroceryList({ items, onDeleteItem, onToggleItem, onClearItems }) {
  return (
    <>
      <div className="list">
        <ul>
          {items.map((item) => (
            // mengirim props nya ke komponen Item
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={onClearItems}>Bersihkan Daftar</button>
      </div>
    </>
  );
}

// komponen item untuk looping item dengan map(), karna ada diluar komponen utama, maka perlu menerima data dari komponen utama nya lewat props 'item'.
function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li key={item.id}>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.checked ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.name}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>&times;</button>
    </li>
  );
}

// komponen footer
function Footer() {
  return (
    <footer className="stats">
      Ada 10 barang di daftar belanjaan, 5 barang sudah dibeli (50%)
    </footer>
  );
}
