import Navbar from "./components/Navbar";
import Products from "./pages/Products";

export default function App() {
  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh" }}>
      <Navbar />
      <Products />
    </div>
  );
}
