import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/**
 * Header riutilizzabile per pagine "Sport" e "Genere".
 * Stessa estetica della home: titolo dall'alto, immagine da destra con rotazione.
 */
const PageHero = ({ title, eyebrow, description, image, bg, accent, badges = [] }) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const imgRef = useRef(null);
  const badgesRef = useRef(null);
  const dividerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(titleRef.current, { y: -40, opacity: 0, duration: 0.9, ease: "back.out(1.4)" });
      tl.from(dividerRef.current, { scaleX: 0, transformOrigin: "left center", duration: 0.8 }, "-=0.4");
      tl.from(descRef.current, { y: 25, opacity: 0, duration: 0.7 }, "-=0.5");
      tl.from(badgesRef.current?.querySelectorAll("span"), {
        y: 15, opacity: 0, scale: 0.85, duration: 0.5, stagger: 0.1, ease: "back.out(2)",
      }, "-=0.3");
      tl.from(imgRef.current, {
        x: 200, opacity: 0, rotation: 15, scale: 0.8, duration: 1.1, ease: "expo.out",
      }, 0);

      gsap.to(imgRef.current, {
        y: -14, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className={`w-full min-h-[80vh] lg:min-h-screen rounded-b-4xl bg-gradient-to-br ${bg} relative flex flex-col lg:flex-row items-center lg:justify-between px-4 sm:px-6 lg:px-10 pt-28 sm:pt-32 lg:pt-40 pb-12 lg:pb-20 overflow-hidden`}
    >
      <div className="w-full lg:max-w-[560px] z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
        {eyebrow && (
          <span className="text-white/60 text-xs sm:text-sm tracking-[3px] uppercase mb-3">
            {eyebrow}
          </span>
        )}
        <h1
          ref={titleRef}
          className="text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] font-extrabold text-white leading-[1.05] tracking-[-1px] lg:tracking-[-2px] uppercase"
        >
          {title}
        </h1>

        <div
          ref={dividerRef}
          className="h-[2px] w-48 sm:w-64 lg:w-80 mt-4 lg:mt-6"
          style={{ background: `linear-gradient(to right, ${accent || "#fff"}, transparent)` }}
        />

        {description && (
          <p
            ref={descRef}
            className="w-full max-w-[520px] mx-auto lg:mx-0 text-white/85 text-sm sm:text-base leading-[1.7] mt-5 lg:mt-7"
          >
            {description}
          </p>
        )}

        {badges.length > 0 && (
          <div ref={badgesRef} className="flex gap-2.5 mt-5 lg:mt-7 justify-center lg:justify-start flex-wrap">
            {badges.map((b) => (
              <span
                key={b}
                className="py-1.5 px-3 sm:py-2 sm:px-4 border border-white/40 rounded-full text-white/80 text-[10px] sm:text-[11px] tracking-[1.5px] uppercase font-semibold"
              >
                {b}
              </span>
            ))}
          </div>
        )}
      </div>

      {image && (
        <div className="relative w-full lg:w-[50%] flex items-center justify-center mt-8 lg:mt-0 z-0">
          <img
            ref={imgRef}
            src={image}
            alt={title}
            className="w-[clamp(220px,60vw,500px)] lg:w-[clamp(320px,40vw,600px)]"
            style={{ filter: "drop-shadow(0 30px 80px rgba(0,0,0,0.6))" }}
          />
        </div>
      )}
    </section>
  );
};

export default PageHero;
