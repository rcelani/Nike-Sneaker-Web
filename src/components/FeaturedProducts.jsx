import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductCard from "./ProductCard";
import { getFeaturedProducts } from "../services/productService";

gsap.registerPlugin(ScrollTrigger);

const FeaturedProducts = () => {
  const titleRef = useRef(null);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    let isMounted = true;

    getFeaturedProducts(8).then((products) => {
      if (isMounted) setFeatured(products);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  useGSAP(() => {
    gsap.fromTo(titleRef.current, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
      scrollTrigger: { trigger: titleRef.current, start: "top 85%", toggleActions: "play none none reverse" },
    });
  });

  return (
    <section
      className="w-full bg-[#0a0a0a] py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-10"
      aria-label="Prodotti in evidenza"
    >
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className="mb-10 lg:mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4"
        >
          <div className="text-center lg:text-left">
            <span className="text-white/40 text-xs tracking-[3px] uppercase">In evidenza</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white leading-[1.05] mt-2">
              I più desiderati.
            </h2>
          </div>
          <Link
            to="/collezione"
            className="self-center lg:self-auto bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-neutral-200 transition-colors flex items-center gap-2 w-fit"
          >
            Vedi tutto
            <i className="ri-arrow-right-line" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
