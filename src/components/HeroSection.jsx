import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

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

  useGSAP(() => {
    if (!isLoaded) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // --- LEFT SIDE: slides in from left first ---
    tl.from(leftRef.current, {
      x: -80,
      opacity: 0,
      duration: 1,
    }, 0);

    // --- TITLE: drops down with a slight overshoot ---
    tl.from(titleRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.9,
      ease: "back.out(1.4)",
    }, 0.1);

    // --- SUBTITLE: rises up ---
    tl.from(subtitleRef.current, {
      y: 25,
      opacity: 0,
      duration: 0.7,
    }, 0.35);

    // --- DIVIDER LINE: width expands from 0 ---
    tl.from(dividerRef.current, {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 0.8,
      ease: "power2.inOut",
    }, 0.5);

    // --- DESCRIPTION: fades up ---
    tl.from(descRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.7,
    }, 0.6);

    // --- BADGES: pop in one by one ---
    tl.from(badgesRef.current?.querySelectorAll("span"), {
      y: 15,
      opacity: 0,
      scale: 0.85,
      duration: 0.5,
      stagger: 0.12,
      ease: "back.out(2)",
    }, 0.75);

    // --- RIGHT SIDE: slides in from right ---
    tl.from(rightRef.current, {
      x: 80,
      opacity: 0,
      duration: 0.9,
    }, 0.2);

    // --- SHOE: dramatic entrance from right with rotation ---
    tl.from(shoeRef.current, {
      x: 900,
      opacity: 0,
      scale: 0.75,
      rotation: 20,
      duration: 1.4,
      ease: "expo.out",
    }, 0.3);

    // --- PLATFORM ELLIPSES: fade in after shoe lands ---
    tl.from(platformRef.current, {
      opacity: 0,
      scale: 0.5,
      transformOrigin: "center center",
      duration: 0.6,
      ease: "power2.out",
    }, 1.4);

    // --- SCROLL INDICATOR: fades in last ---
    tl.from(scrollIndicatorRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.6,
    }, 1.6);

    // --- SHOE: infinite float after landing ---
    gsap.to(shoeRef.current, {
      y: -18,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1.8,
    });

    // --- PLATFORM: subtle pulse in sync with shoe float ---
    gsap.to(platformRef.current, {
      scaleX: 0.85,
      opacity: 0.5,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1.8,
    });

  }, [isLoaded]);


  // --- Shoe change animation ---
  // When user clicks arrow, shoe flies out then new one flies in
  const animateShoeChange = (newIndex) => {
    const shoeEl = shoeRef.current;

    // Phase 1: current shoe flies out to the left
    gsap.to(shoeEl, {
      x: -300,
      opacity: 0,
      scale: 0.8,
      rotation: -10,
      duration: 0.45,
      ease: "power2.in",
      onComplete: () => {

        // Switch shoe after it exits
        setCurrentIndex(newIndex);

        // Phase 2: new shoe flies in from the right
        gsap.fromTo(shoeEl,
          { x: 400, opacity: 0, scale: 0.8, rotation: 15 },
          { x: 0, opacity: 1, scale: 1, rotation: 0, duration: 0.7, ease: "expo.out" }
        );
      },
    });
  };

  const nextSlide = () => {
    animateShoeChange((currentIndex + 1) % shoes.length);
  };

  const prevSlide = () => {
    animateShoeChange(currentIndex === 0 ? shoes.length - 1 : currentIndex - 1);
  };


  const shoes = [
    {
      name: "Air More Uptempo",
      color: "Nero",
      image: "/images/tempo.png",
      bg: "from-[#2b2b2b] via-[#121212] to-[#000000]",
      price: "$229",
      rotate: "-20deg",
      scale: 0.95,
    },
    {
      name: "Air Jordan 18",
      color: "Verde",
      image: "/images/jordan.png",
      bg: "from-[#a8ff00] via-[#3a7d2c] to-[#041b12]",
      price: "$199",
      rotate: "20deg",
      translateY: "60px",
      scale: 1.1,
    },
    {
      name: "Air DT Max '96",
      color: "Rosso",
      image: "/images/dtmax.png",
      bg: "from-[#ff4d4d] via-[#c1121f] to-[#2b0000]",
      price: "$219",
      rotate: "-20deg",
      scale: 0.85,
    },
  ];

  return (
    <div
      ref={containerRef}
      className={`w-full min-h-screen lg:h-screen rounded-b-4xl bg-gradient-to-br ${shoes[currentIndex].bg} ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } transition-colors duration-700 relative flex flex-col lg:flex-row items-center lg:items-stretch lg:justify-between px-4 sm:px-6 lg:px-10 pt-24 pb-10 lg:pt-0 lg:pb-0 overflow-hidden`}
    >

      {/* ================= LEFT CONTENT ================= */}
      <div ref={leftRef} className="w-full lg:max-w-[480px] z-10 lg:mt-20 flex flex-col items-center lg:items-start text-center lg:text-left">

        <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-white leading-[1.1] tracking-[-1px] lg:tracking-[-1.5px]">
          <span>Rendi speciale</span><br />
          <span>ogni tuo </span> 
          <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.5)" }}>
            passo
          </span>.
        </h1>

        <h2 ref={subtitleRef} className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-[4px] sm:tracking-[6px] lg:tracking-[8px] uppercase text-white mt-6 lg:mt-12">
          {shoes[currentIndex].name}
        </h2>

        {/* Divider — now has its own ref for animation */}
        <div
          ref={dividerRef}
          className="h-[2px] w-64 sm:w-72 lg:w-82 mt-3"
          style={{ background: "linear-gradient(to right, #fff, transparent)" }}
        />

        <div className="w-full pt-4 lg:pt-45 lg:h-full">
          <p ref={descRef} className="w-full max-w-[420px] mx-auto lg:mx-0 text-white/85 text-[13px] lg:text-[14px] leading-[1.7] lg:leading-[1.8] mt-4 lg:mt-7">
            La Air Jordan 18 è una delle sneaker più raffinate e lussuose della linea Jordan, 
            progettata per rappresentare il capitolo finale 
            della leggendaria carriera NBA di Michael Jordan.
          </p>

          <div ref={badgesRef} className="flex gap-3 mt-5 lg:mt-8 justify-center lg:justify-start">
            <span className="py-2 px-4 border border-white/60 rounded-full text-white/80 text-[11px] tracking-[1.5px] uppercase font-semibold">
              Premium
            </span>
            <span className="py-2 px-4 border border-white/60 rounded-full text-white/80 text-[11px] tracking-[1.5px] uppercase font-semibold">
              2026
            </span>
          </div>
        </div>
      </div>


      {/* ================= SHOES SLIDER ================= */}
      <div
        ref={shoeRef}
        className="relative lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-full lg:w-[600px] h-[260px] sm:h-[340px] lg:h-[600px] flex items-center justify-center my-4 lg:my-0"
      >
        {/* Only render the active shoe — GSAP handles all transitions */}
        <img
          src={shoes[currentIndex].image}
          alt={shoes[currentIndex].color}
          className="absolute w-[clamp(220px,65vw,360px)] lg:w-[clamp(300px,35vw,650px)]"
          style={{
            transform: `rotate(${shoes[currentIndex].rotate}) translateY(${shoes[currentIndex].translateY || "0px"}) scale(${shoes[currentIndex].scale})`,
            filter: "drop-shadow(0 30px 80px rgba(0,0,0,0.6))",
          }}
        />

        {/* Platform ellipses — now has ref for animation */}
        <svg
          ref={platformRef}
          className="absolute top-full -translate-y-12 w-[280px] sm:w-[360px] lg:w-[500px] h-20"
          viewBox="0 0 500 80"
          preserveAspectRatio="xMidYMid meet"
        >
          <ellipse cx="250" cy="40" rx="200" ry="35"
            fill="none" stroke="rgba(255,255,255,0.3)"
            strokeWidth="2" strokeDasharray="5,5"
          />
          <ellipse cx="250" cy="40" rx="180" ry="30"
            fill="none" stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
          />
        </svg>

        {/* ============ MOBILE ARROWS (inside shoe wrapper) ============ */}
        <button
          onClick={prevSlide}
          aria-label="Previous shoe"
          className="lg:hidden absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-50 text-white text-2xl sm:text-3xl cursor-pointer bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-full transition-all duration-300"
        >
          <i className="ri-arrow-left-s-line" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next shoe"
          className="lg:hidden absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-50 text-white text-2xl sm:text-3xl cursor-pointer bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-full transition-all duration-300"
        >
          <i className="ri-arrow-right-s-line" />
        </button>
      </div>


      {/* ================= RIGHT CONTENT ================= */}
      <div ref={rightRef} className="flex flex-col gap-4 lg:gap-8 items-center lg:items-end z-10 w-full lg:w-auto">

        <div className="backdrop-blur-md border mt-4 lg:mt-10 border-white/20 rounded-2xl p-4 lg:p-6 w-full max-w-[340px] lg:w-auto lg:max-w-none">
          <p className="flex items-center gap-2 text-[12px] font-bold tracking-[3px] uppercase text-white/80 mb-3 lg:mb-4">
            <span className="w-2 h-2 rounded-full bg-white block" />
            Colore : {shoes[currentIndex].color}
          </p>
          <p className="flex items-center gap-2 text-[12px] font-bold tracking-[3px] uppercase text-white/80 mb-3 lg:mb-4">
            <span className="w-2 h-2 rounded-full bg-white block" />
            Seleziona taglia (EU)
          </p>
          <div className="flex flex-wrap gap-2 max-w-full lg:max-w-[220px] justify-start lg:justify-end">
            {[36, 37, 38, 39, 40, 41, 42].map((s) => (
              <button
                key={s}
                className="w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center border border-white/30 rounded-full text-white/60 text-xs cursor-pointer transition-all hover:border-white hover:text-white hover:bg-white/20"
                style={s === 11 ? { background: "rgba(255,255,255,0.95)", color: "#000", borderColor: "#fff", fontWeight: 700 } : {}}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-3 flex-row lg:flex-col">
          <i className="ri-instagram-line text-xl lg:text-2xl text-white/70 hover:text-white cursor-pointer transition-all hover:scale-110 duration-300 bg-white/10 py-2 px-3 rounded-full" />
          <i className="ri-facebook-circle-line text-xl lg:text-2xl text-white/70 hover:text-white cursor-pointer transition-all hover:scale-110 duration-300 bg-white/10 py-2 px-3 rounded-full" />
          <i className="ri-twitter-line text-xl lg:text-2xl text-white/70 hover:text-white cursor-pointer transition-all hover:scale-110 duration-300 bg-white/10 py-2 px-3 rounded-full" />
        </div>

        <div className="flex items-center mt-2 lg:mt-10 gap-3 lg:gap-4 bg-white/15 border border-white/30 rounded-full p-2 px-4 lg:px-6 cursor-pointer hover:bg-white/25 transition-all duration-300">
          <button className="bg-white text-black text-[11px] lg:text-[12px] font-extrabold tracking-[2px] uppercase py-2.5 lg:py-3 px-5 lg:px-6 rounded-full hover:shadow-lg duration-300">
            Buy Now
          </button>
          <span className="text-white text-[20px] lg:text-[24px] font-black tracking-[-0.5px]">
            {shoes[currentIndex].price}
          </span>
        </div>
      </div>


      {/* ================= SCROLL INDICATOR (desktop only) ================= */}
      <div
        ref={scrollIndicatorRef}
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-bounce z-30"
      >
        <span className="text-white/50 text-xs">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </div>


      {/* ================= DESKTOP ARROWS ================= */}
      <button
        onClick={prevSlide}
        aria-label="Previous shoe"
        className="hidden lg:block absolute left-50 top-120 z-50 -translate-y-1/2 text-white text-4xl cursor-pointer bg-white/10 hover:bg-white/20 px-3 py-2 rounded-full transition-all duration-300 hover:scale-110"
      >
        <i className="ri-arrow-left-s-line" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next shoe"
        className="hidden lg:block absolute right-50 top-120 z-50 -translate-y-1/2 text-white text-4xl cursor-pointer bg-white/10 hover:bg-white/20 px-3 py-2 rounded-full transition-all duration-300 hover:scale-110"
      >
        <i className="ri-arrow-right-s-line" />
      </button>

    </div>
  );
};

export default HeroSection;
