import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { categories, genders } from "../data/categories";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);
  const col3Ref = useRef(null);
  const col4Ref = useRef(null);
  const col5Ref = useRef(null);
  const bottomRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        headingRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.1, ease: "power4.out", immediateRender: false,
          scrollTrigger: { trigger: headingRef.current, start: "top 90%", toggleActions: "play none none reverse" },
        }
      );

      gsap.fromTo(
        buttonRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, delay: 0.3, ease: "power3.out", immediateRender: false,
          scrollTrigger: { trigger: buttonRef.current, start: "top 92%", toggleActions: "play none none reverse" },
        }
      );

      gsap.fromTo(
        [col1Ref.current, col2Ref.current, col3Ref.current, col4Ref.current, col5Ref.current],
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.12, immediateRender: false,
          scrollTrigger: { trigger: col1Ref.current, start: "top 92%", toggleActions: "play none none reverse" },
        }
      );

      gsap.fromTo(
        bottomRef.current,
        { opacity: 0, y: 15 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "power2.out", immediateRender: false,
          scrollTrigger: { trigger: bottomRef.current, start: "top 98%", toggleActions: "play none none reverse" },
        }
      );
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className="min-h-[80vh] w-screen bg-gradient-to-b from-[#0a0a0a] to-black text-white px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 flex flex-col justify-between"
    >
      <div>
        <h2
          ref={headingRef}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-tight max-w-4xl"
        >
          Progettata per le performance.
          <br />
          Pensata per ogni giorno.
        </h2>

        <Link
          ref={buttonRef}
          to="/collezione"
          className="inline-block mt-6 sm:mt-10 px-6 sm:px-8 py-3 bg-white text-black font-semibold text-sm tracking-wide hover:bg-neutral-200 transition"
        >
          Esplora la collezione
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10 mt-12 sm:mt-16 lg:mt-20">
        <div ref={col1Ref}>
          <h3 className="text-sm tracking-widest text-white/50 mb-4">SPORT</h3>
          <ul className="space-y-3 text-sm text-white/80">
            {categories.map((cat) => (
              <li key={cat.slug} className="hover:text-white transition">
                <Link to={`/sport/${cat.slug}`}>{cat.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div ref={col2Ref}>
          <h3 className="text-sm tracking-widest text-white/50 mb-4">PER TE</h3>
          <ul className="space-y-3 text-sm text-white/80">
            {genders.map((g) => (
              <li key={g.slug} className="hover:text-white transition">
                <Link to={`/genere/${g.slug}`}>{g.name}</Link>
              </li>
            ))}
            <li className="hover:text-white transition">
              <Link to="/collezione">Collezione completa</Link>
            </li>
          </ul>
        </div>

        <div ref={col3Ref}>
          <h3 className="text-sm tracking-widest text-white/50 mb-4">AZIENDA</h3>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="hover:text-white transition">
              <Link to="/chi-siamo">Chi siamo</Link>
            </li>
            <li>Lavora con noi</li>
            <li>News</li>
            <li>Investitori</li>
          </ul>
        </div>

        <div ref={col4Ref}>
          <h3 className="text-sm tracking-widest text-white/50 mb-4">SUPPORTO</h3>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="hover:text-white transition">
              <Link to="/contatti">Contatti</Link>
            </li>
            <li>Spedizioni</li>
            <li>Resi</li>
            <li>Centro assistenza</li>
          </ul>
        </div>

        <div ref={col5Ref} className="col-span-2 md:col-span-1">
          <h3 className="text-sm tracking-widest text-white/50 mb-4">RESTA AGGIORNATO</h3>
          <p className="text-sm text-white/60 mb-4">
            Ricevi aggiornamenti sulle nuove uscite e sulle offerte esclusive.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
            <input
              type="email"
              placeholder="Indirizzo email"
              aria-label="Indirizzo email"
              className="w-full px-3 py-2 bg-white/10 text-sm outline-none focus:bg-white/15"
            />
            <button className="px-4 py-2 sm:py-0 bg-white text-black text-sm font-semibold whitespace-nowrap hover:bg-neutral-200 transition">
              Iscriviti
            </button>
          </div>
        </div>
      </div>

      <div
        ref={bottomRef}
        className="flex flex-col md:flex-row justify-between items-center text-xs text-white/50 mt-10 border-t border-white/10 pt-6 gap-4 md:gap-0"
      >
        <p className="text-center md:text-left">© 2026 Nike. Tutti i diritti riservati.</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <span className="hover:text-white transition cursor-pointer">Privacy</span>
          <span className="hover:text-white transition cursor-pointer">Termini</span>
          <span className="hover:text-white transition cursor-pointer">Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
