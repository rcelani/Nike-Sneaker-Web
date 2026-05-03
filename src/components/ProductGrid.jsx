import React, { useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ProductCard from "./ProductCard";

const ProductGrid = ({
  products,
  className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6",
  animation = "load",
}) => {
  const gridRef = useRef(null);
  const productKey = useMemo(() => products.map((product) => product.id).join("|"), [products]);

  useGSAP(
    () => {
      if (animation !== "load" || !gridRef.current) return;

      const cards = gsap.utils.toArray(gridRef.current.children);

      gsap.fromTo(
        cards,
        { y: 22, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.55,
          stagger: 0.045,
          ease: "power3.out",
          clearProps: "transform,opacity",
        }
      );
    },
    { scope: gridRef, dependencies: [productKey, animation] }
  );

  return (
    <div ref={gridRef} className={className}>
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          index={index}
          animation={animation === "scroll" ? "scroll" : "none"}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
