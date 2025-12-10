import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./pages/Products";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Products />
      </main>
      <Success />
      <Cancel />
    </div>
  );
}
