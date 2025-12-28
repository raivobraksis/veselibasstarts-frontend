import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <div className="container">
      <h2>Produkti</h2>

      <ProductCard
        title="Individuāls uztura plāns"
        price="50"
        image="/images/uzturs.jpg"
        link="https://buy.stripe.com/eVq6oJ0Dv7KD3nSegq3Nm04"
      />

      <ProductCard
        title="Treniņu plāns zālei (8 nedēļas)"
        price="30"
        image="/images/trenins.jpg"
        link="https://buy.stripe.com/9B6dRbgCtfd51fK8W63Nm03"
      />

      <ProductCard
        title="Treniņu plāns mājām (8 nedēļas)"
        price="30"
        image="/images/homegym3.jpg"
        link="https://buy.stripe.com/3cIaEZ1Hzd4XcYsc8i3Nm01"
      />

      <ProductCard
        title="Recepšu grāmata (30 receptes)"
        price="30"
        image="/images/recipe.jpg"
        link="https://buy.stripe.com/bJecN771T1mfe2w6NY3Nm02"
      />

      <ProductCard
        title="Svētku receptes (Ziemassvētki / Jaunais gads)"
        price="10"
        image="/images/ziemassvetki.jpg"
        link="https://buy.stripe.com/7sYaEZae54yr9Mg4FQ3Nm00"
      />
    </div>
  );
}