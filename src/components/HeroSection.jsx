import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { products as mockProducts } from "../data/products";
import { getSizeValue } from "../mappers/productMapper";
import { getProducts } from "../services/productService";

// Le 3 hero principali mantengono l'impostazione originale basket/sneaker
const heroSlugs = ["air-more-uptempo-black", "air-jordan-18-green", "air-dt-max-96-rosso"];
const fallbackHeroShoes = mockProducts.filter((p) => heroSlugs.includes(p.slug));

const HeroSection = ({ isLoaded }) => {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const shoeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const badgesRef = useRef(null);
  const dividerRef = useRef(null);
  const platformRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [heroShoes, setHeroShoes] = useState(fallbackHeroShoes);
  const current = heroShoes[currentIndex] || fallbackHeroShoes[0];

  useEffect(() => {
    let isMounted = true;

    getProducts({ limit: 50 }).then((products) => {
      const loadedHeroShoes = heroSlugs
        .map((slug) => products.find((product) => product.slug === slug))
        .filter(Boolean);

      if (isMounted && loadedHeroShoes.length > 0) {
        setHeroShoes(loadedHeroShoes);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  useGSAP(() => {
    if (!isLoaded) return;
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(leftRef.current, { x: -80, opacity: 0, duration: 1 }, 0);
    tl.from(titleRef.current, { y: -50, opacity: 0, duration: 0.9, ease: "back.out(1.4)" }, 0.1);
    tl.from(subtitleRef.current, { y: 25, opacity: 0, duration: 0.7 }, 0.35);
    tl.from(dividerRef.current, { scaleX: 0, transformOrigin: "left center", duration: 0.8, ease: "power2.inOut" }, 0.5);
    tl.from(descRef.current, { y: 20, opacity: 0, duration: 0.7 }, 0.6);
    tl.from(badgesRef.current?.querySelectorAll("span"), { y: 15, opacity: 0, scale: 0.85, duration: 0.5, stagger: 0.12, ease: "back.out(2)" }, 0.75);
    tl.from(rightRef.current, { x: 80, opacity: 0, duration: 0.9 }, 0.2);
    tl.from(shoeRef.current, { x: 900, opacity: 0, scale: 0.75, rotation: 20, duration: 1.4, ease: "expo.out" }, 0.3);
    tl.from(platformRef.current, { opacity: 0, scale: 0.5, transformOrigin: "center center", duration: 0.6, ease: "power2.out" }, 1.4);
    tl.from(scrollIndicatorRef.current, { opacity: 0, y: 10, duration: 0.6 }, 1.6);

    gsap.to(shoeRef.current, { y: -18, duration: 2.8, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.8 });
    gsap.to(platformRef.current, { scaleX: 0.85, opacity: 0.5, duration: 2.8, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.8 });
  }, [isLoaded]);

  const animateShoeChange = (newIndex) => {
    const shoeEl = shoeRef.current;
    gsap.to(shoeEl, {
      x: -300, opacity: 0, scale: 0.8, rotation: -10, duration: 0.45, ease: "power2.in",
      onComplete: () => {
        setCurrentIndex(newIndex);
        gsap.fromTo(
          shoeEl,
          { x: 400, opacity: 0, scale: 0.8, rotation: 15 },
          { x: 0, opacity: 1, scale: 1, rotation: 0, duration: 0.7, ease: "expo.out" }
        );
      },
    });
  };

  const nextSlide = () => animateShoeChange((currentIndex + 1) % heroShoes.length);
  const prevSlide = () => animateShoeChange(currentIndex === 0 ? heroShoes.length - 1 : currentIndex - 1);

  return (
    <section
      ref={containerRef}
      aria-label="Hero - sneaker in evidenza"
      className={`w-full min-h-screen lg:h-screen rounded-b-4xl bg-gradient-to-br ${current.bg} ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } transition-colors duration-700 relative flex flex-col lg:flex-row items-center lg:items-stretch lg:justify-between px-4 sm:px-6 lg:px-10 pt-24 pb-10 lg:pt-0 lg:pb-0 overflow-hidden`}
    >
      <div ref={leftRef} className="w-full lg:max-w-[480px] z-10 lg:mt-20 flex flex-col items-center lg:items-start text-center lg:text-left">
        <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-white leading-[1.1] tracking-[-1px] lg:tracking-[-1.5px]">
          <span>Rendi speciale</span><br />
          <span>ogni tuo </span>
          <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.5)" }}>passo</span>.
        </h1>

        <h2 ref={subtitleRef} className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-[4px] sm:tracking-[6px] lg:tracking-[8px] uppercase text-white mt-6 lg:mt-12">
          {current.name}
        </h2>

        <div
          ref={dividerRef}
          className="h-[2px] w-64 sm:w-72 lg:w-82 mt-3"
          style={{ background: "linear-gradient(to right, #fff, transparent)" }}
        />

        <div className="w-full pt-4 lg:pt-45 lg:h-full">
          <p ref={descRef} className="w-full max-w-[420px] mx-auto lg:mx-0 text-white/85 text-[13px] lg:text-[14px] leading-[1.7] lg:leading-[1.8] mt-4 lg:mt-7">
            {current.shortDescription}
          </p>

          <div ref={badgesRef} className="flex gap-3 mt-5 lg:mt-8 justify-center lg:justify-start flex-wrap">
            {current.badges.slice(0, 3).map((b) => (
              <span key={b} className="py-2 px-4 border border-white/60 rounded-full text-white/80 text-[11px] tracking-[1.5px] uppercase font-semibold">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={shoeRef}
        className="relative lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-full lg:w-[600px] h-[260px] sm:h-[340px] lg:h-[600px] flex items-center justify-center my-4 lg:my-0"
      >
        <img
          src={current.image}
          alt={`${current.name} - colore ${current.color}`}
          className="absolute w-[clamp(220px,65vw,360px)] lg:w-[clamp(300px,35vw,650px)]"
          style={{
            transform: `rotate(${current.rotate}) translateY(${current.translateY || "0px"}) scale(${current.scale})`,
            filter: "drop-shadow(0 30px 80px rgba(0,0,0,0.6))",
          }}
        />

        <svg
          ref={platformRef}
          className="absolute top-full -translate-y-12 w-[280px] sm:w-[360px] lg:w-[500px] h-20"
          viewBox="0 0 500 80"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <ellipse cx="250" cy="40" rx="200" ry="35" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="5,5" />
          <ellipse cx="250" cy="40" rx="180" ry="30" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        </svg>

        <button
          onClick={prevSlide}
          aria-label="Scarpa precedente"
          className="lg:hidden absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-50 text-white text-2xl sm:text-3xl cursor-pointer bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-full transition-all duration-300"
        >
          <i className="ri-arrow-left-s-line" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Scarpa successiva"
          className="lg:hidden absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-50 text-white text-2xl sm:text-3xl cursor-pointer bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-full transition-all duration-300"
        >
          <i className="ri-arrow-right-s-line" />
        </button>
      </div>

      <div ref={rightRef} className="flex flex-col gap-4 lg:gap-8 items-center lg:items-end z-10 w-full lg:w-auto">
        <div className="backdrop-blur-md border mt-4 lg:mt-10 border-white/20 rounded-2xl p-4 lg:p-6 w-full max-w-[340px] lg:w-auto lg:max-w-none">
          <p className="flex items-center gap-2 text-[12px] font-bold tracking-[3px] uppercase text-white/80 mb-3 lg:mb-4">
            <span className="w-2 h-2 rounded-full bg-white block" />
            Colore : {current.color}
          </p>
          <p className="flex items-center gap-2 text-[12px] font-bold tracking-[3px] uppercase text-white/80 mb-3 lg:mb-4">
            <span className="w-2 h-2 rounded-full bg-white block" />
            Seleziona taglia (EU)
          </p>
          <div className="flex flex-wrap gap-2 max-w-full lg:max-w-[220px] justify-start lg:justify-end">
            {current.sizes.slice(0, 8).map((s) => {
              const sizeValue = getSizeValue(s);
              const sizeKey = typeof s === "object" ? s.variantId || s.sku || sizeValue : sizeValue;

              return (
                <button
                  key={sizeKey}
                  aria-label={`Taglia ${sizeValue}`}
                  className="w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center border border-white/30 rounded-full text-white/60 text-xs cursor-pointer transition-all hover:border-white hover:text-white hover:bg-white/20"
                >
                  {sizeValue}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex gap-3 flex-row lg:flex-col">
          <a href="#" aria-label="Instagram" className="text-xl lg:text-2xl text-white/70 hover:text-white transition-all hover:scale-110 duration-300 bg-white/10 py-2 px-3 rounded-full">
            <i className="ri-instagram-line" />
          </a>
          <a href="#" aria-label="Facebook" className="text-xl lg:text-2xl text-white/70 hover:text-white transition-all hover:scale-110 duration-300 bg-white/10 py-2 px-3 rounded-full">
            <i className="ri-facebook-circle-line" />
          </a>
          <a href="#" aria-label="Twitter" className="text-xl lg:text-2xl text-white/70 hover:text-white transition-all hover:scale-110 duration-300 bg-white/10 py-2 px-3 rounded-full">
            <i className="ri-twitter-line" />
          </a>
        </div>

        <Link
          to={`/prodotto/${current.slug}`}
          className="flex items-center mt-2 lg:mt-10 gap-3 lg:gap-4 bg-white/15 border border-white/30 rounded-full p-2 px-4 lg:px-6 cursor-pointer hover:bg-white/25 transition-all duration-300"
        >
          <span className="bg-white text-black text-[11px] lg:text-[12px] font-extrabold tracking-[2px] uppercase py-2.5 lg:py-3 px-5 lg:px-6 rounded-full">
            Acquista ora
          </span>
          <span className="text-white text-[20px] lg:text-[24px] font-black tracking-[-0.5px]">
            €{current.price}
          </span>
        </Link>
      </div>

      <div
        ref={scrollIndicatorRef}
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-bounce z-30"
        aria-hidden="true"
      >
        <span className="text-white/50 text-xs">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </div>

      <button
        onClick={prevSlide}
        aria-label="Scarpa precedente"
        className="hidden lg:block absolute left-50 top-120 z-50 -translate-y-1/2 text-white text-4xl cursor-pointer bg-white/10 hover:bg-white/20 px-3 py-2 rounded-full transition-all duration-300 hover:scale-110"
      >
        <i className="ri-arrow-left-s-line" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Scarpa successiva"
        className="hidden lg:block absolute right-50 top-120 z-50 -translate-y-1/2 text-white text-4xl cursor-pointer bg-white/10 hover:bg-white/20 px-3 py-2 rounded-full transition-all duration-300 hover:scale-110"
      >
        <i className="ri-arrow-right-s-line" />
      </button>
    </section>
  );
};

export default HeroSection;
