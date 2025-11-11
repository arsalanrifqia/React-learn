import { useState } from "react";
import Item from "./Item";

export default function GroceryList({ items, onClearList, onDeleteItem, onToggleChecked }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems = [...items];

  switch (sortBy) {
    case "name":
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "checked":
      sortedItems.sort((a, b) => a.checked - b.checked);
      break;
    default:
      // "input" - tidak perlu di-sort
      break;
  }

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleChecked={onToggleChecked} />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan cecklist</option>
        </select>
        <button onClick={onClearList}>Bersihkan Daftar</button>
      </div>
    </>
  );
}
