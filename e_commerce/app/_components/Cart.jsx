// app/_components/Cart.jsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../_context/CartProvider';
import { Trash2 } from 'lucide-react';

export default function Cart({ onClose }) {
  const { cart, removeFromCart } = useCart(); 

  const total = cart.reduce(
    (sum, item) => sum + (Number(item.product?.price) || 0),
    0
  );

  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm"
      ></div>

      {/* CART SIDEBAR */}
      <div className="fixed top-0 right-0 w-96 h-full bg-white z-50 rounded-l-3xl shadow-2xl p-6 flex flex-col transform transition-transform duration-300">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900 font-bold text-xl"
          >
            ✕
          </button>
        </div>

        {/* CART ITEMS */}
        {cart.length === 0 ? (
          <p className="text-center text-gray-500 mt-20 text-sm">
            Your cart is empty
          </p>
        ) : (
          <ul className="flex-1 overflow-y-auto space-y-4">
            {cart.map((item) => {
              let imgUrl = "/placeholder.png";
              const banner = item.product?.banner;

              if (banner) {
                if (typeof banner.url === "string") {
                  imgUrl = banner.url.startsWith("http")
                    ? banner.url
                    : `http://127.0.0.1:1337${banner.url}`;
                }
                if (banner.data?.attributes?.url) {
                  const u = banner.data.attributes.url;
                  imgUrl = u.startsWith("http")
                    ? u
                    : `http://127.0.0.1:1337${u}`;
                }
              }

              if (typeof imgUrl !== "string" || imgUrl.length < 4)
                imgUrl = "/placeholder.png";
              if (!imgUrl.startsWith("http") && !imgUrl.startsWith("/"))
                imgUrl = "/placeholder.png";

              return (
                <li
                  key={item.strapiCartItemId}
                  className="flex gap-4 items-center p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition shadow-sm"
                >
                  {/* FIXED SIZE IMAGE */}
                  <div className="w-16 h-16 flex-shrink-0 relative">
                    <Image
                      src={imgUrl}
                      alt={item.product?.title || "product"}
                      fill
                      className="rounded-xl object-cover shadow-md"
                    />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-base font-bold text-gray-900 line-clamp-1">
                      {item.product.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      ${Number(item.product.price).toFixed(2)}
                    </p>
                  </div>

                  {/* DELETE BUTTON */}
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="p-2 bg-red-100 rounded-full hover:bg-red-200 transition"
                  >
                    <Trash2 className="w-5 h-5 text-red-600" />
                  </button>

                </li>
              );
            })}
          </ul>
        )}

        {/* FOOTER */}
        {cart.length > 0 && (
          <div className="mt-6 border-t pt-4 space-y-3">
            {/* TOTAL */}
            <div className="flex justify-between items-center text-gray-900 font-bold text-lg">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <Link
              href="/cart"
              onClick={onClose}
              className="block text-center text-sm font-bold text-purple-700 hover:text-purple-900 transition"
            >
              View full cart ({cart.length})
            </Link>

            <Link
              href="/checkout"
              onClick={onClose}
              className="block text-center py-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-700 text-white font-bold shadow-lg hover:shadow-pink-600/40 transform hover:scale-105 transition"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
