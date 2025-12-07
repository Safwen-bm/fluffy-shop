// app/_context/CartProvider.jsx
'use client';

import { createContext, useState, useEffect, useContext } from 'react';
import { useUser } from '@clerk/nextjs';
import CartApis from '../_utils/CartApis';

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const { user } = useUser();

  const refreshCart = async () => {
    if (!user) {
      setCart([]);
      return;
    }

      try {
      const res = await CartApis.getUserCartItems(user.primaryEmailAddress.emailAddress);
      const items = res?.data?.data || [];

      const formattedCart = items.flatMap(item => {
        // YOUR DATA: products are directly on the cart item (not in attributes)
        const products = item.products || [];

        return products.map(prod => ({
          strapiCartItemId: item.id,
          product: {
            id: prod.id,
            documentId: prod.documentId,
            title: prod.title,
            price: prod.price,
            category: prod.category,
            banner: prod.banner || null
          }
        }));
      }).filter(item => item.product);

      console.log("CART LOADED:", formattedCart);
      setCart(formattedCart);
    } catch (err) {
      console.error("Failed to load cart:", err);
      setCart([]);
    }
  };

  useEffect(() => {
    if (user) refreshCart();
  }, [user]);

  const addToCart = async (product) => {
    // product can be numeric id (product.id) or documentId string (product.documentId)
    if (!user || !product) return false;

    const identifier = product.id ?? product.documentId ?? null;
    if (!identifier) {
      console.error('Product identifier missing for addToCart', product);
      return false;
    }

    try {
      await CartApis.addToCart(
        identifier,
        user.primaryEmailAddress.emailAddress,
        user.fullName || user.firstName || "User"
      );
      await refreshCart();
      return true;
    } catch (err) {
      console.error("Add to cart failed:", err.response?.data || err);
      return false;
    }
  };

  const removeFromCart = async (productId) => {
    try {
      if (!user) return;
      await CartApis.removeProductFromCart(productId, user.primaryEmailAddress.emailAddress);
      await refreshCart();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <CartContext.Provider value={{
      cart,
      setCart,
      addToCart,
      removeFromCart,
      refreshCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
