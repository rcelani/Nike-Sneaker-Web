import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getCategoryBySlug } from "../data/categories";
import { getProductTypeLabel } from "../data/productTypes";

gsap.registerPlugin(ScrollTrigger);

const ProductCard = ({ product, index = 0, animation = "scroll" }) => {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  useGSAP(
    () => {
      if (animation !== "scroll") return;

      gsap.fromTo(
        cardRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: index * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: cardRef, dependencies: [animation, index, product.id] }
  );

  const handleEnter = () => {
    gsap.to(imgRef.current, { y: -10, rotate: -5, scale: 1.05, duration: 0.4, ease: "power2.out" });
  };

  const handleLeave = () => {
    gsap.to(imgRef.current, { y: 0, rotate: 0, scale: 1, duration: 0.4, ease: "power2.out" });
  };

  const categoryLabel = getCategoryBySlug(product.category)?.name || product.category;
  const typeLabel = getProductTypeLabel(product.type);
  const primaryBadge = hasDiscount ? `-${discountPercent}%` : product.badges?.[0];

  return (
    <Link
      to={`/prodotto/${product.slug}`}
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`group relative block bg-gradient-to-br ${product.bg} rounded-3xl overflow-hidden p-5 sm:p-6 lg:p-8 transition-shadow duration-500 hover:shadow-2xl`}
    >
      <div className="flex items-center justify-between mb-3 lg:mb-4 gap-3">
        <span className="text-[10px] sm:text-xs tracking-[2px] uppercase text-white/70 font-semibold truncate">
          {categoryLabel}
          {typeLabel && ` · ${typeLabel}`}
        </span>
        {primaryBadge && (
          <span className="text-[9px] sm:text-[10px] tracking-[1.5px] uppercase bg-white/15 backdrop-blur text-white/90 px-2.5 py-1 rounded-full font-semibold whitespace-nowrap">
            {primaryBadge}
          </span>
        )}
      </div>

      <div className="aspect-square w-full flex items-center justify-center my-4 lg:my-6">
        <img
          ref={imgRef}
          src={product.image}
          alt={`${product.name} - ${product.color}`}
          loading="lazy"
          className="max-h-[80%] max-w-[85%] object-contain"
          style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))" }}
        />
      </div>

      <div className="flex items-end justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-bold text-base sm:text-lg leading-tight truncate">
            {product.name}
          </h3>
          <p className="text-white/60 text-xs sm:text-sm mt-0.5">{product.color}</p>
          {product.rating && (
            <div className="flex items-center gap-1 mt-1.5 text-white/70 text-[11px]">
              <i className="ri-star-fill text-yellow-300" />
              <span className="font-semibold">{product.rating}</span>
              <span className="text-white/40">({product.reviews})</span>
            </div>
          )}
        </div>

        <div className="text-right shrink-0">
          {hasDiscount && (
            <span className="block text-white/45 text-xs line-through font-semibold">
              €{product.originalPrice}
            </span>
          )}
          <span className="text-white text-lg sm:text-xl lg:text-2xl font-black">
            €{product.price}
          </span>
        </div>
      </div>

      <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur flex items-center justify-center text-white text-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300">
        <i className="ri-arrow-right-up-line" />
      </div>
    </Link>
  );
};

export default ProductCard;
