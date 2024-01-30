// komponen footer
export default function Footer({ items }) {
  // guard clause -> agar jika tidak ada items didalam GroceryList, kalimat pada footer berbeda
  if (items.length === 0) {
    return <footer className="stats">Daftar belanja masih kosong!</footer>;
  }

  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked === true).length;
  const percentage = Math.round((checkedItems / totalItems) * 100);

  return (
    <footer className="stats">
      Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah
      dibeli ({percentage}%)
    </footer>
  );
}
