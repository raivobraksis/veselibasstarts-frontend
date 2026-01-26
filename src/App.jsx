import Navbar from "./components/Navbar";
import CookieBanner from "./components/CookieBanner";
import Products from "./pages/Products";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000000",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <Navbar />
      <Products />
      <CookieBanner />
    </div>
  );
}
