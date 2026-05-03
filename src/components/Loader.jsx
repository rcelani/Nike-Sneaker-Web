import React, { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Loader = ({ onComplete }) => {
  const [showSplit, setShowSplit] = useState(false);
  const [count, setCount] = useState(0);
  const logoRef = useRef(null);
  const barContainerRef = useRef(null);
  const barFillRef = useRef(null);
  const counterRef = useRef(null);
  const labelRef = useRef(null);
  const groupRef = useRef(null);
  const splitUpRef = useRef(null);
  const splitDownRef = useRef(null);

  useEffect(() => {
    let start = null;
    const duration = 2400;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * 100));
      if (progress < 1) requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(
      [logoRef.current, counterRef.current, barContainerRef.current, labelRef.current],
      { y: 20, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power2.out" }
    );
    tl.to(barFillRef.current, { width: "100%", duration: 2.4, ease: "power1.inOut" }, 0.8);
    tl.to(groupRef.current, { opacity: 0, duration: 0.5, ease: "power2.inOut" }, 3.2);
  }, []);

  useEffect(() => {
    const splitTimer = setTimeout(() => setShowSplit(true), 3700);
    const completeTimer = setTimeout(() => onComplete?.(), 4600);
    return () => {
      clearTimeout(splitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  useGSAP(() => {
    if (!showSplit) return;
    gsap.to(splitUpRef.current, { xPercent: 100, opacity: 0, duration: 0.9, ease: "power3.inOut" });
    gsap.to(splitDownRef.current, { xPercent: -100, opacity: 0, duration: 0.9, ease: "power3.inOut" });
  }, [showSplit]);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0a0a0a]">
      <p className="absolute inset-0 flex items-center justify-center text-white/20 text-base sm:text-lg lg:text-xl tracking-widest uppercase pointer-events-none px-4 text-center">
        Just do it.
      </p>

      <div
        ref={groupRef}
        className="absolute inset-0 flex flex-col items-center justify-center gap-4 sm:gap-6 px-4"
      >
        <img
          ref={logoRef}
          src="/images/nike-logo.png"
          className="w-32 pl-6 sm:w-40 sm:pl-8 lg:w-50 lg:pl-10 mb-6 sm:mb-8 lg:mb-10 invert"
          alt="Nike"
        />

        <div ref={barContainerRef} className="w-40 sm:w-44 lg:w-48 h-[1px] bg-white/10 relative">
          <div ref={barFillRef} className="h-full bg-white" style={{ width: "0%" }} />
        </div>

        <span ref={labelRef} className="text-[10px] text-white/25 uppercase tracking-[0.15em]">
          Loading {count}%
        </span>
      </div>

      {showSplit && (
        <>
          <div ref={splitUpRef} className="absolute top-0 left-0 w-full h-1/2 bg-[#0a0a0a] z-50" />
          <div ref={splitDownRef} className="absolute bottom-0 left-0 w-full h-1/2 bg-[#0a0a0a] z-50" />
        </>
      )}
    </div>
  );
};

export default Loader;
