// app/pages/toys/Toys.jsx
"use client";

import { useEffect, useState } from 'react';
import ProductApis from '../_utils/ProductApis';
import ToyItem from '../_components/ToyItem';  // ← NOW USING TOYITEM
import { Search, Package, Sparkles, Star } from 'lucide-react';

export default function Toys() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    ProductApis.getLatestProducts().then(res => {
      const all = res.data.data || [];
      const toysAndFood = all.filter(p => {
        const cat = p.category?.toLowerCase();
        return cat?.includes('toy') || cat?.includes('food') || cat?.includes('accessory');
      });
      setProducts(toysAndFood);
      setFiltered(toysAndFood);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    const result = products.filter(p =>
      p.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFiltered(result);
  }, [searchTerm, products]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50/50 to-white pt-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="h-16 bg-gray-200 rounded-full w-96 mx-auto mb-8 animate-pulse"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-3xl h-96 animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 via-white to-purple-50/30 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero Title */}
        <div className="text-center mb-16">
          <div className="flex justify-center gap-6 mb-8">
            <Package className="w-16 h-16 text-amber-600 animate-bounce" />
            <Sparkles className="w-14 h-14 text-purple-600 animate-spin-slow" />
            <Star className="w-16 h-16 text-yellow-500 fill-yellow-500 animate-pulse" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-6">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-pink-600">
              Toys & Food
            </span>
          </h1>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
            Designer toys, gourmet nutrition, and luxury accessories — because your pet deserves the best.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-8 h-8 text-amber-600" />
            <input
              type="text"
              placeholder="Search toys, treats, beds..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-20 pr-8 py-6 text-xl rounded-full shadow-2xl border-4 border-amber-200 focus:border-amber-400 focus:outline-none transition"
            />
          </div>
        </div>

        {/* Count */}
        <p className="text-center text-xl text-gray-600 mb-12">
          Showing <span className="font-bold text-amber-600">{filtered.length}</span> premium items
        </p>

        {/* Grid — NOW USING TOYITEM */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <Package className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <p className="text-3xl text-gray-500">No items found</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {filtered.map((product) => (
              <ToyItem key={product.documentId} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}