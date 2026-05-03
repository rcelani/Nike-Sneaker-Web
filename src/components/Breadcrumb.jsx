import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ items = [] }) => {
  return (
    <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-white/60 mb-6 lg:mb-8">
      <ol className="flex items-center flex-wrap gap-1.5">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {item.to && !last ? (
                <Link to={item.to} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span
                  className={last ? "text-white font-semibold" : ""}
                  aria-current={last ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
              {!last && <i className="ri-arrow-right-s-line text-white/40" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
