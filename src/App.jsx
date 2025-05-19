import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Products from "./components/Products";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel";
function App() {
  return (
    <>
      <Header />
      <HeroSection />
      {/* <Products /> */}
      <ProductsSection />
      <ImageCarousel />
    </>
  );
}

export default App;
