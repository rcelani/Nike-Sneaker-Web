import { products as mockProducts } from "../data/products";
import { mapApiProductToProduct, mapApiProductsToProducts } from "../mappers/productMapper";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const hasApiBaseUrl = () => Boolean(API_BASE_URL);

const shouldLogFallback = (error) => error?.message !== "API base URL non configurato";

const sortAliasMap = {
  featured: "featured",
  newest: "newest",
  "price-asc": "price-asc",
  "price-desc": "price-desc",
  rating: "rating-desc",
  "rating-desc": "rating-desc",
  name: "name",
};

const normalizeFiltersForApi = (filters = {}) => {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "" || value === "all") return;

    if (["minPrice", "maxPrice"].includes(key)) {
      params.set(key, String(Math.round(Number(value) * 100)));
      return;
    }

    if (key === "sort") {
      params.set(key, sortAliasMap[value] || value);
      return;
    }

    params.set(key, String(value));
  });

  return params;
};

const requestApi = async (path, filters = {}) => {
  if (!hasApiBaseUrl()) {
    throw new Error("API base URL non configurato");
  }

  const params = normalizeFiltersForApi(filters);
  const queryString = params.toString();
  const response = await fetch(`${API_BASE_URL}${path}${queryString ? `?${queryString}` : ""}`);
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data?.message || "Errore durante il caricamento dei prodotti");
  }

  return data;
};

const applyMockFilters = (products, filters = {}) => {
  let result = [...products];

  if (filters.category && filters.category !== "all") {
    result = result.filter((product) => product.category === filters.category);
  }

  if (filters.sport && filters.sport !== "all") {
    result = result.filter((product) => product.category === filters.sport);
  }

  if (filters.gender && filters.gender !== "all") {
    result = result.filter((product) => product.gender === filters.gender);
  }

  if (filters.type && filters.type !== "all") {
    result = result.filter((product) => product.type === filters.type);
  }

  if (filters.isNewArrival !== undefined) {
    result = result.filter((product) => Boolean(product.newArrival) === Boolean(filters.isNewArrival));
  }

  if (filters.isOutlet !== undefined) {
    result = result.filter((product) =>
      Boolean(product.outlet || (product.originalPrice && product.originalPrice > product.price)) === Boolean(filters.isOutlet)
    );
  }

  if (filters.isFeatured !== undefined) {
    result = result.filter((product) =>
      Boolean(product.isFeatured || product.badges?.includes("Bestseller") || product.rating >= 4.8) === Boolean(filters.isFeatured)
    );
  }

  if (filters.minPrice !== undefined) {
    result = result.filter((product) => product.price >= Number(filters.minPrice));
  }

  if (filters.maxPrice !== undefined) {
    result = result.filter((product) => product.price <= Number(filters.maxPrice));
  }

  if (filters.search) {
    const normalizedSearch = String(filters.search).trim().toLowerCase();
    result = result.filter((product) =>
      [
        product.name,
        product.brand,
        product.color,
        product.category,
        product.type,
        product.shortDescription,
        product.description,
      ]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(normalizedSearch))
    );
  }

  switch (filters.sort) {
    case "price-asc":
      result.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      result.sort((a, b) => b.price - a.price);
      break;
    case "rating":
    case "rating-desc":
    case "featured":
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      break;
    case "name":
      result.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "newest":
      result.sort((a, b) => (b.releaseYear || 0) - (a.releaseYear || 0));
      break;
    default:
      break;
  }

  const limit = Number(filters.limit);
  if (Number.isFinite(limit) && limit > 0) {
    result = result.slice(0, limit);
  }

  return result.map(mapApiProductToProduct);
};

const extractProductsFromResponse = (response) => {
  if (Array.isArray(response)) return response;
  if (Array.isArray(response?.data)) return response.data;
  if (Array.isArray(response?.products)) return response.products;
  return [];
};

export const getProducts = async (filters = {}) => {
  try {
    const data = await requestApi("/products", filters);
    return mapApiProductsToProducts(extractProductsFromResponse(data));
  } catch (error) {
    if (shouldLogFallback(error)) console.warn("Uso prodotti mock per fallback:", error.message);
    return applyMockFilters(mockProducts, filters);
  }
};

export const getProductBySlug = async (slug) => {
  try {
    const data = await requestApi(`/products/${slug}`);
    return mapApiProductToProduct(data?.data || data);
  } catch (error) {
    if (shouldLogFallback(error)) console.warn("Uso dettaglio prodotto mock per fallback:", error.message);
    return mapApiProductToProduct(mockProducts.find((product) => product.slug === slug));
  }
};

export const getFeaturedProducts = async (limit = 4) => {
  try {
    const data = await requestApi("/products/featured", { limit });
    return mapApiProductsToProducts(extractProductsFromResponse(data)).slice(0, limit);
  } catch (error) {
    if (shouldLogFallback(error)) console.warn("Uso featured mock per fallback:", error.message);
    return applyMockFilters(mockProducts, { isFeatured: true, sort: "featured", limit });
  }
};

export const getNewArrivals = async (limit = 12) => {
  try {
    const data = await requestApi("/products/new-arrivals", { limit });
    return mapApiProductsToProducts(extractProductsFromResponse(data)).slice(0, limit);
  } catch (error) {
    if (shouldLogFallback(error)) console.warn("Uso novità mock per fallback:", error.message);
    return applyMockFilters(mockProducts, { isNewArrival: true, sort: "featured", limit });
  }
};

export const getOutletProducts = async () => {
  try {
    const data = await requestApi("/products/outlet");
    return mapApiProductsToProducts(extractProductsFromResponse(data));
  } catch (error) {
    if (shouldLogFallback(error)) console.warn("Uso outlet mock per fallback:", error.message);
    return applyMockFilters(mockProducts, { isOutlet: true, sort: "price-asc" }).sort(
      (a, b) => ((b.originalPrice - b.price) / b.originalPrice) - ((a.originalPrice - a.price) / a.originalPrice)
    );
  }
};

export const getProductsByCategory = (category, filters = {}) =>
  getProducts({ ...filters, category });

export const getProductsByGender = (gender, filters = {}) =>
  getProducts({ ...filters, gender });

export const getRelatedProducts = async (currentSlug, category, limit = 4) => {
  const products = await getProducts({ category, limit: limit + 1 });
  return products.filter((product) => product.slug !== currentSlug).slice(0, limit);
};

export const searchProducts = (search, filters = {}) =>
  getProducts({ ...filters, search });
