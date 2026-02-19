import React, { useState } from "react";

function Card({ title, children, className }) {
  const [purchased, setPurchased] = useState(false);

  function handleBuy() {
    setPurchased(true);
  }

  return (
    <div className={`card ${className || ""}`}>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div className="card-content">{children}</div>
        <div className="card-actions">
          <button className="btn" onClick={handleBuy} disabled={purchased}>
            {purchased ? "Purchased" : "Buy"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
