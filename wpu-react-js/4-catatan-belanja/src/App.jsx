import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import GroceryList from "./components/GroceryList";
import Footer from "./components/Footer";

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
      <Footer items={items} />
    </div>
  );
}
