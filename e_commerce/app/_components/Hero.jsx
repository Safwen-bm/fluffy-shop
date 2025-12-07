// app/_components/Hero.jsx
import React from 'react';
import Link from 'next/link';
import { ShoppingBag, Sparkles, ArrowRight, Package, PawPrint } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white via-pink-50/30 to-purple-50/20 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-purple-300 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        
        {/* Logo + Title — Matches Header Perfectly */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition"></div>
              <div className="relative bg-white rounded-full p-5 shadow-2xl border-4 border-pink-200">
                <PawPrint className="w-16 h-16 text-pink-600" strokeWidth={2.5} />
              </div>
            </div>
            <h1 className="text-7xl md:text-9xl font-black tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-pink-700">
                FluffyShop
              </span>
            </h1>
          </Link>
        </div>

        {/* Professional Headline */}
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          Premium Animals &<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-700">
            Luxury Pet Essentials
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-12 leading-relaxed">
          Hand-selected healthy companions • Premium nutrition • Designer toys • Lifetime care support
        </p>

        {/* Clean Professional Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-16">
          <Link
            href="/animals"
            className="group relative px-12 py-6 text-2xl font-bold text-white bg-gradient-to-r from-pink-600 to-purple-700 rounded-full shadow-2xl hover:shadow-pink-600/40 transform hover:scale-105 transition-all duration-300 flex items-center gap-4"
          >
            <ShoppingBag className="w-10 h-10" />
            Shop Animals
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition" />
          </Link>

          <Link
            href="/toys"
            className="px-12 py-6 text-2xl font-bold text-gray-800 bg-white/95 backdrop-blur-xl rounded-full shadow-2xl border-4 border-gray-200 hover:border-purple-300 transform hover:scale-105 transition-all duration-300"
          >
            Toys & Nutrition
          </Link>
        </div>

        {/* Trust Indicators — Clean & Professional */}
        <div className="flex flex-wrap justify-center gap-10 text-gray-700">
          <div className="flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-purple-600" />
            <span className="font-semibold">Veterinarian Approved</span>
          </div>
          <div className="flex items-center gap-3">
            <Package className="w-7 h-7 text-pink-600" />
            <span className="font-semibold">Free Premium Delivery</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-2xl">★★★★★</div>
            <span className="font-semibold">Trusted by 10,000+ Families</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}