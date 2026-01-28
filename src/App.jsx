import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh" }}>
      <Navbar />
      <Products />
      <Footer />
    </div>
  );
}
