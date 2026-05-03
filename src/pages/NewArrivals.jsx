import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import ProductGrid from "../components/ProductGrid";
import useSEO from "../hook/useSEO";
import { getNewArrivals } from "../services/productService";

const NewArrivals = () => {
  useSEO({
    title: "Novità | Nike Sneaker",
    description:
      "Scopri le nuove uscite Nike: sneaker, apparel e attrezzatura selezionati per sport e lifestyle.",
    image: "/images/jordan.png",
  });

  const [newProducts, setNewProducts] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);

  useEffect(() => {
    let isMounted = true;

    getNewArrivals(12)
      .then((products) => {
        if (isMounted) setNewProducts(products);
      })
      .finally(() => {
        if (isMounted) setIsLoadingProducts(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <section className="w-full bg-gradient-to-br from-[#0a0a0a] via-[#111827] to-[#0a0a0a] pt-28 sm:pt-32 lg:pt-40 pb-12 lg:pb-16 px-4 sm:px-6 lg:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Novità" }]} />
          <span className="text-white/40 text-xs tracking-[3px] uppercase">Nuove uscite</span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[86px] font-black uppercase text-white leading-[1.02] mt-2 tracking-[-1px] lg:tracking-[-2px]">
            Appena
            <br /> arrivati.
          </h1>
          <p className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed mt-5 lg:mt-7 max-w-2xl">
            Una selezione pulita delle uscite più fresche: performance, training, running, basket e lifestyle pronti per il prossimo movimento.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/collezione"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-black uppercase tracking-wide hover:bg-neutral-200 transition-colors"
            >
              Tutta la collezione
              <i className="ri-arrow-right-line" />
            </Link>
            <Link
              to="/outlet"
              className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-full text-sm font-black uppercase tracking-wide border border-white/10 hover:bg-white/15 transition-colors"
            >
              Guarda Outlet
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#0a0a0a] px-4 sm:px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <p className="text-white/50 text-sm tracking-[2px] uppercase">Drop selezionati</p>
              <h2 className="text-white text-2xl sm:text-4xl font-black uppercase mt-1">
                {newProducts.length} prodotti novità
              </h2>
            </div>
          </div>

          {isLoadingProducts ? <LoadingGrid /> : <ProductGrid products={newProducts} animation="load" />}
        </div>
      </section>
    </>
  );
};

const LoadingGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
    {Array.from({ length: 4 }).map((_, index) => (
      <div key={index} className="h-[360px] rounded-3xl bg-white/[0.055] border border-white/10 animate-pulse" />
    ))}
  </div>
);

export default NewArrivals;
