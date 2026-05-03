import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import ProductGrid from "../components/ProductGrid";
import useSEO from "../hook/useSEO";
import { getOutletProducts } from "../services/productService";

const Outlet = () => {
  useSEO({
    title: "Outlet | Nike Sneaker",
    description:
      "Scopri la selezione Outlet: prodotti Nike e sportivi con prezzo ribassato, senza perdere stile e performance.",
    image: "/images/tempo-2.png",
  });

  const [outletProducts, setOutletProducts] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);

  useEffect(() => {
    let isMounted = true;

    getOutletProducts()
      .then((products) => {
        if (isMounted) setOutletProducts(products);
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
      <section className="w-full bg-gradient-to-br from-[#09090b] via-[#3f1d1d] to-[#0a0a0a] pt-28 sm:pt-32 lg:pt-40 pb-12 lg:pb-16 px-4 sm:px-6 lg:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Outlet" }]} />
          <span className="text-white/40 text-xs tracking-[3px] uppercase">Selezione Outlet</span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[86px] font-black uppercase text-white leading-[1.02] mt-2 tracking-[-1px] lg:tracking-[-2px]">
            Prezzi
            <br /> più leggeri.
          </h1>
          <p className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed mt-5 lg:mt-7 max-w-2xl">
            Una pagina dedicata ai prodotti ribassati: stessa estetica premium, più convenienza, zero rumore visivo.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/collezione"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-black uppercase tracking-wide hover:bg-neutral-200 transition-colors"
            >
              Torna allo shop
              <i className="ri-arrow-right-line" />
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#0a0a0a] px-4 sm:px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <p className="text-white/50 text-sm tracking-[2px] uppercase">Occasioni selezionate</p>
              <h2 className="text-white text-2xl sm:text-4xl font-black uppercase mt-1">
                {outletProducts.length} prodotti outlet
              </h2>
            </div>
          </div>

          {isLoadingProducts ? (
            <LoadingGrid />
          ) : outletProducts.length > 0 ? (
            <ProductGrid products={outletProducts} animation="load" />
          ) : (
            <div className="text-center py-16 bg-white/5 rounded-3xl border border-white/10">
              <p className="text-white/60 text-lg">Nessun prodotto outlet disponibile al momento.</p>
            </div>
          )}
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

export default Outlet;
