import React from "react";
import Card from "./Card";
import "./Task2.css";

const products = [
  { id: 1, name: "Widget", price: 9.99 },
  { id: 2, name: "Gadget", price: 14.99 },
];

function ProductList() {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <Card key={product.id} title={product.name}>
          <p className="price">Price: ${product.price.toFixed(2)}</p>
        </Card>
      ))}
    </div>
  );
}

export default ProductList;
