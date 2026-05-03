import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Category from "./pages/Category";
import Gender from "./pages/Gender";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import NewArrivals from "./pages/NewArrivals";
import Outlet from "./pages/Outlet";

const App = () => {
  const [loading, setLoading] = useState(true);
  const handleLoaderComplete = () => setLoading(false);

  return (
    <>
      <ScrollToTop />
      {loading && <Loader onComplete={handleLoaderComplete} />}

      <div
        className={`min-h-screen w-screen overflow-x-hidden relative transition-opacity duration-500 ${
          !loading ? "opacity-100" : "opacity-0"
        }`}
      >
        <header className="absolute top-0 left-0 right-0 px-4 py-4 sm:px-6 sm:py-5 lg:px-10 z-50">
          <Navbar isLoaded={!loading} />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home isLoaded={!loading} />} />
            <Route path="/collezione" element={<Collection />} />
            <Route path="/novita" element={<NewArrivals />} />
            <Route path="/outlet" element={<Outlet />} />
            <Route path="/carrello" element={<Cart />} />
            <Route path="/sport/:slug" element={<Category />} />
            <Route path="/genere/:slug" element={<Gender />} />
            <Route path="/prodotto/:slug" element={<ProductDetail />} />
            <Route path="/chi-siamo" element={<About />} />
            <Route path="/contatti" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;
