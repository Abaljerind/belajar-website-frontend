export default function Footer({ items }) {
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
