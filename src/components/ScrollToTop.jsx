import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Al cambio di route, scrolla in cima.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
