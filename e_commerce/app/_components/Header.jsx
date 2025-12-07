// app/_components/Header.jsx
'use client';

import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUser, UserButton } from '@clerk/nextjs';
import { ShoppingCart, Menu, PawPrint, Heart } from 'lucide-react';
import { useCart } from '../_context/CartProvider';
import Cart from './Cart';

export default function Header() {
  const { cart } = useCart();
  const { user } = useUser();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  if (pathname.includes('/sign-in') || pathname.includes('/sign-up')) return null;

  return (
    <>
      {/* Floating Cute Header */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-6">
        <div className="backdrop-blur-xl bg-white/90 shadow-2xl rounded-full border-4 border-pink-200 px-8 py-4 flex items-center justify-between">
          {/* Logo + Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition"></div>
              <div className="relative bg-white rounded-full p-3 shadow-lg">
                <PawPrint className="w-8 h-8 text-pink-500" strokeWidth={3} />
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              FluffyShop
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {['Home', 'Animals', 'Toys', 'About'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-gray-700 font-medium hover:text-pink-600 transition relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <button
              onClick={() => setCartOpen(!cartOpen)}
              className="relative p-3 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full shadow-lg hover:scale-110 transition transform"
            >
              <ShoppingCart className="w-6 h-6 text-white" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                  {cart.length}
                </span>
              )}
            </button>

            {/* User */}
            {user ? (
              <div className="flex items-center gap-3">
                <UserButton />
              </div>
            ) : (
              <Link
                href="/sign-in"
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition"
              >
                Join the Pack
              </Link>
            )}

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-3 bg-gray-100 rounded-full"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mt-4 backdrop-blur-xl bg-white/95 rounded-3xl shadow-2xl p-6 border-4 border-pink-200">
            {['Home', 'Animals', 'Toys', 'About'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="block py-3 text-lg font-medium text-gray-700 hover:text-pink-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Cart Sidebar */}
      {cartOpen && <Cart onClose={() => setCartOpen(false)} />}

      {/* Top padding so content isn't hidden under header */}
      <div className="h-32" />
    </>
  );
}