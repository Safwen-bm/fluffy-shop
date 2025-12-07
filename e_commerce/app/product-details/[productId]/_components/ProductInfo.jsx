// app/product-details/[productId]/_components/ProductInfo.jsx
'use client';

import { BadgeCheck, Truck, Heart, ShoppingCart, Sparkles } from 'lucide-react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useCart } from '../../../_context/CartProvider';

export default function ProductInfo({ product }) {
  const { user } = useUser();
  const router = useRouter();
  const { addToCart } = useCart();

  const handleAddToCart = async () => {
    if (!user) {
      router.push('/sign-in');
      return;
    }
    await addToCart(product);
  };

  return (
    <div className="space-y-8">
      {/* Title */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          {product.title}
        </h1>
        <p className="text-lg text-gray-600 mt-2">{product.category}</p>
      </div>

      {/* Price */}
      <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-700">
        ${Number(product.price).toLocaleString()}
      </div>

      {/* Description */}
      <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
        {product.description?.[0]?.children?.[0]?.text || "This beautiful companion is healthy, happy, and ready for a loving home."}
      </p>

      {/* Trust Icons */}
      <div className="flex flex-wrap gap-6 py-6">
        <div className="flex items-center gap-3">
          <BadgeCheck className="w-8 h-8 text-green-600" />
          <span className="font-medium">Fully Vaccinated</span>
        </div>
        <div className="flex items-center gap-3">
          <Truck className="w-8 h-8 text-purple-600" />
          <span className="font-medium">Free VIP Delivery</span>
        </div>
        <div className="flex items-center gap-3">
          <Heart className="w-8 h-8 text-pink-600 fill-pink-600" />
          <span className="font-medium">Lifetime Support</span>
        </div>
      </div>

      {/* Add to Cart Button — Perfect Size */}
      <button
        onClick={handleAddToCart}
        className="group relative w-full md:w-auto px-12 py-5 text-2xl font-bold text-white bg-gradient-to-r from-pink-600 to-purple-700 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-4 overflow-hidden"
      >
        <ShoppingCart className="w-8 h-8 group-hover:rotate-12 transition" />
        Add to Cart
        <Sparkles className="w-8 h-8 opacity-0 group-hover:opacity-100 transition" />
        <div className="absolute inset-0 bg-white/20 blur-xl group-hover:blur-2xl transition"></div>
      </button>

      {/* Final Trust Line */}
      <p className="text-center text-gray-600 pt-6 flex items-center justify-center gap-2">
        <Heart className="w-6 h-6 text-pink-600 fill-pink-600" />
        Trusted by over 10,000 happy families
        <Heart className="w-6 h-6 text-pink-600 fill-pink-600" />
      </p>
    </div>
  );
}