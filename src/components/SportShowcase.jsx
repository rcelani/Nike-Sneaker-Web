import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { categories } from "../data/categories";

gsap.registerPlugin(ScrollTrigger);

const SportShowcase = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(titleRef.current, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 85%", toggleActions: "play none none reverse" },
      });

      const cards = sectionRef.current?.querySelectorAll(".sport-card");
      cards?.forEach((card, idx) => {
        gsap.fromTo(card, { y: 60, opacity: 0, scale: 0.95 }, {
          y: 0, opacity: 1, scale: 1, duration: 0.8, delay: idx * 0.12, ease: "back.out(1.4)",
          scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none reverse" },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#0a0a0a] py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-10"
      aria-label="Esplora gli sport"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="mb-10 lg:mb-16 text-center lg:text-left">
          <span className="text-white/40 text-xs tracking-[3px] uppercase">Esplora</span>
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black uppercase text-white leading-[1.05] mt-2">
            Trova il tuo sport.
          </h2>
          <p className="text-white/60 text-sm sm:text-base mt-4 max-w-xl mx-auto lg:mx-0">
            Sei mondi, una sola passione. Scegli la disciplina che ti rappresenta e scopri la collezione dedicata.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5 lg:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/sport/${cat.slug}`}
              className={`sport-card group relative block aspect-[4/5] xl:aspect-[3/5] rounded-3xl overflow-hidden bg-gradient-to-br ${cat.bg} p-5 sm:p-6 transition-transform duration-500 hover:scale-[1.02]`}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-70 transition-opacity duration-500">
                <img
                  src={cat.image}
                  alt=""
                  className="max-w-[90%] max-h-[90%] object-contain group-hover:scale-110 transition-transform duration-700"
                  style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.6))" }}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex items-center gap-2 self-start bg-white/15 backdrop-blur-md rounded-full px-3 py-1.5 border border-white/20">
                  <i className={`${cat.icon} text-white text-base`} />
                  <span className="text-white text-xs font-semibold tracking-wider uppercase">
                    {cat.name}
                  </span>
                </div>

                <div>
                  <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-black leading-tight">
                    {cat.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-3 text-white/90 text-sm font-semibold">
                    <span>Scopri</span>
                    <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportShowcase;
