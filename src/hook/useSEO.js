import { useEffect, useMemo } from "react";

/**
 * Aggiorna document title, meta tags, canonical e JSON-LD per pagina.
 * Nota: per una SPA client-side è utile, ma per SEO avanzata resta preferibile prerender/SSR.
 */
export const useSEO = ({ title, description, image, jsonLd, canonical }) => {
  const jsonLdString = useMemo(
    () => (jsonLd ? JSON.stringify(jsonLd) : ""),
    [jsonLd]
  );

  useEffect(() => {
    const canonicalUrl = canonical || `${window.location.origin}${window.location.pathname}`;

    if (title) {
      document.title = title;
      setMeta("og:title", title, true);
      setMeta("twitter:title", title);
    }

    if (description) {
      setMeta("description", description);
      setMeta("og:description", description, true);
      setMeta("twitter:description", description);
    }

    if (image) {
      const absolute = image.startsWith("http")
        ? image
        : window.location.origin + image;
      setMeta("og:image", absolute, true);
      setMeta("twitter:image", absolute);
    }

    setMeta("og:url", canonicalUrl, true);
    setMeta("twitter:card", "summary_large_image");
    setLinkRel("canonical", canonicalUrl);

    const old = document.getElementById("page-jsonld");
    if (old) old.remove();

    let scriptEl = null;
    if (jsonLdString) {
      scriptEl = document.createElement("script");
      scriptEl.type = "application/ld+json";
      scriptEl.id = "page-jsonld";
      scriptEl.text = jsonLdString;
      document.head.appendChild(scriptEl);
    }

    return () => {
      if (scriptEl?.parentNode) {
        scriptEl.parentNode.removeChild(scriptEl);
      }
    };
  }, [title, description, image, canonical, jsonLdString]);
};

const setMeta = (name, content, isProperty = false) => {
  const attr = isProperty ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setLinkRel = (rel, href) => {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

export default useSEO;
