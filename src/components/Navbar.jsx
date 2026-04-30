import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef, useState } from "react";

const Navbar = ({ isLoaded }) => {

  const navref = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false);

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=>{
    if(!isLoaded) return;

    gsap.from(navref.current,{
      y:-100,
      duration:0.8,
      opacity:0,
    })
  },[isLoaded])

  return (
    <div ref={navref} className="w-full flex items-center justify-between relative px-0 lg:px-10">
      
      {/* Logo */}
      <div className="logo">
        <img className="h-7 sm:h-8 lg:h-10" src="/images/nike-logo.png" alt="Nike Logo" />
      </div>

      {/* Nav Links - desktop only */}
      <div className="hidden lg:flex navlinks bg-black/10 backdrop-blur-md p-1 rounded-full border border-white/10 items-center gap-8">
        <a 
          href="#" 
          className="bg-white text-black py-3 px-5 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-white/20 transition-all duration-300"
        >
          Home
        </a>
        <a 
          href="#" 
          className="text-white py-2 px-4 rounded-full hover:bg-white/10 transition-all duration-300 text-sm"
        >
          Chi Siamo
        </a>
        <a 
          href="#" 
          className="text-white py-2 px-4 rounded-full hover:bg-white/10 transition-all duration-300 text-sm"
        >
          Prezzi
        </a>
        <a 
          href="#" 
          className="text-white py-2 px-4 rounded-full hover:bg-white/10 transition-all duration-300 text-sm"
        >
          Contatti
        </a>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
        <button className="text-white text-base sm:text-lg lg:text-xl bg-white/10 cursor-pointer hover:bg-white/20 py-1.5 px-2.5 sm:py-2 sm:px-3 rounded-full transition-all duration-300 hover:scale-110">
          <i className="ri-search-line"></i>
        </button>
        <button className="text-white text-base sm:text-lg lg:text-xl bg-white/10 cursor-pointer hover:bg-white/20 py-1.5 px-2.5 sm:py-2 sm:px-3 rounded-full transition-all duration-300 hover:scale-110">
          <i className="ri-shopping-bag-line"></i>
        </button>
        {/* Mobile hamburger toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          className="lg:hidden text-white text-base sm:text-lg bg-white/10 cursor-pointer hover:bg-white/20 py-1.5 px-2.5 sm:py-2 sm:px-3 rounded-full transition-all duration-300"
        >
          <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-3 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 p-3 flex flex-col gap-2 z-50">
          <a 
            href="#" 
            className="bg-white text-black py-2.5 px-4 rounded-full font-semibold text-sm text-center transition-all"
          >
            Home
          </a>
          <a 
            href="#" 
            className="text-white py-2.5 px-4 rounded-full hover:bg-white/10 transition-all text-sm text-center"
          >
            Chi Siamo
          </a>
          <a 
            href="#" 
            className="text-white py-2.5 px-4 rounded-full hover:bg-white/10 transition-all text-sm text-center"
          >
            Prezzi
          </a>
          <a 
            href="#" 
            className="text-white py-2.5 px-4 rounded-full hover:bg-white/10 transition-all text-sm text-center"
          >
            Contatti
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
