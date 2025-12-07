// app/pages/about/About.jsx
import Link from 'next/link';
import { Heart, Sparkles, Shield, Package, Star } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50/50 via-white to-purple-50/30 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-7xl md:text-9xl font-black text-gray-900 mb-8">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-pink-700">
              Story
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We don’t just sell pets — we create lifelong companions for extraordinary families.
          </p>
          <Sparkles className="w-20 h-20 text-purple-600 mx-auto mt-10 animate-pulse" />
        </div>

        {/* Founder Message */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 md:order-1">
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-12 shadow-2xl">
              <h2 className="text-5xl font-black text-gray-900 mb-6">
                From One Pet Lover<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-700">
                  to Millions
                </span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Hi, I’m <span className="font-bold text-pink-600">SafOne</span> — founder of FluffyShop. 
                I started this because I believe every animal deserves a palace, not a cage.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Every bunny, kitten, puppy here is raised with love, vetted by experts, and delivered with care — 
                because your family deserves nothing less than perfection.
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full shadow-xl"></div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">SafOne</p>
                  <p className="text-purple-600 font-semibold">Founder & Chief Pet Officer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-purple-300 rounded-3xl blur-3xl opacity-50"></div>
              <div className="relative bg-gray-200 border-2 border-dashed rounded-3xl h-96 flex items-center justify-center">
                <Heart className="w-32 h-32 text-pink-500 fill-pink-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Our Promise */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-black text-gray-900 mb-16">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-pink-600">Promise</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-10">
            {[
              { icon: Shield, title: "100% Health Guarantee", desc: "Full vet records + 30-day warranty" },
              { icon: Package, title: "VIP Delivery", desc: "Private, climate-controlled transport" },
              { icon: Heart, title: "Lifetime Support", desc: "We’re here for you forever" },
              { icon: Star, title: "Ethical Only", desc: "Licensed breeders, no mills" },
            ].map((item, i) => (
              <div key={i} className="bg-white/90 backdrop-blur rounded-3xl p-8 shadow-xl border border-pink-100">
                <item.icon className="w-16 h-16 text-pink-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-5xl font-black text-gray-900 mb-8">
            Ready to Meet Your New Best Friend?
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/animals"
              className="px-16 py-8 text-3xl font-bold text-white bg-gradient-to-r from-pink-600 to-purple-700 rounded-full shadow-2xl hover:shadow-pink-600/50 transform hover:scale-110 transition-all"
            >
              Browse Animals
            </Link>
            <Link
              href="/toys"
              className="px-16 py-8 text-3xl font-bold text-gray-800 bg-white rounded-full shadow-2xl border-4 border-gray-200 hover:border-purple-400 transform hover:scale-110 transition-all"
            >
              Shop Toys & Food
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}