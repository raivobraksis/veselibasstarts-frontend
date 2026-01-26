import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <div
      style={{
        padding: "60px 20px",
        background: "#000",
        minHeight: "100vh"
      }}
    >
      <ProductCard stripeLink="https://buy.stripe.com/TAVS_LINKS" />
    </div>
  );
}
