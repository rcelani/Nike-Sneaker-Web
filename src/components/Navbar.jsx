import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { categories, genders } from "../data/categories";
import { useCart } from "../context/useCart";

const shopLinks = [
  { label: "Tutta la collezione", to: "/collezione", icon: "ri-layout-grid-line" },
  ...genders.map((gender) => ({
    label: gender.name,
    to: `/genere/${gender.slug}`,
    icon: gender.icon,
  })),
];

const SearchOverlay = ({ open, onClose }) => {
  const inputRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const frame = requestAnimationFrame(() => inputRef.current?.focus());
    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  useGSAP(
    () => {
      if (!open || !overlayRef.current) return;

      gsap.fromTo(
        overlayRef.current,
        { opacity: 0, y: -18, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: "power3.out" }
      );
    },
    { dependencies: [open], scope: overlayRef }
  );

  if (!open) return null;

  return (
    <div className="fixed inset-x-4 top-24 sm:top-28 z-[80] lg:inset-x-auto lg:right-10 lg:w-[520px]">
      <div
        ref={overlayRef}
        className="rounded-[2rem] border border-white/10 bg-black/75 backdrop-blur-2xl p-4 sm:p-5 shadow-2xl"
      >
        <div className="flex items-center gap-3">
          <i className="ri-search-line text-white/60 text-xl" />
          <input
            ref={inputRef}
            type="search"
            placeholder="Cerca sneaker, sport, accessori..."
            className="w-full bg-transparent text-white placeholder:text-white/35 outline-none text-sm sm:text-base"
            aria-label="Campo ricerca"
          />
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Chiudi ricerca"
          >
            <i className="ri-close-line" />
          </button>
        </div>
        <p className="text-white/35 text-xs mt-3 pl-8">
          Ricerca solo visuale: l'input è pronto, la funzione risultati verrà collegata più avanti.
        </p>
      </div>
    </div>
  );
};

const DesktopDropdown = ({ label, active, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`text-white py-2 px-4 rounded-full hover:bg-white/10 transition-all duration-300 text-sm flex items-center gap-1 ${
          active ? "bg-white/10" : ""
        }`}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {label}
        <i className={`ri-arrow-down-s-line text-xs transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-2 min-w-[220px] flex flex-col gap-1 shadow-2xl">
          {children}
        </div>
      )}
    </div>
  );
};

const Navbar = ({ isLoaded }) => {
  const navref = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const { cartCount } = useCart();

  useGSAP(() => {
    if (!isLoaded) return;
    gsap.from(navref.current, { y: -100, duration: 0.8, opacity: 0 });
  }, [isLoaded]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMenuOpen(false);
      setSearchOpen(false);
    });

    return () => cancelAnimationFrame(frame);
  }, [location.pathname]);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "bg-white text-black py-3 px-5 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-white/20 transition-all duration-300"
      : "text-white py-2 px-4 rounded-full hover:bg-white/10 transition-all duration-300 text-sm";

  const dropdownLinkClass = "text-white text-sm py-2.5 px-3 rounded-2xl hover:bg-white/10 flex items-center gap-2 transition-colors";

  return (
    <>
      <nav
        ref={navref}
        className="w-full flex items-center justify-between relative px-0 lg:px-10"
        aria-label="Menu principale"
      >
        <Link to="/" aria-label="Vai alla homepage">
          <img className="h-7 sm:h-8 lg:h-10" src="/images/nike-logo.png" alt="Nike Logo" />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex bg-black/10 backdrop-blur-md p-1 rounded-full border border-white/10 items-center gap-1 xl:gap-2">
          <NavLink to="/" end className={navLinkClass}>Home</NavLink>

          <DesktopDropdown label="Shop" active={location.pathname.startsWith("/collezione") || location.pathname.startsWith("/genere")}>
            {shopLinks.map((link) => (
              <Link key={link.to} to={link.to} className={dropdownLinkClass}>
                <i className={`${link.icon} text-base opacity-70`} />
                {link.label}
              </Link>
            ))}
          </DesktopDropdown>

          <DesktopDropdown label="Sport" active={location.pathname.startsWith("/sport")}>
            {categories.map((cat) => (
              <Link key={cat.slug} to={`/sport/${cat.slug}`} className={dropdownLinkClass}>
                <i className={`${cat.icon} text-base opacity-70`} />
                {cat.name}
              </Link>
            ))}
          </DesktopDropdown>

          <NavLink to="/novita" className={navLinkClass}>Novità</NavLink>
          <NavLink to="/outlet" className={navLinkClass}>Outlet</NavLink>
          <NavLink to="/contatti" className={navLinkClass}>Contatti</NavLink>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Cerca"
            className="text-white text-base sm:text-lg lg:text-xl bg-white/10 cursor-pointer hover:bg-white/20 py-1.5 px-2.5 sm:py-2 sm:px-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <i className="ri-search-line" />
          </button>

          <Link
            to="/carrello"
            aria-label="Carrello"
            className="relative text-white text-base sm:text-lg lg:text-xl bg-white/10 cursor-pointer hover:bg-white/20 py-1.5 px-2.5 sm:py-2 sm:px-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <i className="ri-shopping-bag-line" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-5 h-5 px-1 rounded-full bg-white text-black text-[10px] font-black flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            className="lg:hidden text-white text-base sm:text-lg bg-white/10 cursor-pointer hover:bg-white/20 py-1.5 px-2.5 sm:py-2 sm:px-3 rounded-full transition-all duration-300"
          >
            <i className={menuOpen ? "ri-close-line" : "ri-menu-line"} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-3 bg-black/75 backdrop-blur-2xl rounded-3xl border border-white/10 p-3 flex flex-col gap-1 z-50 max-h-[80vh] overflow-y-auto shadow-2xl">
            <MobileNavLink to="/" label="Home" end />

            <MobileGroup title="Shop">
              {shopLinks.map((link) => (
                <MobileNavLink key={link.to} to={link.to} label={link.label} icon={link.icon} />
              ))}
            </MobileGroup>

            <MobileGroup title="Sport">
              {categories.map((cat) => (
                <MobileNavLink key={cat.slug} to={`/sport/${cat.slug}`} label={cat.name} icon={cat.icon} />
              ))}
            </MobileGroup>

            <MobileGroup title="Pagine">
              <MobileNavLink to="/novita" label="Novità" icon="ri-sparkling-line" />
              <MobileNavLink to="/outlet" label="Outlet" icon="ri-price-tag-3-line" />
              <MobileNavLink to="/carrello" label="Carrello" icon="ri-shopping-bag-line" />
              <MobileNavLink to="/contatti" label="Contatti" icon="ri-map-pin-line" />
            </MobileGroup>
          </div>
        )}
      </nav>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

const MobileGroup = ({ title, children }) => (
  <div className="border-t border-white/10 pt-2 mt-1 flex flex-col gap-1">
    <div className="text-white/40 text-[10px] tracking-[2px] uppercase px-4 mb-1">{title}</div>
    {children}
  </div>
);

const MobileNavLink = ({ to, label, icon, end }) => (
  <NavLink
    to={to}
    end={end}
    className={({ isActive }) =>
      `py-2.5 px-4 rounded-full text-sm transition-all flex items-center justify-center gap-2 ${
        isActive ? "bg-white text-black font-semibold" : "text-white hover:bg-white/10"
      }`
    }
  >
    {icon && <i className={`${icon} text-base`} />}
    {label}
  </NavLink>
);

export default Navbar;
