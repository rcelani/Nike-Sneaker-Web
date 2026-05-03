import React, { useEffect, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";

import {
  getCategoryBySlug,
  categories as categoriesData,
  genders as gendersData,
} from "../data/categories";
import { getProductsByCategory } from "../services/productService";
import { getProductTypeLabel } from "../data/productTypes";
import { getArticlesByCategory } from "../data/articles";

import PageHero from "../components/PageHero";
import ProductGrid from "../components/ProductGrid";
import Breadcrumb from "../components/Breadcrumb";
import NotFound from "./NotFound";
import useSEO from "../hook/useSEO";

const Category = () => {
  const { slug } = useParams();
  const category = getCategoryBySlug(slug);

  const [genderFilter, setGenderFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  // Always call hooks first
  useSEO(
    category
      ? {
          title: `${category.title} | Nike Sneaker`,
          description: category.shortDescription,
          image: category.image,
          jsonLd: {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: category.title,
            description: category.shortDescription,
            keywords: category.keywords?.join(", "),
          },
        }
      : { title: "Sport non trovato | Nike Sneaker" }
  );

  const [allProducts, setAllProducts] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);

  useEffect(() => {
    let isMounted = true;

    if (!category) {
      return () => {
        isMounted = false;
      };
    }

    getProductsByCategory(category.slug)
      .then((products) => {
        if (isMounted) setAllProducts(products);
      })
      .finally(() => {
        if (isMounted) setIsLoadingProducts(false);
      });

    return () => {
      isMounted = false;
    };
  }, [category]);

  const filtered = useMemo(() => {
    return allProducts.filter((p) => {
      const genderOk = genderFilter === "all" || p.gender === genderFilter;
      const typeOk = typeFilter === "all" || p.type === typeFilter;
      return genderOk && typeOk;
    });
  }, [allProducts, genderFilter, typeFilter]);

  if (!category) return <NotFound />;

  // Tipi disponibili per questa categoria
  const availableTypes = [...new Set(allProducts.map((p) => p.type))];
  const articles = getArticlesByCategory(category.slug);

  return (
    <>
      <PageHero
        eyebrow="Sport"
        title={category.title}
        description={category.description}
        image={category.image}
        bg={category.bg}
        accent={category.accent}
        badges={category.keywords?.slice(0, 3)}
      />

      {/* Filtri */}
      <section className="w-full bg-[#0a0a0a] px-4 sm:px-6 lg:px-10 pt-12 lg:pt-16">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: "Sport" },
              { label: category.name },
            ]}
          />

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white">
                {filtered.length} {filtered.length === 1 ? "prodotto" : "prodotti"}
              </h2>
              <p className="text-white/50 text-sm mt-1">
                Esplora la collezione {category.name}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              {/* Gender filter */}
              <div className="flex gap-2 overflow-x-auto">
                <button
                  onClick={() => setGenderFilter("all")}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide whitespace-nowrap transition-all ${
                    genderFilter === "all"
                      ? "bg-white text-black"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Tutti
                </button>
                {gendersData.map((g) => (
                  <button
                    key={g.slug}
                    onClick={() => setGenderFilter(g.slug)}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide whitespace-nowrap transition-all flex items-center gap-1.5 ${
                      genderFilter === g.slug
                        ? "bg-white text-black"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    <i className={g.icon} />
                    {g.name}
                  </button>
                ))}
              </div>

              {/* Type filter (only if multiple types) */}
              {availableTypes.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  <button
                    onClick={() => setTypeFilter("all")}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide whitespace-nowrap transition-all ${
                      typeFilter === "all"
                        ? "bg-white text-black"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    Tutto
                  </button>
                  {availableTypes.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTypeFilter(t)}
                      className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide whitespace-nowrap transition-all ${
                        typeFilter === t
                          ? "bg-white text-black"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      {getProductTypeLabel(t, "plural")}
                    </button>
                  ))}
                </div>
              )}
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
                Nessun prodotto disponibile con questi filtri.
              </p>
              <button
                onClick={() => {
                  setGenderFilter("all");
                  setTypeFilter("all");
                }}
                className="mt-6 bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-neutral-200 transition-colors"
              >
                Resetta i filtri
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Articles */}
      {articles.length > 0 && (
        <section className="w-full bg-gradient-to-b from-[#0a0a0a] to-[#171717] px-4 sm:px-6 lg:px-10 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 text-center lg:text-left">
              <span className="text-white/40 text-xs tracking-[3px] uppercase">Magazine</span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white leading-tight mt-2">
                Storie di {category.name}.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {articles.map((a) => (
                <article
                  key={a.id}
                  className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-colors group"
                >
                  <div className="aspect-[16/10] bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center overflow-hidden">
                    <img
                      src={a.image}
                      alt=""
                      loading="lazy"
                      className="max-h-[80%] max-w-[80%] object-contain group-hover:scale-105 transition-transform duration-500"
                      style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.4))" }}
                    />
                  </div>
                  <div className="p-5 lg:p-6">
                    <div className="flex items-center gap-3 text-xs text-white/50 mb-3">
                      <span>{new Date(a.date).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" })}</span>
                      <span>·</span>
                      <span>{a.readTime} min lettura</span>
                    </div>
                    <h3 className="text-white font-black text-lg sm:text-xl leading-tight mb-2">
                      {a.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
                      {a.excerpt}
                    </p>
                    <div className="text-white text-sm font-semibold mt-4 flex items-center gap-2">
                      Leggi
                      <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cross-link to other sports */}
      <section className="w-full bg-[#0a0a0a] px-4 sm:px-6 lg:px-10 py-16 lg:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/50 text-sm tracking-[2px] uppercase mb-4">
            Cambia sport
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {categoriesData
              .filter((c) => c.slug !== category.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  to={`/sport/${c.slug}`}
                  className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide transition-colors flex items-center gap-2"
                >
                  <i className={c.icon} />
                  {c.name}
                </Link>
              ))}
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

export default Category;
