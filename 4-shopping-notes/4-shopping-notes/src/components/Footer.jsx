export default function Footer({ items }) {
  const totalItems = items.length;

  if (totalItems === 0) {
    return <footer className="stats">Daftar belanjaan kosong</footer>;
  }

  const checkedItems = items.filter((item) => item.checked).length;
  const percentageChecked = totalItems === 0 ? 0 : Math.round((checkedItems / totalItems) * 100);

  return (
    <footer className="stats">
      Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah dibeli ({percentageChecked}%)
    </footer>
  );
}
