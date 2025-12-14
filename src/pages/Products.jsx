import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <div className="container">
      <h2>Produkti</h2>

      <ProductCard
        title="Individuāls uztura plāns"
        price="50"
        image="/images/uzturs.jpg"
      />

      <ProductCard
        title="Treniņu plāns zālei (8 nedēļas)"
        price="30"
        image="/images/trenins.jpg"
      />

      <ProductCard
        title="Treniņu plāns mājām (8 nedēļas)"
        price="30"
        image="/images/trenins.jpg"
      />

      <ProductCard
        title="Recepšu grāmata (30 receptes)"
        price="30"
        image="/images/uzturs.jpg"
      />

      <ProductCard
        title="Svētku receptes (Ziemassvētki / Jaunais gads)"
        price="10"
        image="/images/ziemassvetki.jpg"
      />
    </div>
  );
}