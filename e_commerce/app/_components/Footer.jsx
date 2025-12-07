// app/_components/Footer.jsx
import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Heart, PawPrint } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-pink-50 via-purple-50 to-white border-t-8 border-pink-200 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">

          {/* Left: Brand + Message */}
          <div className="space-y-6">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="p-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full shadow-2xl">
                <PawPrint className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-black bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text text-transparent">
                FluffyShop
              </h2>
            </div>
            <p className="text-lg text-gray-700 max-w-md mx-auto md:mx-0">
              Premium companions for extraordinary families. Every animal deserves love — and every family deserves the best.
            </p>
            <div className="flex justify-center md:justify-start gap-3">
              <Heart className="w-7 h-7 text-red-500 fill-red-500 animate-pulse" />
              <Heart className="w-7 h-7 text-pink-500 fill-pink-500 animate-pulse delay-100" />
              <Heart className="w-7 h-7 text-purple-500 fill-purple-500 animate-pulse delay-200" />
            </div>
          </div>

          {/* Center: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Explore</h3>
            <div className="grid grid-cols-2 gap-4 text-lg">
              {['Home', 'Animals', 'Toys', 'About'].map((link) => (
                <Link
                  key={link}
                  href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                  className="text-gray-600 hover:text-pink-600 font-medium transition flex items-center justify-center gap-2 group"
                >
                  <PawPrint className="w-4 h-4 text-pink-400 group-hover:scale-125 transition" />
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: SafOne Branding */}
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-4">Made with blood, sweat & love by</p>
              <div className="inline-block p-6 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                <h3 className="text-4xl font-black text-white tracking-wider">SafOne</h3>
                <p className="text-pink-100 text-sm mt-1">Full-Stack Animal Lover</p>
              </div>

              <div className="flex justify-center gap-6 mt-8">
                <Link
                  href="https://github.com/Safwen-bm"
                  target="_blank"
                  className="p-4 bg-black rounded-2xl hover:scale-125 transition shadow-2xl"
                >
                  <Github className="w-8 h-8 text-white" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/safwen-ben-mabrouk-494721362/"
                  target="_blank"
                  className="p-4 bg-blue-600 rounded-2xl hover:scale-125 transition shadow-2xl"
                >
                  <Linkedin className="w-8 h-8 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center mt-16 pt-8 border-t-2 border-pink-200">
          <p className="text-gray-600">
            © {new Date().getFullYear()} <span className="font-bold text-pink-600">FluffyShop</span> • 
            Built with <Heart className="w-5 h-5 inline text-red-500 fill-red-500" /> by 
            <span className="font-bold text-purple-600"> SafOne</span>
          </p>
        </div>
      </div>
    </footer>
  );
}