import React, { useRef, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { getProductBySlug as loadProductBySlug, getRelatedProducts as loadRelatedProducts } from "../services/productService";
import { getSizeValue } from "../mappers/productMapper";
import { getCategoryBySlug } from "../data/categories";
import { getProductSizeLabel } from "../data/productTypes";
import Breadcrumb from "../components/Breadcrumb";
import ProductCard from "../components/ProductCard";
import NotFound from "./NotFound";
import useSEO from "../hook/useSEO";
import { useCart } from "../context/useCart";

gsap.registerPlugin(ScrollTrigger);

const ProductDetail = () => {
  const { slug } = useParams();

  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const dividerRef = useRef(null);
  const descRef = useRef(null);
  const badgesRef = useRef(null);
  const imgRef = useRef(null);
  const sidebarRef = useRef(null);

  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [isLoadingProduct, setIsLoadingProduct] = useState(true);
  const [activeImage, setActiveImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cartFeedback, setCartFeedback] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    let isMounted = true;

    const loadProduct = async () => {
      const loadedProduct = await loadProductBySlug(slug);

      if (!isMounted) return;

      setProduct(loadedProduct);
      setActiveImage(loadedProduct?.gallery?.[0] || loadedProduct?.image || null);
      setSelectedSize(null);
      setQuantity(1);

      if (loadedProduct?.category) {
        const relatedProducts = await loadRelatedProducts(
          loadedProduct.slug,
          loadedProduct.category,
          4
        );

        if (isMounted) setRelated(relatedProducts);
      }

      if (isMounted) setIsLoadingProduct(false);
    };

    loadProduct().catch(() => {
      if (!isMounted) return;
      setProduct(null);
      setRelated([]);
      setIsLoadingProduct(false);
    });

    return () => {
      isMounted = false;
    };
  }, [slug]);

  const absoluteProductImage = product?.image?.startsWith("http")
    ? product.image
    : product
    ? `${window.location.origin}${product.image}`
    : undefined;

  const productBrand = product?.brand ||
    (product?.name?.startsWith("HEAD")
      ? "HEAD"
      : product?.name?.startsWith("Yonex")
      ? "Yonex"
      : "Nike");

  // SEO sempre prima del return condizionale
  useSEO(
    product
      ? {
          title: product.seoTitle || `${product.name} | Nike Sneaker`,
          description: product.seoDescription || product.shortDescription,
          image: product.image,
          jsonLd: {
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            image: absoluteProductImage,
            sku: product.id,
            brand: { "@type": "Brand", name: productBrand },
            offers: {
              "@type": "Offer",
              priceCurrency: "EUR",
              price: product.price,
              availability: product.inStock
                ? "https://schema.org/InStock"
                : "https://schema.org/OutOfStock",
            },
            aggregateRating: product.rating
              ? {
                  "@type": "AggregateRating",
                  ratingValue: product.rating,
                  reviewCount: product.reviews,
                }
              : undefined,
          },
        }
      : { title: "Prodotto non trovato | Nike Sneaker" }
  );

  useGSAP(
    () => {
      if (!product) return;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(titleRef.current, { y: -40, opacity: 0, duration: 0.9, ease: "back.out(1.4)" });
      tl.from(subtitleRef.current, { y: 20, opacity: 0, duration: 0.6 }, "-=0.4");
      tl.from(dividerRef.current, { scaleX: 0, transformOrigin: "left center", duration: 0.7 }, "-=0.3");
      tl.from(descRef.current, { y: 25, opacity: 0, duration: 0.7 }, "-=0.4");
      tl.from(
        badgesRef.current?.querySelectorAll("span"),
        { y: 15, opacity: 0, scale: 0.85, duration: 0.5, stagger: 0.1, ease: "back.out(2)" },
        "-=0.3"
      );
      tl.from(
        imgRef.current,
        { x: 200, opacity: 0, rotation: 15, scale: 0.8, duration: 1.2, ease: "expo.out" },
        0
      );
      tl.from(sidebarRef.current, { x: 60, opacity: 0, duration: 0.8 }, 0.4);

      gsap.to(imgRef.current, {
        y: -16, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.2,
      });

      const features = containerRef.current?.querySelectorAll(".feature-item");
      features?.forEach((f, idx) => {
        gsap.fromTo(f, { y: 50, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, delay: idx * 0.15, ease: "power3.out",
          scrollTrigger: { trigger: f, start: "top 90%", toggleActions: "play none none reverse" },
        });
      });
    },
    { scope: containerRef, dependencies: [slug] }
  );

  const handleGalleryClick = (img) => {
    if (img === activeImage) return;
    gsap.to(imgRef.current, {
      opacity: 0, scale: 0.85, rotation: -10, duration: 0.3, ease: "power2.in",
      onComplete: () => {
        setActiveImage(img);
        gsap.fromTo(
          imgRef.current,
          { opacity: 0, scale: 0.85, rotation: 10 },
          { opacity: 1, scale: 1, rotation: 0, duration: 0.5, ease: "expo.out" }
        );
      },
    });
  };

  const handleAddToCart = async () => {
    if (!selectedSize) return;

    await addToCart(product, selectedSize, quantity);
    setCartFeedback(true);

    window.setTimeout(() => setCartFeedback(false), 1800);
  };

  if (isLoadingProduct) {
    return (
      <section className="w-full min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto" />
          <p className="text-white/50 text-sm tracking-[2px] uppercase mt-4">Caricamento prodotto</p>
        </div>
      </section>
    );
  }

  if (!product) return <NotFound />;

  const categoryLabel = getCategoryBySlug(product.category)?.name || product.category;
  const sizeLabel = getProductSizeLabel(product.type);
  const selectedSizeValue = selectedSize ? getSizeValue(selectedSize) : null;

  return (
    <div ref={containerRef}>
      <section
        className={`w-full min-h-screen rounded-b-4xl bg-gradient-to-br ${product.bg} relative flex flex-col lg:flex-row items-center lg:items-stretch lg:justify-between px-4 sm:px-6 lg:px-10 pt-28 sm:pt-32 lg:pt-32 pb-10 overflow-hidden`}
      >
        <div className="w-full lg:max-w-[480px] z-10 lg:mt-12 flex flex-col items-center lg:items-start text-center lg:text-left">
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: categoryLabel, to: `/sport/${product.category}` },
              { label: product.name },
            ]}
          />

          <h1
            ref={titleRef}
            className="text-3xl sm:text-5xl lg:text-[58px] font-extrabold text-white leading-[1.05] tracking-[-0.5px] lg:tracking-[-1.5px]"
          >
            {product.name}
          </h1>

          <h2
            ref={subtitleRef}
            className="text-lg sm:text-xl lg:text-2xl font-bold tracking-[3px] sm:tracking-[5px] uppercase text-white/80 mt-3 lg:mt-5"
          >
            Colore: {product.color}
          </h2>

          <div
            ref={dividerRef}
            className="h-[2px] w-56 sm:w-72 lg:w-80 mt-3"
            style={{ background: "linear-gradient(to right, #fff, transparent)" }}
          />

          <p
            ref={descRef}
            className="w-full max-w-[460px] mx-auto lg:mx-0 text-white/85 text-sm leading-[1.7] mt-5"
          >
            {product.description}
          </p>

          <div
            ref={badgesRef}
            className="flex gap-2.5 mt-5 justify-center lg:justify-start flex-wrap"
          >
            {product.badges?.map((b) => (
              <span
                key={b}
                className="py-1.5 px-3 sm:py-2 sm:px-4 border border-white/60 rounded-full text-white/85 text-[10px] sm:text-[11px] tracking-[1.5px] uppercase font-semibold"
              >
                {b}
              </span>
            ))}
          </div>

          {(product.rating || product.weight || product.headSize) && (
            <div className="flex gap-5 sm:gap-8 mt-6 text-white/90 flex-wrap justify-center lg:justify-start">
              {product.rating && (
                <div>
                  <p className="text-[10px] tracking-[2px] uppercase text-white/50 mb-0.5">Rating</p>
                  <p className="text-base sm:text-lg font-bold flex items-center gap-1.5">
                    <i className="ri-star-fill text-yellow-300 text-base" />
                    {product.rating}
                    <span className="text-white/50 text-xs font-normal">({product.reviews})</span>
                  </p>
                </div>
              )}
              {product.weight && (
                <div>
                  <p className="text-[10px] tracking-[2px] uppercase text-white/50 mb-0.5">Peso</p>
                  <p className="text-base sm:text-lg font-bold">{product.weight}</p>
                </div>
              )}
              {product.headSize && (
                <div>
                  <p className="text-[10px] tracking-[2px] uppercase text-white/50 mb-0.5">Piatto</p>
                  <p className="text-base sm:text-lg font-bold">{product.headSize}</p>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="relative w-full lg:flex-1 flex items-center justify-center my-8 lg:my-0 z-0">
          <img
            ref={imgRef}
            src={activeImage}
            alt={`${product.name} - colore ${product.color}`}
            className="w-[clamp(220px,55vw,400px)] lg:w-[clamp(320px,32vw,560px)]"
            style={{
              transform: `rotate(${product.rotate || "0deg"})`,
              filter: "drop-shadow(0 30px 80px rgba(0,0,0,0.6))",
            }}
          />
        </div>

        <div ref={sidebarRef} className="flex flex-col gap-4 items-center lg:items-end z-10 w-full lg:w-auto">
          <div className="backdrop-blur-md border lg:mt-12 border-white/20 rounded-2xl p-5 lg:p-6 w-full max-w-[340px] lg:w-[300px]">
            <p className="text-white/60 text-[10px] tracking-[2px] uppercase mb-1">Prezzo</p>
            {product.originalPrice && product.originalPrice > product.price && (
              <p className="text-white/40 text-sm line-through font-semibold">
                €{product.originalPrice}
              </p>
            )}
            <p className="text-white text-3xl lg:text-4xl font-black tracking-[-1px]">
              €{product.price}
            </p>

            <p className="flex items-center gap-2 text-[11px] font-bold tracking-[2px] uppercase text-white/80 mt-5 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white block" />
              {sizeLabel}
            </p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => {
                const sizeValue = getSizeValue(s);
                const disabled = typeof s === "object" && s.stockQuantity <= 0;

                return (
                  <button
                    key={`${sizeValue}-${s.variantId || "mock"}`}
                    onClick={() => !disabled && setSelectedSize(s)}
                    aria-label={`Taglia ${sizeValue}`}
                    disabled={disabled}
                    className={`min-w-9 h-9 px-2 flex items-center justify-center border rounded-full text-xs cursor-pointer transition-all disabled:opacity-30 disabled:cursor-not-allowed ${
                      selectedSizeValue === sizeValue
                        ? "bg-white text-black border-white font-bold"
                        : "border-white/30 text-white/70 hover:border-white hover:text-white"
                    }`}
                  >
                    {sizeValue}
                  </button>
                );
              })}
            </div>

            <p className="flex items-center gap-2 text-[11px] font-bold tracking-[2px] uppercase text-white/80 mt-5 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white block" />
              Quantità
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                aria-label="Diminuisci quantità"
                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
              >
                <i className="ri-subtract-line" />
              </button>
              <span className="text-white font-bold text-base w-6 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                aria-label="Aumenta quantità"
                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
              >
                <i className="ri-add-line" />
              </button>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className="w-full bg-white text-black text-sm font-extrabold tracking-[1.5px] uppercase py-3 rounded-full mt-5 hover:bg-neutral-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {cartFeedback
                ? "Aggiunto al carrello"
                : selectedSizeValue
                ? "Aggiungi al carrello"
                : "Seleziona una taglia"}
            </button>

            <button className="w-full text-white/80 text-xs font-semibold tracking-[1.5px] uppercase py-3 rounded-full mt-2 hover:text-white transition-colors flex items-center justify-center gap-2">
              <i className="ri-heart-line" />
              Aggiungi ai preferiti
            </button>
          </div>

          {product.gallery?.length > 1 && (
            <div className="flex gap-2 flex-wrap justify-center lg:justify-end max-w-[340px]">
              {product.gallery.map((img) => (
                <button
                  key={img}
                  onClick={() => handleGalleryClick(img)}
                  aria-label="Mostra immagine"
                  className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all bg-white/10 backdrop-blur-md ${
                    activeImage === img
                      ? "border-white scale-105"
                      : "border-white/20 hover:border-white/50"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain p-1" />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {product.features?.length > 0 && (
        <section className="w-full bg-gradient-to-br from-[#fafafa] via-[#e5e5e5] to-[#404040] py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center lg:text-left mb-10 lg:mb-16">
              <span className="text-black/40 text-xs tracking-[3px] uppercase">Tecnologia</span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-black/90 mt-2">
                Costruita nei dettagli.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {product.features.map((f, i) => (
                <div key={f.title} className="feature-item bg-white rounded-3xl p-6 sm:p-8 shadow-xl">
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mb-4 font-black">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase mb-3 leading-tight">
                    {f.title}
                  </h3>
                  <p className="text-black/70 text-sm leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="w-full bg-[#0a0a0a] py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 lg:mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <div className="text-center lg:text-left">
                <span className="text-white/40 text-xs tracking-[3px] uppercase">
                  Ti potrebbero piacere
                </span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white leading-tight mt-2">
                  Stesso sport, stesso DNA.
                </h2>
              </div>
              <Link
                to={`/sport/${product.category}`}
                className="self-center lg:self-auto bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-neutral-200 transition-colors flex items-center gap-2 w-fit"
              >
                Vedi tutto {categoryLabel}
                <i className="ri-arrow-right-line" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
