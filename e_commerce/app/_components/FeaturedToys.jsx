// app/_components/FeaturedToys.jsx
"use client";

import { useEffect, useState } from 'react';
import ProductApis from '../_utils/ProductApis';
import ToyItem from './ToyItem';
import Link from 'next/link';

export default function FeaturedToys() {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ProductApis.getLatestProducts().then(res => {
      const all = res.data.data || [];
      const toyProducts = all
        .filter(p => {
          const cat = p.category?.toLowerCase();
          return cat?.includes('toy') || cat?.includes('food') || cat?.includes('accessory');
        })
        .slice(0, 4); 
      setToys(toyProducts);
      setLoading(false);
    });
  }, []);

  if (loading || toys.length === 0) return null;

  return (
    <section className="py-24 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
          Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Toys & Treats</span>
        </h2>
        <p className="text-xl text-gray-600 mb-16">Because playtime should be legendary</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {toys.map((toy) => (
            <ToyItem key={toy.documentId} product={toy} />
          ))}
        </div>

        <Link
          href="/toys"
          className="mt-12 inline-block px-12 py-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-2xl font-bold rounded-full shadow-2xl hover:shadow-amber-500/50 transform hover:scale-110 transition"
        >
          Shop All Toys & Food
        </Link>
      </div>
    </section>
  );
}