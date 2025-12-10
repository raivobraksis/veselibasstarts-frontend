import React from "react";

export default function ProductCard({ product }) {
  const handleCheckout = () => {
    alert(`Šis būtu pirkums: ${product.name} (${product.price} EUR)`);
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="row">
        <span>{product.price} EUR</span>
        <button className="btn btn-primary" onClick={handleCheckout}>Pirkt</button>
      </div>
    </div>
  );
}
