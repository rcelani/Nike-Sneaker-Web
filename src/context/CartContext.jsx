import React, { useEffect, useMemo, useState } from "react";

import { CartContext } from "./cartStore";
import {
  addCartItem,
  clearCart as clearCartService,
  getCart,
  getGuestCartItems,
  removeCartItem,
  updateCartItemQuantity,
} from "../services/cartService";

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(getGuestCartItems);
  const [isCartLoading, setIsCartLoading] = useState(false);

  const refreshCart = async () => {
    setIsCartLoading(true);
    try {
      const cartItems = await getCart();
      setItems(cartItems);
      return cartItems;
    } finally {
      setIsCartLoading(false);
    }
  };

  useEffect(() => {
    refreshCart().catch(() => setItems(getGuestCartItems()));
  }, []);

  const addToCart = async (product, size, quantity = 1) => {
    if (!product || !size) return;

    const nextItems = await addCartItem(product, size, quantity);
    setItems(nextItems);
  };

  const updateQuantity = async (key, quantity) => {
    const item = items.find((candidate) => candidate.key === key);
    if (!item) return;

    const nextItems = await updateCartItemQuantity(item, quantity);
    setItems(nextItems);
  };

  const removeFromCart = async (key) => {
    const item = items.find((candidate) => candidate.key === key);
    if (!item) return;

    const nextItems = await removeCartItem(item);
    setItems(nextItems);
  };

  const clearCart = async () => {
    const nextItems = await clearCartService();
    setItems(nextItems);
  };

  const cartCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () =>
      items.reduce(
        (total, item) => total + Number(item.product?.price || 0) * item.quantity,
        0
      ),
    [items]
  );

  const value = {
    items,
    cartCount,
    subtotal,
    isCartLoading,
    refreshCart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
