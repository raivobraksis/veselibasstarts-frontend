import ProductCard from "../components/ProductCard.jsx";

export default function Products() {
  return (
    <div className="container">
      <h2>Produkti</h2>

      <ProductCard title="Individuāls uztura plāns" price="50" />
      <ProductCard title="Treniņu plāns zālei (8 ned.)" price="30" />
      <ProductCard title="Treniņu plāns mājām (8 ned.)" price="30" />
      <ProductCard title="Recepšu grāmata (30 receptes)" price="30" />
      <ProductCard title="Svētku receptes (Ziemassvētki/Jaunais gads)" price="10" />
    </div>
  );
}