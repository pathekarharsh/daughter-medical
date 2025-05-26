import React, { useEffect, useState } from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import LandingRoute from "./Routes/LandingRoute";
import AboutRoute from "./Routes/AboutRoute";
import ServiceRoute from "./Routes/ServiceRoute";
import ContactRoute from "./Routes/ContactRoute";
import BlogRoute from "./Routes/BlogRoute";
import PdtRoute from "./Routes/PdtRoute";
import { FaWhatsapp, FaCircleNotch } from "react-icons/fa";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (2s timeout, adjust if needed)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center bg-white">
        <FaCircleNotch className="animate-spin text-orange-500 text-5xl" />
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingRoute />} />
        <Route path="/about" element={<AboutRoute />} />
        <Route path="/service" element={<ServiceRoute />} />
        <Route path="/blog" element={<BlogRoute />} />
        <Route path="/contact" element={<ContactRoute />} />
        <Route path="/product" element={<PdtRoute />} />
      </Routes>

      {/* Sticky WhatsApp Chat Button with Hover Label */}
      <a
        href="https://wa.me/917620698897"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group flex items-center space-x-2"
      >
        <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300">
          <FaWhatsapp className="text-2xl" />
        </div>
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-green-600 px-3 py-1 rounded-full shadow text-sm font-medium">
          Chat
        </span>
      </a>
    </>
  );
}

export default App;
