import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const trustItems = [
  { icon: "ri-truck-line", label: "Spedizione veloce" },
  { icon: "ri-refresh-line", label: "Resi facili" },
  { icon: "ri-shield-star-line", label: "Prodotti selezionati" },
];

const quickLinks = [
  { label: "Uomo", to: "/genere/uomo" },
  { label: "Donna", to: "/genere/donna" },
  { label: "Bambino", to: "/genere/bambino" },
  { label: "Sport", to: "/sport/running" },
];

const HomeIntro = ({ isLoaded }) => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (!isLoaded) return;

      const ctx = gsap.context(() => {
        gsap.from(".intro-reveal", {
          y: 24,
          opacity: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.15,
        });
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef, dependencies: [isLoaded] }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0a0a0a] pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-10 overflow-hidden"
      aria-label="Introduzione ecommerce"
    >
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.16),transparent_58%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto rounded-[2rem] border border-white/10 bg-white/[0.035] backdrop-blur-xl overflow-hidden p-5 sm:p-7 lg:p-8">
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -left-24 bottom-0 w-72 h-72 rounded-full bg-lime-300/10 blur-3xl" />

        <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <span className="intro-reveal inline-flex items-center gap-2 text-white/55 text-[10px] sm:text-xs tracking-[3px] uppercase font-bold">
              <span className="w-2 h-2 rounded-full bg-white" />
              Premium Sport Store
            </span>

            <h1 className="intro-reveal text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase leading-[0.98] tracking-[-1.5px] mt-4">
              Performance,
              <br /> stile e movimento.
            </h1>

            <p className="intro-reveal text-white/65 text-sm sm:text-base leading-relaxed mt-5 max-w-2xl">
              Sneaker, apparel e attrezzatura selezionati per running, basket, tennis, training, calcio e lifestyle. Un ecommerce Nike-inspired, essenziale e costruito per farti arrivare subito al prodotto giusto.
            </p>

            <div className="intro-reveal flex flex-col sm:flex-row gap-3 mt-6">
              <Link
                to="/collezione"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-black uppercase tracking-wide hover:bg-neutral-200 transition-colors"
              >
                Esplora lo shop
                <i className="ri-arrow-right-line" />
              </Link>
              <Link
                to="/novita"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-3 rounded-full text-sm font-black uppercase tracking-wide border border-white/10 hover:bg-white/15 transition-colors"
              >
                Guarda le novità
              </Link>
            </div>
          </div>

          <div className="intro-reveal grid grid-cols-2 sm:flex sm:flex-wrap lg:grid lg:grid-cols-2 gap-2 lg:w-[360px]">
            {quickLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group bg-black/25 border border-white/10 rounded-2xl px-4 py-3 text-white hover:bg-white hover:text-black transition-all"
              >
                <span className="block text-xs font-black uppercase tracking-[2px]">
                  {item.label}
                </span>
                <span className="mt-2 flex items-center gap-1 text-xs opacity-60 group-hover:opacity-100">
                  Esplora <i className="ri-arrow-right-up-line" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="intro-reveal relative mt-7 grid grid-cols-1 sm:grid-cols-3 gap-2.5 border-t border-white/10 pt-5">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center sm:justify-start gap-2 rounded-2xl bg-white/[0.04] px-4 py-3 text-white/70 text-xs sm:text-sm font-semibold"
            >
              <i className={`${item.icon} text-lg text-white`} />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
