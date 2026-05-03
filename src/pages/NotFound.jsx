import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useSEO from "../hook/useSEO";

const NotFound = () => {
  useSEO({
    title: "Pagina non trovata | Nike Sneaker",
    description: "La pagina che stai cercando non esiste o è stata spostata.",
  });

  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".nf-num", { y: -50, opacity: 0, duration: 0.9, ease: "back.out(1.4)" });
      tl.from(".nf-text", { y: 25, opacity: 0, duration: 0.6 }, "-=0.4");
      tl.from(".nf-cta", { y: 15, opacity: 0, duration: 0.6 }, "-=0.3");
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#171717] to-black flex items-center justify-center px-4 py-24"
    >
      <div className="text-center max-w-xl">
        <h1 className="nf-num text-[100px] sm:text-[160px] lg:text-[240px] font-black text-white leading-none tracking-[-4px]">
          404
        </h1>
        <p className="nf-text text-white/80 text-base sm:text-lg lg:text-xl font-semibold uppercase tracking-[2px] mt-4">
          Pagina non trovata
        </p>
        <p className="nf-text text-white/50 text-sm sm:text-base mt-3 leading-relaxed">
          La pagina che cerchi è stata spostata, rimossa o non è mai esistita. Torna alla homepage o esplora la collezione.
        </p>

        <div className="nf-cta flex flex-col sm:flex-row gap-3 justify-center items-center mt-8">
          <Link
            to="/"
            className="bg-white text-black px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide hover:bg-neutral-200 transition-colors flex items-center gap-2"
          >
            <i className="ri-home-4-line" />
            Torna alla home
          </Link>
          <Link
            to="/collezione"
            className="text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-2"
          >
            Esplora la collezione
            <i className="ri-arrow-right-line" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
