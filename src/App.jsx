import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000000",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Navbar />

      <main style={{ flex: 1 }}>
        <Products />
      </main>

      <Footer />
    </div>
  );
}
