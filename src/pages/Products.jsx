import React from "react";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const products = [
    {
      name: "Individuālais uztura plāns",
      description: "Personalizēts uztura plāns pēc pasūtījuma",
      price: 50,
      priceId: import.meta.env.VITE_PRICE_NUTRITION,
      image: "/placeholder.png"
    },
    {
      name: "Treniņu plāns mājās",
      description: "8 nedēļu treniņu programma mājās",
      price: 30,
      priceId: import.meta.env.VITE_PRICE_TRAIN_HOME,
      image: "/placeholder.png"
    },
    {
      name: "Treniņu plāns zālē",
      description: "8 nedēļu treniņu programma zālē",
      price: 30,
      priceId: import.meta.env.VITE_PRICE_TRAIN_GYM,
      image: "/placeholder.png"
    },
    {
      name: "Recepšu grāmata – 30 receptes",
      description: "Garšīgas un veselīgas receptes",
      price: 30,
      priceId: import.meta.env.VITE_PRICE_RECIPES_30,
      image: "/placeholder.png"
    },
    {
      name: "Svētku receptes (Ziemassvētki / Jaunais gads)",
      description: "Īpašas sezonas receptes",
      price: 10,
      priceId: import.meta.env.VITE_PRICE_HOLIDAY,
      image: "/placeholder.png"
    }
  ];

  return (
    <section className="products" id="products">
      {products.map((p, idx) => (
        <ProductCard key={idx} product={p} />
      ))}
    </section>
  );
}
