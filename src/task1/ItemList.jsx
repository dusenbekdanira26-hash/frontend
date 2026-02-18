import React from "react";

function ItemList({ items, onRemove }) {
  return (
    <ul className="item-list">
      {items.map((item) => (
        <li key={item.id} className="item-row">
          <span className="item-name">{item.name}</span>
          <div className="item-actions">
            <button className="btn btn-small" onClick={() => onRemove(item.id)}>
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
