// app/cart/page.jsx
'use client';

import { useCart } from '../_context/CartProvider';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, ShoppingBag } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + (Number(item.product?.price) || 0), 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50/50 to-white pt-24 pb-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <ShoppingBag className="w-32 h-32 text-gray-300 mx-auto mb-8" />
          <h1 className="text-5xl font-black text-gray-800 mb-4">Your cart is empty</h1>
          <p className="text-xl text-gray-600 mb-10">Time to adopt your new best friend!</p>
          <Link
            href="/animals"
            className="inline-block px-16 py-6 bg-gradient-to-r from-pink-600 to-purple-700 text-white text-2xl font-bold rounded-full shadow-2xl hover:shadow-pink-600/50 transform hover:scale-105 transition"
          >
            Shop Animals
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50/30 to-white pt-20 pb-32">
      <div className="max-w-5xl mx-auto px-6">

        {/* Title — Closer to top */}
        <h1 className="text-5xl md:text-7xl font-black text-center text-gray-900 mb-16">
          Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-700">Cart</span>
        </h1>

        {/* Cart Container */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-pink-100">
          <div className="p-8 lg:p-12">

            {/* Cart Items — ALL SAME HEIGHT */}
            <div className="space-y-8">
              {cart.map((item) => {
                // Safe image URL
                let imgUrl = "/placeholder.png";
                const banner = item.product?.banner;
                if (banner?.url) {
                  imgUrl = banner.url.startsWith("http") ? banner.url : `http://127.0.0.1:1337${banner.url}`;
                } else if (banner?.data?.attributes?.url) {
                  const u = banner.data.attributes.url;
                  imgUrl = u.startsWith("http") ? u : `http://127.0.0.1:1337${u}`;
                }

                return (
                  <div
                    key={item.strapiCartItemId}
                    className="flex items-center gap-8 py-8 border-b last:border-0 border-gray-100"
                  >
                    {/* Fixed Size Image */}
                    <div className="w-32 h-32 flex-shrink-0 relative rounded-2xl overflow-hidden shadow-xl border-4 border-pink-100">
                      <Image
                        src={imgUrl}
                        alt={item.product.title}
                        fill
                        className="object-cover"
                        sizes="128px"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900">{item.product.title}</h3>
                      <p className="text-lg text-gray-600 mt-1">{item.product.category}</p>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-700">
                        ${Number(item.product.price).toFixed(2)}
                      </p>
                    </div>

                    {/* Delete Button */}
                    <button
                      onClick={() => removeFromCart(item.strapiCartItemId)}
                      className="ml-8 p-4 bg-red-100 rounded-full hover:bg-red-200 transition transform hover:scale-110"
                    >
                      <Trash2 className="w-7 h-7 text-red-600" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Total & Checkout */}
            <div className="mt-16 pt-10 border-t-4 border-pink-200">
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-5xl font-black text-gray-900">Total</h2>
                <p className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-700">
                  ${total.toFixed(2)}
                </p>
              </div>

              <Link
                href="/checkout"
                className="block text-center py-8 text-4xl font-black text-white bg-gradient-to-r from-pink-600 to-purple-700 rounded-3xl shadow-2xl hover:shadow-pink-600/50 transform hover:scale-105 transition"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}