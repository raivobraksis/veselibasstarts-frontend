import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import About from "./pages/about";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";

export default function App() {
  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh" }}>
      <Navbar />
      <Products />
      <About />
      <Footer />
      <ProductCard />
    </div>
  );
}
