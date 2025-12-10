import React from "react";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <div className="mark">VS</div>
        <div className="text">Veselības Starts</div>
      </div>
      <nav>
        <a href="#products" style={{ marginRight: 12 }}>Produkti</a>
        <a href="#contact">Kontakti</a>
      </nav>
    </header>
  );
}
