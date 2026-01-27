import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import About from "./About";

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
