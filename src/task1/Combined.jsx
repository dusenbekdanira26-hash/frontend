import React, { useState } from "react";
import ItemList from "./ItemList";
import "./Task1.css";

const initialItems = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
];

function Combined() {
  const [items, setItems] = useState(initialItems);

  function handleRemove(id) {
    setItems((prev) => prev.filter((it) => it.id !== id));
  }

  function handleAdd() {
    const nextId = items.length ? Math.max(...items.map((i) => i.id)) + 1 : 1;
    const names = ["Mango", "Pear", "Grapes", "Plum", "Kiwi"];
    const name = names[Math.floor(Math.random() * names.length)];
    setItems((prev) => [...prev, { id: nextId, name }]);
  }

  return (
    <section className="task1-panel">
      <div className="task1-header">
        <h2>Fruit List</h2>
        <div>
          <button className="btn" onClick={handleAdd}>
            Add random
          </button>
        </div>
      </div>

      <ItemList items={items} onRemove={handleRemove} />

      <p className="total">Total: {items.length} items</p>
    </section>
  );
}

export default Combined;
