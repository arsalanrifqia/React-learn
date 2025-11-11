import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import GroceryList from "./GroceryList";
import Footer from "./Footer";

const groceryItems = [
  { id: 1, name: "Kopi", quantity: 1, checked: true },
  { id: 2, name: "Gula Pasir", quantity: 5, checked: false },
  { id: 3, name: "Air Mineral", quantity: 3, checked: false },
];

export default function App() {
  const [items, setItems] = useState(groceryItems);

  function handdleAddItem(item) {
    setItems([...items, item]);
  }

  function handleClearList() {
    setItems([]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleChecked(id) {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handdleAddItem} />
      <GroceryList items={items} onClearList={handleClearList} onDeleteItem={handleDeleteItem} onToggleChecked={handleToggleChecked} />
      <Footer items={items} />
    </div>
  );
}
