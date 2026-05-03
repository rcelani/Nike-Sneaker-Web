import React, { useEffect, useMemo, useState } from "react";

import { categories as categoriesData, genders as gendersData } from "../data/categories";
import { productTypes } from "../data/productTypes";
import { getProducts } from "../services/productService";

import Breadcrumb from "../components/Breadcrumb";
import GlassSelect from "../components/GlassSelect";
import ProductGrid from "../components/ProductGrid";
import useSEO from "../hook/useSEO";

const sortOptions = [
  { value: "featured", label: "Consigliati" },
  { value: "price-asc", label: "Prezzo crescente" },
  { value: "price-desc", label: "Prezzo decrescente" },
  { value: "rating", label: "Rating" },
  { value: "name", label: "A–Z" },
];

const priceRanges = [
  { value: "all", label: "Tutti", min: undefined, max: undefined },
  { value: "under-100", label: "Fino a €100", min: 0, max: 100 },
  { value: "100-150", label: "€100 - €150", min: 100, max: 150 },
  { value: "150-200", label: "€150 - €200", min: 150, max: 200 },
  { value: "over-200", label: "Oltre €200", min: 200, max: undefined },
];

const Collection = () => {
  useSEO({
    title: "Collezione Completa | Nike Sneaker",
    description:
      "Esplora tutta la collezione Nike: basket, tennis, running, training, calcio e lifestyle. Filtra per sport, genere, prezzo e tipologia prodotto.",
    image: "/images/jordan.png",
  });

  const [categoryFilter, setCategoryFilter] = useState("all");
  const [genderFilter, setGenderFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const selectedPriceRange = priceRanges.find((range) => range.value === priceFilter) || priceRanges[0];

    const loadProducts = async () => {
      const loadedProducts = await getProducts({
        category: categoryFilter,
        gender: genderFilter,
        type: typeFilter,
        minPrice: selectedPriceRange.min,
        maxPrice: selectedPriceRange.max,
        sort,
      });

      if (isMounted) {
        setProducts(loadedProducts);
        setIsLoadingProducts(false);
      }
    };

    loadProducts().catch(() => {
      if (isMounted) {
        setProducts([]);
        setIsLoadingProducts(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [categoryFilter, genderFilter, typeFilter, priceFilter, sort]);

  const resetFilters = () => {
    setCategoryFilter("all");
    setGenderFilter("all");
    setTypeFilter("all");
    setPriceFilter("all");
    setSort("featured");
  };

  const activeCount =
    (categoryFilter !== "all" ? 1 : 0) +
    (genderFilter !== "all" ? 1 : 0) +
    (typeFilter !== "all" ? 1 : 0) +
    (priceFilter !== "all" ? 1 : 0);

  const availableProductTypes = useMemo(
    () =>
      productTypes.filter((type) =>
        products.some((product) => product.type === type.slug)
      ),
    [products]
  );

  return (
    <>
      <section className="w-full bg-gradient-to-br from-[#0a0a0a] via-[#171717] to-[#0a0a0a] pt-28 sm:pt-32 lg:pt-40 pb-12 lg:pb-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Collezione" }]} />
          <span className="text-white/40 text-xs tracking-[3px] uppercase">
            La nostra collezione
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] font-black uppercase text-white leading-[1.05] mt-2 tracking-[-1px] lg:tracking-[-2px]">
            Tutto Nike,
            <br />
            in un colpo d'occhio.
          </h1>
          <p className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed mt-5 lg:mt-7 max-w-2xl">
            Scarpe, abbigliamento, racchette e attrezzatura: filtra per sport, genere, prezzo o tipologia, ordina come vuoi e trova il pezzo che cercavi. {products.length} prodotti, una sola passione.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#0a0a0a] px-4 sm:px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="lg:hidden flex items-center justify-between gap-3 mb-5 sticky top-20 z-30 bg-[#0a0a0a]/95 backdrop-blur py-2 -mx-4 px-4 border-b border-white/5">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-full text-sm font-bold transition-colors"
            >
              <i className="ri-filter-3-line" />
              Filtri
              {activeCount > 0 && (
                <span className="bg-white text-black w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold">
                  {activeCount}
                </span>
              )}
            </button>

            <GlassSelect
              value={sort}
              options={sortOptions}
              onChange={setSort}
              className="w-[185px]"
            />
          </div>

          <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-10">
            <aside
              className={`${
                filtersOpen ? "block" : "hidden"
              } lg:block bg-white/5 lg:bg-transparent rounded-3xl lg:rounded-none border border-white/10 lg:border-0 p-5 lg:p-0 mb-6 lg:mb-0 lg:sticky lg:top-28 lg:self-start`}
            >
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-white font-black uppercase text-sm tracking-[2px]">
                  Filtri
                </h2>
                {activeCount > 0 && (
                  <button
                    onClick={resetFilters}
                    className="text-white/50 hover:text-white text-xs underline"
                  >
                    Resetta
                  </button>
                )}
              </div>

              <FilterGroup label="Sport">
                <Chip active={categoryFilter === "all"} onClick={() => setCategoryFilter("all")}>
                  Tutti
                </Chip>
                {categoriesData.map((c) => (
                  <Chip key={c.slug} active={categoryFilter === c.slug} onClick={() => setCategoryFilter(c.slug)}>
                    <i className={`${c.icon} mr-1`} />
                    {c.name}
                  </Chip>
                ))}
              </FilterGroup>

              <FilterGroup label="Shop">
                <Chip active={genderFilter === "all"} onClick={() => setGenderFilter("all")}>
                  Tutti
                </Chip>
                {gendersData.map((g) => (
                  <Chip key={g.slug} active={genderFilter === g.slug} onClick={() => setGenderFilter(g.slug)}>
                    <i className={`${g.icon} mr-1`} />
                    {g.name}
                  </Chip>
                ))}
              </FilterGroup>

              <FilterGroup label="Prezzo">
                {priceRanges.map((range) => (
                  <Chip key={range.value} active={priceFilter === range.value} onClick={() => setPriceFilter(range.value)}>
                    {range.label}
                  </Chip>
                ))}
              </FilterGroup>

              <FilterGroup label="Tipologia">
                <Chip active={typeFilter === "all"} onClick={() => setTypeFilter("all")}>
                  Tutto
                </Chip>
                {availableProductTypes.map((type) => (
                  <Chip key={type.slug} active={typeFilter === type.slug} onClick={() => setTypeFilter(type.slug)}>
                    {type.plural}
                  </Chip>
                ))}
              </FilterGroup>

              <div className="hidden lg:block mt-2">
                <GlassSelect
                  label="Ordina per"
                  value={sort}
                  options={sortOptions}
                  onChange={setSort}
                />
              </div>
            </aside>

            <div>
              <p className="text-white/50 text-sm mb-5 hidden lg:block">
                {products.length} {products.length === 1 ? "prodotto trovato" : "prodotti trovati"}
              </p>

              {isLoadingProducts ? (
                <LoadingGrid />
              ) : products.length > 0 ? (
                <ProductGrid
                  products={products}
                  animation="load"
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
                />
              ) : (
                <div className="text-center py-16 bg-white/5 rounded-2xl border border-white/10">
                  <i className="ri-search-line text-5xl text-white/20 mb-4 block" />
                  <p className="text-white/60 text-lg">
                    Nessun prodotto trovato con questi filtri.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="mt-6 bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-neutral-200 transition-colors"
                  >
                    Resetta i filtri
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const FilterGroup = ({ label, children }) => (
  <div className="mb-5">
    <p className="text-white/50 text-xs tracking-[2px] uppercase mb-2.5">
      {label}
    </p>
    <div className="flex flex-wrap gap-2">{children}</div>
  </div>
);

const Chip = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`text-xs font-bold uppercase tracking-wide px-3.5 py-1.5 rounded-full transition-all ${
      active
        ? "bg-white text-black"
        : "bg-white/10 text-white hover:bg-white/20"
    }`}
  >
    {children}
  </button>
);

const LoadingGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
    {Array.from({ length: 6 }).map((_, index) => (
      <div
        key={index}
        className="h-[360px] rounded-3xl bg-white/[0.055] border border-white/10 animate-pulse"
      />
    ))}
  </div>
);

export default Collection;
