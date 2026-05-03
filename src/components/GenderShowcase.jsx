import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { genders } from "../data/categories";

gsap.registerPlugin(ScrollTrigger);

const GenderShowcase = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(titleRef.current, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 85%", toggleActions: "play none none reverse" },
      });

      const panels = sectionRef.current?.querySelectorAll(".gender-panel");
      panels?.forEach((p, idx) => {
        gsap.fromTo(p, { x: idx === 0 ? -80 : 80, opacity: 0 }, {
          x: 0, opacity: 1, duration: 1, delay: idx * 0.15, ease: "power3.out",
          scrollTrigger: { trigger: p, start: "top 88%", toggleActions: "play none none reverse" },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#0a0a0a] py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-10"
      aria-label="Collezione Uomo Donna e Bambino"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="mb-10 lg:mb-16 text-center">
          <span className="text-white/40 text-xs tracking-[3px] uppercase">La collezione</span>
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black uppercase text-white leading-[1.05] mt-2">
            Trova il tuo stile.
          </h2>
          <p className="text-white/60 text-sm sm:text-base mt-4 max-w-xl mx-auto">
            Tre percorsi chiari per arrivare subito al prodotto giusto: uomo, donna e bambino. Stesso DNA Nike, performance dedicate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {genders.map((g) => (
            <Link
              key={g.slug}
              to={`/genere/${g.slug}`}
              className={`gender-panel group relative block aspect-[16/11] sm:aspect-[16/9] md:aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br ${g.bg} p-6 sm:p-8 lg:p-10 transition-transform duration-500 hover:scale-[1.01]`}
            >
              <div className="absolute -bottom-10 -right-10 w-[60%] aspect-square opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700">
                <img
                  src={g.image}
                  alt=""
                  className="w-full h-full object-contain"
                  style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.6))" }}
                />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 self-start bg-white/15 backdrop-blur-md rounded-full px-3 py-1.5 border border-white/20">
                    <i className={`${g.icon} text-white text-base`} />
                    <span className="text-white text-xs font-semibold tracking-wider uppercase">
                      {g.name}
                    </span>
                  </div>
                  <h3 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] mt-4 lg:mt-6">
                    {g.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3 text-white text-sm sm:text-base font-semibold mt-4">
                  <span className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold tracking-wide group-hover:bg-neutral-200 transition-colors">
                    Esplora
                  </span>
                  <i className="ri-arrow-right-line text-xl group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenderShowcase;
