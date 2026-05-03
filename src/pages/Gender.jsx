import React, { useEffect, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";

import {
  getGenderBySlug,
  categories as categoriesData,
} from "../data/categories";
import { getProductsByGender } from "../services/productService";

import PageHero from "../components/PageHero";
import ProductGrid from "../components/ProductGrid";
import Breadcrumb from "../components/Breadcrumb";
import NotFound from "./NotFound";
import useSEO from "../hook/useSEO";

const Gender = () => {
  const { slug } = useParams();
  const gender = getGenderBySlug(slug);

  const [sportFilter, setSportFilter] = useState("all");

  // SEO sempre prima
  useSEO(
    gender
      ? {
          title: `${gender.title} | Nike Sneaker`,
          description: gender.description,
          image: gender.image,
          jsonLd: {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: gender.title,
            description: gender.description,
            keywords: gender.keywords?.join(", "),
          },
        }
      : { title: "Sezione non trovata | Nike Sneaker" }
  );

  const [allProducts, setAllProducts] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);

  useEffect(() => {
    let isMounted = true;

    if (!gender) {
      return () => {
        isMounted = false;
      };
    }

    getProductsByGender(gender.slug)
      .then((products) => {
        if (isMounted) setAllProducts(products);
      })
      .finally(() => {
        if (isMounted) setIsLoadingProducts(false);
      });

    return () => {
      isMounted = false;
    };
  }, [gender]);

  const filtered = useMemo(() => {
    if (sportFilter === "all") return allProducts;
    return allProducts.filter((p) => p.category === sportFilter);
  }, [allProducts, sportFilter]);

  if (!gender) return <NotFound />;

  // Sport effettivamente presenti per questo gender
  const availableSports = [...new Set(allProducts.map((p) => p.category))];

  return (
    <>
      <PageHero
        eyebrow="Per Te"
        title={gender.title}
        description={gender.description}
        image={gender.image}
        bg={gender.bg}
        accent={gender.accent}
      />

      {/* Filtri sport */}
      <section className="w-full bg-[#0a0a0a] px-4 sm:px-6 lg:px-10 pt-12 lg:pt-16">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: "Per Te" },
              { label: gender.name },
            ]}
          />

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white">
                {filtered.length} {filtered.length === 1 ? "prodotto" : "prodotti"}
              </h2>
              <p className="text-white/50 text-sm mt-1">
                Tutta la collezione {gender.name.toLowerCase()}
              </p>
            </div>

            {/* Sport filter chips */}
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
              <button
                onClick={() => setSportFilter("all")}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide whitespace-nowrap transition-all ${
                  sportFilter === "all"
                    ? "bg-white text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Tutti gli sport
              </button>
              {categoriesData
                .filter((c) => availableSports.includes(c.slug))
                .map((c) => (
                  <button
                    key={c.slug}
                    onClick={() => setSportFilter(c.slug)}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide whitespace-nowrap transition-all flex items-center gap-1.5 ${
                      sportFilter === c.slug
                        ? "bg-white text-black"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    <i className={c.icon} />
                    {c.name}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="w-full bg-[#0a0a0a] px-4 sm:px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto">
          {isLoadingProducts ? (
            <LoadingGrid />
          ) : filtered.length > 0 ? (
            <ProductGrid products={filtered} animation="load" />
          ) : (
            <div className="text-center py-16">
              <i className="ri-search-line text-5xl text-white/20 mb-4 block" />
              <p className="text-white/60 text-lg">
                Nessun prodotto disponibile per questo filtro.
              </p>
              <button
                onClick={() => setSportFilter("all")}
                className="mt-6 bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-neutral-200 transition-colors"
              >
                Mostra tutti
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Cross-link to other gender */}
      <section className="w-full bg-[#0a0a0a] px-4 sm:px-6 lg:px-10 py-16 lg:py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/50 text-sm tracking-[2px] uppercase mb-4">
            Stai cercando altro?
          </p>
          <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-black uppercase mb-6">
            Esplora anche le altre collezioni
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categoriesData.length > 0 && ["uomo", "donna", "bambino"]
              .filter((slugItem) => slugItem !== gender.slug)
              .map((slugItem) => {
                const label = slugItem === "uomo" ? "Uomo" : slugItem === "donna" ? "Donna" : "Bambino";
                const icon = slugItem === "uomo" ? "ri-men-line" : slugItem === "donna" ? "ri-women-line" : "ri-emotion-happy-line";
                return (
                  <Link
                    key={slugItem}
                    to={`/genere/${slugItem}`}
                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide hover:bg-neutral-200 transition-colors"
                  >
                    <i className={icon} />
                    Collezione {label}
                    <i className="ri-arrow-right-line" />
                  </Link>
                );
              })}
          </div>
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

export default Gender;
