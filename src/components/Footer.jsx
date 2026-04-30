import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

  // --- Tutti i Refs ---
  const footerRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);

  const col1Ref = useRef(null);
  const col2Ref = useRef(null);
  const col3Ref = useRef(null);
  const col4Ref = useRef(null);
  const col5Ref = useRef(null);

  const bottomRef = useRef(null);

  useGSAP(() => {

    // ================================
    // TITOLO GRANDE — sale dal basso
    // ================================
    gsap.fromTo(headingRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power4.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // ================================
    // PULSANTE CTA — appare dopo il titolo
    // ================================
    gsap.fromTo(buttonRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        delay: 0.3,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 92%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // ================================
    // COLONNE GRID — ognuna sale
    // con un ritardo sfalsato così entrano
    // una dopo l'altra da sinistra a destra
    // ================================
    gsap.fromTo(
      [col1Ref.current, col2Ref.current, col3Ref.current, col4Ref.current, col5Ref.current],
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,       // ogni colonna entra 0.12s dopo la precedente
        immediateRender: false,
        scrollTrigger: {
          trigger: col1Ref.current,
          start: "top 92%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // ================================
    // BARRA INFERIORE — appare per ultima
    // ================================
    gsap.fromTo(bottomRef.current,
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: bottomRef.current,
          start: "top 98%",
          toggleActions: "play none none reverse",
        },
      }
    );

  }, { scope: footerRef });

  return (
    <footer
      ref={footerRef}
      className="min-h-screen w-screen bg-gradient-to-b from-[#0a0a0a] to-black text-white px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 flex flex-col justify-between"
    >

      {/* CTA SUPERIORE GRANDE */}
      <div>
        <h1
          ref={headingRef}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-tight max-w-4xl"
        >
          Progettata per le performance.
          <br />
          Pensata per ogni giorno.
        </h1>

        <button
          ref={buttonRef}
          className="mt-6 sm:mt-10 px-6 sm:px-8 py-3 bg-white text-black font-semibold text-sm tracking-wide hover:bg-neutral-200 transition"
        >
          Esplora la collezione
        </button>
      </div>

      {/* GRID CENTRALE */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10 mt-12 sm:mt-16 lg:mt-20">

        <div ref={col1Ref}>
          <h2 className="text-sm tracking-widest text-white/50 mb-4">PRODOTTI</h2>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="hover:text-white transition">Running</li>
            <li className="hover:text-white transition">Tennis</li>
            <li className="hover:text-white transition">Training</li>
            <li className="hover:text-white transition">Basketball</li>
            <li className="hover:text-white transition">Lifestyle</li>
          </ul>
        </div>

        <div ref={col2Ref}>
          <h2 className="text-sm tracking-widest text-white/50 mb-4">FEATURES</h2>
          <ul className="space-y-3 text-sm text-white/80">
            <li>Traction Grip</li>
            <li>Impact Foam</li>
            <li>Ultra Light</li>
            <li>Rapid Dry</li>
          </ul>
        </div>

        <div ref={col3Ref}>
          <h2 className="text-sm tracking-widest text-white/50 mb-4">AZIENDA</h2>
          <ul className="space-y-3 text-sm text-white/80">
            <li>Chi siamo</li>
            <li>Lavora con noi</li>
            <li>News</li>
            <li>Investitori</li>
          </ul>
        </div>

        <div ref={col4Ref}>
          <h2 className="text-sm tracking-widest text-white/50 mb-4">SUPPORTO</h2>
          <ul className="space-y-3 text-sm text-white/80">
            <li>Contatti</li>
            <li>Spedizioni</li>
            <li>Resi</li>
            <li>Centro assistenza</li>
          </ul>
        </div>

        <div ref={col5Ref} className="col-span-2 md:col-span-1">
          <h2 className="text-sm tracking-widest text-white/50 mb-4">RESTA AGGIORNATO</h2>
          <p className="text-sm text-white/60 mb-4">
            Ricevi aggiornamenti sulle nuove uscite e sulle offerte esclusive.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
            <input
              type="email"
              placeholder="Indirizzo email"
              className="w-full px-3 py-2 bg-white/10 text-sm outline-none"
            />
            <button className="px-4 py-2 sm:py-0 bg-white text-black text-sm font-semibold whitespace-nowrap">
              Iscriviti
            </button>
          </div>
        </div>

      </div>

      {/* FONDO */}
      <div
        ref={bottomRef}
        className="flex flex-col md:flex-row justify-between items-center text-xs text-white/50 mt-10 border-t border-white/10 pt-6 gap-4 md:gap-0"
      >
        <p className="text-center md:text-left">© 2026 Nike. Tutti i diritti riservati.</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <span className="hover:text-white transition">Privacy</span>
          <span className="hover:text-white transition">Termini</span>
          <span className="hover:text-white transition">Cookies</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
