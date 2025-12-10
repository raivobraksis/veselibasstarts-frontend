import React from "react";

export default function ProductCard({ product }) {
  const handleCheckout = async () => {
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId: product.priceId })
      });
      const data = await res.json();
      if (data.url) {
        window.location = data.url;
      }
    } catch (err) {
      console.error("Stripe Checkout error:", err);
    }
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
