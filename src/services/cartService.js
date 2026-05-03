import { products as mockProducts } from "../data/products";
import { buildAuthHeaders, getAccessToken } from "./authService";
import { getProductBySlug } from "./productService";
import { getSizeValue, getSizeVariantId, mapApiProductToProduct } from "../mappers/productMapper";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";
const CART_STORAGE_KEY = "nike-sneaker-cart";

const hasApiSession = () => Boolean(API_BASE_URL && getAccessToken());

const safeJson = async (response) => {
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data?.message || "Errore carrello");
  }

  return data;
};

const readStoredCart = () => {
  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const writeStoredCart = (items) => {
  try {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch {
    // localStorage potrebbe non essere disponibile in alcuni ambienti.
  }
};

const normalizeGuestItem = (item) => {
  if (!item) return null;

  const product =
    item.product ||
    item.productSnapshot ||
    mockProducts.find((candidate) => String(candidate.id) === String(item.productId));

  if (!product) return null;

  return {
    ...item,
    key: item.key || `${product.id}-${item.size}`,
    productId: item.productId || product.id,
    size: String(item.size),
    quantity: Number(item.quantity || 1),
    product: mapApiProductToProduct(product),
  };
};

const normalizeApiCartItem = (item) => {
  const product = mapApiProductToProduct(item.product);
  const size = item.variant?.size || item.size;

  return {
    key: item.id,
    cartItemId: item.id,
    productId: product?.id,
    variantId: item.variant?.id || item.variantId,
    size: String(size),
    quantity: Number(item.quantity || 1),
    unitPrice: item.unitPrice ? item.unitPrice / 100 : product?.price,
    product,
  };
};

export const getGuestCartItems = () => readStoredCart().map(normalizeGuestItem).filter(Boolean);

export const saveGuestCartItems = (items) => writeStoredCart(items);

export const addGuestCartItem = (product, sizeOption, quantity = 1) => {
  const size = getSizeValue(sizeOption);
  const variantId = getSizeVariantId(sizeOption);
  const productSnapshot = mapApiProductToProduct(product);
  const current = getGuestCartItems();
  const key = `${productSnapshot.id}-${size}`;
  const existing = current.find((item) => item.key === key);

  const next = existing
    ? current.map((item) =>
        item.key === key ? { ...item, quantity: item.quantity + quantity } : item
      )
    : [
        ...current,
        {
          key,
          productId: productSnapshot.id,
          variantId,
          size,
          quantity,
          productSnapshot,
        },
      ];

  writeStoredCart(next);
  return getGuestCartItems();
};

export const updateGuestCartItem = (key, quantity) => {
  const next = getGuestCartItems()
    .map((item) =>
      item.key === key ? { ...item, quantity: Math.max(1, Number(quantity)) } : item
    )
    .filter((item) => item.quantity > 0);

  writeStoredCart(next);
  return getGuestCartItems();
};

export const removeGuestCartItem = (key) => {
  const next = getGuestCartItems().filter((item) => item.key !== key);
  writeStoredCart(next);
  return getGuestCartItems();
};

export const clearGuestCart = () => {
  writeStoredCart([]);
  return [];
};

export const getCart = async () => {
  if (!hasApiSession()) return getGuestCartItems();

  const data = await fetch(`${API_BASE_URL}/cart`, {
    headers: buildAuthHeaders(),
  }).then(safeJson);

  return (data.items || []).map(normalizeApiCartItem).filter((item) => item.product);
};

export const addCartItem = async (product, sizeOption, quantity = 1) => {
  const variantId = getSizeVariantId(sizeOption);

  if (!hasApiSession() || !variantId) {
    return addGuestCartItem(product, sizeOption, quantity);
  }

  await fetch(`${API_BASE_URL}/cart/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...buildAuthHeaders(),
    },
    body: JSON.stringify({ variantId, quantity }),
  }).then(safeJson);

  return getCart();
};

export const updateCartItemQuantity = async (item, quantity) => {
  if (!hasApiSession() || !item.cartItemId) {
    return updateGuestCartItem(item.key, quantity);
  }

  await fetch(`${API_BASE_URL}/cart/items/${item.cartItemId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      ...buildAuthHeaders(),
    },
    body: JSON.stringify({ quantity }),
  }).then(safeJson);

  return getCart();
};

export const removeCartItem = async (item) => {
  if (!hasApiSession() || !item.cartItemId) {
    return removeGuestCartItem(item.key);
  }

  await fetch(`${API_BASE_URL}/cart/items/${item.cartItemId}`, {
    method: "DELETE",
    headers: buildAuthHeaders(),
  }).then(safeJson);

  return getCart();
};

export const clearCart = async () => {
  if (!hasApiSession()) return clearGuestCart();

  await fetch(`${API_BASE_URL}/cart`, {
    method: "DELETE",
    headers: buildAuthHeaders(),
  }).then(safeJson);

  return getCart();
};

export const syncGuestCart = async () => {
  if (!hasApiSession()) return getGuestCartItems();

  const guestItems = getGuestCartItems();
  if (guestItems.length === 0) return getCart();

  const items = await Promise.all(
    guestItems.map(async (item) => {
      const product = item.product?.slug ? await getProductBySlug(item.product.slug) : item.product;
      return {
        productId: product?.id || item.productId,
        size: item.size,
        quantity: item.quantity,
      };
    })
  );

  await fetch(`${API_BASE_URL}/cart/sync`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...buildAuthHeaders(),
    },
    body: JSON.stringify({ items }),
  }).then(safeJson);

  clearGuestCart();
  return getCart();
};
