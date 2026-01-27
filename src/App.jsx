import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import About from "./About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Products />
      <About />
      <Footer />
    </div>
  );
}
