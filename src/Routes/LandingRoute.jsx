import "../App.css";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Products from "../components/Products";
import ProductsSection from "../components/ProductsSection/ProductsSection";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
import SpecialtySection from "../components/SpecialtySection";
import ClientsSection from "../components/ClientsSection";
import Footer from "../components/Footer";

const LandingRoute = () => {
  return (
     <>
      <Header />
      <HeroSection />
      {/* <Products /> */}
      <ProductsSection />
      <ImageCarousel />
      <SpecialtySection />
      <ClientsSection />
      <Footer />
    </>
  )
}

export default LandingRoute