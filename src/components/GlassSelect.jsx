import React, { useEffect, useRef, useState } from "react";

const GlassSelect = ({ label, value, options, onChange, className = "" }) => {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const selected = options.find((option) => option.value === value) || options[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!wrapRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleSelect = (nextValue) => {
    onChange(nextValue);
    setOpen(false);
  };

  return (
    <div ref={wrapRef} className={`relative ${className}`}>
      {label && (
        <span className="block text-white/50 text-xs tracking-[2px] uppercase mb-2">
          {label}
        </span>
      )}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="w-full min-w-[170px] flex items-center justify-between gap-3 bg-white/10 hover:bg-white/15 border border-white/10 text-white text-sm rounded-full lg:rounded-2xl px-4 py-2.5 outline-none transition-all backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="font-semibold truncate">{selected?.label}</span>
        <i
          className={`ri-arrow-down-s-line text-lg transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 left-0 top-[calc(100%+10px)] z-50 rounded-3xl border border-white/10 bg-black/75 backdrop-blur-2xl p-2 shadow-2xl overflow-hidden"
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              role="option"
              aria-selected={option.value === value}
              onClick={() => handleSelect(option.value)}
              className={`w-full flex items-center justify-between text-left px-4 py-3 rounded-2xl text-sm transition-all ${
                option.value === value
                  ? "bg-white text-black font-bold"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span>{option.label}</span>
              {option.value === value && <i className="ri-check-line text-base" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default GlassSelect;
